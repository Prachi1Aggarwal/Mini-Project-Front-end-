function generateResume() {
    // Get values
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var degree = document.getElementById('degree').value;
    var institution = document.getElementById('institution').value;
    var passingYear = document.getElementById('passingYear').value;
    var skills = document.getElementById('skills').value.split(',');
    var projectTitle = document.getElementById('projectTitle').value;
    var projectDesc = document.getElementById('projectDesc').value;

    // Handle photo
    var fileInput = document.getElementById('photoInput');
    if (fileInput.files[0]) {
      var reader = new FileReader();
      reader.onload = function(e) {
        var photoHTML = `<img src="${e.target.result}" alt="Profile Photo" width="100" height="120"><br><br>`;
        showResume(photoHTML, fullName, email, phone, address, degree, institution, passingYear, skills, projectTitle, projectDesc);
      };
      reader.readAsDataURL(fileInput.files[0]);
    } else {
      var photoHTML = "";
      showResume(photoHTML, fullName, email, phone, address, degree, institution, passingYear, skills, projectTitle, projectDesc);
    }
}

function showResume(photoHTML, fullName, email, phone, address, degree, institution, passingYear, skills, projectTitle, projectDesc) {
    var output = `
      <div>
        ${photoHTML}
        <h2>${fullName}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <hr>
        <h3>Education</h3>
        <p>${degree} from ${institution} (${passingYear})</p>
        <hr>
        <h3>Skills</h3>
        <ul>
          ${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}
        </ul>
        <hr>
        <h3>Project</h3>
        <p><strong>${projectTitle}:</strong> ${projectDesc}</p>
      </div>
    `;

    document.getElementById('resumeOutput').innerHTML = output;
}
