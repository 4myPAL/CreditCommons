if (typeof web3 !== 'undefined')
	web3 = new Web3(web3.currentProvider);
else
	web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

var creditcommonsContract = web3.eth.contract([
	{
		"constant": false,
		"inputs": {
			"name": "_proposalNumber",
			"type": "uint256"
		}],
		"name": "closeProposal",
		"outputs": [],
		"payable": false,
		"type": "function"
	},
	{
		"constant": true,
		"inputs": {
			"name": "_groupG",
			"type": "uint256"
		}],
		"name": "getGroupManagement",
		"outputs": {
			"name": "",
			"type": "address"
		}],
		"payable": false,
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "sysAdmin",
		"outputs": {
			"name": "",
			"type": "address"
		}],
		"payable": false,
		"type": "function"
	},
	{
		"constant": true,
		"inputs": {
			"name": "_memberG",
			"type": "address"
		}],
		"name": "getMember",
		"outputs": {
			"name": "",
			"type": "uint256"
		}],
		"payable": false,
		"type": "function"
	},
	{
		"constant": false,
		"inputs": {
			"name": "_groupJ",
			"type": "uint256"
		}],
		"name": "acceptAtGroup",
		"outputs": [],
		"payable": false,
		"type": "function"
	},
	{
		"constant": true,
		"inputs": {
			"name": "_proposalNumber",
			"type": "uint256"
		}],
		"name": "getProposalVotes",
		"outputs": {
			"name": "",
			"type": "bool"
		}],
		"payable": false,
		"type": "function"
	},
	{
		"constant": false,
		"inputs": {
			"name": "_open",
			"type": "bool"
		}],
		"name": "createGroup",
		"outputs": [],
		"payable": false,
		"type": "function"
	},
	{
		"constant": false,
		"inputs": {
			"name": "newSysAdmin",
			"type": "address"
		}],
		"name": "transferSysAdmin",
		"outputs": [],
		"payable": false,
		"type": "function"
	},
	{
		"constant": true,
		"inputs": {
			"name": "_mIndex",
			"type": "uint256"
		}],
		"name": "getMPbyIndex",
		"outputs": {
			"name": "_getMemberID",
			"type": "address"
		}],
		"payable": false,
		"type": "function"
	},
	{
		"constant": false,
		"inputs": {
			"name": "_newQuorum",
			"type": "uint256"
		}],
		"name": "modifyGroup",
		"outputs": [],
		"payable": false,
		"type": "function"
	},
	{
		"constant": true,
		"inputs": {
			"name": "_memberG",
			"type": "address"
		}],
		"name": "getMemberWhisper",
		"outputs": {
			"name": "",
			"type": "string"
		}],
		"payable": false,
		"type": "function"
	},
	{
		"constant": true,
		"inputs": {
			"name": "_gIndex",
			"type": "uint256"
		}],
		"name": "getGroupbyIndex",
		"outputs": {
			"name": "_getGroupID",
			"type": "uint256"
		}],
		"payable": false,
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getTotals",
		"outputs": {
			"name": "",
			"type": "uint256"
		}],
		"payable": false,
		"type": "function"
	},
	{
		"constant": false,
		"inputs": {
			"name": "_imageLink",
			"type": "string"
		}],
		"name": "modifyMember",
		"outputs": [],
		"payable": false,
		"type": "function"
	},
	{
		"constant": false,
		"inputs": {
			"name": "_quorum",
			"type": "uint256"
		}],
		"name": "newProposal",
		"outputs": [],
		"payable": false,
		"type": "function"
	},
	{
		"constant": false,
		"inputs": {
			"name": "_billAmount",
			"type": "uint256"
		}],
		"name": "createBill",
		"outputs": [],
		"payable": false,
		"type": "function"
	},
	{
		"constant": false,
		"inputs": {
			"name": "_newIntertrade",
			"type": "address"
		}],
		"name": "transferGroupIntertrade",
		"outputs": [],
		"payable": false,
		"type": "function"
	},
	{
		"constant": false,
		"inputs": {
			"name": "_fromAmount",
			"type": "uint256"
		}],
		"name": "transfer",
		"outputs": [],
		"payable": false,
		"type": "function"
	},
	{
		"constant": false,
		"inputs": {
			"name": "_imageLink",
			"type": "string"
		}],
		"name": "registerSystem",
		"outputs": [],
		"payable": false,
		"type": "function"
	},
	{
		"constant": true,
		"inputs": {
			"name": "_billNumber",
			"type": "uint256"
		}],
		"name": "getBill",
		"outputs": {
			"name": "",
			"type": "bool"
		}],
		"payable": false,
		"type": "function"
	},
	{
		"constant": true,
		"inputs": {
			"name": "_groupG",
			"type": "uint256"
		}],
		"name": "getGroupDescription",
		"outputs": {
			"name": "",
			"type": "uint256"
		}],
		"payable": false,
		"type": "function"
	},
	{
		"constant": false,
		"inputs": {
			"name": "_candidateGroup",
			"type": "uint256"
		}],
		"name": "proposeAcceptanceAsMember",
		"outputs": [],
		"payable": false,
		"type": "function"
	},
	{
		"constant": false,
		"inputs": {
			"name": "_groupD",
			"type": "uint256"
		}],
		"name": "kickOutGroup",
		"outputs": [],
		"payable": false,
		"type": "function"
	},
	{
		"constant": true,
		"inputs": {
			"name": "_proposalNumber",
			"type": "uint256"
		}],
		"name": "getProposal",
		"outputs": {
			"name": "",
			"type": "uint256"
		}],
		"payable": false,
		"type": "function"
	},
	{
		"constant": true,
		"inputs": {
			"name": "_groupG",
			"type": "uint256"
		}],
		"name": "getGroupRates",
		"outputs": {
			"name": "",
			"type": "uint256"
		}],
		"payable": false,
		"type": "function"
	},
	{
		"constant": true,
		"inputs": {
			"name": "_member",
			"type": "address"
		}],
		"name": "getIfVoted",
		"outputs": {
			"name": "",
			"type": "bool"
		}],
		"payable": false,
		"type": "function"
	},
	{
		"constant": true,
		"inputs": {
			"name": "_memberG",
			"type": "address"
		}],
		"name": "getMemberStatus",
		"outputs": {
			"name": "",
			"type": "bool"
		}],
		"payable": false,
		"type": "function"
	},
	{
		"constant": false,
		"inputs": {
			"name": "_choice",
			"type": "int8"
		}],
		"name": "vote",
		"outputs": [],
		"payable": false,
		"type": "function"
	},
	{
		"constant": false,
		"inputs": {
			"name": "_groupJ",
			"type": "uint256"
		}],
		"name": "joinGroup",
		"outputs": [],
		"payable": false,
		"type": "function"
	},
	{
		"constant": false,
		"inputs": {
			"name": "_billNumber",
			"type": "uint256"
		}],
		"name": "payBill",
		"outputs": [],
		"payable": false,
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "resignFromGroup",
		"outputs": [],
		"payable": false,
		"type": "function"
	},
	{
		"constant": false,
		"inputs": {
			"name": "_newCreditLimit",
			"type": "uint256"
		}],
		"name": "modifyMemberLimits",
		"outputs": [],
		"payable": false,
		"type": "function"
	},
	{
		"constant": false,
		"inputs": {
			"name": "_newCommune",
			"type": "address"
		}],
		"name": "transferGroupCommune",
		"outputs": [],
		"payable": false,
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": {
			"indexed": false,
			"name": "_NGTimeStamp",
			"type": "uint256"
		}],
		"name": "NewGroup",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": {
			"indexed": false,
			"name": "_MGTimeStamp",
			"type": "uint256"
		}],
		"name": "ModifyGroup",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": {
			"indexed": false,
			"name": "_NMTimeStamp",
			"type": "uint256"
		}],
		"name": "NewMember",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": {
			"indexed": false,
			"name": "_JGTimeStamp",
			"type": "uint256"
		}],
		"name": "JoinGroup",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": {
			"indexed": false,
			"name": "_RGTimeStamp",
			"type": "uint256"
		}],
		"name": "ResignGroup",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": {
			"indexed": false,
			"name": "_tTimeStamp",
			"type": "uint256"
		}],
		"name": "Transaction",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": {
			"indexed": false,
			"name": "_bTimeStamp",
			"type": "uint256"
		}],
		"name": "Bill",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": {
			"indexed": false,
			"name": "creator",
			"type": "address"
		}],
		"name": "ProposalAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": {
			"indexed": false,
			"name": "result",
			"type": "int256"
		}],
		"name": "Voted",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": {
			"indexed": false,
			"name": "active",
			"type": "bool"
		}],
		"name": "ProposalResult",
		"type": "event"
	}
]);

