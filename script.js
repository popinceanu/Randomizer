
function pclass(){

var pc = new Array;
pclass[0]="ASSAULT";
pclass[1]="ENGINEER";
pclass[2]="SUPPORT";
pclass[3]="RECON";

pcrand = Math.floor(Math.random()*4);
document.getElementById("cdisplay") .value=pclass[pcrand];

 if (pcrand == 0){
 document.getElementById("assaultprimary").style.display = 'block';
 document.getElementById("engineerprimary").style.display = 'none';
 document.getElementById("supportprimary").style.display = 'none';
 document.getElementById("reconprimary").style.display = 'none';
 }

 if (pcrand == 1){
 document.getElementById("assaultprimary").style.display = 'none';
 document.getElementById("engineerprimary").style.display = 'block';
 document.getElementById("supportprimary").style.display = 'none';
 document.getElementById("reconprimary").style.display = 'none';
 }

 if (pcrand == 2){
 document.getElementById("assaultprimary").style.display = 'none';
 document.getElementById("engineerprimary").style.display = 'none';
 document.getElementById("supportprimary").style.display = 'block';
 document.getElementById("reconprimary").style.display = 'none';
 }

 if (pcrand == 3){
 document.getElementById("assaultprimary").style.display = 'none';
 document.getElementById("engineerprimary").style.display = 'none';
 document.getElementById("supportprimary").style.display = 'none';
 document.getElementById("reconprimary").style.display = 'block';
 }
}

function aprimary(){

var ap = new Array;
aprimary[0]="A-91";
aprimary[1]="ACE 21 CQB";
aprimary[2]="ACE 52 CQB";
aprimary[3]="ACW-R";
aprimary[4]="AK 5C";
aprimary[5]="AKU-12";
aprimary[6]="G36C";
aprimary[7]="M4";
aprimary[8]="MTAR-21";
aprimary[9]="SG553";
aprimary[10]="TYPE-95B-1";
aprimary[11]="ACE 53 SV";
aprimary[12]="M39 EMR";
aprimary[13]="MK11 MOD 0";
aprimary[14]="PHANTOM";
aprimary[15]="QBU-88";
aprimary[16]="RFB";
aprimary[17]="SCAR-H SV";
aprimary[18]="870 MCS";
aprimary[19]="DAO-12";
aprimary[20]="DBV-12";
aprimary[21]="HAWK 12G";
aprimary[22]="M1014";
aprimary[23]="QBS-09";
aprimary[24]="SAIGA 12K";
aprimary[25]="SPAS-12";
aprimary[26]="UTS 15";
aprimary[27]="ACE 23";
aprimary[28]="AEK-971";
aprimary[29]="AK-12";
aprimary[30]="AR160";
aprimary[31]="AUG A3";
aprimary[32]="BULLDOG";
aprimary[33]="CZ-805";
aprimary[34]="F2000";
aprimary[35]="FAMAS";
aprimary[36]="L85A2";
aprimary[37]="M16A4";
aprimary[38]="M416";
aprimary[39]="QBZ-95-1";
aprimary[40]="SAR-21";
aprimary[41]="SCAR-H";

aprand = Math.floor(Math.random()*42);
document.getElementById("assaultprimarydisplay") .value=aprimary[aprand];
document.getElementById("assaultgadget").style.display = 'block';
document.getElementById("engineergadget").style.display = 'none';
document.getElementById("supportgadget").style.display = 'none';
document.getElementById("recongadget").style.display = 'none';
}

