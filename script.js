var myApp = angular.module("app", []);
myApp.controller("MyController", function ($scope) {
  $scope.rows = [
    {
      id: "1",
      fname: "Rutvik",
      lname: "Shah",
      math: 80,
      sci: 90,
      eng: 50,
      tot: 220,
      gmark: "No Gracing Required",
    },
    {
      id: "2",
      fname: "Raj",
      lname: "Shah",
      math: 40,
      sci: 30,
      eng: 40,
      tot: 110,
      gmark: "40",
    },
  ];
  $scope.c = 0;

  $scope.showflag = false;

  $scope.showfrom = function () {
    $scope.showflag = true;
  };

  $scope.showtbl = function () {
    $scope.showflag = false;
  };

  $scope.addRow = function () {
    $scope.check();
    if ($scope.flag) {
      $scope.c++;
      totmark = $scope.math + $scope.sci + $scope.eng;

      if (totmark < 150) gmark = 150 - totmark;
      else gmark = "No Gracing Required";
      $scope.rows.push({
        id: $scope.id,
        fname: $scope.fname,
        lname: $scope.lname,
        math: $scope.math,
        sci: $scope.sci,
        eng: $scope.eng,
        tot: totmark,
        gmark: gmark,
      });
      $scope.EmptyTextBox();
      $scope.showtbl();
    } else {
      alert("Enter All Data!!");
    }
  };

  $scope.orderpram = "id";
  $scope.reorder = function (x) {
    if ($scope.orderpram == x) {
      $scope.orderpram = "-" + x;
    } else {
      $scope.orderpram = x;
    }
  };

  $scope.check = function () {
    $scope.flag = true;
    if ($scope.id == null) $scope.flag = false;
    if ($scope.fname == null) $scope.flag = false;
    if ($scope.lname == null) $scope.flag = false;
    if ($scope.math == null) $scope.flag = false;
    if ($scope.sci == null) $scope.flag = false;
    if ($scope.eng == null) $scope.flag = false;
  };

  $scope.RowDelete = function (val) {
    var index = $scope.rows.indexOf(val);
    $scope.rows.splice(index, 1);
  };

  $scope.EmptyTextBox = function () {
    $scope.id = null;
    $scope.fname = null;
    $scope.lname = null;
    $scope.math = null;
    $scope.sci = null;
    $scope.eng = null;
  };
});
