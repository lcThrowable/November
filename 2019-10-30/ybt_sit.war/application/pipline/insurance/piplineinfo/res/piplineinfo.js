var vueobj=[];
var vue_config = [];
var vueMethods={};
var branchvalue;
var baseUrl ="/pipline/insurance/piplineinfo/info";
vue_config.push(
		{id : "piplineinfo"    , url : "/pipline/insurance/piplineinfo/pageinit" + piplineid} 
);

var afterVueSelect={};

vueMethods.backToIndex = function(){
//	location.href = "/application/pipline/insurance/piplineinfo/jsp/piplineinfoOp.jsp";
	history.back(-1);
	
}
var commonCombobox_option={};

	commonCombobox_option.commonCombobox_branchauth= {
	    url : path + '/pipline/common/branch/authUser.do',
	    valueField : "comcode",
	    // 显示在输入框的
	    inputText : "comname",
	    // 显示在下拉列表的项，默认空，空则全部显示
	    textShow : ["comname" ],
	    afterselect : function(ele,$target  ,text,value,comboboxObj){
	    	branchvalue = value;
	    }
	};
		
	commonCombobox_option.commonCombobox_pe = {
	    url : path + '/pipline/common/peUser/'+branchvalue+'.do',
//			url : path + '/pipline/common/peUser/#branch.do',
	    valueField : "emplid",
	    oneResultAuto:false,
	    // 显示在输入框的
	    inputText : "name",
	    // 显示在下拉列表的项，默认空，空则全部显示
	    textShow : ["emplid","name" ]
	};
	
	commonCombobox_option.commonCombobox_rm = {
		    url : path + '/pipline/common/rmUser/#branch.do',
		    valueField : "emplid",
		    // 显示在输入框的
		    inputText : "name",
		    // 显示在下拉列表的项，默认空，空则全部显示
		    textShow : ["emplid","name" ] 
		};
		
		//成功率下拉选项
		commonCombobox_option.commonCombobox_successrate = {
				url : path + '/newCont/codeselect/common/pipeline_rate.do',
				valueField : "code",
//				relateType: "vue",
				// 显示在输入框的
				inputText :  "codename" ,
				textShow : [ "codename" ]
		};
	
	
		//年限 即缴费期间
		commonCombobox_option.commonCombobox_pipeline_payendyears = {
		    url: path + '/newCont/codeselect/searchRiskParamsdef/#riskcode/payendyear.do',
		    valueField: "paramscode",
//		    relateType: "vue",
		    // 显示在输入框的
		    inputText: "paramsname",
		    // 显示在下拉列表的项，默认空，空则全部显示
		    textShow: ["paramsname"]
		};
	
		commonCombobox_option.commonCombobox_insurancecom= {
		    url : path + '/newContEnter/selectFromLacom.do',
		    valueField : "agentcom",
		    // 显示在输入框的
		    inputText : "name",
		    // 显示在下拉列表的项，默认空，空则全部显示
		    textShow : ["name" ],
		    afterselect : function(){
		    	//为文本域绑定事件，自使用高度
//		    	$("#remark").removeAttr("disabled");
//		    	
//		    	$("remark").attr("readonly",true);
		    	if($("#remark").attr("disabled") == "disabled" && $("#remark").val() != ""){
//		    		document.getElementById("remark").style.height = "auto";
		    		$("#remark").removeAttr("disabled");
		    		$("#remark").attr("readonly","readonly");
		    	}
		    	if($("#mgremark").attr("disabled") == "disabled" && $("#mgremark").val() != ""){
		    		$("#mgremark").removeAttr("disabled");
		    		$("#mgremark").attr("readonly","readonly");
		    	}
		    	
		    	
		    	$(".textarea_remark").on("input",textAreaAutoChange);
		    	$(".textarea_remark").on("focus",textAreaAutoChange);
		    	$(".textarea_remark").on("propertychange",textAreaAutoChange);
		    	$(".textarea_remark").mouseover(textAreaAutoChange);
//		    	$("textarea.disabled").scroll(textAreaAutoChange);
//		    	$("textarea.disabled").scroll(textAreaAutoChange);
//		    	$(".textarea_remark").on("click",textAreaAutoChange);
		    	/*var topvue = vueobj["piplineinfo"];
		        var len = topvue.formdata.listPipline.length;*/
		        
/*		        $("#prem\\["+(len-1)+"\\]").after("<small class='help-block' style='color: blue;'>（趸交保费/10）</small>");
		        if($("#prem\\["+(len-1)+"\\]").siblings().length == 3){
		         $("#prem\\["+(len-1)+"\\]").siblings()[0].remove();
		         $("#prem\\["+(len-1)+"\\]").siblings()[0].remove();		         
		        }*/
		    }
		};
		
		
		commonCombobox_option.commonCombobox_riskcode={

		    url : path + '/newCont/codeselect/searchrisk2/#insurance.do',
		    valueField : "riskcode"
//		    ,relateType"vue"
		    // 显示在输入框的
		    ,inputText : "riskname"
		    ,autoSelect: false
		    ,textShow : [ "riskname" ]
			,afterselect :function (ele,$target  ,text,value,comboboxObj){

				var  that = this ; 
				var topvue = vueobj["piplineinfo"];
//				var topvue = getTopvueObj(this);
//				console.log(topvue);
//				var risktypeid_jqexp ="#risktype"; //产品类型
//				var riskname_each = "#riskname"; //产品名称
//				console.log(ele.attr("id").split("[")[1].substring(0,1));
//				console.log(comboboxObj.select_Data.risktype);
				if(ele.attr("id")&&ele.attr("id").indexOf("[")>=0){
//    		  		aryIndex = getIndex(ele.attr("id"));
//    		  		risktypeid_jqexp = risktypeid_jqexp + "\\["+aryIndex+"\\]";
//    		  		riskname_each = riskname_each + "\\["+aryIndex+"\\]";  
					var index = ele.attr("id").split("[")[1].substring(0,1);
					topvue.$set(topvue.formdata.listPipline[index].piplineinfo,"risktype", comboboxObj.select_Data.risktype);
					topvue.$set(topvue.formdata.listPipline[index].piplineinfo,"riskprop", comboboxObj.select_Data.riskprop);
					topvue.$set(topvue.formdata.listPipline[index].piplineinfo,"riskname", comboboxObj.select_Data.riskname);
    		  		
		       	}else{
		       		//主信息 塞值
		       		if(comboboxObj.select_Data){
		       			topvue.$set(topvue.formdata.piplineinfo,"risktype", comboboxObj.select_Data.risktype);
		       			topvue.$set(topvue.formdata.piplineinfo,"riskprop", comboboxObj.select_Data.riskprop);
		       		}
		       		topvue.$set(topvue.formdata.piplineinfo,"riskname", comboboxObj.select_Data.riskname);
		       	}
				
			/*	if(value!=null&&value!=""&&value.length>0){
//					$(risktypeid_jqexp).val(comboboxObj.select_Data.risktype);
//					$(risktypeid_jqexp).combobox("refresh");
//					$(risktypeid_jqexp).combobox("showtext");
//					$(riskname_each).val(value).click(); //产品名称塞值
//					topvue.$set(topvue.formdata.piplineinfo,"riskname", value);
				}else{
//					$(risktypeid_jqexp).val("");
					$(riskname_each).val("");
//					topvue.$set(topvue.formdata.piplineinfo,"riskname", "");
//					$(risktypeid_jqexp).combobox("clear");
//					$(risktypeid_jqexp).combobox("clearTarget");
				}*/
				
			}
		};
		
		
		commonCombobox_option.commonCombobox_risktype={

			    url : path + '/pipline/common/ldcode/riskinputtype.do',
			    valueField : "id.code"
//			    ,relateType"vue"
			    // 显示在输入框的
			    ,inputText : "codename"
			    ,textShow : [ "codename" ]
			};
    var premcount=0;
	commonCombobox_option.commonCombobox_existCust={
			"data" : [ {
				"value" : "Y",
				"text" : "是"
			}, {
				"value" : "N",
				"text" : "否"
			} ]
			, 
			afterselect: function($element,$target  ,$targetval,$sourceval,that) {	
				premcount++;
				if(premcount <2){
					$("#prem").after("<small class='help-block' style='color: blue;'>（趸交保费/10）</small>");				    
				 }
				var topvue = vueobj["piplineinfo"];
				
				if (that.$source.val()=="Y") {
					var appntname =topvue.form_elementsBYID.PIPLINEINFO.appntname;
					var mobile =topvue.form_elementsBYID.PIPLINEINFO.mobile;
					var customerid =topvue.form_elementsBYID.PIPLINEINFO.customerid;
					simpledisabled( appntname);
					simpledisabled( mobile);
					simpleundisabled( customerid);
//					topvue.$set(topvue.formdata.piplineinfo,"customerid", "CNHSBC");
					if(topvue.formdata.piplineinfo.customerid == null || topvue.formdata.piplineinfo.customerid == ""){
						topvue.$set(topvue.formdata.piplineinfo,"customerid", "CNHSBC");
					}else{
//						topvue.$set(topvue.formdata.piplineinfo,"customerid", topvue.formdata.piplineinfo.customerid);
						simpledisabled( customerid);
					}
				}else{
					var appntname =topvue.form_elementsBYID.PIPLINEINFO.appntname;
					var mobile =topvue.form_elementsBYID.PIPLINEINFO.mobile;
					var customerid =topvue.form_elementsBYID.PIPLINEINFO.customerid;
					
					simpleundisabled( appntname);
					simpleundisabled( mobile);
					simpledisabled( customerid);
					//给客户号解绑定函数
					if(topvue.formdata.piplineinfo.appntname == null || topvue.formdata.piplineinfo.appntname == "")
					{
						topvue.$set(topvue.formdata.piplineinfo,"customerid", "");
						topvue.$set(topvue.formdata.piplineinfo,"appntname", "");
						topvue.$set(topvue.formdata.piplineinfo,"mobile", "");
					}else{
					    topvue.$set(topvue.formdata.piplineinfo,"appntname",topvue.formdata.piplineinfo.appntname);
					    topvue.$set(topvue.formdata.piplineinfo,"mobile", topvue.formdata.piplineinfo.mobile);							
					}										
				}
//				console.log(topvue.formdata);
				//判断关联保单是否生效
				/*if(topvue.formdata.lccont.proposalcontno != null && topvue.formdata.lccont.proposalcontno != ""){
					var receipt = topvue.form_elementsBYID.PIPLINEINFO.receipt;
					receipt.elementstatus = "01"; //显示出回执日期框
//					simpledisabled(receipt);
				}*/
				
				//关联保单生效后回执日期显示
//				if(topvue.formdata.lccont.receivedate != null && topvue.formdata.lccont.receivedate != ""){
////					topvue.$set(topvue.formdata.piplineinfo,"receipt", topvue.formdata.lccont.receivedate);
////					alert(11111111);
//					var receipt = topvue.form_elementsBYID.PIPLINEINFO.receipt;
//					simpledisabled(receipt);
////					receipt.cssclass = "disabled";
////					$("#receipt").attr("disabled",disabled);
//				}
				//关联保单生效后年化保费后置灰
				if(topvue.formdata.lccont.standprem != null && topvue.formdata.lccont.standprem != ""){
//					topvue.$set(topvue.formdata.piplineinfo,"prem", topvue.formdata.lccont.standprem);
					var prem = topvue.form_elementsBYID.PIPLINEINFO.prem;
					simpledisabled(prem);
				}
				if(topvue.formdata.piplineinfo.successrate==100){
					var prem = topvue.form_elementsBYID.PIPLINEINFO.successrate;
					simpledisabled(prem);
				}
			}
		};
	
	

 
