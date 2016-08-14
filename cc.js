if(typeof web3 !== 'undefined')
  web3 = new Web3(web3.currentProvider);
else
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

var creditcommonsContract = web3.eth.contract(
[{"constant":false,"inputs":[{"name":"_groupID","type":"uint256"},{"name":"_newOwner","type":"address"}],"name":"transferGroupOwner","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"uint256"},{"name":"_issue","type":"string"},{"name":"_text","type":"string"}],"name":"postGroup","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"sysAdmin","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"newSysAdmin","type":"address"}],"name":"transferSysAdmin","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_mIndex","type":"uint256"}],"name":"getMPbyIndex","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"_memberG","type":"address"}],"name":"getMemberParameters","outputs":[{"name":"_isMemberG","type":"bool"},{"name":"_aliasG","type":"string"},{"name":"_groupG","type":"uint256"},{"name":"_balanceG","type":"int256"},{"name":"_mDebitLimitG","type":"uint256"},{"name":"_mCreditLimit","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_groupName","type":"string"},{"name":"_currencyName","type":"string"},{"name":"_rate","type":"uint256"},{"name":"_debitLimit","type":"uint256"},{"name":"_creditLimit","type":"uint256"},{"name":"_open","type":"bool"}],"name":"createGroup","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_gIndex","type":"uint256"}],"name":"getGroupbyIndex","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_alias","type":"string"}],"name":"registerSystem","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"_groupG","type":"uint256"}],"name":"getGroupParameters","outputs":[{"name":"_ownerG","type":"address"},{"name":"_groupNameG","type":"string"},{"name":"_currencyNameG","type":"string"},{"name":"_rateG","type":"uint256"},{"name":"_debitLimitG","type":"uint256"},{"name":"_creditLimitG","type":"uint256"},{"name":"_openG","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_fromAmount","type":"uint256"}],"name":"transfer","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_newAlias","type":"string"}],"name":"modifyAlias","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_issue","type":"string"},{"name":"_text","type":"string"}],"name":"postMember","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"resignGroup","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_groupJ","type":"uint256"}],"name":"joinGroup","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_groupMember","type":"address"},{"name":"_newDebitLimit","type":"uint256"},{"name":"_newCreditLimit","type":"uint256"}],"name":"modifyMemberLimits","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_groupID","type":"uint256"},{"name":"_groupName","type":"string"},{"name":"_currencyName","type":"string"},{"name":"_rate","type":"uint256"},{"name":"_debitLimit","type":"uint256"},{"name":"_creditLimit","type":"uint256"},{"name":"_open","type":"bool"}],"name":"modifyGroup","outputs":[],"type":"function"},{"inputs":[],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_creator","type":"address"},{"indexed":true,"name":"_groupIDN","type":"uint256"},{"indexed":false,"name":"_groupNameN","type":"string"},{"indexed":false,"name":"_NGTimeStamp","type":"uint256"}],"name":"NewGroup","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_modifier","type":"address"},{"indexed":true,"name":"_groupIDM","type":"uint256"},{"indexed":false,"name":"_MGTimeStamp","type":"uint256"}],"name":"ModifyGroup","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"memberAddressN","type":"address"},{"indexed":false,"name":"memberAliasN","type":"string"},{"indexed":false,"name":"_NMTimeStamp","type":"uint256"}],"name":"NewMember","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_memberJG","type":"address"},{"indexed":false,"name":"_aliasJG","type":"string"},{"indexed":false,"name":"_groupJG","type":"uint256"},{"indexed":false,"name":"_groupNameJG","type":"string"},{"indexed":false,"name":"_JGTimeStamp","type":"uint256"}],"name":"JoinGroup","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_memberRG","type":"address"},{"indexed":false,"name":"_aliasRG","type":"string"},{"indexed":false,"name":"_groupRG","type":"uint256"},{"indexed":false,"name":"_groupNameRG","type":"string"},{"indexed":false,"name":"_RGTimeStamp","type":"uint256"}],"name":"ResignGroup","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_sender","type":"address"},{"indexed":false,"name":"_senderAmount","type":"uint256"},{"indexed":true,"name":"_receiver","type":"address"},{"indexed":false,"name":"_recieverAmount","type":"int256"},{"indexed":false,"name":"_tTimeStamp","type":"uint256"}],"name":"Transaction","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_senderPost","type":"address"},{"indexed":true,"name":"_receiverPost","type":"address"},{"indexed":true,"name":"_issuePost","type":"string"},{"indexed":false,"name":"_contentPost","type":"string"},{"indexed":false,"name":"_PostTimeStamp","type":"uint256"}],"name":"PostMember","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_senderPost","type":"address"},{"indexed":true,"name":"_receiverPost","type":"uint256"},{"indexed":true,"name":"_issuePost","type":"string"},{"indexed":false,"name":"_contentPost","type":"string"},{"indexed":false,"name":"_PostTimeStamp","type":"uint256"}],"name":"PostGroup","type":"event"}]
);

var creditCommons = creditcommonsContract.at("0xf025d81196b72fba60a1d4dddad12eeb8360d828");

web3.eth.defaultAccount = web3.eth.coinbase;

var coinbase = web3.eth.coinbase;

var member = creditCommons.getMemberParameters(coinbase);
var isMember = member[0];
var myAlias = member[1];
var myGroupID = member[2];
var myBalance = member[3];
var myDebitLimit = member[4];
var myCreditLimit = member[5];


var group = creditCommons.getGroupParameters(myGroupID);
var owner = group[0];
var groupName = group[1];
var currencyName = group[2];
var rate = group[3];
var debitLimit = group[4];
var creditLimit = group[5];
var open = group[6];

