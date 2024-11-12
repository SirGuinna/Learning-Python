// ICONES PERSONALIZADOS--------------------------------------------------------------------------------------------------------------
var escolaIcon = {
    url: 'static/escola-icon.png',
    scaledSize: new google.maps.Size(20, 20),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(20, 20)
};

var prefeituraIcon = {
    url: 'static/prefeitura-icon.png',
    scaledSize: new google.maps.Size(25, 25),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(20, 20)
};

var onibusIcon = {
    url: 'static/onibus-icon.png',
    scaledSize: new google.maps.Size(20, 20),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(20, 20)
};

var hospitalIcon = {
    url: 'static/hospital-icon.png',
    scaledSize: new google.maps.Size(20, 20),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(20, 20)
};

var policiaIcon = {
    url: 'static/policia-icon.png',
    scaledSize: new google.maps.Size(25, 25),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(20, 20)
};

var correiosIcon = {
    url: 'static/correios-icon.png',
    scaledSize: new google.maps.Size(22, 22),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(20, 20)
};

var bombeiroIcon = {
    url: 'static/bombeiro-icon.png',
    scaledSize: new google.maps.Size(32, 32),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(20, 20)
};

var parqueIcon = {
    url: 'static/parque-icon.png',
    scaledSize: new google.maps.Size(25, 25),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(20, 20)
};

var feiraIcon = {
    url: 'static/feira-icon.png',
    scaledSize: new google.maps.Size(25, 25),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(20, 20)
};
// FIM DOS ICONES PERSONALIZADOS------------------------------------------------------------------------------------------------------

