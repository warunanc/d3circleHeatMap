var initial;
var revised;
var future;
var svgContainer;
var _riskTypes = ["Strategic Risk", "Operational Risk", "Corporate Risk", "Project Risk"];
var bIinitial = true;
var bRevised = true;
var bFuture = true;
var allCircles = [];
var _critiriaInfo;
var xAxisItems = {};
var yAxisItems = {};
var _jsonRiskMatrix;
var circleRadius = 23;
var circleRadiusWithPadding = 25;
var group_AxisLabels = null;
var group_MainGroup = null;
var group_Circles = null;
var rectangles = [];
var circlesPerMatrix = {};
var arrI = {};
var arrR = {};
var arrF = {};
var _circleClicked = false;

function toggleIRF() {
	bIinitial = document.getElementById("checkInitial").checked;
	bRevised = document.getElementById("checkRevised").checked;
	bFuture = document.getElementById("checkFuture").checked;
	drawCircles(true);
}

function init() {
	var initialR = [{"Guid":"8e07d5a2-4d66-4c04-9e69-084348918cd6","Code":"SR 2","Title":"Change in Industry conditions leads to financial loss","RiskType":"Strategic","ResponsiblePersonId":"7deea893-f748-4bc6-9cf9-f9ad23d6b959","ResponsiblePersonName":"Jacinta Hodgkinson","InitialRiskRatingTypeId":"6d0a1e59-82dd-4669-9cf0-eb37b441a008","RevisedRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","FutureRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessmentRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Catastrophic|[L]:Likely","NextReviewDate":"\/Date(1381948200000)\/","LastReviewedOn":"\/Date(1380792568167)\/"},{"Guid":"cdcffb3e-60b5-4db1-b5c4-31b90954e6b9","Code":"2","Title":"The risk of reduction of continuous cashflows from premium payments due to the inability to retain existing customers","RiskType":"Strategic","ResponsiblePersonId":"d68b8897-801a-4f12-abdb-a2946e2a672d","ResponsiblePersonName":"Jack Smith","InitialRiskRatingTypeId":"6d0a1e59-82dd-4669-9cf0-eb37b441a008","RevisedRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","FutureRiskRatingTypeId":"00000000-0000-0000-0000-000000000000","CurrentAssessmentRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Catastrophic|[L]:Almost certain","NextReviewDate":null,"LastReviewedOn":"\/Date(-62135596800000)\/"},{"Guid":"80674e46-cf5b-4f1b-8082-336f91c8180f","Code":"SR 8","Title":"Failure to comply with legislative and regulatory ","RiskType":"Strategic","ResponsiblePersonId":"d68b8897-801a-4f12-abdb-a2946e2a672d","ResponsiblePersonName":"Jack Smith","InitialRiskRatingTypeId":"6d0a1e59-82dd-4669-9cf0-eb37b441a008","RevisedRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","FutureRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessmentRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Catastrophic|[L]:Almost certain","NextReviewDate":"\/Date(1417372200000)\/","LastReviewedOn":"\/Date(1409578561160)\/"},{"Guid":"34179570-8f8f-4aca-a9d5-47c2b9affee9","Code":"SR 3","Title":"Lack of innovative and fresh ideas in the organisation","RiskType":"Strategic","ResponsiblePersonId":"530d1e7f-5532-44ab-8733-728b4556a126","ResponsiblePersonName":"Amanda Clark","InitialRiskRatingTypeId":"6d0a1e59-82dd-4669-9cf0-eb37b441a008","RevisedRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","FutureRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessmentRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Catastrophic|[L]:Almost certain","NextReviewDate":"\/Date(1454956200000)\/","LastReviewedOn":"\/Date(1453763036657)\/"},{"Guid":"cdb7666d-f4f5-424b-9958-6b246d464f99","Code":"SR 4","Title":"Cost shifting and increased compliance requirements reducing available funds for projects and services","RiskType":"Strategic","ResponsiblePersonId":"2b9f14b9-a268-492f-a1f2-ce00d458f90c","ResponsiblePersonName":"Allison Davies","InitialRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","RevisedRiskRatingTypeId":"2c06eb82-1160-4e3c-8061-d8d9798df823","FutureRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessmentRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Minor|[L]:Possible","NextReviewDate":"\/Date(1466101800000)\/","LastReviewedOn":"\/Date(1463471821320)\/"},{"Guid":"bf5b5b3e-e6ba-436a-b86d-8a3180004f19","Code":"2","Title":"Change in industry conditions leads to financial loss","RiskType":"Strategic","ResponsiblePersonId":"2b9f14b9-a268-492f-a1f2-ce00d458f90c","ResponsiblePersonName":"Allison Davies","InitialRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","RevisedRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","FutureRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessmentRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Major|[L]:Likely","NextReviewDate":"\/Date(1495996200000)\/","LastReviewedOn":"\/Date(1495446982663)\/"},{"Guid":"3eb66b12-dbd9-48d9-bb6a-a25e7ac6b9cd","Code":"SR 1","Title":"Inadequate and/or untimely debtor management , including invoice generation, receipting and collection. ","RiskType":"Strategic","ResponsiblePersonId":"4bed18fa-60e2-462b-8323-a12b54ce59d9","ResponsiblePersonName":"Andrew Schmedje","InitialRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","RevisedRiskRatingTypeId":"6d0a1e59-82dd-4669-9cf0-eb37b441a008","FutureRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","CurrentAssessmentRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Moderate|[L]:Likely","NextReviewDate":"\/Date(1466101800000)\/","LastReviewedOn":"\/Date(1463431632360)\/"},{"Guid":"cd30451d-dba5-443b-8a83-abfef8109e01","Code":"SR 7","Title":"Legislative change that conflicts with local priorities","RiskType":"Strategic","ResponsiblePersonId":"4de1fc04-2265-49b1-9250-2d9d92aeaacb","ResponsiblePersonName":"Faye Stanley","InitialRiskRatingTypeId":"6d0a1e59-82dd-4669-9cf0-eb37b441a008","RevisedRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","FutureRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessmentRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Catastrophic|[L]:Likely","NextReviewDate":"\/Date(1388687400000)\/","LastReviewedOn":"\/Date(1380797229533)\/"},{"Guid":"be3e86cc-afde-4633-91cc-b04c1732bf4e","Code":"SR 6","Title":"Lack of suitably skilled staff available to deliver services efficiently resulting in ineffective working practices","RiskType":"Strategic","ResponsiblePersonId":"5a1927d7-b230-4e1b-bc56-a537ad06794a","ResponsiblePersonName":"Andrew Ayers","InitialRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","RevisedRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","FutureRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessmentRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Major|[L]:Likely","NextReviewDate":"\/Date(1498156200000)\/","LastReviewedOn":"\/Date(1490282397397)\/"},{"Guid":"49370b8c-3f8d-4671-bd22-b361aa34c4a5","Code":"SR 5","Title":"Poor decision making processes (management) ","RiskType":"Strategic","ResponsiblePersonId":"4bed18fa-60e2-462b-8323-a12b54ce59d9","ResponsiblePersonName":"Andrew Schmedje","InitialRiskRatingTypeId":"6d0a1e59-82dd-4669-9cf0-eb37b441a008","RevisedRiskRatingTypeId":"6d0a1e59-82dd-4669-9cf0-eb37b441a008","FutureRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessmentRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Major|[L]:Almost certain","NextReviewDate":"\/Date(1383417000000)\/","LastReviewedOn":"\/Date(1380797147320)\/"},{"Guid":"c7825bef-ad24-4695-abeb-097c705c7000","Code":"OR 2","Title":"Risk of breakdown of internal controls ","RiskType":"Operational","ResponsiblePersonId":"d68b8897-801a-4f12-abdb-a2946e2a672d","ResponsiblePersonName":"Jack Smith","InitialRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","RevisedRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","FutureRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessmentRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Minor|[L]:Almost certain","NextReviewDate":"\/Date(1488220200000)\/","LastReviewedOn":"\/Date(1472575425270)\/"},{"Guid":"01992924-a88b-491a-bdd2-234b63b8e12d","Code":"OR 8","Title":"Inadequate Project Management ","RiskType":"Operational","ResponsiblePersonId":"279d69ff-5780-4715-aba4-03698c9679c9","ResponsiblePersonName":"Nichol Beckett","InitialRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","RevisedRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","FutureRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessmentRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Catastrophic|[L]:Possible","NextReviewDate":null,"LastReviewedOn":"\/Date(1380712263843)\/"},{"Guid":"18aa566a-4850-40ab-8fb6-5baa035c3270","Code":"OR 1","Title":"Obsolete Operator Time System\r\n","RiskType":"Operational","ResponsiblePersonId":"d68b8897-801a-4f12-abdb-a2946e2a672d","ResponsiblePersonName":"Jack Smith","InitialRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","RevisedRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","FutureRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessmentRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Moderate|[L]:Almost certain","NextReviewDate":"\/Date(1471372200000)\/","LastReviewedOn":"\/Date(1463474692037)\/"},{"Guid":"0470aee4-5ee7-4229-9bd8-a1c89e63938d","Code":"OR 3","Title":"I.T. Disaster Recovery not being routinely addressed","RiskType":"Operational","ResponsiblePersonId":"d68b8897-801a-4f12-abdb-a2946e2a672d","ResponsiblePersonName":"Jack Smith","InitialRiskRatingTypeId":"6d0a1e59-82dd-4669-9cf0-eb37b441a008","RevisedRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","FutureRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessmentRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Catastrophic|[L]:Almost certain","NextReviewDate":"\/Date(1469644200000)\/","LastReviewedOn":"\/Date(1472577327443)\/"},{"Guid":"f5fc8a81-251c-4710-ae94-b21c705baa75","Code":"OR 5","Title":"Accounting services Contract Expires/Lapses resulting in significant additional accounting costs","RiskType":"Operational","ResponsiblePersonId":"af8181ff-476a-4d8f-bd8c-85347e058481","ResponsiblePersonName":"Jerome Steve","InitialRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","RevisedRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","FutureRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessmentRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Moderate|[L]:Possible","NextReviewDate":"\/Date(1479321000000)\/","LastReviewedOn":"\/Date(1463471874420)\/"},{"Guid":"e027977c-1817-44e4-a5b9-bed9c5aad03e","Code":"OR 7","Title":"Inability to attract and retain appropriately skilled staff leading to a reduced capability of the organisation and a reduced capacity to deliver services. ","RiskType":"Operational","ResponsiblePersonId":"d68b8897-801a-4f12-abdb-a2946e2a672d","ResponsiblePersonName":"Jack Smith","InitialRiskRatingTypeId":"6d0a1e59-82dd-4669-9cf0-eb37b441a008","RevisedRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","FutureRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","CurrentAssessmentRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Catastrophic|[L]:Almost certain","NextReviewDate":"\/Date(1385317800000)\/","LastReviewedOn":"\/Date(1384713585143)\/"},{"Guid":"885d687d-d38e-4e8c-b3e1-d5b9209c7f03","Code":"OR 4","Title":"Failure to act and implement strategies to address the impacts of an ageing workforce leading to a loss of corporate knowledge, capability and capacity of the organisation. ","RiskType":"Operational","ResponsiblePersonId":"d68b8897-801a-4f12-abdb-a2946e2a672d","ResponsiblePersonName":"Jack Smith","InitialRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","RevisedRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","FutureRiskRatingTypeId":"2c06eb82-1160-4e3c-8061-d8d9798df823","CurrentAssessmentRatingTypeId":"2c06eb82-1160-4e3c-8061-d8d9798df823","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Major|[L]:Likely","NextReviewDate":"\/Date(1385922600000)\/","LastReviewedOn":"\/Date(1384713561540)\/"},{"Guid":"d187033c-41ab-4a40-81dd-e451df6135b0","Code":"OR 9","Title":"Lack of recognition by internal staff of the importance of customer service to their work outcomes.","RiskType":"Operational","ResponsiblePersonId":"68cd7e7f-4bca-4b29-93fb-d1be6ee26f8a","ResponsiblePersonName":"Joshua Dinning","InitialRiskRatingTypeId":"6d0a1e59-82dd-4669-9cf0-eb37b441a008","RevisedRiskRatingTypeId":"6d0a1e59-82dd-4669-9cf0-eb37b441a008","FutureRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","CurrentAssessmentRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Catastrophic|[L]:Likely","NextReviewDate":"\/Date(1383244200000)\/","LastReviewedOn":"\/Date(1382691405530)\/"},{"Guid":"f5d97fa5-ba8f-4725-9324-ef165ff14e57","Code":"OR 6","Title":"Accidental disclosure of confidential information, resulting in damage to brand and customer satisfaction","RiskType":"Operational","ResponsiblePersonId":"af8181ff-476a-4d8f-bd8c-85347e058481","ResponsiblePersonName":"Jerome Steve","InitialRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","RevisedRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","FutureRiskRatingTypeId":"2c06eb82-1160-4e3c-8061-d8d9798df823","CurrentAssessmentRatingTypeId":"2c06eb82-1160-4e3c-8061-d8d9798df823","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Minor|[L]:Likely","NextReviewDate":"\/Date(1471372200000)\/","LastReviewedOn":"\/Date(1463471904717)\/"},{"Guid":"dfad8484-615f-462b-9ce9-15281336cc56","Code":"PR 1","Title":"Lack of engagement with executives ","RiskType":"Project","ResponsiblePersonId":"d68b8897-801a-4f12-abdb-a2946e2a672d","ResponsiblePersonName":"Jack Smith","InitialRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","RevisedRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","FutureRiskRatingTypeId":"2c06eb82-1160-4e3c-8061-d8d9798df823","CurrentAssessmentRatingTypeId":"2c06eb82-1160-4e3c-8061-d8d9798df823","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Moderate|[L]:Possible","NextReviewDate":"\/Date(1405276200000)\/","LastReviewedOn":"\/Date(1404735073133)\/"},{"Guid":"72766d7b-9fdb-460c-940c-1cbed7cf2714","Code":"2","Title":"Not meeting project timelines","RiskType":"Project","ResponsiblePersonId":"cf7d5dcd-7074-49d9-88b7-6c3173d4dcbf","ResponsiblePersonName":"Marni Parry","InitialRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","RevisedRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","FutureRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessmentRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Minor|[L]:Almost certain","NextReviewDate":null,"LastReviewedOn":"\/Date(-62135596800000)\/"},{"Guid":"7a40cbbd-da9b-4ec7-ad7e-39c369b95399","Code":"PR 4","Title":"Inadequate evaluations of record management systems available in the market.","RiskType":"Project","ResponsiblePersonId":"d68b8897-801a-4f12-abdb-a2946e2a672d","ResponsiblePersonName":"Jack Smith","InitialRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","RevisedRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","FutureRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessmentRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Major|[L]:Likely","NextReviewDate":"\/Date(1383330600000)\/","LastReviewedOn":"\/Date(1380709258483)\/"},{"Guid":"f57e9347-a081-487d-a38f-4b9c5393d80a","Code":"6","Title":"Strategy too broad and provides no guidance","RiskType":"Project","ResponsiblePersonId":"279d69ff-5780-4715-aba4-03698c9679c9","ResponsiblePersonName":"Nichol Beckett","InitialRiskRatingTypeId":"2c06eb82-1160-4e3c-8061-d8d9798df823","RevisedRiskRatingTypeId":"6d0a1e59-82dd-4669-9cf0-eb37b441a008","FutureRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","CurrentAssessmentRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Moderate|[L]:Rare","NextReviewDate":null,"LastReviewedOn":"\/Date(-62135596800000)\/"},{"Guid":"ce147485-2b5d-43f7-8f44-6eec28c50055","Code":"2","Title":"Inadequate resources committed to the project and unable to deliver to the agreed timelines","RiskType":"Project","ResponsiblePersonId":"7deea893-f748-4bc6-9cf9-f9ad23d6b959","ResponsiblePersonName":"Jacinta Hodgkinson","InitialRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","RevisedRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","FutureRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessmentRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Catastrophic|[L]:Possible","NextReviewDate":null,"LastReviewedOn":"\/Date(-62135596800000)\/"},{"Guid":"951bfb1c-f00b-424a-8086-91c1e0a78f0e","Code":"2","Title":"Lack of support/buy-in from internal stakeholders","RiskType":"Project","ResponsiblePersonId":"cf7d5dcd-7074-49d9-88b7-6c3173d4dcbf","ResponsiblePersonName":"Marni Parry","InitialRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","RevisedRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","FutureRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessmentRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Minor|[L]:Almost certain","NextReviewDate":null,"LastReviewedOn":"\/Date(-62135596800000)\/"},{"Guid":"d63d7b58-ca18-4771-bb4a-a7f2ab05403a","Code":"2","Title":"Not being able to agree to a new structure ","RiskType":"Project","ResponsiblePersonId":"cf7d5dcd-7074-49d9-88b7-6c3173d4dcbf","ResponsiblePersonName":"Marni Parry","InitialRiskRatingTypeId":"6d0a1e59-82dd-4669-9cf0-eb37b441a008","RevisedRiskRatingTypeId":"6d0a1e59-82dd-4669-9cf0-eb37b441a008","FutureRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","CurrentAssessmentRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Catastrophic|[L]:Almost certain","NextReviewDate":null,"LastReviewedOn":"\/Date(-62135596800000)\/"}];
    var revisedR = [{"Guid":"8e07d5a2-4d66-4c04-9e69-084348918cd6","Code":"SR 2","Title":"Change in Industry conditions leads to financial loss","RiskType":"Strategic","ResponsiblePersonId":"7deea893-f748-4bc6-9cf9-f9ad23d6b959","ResponsiblePersonName":"Jacinta Hodgkinson","InitialRiskRatingTypeId":"6d0a1e59-82dd-4669-9cf0-eb37b441a008","RevisedRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","FutureRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessmentRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Minor|[L]:Unlikely","NextReviewDate":"\/Date(1381948200000)\/","LastReviewedOn":"\/Date(1380792568167)\/"},{"Guid":"cdcffb3e-60b5-4db1-b5c4-31b90954e6b9","Code":"2","Title":"The risk of reduction of continuous cashflows from premium payments due to the inability to retain existing customers","RiskType":"Strategic","ResponsiblePersonId":"d68b8897-801a-4f12-abdb-a2946e2a672d","ResponsiblePersonName":"Jack Smith","InitialRiskRatingTypeId":"6d0a1e59-82dd-4669-9cf0-eb37b441a008","RevisedRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","FutureRiskRatingTypeId":"00000000-0000-0000-0000-000000000000","CurrentAssessmentRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Moderate|[L]:Likely","NextReviewDate":null,"LastReviewedOn":"\/Date(-62135596800000)\/"},{"Guid":"80674e46-cf5b-4f1b-8082-336f91c8180f","Code":"SR 8","Title":"Failure to comply with legislative and regulatory ","RiskType":"Strategic","ResponsiblePersonId":"d68b8897-801a-4f12-abdb-a2946e2a672d","ResponsiblePersonName":"Jack Smith","InitialRiskRatingTypeId":"6d0a1e59-82dd-4669-9cf0-eb37b441a008","RevisedRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","FutureRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessmentRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Major|[L]:Likely","NextReviewDate":"\/Date(1417372200000)\/","LastReviewedOn":"\/Date(1409578561160)\/"},{"Guid":"34179570-8f8f-4aca-a9d5-47c2b9affee9","Code":"SR 3","Title":"Lack of innovative and fresh ideas in the organisation","RiskType":"Strategic","ResponsiblePersonId":"530d1e7f-5532-44ab-8733-728b4556a126","ResponsiblePersonName":"Amanda Clark","InitialRiskRatingTypeId":"6d0a1e59-82dd-4669-9cf0-eb37b441a008","RevisedRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","FutureRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessmentRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Moderate|[L]:Unlikely","NextReviewDate":"\/Date(1454956200000)\/","LastReviewedOn":"\/Date(1453763036657)\/"},{"Guid":"cdb7666d-f4f5-424b-9958-6b246d464f99","Code":"SR 4","Title":"Cost shifting and increased compliance requirements reducing available funds for projects and services","RiskType":"Strategic","ResponsiblePersonId":"2b9f14b9-a268-492f-a1f2-ce00d458f90c","ResponsiblePersonName":"Allison Davies","InitialRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","RevisedRiskRatingTypeId":"2c06eb82-1160-4e3c-8061-d8d9798df823","FutureRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessmentRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Insignificant|[L]:Possible","NextReviewDate":"\/Date(1466101800000)\/","LastReviewedOn":"\/Date(1463471821320)\/"},{"Guid":"bf5b5b3e-e6ba-436a-b86d-8a3180004f19","Code":"2","Title":"Change in industry conditions leads to financial loss","RiskType":"Strategic","ResponsiblePersonId":"2b9f14b9-a268-492f-a1f2-ce00d458f90c","ResponsiblePersonName":"Allison Davies","InitialRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","RevisedRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","FutureRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessmentRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Minor|[L]:Possible","NextReviewDate":"\/Date(1495996200000)\/","LastReviewedOn":"\/Date(1495446982663)\/"},{"Guid":"3eb66b12-dbd9-48d9-bb6a-a25e7ac6b9cd","Code":"SR 1","Title":"Inadequate and/or untimely debtor management , including invoice generation, receipting and collection. ","RiskType":"Strategic","ResponsiblePersonId":"4bed18fa-60e2-462b-8323-a12b54ce59d9","ResponsiblePersonName":"Andrew Schmedje","InitialRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","RevisedRiskRatingTypeId":"6d0a1e59-82dd-4669-9cf0-eb37b441a008","FutureRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","CurrentAssessmentRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Catastrophic|[L]:Almost certain","NextReviewDate":"\/Date(1466101800000)\/","LastReviewedOn":"\/Date(1463431632360)\/"},{"Guid":"cd30451d-dba5-443b-8a83-abfef8109e01","Code":"SR 7","Title":"Legislative change that conflicts with local priorities","RiskType":"Strategic","ResponsiblePersonId":"4de1fc04-2265-49b1-9250-2d9d92aeaacb","ResponsiblePersonName":"Faye Stanley","InitialRiskRatingTypeId":"6d0a1e59-82dd-4669-9cf0-eb37b441a008","RevisedRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","FutureRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessmentRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Major|[L]:Unlikely","NextReviewDate":"\/Date(1388687400000)\/","LastReviewedOn":"\/Date(1380797229533)\/"},{"Guid":"be3e86cc-afde-4633-91cc-b04c1732bf4e","Code":"SR 6","Title":"Lack of suitably skilled staff available to deliver services efficiently resulting in ineffective working practices","RiskType":"Strategic","ResponsiblePersonId":"5a1927d7-b230-4e1b-bc56-a537ad06794a","ResponsiblePersonName":"Andrew Ayers","InitialRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","RevisedRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","FutureRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessmentRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Catastrophic|[L]:Unlikely","NextReviewDate":"\/Date(1498156200000)\/","LastReviewedOn":"\/Date(1490282397397)\/"},{"Guid":"49370b8c-3f8d-4671-bd22-b361aa34c4a5","Code":"SR 5","Title":"Poor decision making processes (management) ","RiskType":"Strategic","ResponsiblePersonId":"4bed18fa-60e2-462b-8323-a12b54ce59d9","ResponsiblePersonName":"Andrew Schmedje","InitialRiskRatingTypeId":"6d0a1e59-82dd-4669-9cf0-eb37b441a008","RevisedRiskRatingTypeId":"6d0a1e59-82dd-4669-9cf0-eb37b441a008","FutureRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessmentRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Major|[L]:Almost certain","NextReviewDate":"\/Date(1383417000000)\/","LastReviewedOn":"\/Date(1380797147320)\/"},{"Guid":"c7825bef-ad24-4695-abeb-097c705c7000","Code":"OR 2","Title":"Risk of breakdown of internal controls ","RiskType":"Operational","ResponsiblePersonId":"d68b8897-801a-4f12-abdb-a2946e2a672d","ResponsiblePersonName":"Jack Smith","InitialRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","RevisedRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","FutureRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessmentRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Minor|[L]:Almost certain","NextReviewDate":"\/Date(1488220200000)\/","LastReviewedOn":"\/Date(1472575425270)\/"},{"Guid":"01992924-a88b-491a-bdd2-234b63b8e12d","Code":"OR 8","Title":"Inadequate Project Management ","RiskType":"Operational","ResponsiblePersonId":"279d69ff-5780-4715-aba4-03698c9679c9","ResponsiblePersonName":"Nichol Beckett","InitialRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","RevisedRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","FutureRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessmentRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Moderate|[L]:Likely","NextReviewDate":null,"LastReviewedOn":"\/Date(1380712263843)\/"},{"Guid":"18aa566a-4850-40ab-8fb6-5baa035c3270","Code":"OR 1","Title":"Obsolete Operator Time System\r\n","RiskType":"Operational","ResponsiblePersonId":"d68b8897-801a-4f12-abdb-a2946e2a672d","ResponsiblePersonName":"Jack Smith","InitialRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","RevisedRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","FutureRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessmentRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Moderate|[L]:Unlikely","NextReviewDate":"\/Date(1471372200000)\/","LastReviewedOn":"\/Date(1463474692037)\/"},{"Guid":"0470aee4-5ee7-4229-9bd8-a1c89e63938d","Code":"OR 3","Title":"I.T. Disaster Recovery not being routinely addressed","RiskType":"Operational","ResponsiblePersonId":"d68b8897-801a-4f12-abdb-a2946e2a672d","ResponsiblePersonName":"Jack Smith","InitialRiskRatingTypeId":"6d0a1e59-82dd-4669-9cf0-eb37b441a008","RevisedRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","FutureRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessmentRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Minor|[L]:Almost certain","NextReviewDate":"\/Date(1469644200000)\/","LastReviewedOn":"\/Date(1472577327443)\/"},{"Guid":"f5fc8a81-251c-4710-ae94-b21c705baa75","Code":"OR 5","Title":"Accounting services Contract Expires/Lapses resulting in significant additional accounting costs","RiskType":"Operational","ResponsiblePersonId":"af8181ff-476a-4d8f-bd8c-85347e058481","ResponsiblePersonName":"Jerome Steve","InitialRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","RevisedRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","FutureRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessmentRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Moderate|[L]:Unlikely","NextReviewDate":"\/Date(1479321000000)\/","LastReviewedOn":"\/Date(1463471874420)\/"},{"Guid":"e027977c-1817-44e4-a5b9-bed9c5aad03e","Code":"OR 7","Title":"Inability to attract and retain appropriately skilled staff leading to a reduced capability of the organisation and a reduced capacity to deliver services. ","RiskType":"Operational","ResponsiblePersonId":"d68b8897-801a-4f12-abdb-a2946e2a672d","ResponsiblePersonName":"Jack Smith","InitialRiskRatingTypeId":"6d0a1e59-82dd-4669-9cf0-eb37b441a008","RevisedRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","FutureRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","CurrentAssessmentRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Moderate|[L]:Almost certain","NextReviewDate":"\/Date(1385317800000)\/","LastReviewedOn":"\/Date(1384713585143)\/"},{"Guid":"885d687d-d38e-4e8c-b3e1-d5b9209c7f03","Code":"OR 4","Title":"Failure to act and implement strategies to address the impacts of an ageing workforce leading to a loss of corporate knowledge, capability and capacity of the organisation. ","RiskType":"Operational","ResponsiblePersonId":"d68b8897-801a-4f12-abdb-a2946e2a672d","ResponsiblePersonName":"Jack Smith","InitialRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","RevisedRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","FutureRiskRatingTypeId":"2c06eb82-1160-4e3c-8061-d8d9798df823","CurrentAssessmentRatingTypeId":"2c06eb82-1160-4e3c-8061-d8d9798df823","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Moderate|[L]:Unlikely","NextReviewDate":"\/Date(1385922600000)\/","LastReviewedOn":"\/Date(1384713561540)\/"},{"Guid":"d187033c-41ab-4a40-81dd-e451df6135b0","Code":"OR 9","Title":"Lack of recognition by internal staff of the importance of customer service to their work outcomes.","RiskType":"Operational","ResponsiblePersonId":"68cd7e7f-4bca-4b29-93fb-d1be6ee26f8a","ResponsiblePersonName":"Joshua Dinning","InitialRiskRatingTypeId":"6d0a1e59-82dd-4669-9cf0-eb37b441a008","RevisedRiskRatingTypeId":"6d0a1e59-82dd-4669-9cf0-eb37b441a008","FutureRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","CurrentAssessmentRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Catastrophic|[L]:Likely","NextReviewDate":"\/Date(1383244200000)\/","LastReviewedOn":"\/Date(1382691405530)\/"},{"Guid":"f5d97fa5-ba8f-4725-9324-ef165ff14e57","Code":"OR 6","Title":"Accidental disclosure of confidential information, resulting in damage to brand and customer satisfaction","RiskType":"Operational","ResponsiblePersonId":"af8181ff-476a-4d8f-bd8c-85347e058481","ResponsiblePersonName":"Jerome Steve","InitialRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","RevisedRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","FutureRiskRatingTypeId":"2c06eb82-1160-4e3c-8061-d8d9798df823","CurrentAssessmentRatingTypeId":"2c06eb82-1160-4e3c-8061-d8d9798df823","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Moderate|[L]:Likely","NextReviewDate":"\/Date(1471372200000)\/","LastReviewedOn":"\/Date(1463471904717)\/"},{"Guid":"dfad8484-615f-462b-9ce9-15281336cc56","Code":"PR 1","Title":"Lack of engagement with executives ","RiskType":"Project","ResponsiblePersonId":"d68b8897-801a-4f12-abdb-a2946e2a672d","ResponsiblePersonName":"Jack Smith","InitialRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","RevisedRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","FutureRiskRatingTypeId":"2c06eb82-1160-4e3c-8061-d8d9798df823","CurrentAssessmentRatingTypeId":"2c06eb82-1160-4e3c-8061-d8d9798df823","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Insignificant|[L]:Almost certain","NextReviewDate":"\/Date(1405276200000)\/","LastReviewedOn":"\/Date(1404735073133)\/"},{"Guid":"72766d7b-9fdb-460c-940c-1cbed7cf2714","Code":"2","Title":"Not meeting project timelines","RiskType":"Project","ResponsiblePersonId":"cf7d5dcd-7074-49d9-88b7-6c3173d4dcbf","ResponsiblePersonName":"Marni Parry","InitialRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","RevisedRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","FutureRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessmentRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Insignificant|[L]:Almost certain","NextReviewDate":null,"LastReviewedOn":"\/Date(-62135596800000)\/"},{"Guid":"7a40cbbd-da9b-4ec7-ad7e-39c369b95399","Code":"PR 4","Title":"Inadequate evaluations of record management systems available in the market.","RiskType":"Project","ResponsiblePersonId":"d68b8897-801a-4f12-abdb-a2946e2a672d","ResponsiblePersonName":"Jack Smith","InitialRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","RevisedRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","FutureRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessmentRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Moderate|[L]:Likely","NextReviewDate":"\/Date(1383330600000)\/","LastReviewedOn":"\/Date(1380709258483)\/"},{"Guid":"f57e9347-a081-487d-a38f-4b9c5393d80a","Code":"6","Title":"Strategy too broad and provides no guidance","RiskType":"Project","ResponsiblePersonId":"279d69ff-5780-4715-aba4-03698c9679c9","ResponsiblePersonName":"Nichol Beckett","InitialRiskRatingTypeId":"2c06eb82-1160-4e3c-8061-d8d9798df823","RevisedRiskRatingTypeId":"6d0a1e59-82dd-4669-9cf0-eb37b441a008","FutureRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","CurrentAssessmentRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Major|[L]:Almost certain","NextReviewDate":null,"LastReviewedOn":"\/Date(-62135596800000)\/"},{"Guid":"ce147485-2b5d-43f7-8f44-6eec28c50055","Code":"2","Title":"Inadequate resources committed to the project and unable to deliver to the agreed timelines","RiskType":"Project","ResponsiblePersonId":"7deea893-f748-4bc6-9cf9-f9ad23d6b959","ResponsiblePersonName":"Jacinta Hodgkinson","InitialRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","RevisedRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","FutureRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessmentRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Major|[L]:Rare","NextReviewDate":null,"LastReviewedOn":"\/Date(-62135596800000)\/"},{"Guid":"951bfb1c-f00b-424a-8086-91c1e0a78f0e","Code":"2","Title":"Lack of support/buy-in from internal stakeholders","RiskType":"Project","ResponsiblePersonId":"cf7d5dcd-7074-49d9-88b7-6c3173d4dcbf","ResponsiblePersonName":"Marni Parry","InitialRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","RevisedRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","FutureRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessmentRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Minor|[L]:Possible","NextReviewDate":null,"LastReviewedOn":"\/Date(-62135596800000)\/"},{"Guid":"d63d7b58-ca18-4771-bb4a-a7f2ab05403a","Code":"2","Title":"Not being able to agree to a new structure ","RiskType":"Project","ResponsiblePersonId":"cf7d5dcd-7074-49d9-88b7-6c3173d4dcbf","ResponsiblePersonName":"Marni Parry","InitialRiskRatingTypeId":"6d0a1e59-82dd-4669-9cf0-eb37b441a008","RevisedRiskRatingTypeId":"6d0a1e59-82dd-4669-9cf0-eb37b441a008","FutureRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","CurrentAssessmentRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Catastrophic|[L]:Almost certain","NextReviewDate":null,"LastReviewedOn":"\/Date(-62135596800000)\/"}];
    var futureR =  [{"Guid":"8e07d5a2-4d66-4c04-9e69-084348918cd6","Code":"SR 2","Title":"Change in Industry conditions leads to financial loss","RiskType":"Strategic","ResponsiblePersonId":"7deea893-f748-4bc6-9cf9-f9ad23d6b959","ResponsiblePersonName":"Jacinta Hodgkinson","InitialRiskRatingTypeId":"6d0a1e59-82dd-4669-9cf0-eb37b441a008","RevisedRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","FutureRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessmentRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Minor|[L]:Unlikely","NextReviewDate":"\/Date(1381948200000)\/","LastReviewedOn":"\/Date(1380792568167)\/"},{"Guid":"8e07d5a2-4d66-4c04-9e69-084348918cd6","Code":"SR 2","Title":"Change in Industry conditions leads to financial loss","RiskType":"Strategic","ResponsiblePersonId":"7deea893-f748-4bc6-9cf9-f9ad23d6b959","ResponsiblePersonName":"Jacinta Hodgkinson","InitialRiskRatingTypeId":"6d0a1e59-82dd-4669-9cf0-eb37b441a008","RevisedRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","FutureRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessmentRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Minor|[L]:Unlikely","NextReviewDate":"\/Date(1381948200000)\/","LastReviewedOn":"\/Date(1380792568167)\/"},{"Guid":"8e07d5a2-4d66-4c04-9e69-084348918cd6","Code":"SR 2","Title":"Change in Industry conditions leads to financial loss","RiskType":"Strategic","ResponsiblePersonId":"7deea893-f748-4bc6-9cf9-f9ad23d6b959","ResponsiblePersonName":"Jacinta Hodgkinson","InitialRiskRatingTypeId":"6d0a1e59-82dd-4669-9cf0-eb37b441a008","RevisedRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","FutureRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessmentRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Minor|[L]:Unlikely","NextReviewDate":"\/Date(1381948200000)\/","LastReviewedOn":"\/Date(1380792568167)\/"},{"Guid":"8e07d5a2-4d66-4c04-9e69-084348918cd6","Code":"SR 2","Title":"Change in Industry conditions leads to financial loss","RiskType":"Strategic","ResponsiblePersonId":"7deea893-f748-4bc6-9cf9-f9ad23d6b959","ResponsiblePersonName":"Jacinta Hodgkinson","InitialRiskRatingTypeId":"6d0a1e59-82dd-4669-9cf0-eb37b441a008","RevisedRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","FutureRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessmentRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Minor|[L]:Unlikely","NextReviewDate":"\/Date(1381948200000)\/","LastReviewedOn":"\/Date(1380792568167)\/"},{"Guid":"8e07d5a2-4d66-4c04-9e69-084348918cd6","Code":"SR 2","Title":"Change in Industry conditions leads to financial loss","RiskType":"Strategic","ResponsiblePersonId":"7deea893-f748-4bc6-9cf9-f9ad23d6b959","ResponsiblePersonName":"Jacinta Hodgkinson","InitialRiskRatingTypeId":"6d0a1e59-82dd-4669-9cf0-eb37b441a008","RevisedRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","FutureRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessmentRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Minor|[L]:Unlikely","NextReviewDate":"\/Date(1381948200000)\/","LastReviewedOn":"\/Date(1380792568167)\/"},{"Guid":"8e07d5a2-4d66-4c04-9e69-084348918cd6","Code":"SR 2","Title":"Change in Industry conditions leads to financial loss","RiskType":"Strategic","ResponsiblePersonId":"7deea893-f748-4bc6-9cf9-f9ad23d6b959","ResponsiblePersonName":"Jacinta Hodgkinson","InitialRiskRatingTypeId":"6d0a1e59-82dd-4669-9cf0-eb37b441a008","RevisedRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","FutureRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessmentRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Minor|[L]:Unlikely","NextReviewDate":"\/Date(1381948200000)\/","LastReviewedOn":"\/Date(1380792568167)\/"},{"Guid":"80674e46-cf5b-4f1b-8082-336f91c8180f","Code":"SR 8","Title":"Failure to comply with legislative and regulatory ","RiskType":"Strategic","ResponsiblePersonId":"d68b8897-801a-4f12-abdb-a2946e2a672d","ResponsiblePersonName":"Jack Smith","InitialRiskRatingTypeId":"6d0a1e59-82dd-4669-9cf0-eb37b441a008","RevisedRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","FutureRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessmentRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Moderate|[L]:Unlikely","NextReviewDate":"\/Date(1417372200000)\/","LastReviewedOn":"\/Date(1409578561160)\/"},{"Guid":"34179570-8f8f-4aca-a9d5-47c2b9affee9","Code":"SR 3","Title":"Lack of innovative and fresh ideas in the organisation","RiskType":"Strategic","ResponsiblePersonId":"530d1e7f-5532-44ab-8733-728b4556a126","ResponsiblePersonName":"Amanda Clark","InitialRiskRatingTypeId":"6d0a1e59-82dd-4669-9cf0-eb37b441a008","RevisedRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","FutureRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessmentRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Minor|[L]:Unlikely","NextReviewDate":"\/Date(1454956200000)\/","LastReviewedOn":"\/Date(1453763036657)\/"},{"Guid":"cdb7666d-f4f5-424b-9958-6b246d464f99","Code":"SR 4","Title":"Cost shifting and increased compliance requirements reducing available funds for projects and services","RiskType":"Strategic","ResponsiblePersonId":"2b9f14b9-a268-492f-a1f2-ce00d458f90c","ResponsiblePersonName":"Allison Davies","InitialRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","RevisedRiskRatingTypeId":"2c06eb82-1160-4e3c-8061-d8d9798df823","FutureRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessmentRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Minor|[L]:Unlikely","NextReviewDate":"\/Date(1466101800000)\/","LastReviewedOn":"\/Date(1463471821320)\/"},{"Guid":"bf5b5b3e-e6ba-436a-b86d-8a3180004f19","Code":"2","Title":"Change in industry conditions leads to financial loss","RiskType":"Strategic","ResponsiblePersonId":"2b9f14b9-a268-492f-a1f2-ce00d458f90c","ResponsiblePersonName":"Allison Davies","InitialRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","RevisedRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","FutureRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessmentRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Moderate|[L]:Unlikely","NextReviewDate":"\/Date(1495996200000)\/","LastReviewedOn":"\/Date(1495446982663)\/"},{"Guid":"3eb66b12-dbd9-48d9-bb6a-a25e7ac6b9cd","Code":"SR 1","Title":"Inadequate and/or untimely debtor management , including invoice generation, receipting and collection. ","RiskType":"Strategic","ResponsiblePersonId":"4bed18fa-60e2-462b-8323-a12b54ce59d9","ResponsiblePersonName":"Andrew Schmedje","InitialRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","RevisedRiskRatingTypeId":"6d0a1e59-82dd-4669-9cf0-eb37b441a008","FutureRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","CurrentAssessmentRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Moderate|[L]:Likely","NextReviewDate":"\/Date(1466101800000)\/","LastReviewedOn":"\/Date(1463431632360)\/"},{"Guid":"cd30451d-dba5-443b-8a83-abfef8109e01","Code":"SR 7","Title":"Legislative change that conflicts with local priorities","RiskType":"Strategic","ResponsiblePersonId":"4de1fc04-2265-49b1-9250-2d9d92aeaacb","ResponsiblePersonName":"Faye Stanley","InitialRiskRatingTypeId":"6d0a1e59-82dd-4669-9cf0-eb37b441a008","RevisedRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","FutureRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessmentRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Minor|[L]:Unlikely","NextReviewDate":"\/Date(1388687400000)\/","LastReviewedOn":"\/Date(1380797229533)\/"},{"Guid":"be3e86cc-afde-4633-91cc-b04c1732bf4e","Code":"SR 6","Title":"Lack of suitably skilled staff available to deliver services efficiently resulting in ineffective working practices","RiskType":"Strategic","ResponsiblePersonId":"5a1927d7-b230-4e1b-bc56-a537ad06794a","ResponsiblePersonName":"Andrew Ayers","InitialRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","RevisedRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","FutureRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessmentRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Minor|[L]:Unlikely","NextReviewDate":"\/Date(1498156200000)\/","LastReviewedOn":"\/Date(1490282397397)\/"},{"Guid":"49370b8c-3f8d-4671-bd22-b361aa34c4a5","Code":"SR 5","Title":"Poor decision making processes (management) ","RiskType":"Strategic","ResponsiblePersonId":"4bed18fa-60e2-462b-8323-a12b54ce59d9","ResponsiblePersonName":"Andrew Schmedje","InitialRiskRatingTypeId":"6d0a1e59-82dd-4669-9cf0-eb37b441a008","RevisedRiskRatingTypeId":"6d0a1e59-82dd-4669-9cf0-eb37b441a008","FutureRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessmentRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Minor|[L]:Likely","NextReviewDate":"\/Date(1383417000000)\/","LastReviewedOn":"\/Date(1380797147320)\/"},{"Guid":"c7825bef-ad24-4695-abeb-097c705c7000","Code":"OR 2","Title":"Risk of breakdown of internal controls ","RiskType":"Operational","ResponsiblePersonId":"d68b8897-801a-4f12-abdb-a2946e2a672d","ResponsiblePersonName":"Jack Smith","InitialRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","RevisedRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","FutureRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessmentRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Minor|[L]:Likely","NextReviewDate":"\/Date(1488220200000)\/","LastReviewedOn":"\/Date(1472575425270)\/"},{"Guid":"01992924-a88b-491a-bdd2-234b63b8e12d","Code":"OR 8","Title":"Inadequate Project Management ","RiskType":"Operational","ResponsiblePersonId":"279d69ff-5780-4715-aba4-03698c9679c9","ResponsiblePersonName":"Nichol Beckett","InitialRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","RevisedRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","FutureRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessmentRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Minor|[L]:Likely","NextReviewDate":null,"LastReviewedOn":"\/Date(1380712263843)\/"},{"Guid":"18aa566a-4850-40ab-8fb6-5baa035c3270","Code":"OR 1","Title":"Obsolete Operator Time System\r\n","RiskType":"Operational","ResponsiblePersonId":"d68b8897-801a-4f12-abdb-a2946e2a672d","ResponsiblePersonName":"Jack Smith","InitialRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","RevisedRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","FutureRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessmentRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Moderate|[L]:Unlikely","NextReviewDate":"\/Date(1471372200000)\/","LastReviewedOn":"\/Date(1463474692037)\/"},{"Guid":"0470aee4-5ee7-4229-9bd8-a1c89e63938d","Code":"OR 3","Title":"I.T. Disaster Recovery not being routinely addressed","RiskType":"Operational","ResponsiblePersonId":"d68b8897-801a-4f12-abdb-a2946e2a672d","ResponsiblePersonName":"Jack Smith","InitialRiskRatingTypeId":"6d0a1e59-82dd-4669-9cf0-eb37b441a008","RevisedRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","FutureRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessmentRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Minor|[L]:Unlikely","NextReviewDate":"\/Date(1469644200000)\/","LastReviewedOn":"\/Date(1472577327443)\/"},{"Guid":"f5fc8a81-251c-4710-ae94-b21c705baa75","Code":"OR 5","Title":"Accounting services Contract Expires/Lapses resulting in significant additional accounting costs","RiskType":"Operational","ResponsiblePersonId":"af8181ff-476a-4d8f-bd8c-85347e058481","ResponsiblePersonName":"Jerome Steve","InitialRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","RevisedRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","FutureRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessmentRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Moderate|[L]:Unlikely","NextReviewDate":"\/Date(1479321000000)\/","LastReviewedOn":"\/Date(1463471874420)\/"},{"Guid":"e027977c-1817-44e4-a5b9-bed9c5aad03e","Code":"OR 7","Title":"Inability to attract and retain appropriately skilled staff leading to a reduced capability of the organisation and a reduced capacity to deliver services. ","RiskType":"Operational","ResponsiblePersonId":"d68b8897-801a-4f12-abdb-a2946e2a672d","ResponsiblePersonName":"Jack Smith","InitialRiskRatingTypeId":"6d0a1e59-82dd-4669-9cf0-eb37b441a008","RevisedRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","FutureRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","CurrentAssessmentRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Minor|[L]:Almost certain","NextReviewDate":"\/Date(1385317800000)\/","LastReviewedOn":"\/Date(1384713585143)\/"},{"Guid":"885d687d-d38e-4e8c-b3e1-d5b9209c7f03","Code":"OR 4","Title":"Failure to act and implement strategies to address the impacts of an ageing workforce leading to a loss of corporate knowledge, capability and capacity of the organisation. ","RiskType":"Operational","ResponsiblePersonId":"d68b8897-801a-4f12-abdb-a2946e2a672d","ResponsiblePersonName":"Jack Smith","InitialRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","RevisedRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","FutureRiskRatingTypeId":"2c06eb82-1160-4e3c-8061-d8d9798df823","CurrentAssessmentRatingTypeId":"2c06eb82-1160-4e3c-8061-d8d9798df823","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Moderate|[L]:Rare","NextReviewDate":"\/Date(1385922600000)\/","LastReviewedOn":"\/Date(1384713561540)\/"},{"Guid":"d187033c-41ab-4a40-81dd-e451df6135b0","Code":"OR 9","Title":"Lack of recognition by internal staff of the importance of customer service to their work outcomes.","RiskType":"Operational","ResponsiblePersonId":"68cd7e7f-4bca-4b29-93fb-d1be6ee26f8a","ResponsiblePersonName":"Joshua Dinning","InitialRiskRatingTypeId":"6d0a1e59-82dd-4669-9cf0-eb37b441a008","RevisedRiskRatingTypeId":"6d0a1e59-82dd-4669-9cf0-eb37b441a008","FutureRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","CurrentAssessmentRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Moderate|[L]:Possible","NextReviewDate":"\/Date(1383244200000)\/","LastReviewedOn":"\/Date(1382691405530)\/"},{"Guid":"f5d97fa5-ba8f-4725-9324-ef165ff14e57","Code":"OR 6","Title":"Accidental disclosure of confidential information, resulting in damage to brand and customer satisfaction","RiskType":"Operational","ResponsiblePersonId":"af8181ff-476a-4d8f-bd8c-85347e058481","ResponsiblePersonName":"Jerome Steve","InitialRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","RevisedRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","FutureRiskRatingTypeId":"2c06eb82-1160-4e3c-8061-d8d9798df823","CurrentAssessmentRatingTypeId":"2c06eb82-1160-4e3c-8061-d8d9798df823","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Insignificant|[L]:Possible","NextReviewDate":"\/Date(1471372200000)\/","LastReviewedOn":"\/Date(1463471904717)\/"},{"Guid":"dfad8484-615f-462b-9ce9-15281336cc56","Code":"PR 1","Title":"Lack of engagement with executives ","RiskType":"Project","ResponsiblePersonId":"d68b8897-801a-4f12-abdb-a2946e2a672d","ResponsiblePersonName":"Jack Smith","InitialRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","RevisedRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","FutureRiskRatingTypeId":"2c06eb82-1160-4e3c-8061-d8d9798df823","CurrentAssessmentRatingTypeId":"2c06eb82-1160-4e3c-8061-d8d9798df823","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Minor|[L]:Rare","NextReviewDate":"\/Date(1405276200000)\/","LastReviewedOn":"\/Date(1404735073133)\/"},{"Guid":"72766d7b-9fdb-460c-940c-1cbed7cf2714","Code":"2","Title":"Not meeting project timelines","RiskType":"Project","ResponsiblePersonId":"cf7d5dcd-7074-49d9-88b7-6c3173d4dcbf","ResponsiblePersonName":"Marni Parry","InitialRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","RevisedRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","FutureRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessmentRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Minor|[L]:Unlikely","NextReviewDate":null,"LastReviewedOn":"\/Date(-62135596800000)\/"},{"Guid":"7a40cbbd-da9b-4ec7-ad7e-39c369b95399","Code":"PR 4","Title":"Inadequate evaluations of record management systems available in the market.","RiskType":"Project","ResponsiblePersonId":"d68b8897-801a-4f12-abdb-a2946e2a672d","ResponsiblePersonName":"Jack Smith","InitialRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","RevisedRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","FutureRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessmentRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Minor|[L]:Unlikely","NextReviewDate":"\/Date(1383330600000)\/","LastReviewedOn":"\/Date(1380709258483)\/"},{"Guid":"f57e9347-a081-487d-a38f-4b9c5393d80a","Code":"6","Title":"Strategy too broad and provides no guidance","RiskType":"Project","ResponsiblePersonId":"279d69ff-5780-4715-aba4-03698c9679c9","ResponsiblePersonName":"Nichol Beckett","InitialRiskRatingTypeId":"2c06eb82-1160-4e3c-8061-d8d9798df823","RevisedRiskRatingTypeId":"6d0a1e59-82dd-4669-9cf0-eb37b441a008","FutureRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","CurrentAssessmentRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Moderate|[L]:Likely","NextReviewDate":null,"LastReviewedOn":"\/Date(-62135596800000)\/"},{"Guid":"ce147485-2b5d-43f7-8f44-6eec28c50055","Code":"2","Title":"Inadequate resources committed to the project and unable to deliver to the agreed timelines","RiskType":"Project","ResponsiblePersonId":"7deea893-f748-4bc6-9cf9-f9ad23d6b959","ResponsiblePersonName":"Jacinta Hodgkinson","InitialRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","RevisedRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","FutureRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessmentRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Major|[L]:Unlikely","NextReviewDate":null,"LastReviewedOn":"\/Date(-62135596800000)\/"},{"Guid":"951bfb1c-f00b-424a-8086-91c1e0a78f0e","Code":"2","Title":"Lack of support/buy-in from internal stakeholders","RiskType":"Project","ResponsiblePersonId":"cf7d5dcd-7074-49d9-88b7-6c3173d4dcbf","ResponsiblePersonName":"Marni Parry","InitialRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","RevisedRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","FutureRiskRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessmentRatingTypeId":"f4795c33-d8cb-410a-94ae-297b92e2d0a3","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Minor|[L]:Possible","NextReviewDate":null,"LastReviewedOn":"\/Date(-62135596800000)\/"},{"Guid":"d63d7b58-ca18-4771-bb4a-a7f2ab05403a","Code":"2","Title":"Not being able to agree to a new structure ","RiskType":"Project","ResponsiblePersonId":"cf7d5dcd-7074-49d9-88b7-6c3173d4dcbf","ResponsiblePersonName":"Marni Parry","InitialRiskRatingTypeId":"6d0a1e59-82dd-4669-9cf0-eb37b441a008","RevisedRiskRatingTypeId":"6d0a1e59-82dd-4669-9cf0-eb37b441a008","FutureRiskRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","CurrentAssessmentRatingTypeId":"dd6f9e8d-dc5a-473d-82bd-2f377c2db7fa","CurrentAssessment":"Future","RiskCriteriaText":"[C]:Catastrophic|[L]:Unlikely","NextReviewDate":null,"LastReviewedOn":"\/Date(-62135596800000)\/"}];
    var critiriaInfo = [{"Criteria":{"Guid":"0dbe8e70-dbfd-4fa8-87b2-ec15918eda47","RiskCriteriaName":"Consequence","FormulaCode":"C","Description":"The effect the issue will have if it occurs.","ISPartofInitialAssessment":true,"ISSelctableForRevised":true,"ISSelectableForFuture":true,"Sort":1},"Ratings":[{"Guid":"6b1178a2-a071-47ee-8a16-72020fcca42d","RiskCriteriaRatingName":"Insignificant","RiskCriteriaRatingCode":"I","Value":1.0000,"Description":"","RiskCriteria":{"Guid":"0dbe8e70-dbfd-4fa8-87b2-ec15918eda47","RiskCriteriaName":"Consequence","FormulaCode":"C","Description":"The effect the issue will have if it occurs.","ISPartofInitialAssessment":true,"ISSelctableForRevised":true,"ISSelectableForFuture":true,"Sort":1}},{"Guid":"06f89a14-cf9d-4414-85f2-1e25318e15c8","RiskCriteriaRatingName":"Minor","RiskCriteriaRatingCode":"M","Value":2.0000,"Description":"","RiskCriteria":{"Guid":"0dbe8e70-dbfd-4fa8-87b2-ec15918eda47","RiskCriteriaName":"Consequence","FormulaCode":"C","Description":"The effect the issue will have if it occurs.","ISPartofInitialAssessment":true,"ISSelctableForRevised":true,"ISSelectableForFuture":true,"Sort":1}},{"Guid":"b2f582f5-cab5-4cb1-b376-1f8cd86f04af","RiskCriteriaRatingName":"Moderate","RiskCriteriaRatingCode":"M","Value":3.0000,"Description":"","RiskCriteria":{"Guid":"0dbe8e70-dbfd-4fa8-87b2-ec15918eda47","RiskCriteriaName":"Consequence","FormulaCode":"C","Description":"The effect the issue will have if it occurs.","ISPartofInitialAssessment":true,"ISSelctableForRevised":true,"ISSelectableForFuture":true,"Sort":1}},{"Guid":"397beec5-be1a-4e95-8b3e-347ae28e77ea","RiskCriteriaRatingName":"Major","RiskCriteriaRatingCode":"M","Value":4.0000,"Description":"","RiskCriteria":{"Guid":"0dbe8e70-dbfd-4fa8-87b2-ec15918eda47","RiskCriteriaName":"Consequence","FormulaCode":"C","Description":"The effect the issue will have if it occurs.","ISPartofInitialAssessment":true,"ISSelctableForRevised":true,"ISSelectableForFuture":true,"Sort":1}},{"Guid":"e5cb8680-d335-49ab-9367-f1bd9c1a02bc","RiskCriteriaRatingName":"Catastrophic","RiskCriteriaRatingCode":"C","Value":5.0000,"Description":"","RiskCriteria":{"Guid":"0dbe8e70-dbfd-4fa8-87b2-ec15918eda47","RiskCriteriaName":"Consequence","FormulaCode":"C","Description":"The effect the issue will have if it occurs.","ISPartofInitialAssessment":true,"ISSelctableForRevised":true,"ISSelectableForFuture":true,"Sort":1}}]},{"Criteria":{"Guid":"d8e3e901-9413-4398-a759-adefc269a8b7","RiskCriteriaName":"Likelihood","FormulaCode":"L","Description":"How likely is it that this will be the consequence?","ISPartofInitialAssessment":true,"ISSelctableForRevised":true,"ISSelectableForFuture":true,"Sort":2},"Ratings":[{"Guid":"91ad8021-29ed-4f44-ae15-cf4c7138aae4","RiskCriteriaRatingName":"Rare","RiskCriteriaRatingCode":"R","Value":1.0000,"Description":"Rare, very unlikely to occur (less than 5%)","RiskCriteria":{"Guid":"d8e3e901-9413-4398-a759-adefc269a8b7","RiskCriteriaName":"Likelihood","FormulaCode":"L","Description":"How likely is it that this will be the consequence?","ISPartofInitialAssessment":true,"ISSelctableForRevised":true,"ISSelectableForFuture":true,"Sort":2}},{"Guid":"a41f4f09-c638-4962-9b1f-1d22505fa464","RiskCriteriaRatingName":"Unlikely","RiskCriteriaRatingCode":"U","Value":2.0000,"Description":"Unlikely happen. Occurs between 5% and 9% of the time.","RiskCriteria":{"Guid":"d8e3e901-9413-4398-a759-adefc269a8b7","RiskCriteriaName":"Likelihood","FormulaCode":"L","Description":"How likely is it that this will be the consequence?","ISPartofInitialAssessment":true,"ISSelctableForRevised":true,"ISSelectableForFuture":true,"Sort":2}},{"Guid":"5ef1383c-f940-4312-a61a-cda1765e0fc1","RiskCriteriaRatingName":"Possible","RiskCriteriaRatingCode":"P","Value":3.0000,"Description":"May happen. Occurs between 10 % and 19 % of the time.","RiskCriteria":{"Guid":"d8e3e901-9413-4398-a759-adefc269a8b7","RiskCriteriaName":"Likelihood","FormulaCode":"L","Description":"How likely is it that this will be the consequence?","ISPartofInitialAssessment":true,"ISSelctableForRevised":true,"ISSelectableForFuture":true,"Sort":2}},{"Guid":"f8e83f71-8abd-48f2-831b-9f6d25924b4a","RiskCriteriaRatingName":"Likely","RiskCriteriaRatingCode":"L","Value":4.0000,"Description":"Quite often. Occurs between 20 % and 49 % of the time.","RiskCriteria":{"Guid":"d8e3e901-9413-4398-a759-adefc269a8b7","RiskCriteriaName":"Likelihood","FormulaCode":"L","Description":"How likely is it that this will be the consequence?","ISPartofInitialAssessment":true,"ISSelctableForRevised":true,"ISSelectableForFuture":true,"Sort":2}},{"Guid":"d4e76c67-a4fe-4856-84bb-dad7c96c2e92","RiskCriteriaRatingName":"Almost certain","RiskCriteriaRatingCode":"A","Value":5.0000,"Description":"Very often, occurs more often than every , i.e. more frequently than 50 % of the time.","RiskCriteria":{"Guid":"d8e3e901-9413-4398-a759-adefc269a8b7","RiskCriteriaName":"Likelihood","FormulaCode":"L","Description":"How likely is it that this will be the consequence?","ISPartofInitialAssessment":true,"ISSelctableForRevised":true,"ISSelectableForFuture":true,"Sort":2}}]}];
    var riskMatrix = [{"Xval":1.0000,"XAxis":"Insignificant","Yval":1.0000,"YAxis":"Rare","RiskCount":0,"RiskPercentage":0,"RatingType":"Low","RatingColor":"#6495ED","CriteriaText":"[C]:Insignificant |[L]:Rare"},{"Xval":1.0000,"XAxis":"Insignificant","Yval":2.0000,"YAxis":"Unlikely","RiskCount":0,"RiskPercentage":0,"RatingType":"Low","RatingColor":"#6495ED","CriteriaText":"[C]:Insignificant |[L]:Unlikely"},{"Xval":1.0000,"XAxis":"Insignificant","Yval":3.0000,"YAxis":"Possible","RiskCount":0,"RiskPercentage":0,"RatingType":"Low","RatingColor":"#6495ED","CriteriaText":"[C]:Insignificant |[L]:Possible"},{"Xval":1.0000,"XAxis":"Insignificant","Yval":4.0000,"YAxis":"Likely","RiskCount":0,"RiskPercentage":0,"RatingType":"Medium","RatingColor":"#80ff00","CriteriaText":"[C]:Insignificant |[L]:Likely"},{"Xval":1.0000,"XAxis":"Insignificant","Yval":5.0000,"YAxis":"Almost certain","RiskCount":0,"RiskPercentage":0,"RatingType":"Medium","RatingColor":"#80ff00","CriteriaText":"[C]:Insignificant |[L]:Almost certain"},{"Xval":2.0000,"XAxis":"Minor","Yval":1.0000,"YAxis":"Rare","RiskCount":0,"RiskPercentage":0,"RatingType":"Low","RatingColor":"#6495ED","CriteriaText":"[C]:Minor |[L]:Rare"},{"Xval":2.0000,"XAxis":"Minor","Yval":2.0000,"YAxis":"Unlikely","RiskCount":0,"RiskPercentage":0,"RatingType":"Medium","RatingColor":"#80ff00","CriteriaText":"[C]:Minor |[L]:Unlikely"},{"Xval":2.0000,"XAxis":"Minor","Yval":3.0000,"YAxis":"Possible","RiskCount":0,"RiskPercentage":0,"RatingType":"Medium","RatingColor":"#80ff00","CriteriaText":"[C]:Minor |[L]:Possible"},{"Xval":2.0000,"XAxis":"Minor","Yval":4.0000,"YAxis":"Likely","RiskCount":0,"RiskPercentage":0,"RatingType":"Medium","RatingColor":"#80ff00","CriteriaText":"[C]:Minor |[L]:Likely"},{"Xval":2.0000,"XAxis":"Minor","Yval":5.0000,"YAxis":"Almost certain","RiskCount":0,"RiskPercentage":0,"RatingType":"High","RatingColor":"#FFCC11","CriteriaText":"[C]:Minor |[L]:Almost certain"},{"Xval":3.0000,"XAxis":"Moderate","Yval":1.0000,"YAxis":"Rare","RiskCount":0,"RiskPercentage":0,"RatingType":"Low","RatingColor":"#6495ED","CriteriaText":"[C]:Moderate |[L]:Rare"},{"Xval":3.0000,"XAxis":"Moderate","Yval":2.0000,"YAxis":"Unlikely","RiskCount":0,"RiskPercentage":0,"RatingType":"Medium","RatingColor":"#80ff00","CriteriaText":"[C]:Moderate |[L]:Unlikely"},{"Xval":3.0000,"XAxis":"Moderate","Yval":3.0000,"YAxis":"Possible","RiskCount":0,"RiskPercentage":0,"RatingType":"High","RatingColor":"#FFCC11","CriteriaText":"[C]:Moderate |[L]:Possible"},{"Xval":3.0000,"XAxis":"Moderate","Yval":4.0000,"YAxis":"Likely","RiskCount":0,"RiskPercentage":0,"RatingType":"High","RatingColor":"#FFCC11","CriteriaText":"[C]:Moderate |[L]:Likely"},{"Xval":3.0000,"XAxis":"Moderate","Yval":5.0000,"YAxis":"Almost certain","RiskCount":0,"RiskPercentage":0,"RatingType":"High","RatingColor":"#FFCC11","CriteriaText":"[C]:Moderate |[L]:Almost certain"},{"Xval":4.0000,"XAxis":"Major","Yval":1.0000,"YAxis":"Rare","RiskCount":0,"RiskPercentage":0,"RatingType":"Medium","RatingColor":"#80ff00","CriteriaText":"[C]:Major |[L]:Rare"},{"Xval":4.0000,"XAxis":"Major","Yval":2.0000,"YAxis":"Unlikely","RiskCount":0,"RiskPercentage":0,"RatingType":"Medium","RatingColor":"#80ff00","CriteriaText":"[C]:Major |[L]:Unlikely"},{"Xval":4.0000,"XAxis":"Major","Yval":3.0000,"YAxis":"Possible","RiskCount":0,"RiskPercentage":0,"RatingType":"High","RatingColor":"#FFCC11","CriteriaText":"[C]:Major |[L]:Possible"},{"Xval":4.0000,"XAxis":"Major","Yval":4.0000,"YAxis":"Likely","RiskCount":0,"RiskPercentage":0,"RatingType":"High","RatingColor":"#FFCC11","CriteriaText":"[C]:Major |[L]:Likely"},{"Xval":4.0000,"XAxis":"Major","Yval":5.0000,"YAxis":"Almost certain","RiskCount":0,"RiskPercentage":0,"RatingType":"Extreme","RatingColor":"#EE0000","CriteriaText":"[C]:Major |[L]:Almost certain"},{"Xval":5.0000,"XAxis":"Catastrophic","Yval":1.0000,"YAxis":"Rare","RiskCount":0,"RiskPercentage":0,"RatingType":"Medium","RatingColor":"#80ff00","CriteriaText":"[C]:Catastrophic |[L]:Rare"},{"Xval":5.0000,"XAxis":"Catastrophic","Yval":2.0000,"YAxis":"Unlikely","RiskCount":0,"RiskPercentage":0,"RatingType":"High","RatingColor":"#FFCC11","CriteriaText":"[C]:Catastrophic |[L]:Unlikely"},{"Xval":5.0000,"XAxis":"Catastrophic","Yval":3.0000,"YAxis":"Possible","RiskCount":0,"RiskPercentage":0,"RatingType":"High","RatingColor":"#FFCC11","CriteriaText":"[C]:Catastrophic |[L]:Possible"},{"Xval":5.0000,"XAxis":"Catastrophic","Yval":4.0000,"YAxis":"Likely","RiskCount":0,"RiskPercentage":0,"RatingType":"Extreme","RatingColor":"#EE0000","CriteriaText":"[C]:Catastrophic |[L]:Likely"},{"Xval":5.0000,"XAxis":"Catastrophic","Yval":5.0000,"YAxis":"Almost certain","RiskCount":0,"RiskPercentage":0,"RatingType":"Extreme","RatingColor":"#EE0000","CriteriaText":"[C]:Catastrophic |[L]:Almost certain"}];

    initial = initialR;
    revised = revisedR;
    future = futureR;
    _critiriaInfo = critiriaInfo;
    _jsonRiskMatrix = riskMatrix;

    drawStuff();
}

