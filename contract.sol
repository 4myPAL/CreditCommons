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
        }
	
	event NewGroup(address indexed _creator, uint indexed _groupIDN, string _groupNameN, uint _NGTimeStamp);
	event ModifyGroup (address indexed _modifier, uint indexed _groupIDM, string _groupNameM, uint _MGTimeStamp);
	event NewMember (address indexed memberAddressN, string memberAliasN, uint _NMTimeStamp);
	event JoinGroup (address _memberJG, string _aliasJG, uint _groupJG, string _groupNameJG, uint _JGTimeStamp);
	event ResignGroup (address _memberRG, string _aliasRG, uint _groupRG, string _groupNameRG, uint _RGTimeStamp);
	event Transaction (address indexed _sender, uint _senderAmount, address indexed _receiver, int _receiverAmount, uint _tTimeStamp);
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
		address owner;
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
	function createGroup (string _groupName, string _currencyName, uint _rate, uint _debitLimit, uint _creditLimit, bool _open) {
		// @notice the member exists in the system and the member is not in a group and the name is valid
		if (member[msg.sender].isMember = true) {
			if (member[msg.sender].group == 0) { 
				if (bytes(_groupName).length != 0) {
					uint groupID = now;	
					group[groupID].owner = msg.sender;
					group[groupID].groupName = _groupName;
					group[groupID].currencyName = _currencyName;
					group[groupID].rate = _rate;
					group[groupID].debitLimit = _debitLimit;
					group[groupID].creditLimit = _creditLimit;
					group[groupID].open = _open;
							NewGroup(msg.sender, groupID, _groupName, now);
							joinGroup(groupID);
							groupIndex [groupIndex.length ++] = groupID;
				} else {
			postMember (msg.sender, "New Group", "Conditions for group creation were not met: the name was empty");
				}
		} else {
			postMember (msg.sender, "New Group", "Conditions for group creation were not met: you belong already to a group");
		}
		} else {
			postMember (msg.sender, "New Group", "Conditions for group creation were not met: you are not a member of the Credit Commons System");
		}
		}
	
	// @notice transfer group ownership. Old owner or sysAdmin can transfer group ownership to another member of the group
	function transferGroupOwner (uint _groupID, address _newOwner) {
		if ((msg.sender == group[_groupID].owner) || (msg.sender == sysAdmin)) {
			if (member[_newOwner].group == _groupID) {
        		group[_groupID].owner = _newOwner;
				string _groupName = group[_groupID].groupName;
				ModifyGroup (msg.sender, _groupID, _groupName, now);
		} else {
			postMember (msg.sender, "Transfer Group", "Conditions for group transfer were not met: the new owner dos not belong to your group");
		}
		} else {
			postMember (msg.sender, "Transfer Group", "Conditions for group transfer were not met: you are nor the group owner neither the system administrator");
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
				ModifyGroup (msg.sender, _groupID, _groupName, now);				
					} else {
						postMember (msg.sender, "Modify Group", "Conditions for group modification were not met: you are not the group owner");
					}
						
	}

	function getGroup (uint _groupG) constant returns (address, string, string, uint, uint, uint, bool) {
    return (group[_groupG].owner, group[_groupG].groupName, group[_groupG].currencyName, group[_groupG].rate, group[_groupG].debitLimit, group[_groupG].creditLimit, group[_groupG].open);
	}
	
	function getNumberGroups () constant returns (uint) {
	    return (groupIndex.length);
	}
	
	function getGroupbyIndex (uint _gIndex) {
		if (_gIndex < groupIndex.length ++) {
		getGroup (groupIndex[_gIndex]);
			}
	}
	
	// @notice create a structure to file all members
	struct members {
		// @parameter key ID parameters
		bool isMember;
		string alias;
		uint group;	
		// @parameter balance is expressed in the member currency. Can only be modified by system operations
		int balance;
		uint mDebitLimit;
		uint mCreditLimit;
	}
	
	// @notice map the members structure into an array indexed by the members ethereum address (another option is to struture them by their CES Member ID)
	mapping(address => members) member;
	
	// @notice create an index of members for listing purposes
	address[] memberIndex;
	
	// @notice anybody with an ethereum account can register in the system
	function registerSystem (string _alias) {
		// @notice the caller provides a valid alias
		if (bytes(_alias).length != 0) {
		// @notice the caller is not already the system
			if (member[msg.sender].isMember != true) {
			member[msg.sender].isMember = true;
			member[msg.sender].alias = _alias;
			member[msg.sender].group = 0;
			member[msg.sender].balance = 0;
			member[msg.sender].mDebitLimit = 0;
			member[msg.sender].mCreditLimit = 0;
		NewMember (msg.sender, _alias, now);
		memberIndex [memberIndex.length ++] = msg.sender;
				} else {
					postMember (msg.sender, "Registration", "Registration failed: you are already in the system");
				}
			} else {
				postMember (msg.sender, "Registration", "Registration failed: no valid alias was provided");
			}
		}

	function modifyAlias(string _newAlias) {
			member[msg.sender].alias = _newAlias;
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
					} else {
						postMember (msg.sender, "Join Group", "Joining Group failed: you are already in a Group");
					}
			} else {
				postMember (msg.sender, "Join Group", "Joining Group failed: the Group does not exist");
			}
		} else {
			postMember (msg.sender, "Join Group", "Joining Group failed: you are not registered in the system");
		}
	}
	
	function resignGroup () {
				uint _groupR = member[msg.sender].group;
				string _groupRN = group[_groupR].groupName;
				// @notice the member is not owner of the group
				if (group[member[msg.sender].group].owner != msg.sender) {
					// @notice the member balance is zero
					if (member[msg.sender].balance == 0) {
						member[msg.sender].group = 0;
						member[msg.sender].mDebitLimit = 0;
						member[msg.sender].mCreditLimit = 0;
						ResignGroup (msg.sender, member[msg.sender].alias, _groupR, _groupRN, now);						
					} else {
						postMember (msg.sender, "Resign Group", "Resigning Group failed: you cannot resign because your balance is not zero. Transfer balance or pay debt first");
					}				
				} else {
					postMember (msg.sender, "Resign Group", "Resigning Group failed: you cannot resign because you are the owner. Transfer ownership first");
				}
			}

	
	function modifyMemberLimits (address _groupMember, uint _newDebitLimit, uint _newCreditLimit) {
		// @notice only the group owner can do 
		if (msg.sender == group[member[msg.sender].group].owner) {
					member[_groupMember].mDebitLimit = _newDebitLimit;
					member[_groupMember].mCreditLimit = _newCreditLimit;
		} else {
			postMember (msg.sender, "Modify member limits", "Modification of member limits failed: only the group owner can do");
		}
	}
	
	function getMember (address _memberG) constant returns (bool, string, uint, int, uint, uint) {
	    return (member[_memberG].isMember, member[_memberG].alias, member[_memberG].group, member[_memberG].balance, member[_memberG].mDebitLimit, member[_memberG].mCreditLimit);
	}
	
	function getNumberMembers () constant returns (uint) {
		return(memberIndex.length);
	}
		
	function getMPbyIndex (uint _mIndex) {
		if (_mIndex < memberIndex.length ++) {
		getMember (memberIndex[_mIndex]);
			}
	}
	
	// @notice funtion transfer form the member of the same exchange or to the member of another exchange. The amount is expressed in the sender currency
	function transfer (address _to, uint _fromAmount) {		
		// @notice the given amount is converted to cents in order to work with only integers
		int _intFromAmount = int (_fromAmount);
		// @the amount is converted to the receiver currency
		uint _rateSenderU = group[member[msg.sender].group].rate;
		uint _rateReceiverU = group[member[_to].group].rate;
		int _rateSender = int(_rateSenderU);
		int _rateReceiver = int(_rateReceiverU);
		int _toAmount = _intFromAmount * _rateSender/ _rateReceiver;
		int _intFromDLimit = - int(member[msg.sender].mDebitLimit);
		int _intToCLimit = int(member[msg.sender].mCreditLimit);
		// @notice if the limits ar not surpassed, we proceed with the transfer
		if ((member[msg.sender].balance - _intFromAmount) > _intFromDLimit) { 
			if ((member[_to].balance + _toAmount) < _intToCLimit) {
		member[msg.sender].balance -= _intFromAmount;
		member[_to].balance += _toAmount;
		} else {
			postMember (msg.sender, "Transfer", "Transfer failed: receiver creditLimit was surpassed");
		}
		} else {
			postMember (msg.sender, "Transfer", "Transfer failed: your debitLimit was surpassed");
		}
		Transaction (msg.sender, _fromAmount, _to, _toAmount, now);
	}
	
	// @notice function to post messages to members
	function postMember (address _to, string _issue, string _text) {
		PostMember (msg.sender, _to, _issue, _text, now);
	}
	
	// @notice function to post messages to a group
	function postGroup (uint _to, string _issue, string _text) {
		PostGroup (msg.sender, _to, _issue, _text, now);
	}
		
}

