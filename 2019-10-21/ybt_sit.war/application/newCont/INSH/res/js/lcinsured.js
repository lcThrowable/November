var sameFieldLcinusred={
	"lcinsuredname"	:"appntname",
	"lcinsurednativeplace"	:"nativeplace",//国籍
	"lcinsuredsex"	:"appntsex",//性别
	"lcinsuredroccupationcode"	:"occupationcode",//职业代码
	"lcinsuredidtype"	:"idtype",//证件类型
	"lcinsuredidno"	:"idno",//证件号码
	"lcinsuredcompany"	:"company",//工作单位及名称
	"lcinsuredbirthday"	:"appntbirthday",//出生日期
	"insureidenddate"	:"appntenddate",//证件有效止期
	"rgtaddress"	:"rgtaddress",//个人年收入(万元)
	"lcinsuredresponsibility"	:"responsibility",// 行业代码
	"lcinsuredbirthcounty":"birthcounty",
	"lcinsuredotherresponsibility"	:"otherresponsibility",// 被保人职位
	"industrytype"	:"industrytype",// 行业类别
	"banksccflag":"banksccflag",
	"bankcustomertype":"bankcustomertype",
	"marry":"marry",
	"domicile":"domicile",
	"jobinfo":"occualias",
	"otherjob":"parttimejob",
	"mainincome":"appntincomesource",
	"otherincome":"appntincomeother"
	
};

var sameFieldLcinusredAddress={
		"zipcode"	:"zipcode",//联系地址邮政编码 
		"mobile"	:"mobile",//移动电话
		"homezipcode"	:"homezipcode",//
		"homeprovince"	:"homeprovince",//
		"homephone"	:"homephone",//家庭电话
		"homedistrict"	:"homedistrict",//居住地址区
		"homecity"	:"homecity",//居住地址市
		"homeaddress"	:"homeaddress",//居住地址
		"email"	:"email",
   //	"postalflags"	:"postalflags",
		"countrycodetel_tel":"countrycodetel_tel",
		"areacodetel":"areacodetel",
		"countrycodetel_mob":"countrycodetel_mob",
		"employcountry":"employcountry",
		"employprovince":"employprovince",
		"employcity":"employcity",
		"employarea":"employarea",
		"employdetails":"employdetails",
		"employareacodetel":"employareacodetel",
		"employphone":"employphone",
		"countrycode_loy":"countrycode_loy",
		"employphonecountry":"employphonecountry",
		"homephonecountry":"homephonecountry",
		"countrycodetel_tel":"countrycodetel_tel",
		"areacodetel":"areacodetel",
		"homephone":"homephone",
		"addresscountry":"addresscountry",
		"mobilephonecountry":"mobilephonecountry"
	};

var onlysameFieldLcinusredAddress={
		"zipcode"	:"zipcode",//联系地址邮政编码
		"addresscountry":"addresscountry",
		"homeprovince"	:"homeprovince",//通讯地址省
		"homedistrict"	:"homedistrict",//通讯地址区
		"homecity"	:"homecity",//通讯地址市
		"homeaddress"	:"homeaddress"//通讯地址
		 
	};



/**
 * 投保人 同被保人
 */
afterVueSelect.lcinsuredrelationtoappntinsh = function(form_element) {
	
	if($('#lcinsuredrelationtoappntinsh').val() == '30'){
	$('#lcinsuredrelation').removeAttr("disabled");
	
}else{
	$('#lcinsuredrelation').attr("disabled",true);
	$('#lcinsuredrelation').val("");
	vueobj["testdivchange"].$set(vueobj["testdivchange"].formdata.lcinsured,"otherrelationtoappnt", "");
}

	var topvue = getTopvueObj(this);
 
	var form =$(this.$el)
	.parentsUntil("form").parent("form");
	if (this.formdata.relationtoappnt=="00") {

		for ( var key in topvue.form_elements.lcinsured) {
			
			var targetName= topvue.form_elements.lcinsured[key].name;
			var targetElement= topvue.form_elements.lcinsured[key];
			if (sameFieldLcinusred[topvue.form_elements.lcinsured[key].name]!=undefined) {
		
				bindSameElement.call(topvue, topvue.formdata.lcappnt, sameFieldLcinusred[targetName],
						topvue.formdata.lcinsured,targetName,targetElement);
			}
			
			if (sameFieldLcinusredAddress[topvue.form_elements.lcinsured[key].name]!=undefined) {
				
				bindSameElement.call(topvue, topvue.formdata.lcappntaddress, sameFieldLcinusredAddress[targetName],
						topvue.formdata.lcinsuredaddress,targetName,targetElement);
			}

		}
		
		
		topvue.$nextTick(function () { 
			try {
				form.data('bootstrapValidator').resetForm();
			} catch (e) {
			}
		});
		
		
		$("#lcinsuredpostalflag").hide();
		vueobj["testdivchange"].$set(vueobj["testdivchange"].formdata.lcinsuredaddress,"postalflags", "");

	} else {
		
		
		
		for ( var key in topvue.form_elements.lcinsured) {
			
			var targetName= topvue.form_elements.lcinsured[key].name;
			var targetElement= topvue.form_elements.lcinsured[key];
			if (sameFieldLcinusred[topvue.form_elements.lcinsured[key].name]!=undefined) {
		
				unbindSameElement.call(topvue, sameFieldLcinusred[targetName],
						targetElement);
			}
			
			if (sameFieldLcinusredAddress[topvue.form_elements.lcinsured[key].name]!=undefined) {
				
				unbindSameElement.call(topvue, sameFieldLcinusredAddress[targetName],
						targetElement);
			}

		}
		$("#lcinsuredpostalflag").show();
//		topvue.$set(topvue.form_elementsBYID.lcinsured,"lcinsuredpostalflag","01");
	}

};