function drawStuff() {
	setSVGContainer();
	drawRects();
	drawCircles(true);
}

function setRiskTypes(riskTypes) {
	_riskTypes = riskTypes;
}

function applyRiskTypeFilter()
{
	Object.keys(allCircles).forEach(function (key) {
		var index = allCircles[key].length;
		while (index--) {
			if (!_riskTypes.includes(allCircles[key][index].RiskType)) {
				allCircles[key].splice(index, 1);
			}
		}
	});
}

function groupCirclesPerBox(oneCirclePerIRF) {
	circlesPerMatrix = {};
	if (oneCirclePerIRF){
		Object.keys(allCircles).forEach(function (IRFKey) {
			Object.keys(allCircles[IRFKey]).forEach(function(GUIDKey) {
			 if (allCircles[IRFKey][GUIDKey].length > 0) {
			 	// access only the first circle since oneCirclePerIRF condition is true
			 	var circle = allCircles[IRFKey][GUIDKey][0];
			 	if (!(circle.MatrixId in circlesPerMatrix)) {
			 		circlesPerMatrix[circle.MatrixId] = [];
			 	}
			 	// storing circle guid per matrix id, this will be used to figure
			 	// out how much circles are assigned per box
			 	// this number will be used inside the circle drawing algorithm
			 	circlesPerMatrix[circle.MatrixId].push(circle);
			 }
			});
		});
	}
}

