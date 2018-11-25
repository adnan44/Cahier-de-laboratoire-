var AllQuillObjects = [
  ["id", 'objet']
];
$(document).ready(function() {

	$("#buttonIdTag").click(function() {
		popupAddTag();
	});
	
	generateBillet('billet1','Sample');
	generateBillet('billet2','Sample');
	
	
	$( ".buttonQuill" ).click(function() {
		strId=this.id.substring(0, this.id.length - 6);//on récupère l'id commun
		quillEnable(strId);
		//quill retourne l'objet et on l'ajout à la liste pour manipuler l'objet quand on veut
		$(this).prop("disabled",true);
		$("#"+strId+"save").prop("disabled",false);
		console.log($(this));
	});
	
	$( ".saveButton" ).click(function() {
		strId=this.id.substring(0, this.id.length - 4);
		quillDisable(strId);
		//must save in database
		$(this).prop("disabled",true);
		$("#"+strId+"Modify").prop("disabled",false);
	});
	
});