/**
 * 投保人 同被保人
 */
 
afterVueSelect.lcinsuredtwoflag = function(form_element) {
	
	var formdata = this.formdata;
	if(   formdata['lcinsured']
		&&formdata['lcinsured'].lcinsuredtwoflag
		&&formdata['lcinsured'].lcinsuredtwoflag.length>=1
		&&formdata['lcinsured'].lcinsuredtwoflag[0]=='lcinsuredtwoflag'){
		
		return true;
	}else{
 
		return false;
	}
	
};

/**
 * 投保人地址同被保人地址
 */
afterVueSelect.lcinsuredpostalflag = function(form_element) {

	var topvue = getTopvueObj(this);
	var obj = $("[name='" + form_element.groupid + this.elementindex + "."
			+ form_element.name + "']");

	if (topvue.formdata.lcinsured.relationtoappnt!="00") {
		
		
		if (obj.is("[type='checkbox']:checked")) {
//			vueobj["testdivchange"].$set(vueobj["testdivchange"].formdata.lcinsuredaddress,"postalflags", "0");
			for ( var key in topvue.form_elements.lcinsured) {
				
				var targetName= topvue.form_elements.lcinsured[key].name;
				var targetElement= topvue.form_elements.lcinsured[key];
				if (onlysameFieldLcinusredAddress[topvue.form_elements.lcinsured[key].name]!=undefined) {
					bindSameElement.call(topvue, topvue.formdata.lcappntaddress, onlysameFieldLcinusredAddress[targetName],
							topvue.formdata.lcinsuredaddress,targetName,targetElement);
				}
			}
		
		} else {
//			vueobj["testdivchange"].$set(vueobj["testdivchange"].formdata.lcinsuredaddress,"postalflags", "");
			for ( var key in topvue.form_elements.lcinsured) {
				var targetName= topvue.form_elements.lcinsured[key].name;
				var targetElement= topvue.form_elements.lcinsured[key];
				if (onlysameFieldLcinusredAddress[topvue.form_elements.lcinsured[key].name]!=undefined) {
					unbindSameElement.call(topvue, onlysameFieldLcinusredAddress[targetName],
							targetElement);
				}
			}
		}
		
		
	}	
};

//dbs_city  dbs_province dbs_area 被保人通讯地址省
commonCombobox_option.commonCombobox_insuredemployprovince ={

	url :  path + '/newCont/codeselect/allprovinceid/province.do',
	valueField : "provinceid",
	// 显示在输入框的
	inputText : "provincename",
	textShow : [ "provincename" ]
};

//dbs_city  dbs_province dbs_area 被保人通讯地址
commonCombobox_option.commonCombobox_insuredemploycity  =  {
	url :  path + '/newCont/codeselect/allcity/#lcinsuredemployprovince.do',
	valueField : "cityid",
	// 显示在输入框的
	inputText : "cityname",
	textShow : [ "cityname" ]
};

//dbs_city  dbs_province dbs_area 被保人通讯地址
commonCombobox_option.commonCombobox_insuredemploydistrict = {

	url :  path + '/newCont/codeselect/allcounty/#lcinsuredemploycity.do',
	valueField : "countyid",
	// 显示在输入框的
	inputText : "countyname",
	textShow : [ "countyname" ]
};

//dbs_city  dbs_province dbs_area 被保人居住地址(省)
commonCombobox_option.commonCombobox_insuredhomeprovince = {

	url :  path + '/newCont/codeselect/allprovinceid/province.do',
	valueField : "provinceid",
	// 显示在输入框的
	inputText : "provincename",
	textShow : [ "provincename" ]
};
//dbs_city  dbs_province dbs_area 被保人居住地址(市)
commonCombobox_option.commonCombobox_insuredhomecity = {
	url :  path + '/newCont/codeselect/allcity/#lcinsuredhomeprovince.do',
	valueField : "cityid",
	// 显示在输入框的
	inputText : "cityname",
	textShow : [ "cityname" ]
};
//dbs_city  dbs_province dbs_area 被保人居住地址(区)
commonCombobox_option.commonCombobox_insuredhomedistrict = {
	url :  path + '/newCont/codeselect/allcounty/#lcinsuredhomecityinsh.do',
	valueField : "countyid",
	// 显示在输入框的
	inputText : "countyname",
	textShow : [ "countyname" ]
};

