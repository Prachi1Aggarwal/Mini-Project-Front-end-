const btn = document.getElementById('submit');
let nname,course,num,dob,group,hostel,valid,photo,reader;
btn.addEventListener('click',function(e){
    e.preventDefault();
    nname = document.getElementById('name').value;
    course = document.getElementById('course').value;
    num = document.getElementById('no').value;
    dob = document.getElementById('dob').value;
    group = document.getElementById('blood').value;
    hostel = document.querySelector("input[name='hostel']:checked").value;
    
    valid = document.getElementById('valid').value;
    photo = document.getElementById('image');
    
   
    // console.log(nname)
    document.getElementById('fname').innerHTML = nname;
    document.getElementById('scourse').innerHTML = course;
    document.getElementById('admission').innerHTML = num;
    document.getElementById('sdob').innerHTML = dob;
    document.getElementById('group').innerHTML = group;
    document.getElementById('hashostel').innerHTML = hostel;
    document.getElementById('till').innerHTML = valid;
    const imageInput = document.getElementById('image');
    const file = imageInput.files[0];
    const displayImage = document.getElementById('profile');

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            displayImage.src = e.target.result;
            displayImage.style.display = 'block'; // make it visible
        };
        reader.readAsDataURL(file); // convert to base64 and display
    }
});