var creditCommons = creditcommonsContract
		.at("0xbfDdEAE75d5e0F97934691F017e968F0CD22c637");

var accounts = web3.eth.accounts;
var nrAcc = accounts.length;

web3.eth.defaultAccount = accounts[0];
var myCoinbase = web3.eth.defaultAccount;

var totals = creditCommons.getTotals();
var nrMembers = totals[0];
var nrGroups = totals[1];
var nrProposals = totals[2];

var myMembership = creditCommons.getMember(myCoinbase);
var myIsMember = myMembership[0];
var myAlias = myMembership[1];
var myDescription = myMembership[2];
var myGroupNr = myMembership[3];
var myBalance = myMembership[4];
var myDebitLimit = myMembership[5];
var myCreditLimit = myMembership[6];

var myStatus = creditCommons.getMemberStatus(myCoinbase);
var isIntertrade = myStatus[0];
var isCommune = myStatus[1];

var myWhisper = creditCommons.getMemberWhisper(myCoinbase);

var myGroup = creditCommons.getGroupDescription(myGroupNr);
var myGroupName = myGroup[0];
var myGroupDescription = myGroup[1];
var myCurrencyName = myGroup[2];
var myGroupOpen = myGroup[3];
var myGroupNrM = myGroup[4];

var myGroupRates = creditCommons.getGroupRates(myGroupNr);
var myRate = myGroupRates[0];
var myGroupDebitLimit = myGroupRates[1];
var myGroupCreditLimit = myGroupRates[2];