commonCombobox_option.commonCombobox_banksccflag = {
		"data" : [ {
			"value" : "N",
			"text" : "否"					
		}, {
			"value" : "Y",
			"text" : "是"
		} ]
	};
commonCombobox_option.commonCombobox_bankcustomertype = {

	url : path + '/newCont/codeselect/common/bankcustomertype',
	valueField : "code",
	relateType: "vue",
	// 显示在输入框的
	inputText :  "codename" ,
	textShow : [ "codename" ]
	
};
commonCombobox_option.commonCombobox_relation_insh = {

		url : path + '/newCont/codeselect/common/relation_insh',
		valueField : "code",
		relateType: "vue",
		// 显示在输入框的
		inputText :  "codename" ,
		textShow : [ "codename" ]
		
	};
commonCombobox_option.commonCombobox_occualias={
	url : path + '/LdcodeController/selectDistinctCodeAlias.do?codetype=occupationinsh',
	valueField : "comcode",
	// 显示在输入框的
	inputText : "codealias",
	// 显示在下拉列表的项，默认空，空则全部显示
	textShow : [ "codealias" ]
},

//INSH职业代码
commonCombobox_option.commonCombobox_jobinfoinsh ={
	url : path + '/LdcodeController/code/#lcinsuredjobinfo.do',
	valueField : "code",
	// 显示在输入框的
	inputText : "codename",
	// 显示在下拉列表的项，默认空，空则全部显示
	textShow : [ "code","codename" ],
	textShowFormat: function(textShow,linedata){
		return  linedata.code+"-"+linedata.codename;
	}
};

//居住地址国家变化时改变居住地址省市区下拉状态 
afterVueSelect.lcinsuredaddresscountry = function(form_element) {
	if($('#lcinsuredrelationtoappntinsh').val()=="00"){
		return;
	}
	if($("#lcinsuredpostalflag").is("[type='checkbox']:checked")){
		return;
	}
	if($('#lcinsuredaddresscountry').val() != 'CN'){
		if($('#lcinsuredaddresscountry').val()!=""&&
				$('#lcinsuredaddresscountry').val()!=null&&
				$('#lcinsuredaddresscountry').val()!=undefined){
			vueobj["testdivchange"].$set(vueobj["testdivchange"].formdata.lcinsuredaddress,"homeprovince", null);
			vueobj["testdivchange"].$set(vueobj["testdivchange"].formdata.lcinsuredaddress,"homecity", null);
			vueobj["testdivchange"].$set(vueobj["testdivchange"].formdata.lcinsuredaddress,"homedistrict",null);
			$('#lcinsuredhomeprovince').combobox("clear");
			$('#lcinsuredhomecityinsh').combobox("clear");
			$('#lcinsuredhomedistrictinsh').combobox("clear");
		}
		
		
		$('#lcinsuredhomeprovince').combobox("disable");
		
		$('#lcinsuredhomecityinsh').combobox("disable");
		
		$('#lcinsuredhomedistrictinsh').combobox("disable");		
	}else{
		$('#lcinsuredhomeprovince').combobox("enable");
		$('#lcinsuredhomecityinsh').combobox("enable");
		$('#lcinsuredhomedistrictinsh').combobox("enable");
	}
}
//单位/学校地址国家变化时改变单位/学校地址省市区下拉状态
afterVueSelect.lcinsuredemploycountry = function(form_element) {
	if($('#lcinsuredrelationtoappntinsh').val()=="00"){
		return;
	}
	if($('#lcinsuredemploycountry').val() != 'CN'){		
		
		if($('#lcinsuredemploycountry').val()!=""&&
				$('#lcinsuredemploycountry').val()!=null&&
				$('#lcinsuredemploycountry').val()!=undefined){
			vueobj["testdivchange"].$set(vueobj["testdivchange"].formdata.lcinsuredaddress,"employprovince", null);
			vueobj["testdivchange"].$set(vueobj["testdivchange"].formdata.lcinsuredaddress,"employcity", null);
			vueobj["testdivchange"].$set(vueobj["testdivchange"].formdata.lcinsuredaddress,"employarea",null);
			$('#lcinsuredemployprovince').combobox("clear");
			$('#lcinsuredemploycity').combobox("clear");
			$('#lcinsuredemployarea').combobox("clear");
		}
//		vueobj["testdivchange"].$set(vueobj["testdivchange"].formdata.lcinsuredaddress,"employprovince", null);
//		vueobj["testdivchange"].$set(vueobj["testdivchange"].formdata.lcinsuredaddress,"employcity", null);
//		vueobj["testdivchange"].$set(vueobj["testdivchange"].formdata.lcinsuredaddress,"employarea",null);
//		$('#lcinsuredemployprovince').combobox("clear");
		$('#lcinsuredemployprovince').combobox("disable");
//		$('#lcinsuredemploycity').combobox("clear");
		$('#lcinsuredemploycity').combobox("disable");
//		$('#lcinsuredemployarea').combobox("clear");
		$('#lcinsuredemployarea').combobox("disable");
	}else{
		$('#lcinsuredemployprovince').combobox("enable");
		$('#lcinsuredemploycity').combobox("enable");
		$('#lcinsuredemployarea').combobox("enable");				
	}
	
}
//主要来源 不为其他为置灰
afterVueSelect.lcinsuredmainincome = function(form_element) {
	if($('#lcinsuredrelationtoappntinsh').val()=="00"){
		return;
	}
	if($("#lcinsuredmainincome").val()=='4'){
		$('#lcinsuredotherincome').removeAttr("disabled");
	}else{
		$('#lcinsuredotherincome').attr("disabled",true);
		$('#lcinsuredotherincome').val("");
		vueobj["testdivchange"].$set(vueobj["testdivchange"].formdata.lcinsured,"otherincome", "");
	}

	
}

