/*
Generated by Mix
mi. ago. 17 20:10:00 2016 GMT-0500
*/

var creditCommons = {
	"abi": "[{\"constant\":false,\"inputs\":[{\"name\":\"_groupID\",\"type\":\"uint256\"},{\"name\":\"_newOwner\",\"type\":\"address\"}],\"name\":\"transferGroupOwner\",\"outputs\":[],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_to\",\"type\":\"uint256\"},{\"name\":\"_issue\",\"type\":\"string\"},{\"name\":\"_text\",\"type\":\"string\"}],\"name\":\"postGroup\",\"outputs\":[],\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"sysAdmin\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_memberG\",\"type\":\"address\"}],\"name\":\"getMember\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"},{\"name\":\"\",\"type\":\"string\"},{\"name\":\"\",\"type\":\"uint256\"},{\"name\":\"\",\"type\":\"int256\"},{\"name\":\"\",\"type\":\"uint256\"},{\"name\":\"\",\"type\":\"uint256\"}],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"newSysAdmin\",\"type\":\"address\"}],\"name\":\"transferSysAdmin\",\"outputs\":[],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_mIndex\",\"type\":\"uint256\"}],\"name\":\"getMPbyIndex\",\"outputs\":[],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_groupName\",\"type\":\"string\"},{\"name\":\"_currencyName\",\"type\":\"string\"},{\"name\":\"_rate\",\"type\":\"uint256\"},{\"name\":\"_debitLimit\",\"type\":\"uint256\"},{\"name\":\"_creditLimit\",\"type\":\"uint256\"},{\"name\":\"_open\",\"type\":\"bool\"}],\"name\":\"createGroup\",\"outputs\":[],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_gIndex\",\"type\":\"uint256\"}],\"name\":\"getGroupbyIndex\",\"outputs\":[],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_alias\",\"type\":\"string\"}],\"name\":\"registerSystem\",\"outputs\":[],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_fromAmount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_newAlias\",\"type\":\"string\"}],\"name\":\"modifyAlias\",\"outputs\":[],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_issue\",\"type\":\"string\"},{\"name\":\"_text\",\"type\":\"string\"}],\"name\":\"postMember\",\"outputs\":[],\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_groupG\",\"type\":\"uint256\"}],\"name\":\"getGroup\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"},{\"name\":\"\",\"type\":\"string\"},{\"name\":\"\",\"type\":\"string\"},{\"name\":\"\",\"type\":\"uint256\"},{\"name\":\"\",\"type\":\"uint256\"},{\"name\":\"\",\"type\":\"uint256\"},{\"name\":\"\",\"type\":\"bool\"}],\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"resignGroup\",\"outputs\":[],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_groupJ\",\"type\":\"uint256\"}],\"name\":\"joinGroup\",\"outputs\":[],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_groupMember\",\"type\":\"address\"},{\"name\":\"_newDebitLimit\",\"type\":\"uint256\"},{\"name\":\"_newCreditLimit\",\"type\":\"uint256\"}],\"name\":\"modifyMemberLimits\",\"outputs\":[],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_groupID\",\"type\":\"uint256\"},{\"name\":\"_groupName\",\"type\":\"string\"},{\"name\":\"_currencyName\",\"type\":\"string\"},{\"name\":\"_rate\",\"type\":\"uint256\"},{\"name\":\"_debitLimit\",\"type\":\"uint256\"},{\"name\":\"_creditLimit\",\"type\":\"uint256\"},{\"name\":\"_open\",\"type\":\"bool\"}],\"name\":\"modifyGroup\",\"outputs\":[],\"type\":\"function\"},{\"inputs\":[],\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_creator\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"_groupIDN\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"_groupNameN\",\"type\":\"string\"},{\"indexed\":false,\"name\":\"_NGTimeStamp\",\"type\":\"uint256\"}],\"name\":\"NewGroup\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_modifier\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"_groupIDM\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"_groupNameM\",\"type\":\"string\"},{\"indexed\":false,\"name\":\"_MGTimeStamp\",\"type\":\"uint256\"}],\"name\":\"ModifyGroup\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"memberAddressN\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"memberAliasN\",\"type\":\"string\"},{\"indexed\":false,\"name\":\"_NMTimeStamp\",\"type\":\"uint256\"}],\"name\":\"NewMember\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"_memberJG\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"_aliasJG\",\"type\":\"string\"},{\"indexed\":false,\"name\":\"_groupJG\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"_groupNameJG\",\"type\":\"string\"},{\"indexed\":false,\"name\":\"_JGTimeStamp\",\"type\":\"uint256\"}],\"name\":\"JoinGroup\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"_memberRG\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"_aliasRG\",\"type\":\"string\"},{\"indexed\":false,\"name\":\"_groupRG\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"_groupNameRG\",\"type\":\"string\"},{\"indexed\":false,\"name\":\"_RGTimeStamp\",\"type\":\"uint256\"}],\"name\":\"ResignGroup\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_sender\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"_senderAmount\",\"type\":\"uint256\"},{\"indexed\":true,\"name\":\"_receiver\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"_recieverAmount\",\"type\":\"int256\"},{\"indexed\":false,\"name\":\"_tTimeStamp\",\"type\":\"uint256\"}],\"name\":\"Transaction\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_senderPost\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"_receiverPost\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"_issuePost\",\"type\":\"string\"},{\"indexed\":false,\"name\":\"_contentPost\",\"type\":\"string\"},{\"indexed\":false,\"name\":\"_PostTimeStamp\",\"type\":\"uint256\"}],\"name\":\"PostMember\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_senderPost\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"_receiverPost\",\"type\":\"uint256\"},{\"indexed\":true,\"name\":\"_issuePost\",\"type\":\"string\"},{\"indexed\":false,\"name\":\"_contentPost\",\"type\":\"string\"},{\"indexed\":false,\"name\":\"_PostTimeStamp\",\"type\":\"uint256\"}],\"name\":\"PostGroup\",\"type\":\"event\"}]",
	"codeHex": "0x60606040525b33600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055505b6128cd8061003f6000396000f3606060405236156100ed576000357c010000000000000000000000000000000000000000000000000000000090048063114673fb146100ef57806311d23c7d146101105780631b7db340146101b65780632ada2596146101ef578063526b91d11461029857806352ea5667146102b057806367c7dc2e146102c85780637986cbfc1461038957806392eb4874146103a1578063a9059cbb146103f7578063a9b643f714610418578063ae5f84301461046e578063ceb6065414610514578063e3c3f4c014610632578063eed02e4b14610641578063f1e7ae1f14610659578063f2f6dcaa14610683576100ed565b005b61010e600480803590602001909190803590602001909190505061074d565b005b6101b46004808035906020019091908035906020019082018035906020019191908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050909091908035906020019082018035906020019191908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505090909190505061099d565b005b6101c36004805050610a85565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102056004808035906020019091905050610aab565b604051808715158152602001806020018681526020018581526020018481526020018381526020018281038252878181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156102855780820380516001836020036101000a031916815260200191505b5097505050505050505060405180910390f35b6102ae6004808035906020019091905050610ccc565b005b6102c66004808035906020019091905050610d52565b005b6103876004808035906020019082018035906020019191908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050909091908035906020019082018035906020019191908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050909091908035906020019091908035906020019091908035906020019091908035906020019091905050610dff565b005b61039f60048080359060200190919050506111d4565b005b6103f56004808035906020019082018035906020019191908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050909091905050611265565b005b6104166004808035906020019091908035906020019091905050611583565b005b61046c6004808035906020019082018035906020019191908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505090909190505061184c565b005b6105126004808035906020019091908035906020019082018035906020019191908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050909091908035906020019082018035906020019191908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505090909190505061192d565b005b61052a6004808035906020019091905050611a2b565b604051808873ffffffffffffffffffffffffffffffffffffffff168152602001806020018060200187815260200186815260200185815260200184151581526020018381038352898181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156105c45780820380516001836020036101000a031916815260200191505b508381038252888181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f16801561061d5780820380516001836020036101000a031916815260200191505b50995050505050505050505060405180910390f35b61063f6004805050611cb8565b005b6106576004808035906020019091905050612056565b005b610681600480803590602001909190803590602001909190803590602001909190505061240f565b005b61074b6004808035906020019091908035906020019082018035906020019191908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050909091908035906020019082018035906020019191908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505090909190803590602001909190803590602001909190803590602001909190803590602001909190505061252f565b005b60006001600050600084815260200190815260200160002060005060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806108125750600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b8015610852575082600360005060008473ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060020160005054145b1561099757816001600050600085815260200190815260200160002060005060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff02191690830217905550600160005060008481526020019081526020016000206000506001016000509050823373ffffffffffffffffffffffffffffffffffffffff167f302c87d90d52a4789284bae7b3069c369a940a339bc410c2b2ffd57f78c92151834260405180806020018381526020018281038252848181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156109875780601f1061095c57610100808354040283529160200191610987565b820191906000526020600020905b81548152906001019060200180831161096a57829003601f168201915b5050935050505060405180910390a35b5b505050565b81604051808280519060200190808383829060006004602084601f0104600f02600301f1509050019150506040518091039020833373ffffffffffffffffffffffffffffffffffffffff167f9737a078fe9c464ba6a53452bde0a306ec25a93b33b891579e9d680415370a0e844260405180806020018381526020018281038252848181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f168015610a715780820380516001836020036101000a031916815260200191505b50935050505060405180910390a45b505050565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600060206040519081016040528060008152602001506000600060006000600360005060008873ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060000160009054906101000a900460ff16600360005060008973ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600101600050600360005060008a73ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060020160005054600360005060008b73ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060030160005054600360005060008c73ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060040160005054600360005060008d73ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060050160005054848054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610cab5780601f10610c8057610100808354040283529160200191610cab565b820191906000526020600020905b815481529060010190602001808311610c8e57829003601f168201915b50505050509450955095509550955095509550610cc3565b91939550919395565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610d4e5780600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055505b5b50565b600460005080548091906001019090815481835581811511610da657818360005260206000209182019101610da59190610d87565b80821115610da15760008181506000905550600101610d87565b5090565b5b505050811015610dfb57610df4600460005082815481101561000257906000526020600020900160005b9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16610aab565b5050505050505b5b50565b60006001600360005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060000160006101000a81548160ff0219169083021790558015610e8a57506000600360005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060020160005054145b8015610e9857506000875114155b156111ca57429050336001600050600083815260200190815260200160002060005060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff0219169083021790555086600160005060008381526020019081526020016000206000506001016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610f4e57805160ff1916838001178555610f7f565b82800160010185558215610f7f579182015b82811115610f7e578251826000505591602001919060010190610f60565b5b509050610faa9190610f8c565b80821115610fa65760008181506000905550600101610f8c565b5090565b505085600160005060008381526020019081526020016000206000506002016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061101557805160ff1916838001178555611046565b82800160010185558215611046579182015b82811115611045578251826000505591602001919060010190611027565b5b5090506110719190611053565b8082111561106d5760008181506000905550600101611053565b5090565b5050846001600050600083815260200190815260200160002060005060030160005081905550836001600050600083815260200190815260200160002060005060040160005081905550826001600050600083815260200190815260200160002060005060050160005081905550816001600050600083815260200190815260200160002060005060060160006101000a81548160ff02191690830217905550803373ffffffffffffffffffffffffffffffffffffffff167f280ef5f02ee276dc1738de5e4a47b56ef01a6629d7601c21bd2af94e9cd2498b894260405180806020018381526020018281038252848181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156111b25780820380516001836020036101000a031916815260200191505b50935050505060405180910390a36111c981612056565b5b5b50505050505050565b600260005080548091906001019090815481835581811511611228578183600052602060002091820191016112279190611209565b808211156112235760008181506000905550600101611209565b5090565b5b50505081101561126157611259600260005082815481101561000257906000526020600020900160005b5054611a2b565b505050505050505b5b50565b6000815114151561157f5760011515600360005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060000160009054906101000a900460ff16151514151561157e576001600360005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060000160006101000a81548160ff0219169083021790555080600360005060003373ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506001016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061138557805160ff19168380011785556113b6565b828001600101855582156113b6579182015b828111156113b5578251826000505591602001919060010190611397565b5b5090506113e191906113c3565b808211156113dd57600081815060009055506001016113c3565b5090565b50506000600360005060003373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600201600050819055506000600360005060003373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600301600050819055506000600360005060003373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600401600050819055506000600360005060003373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600501600050819055503373ffffffffffffffffffffffffffffffffffffffff167fba5e544abe6e4b29d9922756f3ec93e17fc2012ed4f015dc180ec94376e08c64824260405180806020018381526020018281038252848181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f16801561156f5780820380516001836020036101000a031916815260200191505b50935050505060405180910390a25b5b5b50565b6000600060006000600060006000600088975060016000506000600360005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060020160005054815260200190815260200160002060005060030160005054965060016000506000600360005060008d73ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060020160005054815260200190815260200160002060005060030160005054955086945085935083858902059250600360005060003373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600401600050546000039150600360005060003373ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506005016000505490508188600360005060003373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600301600050540313801561174057508083600360005060008d73ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506003016000505401125b156117ca5787600360005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060030160008282825054039250508190555082600360005060008c73ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506003016000828282505401925050819055505b8973ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fe1b0d8b64703daa3bec6e15cd73ceb32766dfcfabf3b3e231a4e664d0dcc81448b864260405180848152602001838152602001828152602001935050505060405180910390a35b50505050505050505050565b80600360005060003373ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506001016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106118cb57805160ff19168380011785556118fc565b828001600101855582156118fc579182015b828111156118fb5782518260005055916020019190600101906118dd565b5b5090506119279190611909565b808211156119235760008181506000905550600101611909565b5090565b50505b50565b81604051808280519060200190808383829060006004602084601f0104600f02600301f15090500191505060405180910390208373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fecd5cced6e6934d19294665e3dcc2c9bc2cb906b70202ec54deb1d2f75899082844260405180806020018381526020018281038252848181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f168015611a175780820380516001836020036101000a031916815260200191505b50935050505060405180910390a45b505050565b60006020604051908101604052806000815260200150602060405190810160405280600081526020015060006000600060006001600050600089815260200190815260200160002060005060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160005060008a8152602001908152602001600020600050600101600050600160005060008b8152602001908152602001600020600050600201600050600160005060008c815260200190815260200160002060005060030160005054600160005060008d815260200190815260200160002060005060040160005054600160005060008e815260200190815260200160002060005060050160005054600160005060008f815260200190815260200160002060005060060160009054906101000a900460ff16858054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611bf75780601f10611bcc57610100808354040283529160200191611bf7565b820191906000526020600020905b815481529060010190602001808311611bda57829003601f168201915b50505050509550848054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611c935780601f10611c6857610100808354040283529160200191611c93565b820191906000526020600020905b815481529060010190602001808311611c7657829003601f168201915b505050505094509650965096509650965096509650611cad565b919395979092949650565b60006000600360005060003373ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506002016000505491506001600050600083815260200190815260200160002060005060010160005090503373ffffffffffffffffffffffffffffffffffffffff1660016000506000600360005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060020160005054815260200190815260200160002060005060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515612051576000600360005060003373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600301600050541415612050576000600360005060003373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600201600050819055506000600360005060003373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600401600050819055506000600360005060003373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600501600050819055507f35a8f30e032a6a386ef4cbd858d9e1031ba3920bd3500473225ff4773c2e681e33600360005060003373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600101600050848442604051808673ffffffffffffffffffffffffffffffffffffffff1681526020018060200185815260200180602001848152602001838103835287818154600181600116156101000203166002900481526020019150805460018160011615610100020316600290048015611fb95780601f10611f8e57610100808354040283529160200191611fb9565b820191906000526020600020905b815481529060010190602001808311611f9c57829003601f168201915b505083810382528581815460018160011615610100020316600290048152602001915080546001816001161561010002031660029004801561203c5780601f106120115761010080835404028352916020019161203c565b820191906000526020600020905b81548152906001019060200180831161201f57829003601f168201915b505097505050505050505060405180910390a15b5b5b5050565b6001600360005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060000160006101000a81548160ff0219169083021790551561240b5760006001600050600083815260200190815260200160002060005060010160005080546001816001161561010002031660029004905014151561240a576000600360005060003373ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506002016000505414156124095780600360005060003373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600201600050819055506000600360005060003373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600301600050819055506001600050600082815260200190815260200160002060005060040160005054600360005060003373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600401600050819055506001600050600082815260200190815260200160002060005060050160005054600360005060003373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600501600050819055507fd33fa3bc35f50b5247c2e059493deb82dce262b0d4bae536d2fc6fb22c0cbf2733600360005060003373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600101600050836001600050600086815260200190815260200160002060005060010160005042604051808673ffffffffffffffffffffffffffffffffffffffff16815260200180602001858152602001806020018481526020018381038352878181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156123725780601f1061234757610100808354040283529160200191612372565b820191906000526020600020905b81548152906001019060200180831161235557829003601f168201915b50508381038252858181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156123f55780601f106123ca576101008083540402835291602001916123f5565b820191906000526020600020905b8154815290600101906020018083116123d857829003601f168201915b505097505050505050505060405180910390a15b5b5b5b50565b60016000506000600360005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060020160005054815260200190815260200160002060005060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156125295781600360005060008573ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000506004016000508190555080600360005060008573ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050600501600050819055505b5b505050565b6001600050600088815260200190815260200160002060005060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156128c357600086511415156126725785600160005060008981526020019081526020016000206000506001016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061261357805160ff1916838001178555612644565b82800160010185558215612644579182015b82811115612643578251826000505591602001919060010190612625565b5b50905061266f9190612651565b8082111561266b5760008181506000905550600101612651565b5090565b50505b600085511415156127455784600160005060008981526020019081526020016000206000506002016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106126e657805160ff1916838001178555612717565b82800160010185558215612717579182015b828111156127165782518260005055916020019190600101906126f8565b5b5090506127429190612724565b8082111561273e5760008181506000905550600101612724565b5090565b50505b600084141515612774578360016000506000898152602001908152602001600020600050600301600050819055505b6000831415156127a3578260016000506000898152602001908152602001600020600050600401600050819055505b6000821415156127d2578160016000506000898152602001908152602001600020600050600501600050819055505b6001151581151514156128135760016001600050600089815260200190815260200160002060005060060160006101000a81548160ff021916908302179055505b863373ffffffffffffffffffffffffffffffffffffffff167f302c87d90d52a4789284bae7b3069c369a940a339bc410c2b2ffd57f78c92151884260405180806020018381526020018281038252848181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156128b45780820380516001836020036101000a031916815260200191505b50935050505060405180910390a35b5b5050505050505056",
	"name": "creditCommons"
}
