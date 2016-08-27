var creditcommonsContract = web3.eth.contract([ {
	"constant" : true,
	"inputs" : [ {
		"name" : "_groupG",
		"type" : "uint256"
	} ],
	"name" : "getGroupManagement",
	"outputs" : [ {
		"name" : "",
		"type" : "address"
	}, {
		"name" : "",
		"type" : "address"
	}, {
		"name" : "",
		"type" : "uint256"
	}, {
		"name" : "",
		"type" : "uint256"
	}, {
		"name" : "",
		"type" : "uint256"
	} ],
	"type" : "function"
}, {
	"constant" : false,
	"inputs" : [ {
		"name" : "_to",
		"type" : "uint256"
	}, {
		"name" : "_subject",
		"type" : "string"
	}, {
		"name" : "_message",
		"type" : "string"
	} ],
	"name" : "postGroup",
	"outputs" : [],
	"type" : "function"
}, {
	"constant" : true,
	"inputs" : [],
	"name" : "sysAdmin",
	"outputs" : [ {
		"name" : "",
		"type" : "address"
	} ],
	"type" : "function"
}, {
	"constant" : true,
	"inputs" : [ {
		"name" : "_memberG",
		"type" : "address"
	} ],
	"name" : "getMember",
	"outputs" : [ {
		"name" : "",
		"type" : "bool"
	}, {
		"name" : "",
		"type" : "string"
	}, {
		"name" : "",
		"type" : "uint256"
	}, {
		"name" : "",
		"type" : "bool"
	}, {
		"name" : "",
		"type" : "int256"
	}, {
		"name" : "",
		"type" : "uint256"
	}, {
		"name" : "",
		"type" : "uint256"
	} ],
	"type" : "function"
}, {
	"constant" : true,
	"inputs" : [],
	"name" : "addressPM",
	"outputs" : [ {
		"name" : "",
		"type" : "address"
	} ],
	"type" : "function"
}, {
	"constant" : false,
	"inputs" : [ {
		"name" : "_groupID",
		"type" : "uint256"
	}, {
		"name" : "_newCoordinator",
		"type" : "address"
	} ],
	"name" : "transferGroupCoordinator",
	"outputs" : [],
	"type" : "function"
}, {
	"constant" : false,
	"inputs" : [ {
		"name" : "newSysAdmin",
		"type" : "address"
	} ],
	"name" : "transferSysAdmin",
	"outputs" : [],
	"type" : "function"
}, {
	"constant" : true,
	"inputs" : [ {
		"name" : "_mIndex",
		"type" : "uint256"
	} ],
	"name" : "getMPbyIndex",
	"outputs" : [ {
		"name" : "_getMemberID",
		"type" : "address"
	} ],
	"type" : "function"
}, {
	"constant" : true,
	"inputs" : [],
	"name" : "getNumberGroups",
	"outputs" : [ {
		"name" : "_nrG",
		"type" : "uint256"
	} ],
	"type" : "function"
}, {
	"constant" : true,
	"inputs" : [],
	"name" : "groupIDPG",
	"outputs" : [ {
		"name" : "",
		"type" : "uint256"
	} ],
	"type" : "function"
}, {
	"constant" : true,
	"inputs" : [ {
		"name" : "_gIndex",
		"type" : "uint256"
	} ],
	"name" : "getGroupbyIndex",
	"outputs" : [ {
		"name" : "_getGroupID",
		"type" : "uint256"
	} ],
	"type" : "function"
}, {
	"constant" : false,
	"inputs" : [ {
		"name" : "_groupID",
		"type" : "uint256"
	}, {
		"name" : "_groupName",
		"type" : "string"
	}, {
		"name" : "_currencyName",
		"type" : "string"
	}, {
		"name" : "_rate",
		"type" : "uint256"
	}, {
		"name" : "_debitLimit",
		"type" : "uint256"
	}, {
		"name" : "_creditLimit",
		"type" : "uint256"
	}, {
		"name" : "_intertradeDebitLimit",
		"type" : "uint256"
	}, {
		"name" : "_intertradeCreditLimit",
		"type" : "uint256"
	}, {
		"name" : "_open",
		"type" : "bool"
	} ],
	"name" : "modifyGroup",
	"outputs" : [],
	"type" : "function"
}, {
	"constant" : false,
	"inputs" : [ {
		"name" : "_alias",
		"type" : "string"
	} ],
	"name" : "registerSystem",
	"outputs" : [],
	"type" : "function"
}, {
	"constant" : false,
	"inputs" : [ {
		"name" : "_to",
		"type" : "address"
	}, {
		"name" : "_fromAmount",
		"type" : "uint256"
	} ],
	"name" : "transfer",
	"outputs" : [],
	"type" : "function"
}, {
	"constant" : false,
	"inputs" : [ {
		"name" : "_to",
		"type" : "address"
	}, {
		"name" : "_subject",
		"type" : "string"
	}, {
		"name" : "_message",
		"type" : "string"
	} ],
	"name" : "postMember",
	"outputs" : [],
	"type" : "function"
}, {
	"constant" : true,
	"inputs" : [ {
		"name" : "_groupG",
		"type" : "uint256"
	} ],
	"name" : "getGroup",
	"outputs" : [ {
		"name" : "",
		"type" : "address"
	}, {
		"name" : "",
		"type" : "string"
	}, {
		"name" : "",
		"type" : "string"
	}, {
		"name" : "",
		"type" : "uint256"
	}, {
		"name" : "",
		"type" : "uint256"
	}, {
		"name" : "",
		"type" : "uint256"
	}, {
		"name" : "",
		"type" : "bool"
	} ],
	"type" : "function"
}, {
	"constant" : false,
	"inputs" : [ {
		"name" : "_coordinator",
		"type" : "address"
	}, {
		"name" : "_groupName",
		"type" : "string"
	}, {
		"name" : "_currencyName",
		"type" : "string"
	}, {
		"name" : "_rate",
		"type" : "uint256"
	}, {
		"name" : "_debitLimit",
		"type" : "uint256"
	}, {
		"name" : "_creditLimit",
		"type" : "uint256"
	}, {
		"name" : "_intertradeDebitLimit",
		"type" : "uint256"
	}, {
		"name" : "_intertradeCreditLimit",
		"type" : "uint256"
	}, {
		"name" : "_open",
		"type" : "bool"
	} ],
	"name" : "createGroup",
	"outputs" : [],
	"type" : "function"
}, {
	"constant" : true,
	"inputs" : [],
	"name" : "getNumberMembers",
	"outputs" : [ {
		"name" : "_nrM",
		"type" : "uint256"
	} ],
	"type" : "function"
}, {
	"constant" : false,
	"inputs" : [],
	"name" : "resignGroup",
	"outputs" : [],
	"type" : "function"
}, {
	"constant" : false,
	"inputs" : [ {
		"name" : "_groupJ",
		"type" : "uint256"
	} ],
	"name" : "joinGroup",
	"outputs" : [],
	"type" : "function"
}, {
	"constant" : false,
	"inputs" : [ {
		"name" : "_groupMember",
		"type" : "address"
	}, {
		"name" : "_newDebitLimit",
		"type" : "uint256"
	}, {
		"name" : "_newCreditLimit",
		"type" : "uint256"
	} ],
	"name" : "modifyMemberLimits",
	"outputs" : [],
	"type" : "function"
}, {
	"inputs" : [],
	"type" : "constructor"
}, {
	"anonymous" : false,
	"inputs" : [ {
		"indexed" : true,
		"name" : "_creator",
		"type" : "address"
	}, {
		"indexed" : true,
		"name" : "_coordinator",
		"type" : "address"
	}, {
		"indexed" : true,
		"name" : "_groupIDN",
		"type" : "uint256"
	}, {
		"indexed" : false,
		"name" : "_groupNameN",
		"type" : "string"
	}, {
		"indexed" : false,
		"name" : "_NGTimeStamp",
		"type" : "uint256"
	} ],
	"name" : "NewGroup",
	"type" : "event"
}, {
	"anonymous" : false,
	"inputs" : [ {
		"indexed" : true,
		"name" : "_modifier",
		"type" : "address"
	}, {
		"indexed" : true,
		"name" : "_groupIDM",
		"type" : "uint256"
	}, {
		"indexed" : false,
		"name" : "_groupNameM",
		"type" : "string"
	}, {
		"indexed" : false,
		"name" : "_MGTimeStamp",
		"type" : "uint256"
	} ],
	"name" : "ModifyGroup",
	"type" : "event"
}, {
	"anonymous" : false,
	"inputs" : [ {
		"indexed" : true,
		"name" : "memberAddressN",
		"type" : "address"
	}, {
		"indexed" : false,
		"name" : "memberAliasN",
		"type" : "string"
	}, {
		"indexed" : false,
		"name" : "_NMTimeStamp",
		"type" : "uint256"
	} ],
	"name" : "NewMember",
	"type" : "event"
}, {
	"anonymous" : false,
	"inputs" : [ {
		"indexed" : false,
		"name" : "_memberJG",
		"type" : "address"
	}, {
		"indexed" : false,
		"name" : "_aliasJG",
		"type" : "string"
	}, {
		"indexed" : false,
		"name" : "_groupJG",
		"type" : "uint256"
	}, {
		"indexed" : false,
		"name" : "_groupNameJG",
		"type" : "string"
	}, {
		"indexed" : false,
		"name" : "_JGTimeStamp",
		"type" : "uint256"
	} ],
	"name" : "JoinGroup",
	"type" : "event"
}, {
	"anonymous" : false,
	"inputs" : [ {
		"indexed" : false,
		"name" : "_memberRG",
		"type" : "address"
	}, {
		"indexed" : false,
		"name" : "_aliasRG",
		"type" : "string"
	}, {
		"indexed" : false,
		"name" : "_groupRG",
		"type" : "uint256"
	}, {
		"indexed" : false,
		"name" : "_groupNameRG",
		"type" : "string"
	}, {
		"indexed" : false,
		"name" : "_RGTimeStamp",
		"type" : "uint256"
	} ],
	"name" : "ResignGroup",
	"type" : "event"
}, {
	"anonymous" : false,
	"inputs" : [ {
		"indexed" : true,
		"name" : "_sender",
		"type" : "address"
	}, {
		"indexed" : false,
		"name" : "_senderAmount",
		"type" : "uint256"
	}, {
		"indexed" : true,
		"name" : "_receiver",
		"type" : "address"
	}, {
		"indexed" : false,
		"name" : "_receiverAmount",
		"type" : "int256"
	}, {
		"indexed" : false,
		"name" : "_tTimeStamp",
		"type" : "uint256"
	} ],
	"name" : "Transaction",
	"type" : "event"
}, {
	"anonymous" : false,
	"inputs" : [ {
		"indexed" : true,
		"name" : "_senderPost",
		"type" : "address"
	}, {
		"indexed" : true,
		"name" : "_receiverPost",
		"type" : "address"
	}, {
		"indexed" : true,
		"name" : "_subjectPost",
		"type" : "string"
	}, {
		"indexed" : false,
		"name" : "_contentPost",
		"type" : "string"
	}, {
		"indexed" : false,
		"name" : "_PostTimeStamp",
		"type" : "uint256"
	} ],
	"name" : "PostMember",
	"type" : "event"
}, {
	"anonymous" : false,
	"inputs" : [ {
		"indexed" : true,
		"name" : "_senderPost",
		"type" : "address"
	}, {
		"indexed" : true,
		"name" : "_receiverPost",
		"type" : "uint256"
	}, {
		"indexed" : true,
		"name" : "_subjectPost",
		"type" : "string"
	}, {
		"indexed" : false,
		"name" : "_contentPost",
		"type" : "string"
	}, {
		"indexed" : false,
		"name" : "_PostTimeStamp",
		"type" : "uint256"
	} ],
	"name" : "PostGroup",
	"type" : "event"
} ]
);

var creditCommons = creditcommonsContract
		.at("0xaAD9F23d125980EbA5E1A566E7f211Be6Bff936B");

var accounts = web3.eth.accounts;
var nrAcc = accounts.length;

web3.eth.defaultAccount = accounts[0];
var coinbase = web3.eth.defaultAccount;

var nrMembers = creditCommons.getNumberMembers();
var numberM = nrMembers[0];

var member = creditCommons.getMember(coinbase);
var isMember = member[0];
var myAlias = member[1];
var myGroupID = member[2];
var isCoordinator = member[3];
var myBalance = member[4];
var myDebitLimit = member[5];
var myCreditLimit = member[6];

var group = creditCommons.getGroup(myGroupID);
var groupAccount = group[0];
var groupName = group[1];
var currencyName = group[2];
var rate = group[3];
var debitLimit = group[4];
var creditLimit = group[5];
var open = group[6];

var groupManagement = creditCommons.getGroupManagement(myGroupID);
var coordinator = groupManagement[1];

var groupWallet = creditCommons.getMember(groupAccount);
var groupBalance = groupWallet[4];
var intertradeDebitLimit = groupWallet[5];
var intertradeCreditLimit = groupWallet[6];