function changeBorder(d3Circle, bIncrease) {
	d3Circle.style("stroke", "magenta")
		// .transition("style")
		// .duration(500)
		.style("stroke-width", function() {
			if (bIncrease) {
				return 5;
			}
			return 0;
		});
}

function highlightCircles(guid) {
	group_Circles.selectAll("g")
		.transition("opacity")
		.duration(500)
		.attr('fill-opacity', function(d) {
			var d3Circle = d3.select(this).select("circle");
			if (guid != null) {
				if (d.Guid != guid) {
					changeBorder(d3Circle, false);
					return 0.3;
				}
				else {
					changeBorder(d3Circle, true);
					return 1;
				}
			}
			else {
				changeBorder(d3Circle, false);
				return 1;
			}
			
		});
}

function drawCircle(circleCount, box, circle, circleIndex) {
	var center = box.x + (box.width / 2);
	var cx, cy, movement;

	if (circleCount == 3 || circleCount == 1) {
	    movement = circleRadiusWithPadding * 2;

	    if (circleIndex == 0) {
	        cx = center;
	    }
	    else if (circleIndex == 1) {
	        cx = center + movement;
	    }
	    else if (circleIndex == 2) {
	        cx = center - movement;
	    }

	    cy = box.y + (box.height / 2);
	}
	else if (circleCount == 2 || circleCount == 4) {
	    movement = circleRadiusWithPadding * 3;

	    if (circleIndex == 0) {
	        cx = center + circleRadiusWithPadding;
	    }
	    else if (circleIndex == 1) {
	        cx = center - circleRadiusWithPadding;
	    }
	    else if (circleIndex == 2) {
	        cx = center + movement;
	    }
	    else if (circleIndex == 3) {
	        cx = center - movement;
	    }

	    cy = box.y + (box.height / 2);
	}
	else if (circleCount > 4 & circleCount < 9) {
	    cy = box.y + (box.height / 2) - circleRadiusWithPadding;
	    movement = circleRadiusWithPadding * 3

	    if (circleIndex == 0) {
	        cx = center + circleRadiusWithPadding;
	    }
	    else if (circleIndex == 1) {
	        cx = center - circleRadiusWithPadding;
	    }
	    else if (circleIndex == 2) {
	        cx = center + movement;
	    }
	    else if (circleIndex == 3) {
	        cx = center - movement;
	    }

	    if (circleIndex > 3) {
	        cy = box.y + (box.height / 2) + circleRadiusWithPadding;

	        if (circleIndex == 4) {
	            cx = center + circleRadiusWithPadding;
	        }
	        else if (circleIndex == 5) {
	            cx = center - circleRadiusWithPadding;
	        }
	        else if (circleIndex == 6) {
	            cx = center + movement;
	        }
	        else if (circleIndex == 7) {
	            cx = center - movement;
	        }
	    }
	}
	else if (circleCount > 8) {
	    cy = box.y + circleRadiusWithPadding + 5;
	    movement = circleRadiusWithPadding * 3

	    if (circleIndex == 0) {
	        cx = center + circleRadiusWithPadding;
	    }
	    else if (circleIndex == 1) {
	        cx = center - circleRadiusWithPadding;
	    }
	    else if (circleIndex == 2) {
	        cx = center + movement;
	    }
	    else if (circleIndex == 3) {
	        cx = center - movement;
	    }

	    if (circleIndex > 3) {
	        cy = box.y + (box.height / 2);

	        if (circleIndex == 4) {
	            cx = center + circleRadiusWithPadding;
	        }
	        else if (circleIndex == 5) {
	            cx = center - circleRadiusWithPadding;
	        }
	        else if (circleIndex == 6) {
	            cx = center + movement;
	        }
	        else if (circleIndex == 7) {
	            cx = center - movement;
	        }

	        if (circleIndex > 7) {
	        	cy = box.y + (box.height / 2) + circleRadiusWithPadding + 5;

	            if (circleIndex == 8) {
	            	cx = center - movement;
	            }
	            else if (circleIndex == 9) {
	                cx = center - circleRadiusWithPadding;
	            }
	            else if (circleIndex == 10) {
	            	cx = center + circleRadiusWithPadding;
	            }
	            else if (circleIndex == 11) {
	                cx = center + movement;
	            }
	            else {
	            	return;
	            }
	    	}
	    }
	}
	else {
	    return;
	}

	var circleSubGroup = group_Circles.append("g")
							.datum(circle)
							.attr("id", circle.Guid)
							.on("mouseover", function(d) { 
								d3.select(this).style("cursor", "pointer"); 
								d3.select(this).select("text").attr("font-size", "14px");
								d3.select(this).select("circle").attr("r", circleRadius+3);
							})
						    .on("mouseout", function(d) { 
						    	d3.select(this).style("cursor", "default"); 
						    	d3.select(this).select("text").attr("font-size", "12px");
						    	d3.select(this).select("circle").attr("r", circleRadius);
						    })
							.on("click", function(d) {
								_circleClicked = true;
							  	highlightCircles(d.Guid);
							  	group_Circles.selectAll("g").sort(function (a, b) { 
							    	return changeCircleZIndex(a, d);                            
							  	});
							});

	group_Circles.selectAll("g")
		.transition("opacity")
		.attr('fill-opacity', 1);

	circleSubGroup.append("circle")
			.attr("cx", cx)
			.attr("cy", cy)
			.attr("r", circleRadius)
			.style("fill", function (d) {
			    return getCircleColor(circle.assesment);
			});

	circleSubGroup.append("text")
		.text(function (d) { 
			if (circleIndex == 11) {
				return "...";
			}
			return circle.code;
		})
		
		.attr("x", cx)
		.attr("y", cy + 5)
		.attr("font-family", "roboto")
		.attr("font-size", "12px")
		.attr("font-weight", "bold")
		.attr("text-anchor", "middle")
		.style("fill", function (d) {
		    if (circle.assesment == "F") {
		        return "white";
		    }
		    return "black";
		});
}