function eprimary(){

var ep = new Array;
eprimary[0]="A-91";
eprimary[1]="ACE 21 CQB";
eprimary[2]="ACE 52 CQB";
eprimary[3]="ACW-R";
eprimary[4]="AK 5C";
eprimary[5]="AKU-12";
eprimary[6]="G36C";
eprimary[7]="M4";
eprimary[8]="MTAR-21";
eprimary[9]="SG553";
eprimary[10]="TYPE-95B-1";
eprimary[11]="ACE 53 SV";
eprimary[12]="M39 EMR";
eprimary[13]="MK11 MOD 0";
eprimary[14]="PHANTOM";
eprimary[15]="QBU-88";
eprimary[16]="RFB";
eprimary[17]="SCAR-H SV";
eprimary[18]="870 MCS";
eprimary[19]="DAO-12";
eprimary[20]="DBV-12";
eprimary[21]="HAWK 12G";
eprimary[22]="M1014";
eprimary[23]="QBS-09";
eprimary[24]="SAIGA 12K";
eprimary[25]="SPAS-12";
eprimary[26]="UTS 15";
eprimary[27]="AS VAL";
eprimary[28]="CBJ-MS";
eprimary[29]="CZ-3A1";
eprimary[30]="JS2";
eprimary[31]="MP7";
eprimary[32]="MPX";
eprimary[33]="MX4";
eprimary[34]="P90";
eprimary[35]="PDW-R";
eprimary[36]="PP-2000";
eprimary[37]="SR-2";
eprimary[38]="UMP-45";
eprimary[39]="UMP-9";

eprand = Math.floor(Math.random()*40);
document.getElementById("engineerprimarydisplay") .value=eprimary[eprand];
document.getElementById("assaultgadget").style.display = 'none';
document.getElementById("engineergadget").style.display = 'block';
document.getElementById("supportgadget").style.display = 'none';
document.getElementById("recongadget").style.display = 'none';
}

function sprimary(){

var sp = new Array;
sprimary[0]="A-91";
sprimary[1]="ACE 21 CQB";
sprimary[2]="ACE 52 CQB";
sprimary[3]="ACW-R";
sprimary[4]="AK 5C";
sprimary[5]="AKU-12";
sprimary[6]="G36C";
sprimary[7]="M4";
sprimary[8]="MTAR-21";
sprimary[9]="SG553";
sprimary[10]="TYPE-95B-1";
sprimary[11]="ACE 53 SV";
sprimary[12]="M39 EMR";
sprimary[13]="MK11 MOD 0";
sprimary[14]="PHANTOM";
sprimary[15]="QBU-88";
sprimary[16]="RFB";
sprimary[17]="SCAR-H SV";
sprimary[18]="870 MCS";
sprimary[19]="DAO-12";
sprimary[20]="DBV-12";
sprimary[21]="HAWK 12G";
sprimary[22]="M1014";
sprimary[23]="QBS-09";
sprimary[24]="SAIGA 12K";
sprimary[25]="SPAS-12";
sprimary[26]="UTS 15";
sprimary[27]="AWS";
sprimary[28]="LSAT";
sprimary[29]="M240B";
sprimary[30]="M249";
sprimary[31]="M60-E4";
sprimary[32]="MG4";
sprimary[33]="PKP PECHENEG";
sprimary[34]="QBB-95-1";
sprimary[35]="RPK-12";
sprimary[36]="RPK-74M";
sprimary[37]="TYPE 88 LMG";
sprimary[38]="U-100 MK5";

sprand = Math.floor(Math.random()*39);
document.getElementById("supportprimarydisplay") .value=sprimary[sprand];
document.getElementById("assaultgadget").style.display = 'none';
document.getElementById("engineergadget").style.display = 'none';
document.getElementById("supportgadget").style.display = 'block';
document.getElementById("recongadget").style.display = 'none';
}