vueMethods.addPipline=function (length){
	var topvue = vueobj["piplineinfo"];
		var that = this;
		//新增pipeline时，将"陪同销售"框显示出来
		/*for(var i=0; i< this.form_elements.PIPLINEINFO.length; i++){
			if(this.form_elements.PIPLINEINFO[i].id == "peid"){
				this.form_elements.PIPLINEINFO[i].elementstatus = "01";
			}
			if(this.form_elements.PIPLINEINFO[i].id == "remark"){
				this.form_elements.PIPLINEINFO[i].elementstatus = "01";
			}
			if(this.form_elements.PIPLINEINFO[i].id == "mgremark"){
				this.form_elements.PIPLINEINFO[i].elementstatus = "01";
			}
		}*/
		
		if(!this.formdata.listPipline[length]){
			this.formdata.listPipline.push({"piplineinfo":{}});
		}
		this.$nextTick(function(){
			 var timer2=setInterval(function(){
             $('input[id="prem['+length+']"]').after("<small class='help-block' style='color: blue;'>请核对证件姓名</small>");
				 clearInterval(timer2);	
			 },100)			 
		 })	
}


function simpleundisabled(targetformelement){
	var  jqobj = $("#"+targetformelement.id);
	jqobj.removeAttr("disabled");
	if(targetformelement.type=="combobox"){
		
		jqobj.combobox("enable");
	}
	
}	 	

