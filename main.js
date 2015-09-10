var input = document.querySelector('#leInput'),
    commands = {
      ".tar": "tar -a",
      ".tar.gz": "tar -abc"
    };

input.addEventListener('paste', function(e) {
  setTimeout(function(){
    var file = input.value;
    Object.keys(commands).forEach(function(ext) {
      if(file.substr(-ext.length) == ext) {
        input.value = commands[ext] + ' ' + file;
        input.select();
      }
    });
  }, 4);
});
