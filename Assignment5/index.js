function generateGrade(marks) {
    if (marks >= 90) return 'A+';
    else if (marks >= 80) return 'A';
    else if (marks >= 70) return 'B';
    else if (marks >= 60) return 'C';
    else if (marks >= 50) return 'D';
    else return 'F';
  }

  function generateMarksheet() {
    // Set Roll Number
    var roll = document.getElementById("rollNumber").value;
    document.getElementById("rollNumberDisplay").innerText = roll;

    // Load Photo
    var fileInput = document.getElementById('photoInput');
    var photo = document.getElementById('studentPhoto');
    if (fileInput.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        photo.src = e.target.result;
      };
      reader.readAsDataURL(fileInput.files[0]);
    }

    var tbody = document.getElementById("marksTableBody");
    tbody.innerHTML = ""; // Clear previous rows

    for (var i = 1; i <= 5; i++) {
      var subjectName = document.getElementById('subject' + i + 'Name').value;
      var theoryMarks = parseInt(document.getElementById('subject' + i + 'Theory').value);
      var practicalMarks = parseInt(document.getElementById('subject' + i + 'Practical').value);

      var theoryGrade = generateGrade(theoryMarks);
      var practicalGrade = generateGrade(practicalMarks);

      var netMarks = theoryMarks + practicalMarks;
      var netGrade = generateGrade(netMarks / 2); // Assuming net grade on average


      var row = "<tr>" +
        "<td>" + i + "</td>" +
        "<td>" + subjectName + "</td>" +
        "<td>" + theoryMarks + "</td>" +
        "<td>" + practicalMarks + "</td>" +
        "<td>" + theoryGrade + "</td>" +
        "<td>" + practicalGrade + "</td>" +
        "<td>" + netMarks + "</td>" +
        "<td>" + netGrade + "</td>" +
        "</tr>";

      tbody.innerHTML += row;
    }
  }