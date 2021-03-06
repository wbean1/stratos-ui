(function () {
  'use strict';

  describe('Manager Users test', function () {

    var $httpBackend, manageUsersService, cfOrganizationModel, authModel;

    var constants = {
      clusterGuid: 'clusterGuid',
      organizationGuid: 'organizationGuid',
      users: [
        {
          entity: {
            username: 'user1'
          }
        },
        {
          entity: {
            username: 'user2'
          }
        }
      ],
      organizations: {
        organizationGuid : {
          details: {
            org: {
              metadata: {
                guid: 'organizationGuid'
              }
            }
          }
        },
        otherOrganizationGuid: {

        }
      }
    };

    beforeEach(module('templates'));
    beforeEach(module('console-app'));

    beforeEach(inject(function ($injector) {
      $httpBackend = $injector.get('$httpBackend');
      manageUsersService = $injector.get('appClusterManageUsers');

      var modelManager = $injector.get('modelManager');
      cfOrganizationModel = $injector.get('cfOrganizationModel');
      authModel = modelManager.retrieve('cloud-foundry.model.auth');
    }));

    afterEach(function () {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('should be defined', function () {
      expect(manageUsersService).toBeDefined();
      expect(manageUsersService.show).toBeDefined();
    });

    it('initialise', function () {
      // Set these to exercise more of the init. Should consider moving/better way of doing this in the future
      _.set(cfOrganizationModel, 'organizations.' + constants.clusterGuid, constants.organizations);
      _.set(authModel, 'principal.' + constants.clusterGuid + '.isAllowed.apply', _.noop);

      var modalObj = manageUsersService.show(constants.clusterGuid, constants.organizationGuid, constants.users);
      expect(modalObj.opened).toBeDefined();
    });
  });
})();
