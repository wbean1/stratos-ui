(function () {
  'use strict';

  describe('table-view directive', function () {
    var $element, applicationsTableDirectiveCtrl;

    var apps = [
      {
        clusterId: 'testGuid',
        metadata: {
          guid: 'appGuid'
        }
      }
    ];

    beforeEach(module('templates'));
    beforeEach(module('console-app'));

    beforeEach(inject(function ($injector) {
      var $compile = $injector.get('$compile');
      var $scope = $injector.get('$rootScope').$new();
      $scope.apps = apps;
      var markup = '<table-view apps="apps"></table-view>';

      $element = angular.element(markup);
      $compile($element)($scope);
      $scope.$apply();

      applicationsTableDirectiveCtrl = $element.controller('tableView');
    }));

    it('should be defined', function () {
      expect($element).toBeDefined();
    });

    describe('Controller tests', function () {
      it('should be defined', function () {
        expect(applicationsTableDirectiveCtrl).toBeDefined();
      });

    });

  });

})();