function rprimary(){

var rp = new Array;
rprimary[0]="A-91";
rprimary[1]="ACE 21 CQB";
rprimary[2]="ACE 52 CQB";
rprimary[3]="ACW-R";
rprimary[4]="AK 5C";
rprimary[5]="AKU-12";
rprimary[6]="G36C";
rprimary[7]="M4";
rprimary[8]="MTAR-21";
rprimary[9]="SG553";
rprimary[10]="TYPE-95B-1";
rprimary[11]="ACE 53 SV";
rprimary[12]="M39 EMR";
rprimary[13]="MK11 MOD 0";
rprimary[14]="PHANTOM";
rprimary[15]="QBU-88";
rprimary[16]="RFB";
rprimary[17]="SCAR-H SV";
rprimary[18]="870 MCS";
rprimary[19]="DAO-12";
rprimary[20]="DBV-12";
rprimary[21]="HAWK 12G";
rprimary[22]="M1014";
rprimary[23]="QBS-09";
rprimary[24]="SAIGA 12K";
rprimary[25]="SPAS-12";
rprimary[26]="UTS 15";
rprimary[27]="338-RECON";
rprimary[28]="CS-LR4";
rprimary[29]="CS5";
rprimary[30]="FY-JS";
rprimary[31]="GOL Magnum";
rprimary[32]="JNG-90";
rprimary[33]="L96A1";
rprimary[34]="M40A5";
rprimary[35]="M98B";
rprimary[36]="SCOUT ELITE";
rprimary[37]="SR338";
rprimary[38]="SRR-61";
rprimary[39]="SV-98";

rprand = Math.floor(Math.random()*40);
document.getElementById("reconprimarydisplay") .value=rprimary[rprand];
document.getElementById("assaultgadget").style.display = 'none';
document.getElementById("engineergadget").style.display = 'none';
document.getElementById("supportgadget").style.display = 'none';
document.getElementById("recongadget").style.display = 'block';
}

function agadget(){

var ag = new Array;
agadget[0]="M320 | FIRST AID PACK";
agadget[1]="M320 | DEFIBRILLATOR";
agadget[2]="M320 | MEDIC BAG";
agadget[3]="M320 | DS-3 DECOY";
agadget[4]="M26 | FIRST AID PACK";
agadget[5]="M26 | DEFIBRILLATOR";
agadget[6]="M26 | MEDIC BAG";
agadget[7]="M26 | DS-3 DECOY";
agadget[8]="FIRST AID PACK | DEFIBRILLATOR";
agadget[9]="FIRST AID PACK | MEDIC BAG";
agadget[10]="FIRST AID PACK | DS-3 DECOY";
agadget[11]="DEFIBRILLATOR | MEDIC BAG";
agadget[12]="DEFIBRILLATOR | DS-3 DECOY";
agadget[13]="MEDIC BAG | DS-3 DECOY";

agrand = Math.floor(Math.random()*14);
document.getElementById("assaultgadgetdisplay") .value=agadget[agrand];
document.getElementById("assaultperk").style.display = 'block';
document.getElementById("engineerperk").style.display = 'none';
document.getElementById("supportperk").style.display = 'none';
document.getElementById("reconperk").style.display = 'none';
}

