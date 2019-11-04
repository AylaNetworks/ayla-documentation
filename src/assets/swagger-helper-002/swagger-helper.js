/*
var serviceUrls = new Array();
serviceUrls[0] = new Array(); //china-dev
serviceUrls[0]['application'] = "https://application.ayla.com.cn";
serviceUrls[0]['datastream'] = "https://stream.ayla.com.cn";
serviceUrls[0]['device'] = "https://ads-dev.ayla.com.cn";
serviceUrls[0]['factory-proxy'] = "https://api-dev.ayla.com.cn";
serviceUrls[0]['image'] = "https://ais.ayla.com.cn";
serviceUrls[0]['log'] = "https://log.ayla.com.cn";
serviceUrls[0]['notification'] = "https://ans.ayla.com.cn";
serviceUrls[0]['rules'] = "https://rulesservice-dev.ayla.com.cn";
serviceUrls[0]['user'] = "https://user-dev.ayla.com.cn";
serviceUrls[0]['zigbee'] = "https://zigbee.ayla.com.cn";
serviceUrls[1] = new Array(); // china-field
serviceUrls[1]['application'] = "https://app-field.ayla.com.cn";
serviceUrls[1]['datastream'] = "https://stream-field.ayla.com.cn";
serviceUrls[1]['device'] = "https://ads-field.ayla.com.cn";
serviceUrls[1]['factory-proxy'] = "https://api-field.ayla.com.cn";
serviceUrls[1]['image'] = "https://ais-field.ayla.com.cn";
serviceUrls[1]['log'] = "https://log-field.ayla.com.cn";
serviceUrls[1]['notification'] = "https://ans-field.ayla.com.cn";
serviceUrls[1]['rules'] = "https://rulesservice-field.ayla.com.cn";
serviceUrls[1]['user'] = "https://user-field.ayla.com.cn";
serviceUrls[1]['zigbee'] = "https://zigbee-field.ayla.com.cn";
serviceUrls[2] = new Array(); // eu-field
serviceUrls[2]['application'] = "https://app-field-eu.aylanetworks.com";
serviceUrls[2]['datastream'] = "https://stream-field-eu.aylanetworks.com";
serviceUrls[2]['device'] = "https://ads-field-eu.aylanetworks.com";
serviceUrls[2]['factory-proxy'] = "https://api-field-eu.aylanetworks.com";
serviceUrls[2]['image'] = "https://ais-field-eu.aylanetworks.com";
serviceUrls[2]['log'] = "https://log-field-eu.aylanetworks.com";
serviceUrls[2]['notification'] = "https://ans-field-eu.aylanetworks.com";
serviceUrls[2]['rules'] = "https://rulesservice-field-eu.aylanetworks.com";
serviceUrls[2]['user'] = "https://user-field-eu.aylanetworks.com";
serviceUrls[2]['zigbee'] = "https://zigbee-field-eu.aylanetworks.com";
serviceUrls[3] = new Array(); // us-dev
serviceUrls[3]['application'] = "https://application.aylanetworks.com";
serviceUrls[3]['datastream'] = "https://stream.aylanetworks.com";
serviceUrls[3]['device'] = "https://ads-dev.aylanetworks.com";
serviceUrls[3]['factory-proxy'] = "https://api-dev.aylanetworks.com";
serviceUrls[3]['image'] = "https://ais.aylanetworks.com";
serviceUrls[3]['log'] = "https://log.aylanetworks.com";
serviceUrls[3]['notification'] = "https://ans.aylanetworks.com";
serviceUrls[3]['rules'] = "https://rulesservice-dev.aylanetworks.com";
serviceUrls[3]['user'] = "https://user-dev.aylanetworks.com";
serviceUrls[3]['zigbee'] = "https://zigbee.aylanetworks.com";
serviceUrls[4] = new Array(); // us-field
serviceUrls[4]['application'] = "https://app-field.aylanetworks.com";
serviceUrls[4]['datastream'] = "https://stream-field.aylanetworks.com";
serviceUrls[4]['device'] = "https://ads-field.aylanetworks.com";
serviceUrls[4]['factory-proxy'] = "https://api-field.aylanetworks.com";
serviceUrls[4]['image'] = "https://ais-field.aylanetworks.com";
serviceUrls[4]['log'] = "https://log-field.aylanetworks.com";
serviceUrls[4]['notification'] = "https://ans-field.aylanetworks.com";
serviceUrls[4]['rules'] = "https://rulesservice-field.aylanetworks.com";
serviceUrls[4]['user'] = "https://user-field.aylanetworks.com";
serviceUrls[4]['zigbee'] = "https://zigbee-field.aylanetworks.com";

$(function () {
  writeServiceUrls();
  console.log('here')
});

$(function () {
  $("select.service-region").change(function () {
    writeServiceUrls();
  });
});

function writeServiceUrls() {
  var region = $("select.service-region option:selected").val();
  $('#application-service-url').text(serviceUrls[region]['application']);
  $('#datastream-service-url').text(serviceUrls[region]['datastream']);
  $('#device-service-url').text(serviceUrls[region]['device']);
  $('#factory-proxy-service-url').text(serviceUrls[region]['factory-proxy']);
  $('#image-service-url').text(serviceUrls[region]['image']);
  $('#log-service-url').text(serviceUrls[region]['log']);
  $('#notification-service-url').text(serviceUrls[region]['notification']);
  $('#rules-service-url').text(serviceUrls[region]['rules']);
  $('#user-service-url').text(serviceUrls[region]['user']);
  $('#zigbee-service-url').text(serviceUrls[region]['zigbee']);
  
  const options = $('div.operation-servers option:selected');
  observer.disconnect();
  $.each(options, function(key, option) {
    var service = $(option).data('service');
    $(option).val(serviceUrls[region][service]);
    $(option).html(serviceUrls[region][service]);
  });
  observer.observe(targetNode, config);
}

var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (mutation.type === 'attributes') {
      if(mutation.target.nodeName === 'OPTION') {
        if($(mutation.target).closest('div.operation-servers').length) {
          console.log(mutation.attributeName + ' = ' + $(mutation.target).prop(mutation.attributeName));
          const region = $("select.service-region option:selected").val();
          const service = getServiceString(mutation.target);
          //observer.disconnect();
          $(mutation.target).val(serviceUrls[region][service]);
          $(mutation.target).text(serviceUrls[region][service]);
          //observer.observe(targetNode, config);
        }
      }
    }
  });
});

function getServiceString(option) {
  var service = $(option).data('service');
  if(!service) {
    service = $(option).val().substring(8);
    $(option).data('service', service);
  }
  return service;
}

var config = { 
  attributeFilter: ["value"],
  subtree: true
}; 

var targetNode = document.body;
observer.observe(targetNode, config);
*/