// Lista de locais - PONTOS DE INTERESSE
var locations = [
    { name: "Cadeia Pública de Boa Vista", type: "poi", icon: policiaIcon, position: {lat: 2.8042, lng: -60.6834} },
    { name: "Universidade Federal de Roraima", type: "poi", icon: escolaIcon, position: {lat: 2.8332, lng: -60.6946} },
    { name: "Superintendência da PRF de Roraima", type: "poi", icon: policiaIcon, position: {lat: 2.8152, lng: -60.6810} },
    { name: "Teatro Municipal de Boa Vista", type: "poi", icon: prefeituraIcon, position: {lat: 2.8158, lng: -60.6829} },
    { name: "Feira do Produtor Rural", type: "poi", icon: feiraIcon, position: {lat: 2.8131, lng: -60.6913} },
    { name: "Unidade Básica de Saúde São Vicente", type: "poi", icon: hospitalIcon, position: {lat: 2.8093, lng: -60.6791} },
    { name: "Escola Estadual São Vicente de Paula", type: "poi", icon: escolaIcon, position: {lat: 2.8106, lng: -60.6807} },
    { name: "SAMU de Boa Vista", type: "poi", icon: hospitalIcon, position: {lat: 2.8097, lng: -60.6851} },
    { name: "Correios - CDD Mecejana", type: "poi", icon: correiosIcon, position: {lat: 2.8045, lng: -60.6846} },
    { name: "Escola Municipal Newton Tavares", type: "poi", icon: escolaIcon, position: {lat: 2.8068, lng: -60.6738} },
    { name: "BOPE / PMRR", type: "poi", icon: policiaIcon, position: {lat: 2.8066, lng: -60.6724} },
    { name: "Corpo de Bombeiros Militar de Roraima", type: "poi", icon: bombeiroIcon, position: {lat: 2.8067, lng: -60.6706} },
    { name: "Escola Estadual Barão de Parima", type: "poi", icon: escolaIcon, position: {lat: 2.8075, lng: -60.6719} },
    { name: "Parque do Rio Branco", type: "poi", icon: parqueIcon, position: {lat: 2.8125, lng: -60.6699} },
    { name: "Defensoria Pública do Estado de Roraima", type: "poi", icon: prefeituraIcon, position: {lat: 2.8142, lng: -60.6712} },
    { name: "Escola Estadual Euclides da Cunha", type: "poi", icon: escolaIcon, position: {lat: 2.8161, lng: -60.6688} },
    { name: "Terminal de Ônibus Urbano - Centro", type: "poi", icon: onibusIcon, position: {lat: 2.8145, lng: -60.6696} },
    { name: "Forúm Trabalhista de Boa Vista", type: "poi", icon: prefeituraIcon, position: {lat: 2.8169, lng: -60.6728} },
    { name: "CRAS São Francisco", type: "poi", icon: prefeituraIcon, position: {lat: 2.8170, lng: -60.6666} },
    { name: "Escola Estadual Lobo Dalmada", type: "poi", icon: escolaIcon, position: {lat: 2.8201, lng: -60.6699} },
    { name: "Assembleia Legislativa do Estado de Roraima", type: "poi", icon: prefeituraIcon, position: {lat: 2.8216, lng: -60.6715} },
    { name: "Correios - AC Boa Vista", type: "poi", icon: correiosIcon, position: {lat: 2.8211, lng: -60.6708} },
    { name: "Escola Estadual Oswaldo Cruz", type: "poi", icon: escolaIcon, position: {lat: 2.8222, lng: -60.6670} },
    { name: "Feira Municipal São Vicente", type: "poi", icon: feiraIcon, position: {lat: 2.8088, lng: -60.6791} },

    // Lista de Rotas - VEICULOS
    { name: "PM 01", type: "vehicle", icon: {url: 'static/carropolicia-icon.png', scaledSize: new google.maps.Size(20, 20)}, 
        movingIcon: {url: 'static/carropolicia-icon.png', scaledSize: new google.maps.Size(20, 20)}, 
        path: [
            {lat: 2.8126, lng: -60.6705},
        ], 
        speed: 1000 
    },

    { name: "PM 02", type: "vehicle", icon: {url: 'static/carropolicia-icon.png', scaledSize: new google.maps.Size(20, 20)}, 
        movingIcon: {url: 'static/carropolicia-icon.png', scaledSize: new google.maps.Size(20, 20)}, 
        path: [
            {lat: 2.8067, lng: -60.6711},  
            {lat: 2.8068, lng: -60.6711},
            {lat: 2.8068, lng: -60.6712},
            {lat: 2.8069, lng: -60.6713},
            {lat: 2.8070, lng: -60.6713}, 
            {lat: 2.8071, lng: -60.6712},
            {lat: 2.8072, lng: -60.6712},
            {lat: 2.8073, lng: -60.6712},
            {lat: 2.8074, lng: -60.6712},
            {lat: 2.8075, lng: -60.6712},
            {lat: 2.8076, lng: -60.6712},
            {lat: 2.8077, lng: -60.6711},
            {lat: 2.8079, lng: -60.6711},
            {lat: 2.8079, lng: -60.6712},
            {lat: 2.8080, lng: -60.6713},
            {lat: 2.8080, lng: -60.6715},
            {lat: 2.8080, lng: -60.6716},
            {lat: 2.8081, lng: -60.6718},
            {lat: 2.8081, lng: -60.6720},
            {lat: 2.8081, lng: -60.6721},
            {lat: 2.8082, lng: -60.6723},
            {lat: 2.8082, lng: -60.6724},
            {lat: 2.8082, lng: -60.6725},
            {lat: 2.8083, lng: -60.6726},
            {lat: 2.8084, lng: -60.6726},
            {lat: 2.8084, lng: -60.6727},
            {lat: 2.8085, lng: -60.6728},
            {lat: 2.8086, lng: -60.6729},
            {lat: 2.8086, lng: -60.6730},
            {lat: 2.8086, lng: -60.6730},
            {lat: 2.8087, lng: -60.6730},
            {lat: 2.8088, lng: -60.6729},
            {lat: 2.8088, lng: -60.6728},
            {lat: 2.8089, lng: -60.6728},
            {lat: 2.8090, lng: -60.6727},
            {lat: 2.8091, lng: -60.6727},
            {lat: 2.8091, lng: -60.6726},
            {lat: 2.8092, lng: -60.6726},
            {lat: 2.8092, lng: -60.6726},
            {lat: 2.8093, lng: -60.6725},
            {lat: 2.8095, lng: -60.6723},
            {lat: 2.8096, lng: -60.6723},
            {lat: 2.8096, lng: -60.6722},
            {lat: 2.8097, lng: -60.6721},
            {lat: 2.8098, lng: -60.6721},
            {lat: 2.8099, lng: -60.6720},
            {lat: 2.8100, lng: -60.6720},
            {lat: 2.8100, lng: -60.6720},
            {lat: 2.8100, lng: -60.6720},
            {lat: 2.8101, lng: -60.6720},
            {lat: 2.8101, lng: -60.6721},
            {lat: 2.8102, lng: -60.6721},
            {lat: 2.8102, lng: -60.6722},
            {lat: 2.8103, lng: -60.6723},
            {lat: 2.8103, lng: -60.6724},
            {lat: 2.8102, lng: -60.6725},
            {lat: 2.8101, lng: -60.6725},
            {lat: 2.8102, lng: -60.6721},
            {lat: 2.8100, lng: -60.6726},
            {lat: 2.8100, lng: -60.6726},
            {lat: 2.8099, lng: -60.6727},
            {lat: 2.8099, lng: -60.6728},
            {lat: 2.8098, lng: -60.6728},
            {lat: 2.8097, lng: -60.6729},
            {lat: 2.8096, lng: -60.6730},
            {lat: 2.8095, lng: -60.6731},
            {lat: 2.8095, lng: -60.6731},
            {lat: 2.8094, lng: -60.6732},
            {lat: 2.8093, lng: -60.6733},
            {lat: 2.8093, lng: -60.6733},
            {lat: 2.8092, lng: -60.6734},
            {lat: 2.8092, lng: -60.6734},
            {lat: 2.8091, lng: -60.6735},
            {lat: 2.8091, lng: -60.6735},
            {lat: 2.8091, lng: -60.6735},
            {lat: 2.8091, lng: -60.6735},
            {lat: 2.8090, lng: -60.6734},
            {lat: 2.8089, lng: -60.6734},
            {lat: 2.8089, lng: -60.6733},
            {lat: 2.8088, lng: -60.6732},
            {lat: 2.8087, lng: -60.6732},
            {lat: 2.8087, lng: -60.6731},
            {lat: 2.8086, lng: -60.6731},
            {lat: 2.8086, lng: -60.6731},
            {lat: 2.8086, lng: -60.6730},
            {lat: 2.8085, lng: -60.6729},
            {lat: 2.8085, lng: -60.6728},
            {lat: 2.8084, lng: -60.6727},
            {lat: 2.8083, lng: -60.6726},
            {lat: 2.8082, lng: -60.6725},
            {lat: 2.8082, lng: -60.6724},
            {lat: 2.8081, lng: -60.6724},
            {lat: 2.8080, lng: -60.6725},
            {lat: 2.8079, lng: -60.6725},
            {lat: 2.8078, lng: -60.6725},
            {lat: 2.8077, lng: -60.6725},
            {lat: 2.8075, lng: -60.6726},
            {lat: 2.8074, lng: -60.6726},
            {lat: 2.8073, lng: -60.6726},
            {lat: 2.8072, lng: -60.6726},
            {lat: 2.8070, lng: -60.6726},
            {lat: 2.8069, lng: -60.6727},
            {lat: 2.8069, lng: -60.6727},
            {lat: 2.8069, lng: -60.6727},
            {lat: 2.8069, lng: -60.6727},
            {lat: 2.8068, lng: -60.6727},
            {lat: 2.8068, lng: -60.6725},
            {lat: 2.8068, lng: -60.6724},
            {lat: 2.8068, lng: -60.6722},
            {lat: 2.8067, lng: -60.6721},
            {lat: 2.8067, lng: -60.6719},
            {lat: 2.8067, lng: -60.6718},
            {lat: 2.8067, lng: -60.6716},
            {lat: 2.8066, lng: -60.6715},
            {lat: 2.8066, lng: -60.6715}, 
            {lat: 2.8067, lng: -60.6713},
            {lat: 2.8067, lng: -60.6713},
            {lat: 2.8068, lng: -60.6713},
            {lat: 2.8068, lng: -60.6713},
            {lat: 2.8068, lng: -60.6711},
            {lat: 2.8068, lng: -60.6711},
        ], 
        speed: 1500 
    },

    { name: "PM 03", type: "vehicle", icon: {url: 'static/carropolicia-icon.png', scaledSize: new google.maps.Size(20, 20)}, 
        movingIcon: {url: 'static/carropolicia-icon.png', scaledSize: new google.maps.Size(20, 20)}, 
        path: [
            {lat: 2.8151, lng: -60.6811},
        ], 
        speed: 1000 
    },

    { name: "PM 04", type: "vehicle", icon: {url: 'static/carropolicia-icon.png', scaledSize: new google.maps.Size(20, 20)}, 
        movingIcon: {url: 'static/carropolicia-icon.png', scaledSize: new google.maps.Size(20, 20)}, 
        path: [
            {lat: 2.8037, lng: -60.6832},
            {lat: 2.8037, lng: -60.6832},
            {lat: 2.8037, lng: -60.6832},
            {lat: 2.8037, lng: -60.6832},
            {lat: 2.8037, lng: -60.6832},
            {lat: 2.8037, lng: -60.6832},
            {lat: 2.8037, lng: -60.6832},
            {lat: 2.8036, lng: -60.6829},
            {lat: 2.8038, lng: -60.6827},
            {lat: 2.8040, lng: -60.6826},
            {lat: 2.8040, lng: -60.6826},
            {lat: 2.8042, lng: -60.6824},
            {lat: 2.8044, lng: -60.6822},
            {lat: 2.8046, lng: -60.6821},
            {lat: 2.8047, lng: -60.6819},
            {lat: 2.8049, lng: -60.6818},
            {lat: 2.8051, lng: -60.6816},
            {lat: 2.8053, lng: -60.6814},
            {lat: 2.8055, lng: -60.6812},
            {lat: 2.8057, lng: -60.6811},
            {lat: 2.8058, lng: -60.6809},
            {lat: 2.8060, lng: -60.6808},
            {lat: 2.8062, lng: -60.6806},
            {lat: 2.8064, lng: -60.6805},
            {lat: 2.8066, lng: -60.6803},
            {lat: 2.8068, lng: -60.6800},
            {lat: 2.8070, lng: -60.6800},
            {lat: 2.8071, lng: -60.6802},
            {lat: 2.8073, lng: -60.6804},
            {lat: 2.8075, lng: -60.6806},
            {lat: 2.8075, lng: -60.6805},
            {lat: 2.8077, lng: -60.6808},
            {lat: 2.8079, lng: -60.6810},
            {lat: 2.8080, lng: -60.6813},
            {lat: 2.8082, lng: -60.6815},
            {lat: 2.8084, lng: -60.6817},
            {lat: 2.8086, lng: -60.6820},
            {lat: 2.8088, lng: -60.6821},
            {lat: 2.8091, lng: -60.6825},
            {lat: 2.8093, lng: -60.6826},
            {lat: 2.8093, lng: -60.6826}, 
            {lat: 2.8095, lng: -60.6830},
            {lat: 2.8098, lng: -60.6833},
            {lat: 2.8101, lng: -60.6835},
            {lat: 2.8103, lng: -60.6838},
            {lat: 2.8105, lng: -60.6840},
            {lat: 2.8107, lng: -60.6843},
            {lat: 2.8107, lng: -60.6843},
            {lat: 2.8107, lng: -60.6845},
            {lat: 2.8106, lng: -60.6846},
            {lat: 2.8104, lng: -60.6847}, 
            {lat: 2.8103, lng: -60.6848}, 
            {lat: 2.8102, lng: -60.6849},
            {lat: 2.8101, lng: -60.6850},
            {lat: 2.8100, lng: -60.6851},
            {lat: 2.8099, lng: -60.6852},
            {lat: 2.8098, lng: -60.6851},
            {lat: 2.8098, lng: -60.6851},
            {lat: 2.8098, lng: -60.6851},
            {lat: 2.8098, lng: -60.6851},
            {lat: 2.8097, lng: -60.6852},
            {lat: 2.8097, lng: -60.6853},
            {lat: 2.8098, lng: -60.6853},
            {lat: 2.8097, lng: -60.6854},
            {lat: 2.8095, lng: -60.6855},
            {lat: 2.8094, lng: -60.6856},
            {lat: 2.8094, lng: -60.6856}, 
            {lat: 2.8093, lng: -60.6857},
            {lat: 2.8092, lng: -60.6859},
            {lat: 2.8090, lng: -60.6860},
            {lat: 2.8089, lng: -60.6861},
            {lat: 2.8087, lng: -60.6863},
            {lat: 2.8086, lng: -60.6864},
            {lat: 2.8085, lng: -60.6865},
            {lat: 2.8083, lng: -60.6866},
            {lat: 2.8082, lng: -60.6867},
            {lat: 2.8081, lng: -60.6868},
            {lat: 2.8079, lng: -60.6869},
            {lat: 2.8078, lng: -60.6871},
            {lat: 2.8076, lng: -60.6872},
            {lat: 2.8075, lng: -60.6873},
            {lat: 2.8074, lng: -60.6875},
            {lat: 2.8072, lng: -60.6876},
            {lat: 2.8070, lng: -60.6878},
            {lat: 2.8068, lng: -60.6879},
            {lat: 2.8067, lng: -60.6880},
            {lat: 2.8065, lng: -60.6882},
            {lat: 2.8063, lng: -60.6884},
            {lat: 2.8061, lng: -60.6886},
            {lat: 2.8068, lng: -60.6888},
            {lat: 2.8058, lng: -60.6888},
            {lat: 2.8058, lng: -60.6879},
            {lat: 2.8058, lng: -60.6890},
            {lat: 2.8060, lng: -60.6893},
            {lat: 2.8062, lng: -60.6895},
            {lat: 2.8065, lng: -60.6896},
            {lat: 2.8068, lng: -60.6897},
            {lat: 2.8069, lng: -60.6899},
            {lat: 2.8070, lng: -60.6903},
            {lat: 2.8072, lng: -60.6906},
            {lat: 2.8075, lng: -60.6908},
            {lat: 2.8077, lng: -60.6909},
            {lat: 2.8080, lng: -60.6910},
            {lat: 2.8083, lng: -60.6910},
            {lat: 2.8082, lng: -60.6910},
            {lat: 2.8085, lng: -60.6911},
            {lat: 2.8087, lng: -60.6911},
            {lat: 2.8089, lng: -60.6912},
            {lat: 2.8092, lng: -60.6912},
            {lat: 2.8094, lng: -60.6913},
            {lat: 2.8097, lng: -60.6913},
            {lat: 2.8099, lng: -60.6914},
            {lat: 2.8101, lng: -60.6914},
            {lat: 2.8102, lng: -60.6914},
            {lat: 2.8103, lng: -60.6915},
            {lat: 2.8105, lng: -60.6915},
            {lat: 2.8107, lng: -60.6916},
            {lat: 2.8110, lng: -60.6916},
            {lat: 2.8112, lng: -60.6916},
            {lat: 2.8114, lng: -60.6916},
            {lat: 2.8116, lng: -60.6917},
            {lat: 2.8118, lng: -60.6915},
            {lat: 2.8119, lng: -60.6914},
            {lat: 2.8120, lng: -60.6912},
            {lat: 2.8122, lng: -60.6911},
            {lat: 2.8123, lng: -60.6910},
            {lat: 2.8125, lng: -60.6908},
            {lat: 2.8125, lng: -60.6908},
            {lat: 2.8125, lng: -60.6908},
            {lat: 2.8127, lng: -60.6907},
            {lat: 2.8128, lng: -60.6906},
            {lat: 2.8129, lng: -60.6905},
            {lat: 2.8130, lng: -60.6904},
            {lat: 2.8131, lng: -60.6903},
            {lat: 2.8132, lng: -60.6902},
            {lat: 2.8133, lng: -60.6901},
            {lat: 2.8131, lng: -60.6900},
            {lat: 2.8130, lng: -60.6899},
            {lat: 2.8129, lng: -60.6897},
            {lat: 2.8128, lng: -60.6895},
            {lat: 2.8127, lng: -60.6894},
            {lat: 2.8125, lng: -60.6893},
            {lat: 2.8124, lng: -60.6891},
            {lat: 2.8122, lng: -60.6890},
            {lat: 2.8121, lng: -60.6888},
            {lat: 2.8120, lng: -60.6887},
            {lat: 2.8119, lng: -60.6885},
            {lat: 2.8120, lng: -60.6884},
            {lat: 2.8122, lng: -60.6883},
            {lat: 2.8123, lng: -60.6882},
            {lat: 2.8124, lng: -60.6881},
            {lat: 2.8126, lng: -60.6880},
            {lat: 2.8127, lng: -60.6879},
            {lat: 2.8128, lng: -60.6877},
            {lat: 2.8129, lng: -60.6877},
            {lat: 2.8130, lng: -60.6876},
            {lat: 2.8132, lng: -60.6875},
            {lat: 2.8134, lng: -60.6873},
            {lat: 2.8135, lng: -60.6872},
            {lat: 2.8138, lng: -60.6869},
            {lat: 2.8140, lng: -60.6868},
            {lat: 2.8141, lng: -60.6866},
            {lat: 2.8142, lng: -60.6865},
            {lat: 2.8144, lng: -60.6864},
            {lat: 2.8145, lng: -60.6863},
            {lat: 2.8145, lng: -60.6861},
            {lat: 2.8143, lng: -60.6860},
            {lat: 2.8142, lng: -60.6858},
            {lat: 2.8141, lng: -60.6857},
            {lat: 2.8139, lng: -60.6855},
            {lat: 2.8138, lng: -60.6853},
            {lat: 2.8136, lng: -60.6851},
            {lat: 2.8135, lng: -60.6849},
            {lat: 2.8133, lng: -60.6848},
            {lat: 2.8132, lng: -60.6847},
            {lat: 2.8130, lng: -60.6844},
            {lat: 2.8128, lng: -60.6843},
            {lat: 2.8129, lng: -60.6841},
            {lat: 2.8129, lng: -60.6840},
            {lat: 2.8130, lng: -60.6839},
            {lat: 2.8131, lng: -60.6837},
            {lat: 2.8132, lng: -60.6836},
            {lat: 2.8134, lng: -60.6834},
            {lat: 2.8134, lng: -60.6833},
            {lat: 2.8136, lng: -60.6831},
            {lat: 2.8136, lng: -60.6830},
            {lat: 2.8137, lng: -60.6828},
            {lat: 2.8139, lng: -60.6826},
            {lat: 2.8139, lng: -60.6825},
            {lat: 2.8138, lng: -60.6823},
            {lat: 2.8136, lng: -60.6822},
            {lat: 2.8133, lng: -60.6820},
            {lat: 2.8131, lng: -60.6818},
            {lat: 2.8129, lng: -60.6816},
            {lat: 2.8126, lng: -60.6814},
            {lat: 2.8124, lng: -60.6813},
            {lat: 2.8122, lng: -60.6811},
            {lat: 2.8119, lng: -60.6809},
            {lat: 2.8117, lng: -60.6808},
            {lat: 2.8116, lng: -60.6806},
            {lat: 2.8114, lng: -60.6805},
            {lat: 2.8112, lng: -60.6803},
            {lat: 2.8110, lng: -60.6802},
            {lat: 2.8108, lng: -60.6800},
            {lat: 2.8106, lng: -60.6798},
            {lat: 2.8104, lng: -60.6797}, 
            {lat: 2.8101, lng: -60.6795},
            {lat: 2.8099, lng: -60.6794},
            {lat: 2.8096, lng: -60.6796},
            {lat: 2.8094, lng: -60.6798},
            {lat: 2.8092, lng: -60.6799},
            {lat: 2.8090, lng: -60.6799},
            {lat: 2.8089, lng: -60.6797},
            {lat: 2.8086, lng: -60.6795},
            {lat: 2.8084, lng: -60.6792},
            {lat: 2.8082, lng: -60.6790},
            {lat: 2.8080, lng: -60.6792},
            {lat: 2.8078, lng: -60.6794},
            {lat: 2.8075, lng: -60.6796},
            {lat: 2.8072, lng: -60.6798},
            {lat: 2.8070, lng: -60.6801},
            {lat: 2.8068, lng: -60.6802},
            {lat: 2.8065, lng: -60.6805},
            {lat: 2.8063, lng: -60.6807},
            {lat: 2.8061, lng: -60.6809},
            {lat: 2.8059, lng: -60.6810},
            {lat: 2.8057, lng: -60.6811},
            {lat: 2.8056, lng: -60.6813},
            {lat: 2.8055, lng: -60.6814},
            {lat: 2.8053, lng: -60.6815},
            {lat: 2.8051, lng: -60.6817},
            {lat: 2.8050, lng: -60.6819},
            {lat: 2.8048, lng: -60.6820},
            {lat: 2.8046, lng: -60.6822},
            {lat: 2.8044, lng: -60.6823},
            {lat: 2.8043, lng: -60.6825},
            {lat: 2.8041, lng: -60.6826},
            {lat: 2.8038, lng: -60.6828},
            {lat: 2.8038, lng: -60.6830},
        ], 
        speed: 1700 
    }
];


