<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="sp"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<!DOCTYPE html>
<html>
<head>
<title>告知编辑</title>
<!-- dfdfdf -->
<%@include file="/application/main/jsp/newTop.jsp"%>

<style>
/* .textarea_remark{height:150px;width:274px ;resize:none;rows:40;cols:90} */
	.textarea_remark{
			height: 30px;
			padding: 5px 10px;
			font-size: 12px; 
			width: 100%;
			/* overflow-y: auto; */
			overflow-y:visible;
			resize:none;
			border: 1px solid #ccc;
			border-radius: 3px;
			/* line-height: 1.5; */
		}
		.disabled {
			background-color:#EEEEEE;
			cursor: not-allowed;
		}
</style>

<script type="text/javascript">
	var piplineid = "${piplineid}";
	if (piplineid == "") {

	} else {
		piplineid = "/" + piplineid;
	}
	var statu='${statu}';
</script>

</head>
<body>
	<jsp:include
		page="/application/common/vuetemplate/commonVueTemplate.jsp"
		flush="true" />
	<div class="row">
		<div class="col-sm-12">
			<div class="container-fluid" id="piplineinfo">
				<form id="piplineinfo_form" class="form-horizontal ">
					<formgroup-common-list 
						v-bind:form_elements="form_elements.PIPLINEINFO"
						v-bind:title="'基本信息'"
						v-bind:subsids = "['basic']"
						v-bind:groupsize=3 
						v-bind:relatedata="relatedata"
						v-bind:formdata="formdata"> 
					</formgroup-common-list>
				    
					<formgroup-common-list 
						v-bind:form_elements="form_elements.PIPLINEINFO"
						v-bind:title="'pipeline信息1'" 
						v-bind:subsids ="['product']"
						v-bind:groupsize=3
						v-bind:relatedata="relatedata"
						v-bind:formdata="formdata">
					</formgroup-common-list>
						<div v-if="${statu}==0">
				<div class=" col-sm-12"  
					
					v-for="n in formdata.listPipline.length">
					<formgroup-common-list 
						v-bind:form_elements="form_elements.PIPLINEINFO"
						v-bind:title="'pipeline信息'+(n+1)" 
						v-bind:subsids ="['product']"
						v-bind:groupsize=3
						v-bind:relatedata="relatedata"
						v-bind:elementindex="'['+(n-1)+']'"
						v-bind:formdata="formdata.listPipline[n-1]">
						<button-common slot="tailer"> 
							<input
								slot="buttondetail" 
								type="button"
								class="btn btn-default" 
								value="删除该pipeline"
								@click="reduceEleFromFormData('listPipline',n-1)"> 
						</button-common>
					</formgroup-common-list>
				</div>
				<div class=" col-sm-12">
					<button-common
						v-if="formdata['listPipline']"
						v-show="formdata['listPipline'].length <6 ">
					<input slot="buttondetail" type="button"
						class="btn btn-default" 
						value="增加新pipeline"
						@click="addPipline(formdata['listPipline'].length)">
					</button-common>
				</div>
			 </div>
			 
				<div class=" col-sm-12" v-if="${statu}==0">
					<button-common>
					<button slot="buttondetail" type="button" class="btn btn-primary"
						@click="submitPipline_SaveORUpdate($event)">保存</button>
					</button-common>
				</div>
				<div class=" col-sm-12" v-if="${statu}==1">
					<button-common>
					<button slot="buttondetail" type="button" class="btn btn-primary"
						@click="submitPipline_Update($event)">保存</button>
					</button-common>
				</div>
				</form>
			</div>
		</div>
	</div>
	<script type="text/javascript"
		src="<%=request.getContextPath()%>/application/pipline/insurance/piplineinfo/res/piplineinfo.js"></script>



	<script type="text/javascript"
		src="<%=request.getContextPath()%>/include/dbs/js/common/vueForm.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/include/js/layer/layer.js"></script>
</body>
</html>