function changeCircleZIndex(a, d) {
	if (a.Guid != d.Guid) {
		return -1;        
	}       
	else {
		return 1;
	}  
}

function drawCircles(clearCurrentCircles) {
	d3.select("#group_circles").remove();
	group_Circles = group_MainGroup.append("g").attr("id", "group_circles");

	if (clearCurrentCircles) {
		_circleClicked = false;
		arrI = {};
		arrR = {};
		arrF = {};
		allCircles = {};
		group_Circles.selectAll("circle").remove();
		group_Circles.selectAll("text").remove();
	}

    if (bIinitial) {
    	var riskMatrixId; var guid;

    	for (i = 0; i < initial.length; ++i) {
    		riskMatrixId = getCircleGroup(initial[i].RiskCriteriaText);
    		guid = initial[i].Guid;

    		var circle = {"Guid": initial[i].Guid, "code": initial[i].Code, "assesment": "I", "RiskType": initial[i].RiskType + " Risk", "Title" : initial[i].Title, "MatrixId": riskMatrixId};

    		if (!(guid in arrI)) {
    			arrI[guid] = [];
    		}
    		
    		arrI[guid].push(circle);
    	}

    	allCircles.I = arrI;
    }

    if (bRevised) {
    	var riskMatrixId; var guid;

    	for (i = 0; i < revised.length; ++i) {
    		riskMatrixId = getCircleGroup(revised[i].RiskCriteriaText);
    		guid = revised[i].Guid;

    		var circle = {"Guid": revised[i].Guid, "code": revised[i].Code, "assesment": "R", "RiskType": revised[i].RiskType + " Risk", "Title" : revised[i].Title, "MatrixId": riskMatrixId};

    		if (!(guid in arrR)) {
    			arrR[guid] = [];
    		}
    		
    		arrR[guid].push(circle);
    	}

    	allCircles.R = arrR;
    }

    if (bFuture) {
    	var riskMatrixId; var guid;

    	for (i = 0; i < future.length; ++i) {
    		riskMatrixId = getCircleGroup(future[i].RiskCriteriaText);
    		guid = future[i].Guid;

    		var circle = {"Guid": future[i].Guid, "code": future[i].Code, "assesment": "F", "RiskType": future[i].RiskType + " Risk", "Title" : future[i].Title, "MatrixId": riskMatrixId};

    		if (!(guid in arrF)) {
    			arrF[guid] = [];
    		}
    		
    		arrF[guid].push(circle);
    	}

    	allCircles.F = arrF;
    }

    groupCirclesPerBox(true);
    applyRiskTypeFilter();

    var oneCirclePerIRF = true;

	if (oneCirclePerIRF) {
		Object.keys(circlesPerMatrix).forEach(function (IRFKey) {
	    	for (i = 0; i < circlesPerMatrix[IRFKey].length; ++i) {
	    		var circleCount = circlesPerMatrix[IRFKey].length;
	    		var box = d3.select("#" + circlesPerMatrix[IRFKey][i].MatrixId).datum();
	    		drawCircle(circleCount, box, circlesPerMatrix[IRFKey][i], i);
	    	}
	    });
	}
}

