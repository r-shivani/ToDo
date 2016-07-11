angular.module('todoApp', [])
  .controller('TodoCtrl', function($scope) {

    //var $scope = this;

     $scope.listModules = [{
     name:'Request' ,
     des:'Request Module Description.' ,
     students: [{sname:'Shivani'},{sname:'Sara'},{sname:'Sandy'}],
     tasks: [{tname:'To do1',isCompleted:false, assignStudent:''}]
     }];

    $scope.addModule = function() {

      $scope.listModules.push({name:$scope.moduleName, des:$scope.moduleDes,students:[], tasks:[]});
      $scope.moduleName="";
      $scope.moduleDes="";
    };

 

    $scope.addStudent = function() {
     
      var s=$scope.studentName;
      for(var i=0;i<$scope.listModules.length;i++) {
       
          if($scope.listModules[i].name == $scope.StudentGroup)
            {
            var listStu = $scope.listModules[i].students;
            listStu.push({sname:s});
            $scope.listModules[i].students = listStu;}
        
      }
    $scope.studentName="";
    $scope.StudentGroup ="";
    };

    $scope.addTask = function() {
      
      var s=$scope.taskName;
      for(var i=0;i<$scope.listModules.length;i++) {
       
          if($scope.listModules[i].name == $scope.taskGroup)
            {
            var listStu = $scope.listModules[i].tasks;
            listStu.push({tname:s,isCompleted:false, assignStudent:''});
            $scope.listModules[i].tasks = listStu;}
        
      }
    $scope.taskName="";
    $scope.taskGroup="";
    };


    $scope.deleteGroup = function(group) {
    var index = $scope.listModules.indexOf(group);
    $scope.listModules.splice(index, 1);
  };



    $scope.deleteStudent = function(student,group) {

    var index1 = $scope.listModules.indexOf(group);
    var tempTasks =$scope.listModules[index1].tasks;
    for(var i=0;i<$scope.listModules[index1].tasks.length;i++) {
      if(tempTasks[i].assignStudent == student.sname) {
        tempTasks[i].assignStudent ="";
      }
    }
    $scope.listModules[index1].tasks = tempTasks;
    var index2 = $scope.listModules[index1].students.indexOf(student);
    $scope.listModules[index1].students.splice(index2, 1);
    
  };


    $scope.deleteTask = function(task,group) {
     var index1 = $scope.listModules.indexOf(group);
    var index2 = $scope.listModules[index1].tasks.indexOf(task);
    $scope.listModules[index1].tasks.splice(index2, 1);
  };

    $scope.remaining = function(listModule) {
      
      var count = 0;
      angular.forEach($scope.listModules[$scope.listModules.indexOf(listModule)].tasks, function(task) {
        count += !task.isCompleted ? 0 : 1;
      });
      return count;
    };

    $scope.assign = function(s,task,l) {

     
      var index1 = $scope.listModules.indexOf(l);
    var index2 = $scope.listModules[index1].tasks.indexOf(task);
    var t = $scope.listModules[index1].tasks[index2];
    if(s!=null)
    t.assignStudent = s.sname;

    $scope.listModules[index1].tasks[index2]= t;



    }

  });