function egadget(){

var eg = new Array;
egadget[0]="MBT LAW | REPAIR TOOL";
egadget[1]="MBT LAW | M15 AT MINE";
egadget[2]="MBT LAW | M2 SLAM";
egadget[3]="MBT LAW | EOD BOT";
egadget[4]="MBT LAW | DS-3 DECOY";
egadget[5]="RPG-7V2 | REPAIR TOOL";
egadget[6]="RPG-7V2 | M15 AT MINE";
egadget[7]="RPG-7V2 | M2 SLAM";
egadget[8]="RPG-7V2 | EOD BOT";
egadget[9]="RPG-7V2 | DS-3 DECOY";
egadget[10]="MK153 SMAW | REPAIR TOOL";
egadget[11]="MK153 SMAW | M15 AT MINE";
egadget[12]="MK153 SMAW | M2 SLAM";
egadget[13]="MK153 SMAW | EOD BOT";
egadget[14]="MK153 SMAW | DS-3 DECOY";
egadget[15]="FGM-148 JAVELIN | REPAIR TOOL";
egadget[16]="FGM-148 JAVELIN | M15 AT MINE";
egadget[17]="FGM-148 JAVELIN | M2 SLAM";
egadget[18]="FGM-148 JAVELIN | EOD BOT";
egadget[19]="FGM-148 JAVELIN | DS-3 DECOY";
egadget[20]="FGM-172 SRAW | REPAIR TOOL";
egadget[21]="FGM-172 SRAW | M15 AT MINE";
egadget[22]="FGM-172 SRAW | M2 SLAM";
egadget[23]="FGM-172 SRAW | EOD BOT";
egadget[24]="FGM-172 SRAW | DS-3 DECOY";
egadget[25]="FIM-92 STINGER | REPAIR TOOL";
egadget[26]="FIM-92 STINGER | M15 AT MINE";
egadget[27]="FIM-92 STINGER | M2 SLAM";
egadget[28]="FIM-92 STINGER | EOD BOT";
egadget[29]="FIM-92 STINGER | DS-3 DECOY";
egadget[30]="SA-18 IGLA | REPAIR TOOL";
egadget[31]="SA-18 IGLA | M15 AT MINE";
egadget[32]="SA-18 IGLA | M2 SLAM";
egadget[33]="SA-18 IGLA | EOD BOT";
egadget[34]="SA-18 IGLA | DS-3 DECOY";
egadget[35]="REPAIR TOOL | M15 AT MINE";
egadget[36]="REPAIR TOOL | M2 SLAM";
egadget[37]="REPAIR TOOL | EOD BOT";
egadget[38]="REPAIR TOOL | AA MINE";
egadget[39]="REPAIR TOOL | DS-3 DECOY";
egadget[40]="M15 AT MINE | M2 SLAM";
egadget[41]="M15 AT MINE | EOD BOT";
egadget[42]="M15 AT MINE | AA MINE";
egadget[43]="M15 AT MINE | DS-3 DECOY";
egadget[44]="M2 SLAM | EOD BOT";
egadget[45]="M2 SLAM | AA MINE";
egadget[46]="M2 SLAM | DS-3 DECOY";
egadget[47]="EOD BOT | AA MINE";
egadget[48]="EOD BOT | DS-3 DECOY";
egadget[49]="AA MINE | DS-3 DECOY";

egrand = Math.floor(Math.random()*50);
document.getElementById("engineergadgetdisplay") .value=egadget[egrand];
document.getElementById("assaultperk").style.display = 'none';
document.getElementById("engineerperk").style.display = 'block';
document.getElementById("supportperk").style.display = 'none';
document.getElementById("reconperk").style.display = 'none';
}

