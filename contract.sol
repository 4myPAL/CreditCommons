contract creditCommons {

        // @title creditCommons
        // @author Rogelio SEGOVIA; Matthew Slatter	
        // @notice register 
		// @param sysAdmin is the system administrator address
        // @param baseUnits is the number of units before the comma 
		address public sysAdmin;
        uint public baseUnits;
	
	// @notice at creating the contract we declare the general variables
	function creditCommons() {
				// @param the intitial sysAdmin is the address from which the contract is created
				sysAdmin = msg.sender;
				// @notice we work with cents. Rounded to integer cents
                baseUnits = 100;
        }
	
	event NewGroup(address indexed _groupAddressN, string _groupNameN);
	event ModifyGroup (address indexed _groupAddressM, address indexed _ownerAddressM, string _groupNameM, string _currencyNameM, uint _rateM, uint _debitLimitM, uint _creditLimitM, bool _openM);
	event NewMember (address indexed memberAddressN, string memberAliasN);
	event Transaction (address indexed from, uint fromAmount, address indexed to, int toAmount);

	// @notice function to name a new sysAdmin
    function transferSysAdmin(address newSysAdmin) {
		if (msg.sender == sysAdmin) {
        sysAdmin = newSysAdmin;
		}
    }
	
	// @notice create a structure to file all group and their parameters
	struct groups {
		string groupName;
		string currencyName;
		address owner;
		// @parameter the exchange rate against the base currency is given in percentage (100 = 1/1)
		uint rate;
		uint debitLimit;
		uint creditLimit;	
		bool open;
	}
	
	// @notice map the exchanges structure into an array indexed by a string (the string we use is the CES Exchange ID)
	mapping(address => groups) group;
	
	// @notice create an index of exchanges for listing purposes
	string[] groupIndex;
	
	// @notice A group can be created by any account that is not in a group. A group is also an account and is identified by its account number. A new group therefore contains two accounts: its own, and its creators.
	function createGroup (address _owner, string _groupName) {
		// @notice the user exists in the system and the user is not in a group
		if ((bytes(user[msg.sender].alias) != 0) && (bytes(user[msg.sender].group) == 0)) {
					group[msg.sender].owner = msg.sender;
					group[msg.sender].groupName = _groupName;
					user[_owner].group = msg.sender;
					groupIndex [groupIndex.length ++] = msg.sender;
					NewGroup(msg.sender, _groupName);
				}
	}
	
	// @notice transfer group ownership. Old owner or sysAdmin can transfer group ownership to another member of the group
	function transferGroupOwner (address _group, address _newOwner) {
		if (((msg.sender == group[_group].owner) || (msg.sender == sysAdmin)) && (user[_newOwner].group = _group)) {
        		group[_group].owner = _newOwner;
		}
	}
		
	// @notice the owner can modify one, several or all parameters of a group. If one parameter is left empty, it remains the same. Only the exchange coordinator can change its parameters
	function modifyGroup (address _group, string _groupName, string _currencyName, uint _rate, uint _debitLimit, uint _creditLimit, bool _open) {
		        if (msg.sender == group[_group].owner) {
				// @notice if a value for a parameter is given, change the parameter, if empty retain old value
  				if (bytes(_groupName).length != 0) {group[_group].groupName = _groupName;}
				if (bytes(_currencyName).length != 0) {group[_group].currencyName = _currencyName;}
				if (bytes(_rate).length != 0) {group[_group].rate = _rate;}	
				if (bytes(_debitLimit).length != 0) {group[_group].debitLimit = _debitL;}
				if (bytes(_creditLimit).length != 0) {group[_group].creditLimit = _creditL;}
				if (bytes(__open).length != 0) {group[_group].open = _open;}	
					ModifyGroup (_group, group[_group].owner, group[_group].groupName, group[_group].currencyName, group[_group].rate, group[_group].debitLimit, group[_group].creditLimit, group[_group].open);
					}
	}

	function getGroupParameters (address _groupG) constant returns (address _ownerG, string _groupNameG, string _currencyNameG, uint _rateG, uint _debitLimitG, uint _creditLimitG, bool _openG) {
		_ownerG = group[_groupG].owner;
		_groupNameG = group[_groupG].groupName;
		_currencyNameG = group[_groupG].currencyName;
		_rateG = group[_groupG].rate;
		_debitLimitG = group[_groupG].debitLimit;
		_creditLimitG = group[_groupG].creditLimit;
		_openG = group[_groupG].open;
	}
	
	function getGroupbyIndex (uint _gIndex) {
		if (_gIndex < groupIndex.length ++) {
		getGroupParameters (groupIndex[_gIndex]);
			}
	}
	
	// @notice create a structure to file all users
	struct users {
		// @parameter key ID parameters
		address group;	
		// @parameter balance is expressed in the user currency. Can only be modified by system operations
		int balance;	
		// parameter additional information. Can be extended
		string alias;
	}
	
	// @notice map the users structure into an array indexed by the users ethereum address (another option is to struture them by their CES Member ID)
	mapping(address => users) public user;
	
	// @notice create an index of users for listing purposes
	string[] memberIndex;
	
	// @notice anybody with an ethereum account can register in the system
	function register (string _alias) {
		if (bytes(_alias).length != 0) {
		user[msg.sender].alias = _alias;
		user[msg.sender].group = "";
		user[msg.sender].balance = 0;
		NewMember (msg.sender, _alias);
			}
		}


	function modifyAlias(string _newAlias) {
			user[msg.sender].alias = _newAlias;
		}
	
	function getUserParameters (address g_member) constant returns (string g_CES_ExchID, string g_CES_memberID, string g_alias, int g_balance) {
		g_CES_ExchID = user[g_member].CES_ExchID;
		g_CES_memberID = user[g_member].CES_memberID;
		g_alias = user[g_member].alias;
		g_balance = user[g_member].balance;
	}
	
		function getUPbyIndex (uint _mIndex) {
		if (_mIndex < memberIndex.length ++) {
		getExchangeParameters (exchangeIndex[_mIndex]);
			}
	}
	
	// @notice funtion transfer form the member of the same exchange or to the member of another exchange. The amount is expressed in the sender currency
	function transfer (address _to, uint _fromAmount) {		
		// @notice the given amount is converted to cents in order to work with only integers
		int _frA = int (_fromAmount);
		// @the amount is converted to the receiver currency
		int _exchS = int (exchange[user[msg.sender].CES_ExchID].exchangeBaseCurrency);
		int _exchR = int(exchange[user[_to].CES_ExchID].exchangeBaseCurrency);
		int _toAmount = _frA * _exchS/ _exchR;
		// @notice we find out the sender debit limit and the receiver credit limit at their respective exchange communities
		uint _fromDL = exchange[user[msg.sender].CES_ExchID].debitLimit;
		uint _toCL = exchange[user[_to].CES_ExchID].creditLimit;
		// @notice if the limits ar not surpassed, we proceed with the transfer
		int _fromDLint = - int(_fromDL);
		int _toCLint = int( _toCL);
		if (((user[msg.sender].balance - _frA) > _fromDLint) && ((user[_to].balance + _toAmount) < _toCLint)) {
		user[msg.sender].balance -= _frA;
		user[_to].balance += _toAmount;
		}
		Transaction (msg.sender, _fromAmount, _to, _toAmount);
	}
	
}