function simpledisabled(targetformelement){
	var  jqobj = $("#"+targetformelement.id);
	jqobj.attr("disabled","disabled");
	if(targetformelement.type=="combobox"){
		
		jqobj.combobox("disable");
	}
	/*if(targetformelement.type=="databox"){
		
		jqobj.combobox("disable");
	}*/
}

var submitPiplineType="";
vueMethods.submitPipline_SaveORUpdate=function ($event){
	
	var appntName = this.formdata.piplineinfo.appntname;
	if(appntName == "" || appntName == null){
		alert("客户姓名不得为空！");
		return;
	}
	var mainReffera = this.formdata.piplineinfo.referra;
	if(mainReffera != null && mainReffera != ""){
		if( mainReffera.substr(0,1) == "0"){
			alert("【pipeline信息1】介绍人工号不得以0开头，请重新输入！");
			return;
		}
	}
	
	for(var length =0; length<this.formdata.listPipline.length;length++){
		
		var pipReffera = this.formdata.listPipline[length].piplineinfo.referra;
		if(pipReffera != null && pipReffera != ""){
			if( pipReffera.substr(0,1) == "0"){
				alert("【pipeline信息"+(length+2)+"】介绍人工号不得以0开头，请重新输入！");
				return;
			}
		}
		
		//绑定数据
//		this.$set(this.formdata.listPipline[length].piplineinfo,'referra',this.formdata.piplineinfo.referra);
//		this.$set(this.formdata.listPipline[length].piplineinfo,'remark',this.formdata.piplineinfo.remark);
//		this.$set(this.formdata.listPipline[length].piplineinfo,'mgremark',this.formdata.piplineinfo.mgremark);
//		this.$set(this.formdata.listPipline[length].piplineinfo,'receipt',this.formdata.piplineinfo.receipt);
		this.$set(this.formdata.listPipline[length].piplineinfo,'customerid',this.formdata.piplineinfo.customerid);
		this.$set(this.formdata.listPipline[length].piplineinfo,'mobile',this.formdata.piplineinfo.mobile);
		this.$set(this.formdata.listPipline[length].piplineinfo,'appntname',this.formdata.piplineinfo.appntname);
		/*this.$set(this.formdata.listPipline[length].piplineinfo,'peid',this.formdata.piplineinfo.peid);*/
		this.$set(this.formdata.listPipline[length].piplineinfo,'lastmeet',this.formdata.piplineinfo.lastmeet);
		this.$set(this.formdata.listPipline[length].piplineinfo,'existcust',this.formdata.piplineinfo.existcust);
		this.$set(this.formdata.listPipline[length].piplineinfo,'nextmeet',this.formdata.piplineinfo.nextmeet);
		this.$set(this.formdata.listPipline[length].piplineinfo,'branch',this.formdata.piplineinfo.branch);
		this.$set(this.formdata.listPipline[length].piplineinfo,'rmid',this.formdata.piplineinfo.rmid);
	}
	
	var that = this;
	var type ="POST";
	
	var url = getRealURL(baseUrl,that.formdata,that);
	if(that.formdata.piplineinfo.piplineno!=undefined&&that.formdata.piplineinfo.piplineno!=""){		
/*		if(statu==1){
		
		}else{
			var baseUrl2 ="/pipline/insurance/piplineinfo/info2";
			url=getRealURL(baseUrl2,that.formdata,that);
			that.formdata.piplineinfo==null;
			type=="POST";
		}	*/	
		type= "PUT";
	}else{
		type=="POST";
		
	
	}
	submitPiplineType=type;
	if(!beforesubmitvueformsys($event , that)){
		return ;
	}
	simpleAjaxREST.call(that,url,type,JSON.stringify(that.formdata));
}
$("#modal-button").click(function(){
	if($("#contModal_body").text()=="操作成功"){
	 if(submitPiplineType=="POST"){
			  window.location.href=path + "/pipline/insurance/piplineinfo/page.do"; 
		  }	 
	}		 
});


