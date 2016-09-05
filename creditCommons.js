if(typeof web3 !== 'undefined')
  web3 = new Web3(web3.currentProvider);
else
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

var creditcommonsContract = web3.eth.contract([{"constant":true,"inputs":[{"name":"_groupG","type":"uint256"}],"name":"getGroupManagement","outputs":[{"name":"","type":"address"},{"name":"","type":"address"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"sysAdmin","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"_groupName","type":"string"},{"name":"_currencyName","type":"string"},{"name":"_rate","type":"uint256"},{"name":"_debitLimit","type":"uint256"},{"name":"_creditLimit","type":"uint256"},{"name":"_intertradeDebitLimit","type":"uint256"},{"name":"_intertradeCreditLimit","type":"uint256"},{"name":"_open","type":"bool"}],"name":"createGroup","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"_memberG","type":"address"}],"name":"getMember","outputs":[{"name":"","type":"bool"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"uint256"},{"name":"","type":"int256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"newSysAdmin","type":"address"}],"name":"transferSysAdmin","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"_mIndex","type":"uint256"}],"name":"getMPbyIndex","outputs":[{"name":"_getMemberID","type":"address"}],"type":"function"},{"constant":true,"inputs":[],"name":"getNumberGroups","outputs":[{"name":"_nrG","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_alias","type":"string"},{"name":"_whisperID","type":"string"}],"name":"registerSystem","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"_gIndex","type":"uint256"}],"name":"getGroupbyIndex","outputs":[{"name":"_getGroupID","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_groupID","type":"uint256"},{"name":"_groupName","type":"string"},{"name":"_currencyName","type":"string"},{"name":"_rate","type":"uint256"},{"name":"_debitLimit","type":"uint256"},{"name":"_creditLimit","type":"uint256"},{"name":"_intertradeDebitLimit","type":"uint256"},{"name":"_intertradeCreditLimit","type":"uint256"},{"name":"_open","type":"bool"}],"name":"modifyGroup","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_alias","type":"string"},{"name":"_whisperID","type":"string"}],"name":"modifyMember","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_fromAmount","type":"uint256"}],"name":"transfer","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"_groupG","type":"uint256"}],"name":"getGroup","outputs":[{"name":"","type":"address"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"getNumberMembers","outputs":[{"name":"_nrM","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"_memberG","type":"address"}],"name":"getMemberStatus","outputs":[{"name":"","type":"bool"},{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"_groupID","type":"uint256"},{"name":"_newCommune","type":"address"}],"name":"transferGroupcommune","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"resignGroup","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_groupJ","type":"uint256"}],"name":"joinGroup","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_groupMember","type":"address"},{"name":"_newDebitLimit","type":"uint256"},{"name":"_newCreditLimit","type":"uint256"}],"name":"modifyMemberLimits","outputs":[],"type":"function"},{"inputs":[],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_creator","type":"address"},{"indexed":true,"name":"_groupIDN","type":"uint256"},{"indexed":false,"name":"_groupNameN","type":"string"},{"indexed":false,"name":"_NGTimeStamp","type":"uint256"}],"name":"NewGroup","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_modifier","type":"address"},{"indexed":true,"name":"_groupIDM","type":"uint256"},{"indexed":false,"name":"_groupNameM","type":"string"},{"indexed":false,"name":"_MGTimeStamp","type":"uint256"}],"name":"ModifyGroup","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_memberAddressN","type":"address"},{"indexed":false,"name":"_memberAliasN","type":"string"},{"indexed":false,"name":"_NMTimeStamp","type":"uint256"}],"name":"NewMember","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_memberJG","type":"address"},{"indexed":false,"name":"_aliasJG","type":"string"},{"indexed":false,"name":"_groupJG","type":"uint256"},{"indexed":false,"name":"_groupNameJG","type":"string"},{"indexed":false,"name":"_JGTimeStamp","type":"uint256"}],"name":"JoinGroup","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_memberRG","type":"address"},{"indexed":false,"name":"_aliasRG","type":"string"},{"indexed":false,"name":"_groupRG","type":"uint256"},{"indexed":false,"name":"_groupNameRG","type":"string"},{"indexed":false,"name":"_RGTimeStamp","type":"uint256"}],"name":"ResignGroup","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_sender","type":"address"},{"indexed":false,"name":"_senderAmount","type":"uint256"},{"indexed":true,"name":"_receiver","type":"address"},{"indexed":false,"name":"_receiverAmount","type":"int256"},{"indexed":false,"name":"_tTimeStamp","type":"uint256"}],"name":"Transaction","type":"event"}]);

var creditCommons = creditcommonsContract
		.at("0xef55bfac4228981e850936aaf042951f7b146e41");

var accounts = web3.eth.accounts;
var nrAcc = accounts.length;

web3.eth.defaultAccount = accounts[0];
var coinbase = web3.eth.defaultAccount;

var nrMembers = creditCommons.getNumberMembers();
var numberM = nrMembers[0];

var member = creditCommons.getMember(coinbase);
var isMember = member[0];
var myAlias = member[1];
var myWhisperID = member[2];
var myGroupID = member[3];
var myBalance = member[5];
var myDebitLimit = member[6];
var myCreditLimit = member[7];

var memberStatus = creditCommons.getMemberStatus(coinbase);
var isIntertrade = memberStatus[0];
var isCoordinator = memberStatus[1];

var group = creditCommons.getGroup(myGroupID);
var groupIntertradeAccount = group[0];
var groupName = group[1];
var currencyName = group[2];
var rate = group[3];
var debitLimit = group[4];
var creditLimit = group[5];
var open = group[6];

var groupManagement = creditCommons.getGroupManagement(myGroupID);
var intertradeAccount = groupManagement[0];
var communeAccount = groupManagement[1];
var intertradeDebitLimit = groupManagement[2];
var intertradeCreditLimit = groupManagement[3];

var intertradeWallet = creditCommons.getMember(intertradeAccount);
var intertradeBalance = intertradeWallet[4];
var intertradeDebitLimit = intertradeWallet[5];
var intertradeCreditLimit = intertradeWallet[6];

var communeWallet = creditCommons.getMember(communeAccount);
var communeBalance = communeWallet[4];
var communeDebitLimit = communeWallet[5];
var communeCreditLimit = communeWallet[6];
