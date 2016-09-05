contract creditCommons {

        // @title creditCommons
        // @author Rogelio SEGOVIA; Matthew Slatter	
		// @param sysAdmin is the system administrator address, the creator of the contract
        // @param baseUnits is the number of units before the comma 
		address public sysAdmin;      
	
	// @notice at creating the contract we declare the general variables
	function creditCommons() {
				// @param the initial sysAdmin is the address from which the contract is created
				sysAdmin = msg.sender;
        }
	
	event NewGroup(address indexed _creator, uint indexed _groupIDN, string _groupNameN, uint _NGTimeStamp);
	event ModifyGroup (address indexed _modifier, uint indexed _groupIDM, string _groupNameM, uint _MGTimeStamp);
	event NewMember (address indexed _memberAddressN, string _memberAliasN, uint _NMTimeStamp);
	event JoinGroup (address _memberJG, string _aliasJG, uint _groupJG, string _groupNameJG, uint _JGTimeStamp);
	event ResignGroup (address _memberRG, string _aliasRG, uint _groupRG, string _groupNameRG, uint _RGTimeStamp);
	event Transaction (address indexed _sender, uint _senderAmount, address indexed _receiver, int _receiverAmount, uint _tTimeStamp);

	// @notice function to name a new sysAdmin
    function transferSysAdmin(address newSysAdmin) {
		if (msg.sender == sysAdmin) {
        sysAdmin = newSysAdmin;
		}
    }

	
	// @notice create a structure to file all members
	struct members {
		// @parameter key ID parameters
		bool isMember;
		string alias;
		string whisperID;
		uint group;	
		bool isIntertrade;
		bool isCommune;
		// @parameter balance is expressed in the member currency. Can only be modified by system operations
		int balance;
		uint mDebitLimit;
		uint mCreditLimit;
	}
	
	// @notice map the members structure into an array indexed by the members ethereum address 
	mapping(address => members) member;
	
	// @notice create an index of members for listing purposes
	address[] memberIndex;
	
	// @notice anybody with an ethereum account can register in the system
	function registerSystem (string _alias, string _whisperID) {
		// @notice the caller provides a valid alias
		if (bytes(_alias).length != 0) {
		// @notice the caller is not already the system
			if (member[msg.sender].isMember != true) {
			member[msg.sender].isMember = true;
			member[msg.sender].alias = _alias;
			member[msg.sender].alias = _whisperID;
			member[msg.sender].group = 0;
			member[msg.sender].isIntertrade = false;
			member[msg.sender].isCommune = false;
			member[msg.sender].balance = 0;
			member[msg.sender].mDebitLimit = 0;
			member[msg.sender].mCreditLimit = 0;
		NewMember (msg.sender, _alias, now);
		memberIndex [memberIndex.length ++] = msg.sender;
				} 
			} 
		}
	
	function modifyMember (string _alias, string _whisperID) {
		if (bytes(_alias).length != 0) {
			if (bytes(_whisperID).length != 0) {
				member[msg.sender].alias = _alias;
				member[msg.sender].alias = _whisperID;
			}
		}
	}
	
	function modifyMemberLimits (address _groupMember, uint _newDebitLimit, uint _newCreditLimit) {
		// @notice only the group commune can do 
		if (msg.sender == group[member[msg.sender].group].commune) {
					member[_groupMember].mDebitLimit = _newDebitLimit;
					member[_groupMember].mCreditLimit = _newCreditLimit;
		}
	}

	// @notice anybody in the system can join a group
	function joinGroup (uint _groupJ) {
			// @notice the member is in the system
			if (member[msg.sender].isMember = true) {
				// @notice the group exists
				if (bytes(group[_groupJ].groupName).length != 0){
					// @notice the member is not in a group
					if (member[msg.sender].group == 0){
					member[msg.sender].group = _groupJ;
					member[msg.sender].balance = 0;
					member[msg.sender].mDebitLimit = group[_groupJ].debitLimit;
					member[msg.sender].mCreditLimit = group[_groupJ].creditLimit;
			JoinGroup (msg.sender, member[msg.sender].alias, _groupJ, group[_groupJ].groupName, now);
					} 
			} 
		} 
	}
	
	function resignGroup () {
				uint _groupR = member[msg.sender].group; 
				string _groupRN = group[_groupR].groupName;
				// @notice the account is not a group account
				if (group[_groupR].intertradeAccount != msg.sender) {
				// @notice the member is not commune of the group
				if (member[msg.sender].isCommune == false) {
					// @notice the member balance is zero
					if (member[msg.sender].balance == 0) {
						member[msg.sender].group = 0;
						member[msg.sender].mDebitLimit = 0;
						member[msg.sender].mCreditLimit = 0;
						ResignGroup (msg.sender, member[msg.sender].alias, _groupR, _groupRN, now);						
					} 				
				} 
				} 
			}

	
	function getMember (address _memberG) constant returns (bool, string, string, uint, int, uint, uint) {
	    return (member[_memberG].isMember, member[_memberG].alias, member[_memberG].whisperID, member[_memberG].group, member[_memberG].balance, member[_memberG].mDebitLimit, member[_memberG].mCreditLimit);
	}
	
	function getMemberStatus (address _memberG) constant returns (bool, bool) {
	   return (member[_memberG].isIntertrade, member[_memberG].isCommune);
	}
	
	function getNumberMembers () constant returns (uint _nrM) {
		_nrM = memberIndex.length;
	}
		
	function getMPbyIndex (uint _mIndex) constant returns (address _getMemberID) {
		if (_mIndex < memberIndex.length ++) {
		_getMemberID = memberIndex[_mIndex];
			}
	}

    // @notice create a structure to file all groups and their parameters
    struct groups {
    	address intertradeAccount;
    	address commune;
    	string groupName;
    	string currencyName;
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
    function createGroup (string _groupName, string _currencyName, uint _rate, uint _debitLimit, uint _creditLimit, uint _intertradeDebitLimit, uint _intertradeCreditLimit, bool _open) {
    	// @notice the member exists in the system and the member is not in a group and the name is valid
    	if (member[msg.sender].isMember = true) {
    		if (member[msg.sender].group == 0) { 
    				if (bytes(_groupName).length != 0) {
    					uint groupID = now;	
    					group[groupID].intertradeAccount = msg.sender;
    					group[groupID].commune = msg.sender;
    					group[groupID].groupName = _groupName;
    					group[groupID].currencyName = _currencyName;
    					group[groupID].rate = _rate;
    					group[groupID].debitLimit = _debitLimit;
    					group[groupID].creditLimit = _creditLimit;
    					group[groupID].open = _open;
    						NewGroup(msg.sender, groupID, _groupName, now);
    						// @notice make the intertradeAccount member of the group and set the group intertrade limits
    						member[msg.sender].group = groupID;
    						member[msg.sender].isIntertrade = true;
    						member[msg.sender].isCommune = true;
    						member[msg.sender].balance = 0;
    						member[msg.sender].mDebitLimit = _intertradeDebitLimit;
    						member[msg.sender].mCreditLimit = _intertradeCreditLimit;
    					groupIndex [groupIndex.length ++] = groupID;
    				} 
    			}
    	    } 
    	} 

    
    // @notice transfer group commune. Old commune or sysAdmin can transfer group commune to another member of the group
    // @notice the reason to include sysAdmin is for the case the old commune disappears
    function transferGroupcommune (uint _groupID, address _newCommune) {
    	if ((msg.sender == group[_groupID].commune) || (msg.sender == sysAdmin)) {
    		if (member[_newCommune].group == _groupID) {
        		group[_groupID].commune = _newCommune;
        		member[group[_groupID].intertradeAccount].isCommune = false;
    			string _groupName = group[_groupID].groupName;
    			ModifyGroup (msg.sender, _groupID, _groupName, now);
    	} 
    	} 
    }
    	
    // @notice the commune can modify one, several or all parameters of a group. If one parameter is left empty, it remains the same. Only the exchange commune can change its parameters
    function modifyGroup (uint _groupID, string _groupName, string _currencyName, uint _rate, uint _debitLimit, uint _creditLimit, uint _intertradeDebitLimit, uint _intertradeCreditLimit, bool _open) {
    	        if (msg.sender == group[_groupID].commune) {
    			// @notice if a value for a parameter is given, change the parameter, if empty retain old value
    				if (bytes(_groupName).length != 0) {group[_groupID].groupName = _groupName;}
    			if (bytes(_currencyName).length != 0) {group[_groupID].currencyName = _currencyName;}
    			if (_rate != 0) {group[_groupID].rate = _rate;}	
    			if (_debitLimit != 0) {group[_groupID].debitLimit = _debitLimit;}
    			if (_creditLimit!= 0) {group[_groupID].creditLimit = _creditLimit;}
    			if (_intertradeDebitLimit != 0) {member[group[_groupID].intertradeAccount].mDebitLimit = _intertradeDebitLimit;}
    			if (_intertradeCreditLimit != 0) {member[group[_groupID].intertradeAccount].mCreditLimit = _intertradeCreditLimit;}
    			if (_open == true) {group[_groupID].open = true;}	
    			ModifyGroup (msg.sender, _groupID, _groupName, now);				
    				} 
    					
    }
    
    function getGroup (uint _groupG) constant returns (address, string, string, uint, uint, uint, bool) {
    return (group[_groupG].intertradeAccount, group[_groupG].groupName, group[_groupG].currencyName, group[_groupG].rate, group[_groupG].debitLimit, group[_groupG].creditLimit, group[_groupG].open);
    }
    
    
    function getGroupManagement (uint _groupG) constant returns (address, address, uint, uint) {
    return (group[_groupG].intertradeAccount, group[_groupG].commune, member[group[_groupG].intertradeAccount].mDebitLimit, member[group[_groupG].intertradeAccount].mCreditLimit);
    }
    
    function getNumberGroups () constant returns (uint _nrG) {
        _nrG = groupIndex.length;
    }
    
    function getGroupbyIndex (uint _gIndex) constant returns (uint _getGroupID) {
    	if (_gIndex < groupIndex.length ++) {
    	_getGroupID = groupIndex[_gIndex];
    		}
    }


	// @notice function transfer form the member of the same exchange or to the member of another exchange. The amount is expressed in the sender currency
	function transfer (address _to, uint _fromAmount) {		
		// @notice the given amount is converted to integer in order to work with only integers
		int _intFromAmount = int (_fromAmount);
		address _fromGroupAccount = group[member[msg.sender].group].intertradeAccount;
		address _toGroupAccount = group[member[_to].group].intertradeAccount;
		int _intFromDLimit = - int(member[msg.sender].mDebitLimit);
		int _intToCLimit = int(member[msg.sender].mCreditLimit);
		// @notice conversions if the transaction is within groups
		if (_fromGroupAccount != _toGroupAccount) {
			// @the amount is converted to the receiver currency
			uint _rateSenderU = group[member[msg.sender].group].rate;
			uint _rateReceiverU = group[member[_to].group].rate;
			int _rateSender = int(_rateSenderU);
			int _rateReceiver = int(_rateReceiverU);
			int _toAmount = _intFromAmount * _rateSender/ _rateReceiver;
		} 
		// @notice if the limits are not surpassed, we proceed with the transfer
		if ((member[msg.sender].balance - _intFromAmount) > _intFromDLimit) { 
			if ((member[_to].balance + _toAmount) < _intToCLimit) {
				member[msg.sender].balance -= _intFromAmount;
				member[_fromGroupAccount].balance -= _intFromAmount;
				member[_to].balance += _toAmount;
				member[_toGroupAccount].balance += _toAmount;
			} 
		} 
			Transaction (msg.sender, _fromAmount, _to, _toAmount, now);
	}
	
}