// RECURSOS DO MAPA ------------------------------------------------------------------------------------------------------------------
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: {lat: 2.8223, lng: -60.6728},  // Roraima - Boa Vista  -  Ponto onde o Mapa vai startar
    });    

    // Adicionar marcadores no mapa
    locations.forEach(function(location) {
        var marker = new google.maps.Marker({
            position: location.position,
            map: map,
            title: location.name,
            icon: location.icon
        });

        // Verificar se o marcador é de um veículo para adicionar animação de movimento
        if (location.type === "vehicle") {
            moveVehicle(map, marker, location.path, location.movingIcon, location.speed);
        }
    });

    // Função para mover veículo
    function moveVehicle(map, marker, path, icon, speed) {
        let index = 0;
        function animateMarker() {
            marker.setPosition(path[index]);
            marker.setIcon(icon);
            index++;
            if (index >= path.length) {
                index = 0;
            }
            setTimeout(animateMarker, speed);
        }
        animateMarker();
    }

// FIM DOS RECURSOS DO MAPA --------------------------------------------------------------------------------------------------------------

    // POPUP DA LISTA DE VIATURAS -----------------------------------------------------------------------------------------

    // Função para exibir o popup com informações do veículo
function showVehicleInfo(vehicle) {
    // Criar ou selecionar o elemento do popup
    let popup = document.getElementById('vehicle-popup');
    if (!popup) {
        popup = document.createElement('div');
        popup.id = 'vehicle-popup';
        popup.style.position = 'fixed';
        popup.style.bottom = '10px';
        popup.style.right = '10px';
        popup.style.backgroundColor = '#fff';
        popup.style.border = '1px solid #ccc';
        popup.style.padding = '10px';
        popup.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        popup.style.zIndex = '1000';
        document.body.appendChild(popup);
    }

    // Adiciona as informações do veículo ao popup
    popup.innerHTML = `
        <h4>${vehicle.name}</h4>
        <p><strong>Velocidade:</strong> ${vehicle.speed} km/h</p>
        <p><strong>Consumo de Combustível:</strong> ${vehicle.fuelConsumption} KM/L</p>
        <p><strong>Ar-Condicionado:</strong> ${vehicle.airConditioning ? 'Ligado' : 'Desligado'}</p>
        <button id="close-popup">Fechar</button>
    `;

    // Botão para fechar o popup
    document.getElementById('close-popup').addEventListener('click', function() {
        popup.style.display = 'none';
    });

    // Exibir o popup
    popup.style.display = 'block';
}