var afterVueSelect={
		
		/**
		 * 同被保人
		 */
		customerid:function(form_element){
			 
			
			if($(this.$el).find("input").attr("disabled")){
				return ;
			}
			
			var topvue = getTopvueObj(this);
			if(topvue.formdata.piplineinfo ){
				if(topvue.formdata.piplineinfo.customerid ==null){
					topvue.$set(topvue.formdata.piplineinfo,"customerid", "CNHSBC");

				}else{
					var reg = new RegExp("[a-zA-Z]*");
					topvue.$set(topvue.formdata.piplineinfo,"customerid", "CNHSBC"+ topvue.formdata.piplineinfo.customerid.replace(reg,""));

					//输入十五位完整客户号后，同步填充客户名和移动电话信息    
			/*		if(topvue.formdata.piplineinfo.customerid.length == 15){
						var showdilog= layer.load(0, {
							  shade: [0.1,'#fff'] //0.1透明度的白色背景
						   });
						var cifid = $("#customerid").val();
						$.ajax({
							url : path + '/newContEnter/selectldcustomer.do',
							type : "POST",
							data : {
								"cifid" : cifid
							},
							success : function(data) {
								layer.close(showdilog);
								topvue.$set(topvue.formdata.piplineinfo,"appntname", data.fullname);
								topvue.$set(topvue.formdata.piplineinfo,"mobile", data.mobilephoneno);
							}
						});
					}else{
						topvue.$set(topvue.formdata.piplineinfo,"appntname", "");
						topvue.$set(topvue.formdata.piplineinfo,"mobile", "");
						
					}*/
					//查询HUB
				if(topvue.formdata.piplineinfo.customerid.length == 15){
						var showdilog= layer.load(0, {
							  shade: [0.1,'#fff'] //0.1透明度的白色背景
						   });
						var cifid = $("#customerid").val();
						$.ajax({
							url : path + '/QueryCifController/queryNameAndPhone.do',
							type : "POST",
							data : {
								"bankName" : cifid
							},
							success : function(data) {
//								console.log(data);
								if(data.success){
									layer.close(showdilog);
									topvue.$set(topvue.formdata.piplineinfo,"appntname", data.map.queryPipline.name);
									topvue.$set(topvue.formdata.piplineinfo,"mobile", data.map.queryPipline.phoneNo);
								}else{
									layer.close(showdilog);
									alert(data.msg);
								}
							},
							error:function(){
					        	layer.close(showdilog);
					        	alert("HUB查询异常！");
					        }
						});
					}else{
						topvue.$set(topvue.formdata.piplineinfo,"appntname", "");
						topvue.$set(topvue.formdata.piplineinfo,"mobile", "");
					}
					
				}
				
			}
		}
};