function sgadget(){

var sg = new Array;
sgadget[0]="XM25 | AMMO PACK";
sgadget[1]="XM25 | M18 CLAYMORE";
sgadget[2]="XM25 | AMMO BOX";
sgadget[3]="XM25 | M224 MORTAR";
sgadget[4]="XM25 | MP-APS";
sgadget[5]="XM25 | C4 EXPLOSIVE";
sgadget[6]="XM25 | UCAV";
sgadget[7]="XM25 | BALLISTIC SHIELD";
sgadget[8]="XM25 | DS-3 DECOY";
sgadget[9]="AMMO PACK | M18 CLAYMORE";
sgadget[10]="AMMO PACK | AMMO BOX";
sgadget[11]="AMMO PACK | M224 MORTAR";
sgadget[12]="AMMO PACK | MP-APS";
sgadget[13]="AMMO PACK | C4 EXPLOSIVE";
sgadget[14]="AMMO PACK | UCAV";
sgadget[15]="AMMO PACK | BALLISTIC SHIELD";
sgadget[16]="AMMO PACK | DS-3 DECOY";
sgadget[17]="M18 CLAYMORE | AMMO BOX";
sgadget[18]="M18 CLAYMORE | M224 MORTAR";
sgadget[19]="M18 CLAYMORE | MP-APS";
sgadget[20]="M18 CLAYMORE | C4 EXPLOSIVE";
sgadget[21]="M18 CLAYMORE | UCAV";
sgadget[22]="M18 CLAYMORE | BALLISTIC SHIELD";
sgadget[23]="M18 CLAYMORE | DS-3 DECOY";
sgadget[24]="AMMO BOX | M224 MORTAR";
sgadget[25]="AMMO BOX | MP-APS";
sgadget[26]="AMMO BOX | C4 EXPLOSIVE";
sgadget[27]="AMMO BOX | UCAV";
sgadget[28]="AMMO BOX | BALLISTIC SHIELD";
sgadget[29]="AMMO BOX | DS-3 DECOY";
sgadget[30]="M224 MORTAR | MP-APS";
sgadget[31]="M224 MORTAR | C4 EXPLOSIVE";
sgadget[32]="M224 MORTAR | UCAV";
sgadget[33]="M224 MORTAR | BALLISTIC SHIELD";
sgadget[34]="M224 MORTAR | DS-3 DECOY";
sgadget[35]="MP-APS | C4 EXPLOSIVE";
sgadget[36]="MP-APS | UCAV";
sgadget[37]="MP-APS | BALLISTIC SHIELD";
sgadget[38]="MP-APS | DS-3 DECOY";
sgadget[39]="C4 EXPLOSIVE | UCAV";
sgadget[40]="C4 EXPLOSIVE | BALLISTIC SHIELD";
sgadget[41]="C4 EXPLOSIVE | DS-3 DECOY";
sgadget[42]="UCAV | BALLISTIC SHIELD";
sgadget[43]="UCAV | DS-3 DECOY";
sgadget[44]="BALLISTIC SHIELD | DS-3 DECOY";

sgrand = Math.floor(Math.random()*45);
document.getElementById("supportgadgetdisplay") .value=sgadget[sgrand];
document.getElementById("assaultperk").style.display = 'none';
document.getElementById("engineerperk").style.display = 'none';
document.getElementById("supportperk").style.display = 'block';
document.getElementById("reconperk").style.display = 'none';
}

function rgadget(){

var rg = new Array;
rgadget[0]="PLD | C4 EXPLOSIVE";
rgadget[1]="PLD | MOTION SENSOR";
rgadget[2]="PLD | RADIO BEACON";
rgadget[3]="PLD | T-UGS";
rgadget[4]="PLD | SOFLAM";
rgadget[5]="PLD | MAV";
rgadget[6]="PLD | M18 CLAYMORE";
rgadget[7]="PLD | SUAV";
rgadget[8]="PLD | DS-3 DECOY";
rgadget[9]="C4 EXPLOSIVE | MOTION SENSOR";
rgadget[10]="C4 EXPLOSIVE | RADIO BEACON";
rgadget[11]="C4 EXPLOSIVE | T-UGS";
rgadget[12]="C4 EXPLOSIVE | SOFLAM";
rgadget[13]="C4 EXPLOSIVE | MAV";
rgadget[14]="C4 EXPLOSIVE | M18 CLAYMORE";
rgadget[15]="C4 EXPLOSIVE | SUAV";
rgadget[16]="C4 EXPLOSIVE | DS-3 DECOY";
rgadget[17]="MOTION SENSOR | RADIO BEACON";
rgadget[18]="MOTION SENSOR | T-UGS";
rgadget[19]="MOTION SENSOR | SOFLAM";
rgadget[20]="MOTION SENSOR | MAV";
rgadget[21]="MOTION SENSOR | M18 CLAYMORE";
rgadget[22]="MOTION SENSOR | SUAV";
rgadget[23]="MOTION SENSOR | DS-3 DECOY";
rgadget[24]="RADIO BEACON | T-UGS";
rgadget[25]="RADIO BEACON | SOFLAM";
rgadget[26]="RADIO BEACON | MAV";
rgadget[27]="RADIO BEACON | M18 CLAYMORE";
rgadget[28]="RADIO BEACON | SUAV";
rgadget[29]="RADIO BEACON | DS-3 DECOY";
rgadget[30]="T-UGS | SOFLAM";
rgadget[31]="T-UGS | MAV";
rgadget[32]="T-UGS | M18 CLAYMORE";
rgadget[33]="T-UGS | SUAV";
rgadget[34]="T-UGS | DS-3 DECOY";
rgadget[35]="SOFLAM | MAV";
rgadget[36]="SOFLAM | M18 CLAYMORE";
rgadget[37]="SOFLAM | SUAV";
rgadget[38]="SOFLAM | DS-3 DECOY";
rgadget[39]="MAV | M18 CLAYMORE";
rgadget[40]="MAV | SUAV";
rgadget[41]="MAV | DS-3 DECOY";
rgadget[42]="M18 CLAYMORE | SUAV";
rgadget[43]="M18 CLAYMORE | DS-3 DECOY";
rgadget[44]="SUAV | DS-3 DECOY";

rgrand = Math.floor(Math.random()*45);
document.getElementById("recongadgetdisplay") .value=rgadget[rgrand];
document.getElementById("assaultperk").style.display = 'none';
document.getElementById("engineerperk").style.display = 'none';
document.getElementById("supportperk").style.display = 'none';
document.getElementById("reconperk").style.display = 'block';
}