//根据身份证号，同步出生日期
afterVueSelect.lcinsuredidno = function(form_element) {
	var topvue = getTopvueObj(this);
	var obj = $("[name='" + form_element.groupid + this.elementindex + "."
			+ form_element.name + "']");
	/*var form = $(this.$el).parentsUntil("form").parent("form");*/
	if($("#lcinsuredidtype").val() != "I" && $("#lcinsuredidtype").val() != "J"){
		return;
	}
	if($("#lcinsuredidtype").val() == "I"||$("#lcinsuredidtype").val() == "J"){
		if (obj.is("[id='lcinsuredidno']")){
//			topvue.$set(topvue.formdata.lcinsured,"insureidenddate","2099-01-01"); 
			var idno = $("#lcinsuredidno").val();
			var birthday = idno.substring(6,14);
			var year = birthday.substring(0,4);
			var mon = birthday.substring(4,6);
			var day = birthday.substring(6);
			var formatBirth = year + "-" + mon + "-" + day;
			topvue.$set(topvue.formdata.lcinsured,"lcinsuredbirthday",formatBirth);
			
		}
	/*	//重置出生日期的校验
		if($("#lcinsuredidno").val().length == 18){
			form.data('bootstrapValidator').resetField($('#lcinsuredbirthday'));
//			$.fn.bootstrapValidator.validators.lcinsured_idno;
		}*/
	}
	
}