// Função para atualizar a lista de veículos e adicionar o evento de clique
function updateVehicleList(vehicles) {
    const vehicleList = document.getElementById('vehicles');
    vehicleList.innerHTML = ''; // Limpar a lista antes de atualizá-la

    vehicles.forEach(vehicle => {
        const li = document.createElement('li');
        
        const img = document.createElement('img');
        img.src = vehicle.inRoute ? 'static/emrota-icon.png' : 'static/parado-icon.png';
        img.width = 20;

        const name = document.createElement('span');
        name.textContent = vehicle.name;

        li.appendChild(img);
        li.appendChild(name);
        vehicleList.appendChild(li);

        // Adicionar evento de clique para exibir o popup com as informações do veículo
        li.addEventListener('click', function() {
            showVehicleInfo(vehicle);
        });
    });
}

// Dados simulados dos veículos
const vehiclesData = [
    { name: "PM 01", inRoute: false, speed: 00, fuelConsumption: 0.0, airConditioning: false },
    { name: "PM 02", inRoute: true, speed: 60, fuelConsumption: 9.8, airConditioning: false },
    { name: "PM 03", inRoute: false, speed: 00, fuelConsumption: 0.0, airConditioning: false },
    { name: "PM 04", inRoute: true, speed: 47, fuelConsumption: 10.2, airConditioning: true }
];