function aperk(){

var afu = new Array;
aperk[0]="DEFENSIVE";
aperk[1]="OFFENSIVE";
aperk[2]="SHADOW";
aperk[3]="COMBAT MEDIC";
aperk[4]="GRENADIER";

afurand = Math.floor(Math.random()*5);
document.getElementById("assaultperkdisplay") .value=aperk[afurand];
document.getElementById("sidearm").style.display = 'block';
}

function eperk(){

var efu = new Array;
eperk[0]="DEFENSIVE";
eperk[1]="OFFENSIVE";
eperk[2]="SHADOW";
eperk[3]="ANTI-TANK";
eperk[4]="MECHANIC";

efurand = Math.floor(Math.random()*5);
document.getElementById("engineerperkdisplay") .value=eperk[efurand];
document.getElementById("sidearm").style.display = 'block';
}

function sperk(){

var sfu = new Array;
sperk[0]="DEFENSIVE";
sperk[1]="OFFENSIVE";
sperk[2]="SHADOW";
sperk[3]="INDIRECT FIRE";
sperk[4]="PERIMETER DEFENSE";

sfurand = Math.floor(Math.random()*5);
document.getElementById("supportperkdisplay") .value=sperk[sfurand];
document.getElementById("sidearm").style.display = 'block';
}

function rperk(){

var rfu = new Array;
rperk[0]="DEFENSIVE";
rperk[1]="OFFENSIVE";
rperk[2]="SHADOW";
rperk[3]="SPEC OPS";
rperk[4]="SNIPER";

rfurand = Math.floor(Math.random()*5);
document.getElementById("reconperkdisplay") .value=rperk[rfurand];
document.getElementById("sidearm").style.display = 'block';
}

function sidearm(){

var sa = new Array;
sidearm[0]=".44 MAGNUM";
sidearm[1]="93R";
sidearm[2]="COMPACT 45";
sidearm[3]="CZ-75";
sidearm[4]="DEAGLE 44";
sidearm[5]="FN57";
sidearm[6]="G18";
sidearm[7]="M1911";
sidearm[8]="M412 REX";
sidearm[9]="M9";
sidearm[10]="MP443";
sidearm[11]="P226";
sidearm[12]="QSZ-92";
sidearm[13]="SHORTY 12G";
sidearm[14]="SW40";
sidearm[15]="UNICA 6";

sarand = Math.floor(Math.random()*16);
document.getElementById("sidearmdisplay") .value=sidearm[sarand];
document.getElementById("grenade").style.display = 'block';
}


function grenade(){

var gr = new Array;
grenade[0]="HAND FLARE";
grenade[1]="M18 SMOKE";
grenade[2]="M34 INCENDIARY";
grenade[3]="M67 FRAG";
grenade[4]="M84 FLASHBANG";
grenade[5]="RGO IMPACT";
grenade[6]="V40 MINI";

grrand = Math.floor(Math.random()*7);
document.getElementById("grenadedisplay") .value=grenade[grrand];
}