function compareRiskRatings(a,b) {
	if (a.Value < b.Value) {
		return -1;
	}

	if (a.Value > b.Value) {
		return 1;
	}

	return 0;
}

function getMatchingRiskMatrixIndex(xCritiria, yCritiria) {
	for (var i=0; i < _jsonRiskMatrix.length; i++) {
        if (_jsonRiskMatrix[i].XAxis == xCritiria && _jsonRiskMatrix[i].YAxis == yCritiria) {
            return i;
        }
    }
}

function drawAxisLabels() {
	d3.select("#group_Axislabels").remove();
	group_AxisLabels = group_MainGroup.append("g")
		.attr("id", "group_Axislabels");

	// X-Axis Label
	group_AxisLabels.append("text")
		.text(xAxisItems[0].RiskCriteria.RiskCriteriaName)
		.attr("x", (xAxisItems.length * 240) /2 )
		.attr("y", (120 * yAxisItems.length) + 60)
		.attr("font-size", "25px")
		.attr("font-weight", "bold")
		.attr("font-family", "roboto")
		.style("fill", "#848283")
		.attr("text-anchor", "middle");

	// Y-Axis Label
	group_AxisLabels.append("text")
		.text(yAxisItems[0].RiskCriteria.RiskCriteriaName)
		.attr("x", -100 )
		.attr("y", (yAxisItems.length * 120)/2)
		.attr("font-size", "25px")
		.attr("font-weight", "bold")
		.attr("font-family", "roboto")
		.style("fill", "#848283")
		.attr("transform", "rotate(270," + -100 + "," + (yAxisItems.length * 120)/2 + ")")
		.attr("text-anchor", "middle");

	// Y-Axis Values
	for (var i = 0; i < yAxisItems.length; ++i) {
		group_AxisLabels.append("text")
		.text(yAxisItems[i].RiskCriteriaRatingName)
		.attr("x", -5)
		.attr("y", (120*(yAxisItems.length-i)) - 60)
		.attr("font-size", "14px")
		.attr("font-weight", "bold")
		.attr("font-family", "roboto")
		.style("fill", "#848283")
		.attr("text-anchor", "end");
	}

	// X-Axis Values
	for (var i = 0; i < xAxisItems.length; ++i) {
		group_AxisLabels.append("text")
		.text(xAxisItems[i].RiskCriteriaRatingName)
		.attr("x", (240 * i) + 120)
		.attr("y", (120 * yAxisItems.length) + 20)
		.attr("font-size", "14px")
		.attr("font-weight", "bold")
		.attr("font-family", "roboto")
		.style("fill", "#848283")
		.attr("text-anchor", "middle");
	}
}

