contract creditCommons {

        // @title creditCommons
        // @author Rogelio SEGOVIA; Matthew Slatter	
        // @notice register 
		// @param sysAdmin is the system administrator address
        // @param baseUnits is the number of units before the comma 
		address public sysAdmin;
	
	// @notice at creating the contract we declare the general variables
	function creditCommons() {
				// @param the intitial sysAdmin is the address from which the contract is created
				sysAdmin = msg.sender;
				// @notice we work with cents. Rounded to integer cents
        }
	
	event NewGroup(address indexed _creator, uint indexed _groupIDN, string _groupNameN, uint _NGTimeStamp);
	event ModifyGroup (address indexed _modifier, uint indexed _groupIDM, uint _MGTimeStamp);
	event NewMember (address indexed memberAddressN, string memberAliasN, uint _NMTimeStamp);
	event JoinGroup (address _memberJG, string _aliasJG, uint _groupJG, string _groupNameJG, uint _JGTimeStamp);
	event ResignGroup (address _memberRG, string _aliasRG, uint _groupRG, string _groupNameRG, uint _RGTimeStamp);
	event Transaction (address indexed _sender, uint _senderAmount, address indexed _receiver, int _recieverAmount, uint _tTimeStamp);
	event PostMember (address indexed _senderPost, address indexed _receiverPost, string indexed _issuePost, string _contentPost, uint _PostTimeStamp);
	event PostGroup (address indexed _senderPost, uint indexed _receiverPost, string indexed _issuePost, string _contentPost, uint _PostTimeStamp);

	// @notice function to name a new sysAdmin
    function transferSysAdmin(address newSysAdmin) {
		if (msg.sender == sysAdmin) {
        sysAdmin = newSysAdmin;
		}
    }
	
	// @notice create a structure to file all groups and their parameters
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
	mapping(uint => groups) group;
	
	// @notice create an index of exchanges for listing purposes
	uint[] groupIndex;
	
	// @notice A group can be created by any account in the system that is not in a group. A group is also an account and is identified by its account number. A new group therefore contains two accounts: its own, and its creators.
	function createGroup (string _groupName) {
		// @notice the member exists in the system and the member is not in a group
		if ((bytes(member[msg.sender].alias).length != 0) && (member[msg.sender].group == 0)) {
					uint groupID = now;		
					group[groupID].owner = msg.sender;
					group[groupID].groupName = _groupName;
					member[msg.sender].group = groupID;
					groupIndex [groupIndex.length ++] = groupID;
					NewGroup(msg.sender, groupID, _groupName, now);
				}
	}
	
	// @notice transfer group ownership. Old owner or sysAdmin can transfer group ownership to another member of the group
	function transferGroupOwner (uint _groupID, address _newOwner) {
		if (((msg.sender == group[_groupID].owner) || (msg.sender == sysAdmin)) && (member[_newOwner].group == _groupID)) {
        		group[_groupID].owner = _newOwner;
				ModifyGroup (msg.sender, _groupID, now);
		}
	}
		
	// @notice the owner can modify one, several or all parameters of a group. If one parameter is left empty, it remains the same. Only the exchange coordinator can change its parameters
	function modifyGroup (uint _groupID, string _groupName, string _currencyName, uint _rate, uint _debitLimit, uint _creditLimit, bool _open) {
		        if (msg.sender == group[_groupID].owner) {
				// @notice if a value for a parameter is given, change the parameter, if empty retain old value
  				if (bytes(_groupName).length != 0) {group[_groupID].groupName = _groupName;}
				if (bytes(_currencyName).length != 0) {group[_groupID].currencyName = _currencyName;}
				if (_rate != 0) {group[_groupID].rate = _rate;}	
				if (_debitLimit != 0) {group[_groupID].debitLimit = _debitLimit;}
				if (_creditLimit!= 0) {group[_groupID].creditLimit = _creditLimit;}
				if (_open == true) {group[_groupID].open = true;}	
				ModifyGroup (msg.sender, _groupID, now);
					}
	}

	function getGroupParameters (uint _groupG) constant returns (address _ownerG, string _groupNameG, string _currencyNameG, uint _rateG, uint _debitLimitG, uint _creditLimitG, bool _openG) {
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
	
	// @notice create a structure to file all members
	struct members {
		// @parameter key ID parameters
		uint memberID;
		uint group;	
		// @parameter balance is expressed in the member currency. Can only be modified by system operations
		int balance;
		uint mDebitLimit;
		uint mCreditLimit;
		// parameter additional information. Can be extended
		string alias;
	}
	
	// @notice map the members structure into an array indexed by the members ethereum address (another option is to struture them by their CES Member ID)
	mapping(address => members) public member;
	
	// @notice create an index of members for listing purposes
	address[] memberIndex;
	
	// @notice anybody with an ethereum account can register in the system
	function registerSystem (string _alias) {
		// @notice the caller provides a valid alias
		if (bytes(_alias).length != 0) {
		// @notice the caller is not already the system
			if (bytes(_alias).length == 0) {
			member[msg.sender].memberID = now;
			member[msg.sender].alias = _alias;
			member[msg.sender].group = 0;
			delete member[msg.sender].balance;
		NewMember (msg.sender, _alias, now);
				}
			}
		}

	function modifyAlias(string _newAlias) {
			member[msg.sender].alias = _newAlias;
		}
	
	// @notice anybody in the system can join a group
	function joinGroup (uint _groupJ) {
			// @notice the member is in the system
			if (bytes(member[msg.sender].alias).length != 0) {
				// @notice the group exists
				if (bytes(group[_groupJ].groupName).length != 0){
					// @notice the member is not in a group
					if (member[msg.sender].group == 0)
					member[msg.sender].group = _groupJ;
					member[msg.sender].balance = 0;
					member[msg.sender].mDebitLimit = group[_groupJ].debitLimit;
					member[msg.sender].mCreditLimit = group[_groupJ].creditLimit;
			JoinGroup (msg.sender, member[msg.sender].alias, _groupJ, group[_groupJ].groupName, now);			
			}	
		}
	}
	
	function resignGroup (uint _groupR) {
			// @notice the member belongs the group 
			if (_groupR == member[msg.sender].group) {
				// @notice the member is not owner of the group
				if (group[member[msg.sender].group].owner != msg.sender) {
					// @notice the member balance is zero
					if (member[msg.sender].balance == 0) {
						delete member[msg.sender].group;
						ResignGroup (msg.sender, member[msg.sender].alias, _groupR, group[_groupR].groupName, now);						
					}					
				}
			}
	}
	
	function modifyMemberLimits (address _groupMember, uint _newDebitLimit, uint _newCreditLimit) {
		// @notice only the group owner can do 
		if (msg.sender == group[member[msg.sender].group].owner) {
					member[_groupMember].mDebitLimit = _newDebitLimit;
					member[_groupMember].mCreditLimit = _newCreditLimit;
		}
	}
	
	function getMemberParameters (address _memberG) constant returns (uint _groupG, string _groupNameG, int _balanceG, string _aliasG) {
		_groupG = member[_memberG].group;
		_groupNameG = group[_groupG].groupName;
		_balanceG = member[_memberG].balance;
		_aliasG = member[_memberG].alias;
	}
	
		
	function getMPbyIndex (uint _mIndex) {
		if (_mIndex < memberIndex.length ++) {
		getMemberParameters (memberIndex[_mIndex]);
			}
	}
	
	// @notice funtion transfer form the member of the same exchange or to the member of another exchange. The amount is expressed in the sender currency
	function transfer (address _to, uint _fromAmount) {		
		// @notice the given amount is converted to cents in order to work with only integers
		int _intFromAmount = int (_fromAmount);
		// @the amount is converted to the receiver currency
		int _rateSender = int (group[member[msg.sender].group].rate);
		int _rateReceiver = int (group[member[_to].group].rate);
		int _toAmount = _intFromAmount * _rateSender/ _rateReceiver;
		int _intFromDLimit = - int(member[msg.sender].mDebitLimit);
		int _intToCLimit = int(member[msg.sender].mCreditLimit);
		// @notice if the limits ar not surpassed, we proceed with the transfer
		if (((member[msg.sender].balance - _intFromAmount) > _intFromDLimit) && ((member[_to].balance + _toAmount) < _intToCLimit)) {
		member[msg.sender].balance -= _intFromAmount;
		member[_to].balance += _toAmount;
		}
		Transaction (msg.sender, _fromAmount, _to, _toAmount, now);
	}
	
	// @notice function to post messages to members
	function postMember (address _to, string _issue, string _text) {
		PostMember (msg.sender, _to, _issue, _text, now);
	}
	
	// @notice function to post messages to members
	function postGroup (uint _to, string _issue, string _text) {
		PostGroup (msg.sender, _to, _issue, _text, now);
	}
		
}