// Chama a função para atualizar a lista
updateVehicleList(vehiclesData);


    // FIM DO POPUP DA LISTA DE VIATURAS ----------------------------------------------------------------------------------

    // Adicionar funcionalidade à barra de pesquisa
    const searchBar = document.getElementById('search-bar');
    const suggestions = document.getElementById('suggestions');

    searchBar.addEventListener('input', function() {
        const inputText = searchBar.value.toLowerCase();
        suggestions.innerHTML = ''; // Limpar sugestões

        if (inputText) {
            // Filtrar locais com base na entrada
            const filteredLocations = locations.filter(location => 
                location.name.toLowerCase().includes(inputText)
            );

        // Mostrar sugestões
        filteredLocations.forEach(location => {
            const li = document.createElement('li');
            li.textContent = location.name;
            li.addEventListener('click', () => {
                if (location.type === "vehicle") {
                    map.setCenter(location.path[0]); // Centralizar na posição atual do veículo
                } else {
                    map.setCenter(location.position); // Centralizar na posição do ponto de interesse
                }
                map.setZoom(17);
                searchBar.value = location.name;
                suggestions.innerHTML = ''; // Limpar sugestões após a seleção
                });
                suggestions.appendChild(li);
            });
        } else {
            // Se a barra de pesquisa estiver vazia, esvazia a lista de sugestões
            suggestions.innerHTML = '';
        }
    });
}

// CODIGO DA LISTA DE VIATURAS
function updateVehicleList(vehicles) {
    const vehicleList = document.getElementById('vehicles');
    vehicleList.innerHTML = ''; // Limpar a lista antes de atualizá-la

    vehicles.forEach(vehicle => {
        const li = document.createElement('li');
        
        const img = document.createElement('img');
        img.src = vehicle.inRoute ? 'static/emrota-icon.png' : 'static/parado-icon.png';
        img.width = 20;

        const name = document.createElement('span');
        name.textContent = vehicle.name;

        li.appendChild(img);
        li.appendChild(name);
        vehicleList.appendChild(li);
    });
}

const vehiclesData = [
    { name: "PM 01", inRoute: false },
    { name: "PM 02", inRoute: true },
    { name: "PM 03", inRoute: false },
    { name: "PM 04", inRoute: true }
];

// Chama a função para atualizar a lista
updateVehicleList(vehiclesData);

window.onload = initMap;