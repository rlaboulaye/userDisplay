var app = angular.module('app', []).controller('mainCtrl', function($scope) {

  $scope.users = [];

  $scope.isThere = function (userArray, name) {
    for (var iCount = 0; iCount < userArray.length; iCount++)
    {
      if (userArray[iCount].name.toUpperCase() == name.toUpperCase())
      {
        return true;
      }
    }
    return false;
  };

  $scope.addNew = function (user) {

    if($scope.isThere($scope.users, user.name))
    {
      alert('This username has already been taken. Please use a different username.');
    }
    else
    {
      if(user.name)
      {
        if(!user.hobby)
        {
          user.hobby = 'Not properly filling out forms'
        }
        $scope.users.push({
          name: user.name,
          avatarUrl: user.url,
          hobby: user.hobby
        });

        user.name = '';
        user.url = '';
        user.hobby = '';
      }
    }
  };
});

app.directive('avatar', avatarDirective);

function avatarDirective () {
  return {
    scope: {
      user: '='
    },
    restrict: 'E',
    template: (
      '<div class="Avatar">' +
        '<img ng-src="{{user.avatarUrl}}" />' +
        '<h2>{{user.name}}</h4>' +
        '<h4>Hobby: {{user.hobby}}</h4>' +
      '</div>'
    ),
    link: link
  };

  function link (scope) {
    if (!scope.user.avatarUrl) {
      scope.user.avatarUrl = 'http://thealmanac.org/assets/img/default_avatar.png';
    }
  }

}
