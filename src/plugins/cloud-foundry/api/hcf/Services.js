/* DO NOT EDIT: This code has been generated by the cf-dotnet-sdk-builder */

(function () {
  'use strict';

  angular
    .module('cloud-foundry.api')
    .run(registerApi);

  registerApi.$inject = [
    '$http',
    'app.api.apiManager'
  ];

  function registerApi($http, apiManager) {
    apiManager.register('cloud-foundry.api.Services', new ServicesApi($http));
  }

  function ServicesApi($http) {
    this.$http = $http;
  }

  /* eslint-disable camelcase */
  angular.extend(ServicesApi.prototype, {

   /*
    * Delete a Particular Service
    * Deleting with async not set to true will return a 204 status code and an empty response body.
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/231/services/delete_a_particular_service.html
    */
    DeleteService: function (guid, params) {
      var config = {};
      config.params = params;
      config.url = '/api/cf/v2/services/' + guid + '';
      config.method = 'DELETE';
      return this.$http(config);
    },

   /*
    * List all Service Plans for the Service
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/231/services/list_all_service_plans_for_the_service.html
    */
    ListAllServicePlansForService: function (guid, params) {
      var config = {};
      config.params = params;
      config.url = '/api/cf/v2/services/' + guid + '/service_plans';
      config.method = 'GET';
      return this.$http(config);
    },

   /*
    * List all Services
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/231/services/list_all_services.html
    */
    ListAllServices: function (params) {
      var config = {};
      config.params = params;
      config.url = '/api/cf/v2/services';
      config.method = 'GET';
      return this.$http(config);
    },

   /*
    * Retrieve a Particular Service
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/231/services/retrieve_a_particular_service.html
    */
    RetrieveService: function (guid, params) {
      var config = {};
      config.params = params;
      config.url = '/api/cf/v2/services/' + guid + '';
      config.method = 'GET';
      return this.$http(config);
    }

  });
  /* eslint-enable camelcase */

})();