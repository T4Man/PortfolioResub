var projects = [];

function Project (opts) {
  this.title = opts.title;
  this.body = opts.body;
}

Project.prototype.toHtml = function() {
  var $newProject = $('.template').clone();
  $newProject.removeClass('template');
  $newProject.find('h1:first').html(this.title);
  $newProject.find('.article-body').html(this.body);
  return $newProject;
}

projectData.forEach(function(ele) {
  projects.push(new Project(ele));
})

projects.forEach(function(a){
  $('#project-article').append(a.toHtml())
});