function textAreaAutoChange(){
    var minHeight = 30;
    var maxHeight = 108;
    if (!!window.ActiveXObject || "ActiveXObject" in window){
			//IE
    	this.style.posHeight=this.scrollHeight;
		if(this.style.posHeight < minHeight){
			this.style.posHeight = minHeight;
		}
		if(this.style.posHeight > maxHeight){
			this.style.posHeight = maxHeight;
		}
//		console.log("IE：" + this.style.posHeight);
		}else{
			//Google
			var scrollRes = this.scrollTop + this.scrollHeight;
			/*if(scrollRes < minHeight){
				this.style.height = minHeight + "px";
			}else if(scrollRes > maxHeight){
				this.style.height = maxHeight + "px";
			}else {
				this.style.height = this.scrollTop + this.scrollHeight + "px";
			}*/
			this.style.height = this.scrollTop + this.scrollHeight + "px";
//			var heightRes = parseInt(this.style.height.substr(0,this.style.height.indexOf("p")));
			if(scrollRes < minHeight){
				this.style.height = minHeight + "px";
			}
			if(scrollRes > maxHeight){
			this.style.height = maxHeight + "px";
		}
//			console.log("谷歌：" + this.style.height);
		}
    
}












vueMethods.submitPipline_Update=function ($event){
	var that = this;
	var type ="POST";
	
	var url = getRealURL(baseUrl,that.formdate,that);
	if(that.formdata.piplineinfo.piplineno!=undefined&&that.formdata.piplineinfo.piplineno!=""){
		
		type= "PUT";
		
	}else{
		type=="POST";
	}
	simpleUpdateAjaxREST(url,type,JSON.stringify(that.formdata));
}
 