function drawLegend() {
	d3.select("#legendSVG").remove();

	var legendColors = [];

	for (var i = 0; i < _jsonRiskMatrix.length; ++i) {
		legendColors[_jsonRiskMatrix[i].RatingType] = _jsonRiskMatrix[i].RatingColor;
	}

	var legendSVG = d3.select("div#legend").append("svg").attr("width", Object.keys(legendColors).length*150).attr("height", 50);

	var count = 0;
	Object.keys(legendColors).forEach(function (key) {
		var color = legendColors[key];
		var xCor = count++ * 150;

		legendSVG.append("rect")
			.attr("x", xCor)
			.attr("y", 0)
			.attr("height", 10)
			.attr("width", 150)
			.style("stroke-width", 2)
			.style("stroke", "white")
			.style("fill", color);

		 legendSVG.append("text")
			.text(key)
			.attr("x", xCor + 75)
			.attr("y", 25)
			.attr("font-family", "roboto")
			.attr("font-size", "14px")
			.attr("font-weight", "bold")
			.attr("text-anchor", "middle")
			.style("fill", "#848283");
	});
}

function drawRects() {
	var xAxisFormula = "C";
	var yAxisFormula = "L";

	xAxisItems = {};
	yAxisItems = {};

	if (_critiriaInfo[0].Criteria.FormulaCode == xAxisFormula) {
		xAxisItems = _critiriaInfo[0].Ratings;
		yAxisItems = _critiriaInfo[1].Ratings;
	}
	else {
		xAxisItems = _critiriaInfo[1].Ratings;
		yAxisItems = _critiriaInfo[0].Ratings;
	}

	// sort arrays based on the risk value
	xAxisItems.sort(compareRiskRatings);
	yAxisItems.sort(compareRiskRatings);

	drawAxisLabels();
	drawLegend();

	rectangles = [];

	for (var i = 0; i < xAxisItems.length; ++i) {
		var index = yAxisItems.length;

		for (var index = 0; index < yAxisItems.length; ++index) {
			var riskMatrixIndex = getMatchingRiskMatrixIndex(xAxisItems[i].RiskCriteriaRatingName, yAxisItems[index].RiskCriteriaRatingName);
			var boxId = getCircleGroup(_jsonRiskMatrix[riskMatrixIndex].CriteriaText);
			var color = _jsonRiskMatrix[riskMatrixIndex].RatingColor;

			rectangles.push({"x": i*240, "y": (yAxisItems.length-index-1)*120, "height": 120, "width": 240, "id": boxId, "color": color, "riskMatrixIndex": riskMatrixIndex});
		}
	}

    var rectangles = group_MainGroup.selectAll("rect")
                             .data(rectangles)
                             .enter()
                             .append("rect");

    var rectangleAttributes = rectangles
							   .attr("id", function (d) { return d.id })
			                   .attr("x", function (d) { return d.x; })
			                   .attr("y", function (d) { return d.y; })
			                   .attr("height", function (d) { return d.height; })
			                   .attr("width", function (d) { return d.width; })
			                   .style("stroke-width", 2)
			                   .on("click", function(d) {
									_circleClicked = false;
								  	highlightCircles();
								})
			                   .style("stroke", "white")
			                   .style("fill", function (d) { return d.color; });
}

function getCircleColor(assessment) {
    if (assessment == "F") {
        return "black";
    }
    else if (assessment == "I") {
        return "#CECECE";
    }
    else {
        return "white";
    }
}

function getCircleGroup(str) {
    str = str.replace(/\|/g, '');
    str = str.replace(/\:/g, '');
    str = str.replace(/\[C\]/g, '');
    str = str.replace(/\[L\]/g, '');

    return removeSpaces(str);
}

function removeSpaces(str) {
    return str.replace(/\s/g, '').toLowerCase();
}

function findCircleX(circleGroup) {
    return (d3.select("#" + circleGroup).datum().x + 29);
}

function findCircleY(circleGroup) {
    return (d3.select("#" + circleGroup).datum().y + 28);
}

function handleMouseOut(d, i) {

}

function setSVGContainer() {
	svgContainer = d3.select("div#newHeatMap").append("svg").attr("width", 1370).attr("height", 680);
	group_MainGroup = svgContainer.append("g").attr("transform", "translate(170,0)").attr("id", "group_main");
}