var groupManagement = creditCommons.getGroupManagement(myGroupNr);
var intertradeAccount = groupManagement[0];
var communeAccount = groupManagement[1];

var intertradeWallet = creditCommons.getMember(intertradeAccount);
var intertradeIsMember = intertradeWallet[0];
var intertradeAlias = intertradeWallet[1];
var intertradeDescription = intertradeWallet[2];
var intertradeGroup = intertradeWallet[3];
var intertradeBalance = intertradeWallet[4];
var intertradeDebitLimit = intertradeWallet[5];
var intertradeCreditLimit = intertradeWallet[6];

var intertradeWallet = creditCommons.getMember(intertradeAccount);
var intertradeIsMember = intertradeWallet[0];
var intertradeAlias = intertradeWallet[1];
var intertradeDescription = intertradeWallet[2];
var intertradeGroup = intertradeWallet[3];
var intertradeBalance = intertradeWallet[4];
var intertradeDebitLimit = intertradeWallet[5];
var intertradeCreditLimit = intertradeWallet[6];

var me = "ETH Account: <b>" + myCoinbase
+ "<br></b> Credit Commons Member: <b>" + myIsMember + "</b> Alias: <b>" + myAlias 
+ "<br></b> Whisper Account: <b>" + myWhisper 
+ "<br></b>Group ID: <b>" + myGroup + "</b> Group Name: <b>" + groupName
+ "<br></b> Is Intertrade: <b>" + isIntertrade + "</b> Is Commune: <b>" + isCommune + "</b>";