function simpleUpdateAjaxREST(url,type,data,header,callbackfunction,errcallbackfunction){
	var that = this;
	var topvue = getTopvueObj(that);
	 $("#contModal").modal('show');
	 $("#modal-button").hide();
	 $("#contModal_body").text("系统处理中");
	$.ajax({
		   type: type,
		   url: url,
		   data: data,
		   dataType: "json" ,
		   contentType :"application/json;charset=UTF-8" ,
		   beforeSend:function(xhr){
			   if(header){
				   for (var key in  header) {
					   xhr.setRequestHeader(key, header[key]);
					}
			   }
		       
		    },
		    error: function (data) {
		    	
		    	try {
		    		if(errcallbackfunction){
		    			errcallbackfunction(data);
		    		}
		    		$("#modal-button").show();
					$("#contModal_body").text(data.desc);
				} catch (e) {
					console.error("errcallbackfunction : "  + e );
					
				}
		    	
	        },
		   success: function(data){
			   
			   try {
				   
				   fillinObj(topvue, topvue.formdata, data.reObj);
				   if(callbackfunction){
					   callbackfunction(data);
				   }
				   $("#modal-button").show();
				   if(data.flag){
					   $("#contModal_body").text("操作成功");
					   setTimeout(function(){//1s后关闭iframe
						   var index = parent.layer.getFrameIndex(window.name); 
					       parent.layer.close(index);
					   },1000);
					   
				   }else{
					   $("#contModal_body").text(data.desc);
				   }
				
				  
				} catch (e) {
					console.error("callbackfunction : "  + e );
				}
			   
		   }
		});
}