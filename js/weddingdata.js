$( document ).ready(function() {

    $('#save_details').click(function(){
        addDetails();
    })

    $("#brideImage").change(function () {
        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = imageIsLoadedBride;
            reader.readAsDataURL(this.files[0]);
        }
    });

    $("#groomImage").change(function () {
        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = imageIsLoadedGroom;
            reader.readAsDataURL(this.files[0]);
        }
    });


});

function imageIsLoadedBride(e) {
    $('#previewBride').attr('src', e.target.result);
};

function imageIsLoadedGroom(e) {
    $('#previewGroom').attr('src', e.target.result);
};

function addDetails(){

    var bridenickname=$('#nickNamebride').val();
    var brideaddress=$('#addressLine1bride').val();
    var weddingdate=$('#datebride').val();

    var groomnickname=$('#nickNamegroom').val();
    var groomaddress=$('#addressLine1groom').val();



    if(bridenickname==='' || bridenickname===undefined){
        alert('Enter Bride Nick Name');
        return false;
    }else if(brideaddress==='' || brideaddress===undefined){
        alert('Enter Address');
        return false; 
    }else if(weddingdate==='' || weddingdate===undefined){
        alert('Enter Date');
        return false; 
    }else if(groomnickname==='' || groomnickname===undefined){
        alert('Enter Groom Nick Name');
        return false; 
    }
    else
    {
        $("#bridenickName").html(bridenickname);
        $("#groomnickName").html(groomnickname);
        $('#marriageDate').html(weddingdate);
        $("#address").html(brideaddress);

        alert("Don't refresh the page,Check all the details filled or not if filled close the alert and  go to screen top")
    }
     
}