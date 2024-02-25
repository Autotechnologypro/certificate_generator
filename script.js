




document.getElementById('certificateForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    var name = document.getElementById('name').value;
    var event = document.getElementById('event').value;

  
    var certificateContent = `
      <p>This is to certify that <strong>${name}</strong> has worked as a <strong>${event}</strong> at  for a duration of</p>
      <p>During their tenure, they have demonstrated excellent performance and contributed significantly to the success of our organization.</p>
      <p>We wish them all the best in their future endeavors.</p>
    `;
  
    document.getElementById('certificateContent').innerHTML = certificateContent;
    document.getElementById('certificateOutput').classList.remove('hidden');
    document.getElementById('downloadLink').classList.remove('hidden');
  });
  
  document.getElementById('downloadLink').addEventListener('click', function() {
    var certificateText = document.getElementById('certificateContent').textContent;
    var blob = new Blob([certificateText], { type: 'text/plain' });
    var url = URL.createObjectURL(blob);
    var link = document.createElement('a');
  
    link.href = url;
    link.download = 'certificate.txt';
    link.click();
  });