$.fn.bootstrapValidator.validators.lcinsured_idno = {
		validate : function(validator, $field, options) {
			var topvueobj = getTopvueObj(options.vueobj);
			var lcinsured = topvueobj.formdata.lcinsured;
			var form = $(options.vueobj.$el).parentsUntil("form").parent("form");
			if(lcinsured.lcinsuredidno.length==18||(lcinsured.lcinsuredidtype!="I"&&lcinsured.lcinsuredidtype!="J")){
				form.data('bootstrapValidator').resetField($("#lcinsuredbirthday"));
				form.data('bootstrapValidator').updateStatus($field, "VALID");
				form.find("input[id*='lcinsuredidno']").each(function() {
					if (!form.data('bootstrapValidator').isValidField($(this))) {
						form.data('bootstrapValidator').revalidateField($(this));
					}

				});
				return true;
			}
			return false;
		}
	};
	bootstrap_valid.lcinsured_idno = function(validitem) {

		var vueobj = this;
		var validobj = {
			message : "当前证件类型下证件号码必须为18位，请重新输入",
			vueobj : vueobj
		};

		return validobj;

	};
	
	
	/*第二被保人*/
	/**
	 * 第二被保人地址同投保人地址
	 */
	afterVueSelect.inshlcinsuredpostalflag = function(form_element) {

		var topvue = getTopvueObj(this);
		var obj = $("[name='" + form_element.groupid + this.elementindex + "."
				+ form_element.name + "']");

		if (topvue.formdata.lcinsuredtwo.relationtoappnt!="00") {
			
			
			if (obj.is("[type='checkbox']:checked")) {
//				vueobj["testdivchange"].$set(vueobj["testdivchange"].formdata.lcinsuredaddress,"postalflags", "0");
				for ( var key in topvue.form_elements.lcinsuredtwoinsh) {
					
					var targetName= topvue.form_elements.lcinsuredtwoinsh[key].name;
					var targetElement= topvue.form_elements.lcinsuredtwoinsh[key];
					if (onlysameFieldLcinusredAddress[topvue.form_elements.lcinsuredtwoinsh[key].name]!=undefined) {
						bindSameElement.call(topvue, topvue.formdata.lcappntaddress, onlysameFieldLcinusredAddress[targetName],
								topvue.formdata.lcinsuredtwoaddress,targetName,targetElement);
					}
				}
			
			} else {
//				vueobj["testdivchange"].$set(vueobj["testdivchange"].formdata.lcinsuredaddress,"postalflags", "");
				for ( var key in topvue.form_elements.lcinsuredtwoinsh) {
					var targetName= topvue.form_elements.lcinsuredtwoinsh[key].name;
					var targetElement= topvue.form_elements.lcinsuredtwoinsh[key];
					if (onlysameFieldLcinusredAddress[topvue.form_elements.lcinsuredtwoinsh[key].name]!=undefined) {
						unbindSameElement.call(topvue, onlysameFieldLcinusredAddress[targetName],
								targetElement);
					}
				}
			}				
		}	
	};
	
	commonCombobox_option.commonCombobox_occualias1={
			url : path + '/LdcodeController/selectDistinctCodeAlias.do?codetype=occupationinsh',
			valueField : "comcode",
			delayLoadDataFlag : true,
			// 显示在输入框的
			inputText : "codealias",
			// 显示在下拉列表的项，默认空，空则全部显示
			textShow : [ "codealias" ]
		};
	//INSH职业代码
	commonCombobox_option.commonCombobox_jobinfoinsh1 ={
		url : path + '/LdcodeController/code/#inshlcinsuredjobinfo.do',
		valueField : "code",
		delayLoadDataFlag : true,
		// 显示在输入框的
		inputText : "codename",
		// 显示在下拉列表的项，默认空，空则全部显示
		textShow : [ "code","codename" ],
		textShowFormat: function(textShow,linedata){
			return  linedata.code+"-"+linedata.codename;
		}
	};
	//dbs_city  dbs_province dbs_area 第二被保人通讯地址省
	commonCombobox_option.commonCombobox_insuredemployprovince1 ={

		url :  path + '/newCont/codeselect/allprovinceid/province.do',
		valueField : "provinceid",
		delayLoadDataFlag : true,
		// 显示在输入框的
		inputText : "provincename",
		textShow : [ "provincename" ]
	};
	//dbs_city  dbs_province dbs_area 第二被保人通讯地址
	commonCombobox_option.commonCombobox_insuredemploycity1  =  {
		url :  path + '/newCont/codeselect/allcity/#inshlcinsuredemployprovince.do',
		valueField : "cityid",
		delayLoadDataFlag : true,
		// 显示在输入框的
		inputText : "cityname",
		textShow : [ "cityname" ]
	};
	//dbs_city  dbs_province dbs_area 第二被保人通讯地址
	commonCombobox_option.commonCombobox_insuredemploydistrict1 = {

		url :  path + '/newCont/codeselect/allcounty/#inshlcinsuredemploycity.do',
		valueField : "countyid",
		delayLoadDataFlag : true,
		// 显示在输入框的
		inputText : "countyname",
		textShow : [ "countyname" ]
	};

	//dbs_city  dbs_province dbs_area 第二被保人居住地址(省)
	commonCombobox_option.commonCombobox_insuredhomeprovince1={

		url :  path + '/newCont/codeselect/allprovinceid/province.do',
		valueField : "provinceid",
		delayLoadDataFlag : true,
		// 显示在输入框的
		inputText : "provincename",
		textShow : [ "provincename" ]
	};
	//dbs_city  dbs_province dbs_area 第二被保人居住地址(市)
	commonCombobox_option.commonCombobox_insuredhomecity1 ={

		url :  path + '/newCont/codeselect/allcity/#inshlcinsuredhomeprovince.do',
		valueField : "cityid",
		delayLoadDataFlag : true,
		// 显示在输入框的
		inputText : "cityname",
		textShow : [ "cityname" ]
	};		
	//dbs_city  dbs_province dbs_area 第二被保人居住地址(区)
	commonCombobox_option.commonCombobox_insuredhomedistrict1 = {

		url :  path + '/newCont/codeselect/allcounty/#inshlcinsuredhomecityinsh.do',
		 valueField : "countyid",
		 delayLoadDataFlag : true,
			// 显示在输入框的
		inputText : "countyname",
		textShow : [ "countyname" ]
	};
	commonCombobox_option.commonCombobox_relation_insh_one = {

			url : path + '/newCont/codeselect/common/lcinsuredtwo/relation_insh',
			valueField : "code",
			relateType: "vue",
			// 显示在输入框的
			inputText :  "codename" ,
			textShow : [ "codename" ]
			
		};
	//居住地址国家变化时改变居住地址省市区下拉状态
	afterVueSelect.inshlcinsuredaddresscountry = function(form_element) {
		if($('#inshlcinsuredrelationtoappntinsh').val()=="00"){
			return;
		}
		if($("#inshlcinsuredpostalflag").is("[type='checkbox']:checked")){
			return;
		}
		if($('#inshlcinsuredaddresscountry').val() != 'CN'){
			if($('#inshlcinsuredaddresscountry').val()!=""&&
					$('#inshlcinsuredaddresscountry').val()!=null&&
					$('#inshlcinsuredaddresscountry').val()!=undefined){
				vueobj["testdivchange"].$set(vueobj["testdivchange"].formdata.lcinsuredtwoaddress,"homeprovince", null);
				vueobj["testdivchange"].$set(vueobj["testdivchange"].formdata.lcinsuredtwoaddress,"homecity", null);
				vueobj["testdivchange"].$set(vueobj["testdivchange"].formdata.lcinsuredtwoaddress,"homedistrict",null);
				$('#inshlcinsuredhomeprovince').combobox("clear");
				$('#inshlcinsuredhomecityinsh').combobox("clear");
				$('#inshlcinsuredhomedistrictinsh').combobox("clear");
			}
			
			
			$('#inshlcinsuredhomeprovince').combobox("disable");
			
			$('#inshlcinsuredhomecityinsh').combobox("disable");
			
			$('#inshlcinsuredhomedistrictinsh').combobox("disable");		
		}else{
			$('#inshlcinsuredhomeprovince').combobox("enable");
			$('#inshlcinsuredhomecityinsh').combobox("enable");
			$('#inshlcinsuredhomedistrictinsh').combobox("enable");
		}
	};
	//主要来源 不为其他为置灰
	afterVueSelect.inshlcinsuredmainincome = function(form_element) {
		if($('#inshlcinsuredrelationtoappntinsh').val()=="00"){
			return;
		}
		if($("#inshlcinsuredmainincome").val()=='4'){
			$('#inshlcinsuredotherincome').removeAttr("disabled");
		}else{
			$('#inshlcinsuredotherincome').attr("disabled",true);
			$('#inshlcinsuredotherincome').val("");
			vueobj["testdivchange"].$set(vueobj["testdivchange"].formdata.lcinsuredtwo,"otherincome", "");
		}		
	};
	//单位/学校地址国家变化时改变单位/学校地址省市区下拉状态
	afterVueSelect.inshlcinsuredemploycountry = function(form_element) {
		if($('#inshlcinsuredrelationtoappntinsh').val()=="00"){
			return;
		}
		if($('#inshlcinsuredemploycountry').val() != 'CN'){		
			
			if($('#inshlcinsuredemploycountry').val()!=""&&
					$('#inshlcinsuredemploycountry').val()!=null&&
					$('#inshlcinsuredemploycountry').val()!=undefined){
				vueobj["testdivchange"].$set(vueobj["testdivchange"].formdata.lcinsuredtwoaddress,"employprovince", null);
				vueobj["testdivchange"].$set(vueobj["testdivchange"].formdata.lcinsuredtwoaddress,"employcity", null);
				vueobj["testdivchange"].$set(vueobj["testdivchange"].formdata.lcinsuredtwoaddress,"employarea",null);
				$('#inshlcinsuredemployprovince').combobox("clear");
				$('#inshlcinsuredemploycity').combobox("clear");
				$('#inshlcinsuredemployarea').combobox("clear");
			}
//			vueobj["testdivchange"].$set(vueobj["testdivchange"].formdata.lcinsuredaddress,"employprovince", null);
//			vueobj["testdivchange"].$set(vueobj["testdivchange"].formdata.lcinsuredaddress,"employcity", null);
//			vueobj["testdivchange"].$set(vueobj["testdivchange"].formdata.lcinsuredaddress,"employarea",null);
//			$('#lcinsuredemployprovince').combobox("clear");
			$('#inshlcinsuredemployprovince').combobox("disable");
//			$('#lcinsuredemploycity').combobox("clear");
			$('#inshlcinsuredemploycity').combobox("disable");
//			$('#lcinsuredemployarea').combobox("clear");
			$('#inshlcinsuredemployarea').combobox("disable");
		}else{
			$('#inshlcinsuredemployprovince').combobox("enable");
			$('#inshlcinsuredemploycity').combobox("enable");
			$('#inshlcinsuredemployarea').combobox("enable");				
		}
		
	};
	
	
	
	var sameFieldLcinusredtwo={
			"lcinsuredname"	:"appntname",
			"lcinsurednativeplace"	:"nativeplace",//国籍
			"lcinsuredsex"	:"appntsex",//性别
			"lcinsuredroccupationcode"	:"occupationcode",//职业代码
			"lcinsuredidtype"	:"idtype",//证件类型
			"lcinsuredidno"	:"idno",//证件号码
			"lcinsuredcompany"	:"company",//工作单位及名称
			"lcinsuredbirthday"	:"appntbirthday",//出生日期
			"insureidenddate"	:"appntenddate",//证件有效止期
			"rgtaddress"	:"rgtaddress",//个人年收入(万元)
			"lcinsuredresponsibility"	:"responsibility",// 行业代码
			"lcinsuredbirthcounty":"birthcounty",
			"lcinsuredotherresponsibility"	:"otherresponsibility",// 被保人职位
			"industrytype"	:"industrytype",// 行业类别
			"banksccflag":"banksccflag",
			"bankcustomertype":"bankcustomertype",
			"marry":"marry",
			"domicile":"domicile",
			"jobinfo":"occualias",
			"otherjob":"parttimejob",
			"mainincome":"appntincomesource",
			"otherincome":"appntincomeother"
			
		};
	

	var sameFieldLcinusredtwoAddress={
			"zipcode"	:"zipcode",//联系地址邮政编码 
			"mobile"	:"mobile",//移动电话
			"homezipcode"	:"homezipcode",//
			"homeprovince"	:"homeprovince",//
			"homephone"	:"homephone",//家庭电话
			"homedistrict"	:"homedistrict",//居住地址区
			"homecity"	:"homecity",//居住地址市
			"homeaddress"	:"homeaddress",//居住地址
			"email"	:"email",
	   //	"postalflags"	:"postalflags",
			"countrycodetel_tel":"countrycodetel_tel",
			"areacodetel":"areacodetel",//lcinsuredtwoaddress.areacodetel
			"countrycodetel_mob":"countrycodetel_mob",
			"employcountry":"employcountry",
			"employprovince":"employprovince",
			"employcity":"employcity",
			"employarea":"employarea",
			"employdetails":"employdetails",
			"employareacodetel":"employareacodetel",
			"employphone":"employphone",
			"countrycode_loy":"countrycode_loy",
			"employphonecountry":"employphonecountry",
			"homephonecountry":"homephonecountry",
			"countrycodetel_tel":"countrycodetel_tel",
			"areacodetel":"areacodetel",
			"homephone":"homephone",
			"addresscountry":"addresscountry",
			"mobilephonecountry":"mobilephonecountry"
		};
	/**
	 * 投保人 同被保人
	 */
	afterVueSelect.inshlcinsuredrelationtoappntinsh = function(form_element) {
		
		if($('#inshlcinsuredrelationtoappntinsh').val() == '30'){
		$('#inshlcinsuredrelation').removeAttr("disabled");
		
	}else{
		$('#inshlcinsuredrelation').attr("disabled",true);
		$('#inshlcinsuredrelation').val("");
		vueobj["testdivchange"].$set(vueobj["testdivchange"].formdata.lcinsuredtwo,"otherrelationtoappnt", "");
	}

		var topvue = getTopvueObj(this);
	 
		var form =$(this.$el)
		.parentsUntil("form").parent("form");
		if (this.formdata.relationtoappnt=="00") {

			for ( var key in topvue.form_elements.lcinsuredtwoinsh) {
				
				var targetName= topvue.form_elements.lcinsuredtwoinsh[key].name;
				var targetElement= topvue.form_elements.lcinsuredtwoinsh[key];
				if (sameFieldLcinusredtwo[topvue.form_elements.lcinsuredtwoinsh[key].name]!=undefined) {
			
					bindSameElement.call(topvue, topvue.formdata.lcappnt, sameFieldLcinusredtwo[targetName],
							topvue.formdata.lcinsuredtwo,targetName,targetElement);
				}
				
				if (sameFieldLcinusredtwoAddress[topvue.form_elements.lcinsuredtwoinsh[key].name]!=undefined) {
					
					bindSameElement.call(topvue, topvue.formdata.lcappntaddress, sameFieldLcinusredtwoAddress[targetName],
							topvue.formdata.lcinsuredtwoaddress,targetName,targetElement);
				}

			}
			
			
			topvue.$nextTick(function () { 
				try {
					form.data('bootstrapValidator').resetForm();
				} catch (e) {
				}
			});					
			$("#inshlcinsuredpostalflag").hide();
			vueobj["testdivchange"].$set(vueobj["testdivchange"].formdata.lcinsuredtwoaddress,"postalflags", "");

		} else {	
			for ( var key in topvue.form_elements.lcinsuredtwoinsh) {
				
				var targetName= topvue.form_elements.lcinsuredtwoinsh[key].name;
				var targetElement= topvue.form_elements.lcinsuredtwoinsh[key];
				if (sameFieldLcinusredtwo[topvue.form_elements.lcinsuredtwoinsh[key].name]!=undefined) {
			
					unbindSameElement.call(topvue, sameFieldLcinusredtwo[targetName],
							targetElement);
				}
				
				if (sameFieldLcinusredtwoAddress[topvue.form_elements.lcinsuredtwoinsh[key].name]!=undefined) {
					
					unbindSameElement.call(topvue, sameFieldLcinusredtwoAddress[targetName],
							targetElement);
				}

			}
			$("#inshlcinsuredpostalflag").show();
		}
	};
	
	/**
	 * 投保人 同被保人
	 */
	afterVueSelect.relationtomaininsured = function(form_element) {
		
		if($('#relationtomaininsured').val() == '30'){
		$('#relationtomaininsuredother').removeAttr("disabled");
		
	}else{
		$('#relationtomaininsuredother').attr("disabled",true);
		$('#relationtomaininsuredother').val("");
		vueobj["testdivchange"].$set(vueobj["testdivchange"].formdata.lcinsuredtwo,"otherrelatoinsu", "");
	}
};
	
	
	
	//根据身份证号，同步出生日期
	afterVueSelect.inshlcinsuredidno = function(form_element) {
		var topvue = getTopvueObj(this);
		var obj = $("[name='" + form_element.groupid + this.elementindex + "."
				+ form_element.name + "']");
		/*var form = $(this.$el).parentsUntil("form").parent("form");*/
		if($("#inshlcinsuredidtype").val() != "I" && $("#inshlcinsuredidtype").val() != "J"){
			return;
		}
		if($("#inshlcinsuredidtype").val() == "I"||$("#inshlcinsuredidtype").val() == "J"){
			if (obj.is("[id='inshlcinsuredidno']")){
//				topvue.$set(topvue.formdata.lcinsured,"insureidenddate","2099-01-01"); 
				var idno = $("#inshlcinsuredidno").val();
				var birthday = idno.substring(6,14);
				var year = birthday.substring(0,4);
				var mon = birthday.substring(4,6);
				var day = birthday.substring(6);
				var formatBirth = year + "-" + mon + "-" + day;
				topvue.$set(topvue.formdata.lcinsuredtwo,"lcinsuredbirthday",formatBirth);
				
			}
		/*	//重置出生日期的校验
			if($("#lcinsuredidno").val().length == 18){
				form.data('bootstrapValidator').resetField($('#lcinsuredbirthday'));
//				$.fn.bootstrapValidator.validators.lcinsured_idno;
			}*/
		}
		
	}

	$.fn.bootstrapValidator.validators.lcinsuredtwo_idno = {
			validate : function(validator, $field, options) {
				var topvueobj = getTopvueObj(options.vueobj);
				var lcinsured = topvueobj.formdata.lcinsuredtwo;
				var form = $(options.vueobj.$el).parentsUntil("form").parent("form");
				if(lcinsuredtwo.lcinsuredidno.length==18||(lcinsuredtwo.lcinsuredidtype!="I"&&lcinsuredtwo.lcinsuredidtype!="J")){
					form.data('bootstrapValidator').resetField($("#lcinsuredbirthday"));
					form.data('bootstrapValidator').updateStatus($field, "VALID");
					form.find("input[id*='lcinsuredidno']").each(function() {
						if (!form.data('bootstrapValidator').isValidField($(this))) {
							form.data('bootstrapValidator').revalidateField($(this));
						}

					});
					return true;
				}
				return false;
			}
		};
		bootstrap_valid.lcinsuredtwo_idno = function(validitem) {

			var vueobj = this;
			var validobj = {
				message : "当前证件类型下证件号码必须为18位，请重新输入",
				vueobj : vueobj
			};

			return validobj;

		};
		
		
		
		
		var temp_birthday="";

		afterloadNewElements.lcinsured_tabinfo=function(){
			var topvue = getTopvueObj(this);
			temp_birthday=topvue.formdata.lcinsured.lcinsuredbirthday;
		}
		
		beforesubmitvueform.lcinsured_tabinfoform=function(){
			var topvue = getTopvueObj(this);
			if(temp_birthday!=""){
				if(topvue.formdata.lcinsured.lcinsuredbirthday!=temp_birthday){
					if(confirm("客户证件生日与建议书系统的录入生日不一致，请点击【确认】保存或【取消】修改证件信息。")){
						return true;
					}else{
						return false;
					}
				}
			}
			return true;
		}
		var interval=setInterval(mytime,500);
		var a=0;
		function mytime(){			
			if($("#lcinsuredname").is(":visible")){
				 if(a==0){
					 $("#lcinsuredname").after("<small class='help-block' style='color: blue;'>请核对证件姓名</small>");
					 a++;
				 }
		         
		     }		
			 if($("#inshlcinsuredname").is(":visible")){
				 if(a==1){
					 $("#inshlcinsuredname").after("<small class='help-block' style='color: blue;'>请核对证件姓名</small>");
					 a++;
				 }		         
		     }	
			 if(a==2){
				 clearInterval(interval);
			 }
		}