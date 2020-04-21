const fetch = require("node-fetch");

const mockLeg = "legs": [
  {
      "distance": {
          "text": "10.5 km",
          "value": 10508
      },
      "duration": {
          "text": "18 mins",
          "value": 1096
      },
      "end_address": "1 Siam Cement Road Bangsue Bangkok, แขวง บางซื่อ เขตบางซื่อ กรุงเทพมหานคร 10900, Thailand",
      "end_location": {
          "lat": 13.8030692,
          "lng": 100.5390402
      },
      "start_address": "999/9 Rama I Rd, Khwaeng Pathum Wan, Khet Pathum Wan, Krung Thep Maha Nakhon 10330, Thailand",
      "start_location": {
          "lat": 13.7464548,
          "lng": 100.5405057
      },
      "steps": [
          {
              "distance": {
                  "text": "0.2 km",
                  "value": 193
              },
              "duration": {
                  "text": "1 min",
                  "value": 63
              },
              "end_location": {
                  "lat": 13.7447333,
                  "lng": 100.540297
              },
              "html_instructions": "Head <b>south</b> on <b>ถนน ราชดำริ</b>",
              "polyline": {
                  "points": "iz{rAeysdRRBx@FXBZBJ@N@TB@?R@F@Z@R@f@@j@B"
              },
              "start_location": {
                  "lat": 13.7464548,
                  "lng": 100.5405057
              },
              "travel_mode": "DRIVING"
          },
          {
              "distance": {
                  "text": "1.1 km",
                  "value": 1100
              },
              "duration": {
                  "text": "4 mins",
                  "value": 257
              },
              "end_location": {
                  "lat": 13.7428959,
                  "lng": 100.550221
              },
              "html_instructions": "Turn <b>left</b> at <b>แยก ราชประสงค์</b> onto <b>ถนน เพลินจิต</b>",
              "maneuver": "turn-left",
              "polyline": {
                  "points": "qo{rA{wsdRJAJCJw@@KFq@DY@K@YHw@?A@CDk@@GH{@@SDk@Dc@@GFi@BWBWJkAJkAD_@BYHy@BQHw@BUDc@JcA@K@IXcD@MHw@LyALgABQ?A?A@?Hw@Dc@Jy@@OBSFq@Fo@Fo@BWBULaA@KDY?GBU?C"
              },
              "start_location": {
                  "lat": 13.7447333,
                  "lng": 100.540297
              },
              "travel_mode": "DRIVING"
          },
          {
              "distance": {
                  "text": "0.3 km",
                  "value": 335
              },
              "duration": {
                  "text": "1 min",
                  "value": 50
              },
              "end_location": {
                  "lat": 13.7458741,
                  "lng": 100.550043
              },
              "html_instructions": "Turn <b>left</b><div style=\"font-size:0.9em\">Toll road</div>",
              "maneuver": "turn-left",
              "polyline": {
                  "points": "cd{rA{uudRm@DeALkBJmAF]?c@@c@@c@?O@w@@c@BSAKCAAEACCAA"
              },
              "start_location": {
                  "lat": 13.7428959,
                  "lng": 100.550221
              },
              "travel_mode": "DRIVING"
          },
          {
              "distance": {
                  "text": "1.2 km",
                  "value": 1247
              },
              "duration": {
                  "text": "1 min",
                  "value": 69
              },
              "end_location": {
                  "lat": 13.7555188,
                  "lng": 100.5453648
              },
              "html_instructions": "Merge onto <b>ทางพิเศษเฉลิมมหานคร</b> (signs for <b>Rama IX Road</b>)<div style=\"font-size:0.9em\">Toll road</div>",
              "maneuver": "merge",
              "polyline": {
                  "points": "uv{rAwtudR]@S@mAFmAF{@Fy@HS@q@DcAF_@@[BI?G@iBH}@Dw@HK?K@g@D]BaBVsA`@s@XIDYNC@GBk@XYNQL_@XST]\\QNc@n@c@p@IJEHGLc@t@OTW^GL]f@MRUZCBGDEFC@MNWRWRKFq@`@KFk@ZwAl@A@C@E@EBA?A@GBUFA?KD"
              },
              "start_location": {
                  "lat": 13.7458741,
                  "lng": 100.550043
              },
              "travel_mode": "DRIVING"
          },
          {
              "distance": {
                  "text": "1.0 km",
                  "value": 988
              },
              "duration": {
                  "text": "1 min",
                  "value": 61
              },
              "end_location": {
                  "lat": 13.7567788,
                  "lng": 100.5477951
              },
              "html_instructions": "Take the exit toward <b>Suvarnabhumi Airport</b>/<wbr/><b>Rama IX Rd.</b>/<wbr/><b>Chaeng Watthana</b><div style=\"font-size:0.9em\">Toll road</div>",
              "maneuver": "ramp-left",
              "polyline": {
                  "points": "_s}rAowtdROJA?GFMFMFMHOFKDSJGBKDULC@MFGDKFMFA?CBEBSJOJi@X[VA@QNC@?@OJYTc@VWNC?UJ]FUDM?Q?M?UGOEWICCQIUQEEGIEIGMGKCKEMEIACCK?MAW@C?M@G?A?C@E@C?E@CBI@GJ[NWBCVYBCTQPKt@k@x@i@^UDAHG@AJGZSDC@A^WPKNIl@e@HKDEDG@AJOFKFOF[@YA[AUCU"
              },
              "start_location": {
                  "lat": 13.7555188,
                  "lng": 100.5453648
              },
              "travel_mode": "DRIVING"
          },
          {
              "distance": {
                  "text": "2.4 km",
                  "value": 2365
              },
              "duration": {
                  "text": "2 mins",
                  "value": 130
              },
              "end_location": {
                  "lat": 13.7709313,
                  "lng": 100.5332784
              },
              "html_instructions": "Keep <b>left</b> at the fork, follow signs for <b>Dao Khanong Chaeng Watthana</b> and merge onto <b>ทางพิเศษศรีรัช</b><div style=\"font-size:0.9em\">Toll road</div>",
              "maneuver": "fork-left",
              "polyline": {
                  "points": "{z}rAwfudRGKOQCCCGGGIIGGKEKGOEOCMCGAIAA?O?KAQ@K@MBMBC@IBE@I@C@MDC@g@TULKFA@e@N]Xa@Xw@n@e@`@{ApASNEB[VMJKHQPEDOJCDIFC@IFA@EDA@GDC@GFkB`BsBhBEDIHKHs@l@A@_BzAEDIJMLCFWd@_@t@Uf@CFABCH[~@Y|@KVADO^Ob@Ob@GJCDCFm@nA]p@QZ_@f@i@r@k@n@q@l@EBa@\\UPc@XYRMFKFMHMFEDGBGBYNOJIDoAp@OH_@RUNm@d@QLUTi@h@y@dAi@|@EFEJA?ABIP]v@_@t@MXUf@Ud@Sd@Sb@Qb@Qd@g@jAGNINEH?@m@rACFGLc@~@Q^?@Ub@ABKTSb@"
              },
              "start_location": {
                  "lat": 13.7567788,
                  "lng": 100.5477951
              },
              "travel_mode": "DRIVING"
          },
          {
              "distance": {
                  "text": "1.4 km",
                  "value": 1371
              },
              "duration": {
                  "text": "1 min",
                  "value": 74
              },
              "end_location": {
                  "lat": 13.7823189,
                  "lng": 100.5341268
              },
              "html_instructions": "Keep <b>right</b> at the fork to stay on <b>ทางพิเศษศรีรัช</b>, follow signs for <b>Ngam Wong Wan</b>/<wbr/><b>Chaeng Watthana</b><div style=\"font-size:0.9em\">Toll road</div>",
              "maneuver": "fork-right",
              "polyline": {
                  "points": "is`sA_lrdRIJEFKTGLABEHGJINc@x@UTIJc@\\C@E@EBA@IDMFC@c@Jk@F}@BGAG?A?WEWEKCgAY{@UICKCUGq@KMCAAKAGAa@EOAMAQAUCq@?qABeAF[@K@A?W?Q?M?i@@]?c@?y@AE?c@CMAq@Es@Iu@O_@IYIQESAUAmCy@o@SSGEAICQEo@Qm@S]I]IKEkBg@WGICMCWIWIQGQGMEGAA?ECCA"
              },
              "start_location": {
                  "lat": 13.7709313,
                  "lng": 100.5332784
              },
              "travel_mode": "DRIVING"
          },
          {
              "distance": {
                  "text": "0.6 km",
                  "value": 586
              },
              "duration": {
                  "text": "1 min",
                  "value": 60
              },
              "end_location": {
                  "lat": 13.786027,
                  "lng": 100.5355085
              },
              "html_instructions": "Take exit <b>2-05</b> for <b>Rama VI Rd.</b> toward <b>คลองประปา</b><div style=\"font-size:0.9em\">Toll road</div>",
              "maneuver": "ramp-left",
              "polyline": {
                  "points": "ozbsAiqrdR[Ag@MqDcAgD_AK?K?G?K?A?IBE@E@GBGDGDC@GFA@UTOTEDKJQHA@[LA?OBU@OAKAIAUKMIEEGGGMEIEKCOAM?G?G@UD]ZqA"
              },
              "start_location": {
                  "lat": 13.7823189,
                  "lng": 100.5341268
              },
              "travel_mode": "DRIVING"
          },
          {
              "distance": {
                  "text": "0.7 km",
                  "value": 687
              },
              "duration": {
                  "text": "1 min",
                  "value": 88
              },
              "end_location": {
                  "lat": 13.7917612,
                  "lng": 100.5378617
              },
              "html_instructions": "Turn <b>left</b> onto <b>Rama 6 Road</b>/<wbr/><b>ถนน พระรามที่ 6</b>",
              "maneuver": "turn-left",
              "polyline": {
                  "points": "uqcsA}yrdRMEEAGCg@IYKaBg@AAgA[EAw@YgA]gAa@ECSGGCqBs@u@QqBm@w@UiBk@eA[QEq@Sy@U"
              },
              "start_location": {
                  "lat": 13.786027,
                  "lng": 100.5355085
              },
              "travel_mode": "DRIVING"
          },
          {
              "distance": {
                  "text": "0.3 km",
                  "value": 341
              },
              "duration": {
                  "text": "2 mins",
                  "value": 103
              },
              "end_location": {
                  "lat": 13.7924917,
                  "lng": 100.5349567
              },
              "html_instructions": "Turn <b>left</b> onto <b>ถนน ประดิพัทธิ์</b>",
              "maneuver": "turn-left",
              "polyline": {
                  "points": "oudsAshsdRS?KCI~@AZI~@MpAG^CTEZEd@e@rCEPADAHEj@"
              },
              "start_location": {
                  "lat": 13.7917612,
                  "lng": 100.5378617
              },
              "travel_mode": "DRIVING"
          },
          {
              "distance": {
                  "text": "0.7 km",
                  "value": 665
              },
              "duration": {
                  "text": "1 min",
                  "value": 79
              },
              "end_location": {
                  "lat": 13.7978406,
                  "lng": 100.5372656
              },
              "html_instructions": "Turn <b>right</b> at <b>แยก เทอดดำริ</b> onto <b>ถนน เทอดดำริ</b>",
              "maneuver": "turn-right",
              "polyline": {
                  "points": "azdsAovrdREXSWyAY}Aa@kCy@{Ag@wCeAgCu@eBm@c@UWQa@YcA_@MGA?OGk@U"
              },
              "start_location": {
                  "lat": 13.7924917,
                  "lng": 100.5349567
              },
              "travel_mode": "DRIVING"
          },
          {
              "distance": {
                  "text": "0.6 km",
                  "value": 601
              },
              "duration": {
                  "text": "1 min",
                  "value": 58
              },
              "end_location": {
                  "lat": 13.802894,
                  "lng": 100.5392211
              },
              "html_instructions": "Continue onto <b>ถนน เทอดดำริห์</b>",
              "polyline": {
                  "points": "o{esA}dsdReCs@a@KcA[aI{B]M[IkF_BkBg@QGGAAAE?CAC?C?C?"
              },
              "start_location": {
                  "lat": 13.7978406,
                  "lng": 100.5372656
              },
              "travel_mode": "DRIVING"
          },
          {
              "distance": {
                  "text": "29 m",
                  "value": 29
              },
              "duration": {
                  "text": "1 min",
                  "value": 4
              },
              "end_location": {
                  "lat": 13.8030692,
                  "lng": 100.5390402
              },
              "html_instructions": "<b>ถนน เทอดดำริห์</b> turns <b>left</b> and becomes <b>ซอย ปูนซีเมนต์ไทย</b><div style=\"font-size:0.9em\">Destination will be on the left</div>",
              "polyline": {
                  "points": "a{fsAcqsdRG@C@C@A@CBGLEH"
              },
              "start_location": {
                  "lat": 13.802894,
                  "lng": 100.5392211
              },
              "travel_mode": "DRIVING"
          }
      ],
      "traffic_speed_entry": [],
      "via_waypoint": []
  }
]

export default async (origin = '', destination = '') => {
  // const url = 'https://maps.googleapis.com/maps/api/directions/json?'
  // const params = new URLSearchParams({ origin, destination, key: process.env.GOOGLE_API_KEY })

  // try {
  //   const response = await fetch(url + params);
  //   const json = await response.json();
  //   return json.routes
  // } catch (error) {
  //   console.log(error);
  // }

  
}