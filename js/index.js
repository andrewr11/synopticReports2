
/*
synresults: holds all data from the selected site 
inputanswers: holds the radio button data
freetextanswers: holds the free text answers
final answers holds the answers that are put in the table
combo ansers : inorer to combine the 4 elements of AJCC staging into one answer
BGC: sets the background color for each question
modifyFreeText: for mixed free text and set text answers: holds free text
modifyFreeTextHeader: for mixed free tex and set text, holds set text
resopnses with an ID of 10 are mixed tree text and set text, the set text comes first
reponses with an ID of 20 are mixed with a drop down (ie ER/PR)


QIDs
00  typical radio
01 AJCC
02 T
03 N
04 M

40 breast dcis
41 breast stage tis
42 prostate aca
43 prostate icd10
44 colon icd10
45 melanoma icd10
46 lung icd10

50 0 total or 0 positive node dependency
51 is no sites sampled then total = 0



GIDs
00 typical radio
10 mixed free text and radio
11 mixed free text and radio T4
12 mixed free text and radio T4a
13 mixed free text and radio T4b
20 ER/PR drop down
15 = See case trip all the following See case questions DCIS
16 = See case trip all the following See case questions Inv breast
18 = See case trip only one more for gastric
17 treatment effect nodes and primary site NA

30 = extended lists


50 no nodes present
51 no positive nodes present
52 no positive nodes, stage N0a
53 N1 nodes
54 N2

60 Tis
61 T1
62 T2
63 T3
64 T4
65 T1a
66 T1b
67 T4a
68 T4b
69 Ta
70 T2a
71 T2b
72 T3a
73 T3b
74 Ta/Tis

80 breast grades 
81
82
83
84
85
86
87
88




*/

var database = {
    synresults: [
    ],
    row: {
      inputanswers: 
        [

      ]
    },
    row2: {
      freetextanswers: 
        [

      ]
    },
    row3: {
      finalanswers: 
        [

      ]
    },
    row4: {
      comboanswers: 
        [

      ]
    },
    row5: {
      useFreeText: 
        [

      ]
    },
    row6: {
      bgc: 
        [

      ]
    },
    row7: {
      modifyFreeText: 
        [

      ]
    },
    row8: {
      modifyFreeTextHeader: 
        [

      ]
    },
    row9: {
      comboMixed: 
        [

      ]
    },
    row10: {
      useCombo: 
        [

      ]
    },
    row11: {
      freeTextGID: 
        [

      ]
    },
    row12: {
      breastGrade: 
        [ 0,0,0]
    },
    
    site_groups: [
      {id : "00", name : "Breast"},
      {id : "00", name : "Central Nervous System"},
      {id : "00", name : "Endocrine"},
      {id : "00", name : "Gastrointestinal"},
      {id : "00", name : "Genitourinary"},
      {id : "00", name : "Gynecologic"},
      {id : "00", name : "Head and Neck"},
      {id : "00", name : "Hematologic"},
      {id : "00", name : "Ophthalmic"},
      {id : "00", name : "Other"},
      {id : "00", name : "Other-Biomarkers"},
      {id : "00", name : "Pediatric"},
      {id : "00", name : "Skin"},
      {id : "00", name : "Thorax"}
    ],
   
    current_tumor:"Tango",
    current_tumor_biopsy_type: " ",
    section: "homeMenu",
    showtable: true,
    tumor_types : [ {
      most_common : false,
      id : "00", name : "Adrenal",
      optional : false,
      organ_group : "Endocrine",
      properties : [  {
        id : "00", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Right adrenalectomy, total"
          }, {
            id : "00", name : "Right adrenalectomy, partial"
          }, {
            id : "00", name : "Left adrenalectomy, total"
          }, {
            id : "00", name : "Left adrenalectomy, partial"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor weight",
       optional_state  : "required", "options" : [ {
          id : "00", name : ""
        } ]
      }, {
         description : "do not use for pheochromocytoma",
        id : "00", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Adrenal cortical carcinoma"
          } ],
          id : "00", name : ""
        } ]
   }, {
        id : "00", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
             description : "<= 20 mitoses/50 hpf",
            id : "00", name : "Low grade"
          }, {
             description : ">20 mitoses/50 hpf",
            id : "00", name : "High grade"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Indeterminate"
          }, {
            id : "00", name : "Suspicious"
          }, {
            id : "00", name : "Large vessel, renal vein (including when identifed clinically)"
          }, {
            id : "00", name : "Large vessel, vena cava (including when identifed clinically)"
          }, {
            id : "00", name : "Microscopic angioinvasion"
          }, {
            id : "00", name : "Small vessel"
          }   ],
          id : "00", name : ""
        } ]
   
   
      }, {
        id : "00", name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Limited to adrenal"
          }, {
            id : "00", name : "Tumor invades into or through the adrenal capsule"
          }, {
            id : "00", name : "Tumor invades into extra-adrenal structures "
          }, {
             description : "specify",
            inputs_required : [ "" ],
            id : "11", name : "Tumor invades into adjacent organs"
          }  ],
          id : "00", name : ""
        } ]
   
   
      }, {
        description : "include distance/location of closest margin",
        id : "00", name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "10", name : "Free, "
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          } ],
          id : "00", name : ""
        } ]
  
   
      }, {
        id : "00", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "50", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "50", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "51", name : "0" },{ id : "53", name : "1" },{ id : "53", name : "2" },{ id : "53", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
  
  
      }, {
        id : "01", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "00", name : ""
          }, {
            description : "pathologic",
            id : "00", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "00", name : "m"
          }, {
            description : "recurrent",
            id : "00", name : "r"
          }, {
            description : "post-treatment",
            id : "00", name : "y"
          }, {
            id : "00", name : "mp"
          }, {
            id : "00", name : "rp"
          }, {
            id : "00", name : "yp"
          }, {
            id : "00", name : "mrp"
          }, {
            id : "00", name : "myp"
          }, {
            id : "00", name : "ryp"
          }, {
            id : "00", name : "mryp"
          } ],
          id : "00", name : ""
        }]

        }, {
           id : "02", name : "T",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "cannot be assessed",
            id : "00", name : "TX"
          }, {
            description : "ADRENAL CORTICAL CARCINOMA <=5 cm AND organ limited",
            id : "00", name : "T1"
          }, {
            description : "ADRENAL CORTICAL CARCINOMA >5 cm  AND organ limited",
            id : "00", name : "T2"
          }, {
            description : "ADRENAL CORTICAL CARCINOMA local invasion, no organs",
            id : "00", name : "T3"
          }, {
            description : "ADRENAL CORTICAL CARCINOMA Invades other organs",
            id : "00", name : "T4"
          } ],
          id : "00", name : ""
        }]
        }, {
           id : "03", name : "N",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "00", name : "NX"
          }, {
            description : "No metastasis",
            id : "00", name : "N0"
          }, {
            description : "Regional metastases",
            id : "00", name : "N1"
          } ],
          id : "00", name : "Category (M)"
        }]
        }, {
           id : "04", name : "M",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Distant metastases",
            id : "00", name : "M1"
          }, {
            id : "00", name : "M (not applicable)"
          }, {
            id : "00", name : "distant metastasis not applicable"
          } ],
          id : "00", name : ""
        } ]
      }]
    }, {
      most_common : false,
      id : "00", name : "Ampulla of  Vater",
      optional : false,
      organ_group : "Gastrointestinal",
      properties : [  {
        id : "00", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Ampullectomy"
          }, {
            id : "00", name : "Whipple resection"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Intra-ampullary"
          }, {
            id : "00", name : "Peri-ampullary"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Adenocarcinoma"
          }, {
            id : "00", name : "Adenocarcinoma, pancreaticobiliary type"
          }, {
            id : "00", name : "Adenocarcinoma, intestinal type"
          }, {
            id : "00", name : "Medullary carcinoma"
          }, {
            id : "00", name : "Invasive papillary adenocarcinoma"
          }, {
            id : "00", name : "Mucinous adenocarcinoma"
          }, {
            id : "00", name : "Clear cell adenocarcinoma"
          }, {
            id : "00", name : "Signet-ring cell carcinoma"
          }, {
            id : "00", name : "Adenosquamous carcinoma"
          }, {
            id : "00", name : "Squamous cell carcinoma"
          }, {
            id : "00", name : "Hepatoid adenocarcinoma "
          }, {
            id : "00", name : "Large cell neuroendocrine carcinoma"
          }, {
            id : "00", name : "Small cell neuroendocrine carcinoma"
          }, {
            id : "00", name : "Neuroendocrine carcinoma (poorly differentiated)"
          }, {
            id : "00", name : "Undifferentiated carcinoma"
          }, {
            id : "00", name : "Undifferentiated carcinoma with osteoclast giant cells"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Grade 1/3, well differentiated"
          }, {
            id : "00", name : "Grade 2/3, moderately differentiated"
          }, {
            id : "00", name : "Grade 3/3, poorly differentiated"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "60", name : "Carcinoma in situ"
          }, {
            id : "65", name : "Limited to ampulla of Vater or sphincter of Oddi"
          }, {
            id : "66", name : "Invades beyond sphincter of Oddi (perisphincteric invasion) "
          }, {
            id : "66", name : "Invades into duodenal submucosa "
          }, {
            id : "62", name : "Invades into muscularis propria of the duodenum"
          }, {
            id : "72", name : "Directly invades pancreas up to 0.5 cm"
          }, {
            id : "73", name : "Extends more than 0.5 cm into pancreas "
          }, {
            id : "73", name : "Extends into peripancreatic soft tissues "
          }, {
            id : "73", name : "Extends into periduodenal tissue"
          }, {
            id : "73", name : "Extends into duodenal serosa "
          }, {
             description : "specify",
              inputs_required : [ "" ],
            id : "11", name : "Invades other adjacent organs or structures other than pancreas "
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "include distance/location of closest margin, including mucosa(ampullectomy), pancreatic neck, uncinate, bile duct, proximal, distal",
        id : "00", name : "Margins, invasive tumor",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "10", name : "Free, "
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "include distance/location of closest margin, including mucosa(ampullectomy), pancreatic neck, uncinate, bile duct, proximal, distal",
        id : "00", name : "Margins, dysplasia/CIS",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "10", name : "Free, "
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          }, {
            id : "00", name : "Not applicable"
          }  ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Indeterminate"
          }, {
            id : "00", name : "Suspicious"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Present, extensive"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "50", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "50", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "51", name : "0" },{ id : "53", name : "1" },{ id : "53", name : "2" },{ id : "53", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "01", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "00", name : ""
          }, {
            description : "pathologic",
            id : "00", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "00", name : "m"
          }, {
            description : "recurrent",
            id : "00", name : "r"
          }, {
            description : "post-treatment",
            id : "00", name : "y"
          }, {
            id : "00", name : "mp"
          }, {
            id : "00", name : "rp"
          }, {
            id : "00", name : "yp"
          }, {
            id : "00", name : "mrp"
          }, {
            id : "00", name : "myp"
          }, {
            id : "00", name : "ryp"
          }, {
            id : "00", name : "mryp"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "02", name : "T",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "cannot be assessed",
            id : "00", name : "TX"
          }, {
            description : "Carcinoma in situ",
            id : "00", name : "Tis"
          }, {
            description : "limited to ampulla of Vater and sphincter of Oddi",
            id : "00", name : "T1a"
          }, {
            description : "invades beyond sphincter of Oddi and/or into the duodenal mucosa",
            id : "00", name : "T1b"
          }, {
            description : "invades muscularis propria of duodenum",
            id : "00", name : "T2"
          }, {
            description : "invades pancreas up to 0.5 cm",
            id : "00", name : "T3a"
          }, {
            description : "(Tumor extends more than 0.5 cm into the pancreas, or extends into peripancreatic tissue or periduodenal tissue or duodenal serosa without involvement of the celiac axis or superior mesenteric artery)",
            id : "00", name : "T3b"
          }, {
            description : "Invades celiac axis superior mesenteric artery and or common hepatic artery",
            id : "00", name : "T4"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "03", name : "N",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "00", name : "NX"
          }, {
            description : "No metastasis",
            id : "00", name : "N0"
          }, {
            description : "1- 3 Regional metastases",
            id : "00", name : "N1"
          }, {
            description : "4 or more Regional metastases",
            id : "00", name : "N2"
          } ],
          id : "00", name : "Category (M)"
        }]
        }, {
          id : "04", name : "M",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Distant metastases",
            id : "00", name : "M1"
          }, {
            id : "00", name : "M (not applicable)"
          }, {
            id : "00", name : "distant metastasis not applicable"
          } ],
          id : "00", name : ""
        } ]
        }, {
         description: "adenocarcinoma only",
        id : "00", name : "MSI IHC and Interpretation",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Intact nuclear expression of MMR proteins (MLH1, MSH2, MSH6, PMS2): No evidence of deficient mismatch repair (low probability of MSI-H)"
          },{
            id : "00", name : "Loss of nuclear expression of one or more MMR proteins (MLH1, MSH2, MSH6, PMS2): deficient mismatch repair/ high probability of microsatellite instability-high (MSI-H). The presence of MSI-H/deficient mismatch repair may also be an indication for additional testing for Lynch syndrome and genetic counselling."
          }, {
            id : "00", name : "Pending"
          }, {
            id : "00", name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            id : "10", name : "See case "
          }],
          id : "00", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "00", name : "Anus",
      optional : false,
      organ_group : "Gastrointestinal",
      properties : [  {
        id : "00", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Abdominoperineal resection"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Anal canal"
          }, {
            id : "00", name : "Perianal region"
          }, {
            id : "00", name : "Anus, not otherwise specified"
          }, {
            id : "00", name : "Anorectal junction"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Squamous cell carcinoma"
          }, {
            id : "00", name : "Verrucous carcinoma"
          }, {
            id : "00", name : "Basal cell carcinoma"
          }, {
            id : "00", name : "Adenocarcinoma"
          }, {
            id : "00", name : "Mucinous adenocarcinoma"
          }, {
            id : "00", name : "Squamous cell carcinoma"
          }, {
            id : "00", name : "Large cell neuroendocrine carcinoma"
          }, {
            id : "00", name : "Small cell carcinoma"
          }, {
            id : "00", name : "Paget's disease"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Grade 1/4, Well differentiated"
          }, {
            id : "00", name : "Grade 2/4, Moderately differentiated"
          }, {
            id : "00", name : "Grade 3/4, Poorly differentiated"
          }, {
            id : "00", name : "Grade 4/4, Undifferentiated"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "60", name : "Carcinoma in situ"
          }, {
            id : "00", name : "Invades lamina propria"
          }, {
            id : "00", name : "Invades muscularis mucosae"
          }, {
            id : "00", name : "Invades submucosa"
          }, {
            id : "00", name : "Invades anal sphincter muscle"
          }, {
            id : "00", name : "Invades perianal or perirectal soft tissue"
          }, {
             description : "specify",
              inputs_required : [ "" ],
            id : "11", name : "Invades other structures"
          }, {
            id : "10", name : "Invades perianal skin"
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "include distance/location of closest margin, proximal distal and radial",
        id : "00", name : "Margins, invasive tumor",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "10", name : "Free, "
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          }],
          id : "00", name : ""
        } ]
      }, {
        description : "include distance/location of closest margin, proximal distal radial",
        id : "00", name : "Margins, dysplasia/CIS",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "10", name : "Free, "
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Treatment effect, primary site",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Not applicable"
          }, {
            id : "00", name : "Absent"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Not known"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymph nodes, external iliac, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymph nodes, ,external iliac, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymph nodes, other, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymph nodes, ,other, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "01", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "00", name : ""
          }, {
            description : "pathologic",
            id : "00", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "00", name : "m"
          }, {
            description : "recurrent",
            id : "00", name : "r"
          }, {
            description : "post-treatment",
            id : "00", name : "y"
          }, {
            id : "00", name : "mp"
          }, {
            id : "00", name : "rp"
          }, {
            id : "00", name : "yp"
          }, {
            id : "00", name : "mrp"
          }, {
            id : "00", name : "myp"
          }, {
            id : "00", name : "ryp"
          }, {
            id : "00", name : "mryp"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "02", name : "T",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "cannot be assessed",
            id : "00", name : "TX"
          }, {
            description : "Carcinoma in situ",
            id : "00", name : "Tis"
          }, {
            description : "<= 2cm",
            id : "00", name : "T1"
          }, {
            description : ">2cm AND <=5cm",
            id : "00", name : "T2"
          }, {
            description : ">5cm",
            id : "00", name : "T3"
          }, {
            description : "Invades other organs",
            id : "00", name : "T4"
          } ],
          id : "00", name : ""
        }]
           }, {
            id : "03", name : "N",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "00", name : "NX"
          }, {
            description : "No regional lymph node metastases",
            id : "00", name : "N0"
          }, {
            description : "Inguinal mesorectal or internal iliac lymph node metastases",
            id : "00", name : "N1a"
          }, {
            description : "External iliac lymph node metastases",
            id : "00", name : "N1b"
          }, {
            description : "N1a metastasis plus external iliac lymph node metastases",
            id : "00", name : "N1c"
          } ],
          id : "00", name : "Category (pN)"
        }]
        }, {
          id : "04", name : "M",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Metastases",
            id : "00", name : "M1"
          }, {
            id : "00", name : "M (not applicable)"
          }, {
            id : "00", name : "distant metastasis not applicable"
          } ],
          id : "00", name : ""
        } ]
    
      }, {
         description : "for squamous/basaloid carcinoma",
        id : "00", name : "p16 Immunohistochemistry ",
       optional_state  : "required", "options" : [ {
          group : [  {
            id : "00", name : "Negative "
          }, {
            id : "00", name : "Equivocal"
          }, {
            id : "00", name : "Not applicable "
          }, {
            id : "00", name : "Not performed"
          }, {
            id : "00", name : "Pending"
          } ],
          id : "00", name : ""
        } ]
      }, {
         description : "for squamous/basaloid carcinoma",
        id : "00", name : "HPV ISH ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Positive "
          }, {
            id : "00", name : "Negative "
          }, {
            id : "00", name : "Equivocal"
          }, {
            id : "00", name : "Not applicable "
          }, {
            id : "00", name : "Not performed"
          }, {
            id : "00", name : "Pending"
          } ],
          id : "00", name : ""
        } ]
      }, {
         description : "for squamous/basaloid carcinoma",
        id : "00", name : "HPV PCR ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Positive "
          }, {
            id : "00", name : "Negative "
          }, {
            id : "00", name : "Equivocal"
          }, {
            id : "00", name : "Not applicable "
          }, {
            id : "00", name : "Not performed"
          }, {
            id : "00", name : "Pending"
          } ],
          id : "00", name : ""
        } ]
        }]
    }, {
      most_common : false,
      id : "00", name : "Appendix",
      optional : false,
      organ_group : "Gastrointestinal",
      properties : [  {
        id : "00", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Appendectomy"
          }, {
            id : "00", name : "Appendectomy and cecal resection"
          }, {
            id : "00", name : "Appendectomy and right colectomy"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Adenocarcinoma"
          }, {
            id : "00", name : "Mucinous carcinoma"
          }, {
            id : "00", name : "Low grade mucinous neoplasm (LAMN)"
          }, {
            id : "00", name : "High grade mucinous neoplasm"
          }, {
            id : "00", name : "Signet ring cell carcinoma"
          }, {
            id : "00", name : "Goblet cell carcinoid"
          }, {
            id : "00", name : "Mixed adenocarcinoma/goblet cell carcinoid"
          }, {
            id : "00", name : "Large cell neuroendocrine carcinoma"
          }, {
            id : "00", name : "Small cell carcinoma"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Grade 1/3, Well differentiated"
          }, {
            id : "00", name : "Grade 2/3, Moderately differentiated"
          }, {
            id : "00", name : "Grade 3/3, Poorly differentiated"
          }, {
            description : "low grade mucinous neoplasm",
            id : "00", name : "Low grade"
          }, {
            description : "high grade mucinous neoplasm",
            id : "00", name : "High grade"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "60", name : "In situ/No invasion of lamina propria"
          }, {
            id : "60", name : "Intramucosal (invades lamina propria/muscularis mucosa)"
          }, {
            id : "61", name : "Invades submucosa"
          }, {
            id : "62", name : "Invades muscularis propria"
          }, {
            id : "63", name : "Invades subserosa"
          }, {
            id : "67", name : "Penetrates serosa"
          }, {
             description : "specify",
               inputs_required : [ "" ],
            id : "13", name : "Invades other organs"
          }, {
             description : "Stage TIS for low grade mucinous tumors",
            id : "60", name : "Mucin or cells invade muscularis propria"
          }, {
            id : "63", name : "Invades subserosal tissue"
          }, {
             description : "Stage T3 for low grade mucinous tumors",
            id : "63", name : "Mucin or cells invade subserosal tissue"
          }, {
            id : "67", name : "Penetrates serosa"
          }, {
             description : "Stage T4a for low grade mucinous tumors",
            id : "67", name : "Mucin or cells penetrate serosa"
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "include distance/location of closest margin, proximal, radial(if applicable)",
        id : "00", name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "10", name : "Free, "
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Indeterminate"
          }, {
            id : "00", name : "Suspicious"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Present, extensive"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor deposits",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "Present",
            inputs_required : [ "#" ],
            id : "10", name : ""
          }, {
            id : "00", name : "None"
          }, {
            id : "00", name : "Equivocal"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "50", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "50", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "51", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "01", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "00", name : ""
          }, {
            description : "pathologic",
            id : "00", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "00", name : "m"
          }, {
            description : "recurrent",
            id : "00", name : "r"
          }, {
            description : "post-treatment",
            id : "00", name : "y"
          }, {
            id : "00", name : "mp"
          }, {
            id : "00", name : "rp"
          }, {
            id : "00", name : "yp"
          }, {
            id : "00", name : "mrp"
          }, {
            id : "00", name : "myp"
          }, {
            id : "00", name : "ryp"
          }, {
            id : "00", name : "mryp"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "02", name : "T",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "cannot be assessed OR acceptable for any stage low grade mucinous tumor",
            id : "00", name : "TX"
          }, {
            description : "No tumor",
            id : "00", name : "T0"
          }, {
            description : "in situ or invasion of lamina propria or muscularis mucosa ",
            id : "00", name : "Tis"
          }, {
            description : "low grade appendiceal mucinous neoplasm confined by the muscularis propria. acellular mucin or mucinous epithelium may invade into the muscularis propria. T1 and t2 are not appropriate for LAMN.  Mucin or epithelium into subserosa (T3) or serosa (T4a) are OK for either mucin or cells",
            id : "00", name : "Tis(LAMN)"
          }, {
            description : "invades submucosa (Do not use for low grade mucinous tumors",
            id : "00", name : "T1"
          }, {
            description : "Invades muscularis propria (do not use for low grade mucinous tumors)",
            id : "00", name : "T2"
          }, {
            description : "Invades subserosa, including acellular mucin or mucinous epithelium involving the subserosa of the appendix or mesoappendix",
            id : "00", name : "T3"
          }, {
            description : "Invades subserosa, including acellular mucin or mucinous epithelium involving the subserosa of the appendix or mesoappendix",
            id : "00", name : "T3 (LAMN)"
          }, {
            description : "Penetrates serosa, including acellular mucin or mucinous epithelium involving the serosa of the appendix or mesoappendix",
            id : "00", name : "T4a"
          }, {
            description : "Penetrates serosa, including acellular mucin or mucinous epithelium involving the serosa of the appendix or mesoappendix",
            id : "00", name : "T4a (LAMN)"
          }, {
            description : " invades adjacent organs",
            id : "00", name : "T4b"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "03", name : "N",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "00", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "00", name : "N0"
          }, {
            description : "1 positive nodes",
            id : "00", name : "N1a"
          }, {
            description : "2 -3 positive nodes",
            id : "00", name : "N1b"
          }, {
            description : "tumor deposits only",
            id : "00", name : "N1c"
          }, {
            description : ">= 4 positive nodes",
            id : "00", name : "N2"
          } ],
          id : "00", name : "Category (pN)"
        }]
        }, {
          id : "04", name : "M",
           optional_state  : "required", "options" : [ {
          group : [ {
            
              id : "00", name : "M (not applicable)"
            },{
            description : "intraperitoneal mucin only",
            id : "00", name : "M1a"
          }, {
            description : "intraperitoneal cells with or without mucin (LAM), or metastases (carcinoma) only",
            id : "00", name : "M1b"
          }, {
            description : "other metastases outside of peritoneum",
            id : "00", name : "M1c"
          },  {
            id : "00", name : "distant metastasis not applicable"
          } ],
          id : "00", name : ""
        } ]
        },  {
        id : "00", name : "MSI IHC and Interpretation",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Pending, addendum to follow"
          },{
             description : "tell the secretary to pick this and copy the answer in a separate note",
            id : "00", name : " see Note."
          },{
             description : "A.",
            id : "00", name : "MLH1+, MSH2+, MSH6+, PMS2+. Intact nuclear expression of MMR protein, low probability of microsatellite instability-high (MSI-H).  There are exceptions to the above IHC interpretations. These results should not be considered in isolation, and clinical correlation with genetic counseling is recommended to assess the need for germline testing."
          }, {
             description : "B.",
            id : "00", name : "MLH1-, MSH2+, MSH6+, PMS2-. Loss of nuclear expression of MLH1 and PMS2: deficient mismatch repair/ high probability of microsatellite instability-high (MSI-H). Testing for methylation of the MLH1 promoter is indicated (the presence of MLH1 methylation suggests that the tumor is sporadic and germline evaluation is probably not indicated; absence of MLH1 methylation suggests the possibility of Lynch syndrome, and sequencing and/or large deletion/duplication testing of germline MLH1 is indicated). There are exceptions to the above IHC interpretations. These results should not be considered in isolation, and clinical correlation with genetic counseling is recommended to assess the need for germline testing."
          }, {
             description : "C.",
            id : "00", name : "MLH1+, MSH2-, MSH6-, PMS2+. Loss of nuclear expression of MSH2 and MSH6: deficient mismatch repair/ high probability of microsatellite instability-high (MSI-H). High probability of Lynch syndrome (sequencing and or large deletion/duplication testing of germline MSH2 may be indicated, and, if negative, sequencing and or large deletion/duplication testing of germline MSH6 may be indicated). There are exceptions to the above IHC interpretations.   These results should not be considered in isolation, and clinical correlation with genetic counseling is recommended to assess the need for germline testing."
          }, {
             description : "D.",
            id : "00", name : "MLH1+, MSH2+, MSH6-, PMS2+. Loss of nuclear expression of MSH6 only: deficient mismatch repair/ high probability of microsatellite instability-high (MSI-H). High probability of Lynch syndrome (sequencing and or large deletion/duplication testing of germline MSH6 may be indicated). There are exceptions to the above IHC interpretations.   These results should not be considered in isolation, and clinical correlation with genetic counseling is recommended to assess the need for germline testing."
          }, {
             description : "E.",
            id : "00", name : "MLH1+, MSH2+, MSH6+, PMS2-. Loss of nuclear expression of PMS2 only: deficient mismatch repair/ high probability of microsatellite instability-high (MSI-H). High probability of Lynch syndrome (sequencing and or large deletion/duplication testing of germline PMS2 may be indicated). There are exceptions to the above IHC interpretations.   These results should not be considered in isolation, and clinical correlation with genetic counseling is recommended to assess the need for germline testing."
          } , {
            id : "00", name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            id : "10", name : "See case "
          } ],
          id : "00", name : ""
        } ]
      }, {
          description : "includes LAM by stage",
        id : "00", name : "Ancillary studies ordered",
       optional_state  : "required", "options" : [ {
          group : [ {
             description : "T1-3N0",
            id : "00", name : "PIK3CA"
          },{
             description : "T1-3N0 AND loss of MLH1 and PMS2",
            id : "00", name : "PIK3CA and MLH1 promoter methylation"
          }, {
             description : "T4 or N1",
            id : "00", name : "PIK3CA, K-RAS extended panel, N-RAS, and BRAF"
          }, {
             description : "T4 or N1 AND loss of MLH1 and PMS2",
            id : "00", name : "PIK3CA, K-RAS extended panel, N-RAS, BRAF, and MLH1 promoter methylation"
          }, {
            id : "00", name : "Pending results of MMR protein panel"
          }, {
            id : "00", name : "None"
          }, {
            id : "00", name : "Not applicable"
          }, {
            inputs_required : [ "" ],
            id : "10", name : "See case"
          } ],
          id : "00", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "00", name : "Appendix neuroendocrine tumor",
      optional : false,
      organ_group : "Endocrine",
      properties : [  {
        id : "00", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Appendectomy"
          }, {
            id : "00", name : "Appendectomy and cecal resecton"
          }, {
            id : "00", name : "Appendectomy and right colectmy"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Proximal half of appendix"
          }, {
            id : "00", name : "Distal half of appendix"
          }, {
            id : "00", name : "Diffusely involving appendix"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "00", name : ""
        } ]
      }, {
         description : "For small cell (high grade NET use appendix carcinoma protocol not this one) ",  
        id : "00", name : "Type and Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "< 2mitoses/10 hpf and/or Ki67<3% ", 
            id : "00", name : "Grade 1/3, Well differentiated neuroendocrine tumor, low grade (carcinoid)"
          }, {
            description : ">= 2 AND < 20 mitoses/10 hpf and/or Ki67 >=3 AND <20% ",  
            id : "00", name : "Grade 2/3, Well differentiated neuroendocrine tumor, intermediate grade (atypical carcinoid)"
          }, {
             description : "> 20 mitoses/10 hpf and/or Ki67 >20% ",  
            id : "00", name : "Grade 3/3, Well differentiated neuroendocrine tumor"
          } ],
          id : "00", name : ""
        } ]
      }, {
           description : "mitoses/ 2 mm squared NOT 10 hpf, approximately count 42 hpf and divide by 5", 
        id : "00", name : "Mitotic rate",
       optional_state  : "required", "options" : [ {
          group : [ {
            
            id : "00", name : "Less than 2 per 2 mm squared"
          }, {
          
            id : "00", name : "at least 2 and less than 20 /2 mm squared"
          }, {
            
            id : "00", name : "More than 20 per 2 mm squared"
          } ],
          id : "00", name : ""
        } ]  
        
      }, {
        id : "00", name : "Ki67 (Mib1)",
       optional_state  : "required", "options" : [ {
          group : [ {
              
            id : "00", name : "Less than 3%"
          }, {
          
            id : "00", name : "at least 3% and less than 20%"
          }, {
              
            id : "00", name : "More than 20%"
          } ],
          id : "00", name : ""
        } ]  
        
      }, {
        id : "00", name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "60", name : "No invasion of lamina propria"
          }, {
            id : "60", name : "Intramucosal (invades lamina propria/muscularis mucosa)"
          }, {
            id : "00", name : "Invades submucosa"
          }, {
            id : "00", name : "Invades muscularis propria"
          }, {
            id : "00", name : "Invades subserosal tissue"
          }, {
            id : "64", name : "Penetrates serosa"
          }, {
            description : "specify",
             inputs_required : [ "" ],
            id : "11", name : "Invades other organs"
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "include distance/location of closest margin, proximal distal and radial",
        id : "00", name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "10", name : "Free, "
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Indeterminate"
          }, {
            id : "00", name : "Suspicious"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Present, extensive"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "50", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "51", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "51", name : "0" },{ id : "53", name : "1" },{ id : "53", name : "2" },{ id : "53", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "01", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "00", name : ""
          }, {
            description : "pathologic",
            id : "00", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "00", name : "m"
          }, {
            description : "recurrent",
            id : "00", name : "r"
          }, {
            description : "post-treatment",
            id : "00", name : "y"
          }, {
            id : "00", name : "mp"
          }, {
            id : "00", name : "rp"
          }, {
            id : "00", name : "yp"
          }, {
            id : "00", name : "mrp"
          }, {
            id : "00", name : "myp"
          }, {
            id : "00", name : "ryp"
          }, {
            id : "00", name : "mryp"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "02", name : "T",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "cannot be assessed",
            id : "00", name : "TX"
          }, {
            description : "No tumor",
            id : "00", name : "T0"
          }, {
            description : " Tumor 2 cm or less in greatest dimension",
            id : "00", name : "T1"
          }, {
            description : "Tumor more than 2 cm but less than or equal to 4 cm",
            id : "00", name : "T2"
          }, {
            description : "Tumor more than 4 cm or with subserosal invasion or involvement of the mesoappendix",
            id : "00", name : "T3"
          }, {
            description : " Tumor perforates the peritoneum or directly invades other adjacent organs or structures (excluding direct mural extension to adjacent subserosa of adjacent bowel), eg, abdominal wall and skeletal muscle",
            id : "00", name : "T4"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "03", name : "N",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "00", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "00", name : "N0"
          }, {
            description : "positive nodes",
            id : "00", name : "N1"
          } ],
          id : "00", name : "Category (pN)"
        }]
        }, {
          id : "04", name : "m",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "distant metastases",
            id : "00", name : "M1"
          }, {
            id : "00", name : "M (not applicable)"
          }, {
            id : "00", name : "distant metastasis not applicable"
          } ],
          id : "00", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "00", name : "Bone",
      optional : false,
      organ_group : "Other",
      properties : [ {
        id : "00", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Intralesional resection"
          }, {
            id : "00", name : "Marginal resection "
          }, {
            id : "00", name : "Segmental/wide resection "
          }, {
            id : "00", name : "Radical resection "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Anatomic location",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "specify",
             inputs_required : [ "" ],
            id : "10", name : "Appendicular skeleton "
          }, {
             description : "specify",
              inputs_required : [ "" ],
            id : "10", name : "Spine"
          }, {
             description : "specify",
              inputs_required : [ "" ],
            id : "10", name : "Pelvis "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Epiphysis or apophysis"
          }, {
            id : "00", name : "Metaphysis "
          }, {
            id : "00", name : "Diaphysis"
          }, {
            id : "00", name : "Cortex "
          }, {
            id : "00", name : "Medullary cavity "
          }, {
            id : "00", name : "Surface "
          }, {
            id : "00", name : "Joint"
          }, {
            id : "00", name : "Tumor extension into soft tissue "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Type",
       optional_state  : "required", "options" : [ {
          id : "00", name : ""
        } ]
      }, {
         description : "/10 hpf, most proliferative area",
        id : "00", name : "Mitotic Rate ",
       optional_state  : "required", "options" : [ {
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Necrosis",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            description : "%",
            inputs_required : [ "" ],
            id : "10", name : "Present"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Grade 1/3, Well differentiated"
          }, {
            id : "00", name : "Grade 2/3, Moderately differentiated"
          }, {
            id : "00", name : "Grade 3/3, Poorly differentiated"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "include distance",
        id : "00", name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "10", name : "Free, "
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "50", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "51", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "51", name : "0" },{ id : "53", name : "1" },{ id : "53", name : "2" },{ id : "53", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Treatment effect, primary site",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Present  "
          }, {
            id : "00", name : "Indeterminate "
          }, {
            id : "00", name : "Not known"
          }  ],
          id : "00", name : ""
        } ]
      }, {
        id : "01", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "00", name : ""
          }, {
            description : "pathologic",
            id : "00", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "00", name : "m"
          }, {
            description : "recurrent",
            id : "00", name : "r"
          }, {
            description : "post-treatment",
            id : "00", name : "y"
          }, {
            id : "00", name : "mp"
          }, {
            id : "00", name : "rp"
          }, {
            id : "00", name : "yp"
          }, {
            id : "00", name : "mrp"
          }, {
            id : "00", name : "myp"
          }, {
            id : "00", name : "ryp"
          }, {
            id : "00", name : "mryp"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "02", name : "T",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "cannot be assessed",
            id : "00", name : "TX"
          }, {
            description : "No tumor",
            id : "00", name : "T0"
          }, {
            description : " NOS Tumor 8 cm or less in greatest dimension",
            id : "00", name : "T1"
          }, {
            description : "NOS Tumor more than 8 cm in greatest dimension",
            id : "00", name : "T2"
          }, {
            description : "NOS Discontinuous tumors in the primary bone site ",
            id : "00", name : "T3"
          }, {
            description : "SPINE  limited to one or two adjacent vertebrae",
            id : "00", name : "T1"
          }, {
            description : "SPINE  confied to 3 adjacent vertebrae",
            id : "00", name : "T2"
          }, {
            description : "SPINE  limited to 4 or more adjacent vertebrae or any non adjacent vertebrae",
            id : "00", name : "T3"
          }, {
            description : "SPINE  extends into spinal canal",
            id : "00", name : "T4a"
          }, {
            description : "SPINE  gross vascular invasion or tumor thrombus in great vessels",
            id : "00", name : "T4b"
          }, {
            description : "PELVIS one pelvic segment, <= 8cm",
            id : "00", name : "T1a"
          }, {
            description : "PELVIS one pelvic segment, > 8cm",
            id : "00", name : "T1b"
          }, {
            description : "PELVIS two pelvic segments or extraosseous extension, <= 8cm",
            id : "00", name : "T2a"
          }, {
            description : "PELVIS two pelvic segments or extraosseous extension, > 8cm",
            id : "00", name : "T2b"
          }, {
            description : "PELVIS two pelvis segments and extraosseous extension, <= 8cm",
            id : "00", name : "T3a"
          }, {
            description : "PELVIS two pelvis segments and extraosseous extension, > 8cm ",
            id : "00", name : "T3b"
          }, {
            description : "PELVIS three pelvic segments or crossing sacroiliac joint",
            id : "00", name : "T4"
          }  ],
          id : "00", name : ""
        }]
        }, {
          id : "03", name : "N",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "00", name : "NX"
          }, {
            description : "No regional lymph node metastases",
            id : "00", name : "N0"
          }, {
            description : "Regional lymph node metastases",
            id : "00", name : "N1"
          } ],
          id : "00", name : "Category (pN)"
        }]
        }, {
          id : "04", name : "M",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Lung metastases",
            id : "00", name : "M1a"
          }, {
            description : "Other metastases",
            id : "00", name : "M1b"
          }, {
            id : "00", name : "M (not applicable)"
          }, {
            id : "00", name : "distant metastasis not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "Immunohistochemistry, Cytogenetics, Molecular Pathology",
        id : "00", name : "Ancillary studies ordered",
       optional_state  : "required", "options" : [ {
          id : "00", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "00", name : "Bone marrow, NOS",
      optional : true,
      organ_group : "Hematologic",
      properties : [ {
        id : "00", name : "Specimen",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Right posterior iliac crest"
          } , {
            id : "00", name : "Left posterior iliac crest"
          }, {
            id : "00", name : "Sternal"
          }],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Aspiration"
          }, {
            id : "00", name : "Aspirate and clot"
          }, {
            id : "00", name : "Aspirate, clot, and core biopsy"
          }, {
            id : "00", name : "Aspirate, clot, core biopsy, and peripheral smear"
          } ],
          id : "00", name : ""
        } ]
      
      }, {
        id : "00", name : "Specimen adequacy",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Satisfactory"
          }, {
            id : "00", name : "Unsatisfactory"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "Extended list",
            inputs_required : [{name: "MYELOPROLIFERATIVE NEOPLASMS"} ,{name:  "Chronic myelogenous leukemia} ,{name:  BCR-ABL1 positive"} ,{name:  "Chronic neutrophilia leukemia"} ,{name:  "Polycythemia vera"} ,{name:  "Primary myelofibrosis"} ,{name:  "Essential thrombocythemia"} ,{name:  "Chronic eosinophilic leukemia} ,{name:  not otherwise specified (NOS)"} ,{name:  "Mastocytosis"} ,{name:  "Myeloproliferative neoplasm} ,{name:  unclassifiable"} ,{name:  ""} ,{name:  "PDGFRA} ,{name:  PDGFRB and FGFR1 NEOPLASMS"} ,{name:  "Myeloid or lymphoid neoplasm with PDGFRA rearrangement"} ,{name:  "Myeloid neoplasm with PDGFRB rearrangement"} ,{name:  "Myeloid or lymphoid neoplasm with FGFR1 abnormalities"} ,{name:  ""} ,{name:  "MYELODYSPLASTIC/MYELOPROLIFERATIVE NEOPLASMS"} ,{name:  "Chronic myelomonocytic leukemia"} ,{name:  "Atypical chronic myeloid leukemia BCR-ABL1 negative"} ,{name:  "Juvenile myelomonocytic leukemia"} ,{name:  "Myelodysplastic/myeloproliferative neoplasm} ,{name:  unclassifiable"} ,{name:  "Refractory anemia with ring sideroblasts associated with marked thrombocytosis"} ,{name:  ""} ,{name:  "MYELODYSPLASTIC SYNDROMES"} ,{name:  "Refractory anemia"} ,{name:  "Refractory neutropenia"} ,{name:  "Refractory thrombocytopenia"} ,{name:  "Refractory anemia with ring sideroblasts"} ,{name:  "Refractory cytopenia with multilineage dysplasia"} ,{name:  "Refractory anemia with excess blasts"} ,{name:  "Myelodysplastic syndrome associated with isolated del(5q)"} ,{name:  "Myelodysplastic syndrome} ,{name:  unclassifiable"} ,{name:  "Refractory cytopenia of childhood"} ,{name:  ""} ,{name:  "AML WITH RECURRENT GENETIC ABNORMALITIES"} ,{name:  "AML with t(8;21)(q22;q22); RUNX1-RUNX1T1"} ,{name:  "AML with inv(16)(p13.1q22) or t(16;16)(p13.1;q22); CBFB-MYH11"} ,{name:  "Acute promyelocytic leukemia with t(15;17)(q22;q12); PML-RARA"} ,{name:  "AML with t(9;11)(p22;q23); MLLT3-MLL"} ,{name:  "AML with t(6;9)(p23;q34); DEK-NUP214"} ,{name:  "AML with inv(3)(q21q26.2) or t(3;3)(q21;q26.2); RPN1-EVI1"} ,{name:  "AML (megakaryoblastic) with t(1;22)(p13;q13); RBM15-MKL1"} ,{name:  "AML with mutated NPM1"} ,{name:  "AML with mutated CEBPA"} ,{name:  ""} ,{name:  "AML WITH MDS"} ,{name:  "AML with Multilineage dysplasia"} ,{name:  "AML with Prior myelodysplastic syndrome"} ,{name:  "AML with Myelodysplasia-related cytogenetic abnormalities"} ,{name:  ""} ,{name:  "THERAPY RELATED MYELOID NEOPLASMS"} ,{name:  "Therapy-related AML"} ,{name:  "Therapy-related myelodysplastic syndrome"} ,{name:  "Therapy-related myelodysplastic/myeloproliferative neoplasm"} ,{name:  ""} ,{name:  "AML NOS"} ,{name:  "AML with minimal differentiation"} ,{name:  "AML without maturation"} ,{name:  "AML with maturation"} ,{name:  "Acute myelomonocytic leukemia"} ,{name:  "Acute monoblastic/monocytic leukemia"} ,{name:  "Acute erythroid leukemia"} ,{name:  "Acute megakaryocytic leukemia"} ,{name:  "Acute basophilic leukemia"} ,{name:  "Acute panmyelosis with myelofibrosis"} ,{name:  "AML} ,{name:  NOS"} ,{name:  ""} ,{name:  "MPS IN DOWNS SYNDROME"} ,{name:  "Transient abnormal myelopoiesis in Downs syndrome"} ,{name:  "Myeloid leukemia associated with Down syndrome"} ,{name:  ""} ,{name:  "ACUTE LEUKEMIA OF AMBIGUOUS LINEAGE"} ,{name:  "Acute undifferentiated leukemia"} ,{name:  "Mixed phenotype acute leukemia with t(9;22)(q34;q11.2); BCR-ABL1"} ,{name:  "Mixed phenotype acute leukemia with t(v;11q23); MLL rearranged"} ,{name:  "Mixed phenotype acute leukemia} ,{name:  B/myeloid} ,{name:  NOS"} ,{name:  "Mixed phenotype acute leukemia} ,{name:  T/myeloid} ,{name:  NOS"} ,{name:  "Mixed phenotype acute leukemia} ,{name:  NOS} ,{name:  rare types"} ,{name:  "Natural killer (NK) cell lymphoblastic leukemia/lymphoma"} ,{name:  ""} ,{name:  "OTHER MYEOLOID LEUKEMIAS"} ,{name:  "Blastic plasmacytoid dendritic cell neoplasm"} ,{name:  "PRECURSOR LYMPHOID NEOPLASMS"} ,{name:  "B lymphoblastic leukemia/lymphoma} ,{name:  NOS"} ,{name:  "B lymphoblastic leukemia/lymphoma with t(9;22)(q34;q11.2); BCR-ABL1"} ,{name:  "B lymphoblastic leukemia/lymphoma with t(v;11q23); MLL rearranged"} ,{name:  "B lymphoblastic leukemia/lymphoma with t(12;21)(p13;q22); TEL-AML1 (ETV6-RUNX1)"} ,{name:  "B lymphoblastic leukemia/lymphoma with hyperdiploidy"} ,{name:  "B lymphoblastic leukemia/lymphoma with hypodiploidy (hypodiploid ALL)"} ,{name:  "B lymphoblastic leukemia/lymphoma with t(5;14)(q31;q32); IL3-IGH"} ,{name:  "B lymphoblastic leukemia/lymphoma with t(1;19)(q23;p13.3); E2A-PBX1 (TCF3-PBX1)"} ,{name:  "T lymphoblastic leukemia/lymphoma"} ,{name:  ""} ,{name:  "MATURE B CELL NEOPLASMS"} ,{name:  "Chronic lymphocytic leukemia/small lymphocytic lymphoma"} ,{name:  "B-cell prolymphocytic leukemia"} ,{name:  "Splenic B-cell marginal zone lymphoma"} ,{name:  "Hairy cell leukemia"} ,{name:  "Splenic B-cell lymphoma/leukemia} ,{name:  unclassifiable"} ,{name:  "Splenic diffuse red pulp small B-cell lymphoma"} ,{name:  "Hairy cell leukemia-variant"} ,{name:  "Lymphoplasmacytic lymphoma"} ,{name:  "Plasma cell myeloma"} ,{name:  "Extranodal marginal zone lymphoma of mucosa-associated lymphoid tissue (MALT lymphoma"} ,{name:  "Follicular lymphoma"} ,{name:  "Mantle cell lymphoma"} ,{name:  "Diffuse large B-cell lymphoma (DLBCL)} ,{name:  NOS"} ,{name:  "T cell/histiocyte-rich large B-cell lymphoma"} ,{name:  "Primary cutaneous DLBCL} ,{name:  leg type"} ,{name:  "Epstein-Barr virus (EBV)-positive DLBCL of the elderly"} ,{name:  "DLBCL associated with chronic inflammation"} ,{name:  "Lymphomatoid granulomatosis"} ,{name:  "Anaplastic lymphoma kinase (ALK)-positive large B-cell lymphoma"} ,{name:  "Plasmablastic lymphoma"} ,{name:  "Large B-cell lymphoma arising in HHV8-associated multicentric Castleman disease"} ,{name:  "Burkitt lymphoma"} ,{name:  "B-cell lymphoma} ,{name:  unclassifiable} ,{name:  with features intermediate between diffuse large B-cell lymphoma and Burkitt lymphoma"} ,{name:  "B-cell lymphoma} ,{name:  unclassifiable} ,{name:  with features intermediate between diffuse large B-cell lymphoma and classical Hodgkin lymphoma"} ,{name:  "B-cell lymphoma} ,{name:  NOS"} ,{name:  ""} ,{name:  "MATURE T AND NK CELL NEOPLASMS"} ,{name:  "T-cell lymphoma} ,{name: "} ,{name:  "T-cell prolymphocytic leukemia"} ,{name:  "T-cell large granular lymphocytic leukemia"} ,{name:  "Chronic lymphoproliferative disorder of NK cells"} ,{name:  "Aggressive NK-cell leukemia "} ,{name:  "Adult T-cell leukemia/lymphoma "} ,{name:  "Extranodal NK/T-cell lymphoma} ,{name:  nasal type"} ,{name:  "Enteropathy-associated T-cell lymphoma"} ,{name:  "Hepatosplenic T-cell lymphoma"} ,{name:  "Mycosis fungoides"} ,{name:  "Peripheral T-cell lymphoma} ,{name:  NOS"} ,{name:  "Angioimmunoblastic T-cell lymphoma"} ,{name:  "Anaplastic large cell lymphoma} ,{name:  ALK-positive"} ,{name:  "Anaplastic large cell lymphoma} ,{name:  ALK-negative"} ,{name:  ""} ,{name:  "HODGKIN LYMPHOMA"} ,{name:  "Nodular lymphocyte predominant Hodgkin lymphoma"} ,{name:  "Classical Hodgkin lymphoma"} ,{name:  ""} ,{name:  "HISTIOCYTIC AND DENDRITIC CELL NEOPLASMS"} ,{name:  "Histiocytic sarcom"} ,{name:  "Langerhans cell histiocytosis"} ,{name:  "Langerhans cell sarcoma"} ,{name:  "Interdigitating dendritic cell sarcoma"} ,{name:  "Follicular dendritic cell sarcoma"} ,{name:  "Disseminated juvenile xanthogranuloma"} ,{name:  "Histiocytic neoplasm} ,{name:  NOS"} ,{name:  ""} ,{name:  "POST-TRANSPLASNT LYMPHOPROLIFERATIVE DISORDERS (PTLD)"} ,{name:  "Plasmacytic hyperplasia"} ,{name:  "Infectious mononucleosis-like PTLD"} ,{name:  "Polymorphic PTLD"} ,{name:  "Monomorphic PTLD (B- and T/NK-cell types)"} ,{name:  "Classical Hodgkin lymphoma type PTLD" }],
            id : "30", name : ""
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      },{
        id : "00", name : "Clinical",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "New diagnosis, untreated"
          }, {
            id : "00", name : "New diagnosis, treatment status unknown"
          }, {
            id : "00", name : "Follow up sample"
          }, {
            id : "00", name : "Unknown"
          } ],
          id : "00", name : ""
        } ]
      
      },{
        id : "00", name : "Peripheral blood cell count",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
          }]
      },{
        id : "00", name : "Marrow cellularity",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
          }]
      },{
        id : "00", name : "Marrow blasts",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
          }]
      },{
        id : "00", name : "Marrow Lymphocytes",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
          }]
      },{
        id : "00", name : "Dysplasia",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Absent "
          }, {
            id : "00", name : "Present "
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      
      },{
        id : "00", name : "Iron stain ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "No ring sideroblasts detected"
          }, {
            id : "00", name : "Positive for ring sideroblasts "
          }, {
            id : "00", name : "Stain not evaluable "
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      
      },{
        id : "00", name : "Reticulin/Trichrome stains (fibrosis grade) ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "MF-0"
          }, {
            id : "00", name : "MF-1"
          }, {
            id : "00", name : "MF-2"
          }, {
            id : "00", name : "MF-3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      
      }, {
        id : "00", name : "Immunohistochemistry",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "Performed",
            inputs_required : [ "" ],
            id : "10", name : ""
          }, {
            id : "00", name : "See separate report"
          }, {
  
            id : "00", name : "See above"
          }, {
            id : "00", name : "Not performed"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Flow cytometry",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "Performed",
            inputs_required : [ "" ],
            id : "10", name : ""
          }, {
            id : "00", name : "See separate report"
          }, {
            id : "00", name : "See above"
          }, {
            id : "00", name : "Not performed"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Cytogenetics (chromosome analysis)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "Performed",
            inputs_required : [ "" ],
            id : "10", name : ""
          }, {
            id : "00", name : "See separate report"
          }, {
            id : "00", name : "Not performed"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Cytogenetics (FISH)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "Performed",
            inputs_required : [ "" ],
            id : "10", name : ""
          }, {
            id : "00", name : "See separate report"
          }, {
            id : "00", name : "Not performed"
          } ],
          id : "00", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "00", name : "Bone marrow, Plasma cell neoplasm",
      optional : true,
      organ_group : "Hematologic",
      properties : [ {
        id : "00", name : "Specimen",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Right posterior iliac crest"
          }, {
            id : "00", name : "Left posterior iliac crest"
          }, {
            id : "00", name : "Sternal"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Aspirate only"
          }, {
            id : "00", name : "Aspirate and clot"
          }, {
            id : "00", name : "Aspirate, clot, and core biopsy"
          }, {
            id : "00", name : "Aspirate, clot, core biopsy, and peripheral smear"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Extent of plasma cell infiltrate",
       optional_state  : "required", "options" : [ {
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Immunoglobulin deposits",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None (negative Congo red stain)"
          }, {
            id : "00", name : "Amyloid present (positive Congo red stain)"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Plasma cell myeloma"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Immunohistochemistry",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "Performed",
            inputs_required : [ "" ],
            id : "10", name : ""
          }, {
            id : "00", name : "See separate report"
          }, {
            id : "00", name : "See above"
          }, {
            id : "00", name : "Not performed"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Flow cytometry",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "Performed",
            inputs_required : [ "" ],
            id : "10", name : ""
          }, {
            id : "00", name : "See separate report"
          }, {
            id : "00", name : "See above"
          }, {
            id : "00", name : "Not performed"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Cytogenetics (chromosome analysis)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "Performed",
            inputs_required : [ "" ],
            id : "10", name : ""
          }, {
            id : "00", name : "See separate report"
          }, {
            id : "00", name : "Not performed"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Cytogenetics (FISH)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "Performed",
            inputs_required : [ "" ],
            id : "10", name : ""
          }, {
            id : "00", name : "See separate report"
          }, {
            id : "00", name : "Not performed"
          } ],
          id : "00", name : ""
        } ]
      } ]
    }, {
      most_common : true,
      id : "00", name : "Breast DCIS",
      optional : false,
      organ_group : "Breast",
      properties : [ {
        id : "00", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Right breast excision"
          }, {
            id : "00", name : "Right breast excision with separate margins"
          }, {
            id : "00", name : "Right breast re-excision"
          }, {
            id : "00", name : "Right mastectomy"
          }, {
            id : "00", name : "Right nipple sparing mastectomy"
          }, {
            id : "00", name : "Left breast excision"
          }, {
            id : "00", name : "Left breast excision with separate margins"
          }, {
            id : "00", name : "Left breast re-excision"
          }, {
            id : "00", name : "Left mastectomy"
          }, {
            id : "00", name : "Left nipple sparing mastectomy"
          } ],
          id : "00", name : ""
        } ]
      }, {
          description : "1 block = 4mm",
        id : "00", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "00", name : ""
        } ]
      }, {
        id : "40", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Ductal carcinoma in situ"
          }, {
            
            id : "00", name : "Paget disease of nipple without DCIS"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "low",
            id : "00", name : "Grade 1/3, low nuclear grade"
          }, {
            description : "intermediate",
            id : "00", name : "Grade 2/3, intermediate nuclear grade"
          }, {
            description : "high",
            id : "00", name : "Grade 3/3, high nuclear grade"
          }, {
            description : "intermediate and high",
            id : "00", name : "Grade 3/3 and 2/3, high and intermediate nuclear grade"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Necrosis",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Present, focal"
          }, {
            id : "00", name : "Present, central/comedo"
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "Free text distance, location, for all tumors 0-2mm from ink, do NOT use terms FREE or POSITIVE",
        id : "00", name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [  {
            id : "00", name : "Free (>2mm)"
          }, {
            description : "location, only use for TUMOR ON ink",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          } ],
           
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymph nodes, # sentinel",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "50", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "> 2mm",
        id : "50", name : "Lymph nodes, # w/ macrometastases",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : ">0.2 mm AND <= 2mm OR > 200 cells",
        id : "50", name : "Lymph nodes, # w/ micrometastases",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "<= 0.2mm AND <= 200 cells",
        id : "50", name : "Lymph nodes, # w/ isolated tumor cells",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "50", name : "Extranodal extension",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Not applicable"
          }, {
            id : "00", name : "None"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Equivocal"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "01", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "00", name : ""
          }, {
            description : "pathologic",
            id : "00", name : "p"
          }, {
            description : "multiple foci of DCIS",
            id : "00", name : "m"
          }, {
            description : "recurrent",
            id : "00", name : "r"
          }, {
            description : "post-treatment",
            id : "00", name : "y"
          }, {
            id : "00", name : "mp"
          }, {
            id : "00", name : "rp"
          }, {
            id : "00", name : "yp"
          }, {
            id : "00", name : "mrp"
          }, {
            id : "00", name : "myp"
          }, {
            id : "00", name : "ryp"
          }, {
            id : "00", name : "mryp"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "02", name : "T",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "DCIS",
            id : "00", name : "Tis"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "03", name : "N",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "00", name : "NX"
          }, {
            description : "No metastases",
            id : "00", name : "N0"
          }, {
            description : "No metastases AND <6 sentinel Nodes",
            id : "00", name : "N0 (sn)"
          }, {
            description : "ITC's <= 0.2 mm AND <= 200 cells (detected by H&E or IHC)",
            id : "00", name : "N0 (i+)"
          }, {
            description : "ITC's <= 0.2 mm AND <= 200 cells (detected by H&E or IHC AND < 6 sentinel nodes)",
            id : "00", name : "N0 (i+) (sn)"
          }, {
            description : "Metastases > 0.2 mm AND <= 2.0 mm OR > 200 cells)",
            id : "00", name : "N1mi"
          }, {
            description : "Metastases > 0.2 mm AND <= 2.0 mm OR > 200 cells) AND < 6 sentinel nodes",
            id : "00", name : "N1mi (sn)"
          }, {
            description : "Metastases in 1 to 3 axillary lymph nodes, at least 1 > 2.0 mm",
            id : "00", name : "N1a"
          }, {
            description : "Metastases in 1 to 3 axillary lymph nodes, at least 1 > 2.0 mm AND < 6 sentinel nodes",
            id : "00", name : "N1a (sn)"
          }, {
            description : "Metastases in 4 to 9 axillary lymph nodes (at least 1 > 2.0 mm)",
            id : "00", name : "N2a"
          }, {
            description : "Metastases in 4 to 9 axillary lymph nodes (at least 1 > 2.0 mm) AND < 6 sentinel nodes",
            id : "00", name : "N2a (sn)"
          }, {
            description : "Metastases in 10 or more axillary lymph nodes (at least 1 > 2.0 mm)",
            id : "00", name : "N3a"
          } ],
          id : "00", name : "Category (pN)"
        }]
        }, {
          id : "04", name : "M",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Distant detectable metastases as histologically proven larger than 0.2 mm",
            id : "00", name : "M1"
          }, {
            id : "00", name : "M (not applicable)"
          }, {
            id : "00", name : "distant metastasis not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
         description : "repeat if original negative or s/p neoadjuvant therapy regardless of original",
        id : "00", name : "Estrogen Receptor",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "20", name :  "Positive, >90% of cells, "
          },{
            id : "20", name :  "Positive  50-90% of cells, "
          },{
            id : "20", name :  "Positive  10-50% of cells, "
          },{
            id : "20", name :  "Positive  1-10% of cells, "
          }, {
            id : "00", name : "Negative (<1%)"
          }, {
            id : "00", name : "Pending"
          }, {
            id : "00", name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            id : "15", name : "See case "
          } ],
          id : "00", name : ""
        } ]
      }, {
         description : "repeat if original negative or s/p neoadjuvant therapy regardless of original",
        id : "00", name : "Progesterone Receptor",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "20", name :  "Positive, >90% of cells, "
          },{
            id : "20", name :  "Positive  50-90% of cells, "
          },{
            id : "20", name :  "Positive  10-50% of cells, "
          },{
            id : "20", name :  "Positive  1-10% of cells, "
          }, {
            id : "00", name : "Negative (<1%)"
          }, {
            id : "00", name : "Pending"
          }, {
            id : "00", name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            id : "10", name : "See case "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Known repeat ER/PR testing",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "No"
          }, {
            id : "00", name : "Yes"
          } ],
          id : "00", name : ""
        } ]
           }, {
        id : "00", name : "Additional findings",
        optional_state : "required",
        "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Biopsy site"
          }, {
            id : "00", name : "Biopsy site x 2"
          }, {
            id : "00", name : "Atypical ductal hyperplasia"
          }, {
            id : "00", name : "Atypical lobular hyperplasia"
          }, { 
            id : "00", name : "Lobular carcinoma in situ, classical type"
          }, { 
            id : "00", name : "Lobular carcinoma in situ, pleomorphic type"
          }, {
            id : "00", name : "Pagets disease"
          }, {
            id : "00", name : "Biopsy site and atypical ductal hyperplasia"
          }, {
            id : "00", name : "Biopsy site, atypical ductal hyperplasia and Pagets disease"
          }, {
            id : "00", name : "Biopsy site and atypical lobular hyperplasia"
          }, {
            id : "00", name : "Biopsy site, atypical lobular hyperplasia and Pagets disease"
          }, {
            id : "00", name : "Biopsy site and lobular carcinoma in situ, classical type"
          }, {
            id : "00", name : "Biopsy site and lobular carcinoma in situ, classical type and Pagets disease"
          }, {
            id : "00", name : "Biopsy site, atypical ductal hyperplasia, and atypical lobular hyperplasia"
          }, {
            id : "00", name : "Biopsy site, atypical ductal hyperplasia, and lobular carcinoma in situ, classical type"
          }, {
            id : "00", name : "Biopsy site, atypical ductal hyperplasia, lobular carcinoma in situ, classical type and Pagets disease"
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "Add billing code 3260F for women, 3260F1P for men",
        id : "00", name : "ICD10",
       optional_state  : "required", "options" : [ {
          group : [ {
             description : " for women",
            id : "00", name : "C50.919"
          },{
             description : " for men",
            id : "00", name : "C50.929"
          } ],
          id : "00", name : ""
        } ]
      } ]
    }, {
      most_common : true,
      id : "00", name : "Breast Invasive",
      optional : false,
      organ_group : "Breast",
      properties : [ {
        id : "00", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Right breast excision"
          }, {
            id : "00", name : "Right breast excision with separate margins"
          }, {
            id : "00", name : "Right breast re-excision"
          }, {
            id : "00", name : "Right mastectomy"
          }, {
            id : "00", name : "Right nipple sparing mastectomy"
          }, {
            id : "00", name : "Left breast excision"
          }, {
            id : "00", name : "Left breast excision with separate margins"
          }, {
            id : "00", name : "Left breast re-excision"
          }, {
            id : "00", name : "Left mastectomy"
          }, {
            id : "00", name : "Left nipple sparing mastectomy"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Invasive ductal carcinoma"
          }, {
            id : "00", name : "Invasive lobular carcinoma, classical type"
          }, {
            id : "00", name : "Invasive lobular carcinoma, pleomorphic type"
          }, {
            id : "00", name : "Invasive carcinoma with both ductal and lobular features"
          }, {
            id : "00", name : "Micro-invasive carcinoma"
          }, {
            id : "00", name : "Mucinous carcinoma"
          }, {
            id : "00", name : "Invasive ductal carcinoma with mucinous features"
          }, {
            id : "00", name : "Invasive ductal carcinoma and mucinous carcinoma"
          }, {
            id : "00", name : "Invasive tubular carcinoma"
          }, {
            id : "00", name : "Invasive ductal carcinoma with tubular features"
          }, {
            id : "00", name : "Invasive tubulo-lobular carcinoma"
          }, {
            id : "00", name : "Invasive cribiform carcinoma"
          }, {
            id : "00", name : "Invasive carcinoma with micropapillary features"
          }, {
            id : "00", name : "Invasive papillary carcinoma"
          }, {
            id : "00", name : "Medullary carcinoma"
          }, {
            id : "00", name : "Metaplastic carcinoma"
          }, {
            id : "00", name : "Adenoid cystic carcinoma"
          }, {
            id : "00", name : "Secretory carcinoma"
          }, {
            id : "00", name : "Invasive carcinoma with basaloid features"
          }, {
            description : "T0, no residual tumor",
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tubule formation",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : ">75%",
            id : "80", name : "Score 1"
          }, {
            description : "10% to 75%",
            id : "81", name : "Score 2"
          }, {
            description : "<10%",
            id : "82", name : "Score 3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Nuclear pleomorphism",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "nuclei small",
            id : "83", name : "Score 1"
          }, {
            description : "cells larger than normal",
            id : "84", name : "Score 2"
          }, {
            description : "prominent nucleoli, marked variation",
            id : "85", name : "Score 3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Mitotic rate",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "<=3 mitoses per mm2",
            id : "86", name : "Score 1"
          }, {
            description : "4-7 mitoses per mm2",
            id : "87", name : "Score 2"
          }, {
            description : ">8 mitoses per mm2",
            id : "88", name : "Score 3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
     
      }, {
        id : "00", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "scores of 3, 4, or 5",
            id : "00", name : "Nottingham grade 1/3"
          }, {
            description : "scores of 6 or 7",
            id : "00", name : "Nottingham grade 2/3"
          }, {
            description : "scores of 8 or 9",
            id : "00", name : "Nottingham grade 3/3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
         description : "Give size if only microinvasive",
        id : "00", name : "DCIS",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
             description : "use for mastectomy; try to use Extensive/nonextensive for excision",
            id : "00", name : "Present"
          }, {
             description : "excision specimen, DCIS >25% of main mass AND extends beyond invasive tumor",
            id : "00", name : "Extensive intraductal component present"
          }, {
              description : "excision specimen, DCIS <25% of main mass OR does not extends beyond invasive tumor",
            id : "00", name : "Present, but NOT extensive"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      
      }, {
        id : "00", name : "Skin involvement",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Not applicable"
          }, {
            description : "this does not change the T stage",
            id : "00", name : "Invades into the dermis without ulceration"
          }, {
            description : "this does not change the T stage",
            id : "00", name : "Invades into the epidermis without ulceration"
          }, {
            description : "classified as T4b",
            id : "68", name : "Invades into the dermis with ulceration"
          }, {
            description : "classified as T4b",
            id : "68", name : "Invades into the epidermis with ulceration"
          }, {
            description : "classified as T4b",
            id : "68", name : "Satellite skin foci are present"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Nipple involvement",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Not applicable"
          }, {
            id : "00", name : "Paget disease of the nipple"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Muscle involvement",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Not applicable"
          }, {
            id : "00", name : "Carcinoma invades skeletal muscle"
          }, {
            description : "classified as T4a",
            id : "00", name : "Carcinoma invades chest wall"
          } ],
          id : "00", name : ""
        } ]
      }, {
         description : "Free text distance, location, for all tumors 0-2mm from ink, do not use terms FREE or POSITIVE",
        id : "00", name : "Margins, invasive tumor",
       optional_state  : "required", "options" : [ {
          group : [  {
            id : "00", name : "Free (>2mm)"
          }, {
            description : "location, only use for TUMOR ON INK",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          }, {
            description : "T0, no residual tumor",
            id : "00", name : "Not applicable"
          } ],
          
          id : "00", name : ""
        } ]
      }, {
         description : "Free text distance, location, for all tumors 0-2mm from ink, do not use term FREE or POSITIVE",
        id : "00", name : "Margins, DCIS",
       optional_state  : "required", "options" : [ {
          group : [  {
            id : "00", name : "Free (>2mm)"
          }, {
            description : "location, only for TUMOR ON INK",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          }, {
            id : "00", name : "Not applicable"
          } ],
          
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymph nodes, # sentinel",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "50", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "> 2mm",
        id : "50", name : "Lymph nodes, # w/ macrometastases",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : ">0.2 mm AND <= 2mm OR > 200 cells",
        id : "50", name : "Lymph nodes, # w/ micrometastases",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "<= 0.2mm and < 200 cells",
        id : "50", name : "Lymph nodes, # w/ isolated tumor cells",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
       }, {
        id : "50", name : "Size of largest metastasis",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
          }]
      }, {
        id : "50", name : "Extranodal Extension ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Not applicable"
          }, {
            id : "00", name : "None"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Equivocal"
          } ],
          id : "00", name : ""
          }]
        }, {
        id : "50", name : "Metastasis detection method ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Not applicable"
          }, {
            id : "00", name : "Frozen section/intra-operative smear"
          }, {
            description : "First H&E",
            id : "00", name : "Routine H&E"
          }, {
             description : "2nd or more levels",
            id : "00", name : "Serial H&E"
          }, {
           id : "00", name : "Serial H&E and IHC"
         }, {
            id : "00", name : "IHC only"
          }, {
            id : "00", name : "Other"
          } ],
          id : "00", name : ""
          }]
        }, {
        id : "00", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Indeterminate"
          }, {
            id : "00", name : "Suspicious"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Present, extensive"
          }, {
            id : "00", name : "Present, including dermal LVI"
          } ],
          id : "00", name : ""
        } ]
   
      }, {
        id : "00", name : "Treatment effect, primary site",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "17", name : "Not applicable"
          }, {
            id : "00", name : "No definite response"
          }, {
            id : "00", name : "Probable or definite response"
          } , {
            id : "00", name : "Not known"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "50", name : "Treatment effect, lymph nodes",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Not applicable"
          }, {
            id : "00", name : "No definite response"
          }, {
            id : "00", name : "Fibrous scarring with metastases"
          }, {
            id : "00", name : "Fibrous scarring without metastases"
          }, {
            id : "00", name : "Fibrous scarring (treatment effect) and biopsy site with metastases"
          }, {
            id : "00", name : "Fibrous scarring (treatment effect) and biopsy site without metastases"
          }, {
            id : "00", name : "No fibrous scarring or metastases"
          }, {
            id : "00", name : "Not known"
          }  ],
          id : "00", name : ""
        } ]
      }, {
        id : "01", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "00", name : ""
          }, {
            description : "pathologic",
            id : "00", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "00", name : "m"
          }, {
            description : "recurrent",
            id : "00", name : "r"
          }, {
            description : "post-treatment",
            id : "00", name : "y"
          }, {
            id : "00", name : "mp"
          }, {
            id : "00", name : "rp"
          }, {
            id : "00", name : "yp"
          }, {
            id : "00", name : "mrp"
          }, {
            id : "00", name : "myp"
          }, {
            id : "00", name : "ryp"
          }, {
            id : "00", name : "mryp"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "02", name : "T",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "No residual tumor, s/p neoadjuvant treatment",
            id : "00", name : "T0"
          }, {
            description : "DCIS only, s/p neoadjuvant treament",
            id : "00", name : "Tis"
          }, {
            description : "Tumor <= 1 mm",
            id : "00", name : "T1mi"
          }, {
            description : "Tumor > 1 mm AND <= 5 mm",
            id : "00", name : "T1a"
          }, {
            description : "Tumor > 5 mm AND <= 10 mm",
            id : "00", name : "T1b"
          }, {
            description : "Tumor > 10 mm AND <= 20 mm",
            id : "00", name : "T1c"
          }, {
            description : "Tumor > 20 mm AND <= 50 mm",
            id : "00", name : "T2"
          }, {
            description : "Tumor > 50 mm",
            id : "00", name : "T3"
          }, {
            description : "Extension to chest wall, not including only pectoralis muscle",
            id : "00", name : "T4a"
          }, {
            description : "Ulceration and/or ipsilateral satellite nodules and/or edema (including peau d'orange) of the skin which do not meet the criteria for inflammatory carcinoma",
            id : "00", name : "T4b"
          }, {
            description : "Both T4a and T4b",
            id : "00", name : "T4c"
          }, {
            description : "Inflammatory carcinoma",
            id : "00", name : "T4d"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "03", name : "N",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "00", name : "NX"
          }, {
            description : "No metastases",
            id : "00", name : "N0"
          }, {
            description : "No metastases AND <6 sentinel Nodes",
            id : "00", name : "N0 (sn)"
          }, {
            description : "ITC's <= 0.2 mm AND <= 200 cells (detected by H&E or IHC)",
            id : "00", name : "N0 (i+)"
          }, {
            description : "ITC's <= 0.2 mm AND <= 200 cells (detected by H&E or IHC AND < 6 sentinel nodes)",
            id : "00", name : "N0 (i+) (sn)"
          }, {
            description : "Metastases > 0.2 mm AND <= 2.0 mm OR > 200 cells)",
            id : "00", name : "N1mi"
          }, {
            description : "Metastases > 0.2 mm AND <= 2.0 mm OR > 200 cells) AND < 6 sentinel nodes",
            id : "00", name : "N1mi (sn)"
          }, {
            description : "Metastases in 1 to 3 axillary lymph nodes, at least 1 > 2.0 mm",
            id : "00", name : "N1a"
          }, {
            description : "Metastases in 1 to 3 axillary lymph nodes, at least 1 > 2.0 mm AND < 6 sentinel nodes",
            id : "00", name : "N1a (sn)"
          }, {
            description : "Metastases in 4 to 9 axillary lymph nodes (at least 1 > 2.0 mm)",
            id : "00", name : "N2a"
          }, {
            description : "Metastases in 4 to 9 axillary lymph nodes (at least 1 > 2.0 mm) AND < 6 sentinel nodes",
            id : "00", name : "N2a (sn)"
          }, {
            description : "Metastases in 10 or more axillary lymph nodes (at least 1 > 2.0 mm)",
            id : "00", name : "N3a"
          } ],
          id : "00", name : "Category (pN)"
        }]
        }, {
          id : "04", name : "M",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Distant detectable metastasis as histologically proven larger than 0.2 mm",
            id : "00", name : "M1"
          }, {
            id : "00", name : "M (not applicable)"
          }, {
            id : "00", name : "distant metastasis not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
         description : "repeat if original negative or s/p neoadjuvant therapy regardless of original",
        id : "00", name : "Estrogen Receptor",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "20", name :  "Positive, >90% of cells, "
          },{
            id : "20", name :  "Positive  50-90% of cells, "
          },{
            id : "20", name :  "Positive  10-50% of cells, "
          },{
            id : "20", name :  "Positive  1-10% of cells, "
          }, {
            id : "00", name : "Negative (<1%)"
          }, {
            id : "00", name : "Pending"
          }, {
            id : "00", name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            id : "16", name : "See case "
          } ],
          id : "00", name : ""
        } ]
      }, {
         description : "repeat if original negative or s/p neoadjuvant therapy regardless of original",
        id : "00", name : "Progesterone Receptor",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "20", name :  "Positive, >90% of cells, "
          },{
            id : "20", name :  "Positive  50-90% of cells, "
          },{
            id : "20", name :  "Positive  10-50% of cells, "
          },{
            id : "20", name :  "Positive  1-10% of cells, "
          }, {
            id : "00", name : "Negative (<1%)"
          }, {
            id : "00", name : "Pending"
          }, {
            id : "00", name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            id : "10", name : "See case "
          } ],
          id : "00", name : ""
        } ]
      }, {
         description : "repeat if original triple negative or s/p neoadjuvant therapy regardless of original",
        id : "00", name : "Her2Neu by IHC",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Positive (3+)"
          }, {
            id : "00", name : "Negative (0-1+)"
          }, {
            id : "00", name : "Equivocal (2+)"
          }, {
            id : "00", name : "Pending"
          }, {
            id : "00", name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            id : "10", name : "See case "
          } ],
          id : "00", name : ""
        } ]
      }, {
          description : "repeat if original triple negative or s/p neoadjuvant therapy regardless of original",
        id : "00", name : "Her2Neu by FISH",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Positive, "
          }, {
            id : "00", name : "Negative"
          }, {
            id : "00", name : "Equivocal"
          }, {
            id : "00", name : "Reflex pending if appropriate"
          }, {
            id : "00", name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            id : "10", name : "See case "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Known repeat ER/PR testing",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "No"
          }, {
            id : "00", name : "Yes"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Known repeat Her2Neu testing",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "No"
          }, {
            id : "00", name : "Yes"
          } ],
          id : "00", name : ""
        } ]
           }, {
  
        id : "00", name : "Additional findings",
        optional_state : "required",
        "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Biopsy site"
          }, {
            id : "00", name : "Biopsy site x 2"
          }, {
            id : "00", name : "Atypical ductal hyperplasia"
          }, {
            id : "00", name : "Atypical lobular hyperplasia"
          }, {
            id : "00", name : "Lobular carcinoma in situ, classical type"
          }, {
            id : "00", name : "Lobular carcinoma in situ, pleomorphic type"
          }, {
            id : "00", name : "Pagets disease"
          }, {
            id : "00", name : "Biopsy site and atypical ductal hyperplasia"
          }, {
            id : "00", name : "Biopsy site, atypical ductal hyperplasia and Pagets disease"
          }, {
            id : "00", name : "Biopsy site and atypical lobular hyperplasia"
          }, {
            id : "00", name : "Biopsy site, atypical lobular hyperplasia and Pagets disease"
          }, {
            id : "00", name : "Biopsy site and lobular carcinoma in situ, classical type"
          }, {
            id : "00", name : "Biopsy site and lobular carcinoma in situ, classical type and Pagets disease"
          }, {
            id : "00", name : "Biopsy site, atypical ductal hyperplasia, and atypical lobular hyperplasia"
          }, {
            id : "00", name : "Biopsy site, atypical ductal hyperplasia, and lobular carcinoma in situ, classical type"
          }, {
            id : "00", name : "Biopsy site, atypical ductal hyperplasia, lobular carcinoma in situ, classical type and Pagets disease"
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "Add billing code 3260F for women, 3260F1P for men",
        id : "00", name : "ICD10",
       optional_state  : "required", "options" : [ {
          group : [ {
             description : " for women",
            id : "00", name : "C50.919"
          },{
             description : " for men",
            id : "00", name : "C50.929"
          } ],
          id : "00", name : ""
        } ]
      
      } ]
    }, {
      biopsy_type : "Invasive",
      most_common : false,
      id : "00", name : "Breast biopsy",
      optional : true,
      organ_group : "Breast",
      properties : [ { id : "00", name : "Location",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Right"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Left"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Procedure",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            id : "00", name : "Core needle biopsy"
          }, {
            id : "00", name : "Stereotactic core needle biopsy"
          }, {
            id : "00", name : "Ultrasound guided core needle biopsy"
          }, {
            id : "00", name : "MRI guided core needle biopsy"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Type",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            id : "00", name : "Invasive ductal carcinoma"
          }, {
            id : "00", name : "Invasive lobular carcinoma"
          }, {
            id : "00", name : "Invasive lobular carcinoma, pleomorphic type"
          }, {
            id : "00", name : "Invasive carcinoma with both ductal and lobular features"
          }, {
            id : "00", name : "Invasive mammary carcinoma"
          }, {
            id : "00", name : "Micro-invasive carcinoma"
          }, {
            id : "00", name : "Mucinous carcinoma"
          }, {
            id : "00", name : "Invasive ductal carcinoma with mucinous carcinoma features"
          }, {
            id : "00", name : "Tubular carcinoma"
          }, {
            id : "00", name : "Invasive ductal carcinoma with tubular carcinoma features"
          }, {
            id : "00", name : "Invasive tubulo-lobular carcinoma"
          }, {
            id : "00", name : "Invasive cribiform carcinoma"
          }, {
            id : "00", name : "Invasive carcinoma with micropapillary features"
          }, {
            id : "00", name : "Invasive papillary carcinoma"
          }, {
            id : "00", name : "Medullary carcinoma"
          }, {
            id : "00", name : "Metaplastic carcinoma"
          }, {
            id : "00", name : "Adenoid cystic carcinoma"
          }, {
            id : "00", name : "Secretory carcinoma"
          }, {
            id : "00", name : "Invasive carcinoma with basaloid features"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            inputs_required : [ "" ],
            id : "10", name : "At least"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Grade",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            description : "Scores of 3, 4, or 5",
            id : "00", name : "Well differentiated"
          }, {
            description : "Scores of 3, 4, or 5",
            id : "00", name : "At least well differentiated"
          }, {
            description : "Scores of 5 or 6",
            id : "00", name : "Well to moderately differentiated"
          }, {
            description : "Scores of 6 or 7",
            id : "00", name : "Moderately differentiated"
          }, {
            description : "Scores of 6 or 7",
            id : "00", name : "At least moderately differentiated"
          }, {
            description : "Scores of 7 or 8",
            id : "00", name : "Moderately to poorly differentiated"
          }, {
            description : "Scores of 8 or 9",
            id : "00", name : "Poorly differentiated"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Indeterminate"
          }, {
            id : "00", name : "Suspicious"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Not applicable"
          }, {
            id : "00", name : "Present, extensive"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "DCIS",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            id : "00", name : "High grade with calcifications and necrosis"
          }, {
            id : "00", name : "High grade with calcifications"
          }, {
            id : "00", name : "High grade with necrosis"
          }, {
            id : "00", name : "High grade"
          }, {
            id : "00", name : "Intermediate grade with calcifications"
          }, {
            id : "00", name : "Intermediate grade"
          }, {
            id : "00", name : "Low grade with calcifications"
          }, {
            id : "00", name : "Low grade"
          }, {
            id : "00", name : "cannot be ruled out"
          }, {
            id : "00", name : "None"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
         description : "MULTI-SELECT",
        id : "00", name : "Additional findings",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Atypical ductal hyperplasia"
          }, {
            id : "00", name : "Atypical ductal hyperplasia with calcifications"
          }, {
            id : "00", name : "Atypical lobular hyperplasia"
          }, {
            id : "00", name : "Atypical lobular hyperplasia with calcifications"
          }, {
            id : "00", name : "Atypical lobular hyperplasia/lobular carcinoma in situ, classical type"
          }, {
            id : "00", name : "Atypical lobular hyperplasia/lobular carcinoma in situ, classical type with calcifications"
          }, {
            id : "00", name : "Lobular carcinoma in situ, classical type"
          }, {
            id : "00", name : "Lobular carcinoma in situ, classical type with calcifications"
          }, {
            id : "00", name : "Lobular carcinoma in situ, pleomorphic type"
          }, {
            id : "00", name : "Lobular carcinoma in situ, pleomorphic type with calcifications"
          }, {
            id : "00", name : "In situ carcinoma with both ductal and lobular features"
          }, {
            id : "00", name : "In situ carcinoma with both ductal and lobular features with calcifications"
          }, {
            id : "00", name : "Flat epithelial atypia"
          }, {
            id : "00", name : "Flat epithelial atypia with calcifications"
          }, {
            id : "00", name : "Fibrocystic changes"
          }, {
            id : "00", name : "Fibrocystic changes with calcifications"
          }, {
            id : "00", name : "Fibrocystic changes, including large cysts"
          }, {
            id : "00", name : "Fibrocystic changes, including large cysts, with calcifications"
          }, {
            id : "00", name : "Fibrocystic changes, including radial scar/complex sclerosing lesion"
          }, {
            id : "00", name : "Fibrocystic changes, including radial scar/complex sclerosing lesion, with calcifications"
          }, {
            id : "00", name : "Fibrocystic changes, including benign papilloma"
          }, {
            id : "00", name : "Fibrocystic changes, including benign papilloma, with calcifications"
          }, {
            id : "00", name : "Fibroadenoma"
          }, {
            id : "00", name : "Fibroadenoma, with calcifications"
          }, {
            id : "00", name : "Metastatic carcinoma in axillary lymph node"
          }, {
            id : "00", name : "Metastatic carcinoma in axillary biopsy"
          }, {
            id : "00", name : "Benign protion of a lymph node in axillary biopsy"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Estrogen Receptor",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            id : "00", name : "Pending"
          }, {
            id : "20", name :  "Positive, >90% of cells, "
          },{
            id : "20", name :  "Positive  50-90% of cells, "
          },{
            id : "20", name :  "Positive  10-50% of cells, "
          },{
            id : "20", name :  "Positive  1-10% of cells, "
          }, {
            id : "00", name : "Negative (<1%)"
          }, {
            id : "00", name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            id : "10", name : "See case "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Progesterone Receptor",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            id : "00", name : "Pending"
          }, {
            id : "20", name :  "Positive, >90% of cells, "
          },{
            id : "20", name :  "Positive  50-90% of cells, "
          },{
            id : "20", name :  "Positive  10-50% of cells, "
          },{
            id : "20", name :  "Positive  1-10% of cells, "
          }, {
            id : "00", name : "Negative (<1%)"
          }, {
            id : "00", name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            id : "10", name : "See case "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Her2Neu by IHC",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            id : "00", name : "Pending"
          }, {
            id : "00", name : "Positive (3+)"
          }, {
            id : "00", name : "Negative (0-1+)"
          }, {
            id : "00", name : "Equivocal (2+)"
          }, {
            id : "00", name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            id : "10", name : "See case "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Her2Neu by FISH",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            id : "00", name : "Positive, "
          }, {
            id : "00", name : "Negative"
          }, {
            id : "00", name : "Equivocal"
          }, {
            id : "00", name : "Reflex pending if appropriate"
          }, {
            id : "00", name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            id : "10", name : "See case "
          } ],
          id : "00", name : ""
        } ]
      } ]
    }, {
      biopsy_type : "DCIS",
      most_common : false,
      id : "00", name : "Breast biopsy",
      optional : true,
      organ_group : "Breast",
      properties : [  {
         id : "00", name : "Location",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Right"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Left"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Procedure",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            id : "00", name : "Core needle biopsy"
          }, {
            id : "00", name : "Stereotactic core needle biopsy"
          }, {
            id : "00", name : "Ultrasound guided core needle biopsy"
          }, {
            id : "00", name : "MRI guided core needle biopsy"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Type",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            id : "00", name : "Ductal carcinoma in situ (DCIS)"
          }, {
            id : "00", name : "Ductal carcinoma in situ (DCIS), invasion cannot be ruled out"
          }, {
            id : "00", name : "Ductal carcinoma in situ (DCIS), see note"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Subtype",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            id : "00", name : "Comedo type"
          }, {
            id : "00", name : "Solid type"
          }, {
            id : "00", name : "Cribriform type"
          }, {
            id : "00", name : "Solid and cribriform type"
          }, {
            id : "00", name : "Micropapillary type"
          }, {
            id : "00", name : "Cribriform and micropapillary type"
          }, {
            id : "00", name : "Flat (clinging) type"
          }, {
            id : "00", name : "Solid-papillary type"
          }, {
            id : "00", name : "Papillary and cribriform type"
          }, {
            id : "00", name : "Comedo type, with areas suspicious for invasion"
          }, {
            id : "00", name : "Solid type, with areas suspicious for invasion"
          }, {
            id : "00", name : "Solid-papillary type, with areas suspicious for invasion"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Grade",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            id : "00", name : "Low nuclear grade"
          }, {
            id : "00", name : "Low to intermediate nuclear grade"
          }, {
            id : "00", name : "Intermediate nuclear grade"
          }, {
            id : "00", name : "Intermediate to high nuclear grade"
          }, {
            id : "00", name : "High nuclear grade"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Calcifications",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Calcium oxalate present"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Necrosis",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Present, focal"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
         description : "MULTI-SELECT",
        id : "00", name : "Additional findings",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Atypical ductal hyperplasia"
          }, {
            id : "00", name : "Atypical ductal hyperplasia with calcifications"
          }, {
            id : "00", name : "Atypical lobular hyperplasia"
          }, {
            id : "00", name : "Atypical lobular hyperplasia with calcifications"
          }, {
            id : "00", name : "Atypical lobular hyperplasia/lobular carcinoma in situ, classical type"
          }, {
            id : "00", name : "Atypical lobular hyperplasia/lobular carcinoma in situ, classical type with calcifications"
          }, {
            id : "00", name : "Lobular carcinoma in situ, classical type"
          }, {
            id : "00", name : "Lobular carcinoma in situ, classical type with calcifications"
          }, {
            id : "00", name : "Lobular carcinoma in situ, pleomorphic type"
          }, {
            id : "00", name : "Lobular carcinoma in situ, pleomorphic type with calcifications"
          }, {
            id : "00", name : "In situ carcinoma with both ductal and lobular features"
          }, {
            id : "00", name : "In situ carcinoma with both ductal and lobular features with calcifications"
          }, {
            id : "00", name : "Flat epithelial atypia"
          }, {
            id : "00", name : "Flat epithelial atypia with calcifications"
          }, {
            id : "00", name : "Fibrocystic changes"
          }, {
            id : "00", name : "Fibrocystic changes with calcifications"
          }, {
            id : "00", name : "Fibrocystic changes, including large cysts"
          }, {
            id : "00", name : "Fibrocystic changes, including large cysts, with calcifications"
          }, {
            id : "00", name : "Fibrocystic changes, including radial scar/complex sclerosing lesion"
          }, {
            id : "00", name : "Fibrocystic changes, including radial scar/complex sclerosing lesion, with calcifications"
          }, {
            id : "00", name : "Fibrocystic changes, including benign papilloma"
          }, {
            id : "00", name : "Fibrocystic changes, including benign papilloma, with calcifications"
          }, {
            id : "00", name : "Fibroadenoma"
          }, {
            id : "00", name : "Fibroadenoma, with calcifications"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Estrogen Receptor",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            id : "00", name : "Pending"
          }, {
            id : "20", name :  "Positive, >90% of cells, "
          },{
            id : "20", name :  "Positive  50-90% of cells, "
          },{
            id : "20", name :  "Positive  10-50% of cells, "
          },{
            id : "20", name :  "Positive  1-10% of cells, "
          }, {
            id : "00", name : "Negative (<1%)"
          }, {
            id : "00", name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            id : "10", name : "See case "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Progesterone Receptor",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            id : "00", name : "Pending"
          }, {
            id : "20", name :  "Positive, >90% of cells, "
          },{
            id : "20", name :  "Positive  50-90% of cells, "
          },{
            id : "20", name :  "Positive  10-50% of cells, "
          },{
            id : "20", name :  "Positive  1-10% of cells, "
          }, {
            id : "00", name : "Negative (<1%)"
          }, {
            id : "00", name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            id : "10", name : "See case "
          } ],
          id : "00", name : ""
        } ]
      } ]
    }, {
      biopsy_type : "Other",
      most_common : false,
      id : "00", name : "Breast biopsy",
      optional : true,
      organ_group : "Breast",
      properties : [ {
        id : "00", name : "Location",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Right"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Left"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Procedure",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            id : "00", name : "Core needle biopsy"
          }, {
            id : "00", name : "Stereotactic core needle biopsy"
          }, {
            id : "00", name : "Ultrasound guided core needle biopsy"
          }, {
            id : "00", name : "MRI guided core needle biopsy"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Diagnosis/Type",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            id : "00", name : "Suspicious for invasive carcinoma, recommend excision for definitive classification"
          }, {
            id : "00", name : "Atypical ductal hyperplasia, recommend excision for definitive classification"
          }, {
            id : "00", name : "Atypical ductal hyperplasia with calcifications, recommend excision for definitive classification"
          }, {
            id : "00", name : "Atypical ductal hyperplasia and lobular neoplasia, recommend excision for definitive classification"
          }, {
            id : "00", name : "Atypical ductal hyperplasia and lobular neoplasia with calcifications, recommend excision for definitive classification"
          }, {
            id : "00", name : "Lobular carcinoma in situ, pleomorphic type, recommend excision for definitive classification"
          }, {
            id : "00", name : "Lobular carcinoma in situ, pleomorphic type with calcifications, recommend excision for definitive classification"
          }, {
            id : "00", name : "Atypical lobular hyperplasia/lobular carcinoma in situ, classical type"
          }, {
            id : "00", name : "Atypical lobular hyperplasia/lobular carcinoma in situ, classical type with calcifications"
          }, {
            id : "00", name : "Flat epithelial atypia, recommend excision for definitive classification"
          }, {
            id : "00", name : "Flat epithelial atypia with calcifications, recommend excision for definitive classification"
          }, {
            id : "00", name : "Atypical papillary lesion, recommend excision for definitive classification"
          }, {
            id : "00", name : "Atypical papillary lesion with calcifications, recommend excision for definitive classification"
          }, {
            id : "00", name : "Atypical mucinous lesion, recommend excision for definitive classification"
          }, {
            id : "00", name : "Atypical mucinous lesion with calcifications, recommend excision for definitive classification"
          }, {
            id : "00", name : "Hypercellular fibroepithelial lesion, recommend excision for definitive classification"
          }, {
            id : "00", name : "Fibrocystic changes with atypia, NOS"
          }, {
            id : "00", name : "Fibrocystic changes"
          }, {
            id : "00", name : "Fibrocystic changes with calcifications"
          }, {
            id : "00", name : "Fibrocystic changes, including large cysts"
          }, {
            id : "00", name : "Fibrocystic changes, including large cysts with calcifications"
          }, {
            id : "00", name : "Fibrocystic changes, including radial scar/complex sclerosing lesion"
          }, {
            id : "00", name : "Fibrocystic changes, including radial scar/complex sclerosing lesion with calcifications"
          }, {
            id : "00", name : "Fibrocystic changes, including benign papilloma"
          }, {
            id : "00", name : "Fibrocystic changes, including benign papilloma with calcifications"
          }, {
            id : "00", name : "Fibrocystic changes, including pseudoangiomatous hyperplasia (PASH)"
          }, {
            id : "00", name : "Fibroadenoma"
          }, {
            id : "00", name : "Fibroadenoma with calcifications"
          } ],
          id : "00", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "00", name : "Central Nervous System",
      optional : true,
      organ_group : "Central Nervous System",
      properties : [ {
        id : "00", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Skull "
          }, {
            id : "00", name : "Dura "
          }, {
            id : "00", name : "Right frontal"
          }, {
            id : "00", name : "Left frontal"
          }, {
            id : "00", name : "Right temporal"
          }, {
            id : "00", name : "Left temporal"
          }, {
            id : "00", name : "Right parietal"
          }, {
            id : "00", name : "Left parietal"
          }, {
            id : "00", name : "Right sagittal"
          }, {
            id : "00", name : "Left sagittal"
          }, {
            id : "00", name : "Occipital"
          }, {
            id : "00", name : "Right cerebellopontine angle"
          }, {
            id : "00", name : "Left cerebellopontine angle"
          }, {
            id : "00", name : "Sellar/suprasellar/pituitary"
          }, {
            description : "which",
            inputs_required : [ "" ],
            id : "10", name : "Cranial nerve "
          }, {
            description : "which",
            inputs_required : [ "" ],
            id : "10", name : "Ventricle"
          }, {
            id : "00", name : "Brain stem "
          }, {
            id : "00", name : "Spine "
          }, {
            id : "00", name : "Spinal Cord"
          }, {
            description : "which",
            inputs_required : [ "" ],
            id : "10", name : "Spinal nerve root(s) "
          }, {
            description : "which",
            inputs_required : [ "" ],
            id : "10", name : "Peripheral nerve "
          }, {
            description : "which",
            inputs_required : [ "" ],
            id : "10", name : "Ganglion"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Open biopsy"
          }, {
            id : "00", name : "Stereotactic biopsy"
          }, {
            id : "00", name : "Resection"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Type (WHO)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "IMPOX: IDH + (mutant), MGMT +/-, p53 +, ATRX - (mutant), 1p/19q wild type",
            id : "00", name : "Diffuse astrocytoma, IDH-mutant"
          }, {
            description : "mitoses, IMPOX: IDH + (mutant), MGMT +/-, p53 +, ATRX - (mutant), 1p/19q wild type",
            id : "00", name : "Anaplastic astrocytoma, IDH-mutant"
          }, {
            description : "necrosis or vasc prolif, IMPOX: IDH - (wild type), ATRX + (wild type), MGMT +/-, p53 -, EGFR amplification +, TERT + , 1p/19q wild type",
            id : "00", name : "Glioblastoma, IDH-wild type"
          }, {
            description : "necrosis or vasc prolif, IMPOX: IDH + (mutant), ATRX - (mutant), MGMT +/-, p53 +, EGFR amplification -, TERT - , 1p/19q wild type",
            id : "00", name : "Glioblastoma, IDH-mutant"
          }, {
            description : "IMPOX: 1p/19q codeleted, IDH + (mutant), p53 -/+, MGMT +, ATRX + (wild type) , TERT +, Ki67 <5%",
            id : "00", name : "Oligodendroglioma, IDH-mutant, 1p/19q codeleted"
          }, {
            description : "atypia, cellularity, mitoses, IMPOX: 1p/19q codeleted, IDH + (mutant), p53 -, MGMT +, ATRX + (wild type), TERT +, Ki67 >5%",
            id : "00", name : "Anaplastic oligodendroglioma IDH-mutant, 1p/19q codeleted"
          }, {
            description : "rare mitoses and necrosis, IMPOX: IDH - (wild type), p53 -, BRAF V600E +",
            id : "00", name : "Pleomorphic xanthoastrocytoma"
          }, {
            description : "IMPOX: IDH - (wild type), p53 -",
            id : "00", name : "Pilocytic astrocytoma"
          }, {
            description : "GFAP+, s100+, EMA +",
            id : "00", name : "Ependymoma"
          }, {
            description : "GFAP+, s100+, EMA +",
            id : "00", name : "Myxopapillary ependymoma"
          }, {
            description : "IMPOX: IDH1 - (wild type), synaptophysin +, GFAP -/focal, p53 -",
            id : "00", name : "Central neurocytoma"
          }, {
            description : "WNT activatied OR SHH activated OR group 3 OR group 4 IMPOX: synaptophysin +, beta catenin +, p53 +/-, Ki67 +",
            id : "00", name : "Medulloblastoma"
          }, {
            description : "IMPOX: s100+, EMA -, PR -",
            id : "00", name : "Schwannoma"
          }, {
            description : " grade 1/3, IMPOX: s100-, EMA +, PR +, NF1/NF2 mutations",
            id : "00", name : "Meningioma"
          }, {
            description : " grade 2/3, mitoses >=4/10hpf OR ki67 >4% OR brain invasion OR (3 of increased cellularity, small cell change, nucleoli, sheeting, necrosis) OR clear cell OR Chordoid,  IMPOX: s100-, EMA +, PR +, NF1/NF2 mutations",
            id : "00", name : "Atypical meningioma"
          }, {
            description : "grade 3/3, malignant cytology OR mitoses> 20/10 hpf OR Ki67>20% OR Papillary OR Rhabdoid, IMPOX: s100-, EMA +, PR +, NF1/NF2 mutations",
            id : "00", name : "Anaplastic (malignant) meningioma"
          }, {
            description : "IMPOX: chromogranin +, synaptophysin +",
            id : "00", name : "Pituitary adenoma"
          }, {
            description : "Extended list",
            inputs_required : [ { name: "ASTROCYTIC TUMORS"} ,{name:  "Pilocytic astrocytoma (WHO grade I)"} ,{name:  "Pilomyxoid astrocytoma (WHO grade II) "} ,{name:  "Subependymal giant cell astrocytoma (WHO grade I)"} ,{name:  "Pleomorphic xanthoastrocytoma (WHO grade II)"} ,{name:  "Pleomorphic xanthoastrocytoma with anaplastic features (WHO grade not assigned) "} ,{name:  "Diffuse astrocytoma (WHO grade II)"} ,{name:  "Fibrillary astrocytoma (WHO grade II)"} ,{name:  "Protoplasmic astrocytoma (WHO grade II)"} ,{name:  "Gemistocytic astrocytoma (WHO grade II)"} ,{name:  "Anaplastic astrocytoma (WHO grade III)"} ,{name:  "Glioblastoma (WHO grade IV)"} ,{name:  "Giant cell glioblastoma (WHO grade IV) "} ,{name:  "Gliosarcoma (WHO grade IV)"} ,{name:  "Gliomatosis cerebri "} ,{name:  "Astrocytoma} ,{name:  not otherwise characterized "} ,{name:  ""} ,{name:  "OLIGODENDROGLIAL TUMORS"} ,{name:  "Oligodendroglioma (WHO grade II)"} ,{name:  "Anaplastic oligodendroglioma (WHO grade III)"} ,{name:  ""} ,{name:  "OLIGOASTROCYTIC TUMORS"} ,{name:  "Oligoastrocytoma (WHO grade II)"} ,{name:  "Anaplastic oligoastrocytoma (WHO grade III)"} ,{name:  ""} ,{name:  "EPENDYMAL TUMORS"} ,{name:  "Subependymoma (WHO grade I)"} ,{name:  "Myxopapillary ependymoma (WHO grade I)"} ,{name:  "Ependymoma (WHO grade II)"} ,{name:  "Cellular ependymoma (WHO grade II)"} ,{name:  "Papillary ependymoma (WHO grade II)"} ,{name:  "Clear cell ependymoma (WHO grade II)"} ,{name:  "Tanycytic ependymoma (WHO grade II)"} ,{name:  "Anaplastic ependymoma (WHO grade III)"} ,{name:  ""} ,{name:  "CHOROID PLEXUS TUMORS"} ,{name:  "Choroid plexus papilloma (WHO grade I)"} ,{name:  "Atypical choroid plexus papilloma (WHO grade II)"} ,{name:  "Choroid plexus carcinoma (WHO grade III)"} ,{name:  ""} ,{name:  "OTHER NEUROEPITHELIAL TUMORS"} ,{name:  "Astroblastoma (WHO grade not assigned)"} ,{name:  "Chordoid glioma of the third ventricle (WHO grade II)"} ,{name:  "Angiocentric glioma (WHO grade I)"} ,{name:  ""} ,{name:  "NEURONAL AND MIXED NEURONAL-GLIAL TUMORS"} ,{name:  "Dysplastic gangliocytoma of cerebellum (Lhermitte-Duclos) (WHO grade I)"} ,{name:  "Desmoplastic infantile astrocytoma/ganglioglioma (WHO grade I)"} ,{name:  "Dysembryoplastic neuroepithelial tumor (WHO grade I)"} ,{name:  "Gangliocytoma (WHO grade I)"} ,{name:  "Ganglioglioma (WHO grade I)"} ,{name:  "Anaplastic ganglioglioma (WHO grade III)"} ,{name:  "Central neurocytoma (WHO grade II)"} ,{name:  "Extraventricular neurocytoma (WHO grade II)"} ,{name:  "Cerebellar liponeurocytoma (WHO grade II)"} ,{name:  "Papillary glioneuronal tumor (PGNT) (WHO grade I)"} ,{name:  "Rosette-forming glioneuronal tumor of the fourth ventricle (RGNT) (WHO grade I)"} ,{name:  "Paraganglioma of the spinal cord (WHO grade I)"} ,{name:  ""} ,{name:  "PINEAL TUMORS"} ,{name:  "Pineocytoma (WHO grade I)"} ,{name:  "Pineal parenchymal tumor of intermediate differentiation (WHO II III)"} ,{name:  "Pineoblastoma (WHO grade IV)"} ,{name:  "Papillary tumor of the pineal region (WHO grade II-III)"} ,{name:  ""} ,{name:  "EMBRYONAL TUMORS"} ,{name:  "Medulloblastoma} ,{name:  not otherwise characterized (WHO grade IV)"} ,{name:  "Desmoplastic/nodular medulloblastoma (WHO grade IV)"} ,{name:  "Medulloblastoma with extensive nodularity (WHO grade IV)"} ,{name:  "Anaplastic medulloblastoma (WHO grade IV)"} ,{name:  "Large cell medulloblastoma (WHO grade IV)"} ,{name:  "Central nervous system (CNS) primitive neuroectodermal tumor (PNET) (WHO grade IV)"} ,{name:  "Medulloepithelioma (WHO grade IV)"} ,{name:  "Neuroblastoma (WHO grade IV)"} ,{name:  "Ganglioneuroblastoma (WHO grade IV)"} ,{name:  "Ependymoblastoma (WHO grade IV)"} ,{name:  "Atypical teratoid/rhabdoid tumor (WHO grade IV)"} ,{name:  ""} ,{name:  "TUMORS OF NERVES"} ,{name:  "Schwannoma (WHO grade I)"} ,{name:  "Cellular schwannoma (WHO grade I)"} ,{name:  "Plexiform schwannoma(WHO grade I)"} ,{name:  "Melanotic schwannoma (WHO grade I)"} ,{name:  "Neurofibroma (WHO grade I"} ,{name:  "Plexiform neurofibroma (WHO grade I) "} ,{name:  "Perineurioma (WHO grade I)"} ,{name:  "Intraneural perineurioma (WHO grade I)"} ,{name:  "Soft tissue perineurioma (WHO grade I)"} ,{name:  "Malignant perineurioma (WHO grade III)"} ,{name:  "Ganglioneuroma (WHO grade I) "} ,{name:  "Malignant peripheral nerve sheath tumor (MPNST) (WHO grade II-IV) "} ,{name:  "Epithelioid MPNST (WHO grade II-IV)"} ,{name:  "MPNST with divergent mesenchymal and/or epithelial differentiation (WHO grade II-IV)"} ,{name:  ""} ,{name:  "MENINGEAL TUMORS"} ,{name:  "Meningioma (WHO grade I)"} ,{name:  "Meningothelial meningioma (WHO grade I)"} ,{name:  "Fibrous meningioma (fibroblastic) (WHO grade I)"} ,{name:  "Transitional meningioma (mixed) (WHO grade I)"} ,{name:  "Psammomatous meningioma (WHO grade I)"} ,{name:  "Angiomatous meningioma (WHO grade I)"} ,{name:  "Microcystic meningioma (WHO grade I)"} ,{name:  "Secretory meningioma (WHO grade I)"} ,{name:  "Lymphoplasmacyte-rich (lymphoplasmacytic) meningioma (WHO grade I)"} ,{name:  "Metaplastic meningioma (WHO grade I)"} ,{name:  "Atypical meningioma (WHO grade II)"} ,{name:  "Clear cell meningioma (WHO grade II)"} ,{name:  "Chordoid meningioma (WHO grade II)"} ,{name:  "Anaplastic meningioma (WHO grade III)"} ,{name:  "Papillary meningioma (WHO grade III)"} ,{name:  "Rhabdoid meningioma (WHO grade III)"} ,{name:  ""} ,{name:  "MESENCHYMAL TUMORS"} ,{name:  "Lipoma"} ,{name:  "Angiolipoma"} ,{name:  "Hibernoma"} ,{name:  "Liposarcoma (intracranial)"} ,{name:  "Solitary fibrous tumor"} ,{name:  "Fibrosarcoma "} ,{name:  "Malignant fibrous histiocytoma"} ,{name:  "Leiomyoma"} ,{name:  "Leiomyosarcoma"} ,{name:  "Rhabdomyoma "} ,{name:  "Rhabdomyosarcoma"} ,{name:  "Chondroma"} ,{name:  "Chondrosarcoma"} ,{name:  "Osteoma"} ,{name:  "Osteosarcoma "} ,{name:  "Osteochondroma "} ,{name:  "Hemangioma "} ,{name:  "Epithelioid hemangioendothelioma "} ,{name:  "Hemangiopericytoma "} ,{name:  "Anaplastic hemangiopericytoma  "} ,{name:  "Angiosarcoma"} ,{name:  "Kaposi sarcoma"} ,{name:  "Chordoma"} ,{name:  "Mesenchymal} ,{name:  nonmeningothelial tumor"} ,{name:  "Sarcoma} ,{name:  primary CNS "} ,{name:  ""} ,{name:  "MELANOTIC TUMORS"} ,{name:  "Diffuse melanocytosis"} ,{name:  "Melanocytoma"} ,{name:  "Malignant melanoma"} ,{name:  "Meningeal melanomatosis"} ,{name:  ""} ,{name:  "TUMORS OF UNCERTAIN HISTOGENESIS"} ,{name:  "Hemangioblastoma (WHO grade I)"} ,{name:  ""} ,{name:  "LYMPHOMA AND HEMATOPOIETIC TUMORS"} ,{name:  "Malignant lymphoma"} ,{name:  "Plasmacytoma"} ,{name:  "Granulocytic sarcoma"} ,{name:  "Hematopoietic neoplasm} ,{name:  other "} ,{name:  ""} ,{name:  "GERM CELL TUMORS"} ,{name:  "Germinoma"} ,{name:  "Embryonal carcinoma"} ,{name:  "Yolk sac tumor"} ,{name:  "Choriocarcinoma"} ,{name:  "Teratoma} ,{name:  mature"} ,{name:  "Teratoma} ,{name:  immature"} ,{name:  "Teratoma with malignant transformation"} ,{name:  "Malignant mixed germ cell tumor "} ,{name:  ""} ,{name:  "SELLAR TUMORS"} ,{name:  "Craniopharyngioma (WHO grade I)"} ,{name:  "Craniopharyngioma} ,{name:  adamantinomatous (WHO grade I)"} ,{name:  "Craniopharyngioma} ,{name:  papillary (WHO grade I)"} ,{name:  "Granular cell tumor (WHO grade I)"} ,{name:  "Pituicytoma (WHO grade I)"} ,{name:  "Spindle cell oncocytoma (WHO grade I)"} ,{name:  "Pituitary adenoma "} ,{name:  "Pituitary carcinoma"} ,{name:  "Pituitary hyperplasia"} ,{name:  ""} ,{name:  "OTHER"} ,{name:  "Malignant neoplasm} ,{name:  type cannot be determined"} ,{name:  "Pediatric low grade glioma (pLGG) not otherwise specified (NOS) (Grade I/II)"} ],
            id : "30", name : ""
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Grade",
  
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Grade 1"
          }, {
            id : "00", name : "Grade 2"
          }, {
            id : "00", name : "Grade 3"
          }, {
            id : "00", name : "Grade 4"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Immunohistochemistry",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "IDH, P53, ATRX",
            inputs_required : [ "" ],
            id : "10", name : ""
          }, {
            id : "00", name : "None"
          }, {
            id : "00", name : "Not applicable"
          }, {
            id : "00", name : "See above"
          }, {
            inputs_required : [ "" ],
            id : "10", name : "See case"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Ancillary studies ordered",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "astrocytoma grade 2-3",
            id : "00", name : "1p 19q FISH and MGMT"
          }, {
            description : "GBM",
            id : "00", name : "1p 19q FISH, MGMT and EGFR amplification by FISH"
          }, {
            id : "00", name : "None"
          }, {
            id : "00", name : "Not applicable"
          }, {
            inputs_required : [ "" ],
            id : "10", name : "See case"
          } ],
          id : "00", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "00", name : "Cervix, Hysterectomy",
      optional : false,
      organ_group : "Gynecologic",
      properties : [  {
        id : "00", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Simple hysterectomy"
          }, {
            id : "00", name : "Radical hysterectomy"
          }, {
            id : "00", name : "Simple hysterectomy and bilateral salpingo-oopherectomy"
          }, {
            id : "00", name : "Radical hysterectomy and bilateral salpingo-oopherectomy"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Squamous cell carcinoma"
          }, {
            id : "00", name : "Squamous cell carcinoma, keratinizing"
          }, {
            id : "00", name : "Squamous cell carcinoma, nonkeratinizing"
          }, {
            id : "00", name : "Squamous cell carcinoma, basaloid"
          }, {
            id : "00", name : "Squamous cell carcinoma, verrucous"
          }, {
            id : "00", name : "Squamous cell carcinoma, warty"
          }, {
            id : "00", name : "Squamous cell carcinoma, papillary"
          }, {
            id : "00", name : "Squamous cell carcinoma, lymphoepithelioma-like"
          }, {
            id : "00", name : "Squamous cell carcinoma, squamotransitional"
          }, {
            description : "cervical HPV ISH +, p16+, CEA+, p53 wild type, ER-/wk, PR- Vim -/wk vs endometrial HPV ISH-, p16-/wk, CEA -/wk, p53 abnormal/-, ER+, PR+ Vim +/wk",
            id : "00", name : "Endocervical adenocarcinoma"
          }, {
            id : "00", name : "Endocervical adenocarcinoma, usual type"
          }, {
            id : "00", name : "Mucinous carcinoma, NOS"
          }, {
            id : "00", name : "Mucinous carcinoma, intestinal type"
          }, {
            id : "00", name : "Mucinous carcinoma, signet-ring cell type"
          }, {
            id : "00", name : "Mucinous carcinoma, gastric type"
          }, {
            id : "00", name : "Villoglandular carcinoma"
          }, {
            id : "00", name : "Endometrioid carcinoma"
          }, {
            id : "00", name : "Clear cell carcinoma"
          }, {
            id : "00", name : "Serous carcinoma"
          }, {
            id : "00", name : "Mesonephric carcinoma"
          }, {
            id : "00", name : "Adenocarcinoma admixed with neuroendocrine carcinoma"
          }, {
            id : "00", name : "Adenosquamous carcinoma"
          }, {
            id : "00", name : "Adenosquamous carcinoma, glassy cell variant"
          }, {
            id : "00", name : "Adenoid cystic carcinoma"
          }, {
            id : "00", name : "Adenoid basal carcinoma"
          }, {
            id : "00", name : "Small cell carcinoma"
          }, {
            id : "00", name : "Large cell neuroendocrine carcinoma"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Grade 1/3, Well differentiated"
          }, {
            id : "00", name : "Grade 2/3, Moderately differentiated"
          }, {
            id : "00", name : "Grade 3/3, Poorly differentiated"
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "depth and width in mm and thickness of cervix",
        id : "00", name : "Cervical stromal invasion",
       optional_state  : "required", "options" : [ {
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Other tissue(s) involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          },{
            id : "00", name : "Right parametrium"
          }, {
            id : "00", name : "Left parametrium"
          }, {
            id : "00", name : "Bilateral parametrium"
          }, {
             description : "specify, incluidng vagina, ovaries, fallopian tubes, pelvic side wall, bladder bowel and omentum",
              inputs_required : [ "" ],
            id : "10", name : "Other organs"
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "include distance/location of closest margin, ectocervical and radial",
        id : "00", name : "Margins, invasive tumor",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "10", name : "Free, "
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          }, {
            id : "00", name : "Not applicable"
          }],
          id : "00", name : ""
        } ]
      }, {
        description : "include distance/location of closest margin, ectocervical",
        id : "00", name : "Margins, HSIL",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "10", name : "Free, "
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          }, {
            id : "00", name : "Not applicable"
          }],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Indeterminate"
          }, {
            id : "00", name : "Suspicious"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Present, extensive"
          } ],
          id : "00", name : ""
        } ]
      }, {
       
        id : "00", name : "Lymph nodes, # sentinel",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "includes pelvic, parametrial, obturator, internal iliac (hypogastric), external iliac, common iliac, sacral, presacral and para-aortic ",
        id : "00", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "50", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
         description : "do not include ITCs",
        id : "50", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "0" },{ id : "53", name : "1" },{ id : "53", name : "2" },{ id : "53", name : "3"
          }, {
            description : "# positive, specify location",
            inputs_required : [ "" ],
            id : "10", name : ""
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "50", name : "Lymph nodes, # w/ isolated tumor cells",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            description : "# positive, specify location",
            inputs_required : [ "" ],
            id : "10", name : ""
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "01", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "00", name : ""
          }, {
            description : "pathologic",
            id : "00", name : "AJCC p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "00", name : "AJCC m"
          }, {
            description : "recurrent",
            id : "00", name : "AJCC r"
          }, {
            description : "post-treatment",
            id : "00", name : "AJCC y"
          }, {
            id : "00", name : "AJCC mp"
          }, {
            id : "00", name : "AJCC rp"
          }, {
            id : "00", name : "AJCC yp"
          }, {
            id : "00", name : "AJCC mrp"
          }, {
            id : "00", name : "AJCC myp"
          }, {
            id : "00", name : "AJCC ryp"
          }, {
            id : "00", name : "AJCC mryp"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "02", name : "T",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "cannot be assessed",
            id : "00", name : "TX"
          }, {
            description : "<= 3 mm deep AND <= 7mm wide",
            id : "00", name : "T1a1"
          }, {
            description : ">3mm AND <=5mm deep, AND <=7mm wide",
            id : "00", name : "T1a2"
          }, {
            description : "Clincially visible lesion <= 4 cm",
            id : "00", name : "T1b1"
          }, {
            description : "Clinically visible lesion > 4cm",
            id : "00", name : "T1b2"
          }, {
            description : "Clinically visible lesion <= 4cm, invades beyond uterus",
            id : "00", name : "T2a1"
          }, {
            description : "Clinically visible lesion > 4cm, invades beyond uterus",
            id : "00", name : "T2a2"
          }, {
            description : "Parametrial invasion",
            id : "00", name : "T2b"
          }, {
            description : "Extends to lower third of vagina ",
            id : "00", name : "T3a"
          }, {
            description : "Extends to pelvic wall OR hydronephrosis OR nonfunctioning kidney ",
            id : "00", name : "T3b"
          }, {
            description : "Invades mucosa of bladder, rectum or beyond true pelvis",
            id : "00", name : "T4"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "03", name : "N",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "00", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "00", name : "N0"
          }, {
            description : "Isolated tumor cells, <=0.2mm",
            id : "00", name : "N0(i+)"
          }, {
            description : "positive nodes",
            id : "00", name : "N1"
          } ],
          id : "00", name : "Category (pN)"
        }]
        }, {
          id : "04", name : "M",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "metastases",
            id : "00", name : "M1"
          }, {
            id : "00", name : "M (not applicable)"
          }, {
            id : "00", name : "distant metastasis not applicable"
          } ],
          id : "00", name : ""
        } ]
   
    }, {
        id : "00", name : "Stage FIGO (2015)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "Limited to cervix, Measured invasion of stroma ≤3 mm in depth and ≤7 mm width",
            id : "00", name : "FIGO IA1"
          }, {
            description : "Limited to cervix, Measured invasion of stroma >3 mm and <5 mm in depth and ≤7 mm width",
            id : "00", name : "FIGO IA2"
          }, {
            description : "Limited to cervix, invasion >= 5mm in depth and < 2cm in greatest dimension",
            id : "00", name : "FIGO IB1"
          }, {
            description : "Limited to cervix, invasive carcinoma >= 2cm and < 4cm",
            id : "00", name : "FIGO IB2"
          }, {
            description : "Limited to cervix,invasive carcinoma >= 4cm",
            id : "00", name : "FIGO IB3"
          }, {
            description : "Involvement of up to the upper two-thirds of the vagina. No parametrial/pelvic involvement.  <4 cm",
            id : "00", name : "FIGO IIA1"
          }, {
            description : "Involvement of up to the upper two-thirds of the vagina. No parametrial/pelvic involvement.  >=4 cm",
            id : "00", name : "FIGO IIA2"
          }, {
            description : "Parametrial involvement but not onto the pelvic sidewall",
            id : "00", name : "FIGO IIB"
          }, {
            description : "Involvement of the lower third of the vagina but no extension onto pelvic sidewall",
            id : "00", name : "FIGO IIIA"
          }, {
            description : "Extension onto the pelvic sidewall, and/or causing hydronephrosis/nonfunctioning kidney",
            id : "00", name : "FIGO IIIB"
          }, {
            description : "Involvement of pelvic lymph nodes, regardless of size or extent",
            id : "00", name : "FIGO IIIC1"
          }, {
            description : "Involvement of para-aortic lymph nodes, regardless of size or extent",
            id : "00", name : "FIGO IIIC2"
          }, {
            description : "Spread to adjacent pelvic organs, ie, tumor invading the mucosa of the bladder and/or rectum and/or extending beyond the true pelvis (bullous edema is not sufficient)",
            id : "00", name : "FIGO IVA"
          }, {
            description : "Spread to distant organs",
            id : "00", name : "FIGO IVB"
          }, {
            description : "",
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
          } ]
      }, {
      most_common : false,
      id : "00", name : "Cervix, LEEP",
      optional : true,
      organ_group : "Gynecologic",
      properties : [  {
        id : "00", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Cold knife cone"
          }, {
            id : "00", name : "LEEP"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Left superior"
          }, {
            id : "00", name : "Left inferior"
          }, {
            id : "00", name : "Right superior"
          }, {
            id : "00", name : "Right inferior"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Squamous cell carcinoma"
          }, {
            id : "00", name : "Squamous cell carcinoma, keratinizing"
          }, {
            id : "00", name : "Squamous cell carcinoma, nonkeratinizing"
          }, {
            id : "00", name : "Squamous cell carcinoma, basaloid"
          }, {
            id : "00", name : "Squamous cell carcinoma, verrucous"
          }, {
            id : "00", name : "Squamous cell carcinoma, warty"
          }, {
            id : "00", name : "Squamous cell carcinoma, papillary"
          }, {
            id : "00", name : "Squamous cell carcinoma, lymphoepithelioma-like"
          }, {
            id : "00", name : "Squamous cell carcinoma, squamotransitional"
          }, {
             description : "cervical HPV ISH+, p16+, CEA+, p53 wild type, ER-/wk, PR- Vim -/wk vs endometrial HPV ISH-, p16-/wk, CEA -/wk, p53 abnormal/-, ER-/+, PR+, Vim +",
            id : "00", name : "Endocervical adenocarcinoma"
          }, {
            
            id : "00", name : "Endocervical adenocarcinoma, usual type"
          }, {
            id : "00", name : "Mucinous carcinoma, NOS"
          }, {
            id : "00", name : "Mucinous carcinoma, intestinal type"
          }, {
            id : "00", name : "Mucinous carcinoma, signet-ring cell type"
          }, {
            id : "00", name : "Mucinous carcinoma, gastric type"
          }, {
            id : "00", name : "Villoglandular carcinoma"
          }, {
            id : "00", name : "Endometrioid carcinoma"
          }, {
            id : "00", name : "Clear cell carcinoma"
          }, {
            id : "00", name : "Serous carcinoma"
          }, {
            id : "00", name : "Mesonephric carcinoma"
          }, {
            id : "00", name : "Adenocarcinoma admixed with neuroendocrine carcinoma"
          }, {
            id : "00", name : "Adenosquamous carcinoma"
          }, {
            id : "00", name : "Adenosquamous carcinoma, glassy cell variant"
          }, {
            id : "00", name : "Adenoid cystic carcinoma"
          }, {
            id : "00", name : "Adenoid basal carcinoma"
          }, {
            id : "00", name : "Small cell carcinoma"
          }, {
            id : "00", name : "Large cell neuroendocrine carcinoma"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Grade 1/3, Well differentiated"
          }, {
            id : "00", name : "Grade 2/3, Moderately differentiated"
          }, {
            id : "00", name : "Grade 3/3, Poorly differentiated"
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "depth and width in mm",
        id : "00", name : "Cervical stromal invasion",
       optional_state  : "required", "options" : [ {
          description : "depth and width in mm",
          id : "00", name : ""
        } ]
      }, {
        description : "include distance/location of closest margin, endocervical, exctocervical and deep",
        id : "00", name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "10", name : "Free, "
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          }],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Indeterminate"
          }, {
            id : "00", name : "Suspicious"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Present, extensive"
          } ],
          id : "00", name : ""
        } ]
      } ]
    }, {
      most_common : true,
       description : "including small cell carcinoma",
      id : "00", name : "Colon",
      optional : false,
      organ_group : "Gastrointestinal",
      properties : [  {
        id : "00", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Right hemicolectomy"
          }, {
            id : "00", name : "Transverse colectomy"
          }, {
            id : "00", name : "Left hemicolectomy"
          }, {
            id : "00", name : "Sigmoidectomy"
          }, {
            id : "00", name : "Rectosigmoid colectomy"
          }, {
            id : "00", name : "Rectal/rectosigmoid colon (low anterior resection)"
          }, {
            id : "00", name : "Total abdominal colectomy"
          }, {
            id : "00", name : "Abdominoperineal resection"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Cecum"
          }, {
            id : "00", name : "Right (ascending) colon"
          }, {
            id : "00", name : "Cecum/Right (ascending) colon"
          }, {
            id : "00", name : "Hepatic flexure"
          }, {
            id : "00", name : "Transverse colon"
          }, {
            id : "00", name : "Splenic flexure"
          }, {
            id : "00", name : "Left (descending) colon"
          }, {
            id : "00", name : "Sigmoid colon"
          }, {
            id : "00", name : "Rectosigmoid"
          }, {
            id : "00", name : "Rectum"
          }, {
            id : "00", name : "Ileocecal valve"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor perforation",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Equivocal"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Adenocarcinoma"
          }, {
            id : "00", name : "Mucinous carcinoma"
          }, {
            id : "00", name : "Adenocarcinoma with mucinous features"
          }, {
            id : "00", name : "Adenocarcinoma with mucinous features and signet ring cells"
          }, {
            id : "00", name : "Signet-ring cell carcinoma"
          }, {
            id : "00", name : "Micropapillary carcinoma"
          }, {
            id : "00", name : "Serrated adenocarcinoma"
          }, {
            id : "00", name : "Medullary carcinoma"
          }, {
            id : "00", name : "Large cell neuroendocrine carcinoma"
          }, {
            id : "00", name : "Small cell neuroendocrine carcinoma"
          }, {
            id : "00", name : "Squamous cell carcinoma"
          }, {
            id : "00", name : "Adenosquamous cell carcinoma"
          }, {
            id : "00", name : "Undifferentiated carcinoma"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Grade 1/4, Well differentiated"
          }, {
            id : "00", name : "Grade 2/4, Moderately differentiated"
          }, {
            id : "00", name : "Grade 2-3/4, Moderately to focally poorly differentiated"       
          }, {
            id : "00", name : "Grade 3/4, Poorly differentiated"
          }, {
            id : "00", name : "Grade 4/4, , Undifferentiated"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "60", name : "No invasion of lamina propria"
          }, {
            id : "60", name : "Intramucosal (invades lamina propria/muscularis mucosa)"
          }, {
            id : "61", name : "Invades submucosa"
          }, {
            id : "62", name : "Invades muscularis propria"
          }, {
            id : "63", name : "Invades pericolonic/rectal adipose tissue"
          }, {
            id : "63", name : "Invades pericolonic adipose tissue"
          }, {
            id : "63", name : "Invades perirectal adipose tissue"
          }, {
             description : "T4a",
            id : "67", name : "Penetrates serosa"
          }, {
             description : "T4b",
             inputs_required : [ "" ],
            id : "13", name : "Adherent to other organs"
          }, {
             description : "T4b",
            id : "68", name : "Directly invades omentum, separte nodules are M1c"
          }, {
             description : "T4b, specify",
             inputs_required : [ "" ],
            id : "13", name : "Invades other organs"
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "include distance/location of closest proximal/distal/radial margin",
        id : "00", name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "10", name : "Free, "
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Treatment effect, primary site",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "No prior treatment"
          }, {
            id : "00", name : "Present (score 1 or 2)"
          }, {
            id : "00", name : "No response (score 3)"
          }, {
            id : "00", name : "indeterminate"
          }, {
            id : "00", name : "Not known"
          }  ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Indeterminate"
          }, {
            id : "00", name : "Suspicious"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Present, extensive"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Perineural invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Equivocal"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor deposits",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            description : "#",
            inputs_required : [ "" ],
            id : "10", name : "Present"
          }, {
            id : "00", name : "Equivocal"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "50", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "50", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "51", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "01", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "00", name : ""
          }, {
            description : "pathologic",
            id : "00", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "00", name : "m"
          }, {
            description : "recurrent",
            id : "00", name : "r"
          }, {
            description : "post-treatment",
            id : "00", name : "y"
          }, {
            id : "00", name : "mp"
          }, {
            id : "00", name : "rp"
          }, {
            id : "00", name : "yp"
          }, {
            id : "00", name : "mrp"
          }, {
            id : "00", name : "myp"
          }, {
            id : "00", name : "ryp"
          }, {
            id : "00", name : "mryp"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "02", name : "T",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "cannot be assessed",
            id : "00", name : "TX"
          }, {
            description : "No tumor",
            id : "00", name : "T0"
          }, {
            description : "in situ or invasion of lamina propria or muscularis mucosa",
            id : "00", name : "Tis"
          }, {
            description : "invades submucosa",
            id : "00", name : "T1"
          }, {
            description : "Invades muscularis propria",
            id : "00", name : "T2"
          }, {
            description : "Invades pericolonc adipose tissue",
            id : "00", name : "T3"
          }, {
            description : "Penetrates serosa",
            id : "00", name : "T4a"
          }, {
            description : "adherent or invades adjacent organs",
            id : "00", name : "T4b"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "03", name : "N",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "00", name : "NX"
          }, {
            description : "No regional lymph node metastasis or <0.2mm",
            id : "00", name : "N0"
          }, {
            description : "IHC+(i+) OR lymph node metastasis <0.2mm",
            id : "00", name : "N0 (see lymph nodes above)"
          }, {
            description : "1 positive nodes, >0.2mm",
            id : "00", name : "N1a"
          }, {
            description : "2-3 postive nodes, >0.2mm",
            id : "00", name : "N1b"
          }, {
            description : "Tumor deposits only",
            id : "00", name : "N1c"
          }, {
            description : "4-6 positive nodes",
            id : "00", name : "N2a"
          }, {
            description : ">=7 positive nodes",
            id : "00", name : "N2b"
          } ],
          id : "00", name : "Category (pN)"
        }]
        }, {
          id : "04", name : "M",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Distant metastases, one site, no peritoneal metastases",
            id : "00", name : "M1a"
          }, {
                description : "Distant metastases two sites, no peritoneal metastases",
            id : "00", name : "M1b"
          }, {
                description : "Distant metastases to peritoneal surface",
            id : "00", name : "M1c"
          }, {
            id : "00", name : "M (not applicable)"
          }, {
            id : "00", name : "distant metastasis not applicable"
          } ],
          id : "00", name : ""
        } ]
      },  {
         description : "Perform for adenocarcinoma, NOT small cell carcinoma, per Dr Ucar",
        id : "00", name : "MSI IHC and Interpretation",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Pending, addendum to follow"
          },{
             description : "tell the secretary to pick this and copy the answer in a separate note",
            id : "00", name : " see Note."
          },{
             description : "A.",
            id : "00", name : " MLH1+, MSH2+, MSH6+, PMS2+. Intact nuclear expression of MMR protein, low probability of microsatellite instability-high (MSI-H).  There are exceptions to the above IHC interpretations. These results should not be considered in isolation, and clinical correlation with genetic counseling is recommended to assess the need for germline testing."
          }, {
             description : "B.",
            id : "00", name : "MLH1-, MSH2+, MSH6+, PMS2-. Loss of nuclear expression of MLH1 and PMS2: deficient mismatch repair/ high probability of microsatellite instability-high (MSI-H). Testing for methylation of the MLH1 promoter is indicated (the presence of MLH1 methylation suggests that the tumor is sporadic and germline evaluation is probably not indicated; absence of MLH1 methylation suggests the possibility of Lynch syndrome, and sequencing and/or large deletion/duplication testing of germline MLH1 is indicated). There are exceptions to the above IHC interpretations. These results should not be considered in isolation, and clinical correlation with genetic counseling is recommended to assess the need for germline testing."
          }, {
             description : "C.",
            id : "00", name : "MLH1+, MSH2-, MSH6-, PMS2+. Loss of nuclear expression of MSH2 and MSH6: deficient mismatch repair/ high probability of microsatellite instability-high (MSI-H). High probability of Lynch syndrome (sequencing and or large deletion/duplication testing of germline MSH2 may be indicated, and, if negative, sequencing and or large deletion/duplication testing of germline MSH6 may be indicated). There are exceptions to the above IHC interpretations.   These results should not be considered in isolation, and clinical correlation with genetic counseling is recommended to assess the need for germline testing."
          }, {
             description : "D.",
            id : "00", name : "MLH1+, MSH2+, MSH6-, PMS2+. Loss of nuclear expression of MSH6 only: deficient mismatch repair/ high probability of microsatellite instability-high (MSI-H). High probability of Lynch syndrome (sequencing and or large deletion/duplication testing of germline MSH6 may be indicated). There are exceptions to the above IHC interpretations.   These results should not be considered in isolation, and clinical correlation with genetic counseling is recommended to assess the need for germline testing."
          }, {
             description : "E.",
            id : "00", name : "MLH1+, MSH2+, MSH6+, PMS2-. Loss of nuclear expression of PMS2 only: deficient mismatch repair/ high probability of microsatellite instability-high (MSI-H). High probability of Lynch syndrome (sequencing and or large deletion/duplication testing of germline PMS2 may be indicated). There are exceptions to the above IHC interpretations.   These results should not be considered in isolation, and clinical correlation with genetic counseling is recommended to assess the need for germline testing."
          } , {
            description : "case #",
            inputs_required : [ "" ],
            id : "10", name : "See case "
          }],
          id : "00", name : ""
        } ]
     }, {
        id : "00", name : "Ancillary studies ordered",
       optional_state  : "required", "options" : [ {
          group : [ {
             description : "T1-3N0",
            id : "00", name : "PIK3CA"
          },{
             description : "T1-3N0 AND loss of MLH1 and PMS2",
            id : "00", name : "PIK3CA and MLH1 promoter methylation"
          }, {
             description : "T4 or N1",
            id : "00", name : "PIK3CA, K-RAS extended panel, N-RAS, and BRAF"
          }, {
             description : "T4 or N1 AND loss of MLH1 and PMS2",
            id : "00", name : "PIK3CA, K-RAS extended panel, N-RAS, BRAF, and MLH1 promoter methylation"
          }, {
            id : "00", name : "Pending results of MMR protein panel"
          }, {
            id : "00", name : "None"
          }, {
            id : "00", name : "Not applicable"
          }, {
            inputs_required : [ "" ],
            id : "10", name : "See case"
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "Add billing code G8721",
        id : "44", name : "ICD10",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "C18.9"
          } ],
          id : "00", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      description : "Do NOT use for small cell, use regular colon",
      id : "00", name : "Colon neuroendocrine tumor, excluding small cell",
      optional : false,
      organ_group : "Endocrine",
      properties : [  {
        id : "00", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Right hemicolectomy"
          }, {
            id : "00", name : "Transverse hemicolectomy"
          }, {
            id : "00", name : "Left hemicoloectomy"
          }, {
            id : "00", name : "Sigmoidectomy"
          }, {
            id : "00", name : "Rectal/rectosigmoid colon (low anterior resection)"
          }, {
            id : "00", name : "Total abdominal colectomy"
          }, {
            id : "00", name : "Abdominoperineal resection"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Cecum"
          }, {
            id : "00", name : "Right (ascending) colon"
          }, {
            id : "00", name : "Cecum/Right (ascending) colon"
          }, {
            id : "00", name : "Hepatic flexure"
          }, {
            id : "00", name : "Transverse colon"
          }, {
            id : "00", name : "Splenic flexure"
          }, {
            id : "00", name : "Left (descending) colon"
          }, {
            id : "00", name : "Sigmoid colon"
          }, {
            id : "00", name : "Rectosigmoid"
          }, {
            id : "00", name : "Rectum"
          }, {
            id : "00", name : "Ileocecal valve"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor focality",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Single focus of tumor"
          }, {
            id : "00", name : "Multiple foci of tumor"
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "not for small cell, use other colon protocol ",
        id : "00", name : "Type and Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
               description : "< 2mitoses/10 hpf and/or Ki67<3% ",	
            id : "00", name : "Grade 1/3, Well-differentiated neuroendocrine tumor"
          }, {
           description : ">= 2 AND < 20 mitoses/10 hpf and/or Ki67 >=3 AND <20% ",	
            id : "00", name : "Grade 2/3, Well-differentiated neuroendocrine tumor"
          }, {
               description : "> 20 mitoses/10 hpf and/or Ki67 >20% ",	
            id : "00", name : "Grade 3/3, Well-differentiated neuroendocrine tumor"
          } ],
          id : "00", name : ""
        } ]
      }, {
           description : "mitoses/ 2 mm squared NOT 10 hpf, approximately count 42 hpf and divide by 5", 
        id : "00", name : "Mitotic rate",
       optional_state  : "required", "options" : [ {
          group : [ {
            
            id : "00", name : "Less than 2 / 2mm squared"
          }, {
          
            id : "00", name : "at least 2 and less than 20 /2 mm squared"
          }, {
            
            id : "00", name : "More than 20 per 2 mm squared"
          } ],
          id : "00", name : ""
        } ]  
        
      }, {
        id : "00", name : "Ki67 (Mib1)",
       optional_state  : "required", "options" : [ {
          group : [ {
            
            id : "00", name : "Less than 3%"
          }, {
          
            id : "00", name : "at least 3% and less than 20%"
          }, {
            
            id : "00", name : "More than 20%"
          } ],
          id : "00", name : ""
        } ]  
        
      }, {
        id : "00", name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Invades lamina propria"
          }, {
            id : "00", name : "Invades muscularis mucosa"
          }, {
            id : "00", name : "Invades submucosa"
          }, {
            id : "00", name : "Invades muscularis propria"
          }, {
            id : "63", name : "Invades pericolonic/rectal adipose tissue"
          }, {
            id : "63", name : "Invades pericolonic adipose tissue"
          }, {
            id : "63", name : "Invades perirectal adipose tissue"
          }, {
            id : "64", name : "Penetrates serosa"
          }, {
            id : "64", name : "Adherent to other organs"
          }, {
            id : "64", name : "Invades other organs"
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "include distance/location of closest proximal/distal/radial margin",
        id : "00", name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "10", name : "Free, "
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Indeterminate"
          }, {
            id : "00", name : "Suspicious"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Present, extensive"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "50", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "50", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "51", name : "0" },{ id : "53", name : "1" },{ id : "53", name : "2" },{ id : "53", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "01", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "00", name : ""
          }, {
            description : "pathologic",
            id : "00", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "00", name : "m"
          }, {
            description : "recurrent",
            id : "00", name : "r"
          }, {
            description : "post-treatment",
            id : "00", name : "y"
          }, {
            id : "00", name : "mp"
          }, {
            id : "00", name : "rp"
          }, {
            id : "00", name : "yp"
          }, {
            id : "00", name : "mrp"
          }, {
            id : "00", name : "myp"
          }, {
            id : "00", name : "ryp"
          }, {
            id : "00", name : "mryp"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "02", name : "T",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "cannot be assessed",
            id : "00", name : "TX"
          }, {
            description : "No tumor",
            id : "00", name : "T0"
          }, {
            description : "<= 1cm",
            id : "00", name : "T1a"
          }, {
            description : "> 1cm AND <= 2cm",
            id : "00", name : "T1b"
          }, {
            description : "> 2 cm OR invades muscularis propria",
            id : "00", name : "T2"
          }, {
            description : "Invades pericolonic/rectal adipose tissue",
            id : "00", name : "T3"
          }, {
            description : "Penetrates serosa or other organs",
            id : "00", name : "T4"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "03", name : "N",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "00", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "00", name : "N0"
          }, {
            description : "Positive nodes",
            id : "00", name : "N1"
          } ],
          id : "00", name : "Category (pN)"
        }]
        }, {
          id : "04", name : "M",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Distant metastases liver",
            id : "00", name : "M1a"
          }, {
               description : "Distant metastases other than liver",
            id : "00", name : "M1b"
          }, {
               description : "Distant metastases liver and other",
            id : "00", name : "M1c)"
          }, {
            id : "00", name : "M (not applicable)"
          }, {
            id : "00", name : "distant metastasis not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
         description : "add billing code G8721",
        id : "00", name : "ICD10",
       optional_state  : "required", "options" : [ {
          group : [ {
  
            id : "00", name : "153.9"
          } ],
          id : "00", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "00", name : "Distal Bile Ducts",
      optional : false,
      organ_group : "Gastrointestinal",
      properties : [ {
        id : "00", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Pancreaticoduodenectomy (Whipple)"
          }, {
            id : "00", name : "Segmental resection of bile duct(s)"
          }, {
            id : "00", name : "Choledochal cyst resection "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Common bile duct"
          }, {
            id : "00", name : "Extrapancreatic Common bile duct "
          } , {
            id : "00", name : "Intrapancreatic Common bile duct "
          }],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Adenocarcinoma"
          }, {
            id : "00", name : "Adenocarcinoma, intestinal type"
          }, {
            id : "00", name : "Adenocarcinoma, biliary type"
          }, {
            id : "00", name : "Adenocarcinoma, gastric foveolar type"
          }, {
            id : "00", name : "Intraductal papillary neoplasm with an associated invasive carcinoma"
          }, {
            id : "00", name : "Mucinous cystic neoplasm with an associated invasive carcinoma"
          }, {
            id : "00", name : "Mucinous adenocarcinoma"
          }, {
            id : "00", name : "Clear cell adenocarcinoma"
          }, {
            id : "00", name : "Signet-ring cell carcinoma"
          }, {
            id : "00", name : "Adenosquamous carcinoma"
          }, {
            id : "00", name : "Squamous cell carcinoma"
          }, {
            id : "00", name : "Undifferentiated carcinoma"
          }, {
            id : "00", name : "Mixed adenoneuroendocrine carcinoma"
          }, {
            id : "00", name : "Large cell neuroendocrine carcinoma"
          }, {
            id : "00", name : "Small cell neuroendocrine carcinoma"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Grade 1/3, Well differentiated"
          }, {
            id : "00", name : "Grade 2/3, Moderately differentiated"
          }, {
            id : "00", name : "Grade 3/3, Poorly differentiated"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "60", name : "No invasion (carcinoma in situ) "
          }, {
            id : "00", name : "Limited to the bile duct"
          }, {
            id : "00", name : "Invades beyond the wall of the bile duct"
          }, {
            id : "00", name : "Invades the duodenum "
          }, {
            id : "00", name : "Invades the pancreas"
          }, {
            id : "00", name : "Invades the gallbladder"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Invades other adjacent structures"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Depth of invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "No invasion"
          }, {
            id : "00", name : "Invades less than 5 mm"
          }, {
            id : "00", name : "Invades at least 5 mm and no more than 12 mm"
          }, {
            id : "00", name : "Invades more than 12 mm"
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "include distance/location of closest proximal bile duct/distal bile duct /radial soft tissue margin, pancreatic neck, uncinate",
        id : "00", name : "Margins invasive tumor",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "10", name : "Free, "
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "include distance/location of closest proximal bile duct/distal bile duct /radial soft tissue margin, pancreatic neck, uncinate",
        id : "00", name : "Margins in situ/high grade dysplasia",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "10", name : "Free, "
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Indeterminate"
          }, {
            id : "00", name : "Suspicious"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Present, extensive"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Perineural invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Equivocal"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "50", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "50", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "51", name : "0" },{ id : "53", name : "1" },{ id : "53", name : "2" },{ id : "53", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "01", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "00", name : ""
          }, {
            description : "pathologic",
            id : "00", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "00", name : "m"
          }, {
            description : "recurrent",
            id : "00", name : "r"
          }, {
            description : "post-treatment",
            id : "00", name : "y"
          }, {
            id : "00", name : "mp"
          }, {
            id : "00", name : "rp"
          }, {
            id : "00", name : "yp"
          }, {
            id : "00", name : "mrp"
          }, {
            id : "00", name : "myp"
          }, {
            id : "00", name : "ryp"
          }, {
            id : "00", name : "mryp"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "02", name : "T",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "cannot be assessed",
            id : "00", name : "TX"
          }, {
            description : "Carcinoma in situ",
            id : "00", name : "Tis"
          }, {
            description : "Invades bile duct with depth < 5mm ",
            id : "00", name : "T1"
          }, {
            description : "Invades bile duct to depth of >= 5 mm and <=12 mm ",
            id : "00", name : "T2"
          }, {
            description : "Invades bile duct to depth of >12 mm ",
            id : "00", name : "T3"
          }, {
            description : "Involves the celiac axis or the superior mesenteric artery",
            id : "00", name : "T4"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "03", name : "N",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "00", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "00", name : "N0"
          }, {
            description : "1-3 positive nodes",
            id : "00", name : "N1"
          }, {
            description : " 4 or more positive nodes",
            id : "00", name : "N2"
          } ],
          id : "00", name : "Category (pN)"
        }]
        }, {
          id : "04", name : "M",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Distant metastases",
            id : "00", name : "M1"
          }, {
            id : "00", name : "M (not applicable)"
          }, {
            id : "00", name : "distant metastasis not applicable"
          } ],
          id : "00", name : ""
        } ]
        }, {
          description: "adenocarcinoma only",
        id : "00", name : "MSI IHC and Interpretation",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Intact nuclear expression of MMR proteins (MLH1, MSH2, MSH6, PMS2): No evidence of deficient mismatch repair (low probability of MSI-H)"
          },{
            id : "00", name : "Loss of nuclear expression of one or more MMR proteins (MLH1, MSH2, MSH6, PMS2): deficient mismatch repair/ high probability of microsatellite instability-high (MSI-H). The presence of MSI-H/deficient mismatch repair may also be an indication for additional testing for Lynch syndrome and genetic counselling."
          }, {
            id : "00", name : "Pending"
          }, {
            id : "00", name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            id : "10", name : "See case "
          }],
          id : "00", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "00", name : "DNA Mismatch Repair",
      optional : false,
      organ_group : "Other-Biomarkers",
      properties : [  {
        id : "00", name : "MLH1 Immunohistochemistry",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Pending, addendum to follow"
          }, {
            id : "00", name : "Intact nuclear expression"
          }, {
            id : "00", name : "Loss of  nuclear expression"
          }, {
            id : "00", name : "Equivocal"
          } , {
            id : "00", name : "Not applicable"
          }],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "MSH2 Immunohistochemistry",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Pending, addendum to follow"
          },{
            id : "00", name : "Intact nuclear expression"
          }, {
            id : "00", name : "Loss of  nuclear expression"
          }, {
            id : "00", name : "Equivocal"
          } , {
            id : "00", name : "Not applicable"
          }],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "MSH6 Immunohistochemistry",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Pending, addendum to follow"
          },{
            id : "00", name : "Intact nuclear expression"
          }, {
            id : "00", name : "Loss of  nuclear expression"
          }, {
            id : "00", name : "Equivocal"
          } , {
            id : "00", name : "Not applicable"
          }],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "PMS2 Immunohistochemistry",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Pending, addendum to follow"
          },{
            id : "00", name : "Intact nuclear expression"
          }, {
            id : "00", name : "Loss of  nuclear expression"
          }, {
            id : "00", name : "Equivocal"
          } , {
            id : "00", name : "Not applicable"
          }],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "MSI IHC and Interpretation",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Intact nuclear expression of MMR proteins (MLH1, MSH2, MSH6, PMS2): No evidence of deficient mismatch repair (low probability of MSI-H)"
          },{
            id : "00", name : "Loss of nuclear expression of one or more MMR proteins (MLH1, MSH2, MSH6, PMS2): deficient mismatch repair/ high probability of microsatellite instability-high (MSI-H). The presence of MSI-H/deficient mismatch repair may also be an indication for additional testing for Lynch syndrome and genetic counselling."
          }],
          id : "00", name : ""
        } ]
  
      } ]    
   
    
      
    }, {
      most_common : false,
      id : "00", name : "Duodenum/Ampulla of Vater neuroendocrine tumor",
      optional : false,
      organ_group : "Endocrine",
      properties : [  {
        id : "00", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Ampullectomy"
          }, {
            id : "00", name : "Endoscopic or local resection"
          }, {
            id : "00", name : "Duodenum, segmental resection"
          }, {
            id : "00", name : "Pancreaticoduodenectomy (Whipple resection)"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Duodenum"
          }, {
            id : "00", name : "Ampulla "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor Focality ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Single focus"
          }, {
            id : "00", name : "Multiple foci"
          }, {
            id : "00", name : "Equivocal"
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "not for small cell, use other colon protocol ",
        id : "00", name : "Type and Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
             description : "< 2mitoses/10 hpf and/or Ki67<3% ",  
            id : "00", name : "Grade 1/3, Well-differentiated neuroendocrine tumor"
          }, {
           description : ">= 2 AND < 20 mitoses/10 hpf and/or Ki67 >=3 AND <20% ", 
            id : "00", name : "Grade 2/3, Well-differentiated neuroendocrine tumor"
          }, {
             description : "> 20 mitoses/10 hpf and/or Ki67 >20% ",  
            id : "00", name : "Grade 3/3, Well-differentiated neuroendocrine tumor"
          } ],
          id : "00", name : ""
        } ]
      }, {
           description : "mitoses/ 2 mm squared NOT 10 hpf, approximately count 42 hpf and divide by 5", 
        id : "00", name : "Mitotic rate",
       optional_state  : "required", "options" : [ {
          group : [ {
            
            id : "00", name : "Less than 2/ 2mm squared"
          }, {
          
            id : "00", name : "at least 2 and less than 20 /2 mm squared"
          }, {
            
            id : "00", name : "More than 20 per 2 mm squared"
          } ],
          id : "00", name : ""
        } ]  
        
      }, {
        id : "00", name : "Ki67 (Mib1)",
       optional_state  : "required", "options" : [ {
          group : [ {
            
            id : "00", name : "Less than 3%"
          }, {
          
            id : "00", name : "at least 3% and less than 20%"
          }, {
            
            id : "00", name : "More than 20%"
          } ],
          id : "00", name : ""
        } ]  
        
      }, {
        id : "00", name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "No evidence of primary tumor"
          }, {
            description : "DUODENUM",
            id : "00", name : "Invades mucosa/lamina propria"
          }, {
            description : "DUODENUM",
            id : "00", name : "Invades submucosa"
          }, {
            description : "DUODENUM",
            id : "00", name : "Invades muscularis propria"
          }, {
            description : "DUODENUM",
            id : "63", name : "Invades pancreas"
          }, {
            description : "DUODENUM",
            id : "63", name : "Tumor invades peripancreatic tissue"
          }, {
            description : "DUODENUM",
            id : "64", name : "Tumor penetrates serosa (visceral peritoneum) "
          }, {
            description : "DUODENUM",
            inputs_required : [ "" ],
            id : "11", name : "Tumor directly invades adjacent structures "
          }, {
            description : "AMPULLA ",
            id : "00", name : "Tumor limited to ampulla of Vater or sphincter of Oddi "
          }, {
            description : "AMPULLA ",
            id : "00", name : "Tumor invades duodenal submucosa"
          }, {
            description : "AMPULLA ",
            id : "00", name : "Tumor invades duodenal muscularis propria"
          }, {
            description : "AMPULLA ",
            id : "63", name : "Tumor invades pancreas "
          }, {
            description : "AMPULLA ",
            id : "63", name : "Tumor invades peripancreatic soft tissues  "
          }, {
            description : "AMPULLA ",
            id : "64", name : "Tumor penetrates serosa"
          }, {
            description : "AMPULLA",
            inputs_required : [ "" ],
            id : "11", name : "Tumor directly invades adjacent structures "
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "include distance/location of closest proximal/distal/radial/bile duct/uncinate, pancreatic neck margin",
        id : "00", name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "10", name : "Free, "
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Indeterminate"
          }, {
            id : "00", name : "Suspicious"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Present, extensive"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "50", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "50", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "51", name : "0" },{ id : "53", name : "1" },{ id : "53", name : "2" },{ id : "53", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "01", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "00", name : ""
          }, {
            description : "pathologic",
            id : "00", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "00", name : "m"
          }, {
            description : "recurrent",
            id : "00", name : "r"
          }, {
            description : "post-treatment",
            id : "00", name : "y"
          }, {
            id : "00", name : "mp"
          }, {
            id : "00", name : "rp"
          }, {
            id : "00", name : "yp"
          }, {
            id : "00", name : "mrp"
          }, {
            id : "00", name : "myp"
          }, {
            id : "00", name : "ryp"
          }, {
            id : "00", name : "mryp"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "02", name : "T",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "cannot be assessed",
            id : "00", name : "TX"
          }, {
            description : "No tumor",
            id : "00", name : "T0"
          }, {
            description : "Tumor invades lamina propria or submucosa and size 1 cm or less (small intestinal tumors); tumor 1 cm or less and confiend to sphincter of Oddi (ampullary tumors) ",
            id : "00", name : "T1"
          }, {
            description : "Tumor invades muscularis propria or tumor size >1 cm (small intestinal tumors); tumor size >1 cm or invades sphincter of Oddi (ampullary tumors)",
            id : "00", name : "T2"
          }, {
            description : "Tumor  invades pancreas or peripancreatic adipose tissues",
            id : "00", name : "T3"
          }, {
            description : "Tumor penetrates visceral peritoneum (serosa) or invades other organs ",
            id : "00", name : "T4"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "03", name : "N",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "00", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "00", name : "N0"
          }, {
            description : "Metastases to regional lymph nodes",
            id : "00", name : "N1"
          } ],
          id : "00", name : "Category (pN)"
        }]
        }, {
          id : "04", name : "M",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Distant metastases liver",
            id : "00", name : "M1a"
          }, {
               description : "Distant metastases all others",
            id : "00", name : "M1b"
          }, {
               description : "Distant metastases liver and others",
            id : "00", name : "M1c"
          }, {
            id : "00", name : "M (not applicable)"
          }, {
            id : "00", name : "distant metastasis not applicable"
          } ],
          id : "00", name : ""
        } ]
      } ]
      
     }, {
      most_common : false,
      id : "00", name : "Endometrium",
      optional : false,
      organ_group : "Gynecologic",
      properties : [  {
        id : "00", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Simple hysterectomy"
          }, {
            id : "00", name : "Radical hysterectomy"
          }, {
            id : "00", name : "Supracervical hysterectomy"
          }, {
            id : "00", name : "Simple hysterectomy and bilateral salpingo-oophorectomy"
          }, {
            id : "00", name : "Radical hysterectomy and bilateral salpingo-oophorectomy"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "WT1-, p53 -/focal+, ER +, Pax8+ p16-, HPV ISH- or cervical HPV ISH+, p16+, CEA+, p53 wild type, ER-/wk, PR- Vim -/wk vs endometrial HPV ISH-, p16-/wk, CEA -/wk, p53 abnormal/-, ER-/+, PR+, Vim +",
            id : "00", name : "Endometrioid adenocarcinoma"
          }, {
            id : "00", name : "Endometrioid adenocarcinoma with squamous differentiation"
          }, {
            id : "00", name : "Endometrioid adenocarcinoma, villoglandular variant"
          }, {
            id : "00", name : "Endometrioid adenocarcinoma with secretory differentiation"
          }, {
            id : "00", name : "Mucinous adenocarcinoma"
          }, {
            description : "NapsinA+, HNF-1b +, Pax8+",
            id : "00", name : "Clear cell adenocarcinoma"
          }, {
            description : "WT1-, p53 + or completely -, ER variable, Pax8+, p16+, HPV-",
            id : "00", name : "Serous endometrial intraepithelial carcinoma"
          }, {
            description : "WT1-, p53 + or completely -, ER variable, Pax8+, p16+, HPV-",
            id : "00", name : "Serous carcinoma"
          }, {
            id : "00", name : "Small cell carcinoma"
          }, {
            id : "00", name : "Large cell neuroendocrine carcinoma"
          }, {
            id : "00", name : "Carcinosarcoma (MMMT)"
          }, {
            description : "GATA3 +, ER-, p53 wild type, p 16 variable",
            id : "00", name : "Mesonephric adenocarcinoma"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "endometrioid and mucinous, <5% solid, small nuclei",
            id : "00", name : "FIGO grade 1/3"
          }, {
            description : "endometrioid and mucinous, 5-50% solid, small nuclei OR <5% solid, big nuclei",
            id : "00", name : "FIGO grade 2/3"
          }, {
            description : "endometrioid and mucinous, >50% solid, small nuclei OR 5-50% solid, big nuclei",
            id : "00", name : "FIGO grade 3/3"
          }, {
            description : "for serous, clear cell carcinoma",
            id : "00", name : "High grade"
          }, {
            description : "MMMT",
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Myometrial invasion (depth)",
       optional_state  : "required", "options" : [ {
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Myometrial thickness",
       optional_state  : "required", "options" : [ {
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Myometrial invasion (%)",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Limited to endometrium"
          }, {
            id : "00", name : "Less than or equal to 50%"
          }, {
            id : "00", name : "Greater than 50%"
          }, {
            id : "00", name : "Indeterminate"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Uterine serosal involvement",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Indeterminate"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Cervix involvement",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Cervical surface involvement only without stromal invasion"
          }, {
            id : "00", name : "Cervical stromal invasion limited to inner 50% of cervix thickness"
          }, {
            id : "00", name : "Cervical stromal invasion of outer 50% of cervix thickness"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {  description : "includes R/L parametrium, ovary, fallopian tube, vagina, pelvic wall, bladder wall, bladder mucosa, rectal wall, bowel mucosa, omentum",
        id : "00", name : "Other tissue(s) involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Indeterminate"
          }, {
            id : "00", name : "Suspicious"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Present, extensive"
          } ],
          id : "00", name : ""
        } ]
      }, {
    
        id : "00", name : "Lymph nodes, pelvic, # sentinel",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
            description : "includes pelvic, parametrial, obturator, internal iliac (hypogastric), external iliac, common iliac, sacral, and presacral",
        id : "00", name : "Lymph nodes, pelvic, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Pelvic lymph node laterality",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Right"
          }, {
            id : "00", name : "Left"
          }, {
            id : "00", name : "Bilateral"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
       
        id : "00", name : "Lymph nodes, pelvic, # w/ mets > 2mm",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
      
        id : "00", name : "Lymph nodes, pelvic, # w/ mets >0.2mm, <= 2mm",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "<= 0.2mm",
        id : "00", name : "Lymph nodes, pelvic, # w/ isolated tumor cells",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
       
        id : "00", name : "Lymph nodes, paraaortic, # sentinel",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymph nodes, paraaortic, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Paraaortic lymph node laterality",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Right"
          }, {
            id : "00", name : "Left"
          }, {
            id : "00", name : "Bilateral"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
      
        id : "00", name : "Lymph nodes, paraaortic, # w/ mets > 2mm",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
       
        id : "00", name : "Lymph nodes, paraaortic, # w/ mets >0.2mm, <= 2mm",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "<= 0.2mm",
        id : "00", name : "Lymph nodes, paraaortic, # w/ isolated tumor cells",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "01", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "00", name : ""
          }, {
            description : "preliminary/pathologic",
            id : "00", name : "AJCC p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "00", name : "AJCC m"
          }, {
            description : "recurrent",
            id : "00", name : "AJCC r"
          }, {
            description : "post-treatment",
            id : "00", name : "AJCC y"
          }, {
            id : "00", name : "AJCC mp"
          }, {
            id : "00", name : "AJCC rp"
          }, {
            id : "00", name : "AJCC yp"
          }, {
            id : "00", name : "AJCC mrp"
          }, {
            id : "00", name : "AJCC myp"
          }, {
            id : "00", name : "AJCC ryp"
          }, {
            id : "00", name : "AJCC mryp"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "02", name : "T",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "cannot be assessed",
            id : "00", name : "TX"
          }, {
            description : "Limited to endometrium or invades <50% of myometrium",
            id : "00", name : "T1a"
          }, {
            description : ">= 50% myometrial invasion",
            id : "00", name : "T1b"
          }, {
            description : "Invades stroma of cervix",
            id : "00", name : "T2"
          }, {
            description : "Penetrates serosa OR adnexa ",
            id : "00", name : "T3a"
          }, {
            description : "Invades vagina OR parametrium ",
            id : "00", name : "T3b"
          }, {
            description : "Invades mucosa of bladder, rectum",
            id : "00", name : "T4"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "03", name : "N",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "00", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "00", name : "N0"
          }, {
            description : "Positive ITCs (<=0.2mm) any site (pelvic or para-aortic)",
            id : "00", name : "N0(i+)"
          }, {
            description : "positive pelvic nodes >0.2mm AND <=2mm",
            id : "00", name : "N1mi"
          }, {
            description : "positive pelvic nodes, > 2mm",
            id : "00", name : "N1a"
          }, {
            description : "positive para-aortic nodes, >0.2mm AND <=2mm",
            id : "00", name : "N2mi"
          }, {
            description : "positive para-aortic nodes, >2mm",
            id : "00", name : "N2a"
          } ],
          id : "00", name : "Category (pN)"
        }]
        }, {
          id : "04", name : "M",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "metastases",
            id : "00", name : "M1"
          }, {
            id : "00", name : "M (not applicable)"
          }, {
            id : "00", name : "distant metastasis not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Stage (FIGO 2015)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "No or less than half myometrial invasion",
            id : "00", name : "FIGO IA"
          }, {
            description : "Invasion equal to or more than half of the myometrium",
            id : "00", name : "FIGO IB"
          }, {
            description : "Tumor invades cervical stroma, but does not extend beyond the uterus",
            id : "00", name : "FIGO II"
          }, {
            description : "Tumor invades the serosa of the corpus uteri and/or adnexae",
            id : "00", name : "FIGO IIIA"
          }, {
            description : "Vaginal involvement and/ or parametrial involvement",
            id : "00", name : "FIGO IIIB"
          }, {
            description : "Positive pelvic nodes",
            id : "00", name : "FIGO IIIC1"
          }, {
            description : "Positive para-aortic nodes with or without positive pelvic lymph nodes",
            id : "00", name : "FIGO IIIC2"
          }, {
            description : "Tumor invasion of bladder and/or bowel mucosa",
            id : "00", name : "FIGO IVA"
          }, {
            description : "Distant metastasis, including intraabdominal metastases and/or inguinal nodes",
            id : "00", name : "FIGO IVB"
          }, {
            description : "",
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      },  {
        description : "ALL women",
        id : "00", name : "MSI IHC and Interpretation",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Pending, addendum to follow"
          },{
             description : "tell the secretary to pick this and copy the answer in a separate note",
            id : "00", name : " See note"
          },{
              description : "A.",
            id : "00", name : " MLH1+, MSH2+, MSH6+, PMS2+. Intact nuclear expression of MMR proteins: low probability of microsatellite instability-high (MSI-H). There are exceptions to the above IHC interpretations. These results should not be considered in isolation, and clinical correlation with genetic counseling is recommended to assess the need for germline testing."
          }, {
              description : "B.",
            id : "00", name : "MLH1-, MSH2+, MSH6+, PMS2-. Loss of nuclear expression of MLH1 and PMS2: deficient mismatch repair/ high probability of microsatellite instability-high (MSI-H). Testing for methylation of the MLH1 promoter is indicated (the presence of MLH1 methylation suggests that the tumor is sporadic and germline evaluation is probably not indicated; absence of MLH1 methylation suggests the possibility of Lynch syndrome, and sequencing and/or large deletion/duplication testing of germline MLH1 is indicated). There are exceptions to the above IHC interpretations. These results should not be considered in isolation, and clinical correlation with genetic counseling is recommended to assess the need for germline testing."
          }, {
              description : "C.",
            id : "00", name : "MLH1+, MSH2-, MSH6-, PMS2+. Loss of nuclear expression of MSH2 and MSH6: deficient mismatch repair/ high probability of microsatellite instability-high (MSI-H). High probability of Lynch syndrome (sequencing and/or large deletion/duplication testing of germline MSH2 is indicated, and, if negative, sequencing and/or large deletion/duplication testing of germline MSH6 is indicated. If both are negative, sequencing and/or large deletion/duplication testing of germline EPCAM is indicated.) There are exceptions to the above IHC interpretations. These results should not be considered in isolation, and clinical correlation with genetic counseling is recommended to assess the need for germline testing"
          }, {
              description : "D.",
            id : "00", name : "MLH1+, MSH2+, MSH6-, PMS2+. Loss of nuclear expression of MSH6 only: deficient mismatch repair/ high probability of microsatellite instability-high (MSI-H). High probability of Lynch syndrome (sequencing and/or large deletion/duplication testing of germline MSH6 is indicated). There are exceptions to the above IHC interpretations. These results should not be considered in isolation, and clinical correlation with genetic counseling is recommended to assess the need for germline testing."
          }, {
              description : "E.",
            id : "00", name : "MLH1+, MSH2+, MSH6+, PMS2-. Loss of nuclear expression of PMS2 only: deficient mismatch repair/ high probability of microsatellite instability-high (MSI-H). High probability of Lynch syndrome (sequencing and/or large deletion/duplication testing of germline PMS2 is indicated). There are exceptions to the above IHC interpretations. These results should not be considered in isolation, and clinical correlation with genetic counseling is recommended to assess the need for germline testing."
          }, {
            id : "00", name : "Not applicable"
          } , {
            description : "case #",
            inputs_required : [ "" ],
            id : "10", name : "See case "
          }],
          id : "00", name : ""
        } ]
         }, {
        id : "00", name : "Ancillary studies ordered",
       optional_state  : "required", "options" : [ {
          group : [ {
             description : "loss of MLH1 and PMS2",
            id : "00", name : "MLH1 promoter methylation"
          }, {
            id : "00", name : "Pending results of MMR protein panel"
          }, {
            id : "00", name : "None"
          }, {
            id : "00", name : "Not applicable"
          }, {
            inputs_required : [ "" ],
            id : "10", name : "See case"
          } ],
          id : "00", name : ""
        } ] 
      } ]
    }, {
      most_common : false,
      id : "00", name : "Esophagus",
      optional : false,
      organ_group : "Gastrointestinal",
      properties : [  {
        id : "00", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Endoscopic resection"
          }, {
            id : "00", name : "Esophagectomy"
          }, {
            id : "00", name : "Esophagogastrectomy"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Cervical (proximal) esophagus"
          }, {
            id : "00", name : "Mid esophagus, upper thoracic esophagus"
          }, {
            id : "00", name : "Mid esophagus, middle thoracic esophagus"
          }, {
            id : "00", name : "Mid esophagus"
          }, {
            id : "00", name : "Distal esophagus (lower thoracic esophagus)"
          }, {
            id : "00", name : "Esophagogastric junction (EGJ)"
          }, {
            id : "00", name : "Proximal stomach and esophagogastric junction"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Relationship of Tumor to Esophagogastric Junction ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Tumor is entirely located within the tubular esophagus and does not involve the esophagogastric junction"
          }, {
            id : "00", name : "Tumor midpoint lies in the distal esophagus and tumor involves the esophagogastric junction"
          }, {
            id : "00", name : "Tumor midpoint is located at the esophagogastric junction"
          }, {
            id : "00", name : "Tumor midpoint lies in the proximal stomach or cardia and tumor involves the esophagogastric junction"
          }, {
            id : "00", name : "Indeterminate"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Distance of tumor center from esophagogastric junction ",
       optional_state  : "required", "options" : [ {
         group : [ {
          
            id : "00", name : "Not applicable"
          }, {
            id : "00", name : "indeterminate"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Adenocarcinoma"
          }, {
            id : "00", name : "Adenoid cystic carcinoma"
          }, {
            id : "00", name : "Mucoepidermoid carcinoma"
          }, {
            id : "00", name : "Mixed adenoneuroendocrine carcinoma "
          }, {
            id : "00", name : "Undifferentiated carcinoma with glandular component"
          }, {
            id : "00", name : "Squamous cell carcinoma"
          }, {
            id : "00", name : "Basaloid squamous cell carcinoma"
          }, {
            id : "00", name : "Adenosquamous carcinoma"
          }, {
            id : "00", name : "Spindle cell (squamous) carcinoma"
          }, {
            id : "00", name : "Verrucous (squamous) carcinoma"
          }, {
            id : "00", name : "Undifferentiated carcinoma with squamous component"
          }, {
            id : "00", name : "Undifferentiated carcinoma"
          }, {
            id : "00", name : "Large cell neuroendocrine carcinoma"
          }, {
            id : "00", name : "Small cell neuroendocrine carcinoma"
          }, {
            id : "00", name : "Neuroendocrine carcinoma (poorly differentiated)"
          }, {
            id : "00", name : "G1: Well-differentiated neuroendocrine tumor"
          }, {
            id : "00", name : "G2: Well-differentiated neuroendocrine tumor"
          }, {
            id : "00", name : "G3: Well-differentiated neuroendocrine tumor"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Grade 1/3, Well differentiated"
          }, {
            id : "00", name : "Grade 2/3, Moderately differentiated"
          }, {
            id : "00", name : "Grade 3/3, Poorly differentiated, undifferentiated"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "No evidence of primary tumor"
          }, {
            id : "60", name : "High-grade dysplasia (carcinoma in situ) "
          }, {
            id : "65", name : "Invades lamina propria"
          }, {
            id : "65", name : "Invades muscularis mucosae"
          }, {
            id : "66", name : "Invades submucosa"
          }, {
            id : "62", name : "Invades muscularis propria"
          }, {
            id : "63", name : "Invades periesophageal soft tissue (adventitia)"
          }, {
            id : "00", name : "Penetrates serosa"
          }, {
            description : "which",
            inputs_required : [ "" ],
            id : "10", name : "Invades adjacent structures "
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "include distance/location of closest proximal/distal/radial margin",
        id : "00", name : "Margins, invasive tumor",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "10", name : "Free, "
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "include distance/location of closest proximal/distal margin",
        id : "00", name : "Margins, dysplasia/CIS",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "10", name : "Free, "
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Treatment effect, primary site",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "No prior treatment"
          }, {
            id : "00", name : "Present (score 1 or 2)"
          }, {
            id : "00", name : "No response (score 3)"
          }, {
            id : "00", name : "Indeterminate"
          }, {
            id : "00", name : "Not known"
          }  ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Indeterminate"
          }, {
            id : "00", name : "Suspicious"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Present, extensive"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "50", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "50", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "51", name : "0" },{ id : "53", name : "1" },{ id : "53", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "01", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "00", name : ""
          }, {
            description : "pathologic",
            id : "00", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "00", name : "m"
          }, {
            description : "recurrent",
            id : "00", name : "r"
          }, {
            description : "post-treatment",
            id : "00", name : "y"
          }, {
            id : "00", name : "mp"
          }, {
            id : "00", name : "rp"
          }, {
            id : "00", name : "yp"
          }, {
            id : "00", name : "mrp"
          }, {
            id : "00", name : "myp"
          }, {
            id : "00", name : "ryp"
          }, {
            id : "00", name : "mryp"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "02", name : "T",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "cannot be assessed",
            id : "00", name : "TX"
          }, {
            description : "No tumor",
            id : "00", name : "T0"
          }, {
            description : "High-grade dysplasia",
            id : "00", name : "Tis"
          }, {
            description : "Tumor invades lamina propria, muscularis mucosae, or submucosa",
            id : "00", name : "T1"
          }, {
            description : "Tumor invades lamina propria or muscularis mucosae",
            id : "00", name : "T1a"
          }, {
            description : "Tumor invades submucosa",
            id : "00", name : "T1b"
          }, {
            description : "Tumor invades muscularis propria",
            id : "00", name : "T2"
          }, {
            description : "Tumor invades adventitia",
            id : "00", name : "T3"
          }, {
            description : "Tumor invades adjacent structures ",
            id : "00", name : "T4"
          }, {
            description : "Resectable tumor invading pleura, pericardium, or diaphragm ",
            id : "00", name : "T4a"
          }, {
            description : "Unresectable tumor invading other adjacent structures, such as aorta, vertebral body, trachea, etc",
            id : "00", name : "T4b"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "03", name : "N",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "00", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "00", name : "N0"
          }, {
            description : "Regional lymph node metastasis involving 1 to 2 nodes",
            id : "00", name : "N1"
          }, {
            description : "3 to 6 nodes involved",
            id : "00", name : "N2"
          }, {
            description : "7 or more nodes involved",
            id : "00", name : "N3"
          } ],
          id : "00", name : "Category (pN)"
        }]
        }, {
          id : "04", name : "M",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Distant metastases",
            id : "00", name : "M1"
          }, {
            id : "00", name : "M (not applicable)"
          }, {
            id : "00", name : "distant metastasis not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Additional findings ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Intestinal metaplasia (Barrett’s esophagus)"
          }, {
            id : "00", name : "Low grade dysplasia"
          }, {
            id : "00", name : "High grade Dysplasia"
          }, {
            id : "00", name : "Equivocal"
          }, {
            id : "00", name : "None"
          } ],
          id : "00", name : ""
        } ]
         }, {
          description : "Order IHC with reflext FISH for adenocarcinoma",
        id : "00", name : "Her2Neu by IHC",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Positive (3+)"
          }, {
            id : "00", name : "Negative (0-1+)"
          }, {
            id : "00", name : "Equivocal (2+)"
          }, {
            id : "00", name : "Pending"
          }, {
            id : "00", name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            id : "10", name : "See case "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Her2Neu by FISH",
        description : "Order IHC with reflext FISH for adenocarcinoma",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Positive, "
          }, {
            id : "00", name : "Negative"
          }, {
            id : "00", name : "Equivocal"
          }, {
            id : "00", name : "Pending"
          }, {
            id : "00", name : "Reflex pending if appropriate"
          }, {
            id : "00", name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            id : "10", name : "See case "
          } ],
          id : "00", name : ""
        } ]
        }, {
         description : "Keytruda, specific scoring system for adenocarcinoma",
        id : "00", name : "PDL1",
       optional_state  : "required", "options" : [ {
          group : [ {
            inputs_required : [ "% of cells", [ "strong", "moderate", "weak" ] ],
            id : "10", name : "Positive/Expressed"
          }, {
            inputs_required : [ "" ],
            id : "10", name : "Positive, Score ="
          }, {
            id : "00", name : "Negative (0%)"
          }, {
            id : "00", name : "Pending"
          }, {
            id : "00", name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            id : "10", name : "See case "
          } ],
          id : "00", name : ""
        }  ]
       }, {
          description: "adenocarcinoma only",
        id : "00", name : "MSI IHC and Interpretation",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Intact nuclear expression of MMR proteins (MLH1, MSH2, MSH6, PMS2): No evidence of deficient mismatch repair (low probability of MSI-H)"
          },{
            id : "00", name : "Loss of nuclear expression of one or more MMR proteins (MLH1, MSH2, MSH6, PMS2): deficient mismatch repair/ high probability of microsatellite instability-high (MSI-H). The presence of MSI-H/deficient mismatch repair may also be an indication for additional testing for Lynch syndrome and genetic counselling."
          }, {
            id : "00", name : "Pending"
          }, {
            id : "00", name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            id : "10", name : "See case "
          }],
          id : "00", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "00", name : "Ewing sarcoma/PNET, resection",
      optional : true,
      organ_group : "Pediatric",
      properties : [ {
        id : "00", name : "Procedure ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Resection "
          }, {
            id : "00", name : "Amputation"
          } , {
            id : "00", name : "Limb salvage procedure "
          }],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "00", name : ""
        } ]
      }, {
        description : "include distance/location of closest soft tissue and bone margin",
        id : "00", name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance to closest bone and or soft tissue margin (specify)",
            inputs_required : [ "" ],
            id : "10", name : "Free, "
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          } ],
          id : "00", name : ""
        } ]
      },{
        id : "00", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Indeterminate"
          }, {
            id : "00", name : "Suspicious"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Present, extensive"
          } ],
          id : "00", name : ""
        } ]
      },  {
        id : "00", name : "Preresection Treatment  ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Chemotherapy"
          }, {
            id : "00", name : "Radiation therapy"
          }, {
            id : "00", name : "Chemotherapy and radiation therapy"
          }, {
            id : "00", name : "Indeterminate"
          }, {
            id : "00", name : "Not known"
          }  ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Treatment effect, primary site ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Not applicable"
          }, {
            id : "00", name : "None"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Indeterminate"
          }, {
            id : "00", name : "Not known"
          }  ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "50", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "50", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "51", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
       }, {
        id : "00", name : "Distant Metastases ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
             description : "site",
            inputs_required : [ "" ],
            id : "10", name : "Present"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        
          id : "00", name : "Ancillary studies",
         optional_state  : "required", "options" : [ {
            group : [ {
             
              id : "00", name : "EWSR1 rearrangement"
            },{
             
              id : "00", name : "EWSR1-FLI1 rearrangement"
            },{
             
              id : "00", name : "EWSR1-ERG rearrangement"
            }, {
              
              id : "00", name : "Pending"
            }, {
              id : "00", name : "None"
            }, {
              id : "00", name : "Not applicable"
            }, {
              inputs_required : [ "" ],
              id : "10", name : "See case"
            } ],
            id : "00", name : ""
          } ]
        
      } ]
    },{
      most_common : false,
      id : "00", name : "Ewing sarcoma/PNET, biopsy",
      optional : true,
      organ_group : "Pediatric",
      properties : [ {
        id : "00", name : "Procedure ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Core biopsy "
          }, {
            id : "00", name : "Incisional biopsy"
          } , {
            id : "00", name : "Excisional biopsy "
          }],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "00", name : ""
        } ]
      }, {
        description : "Excisional biopsy only",
        id : "00", name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance to closest bone and or soft tissue margin (specify)",
            inputs_required : [ "" ],
            id : "10", name : "Free, "
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      },{
        id : "00", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Indeterminate"
          }, {
            id : "00", name : "Suspicious"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Present, extensive"
          } ],
          id : "00", name : ""
        } ]
      },  {
        
          id : "00", name : "Ancillary studies",
         optional_state  : "required", "options" : [ {
            group : [ {
             
              id : "00", name : "EWSR1 rearrangement"
            },{
             
              id : "00", name : "EWSR1-FLI1 rearrangement"
            },{
             
              id : "00", name : "EWSR1-ERG rearrangement"
            }, {
              
              id : "00", name : "Pending"
            }, {
              id : "00", name : "None"
            }, {
              id : "00", name : "Not applicable"
            }, {
              inputs_required : [ "" ],
              id : "10", name : "See case"
            } ],
            id : "00", name : ""
          } ]
        
      } ]
    }, {
      most_common : false,
      id : "00", name : "Gallbladder",
      optional : false,
      organ_group : "Gastrointestinal",
      properties : [ {
        id : "00", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Simple cholecystectomy"
          }, {
            id : "00", name : "Radical cholecystectomy (with liver resection and/or lymph nodes)"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Fundus"
          }, {
            id : "00", name : "Body"
          }, {
            id : "00", name : "Neck"
          }, {
            id : "00", name : "Cystic duct"
          }, {
            id : "00", name : "Free peritoneal side of gallbladder"
          }, {
            id : "00", name : "Hepatic side of gallbladder"
          }, {
            id : "00", name : "Equivocal"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Adenocarcinoma"
          }, {
            id : "00", name : "Adenocarcinoma, intestinal type"
          }, {
            id : "00", name : "Adenocarcinoma, biliary type"
          }, {
            id : "00", name : "Adenocarcinoma, gastric foveolar type"
          }, {
            id : "00", name : "Mucinous adenocarcinoma"
          }, {
            id : "00", name : "Signet-ring cell carcinoma"
          }, {
            id : "00", name : "Clear cell carcinoma"
          }, {
            id : "00", name : "Intracystic papillary neoplasm with an associated invasive carcinoma"
          }, {
            id : "00", name : "Mucinous cystic neoplasm with an associated invasive carcinoma "
          }, {
            id : "00", name : "Large cell neuroendocrine carcinoma"
          }, {
            id : "00", name : "Small cell carcinoma"
          }, {
            id : "00", name : "Neuroendocrine carcinoma (poorly differentiated)"
          }, {
            id : "00", name : "Adenosquamous carcinoma"
          }, {
            id : "00", name : "Squamous cell carcinoma"
          }, {
            id : "00", name : "Undifferentiated carcinoma"
          }, {
            id : "00", name : "Goblet cell carcinoid"
          }, {
            id : "00", name : "Mixed adenoneuroendocrine carcinoma"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Grade 1/3, Well differentiated"
          }, {
            id : "00", name : "Grade 2/3, Moderately differentiated"
          }, {
            id : "00", name : "Grade 3/3, Poorly differentiated"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "65", name : "Invades lamina propria"
          }, {
            id : "66", name : "Invades muscle"
          }, {
            id : "70", name : "Invades perimuscular connective tissue on the peritoneal side "
          }, {
            id : "71", name : "Invades perimuscular connective tissue on the hepatic side "
          }, {
            id : "00", name : "Penetrates serosa"
          }, {
            id : "00", name : "Invades liver"
          }, {
            description : "specify",
             inputs_required : [ "" ],
            id : "10", name : "Invades other organs"
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "include distance/location of closest margin, cystic duct, liver parenchyma",
        id : "00", name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "10", name : "Free, "
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "50", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "50", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "51", name : "0" },{ id : "53", name : "1" },{ id : "53", name : "2" },{ id : "53", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "01", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "00", name : ""
          }, {
            description : "pathologic",
            id : "00", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "00", name : "m"
          }, {
            description : "recurrent",
            id : "00", name : "r"
          }, {
            description : "post-treatment",
            id : "00", name : "y"
          }, {
            id : "00", name : "mp"
          }, {
            id : "00", name : "rp"
          }, {
            id : "00", name : "yp"
          }, {
            id : "00", name : "mrp"
          }, {
            id : "00", name : "myp"
          }, {
            id : "00", name : "ryp"
          }, {
            id : "00", name : "mryp"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "02", name : "T",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "cannot be assessed",
            id : "00", name : "TX"
          }, {
            description : "in situ",
            id : "00", name : "Tis"
          }, {
            description : "invades lamina propria",
            id : "00", name : "T1a"
          }, {
            description : "invades muscle",
            id : "00", name : "T1b"
          }, {
            description : "invades perimuscular tissue on the peritoneal side, without penetrating serosa",
            id : "00", name : "T2a"
          }, {
            description : "invades perimuscular tissue on the hepatic side, with out extension into liver",
            id : "00", name : "T2b"
          }, {
            description : "Penetrates serosa OR invades organs",
            id : "00", name : "T3"
          }, {
            description : "Invades main portal vein OR hepatic artery OR 2 extra hepatic organs",
            id : "00", name : "T4"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "03", name : "N",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "00", name : "NX"
          }, {
            description : "No metastasis",
            id : "00", name : "N0"
          }, {
            description : "1-3 Regional metastases",
            id : "00", name : "N1"
          }, {
            description : "4 or more lymph nodes",
            id : "00", name : "N2"
          } ],
          id : "00", name : "Category (M)"
        }]
        }, {
          id : "04", name : "M",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Distant metastasis ",
            id : "00", name : "M1"
          }, {
            id : "00", name : "M (not applicable)"
          }, {
            id : "00", name : "distant metastasis not applicable"
          } ],
          id : "00", name : ""
        } ]
        }, {
          description: "adenocarcinoma only",
        id : "00", name : "MSI IHC and Interpretation",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Intact nuclear expression of MMR proteins (MLH1, MSH2, MSH6, PMS2): No evidence of deficient mismatch repair (low probability of MSI-H)"
          },{
            id : "00", name : "Loss of nuclear expression of one or more MMR proteins (MLH1, MSH2, MSH6, PMS2): deficient mismatch repair/ high probability of microsatellite instability-high (MSI-H). The presence of MSI-H/deficient mismatch repair may also be an indication for additional testing for Lynch syndrome and genetic counselling."
          }, {
            id : "00", name : "Pending"
          }, {
            id : "00", name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            id : "10", name : "See case "
          }],
          id : "00", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "00", name : "Germ Cell, extragonadal, biopsy",
      optional : true,
      organ_group : "Pediatric",
      properties : [ {
        id : "00", name : "Procedure ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Core needle biopsy"
          }, {
            id : "00", name : "Incisional biopsy"
          } ],
          id : "00", name : ""
        } ]
      },{
        id : "00", name : "Patient Age ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Congenital/neonatal (birth - 6 mo)"
          }, {
            id : "00", name : "Childhood/prepubertal (7 mo - 12 y)"
          }, {
            id : "00", name : "Postpubertal/adult (≥12 y)"
          }, {
            id : "00", name : "Not known"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Intracranial"
          }, {
            id : "00", name : "Head and neck region "
          }, {
            id : "00", name : "Mediastinum"
          }, {
            id : "00", name : "Retroperitoneum/abdomen"
          }, {
            id : "00", name : "Sacrococcygeal"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "00", name : ""
        } ]
      
      }, {
        id : "00", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Mature teratoma"
          }, {
            id : "00", name : "Immature teratoma"
          }, {
            id : "00", name : "Teratoma and other germ cell tumor "
          }, {
            id : "00", name : "Teratoma and other non-germ cell epithelial malignancy "
          }, {
            id : "00", name : "Teratoma and sarcoma "
          }, {
            id : "00", name : "Germinoma"
          }, {
            id : "00", name : "Yolk sac tumor"
          }, {
            id : "00", name : "Embryonal carcinoma "
          }, {
            id : "00", name : "Choriocarcinoma "
          }, {
            id : "00", name : "Teratoma and sarcoma "
          }, {
            id : "00", name : "Combined nonteratomatous germ cell tumor "
          } ],
          id : "00", name : ""
        } ]
      }   ]
    },{
      most_common : false,
      id : "00", name : "Germ Cell, extragonadal, resection",
      optional : true,
      organ_group : "Pediatric",
      properties : [ {
        id : "00", name : "Procedure ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Marginal excison"
          }, {
            id : "00", name : "Wide excision"
          } ],
          id : "00", name : ""
        } ]
      },{
        id : "00", name : "Patient Age ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Congenital/neonatal (birth - 6 mo)"
          }, {
            id : "00", name : "Childhood/prepubertal (7 mo - 12 y)"
          }, {
            id : "00", name : "Postpubertal/adult (≥12 y)"
          }, {
            id : "00", name : "Not known"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Intracranial"
          }, {
            id : "00", name : "Head and neck region "
          }, {
            id : "00", name : "Mediastinum"
          }, {
            id : "00", name : "Retroperitoneum/abdomen"
          }, {
            id : "00", name : "Sacrococcygeal"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "00", name : ""
        } ]
      
      }, {
        id : "00", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Mature teratoma"
          }, {
            id : "00", name : "Immature teratoma"
          }, {
            id : "00", name : "Teratoma and other germ cell tumor "
          }, {
            id : "00", name : "Teratoma and other non-germ cell epithelial malignancy "
          }, {
            id : "00", name : "Teratoma and sarcoma "
          }, {
            id : "00", name : "Germinoma"
          }, {
            id : "00", name : "Yolk sac tumor"
          }, {
            id : "00", name : "Embryonal carcinoma "
          }, {
            id : "00", name : "Choriocarcinoma "
          }, {
            id : "00", name : "Teratoma and sarcoma "
          }, {
            id : "00", name : "Combined nonteratomatous germ cell tumor "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Tumor involving coccyx"
          }, {
            id : "00", name : "Coccyx uninvolved"
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "include distance/location of closest margin",
        id : "00", name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "10", name : "Free, "
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "50", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "50", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "51", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Distant Metastases",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Present"
          }, {
            id : "00", name : "M (not applicable)"
          }, {
            id : "00", name : "distant metastasis not applicable"
          } ],
          id : "00", name : ""
        } ]
     
      } ]
    }, {
      most_common : false,
      id : "00", name : "GIST",
      optional : false,
      organ_group : "Gastrointestinal",
      properties : [ {
        id : "00", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Excisional biopsy"
          }, {
            id : "00", name : "Resection"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Esophagus"
          }, {
            id : "00", name : "Stomach"
          }, {
            id : "00", name : "Duodenum"
          }, {
            id : "00", name : "Jejunum"
          }, {
            id : "00", name : "Ileum"
          }, {
            id : "00", name : "Small intestine"
          }, {
            id : "00", name : "Right colon"
          }, {
            id : "00", name : "Transverse colon"
          }, {
            id : "00", name : "Descending colon"
          }, {
            id : "00", name : "Colon"
          }, {
            id : "00", name : "Rectum"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor focality",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Single focus"
          }, {
            id : "00", name : "Multiple foci"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Subtype",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Spindle cell"
          }, {
            id : "00", name : "Epithelioid"
          }, {
            id : "00", name : "Mixed"
          } ],
          id : "00", name : ""
        } ]
       }, {
         description : " mitoses/ 5 mm squared approximately 20-25 hpfs",
        id : "00", name : "Mitotic rate",
       optional_state  : "required", "options" : [ {
          group : [  {
            id : "00", name : " 5 or less/ 5 mm squared"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : " 5 or less mitoses/ 5 mm squared",
            id : "00", name : "Low grade"
          }, {
            description : "greater than 5 mitoses/ 5 mm squared",
            id : "00", name : "High grade"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Risk assessment",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "GASTRIC: <= 2 cm",
            id : "00", name : "None"
          }, {
            description : "GASTRIC: >2cm AND <= 5cm AND mitoses <=5/5 mm squared",
            id : "00", name : "Very low risk"
          }, {
            description : "GASTRIC: > 5cm AND < 10cm AND mitoses <=5/5 mm squared",
            id : "00", name : "Low risk"
          }, {
            description : "GASTRIC: (> 10cm AND mitoses <=5/5 mm squared) OR (>2cm AND <=5cm AND mitoses > 5/50 hpf) ",
            id : "00", name : "Moderate risk"
          }, {
            description : "GASTRIC:> 5cm AND  mitoses >5/5 mm squared ",
            id : "00", name : "High risk"
          }, {
            description : "DUODENUM: <= 2cm AND mitoses <=5/5 mm squared",
            id : "00", name : "None"
          }, {
            description : "DUODENUM: (>2cm AND <= 5cm AND mitoses <=5/5 mm squared)",
            id : "00", name : "Low risk"
          }, {
            description : "DUODENUM: {> 10cm AND mitoses <=5/5 mm squared) OR (> 2cm AND <= 5cm AND mitoses > 5/50 hpf) OR (> 10 cm AND mitoses > 5/5 mm squared)",
            id : "00", name : "High risk"
          }, {
            description : "DUODENUM: (> 5cm AND <= 10cm AND mitoses <= 5/50 hpf) OR (< 2cm AND mitoses >5/5 mm squared) OR (> 5cm AND <= 10cm AND mitoses >5/5 mm squared)",
            id : "00", name : "Insufficient data"
          }, {
            description : "JEJUNUM/ILEUM: (<= 2 cm AND mitoses <=5/5 mm squared)",
            id : "00", name : "None"
          }, {
            description : "JEJUNUM/ILEUM: (>2cm AND <= 5cm AND mitoses <=5/5 mm squared)",
            id : "00", name : "Low risk"
          }, {
            description : "JEJUNUM/ILEUM: (> 5cm AND < 10cm AND mitoses <=5/5 mm squared)",
            id : "00", name : "Moderate risk"
          }, {
            description : "JEJUNUM/ILEUM: (> 10cm) OR (mitoses >5/5 mm squared)",
            id : "00", name : "High risk"
          }, {
            description : "RECTUM: (<= 2 cm AND mitoses <=5/5 mm squared)",
            id : "00", name : "None"
          }, {
            description : "RECTUM: (>2cm AND <= 5cm AND mitoses <=5/5 mm squared)",
            id : "00", name : "Low risk"
          }, {
            description : "RECTUM:( > 10cm) OR (< 5cm AND mitoses >5/5 mm squared)",
            id : "00", name : "High risk"
          }, {
            description : "RECTUM: (> 5cm AND < 10cm)",
            id : "00", name : "Insufficient data"
          }, {
            id : "00", name : "Metastatic"
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "include distance/location of closest margin",
        id : "00", name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "10", name : "Free, "
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Treatment Effect ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "No known therapy"
          }, {
            id : "00", name : "None"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Indeterminate"
          }  ],
          id : "00", name : ""
        } ] 
  
     }, {
        id : "01", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "00", name : ""
          }, {
            description : "pathologic",
            id : "00", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "00", name : "m"
          }, {
            description : "recurrent",
            id : "00", name : "r"
          }, {
            description : "post-treatment",
            id : "00", name : "y"
          }, {
            id : "00", name : "mp"
          }, {
            id : "00", name : "rp"
          }, {
            id : "00", name : "yp"
          }, {
            id : "00", name : "mrp"
          }, {
            id : "00", name : "myp"
          }, {
            id : "00", name : "ryp"
          }, {
            id : "00", name : "mryp"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "02", name : "T",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "cannot be assessed",
            id : "00", name : "TX"
          }, {
            description : "<= 2cm",
            id : "00", name : "T1"
          }, {
            description : "> 2 cm AND <= 5cm",
            id : "00", name : "T2"
          }, {
            description : "> 5 cm AND <= 10cm",
            id : "00", name : "T3"
          }, {
            description : ">10 cm",
            id : "00", name : "T4"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "03", name : "N",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "00", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "00", name : "N0"
          }, {
            description : "Regional lymph nodes",
            id : "00", name : "N1"
          } ],
          id : "00", name : "Category (pN)"
        }]
        }, {
          id : "04", name : "M",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "metastases",
            id : "00", name : "M1"
          }, {
            id : "00", name : "M (not applicable)"
          }, {
            id : "00", name : "distant metastasis not applicable"
          } ],
          id : "00", name : ""
        } ]
  
    }, {
        id : "00", name : "KIT(CD117) Immunohistochemistry",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Positive, "
          }, {
            id : "00", name : "Negative"
          }, {
            id : "00", name : "Equivocal"
          } ],
          id : "00", name : ""
        } ]
     } , {
        id : "00", name : "DOG1 Immunohistochemistry",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Positive, "
          }, {
            id : "00", name : "Negative"
          }, {
            id : "00", name : "Equivocal"
          } ],
          id : "00", name : ""
        } ]
     }]
    }, {
      most_common : false,
      id : "00", name : "Hepatoblastoma, biopsy",
      optional : true,
      organ_group : "Pediatric",
      properties : [ {
        id : "00", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Core biopsy"
          }, {
            id : "00", name : "Incisional biopsy"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Right lobe"
          }, {
            id : "00", name : "Left lobe "
          }, {
            id : "00", name : "Right and left lobes "
          } ],
          id : "00", name : ""
        } ]
      },  {
        id : "00", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Hepatoblastoma, epithelial type, fetal pattern (mitotically inactive)"
          }, {
            id : "00", name : "Hepatoblastoma, epithelial type, fetal pattern (mitotically active)  "
          }, {
            id : "00", name : "Hepatoblastoma, epithelial type, embryonal pattern  "
          }, {
            id : "00", name : "Hepatoblastoma, epithelial type, pleomorphic (poorly differentiated)  "
          }, {
            id : "00", name : "Hepatoblastoma, epithelial type, macrotrabecular pattern "
          }, {
            id : "00", name : "Hepatoblastoma, epithelial type, small cell undifferentiated pattern "
          }, {
            id : "00", name : "Hepatoblastoma, mixed epithelial and mesenchymal type without teratoid features  "
          }, {
            id : "00", name : "Hepatoblastoma, mixed epithelial and mesenchymal type with teratoid features  "
          } ],
          id : "00", name : ""
        } ]
     
    
      },   {
        id : "00", name : "Serum Alpha Fetoprotein (αFP) Level ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "<100 ng/mL "
          }, {
            id : "00", name : "≥100 ng/mL"
          }, {
            id : "00", name : "Not known "
          } ],
          id : "00", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "00", name : "Hepatoblastoma, resection",
      optional : true,
      organ_group : "Pediatric",
      properties : [ {
        id : "00", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Right lobectomy"
          }, {
            id : "00", name : "Extended right lobectomy "
          }, {
            id : "00", name : "Medial segmentectomy "
          }, {
            id : "00", name : "Left lateral segmentectomy "
          }, {
            id : "00", name : "Total left lobectomy "
          }, {
            id : "00", name : "Explanted liver "
          }, {
            id : "00", name : "Medial segmentectomy "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Right lobe"
          }, {
            id : "00", name : "Left lobe "
          }, {
            id : "00", name : "Right and left lobes "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          description : "each nodule",
          id : "00", name : ""
        } ]
          }, {
        id : "00", name : "Preoperative treatment",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "No known preoperative therapy"
          }, {
            id : "00", name : "Preoperative therapy given"
          }, {
            id : "00", name : "Not specified"
          }, {
            id : "00", name : "Not known"
          }  ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Hepatoblastoma, epithelial type, fetal pattern (mitotically inactive)"
          }, {
            id : "00", name : "Hepatoblastoma, epithelial type, fetal pattern (mitotically active)  "
          }, {
            id : "00", name : "Hepatoblastoma, epithelial type, embryonal pattern  "
          }, {
            id : "00", name : "Hepatoblastoma, epithelial type, pleomorphic (poorly differentiated)  "
          }, {
            id : "00", name : "Hepatoblastoma, epithelial type, macrotrabecular pattern "
          }, {
            id : "00", name : "Hepatoblastoma, epithelial type, small cell undifferentiated pattern "
          }, {
            id : "00", name : "Hepatoblastoma, mixed epithelial and mesenchymal type without teratoid features  "
          }, {
            id : "00", name : "Hepatoblastoma, mixed epithelial and mesenchymal type with teratoid features  "
          } ],
          id : "00", name : ""
        } ]
     
    
      }, {
        description : "include distance",
        id : "00", name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "10", name : "Free, "
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "include distance/location of closest extent",
        id : "00", name : "Capsular surface",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "10", name : "Free, "
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "50", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "50", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "51", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "(includes metastasis to lymph nodes in the following locations: inferior phrenic, distal to hilum, hepatoduodenal ligament, or caval region",
        id : "00", name : "Distant metastases",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Present"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
           }, {
        id : "00", name : "Serum Alpha Fetoprotein (αFP) Level ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "<100 ng/mL "
          }, {
            id : "00", name : "≥100 ng/mL"
          }, {
            id : "00", name : "Not known "
          } ],
          id : "00", name : ""
        } ]
      } ]
    },{
      most_common : false,
      id : "00", name : "Hepatocellular Carcinoma",
      optional : false,
      organ_group : "Gastrointestinal",
      properties : [  {
        id : "00", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Wedge resection"
          }, {
            id : "00", name : "Partial hepatectomy "
          }, {
            id : "00", name : "Total hepatectomy "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor focality",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Single focus"
          }, {
            id : "00", name : "Multiple foci "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Right lobe"
          }, {
            id : "00", name : "Left lobe"
          }, {
            id : "00", name : "Caudate lobe "
          }, {
            id : "00", name : "Quadrate lobe"
          }, {
             description : "specify",
              inputs_required : [ "" ],
            id : "10", name : "Segmental location  "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Hepatocellular carcinoma"
          }, {
            id : "00", name : "Fibrolamellar hepatocellular carcinoma  "
          }, {
            id : "00", name : "Undifferentiated carcinoma  "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Grade 1/4, well differentiated"
          }, {
            id : "00", name : "Grade 2/4, moderately differentiated"
          }, {
            id : "00", name : "Grade 3/4, poorly differentiated"
          }, {
            id : "00", name : "Grade 4/4, undifferentiated"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Tumor limited to liver "
          }, {
            id : "00", name : "Tumor involves a major branch of the portal vein"
          }, {
            id : "00", name : "Tumor involves 1 or more hepatic vein(s) "
          }, {
            id : "64", name : "Tumor involves visceral peritoneum"
          }, {
            id : "00", name : "Tumor directly invades gallbladder "
          }, {
            description : "which",
            inputs_required : [ "" ],
            id : "11", name : "Tumor directly invades adjacent organs other than the gallbladder  "
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "include distance/location of closest hepatic parenchymal margin",
        id : "00", name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "10", name : "Free, "
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Indeterminate"
          }, {
            id : "00", name : "Suspicious"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Present, extensive"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "50", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "50", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "51", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Treatment Effect ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "No known therapy"
          }, {
            id : "00", name : "None"
          }, {
            id : "00", name : "Complete necrosis (no viable tumor)"
          }, {
            id : "00", name : "Incomplete necrosis (viable tumor present)"
          }, {
            id : "00", name : "Indeterminate"
          }  ],
          id : "00", name : ""
        } ] 
  
     }, {
        id : "01", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "00", name : ""
          }, {
            description : "pathologic",
            id : "00", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "00", name : "m"
          }, {
            description : "recurrent",
            id : "00", name : "r"
          }, {
            description : "post-treatment",
            id : "00", name : "y"
          }, {
            id : "00", name : "mp"
          }, {
            id : "00", name : "rp"
          }, {
            id : "00", name : "yp"
          }, {
            id : "00", name : "mrp"
          }, {
            id : "00", name : "myp"
          }, {
            id : "00", name : "ryp"
          }, {
            id : "00", name : "mryp"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "02", name : "T",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "cannot be assessed",
            id : "00", name : "TX"
          }, {
            description : "Solitary tumor <= 2cm",
            id : "00", name : "T1a"
          }, {
            description : "Solitary tumor >2cm without vascular invasion ",
            id : "00", name : "T1b"
          }, {
            description : "Solitary tumor > 2cm with vascular invasion OR multiple tumors none more than 5 cm ",
            id : "00", name : "T2"
          }, {
            description : "Multiple tumors, at least one of which is >5 cm",
            id : "00", name : "T3"
          }, {
            description : "Tumor(s) with direct invasion of adjacent organs other than the gallbladder or with perforation of visceral peritoneum ",
            id : "00", name : "T4"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "03", name : "N",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "00", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "00", name : "N0"
          }, {
            description : "Regional lymph node metastases) ",
            id : "00", name : "N1"
          } ],
          id : "00", name : "Category (pN)"
        }]
        }, {
          id : "04", name : "M",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Distant metastases",
            id : "00", name : "M1"
          }, {
            id : "00", name : "M (not applicable)"
          }, {
            id : "00", name : "distant metastasis not applicable"
          } ],
          id : "00", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "00", name : "Intrahepatic Bile Ducts",
      optional : false,
      organ_group : "Gastrointestinal",
      properties : [  {
        id : "00", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Wedge resection"
          }, {
            id : "00", name : "Partial hepatectomy "
          }, {
            id : "00", name : "Total hepatectomy "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor focality",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Single focus"
          }, {
            id : "00", name : "Multiple foci "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Intrahepatic cholangiocarcinoma"
          }, {
            id : "00", name : "Combined hepatocellular and cholangiocarcinoma "
          }, {
            id : "00", name : "Intraductal papillary neoplasm with an associated invasive carcinoma"
          }, {
            id : "00", name : "Mucinous cystic neoplasm with an associated invasive carcinoma"
          }, {
            id : "00", name : "Large cell neuroendocrine carcinoma"
          }, {
            id : "00", name : "Small cell neuroendocrine carcinoma"
          }, {
            id : "00", name : "Neuroendocrine carcinoma (poorly differentiated)"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Grade 1/3, well differentiated"
          }, {
            id : "00", name : "Grade 2/3, moderately differentiated"
          }, {
            id : "00", name : "Grade 3/3, poorly differentiated"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Tumor limited to the intrahepatic bile ducts histologically (carcinoma in situ) "
          }, {
            id : "00", name : "Tumor limited to hepatic parenchyma"
          }, {
            id : "00", name : "Tumor involves visceral peritoneal surface "
          }, {
            id : "00", name : "Tumor invades the adjacent liver parenchyma"
          }, {
            id : "00", name : "Tumor directly invades gallbladder "
          }, {
            description : "which",
            inputs_required : [ "" ],
            id : "11", name : "Tumor directly invades adjacent organs other than the gallbladder  "
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "include distance/location of closest bile duct/hepatic margin",
        id : "00", name : "Margins, invasive tumor",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "10", name : "Free, "
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Indeterminate"
          }, {
            id : "00", name : "Suspicious"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Present, extensive"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "50", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "50", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "51", name : "0" },{ id : "53", name : "1" },{ id : "53", name : "2" },{ id : "53", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "01", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "00", name : ""
          }, {
            description : "pathologic",
            id : "00", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "00", name : "m"
          }, {
            description : "recurrent",
            id : "00", name : "r"
          }, {
            description : "post-treatment",
            id : "00", name : "y"
          }, {
            id : "00", name : "mp"
          }, {
            id : "00", name : "rp"
          }, {
            id : "00", name : "yp"
          }, {
            id : "00", name : "mrp"
          }, {
            id : "00", name : "myp"
          }, {
            id : "00", name : "ryp"
          }, {
            id : "00", name : "mryp"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "02", name : "T",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "cannot be assessed",
            id : "00", name : "TX"
          }, {
            description : "Carcinoma in situ",
            id : "00", name : "Tis"
          }, {
            description : "Solitary tumor <=5cm without vascular invasion ",
            id : "00", name : "T1a"
          }, {
            description : "Solitary tumor > 5cm without vascular invasion ",
            id : "00", name : "T1b"
          }, {
            description : "Solitary tumor with vascular invasion OR multiple tumors ",
            id : "00", name : "T2"
          }, {
            description : "Tumor perforating the visceral peritoneum or   ",
            id : "00", name : "T3"
          }, {
            description : "Tumor involving the local extrahepatic structures by direct invasion ",
            id : "00", name : "T4"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "03", name : "N",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "00", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "00", name : "N0"
          }, {
            description : "Regional lymph node metastases) ",
            id : "00", name : "N1"
          } ],
          id : "00", name : "Category (pN)"
        }]
        }, {
          id : "04", name : "M",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Distant metastases",
            id : "00", name : "M1"
          }, {
            id : "00", name : "M (not applicable)"
          }, {
            id : "00", name : "distant metastasis not applicable"
          } ],
          id : "00", name : ""
        } ]
        }, {
          description: "adenocarcinoma only",
        id : "00", name : "MSI IHC and Interpretation",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Intact nuclear expression of MMR proteins (MLH1, MSH2, MSH6, PMS2): No evidence of deficient mismatch repair (low probability of MSI-H)"
          },{
            id : "00", name : "Loss of nuclear expression of one or more MMR proteins (MLH1, MSH2, MSH6, PMS2): deficient mismatch repair/ high probability of microsatellite instability-high (MSI-H). The presence of MSI-H/deficient mismatch repair may also be an indication for additional testing for Lynch syndrome and genetic counselling."
          }, {
            id : "00", name : "Pending"
          }, {
            id : "00", name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            id : "10", name : "See case "
          }],
          id : "00", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "00", name : "Jejunum/Ileal neuroendocrine tumor",
      optional : false,
      organ_group : "Endocrine",
      properties : [  {
        id : "00", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Segmental resection"
          }, {
            id : "00", name : "Ileocolic resection"
          }],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Jejunum "
          }, {
            id : "00", name : "Ileum"
          }, {
            id : "00", name : "Small intestine, other than duodenum"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor Focality ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Single focus"
          }, {
            id : "00", name : "Multiple foci"
          }, {
            id : "00", name : "Equivocal"
          } ],
          id : "00", name : ""
        } ]
      }, {
         description : "For small cell (high grade NET use small intesting carcinoma protocol not this one) ",  
        id : "00", name : "Type and Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "< 2mitoses/10 hpf and/or Ki67<3% ", 
            id : "00", name : "Grade 1/3, Well differentiated neuroendocrine tumor, low grade (carcinoid)"
          }, {
            description : ">= 2 AND < 20 mitoses/10 hpf and/or Ki67 >=3 AND <20% ",  
            id : "00", name : "Grade 2/3, Well differentiated neuroendocrine tumor, intermediate grade (atypical carcinoid)"
          }, {
             description : "> 20 mitoses/10 hpf and/or Ki67 >20% ",  
            id : "00", name : "Grade 3/3, Well differentiated neuroendocrine tumor"
          } ],
          id : "00", name : ""
        } ]
      }, {
           description : "mitoses/ 2 mm squared NOT 10 hpf, approximately count 42 hpf and divide by 5", 
        id : "00", name : "Mitotic rate",
       optional_state  : "required", "options" : [ {
          group : [ {
            
            id : "00", name : "Less than 2/2mm squared"
          }, {
          
            id : "00", name : "at least 2 and less than 20 /2 mm squared"
          }, {
            
            id : "00", name : "More than 20 per 2 mm squared"
          } ],
          id : "00", name : ""
        } ]  
        
      }, {
        id : "00", name : "Ki67 (Mib1)",
       optional_state  : "required", "options" : [ {
          group : [ {
            
            id : "00", name : "Less than 3%"
          }, {
          
            id : "00", name : "at least 3% and less than 20%"
          }, {
            
            id : "00", name : "More than 20%"
          } ],
          id : "00", name : ""
        } ]  
        
      }, {
        id : "00", name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "No evidence of primary tumor"
          }, {
           
            id : "00", name : "Invades lamina propria"
          }, {
           
            id : "00", name : "Invades submucosa"
          }, {
            
            id : "00", name : "Invades muscularis propria"
          }, {
            
            id : "00", name : "Tumor invades subserosal tissue without involvement of visceral peritoneum"
          }, {
            
            id : "64", name : "Tumor penetrates serosa (visceral peritoneum) "
          }, {
            description : "specify",
            inputs_required : [ "" ],
            id : "11", name : "Tumor directly invades adjacent structures "
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "include distance/location of closest proximal/distal/radial margin",
        id : "00", name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "10", name : "Free, "
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Indeterminate"
          }, {
            id : "00", name : "Suspicious"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Present, extensive"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Large Mesenteric Masses (>2 cm) ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Indeterminate"
          }, {
            id : "00", name : "Present"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "50", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "50", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "51", name : "0" },{ id : "53", name : "1" },{ id : "53", name : "2" },{ id : "53", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "01", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "00", name : ""
          }, {
            description : "pathologic",
            id : "00", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "00", name : "m"
          }, {
            description : "recurrent",
            id : "00", name : "r"
          }, {
            description : "post-treatment",
            id : "00", name : "y"
          }, {
            id : "00", name : "mp"
          }, {
            id : "00", name : "rp"
          }, {
            id : "00", name : "yp"
          }, {
            id : "00", name : "mrp"
          }, {
            id : "00", name : "myp"
          }, {
            id : "00", name : "ryp"
          }, {
            id : "00", name : "mryp"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "02", name : "T",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "cannot be assessed",
            id : "00", name : "TX"
          }, {
            description : "No tumor",
            id : "00", name : "T0"
          }, {
            description : "Tumor invades lamina propria or submucosa and size 1 cm or less (small intestinal tumors) ",
            id : "00", name : "T1"
          }, {
            description : "Tumor invades muscularis propria or tumor size >1 cm (small intestinal tumors)",
            id : "00", name : "T2"
          }, {
            description : "Tumor invades through the muscularis propria into subserosal tissue without penetration of overlying serosa ",
            id : "00", name : "T3"
          }, {
            description : "Tumor penetrates visceral peritoneum (serosa) or invades other organs ",
            id : "00", name : "T4"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "03", name : "N",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "00", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "00", name : "N0"
          }, {
            description : "Metastases to < 12 regional lymph nodes",
            id : "00", name : "N1"
          }, {
            description : "Metastases to >= 12 regional lymph nodes OR mesenteric mass >2cm",
            id : "00", name : "N2"
          } ],
          id : "00", name : "Category (pN)"
        }]
        }, {
          id : "04", name : "M",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Distant metastases liver only",
            id : "00", name : "M1a"
          }, {
              description : "Distant metastases other than liver",
            id : "00", name : "M1b"
          }, {
              description : "Distant metastases liver and other",
            id : "00", name : "M1c"
          }, {
            id : "00", name : "M (not applicable)"
          }, {
            id : "00", name : "distant metastasis not applicable"
          } ],
          id : "00", name : ""
        } ]
      } ]  
     }, {
      most_common : false,
      id : "00", name : "Kidney",
      optional : false,
      organ_group : "Genitourinary",
      properties : [ {
        id : "00", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Right partial nephrectomy"
          }, {
            id : "00", name : "Right radical/total nephrectomy"
          } , {
            id : "00", name : "Right nephroureterectomy"
          }, {
            id : "00", name : "Left partial nephrectomy"
          }, {
            id : "00", name : "Left radical/total nephrectomy"
          } , {
            id : "00", name : "Left nephroureterectomy"
          }],
          id : "00", name : ""
        } ]
    
      }, {
        id : "00", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor focality",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Single focus"
          }, {
            id : "00", name : "Multiple foci"
          } ],
          id : "00", name : ""
        } ]
    
      }, {
        id : "00", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
                   description : "Pax8+, CK7-, CD117-, CD10+, GATA3-",
            id : "00", name : "Clear cell renal cell carcinoma"
          }, {
               description : "Pax8+, CK7+",
            id : "00", name : "Multilocular clear cell renal cell carcinoma"
          }, {
               description : "Pax8+, CK7+, GATA3-",
            id : "00", name : "Papillary renal cell carcinoma"
          }, {
               description : "Pax8+, CK7+, GATA3-",
            id : "00", name : "Papillary renal cell carcinoma, Type 1"
          }, {
               description : "Pax8+, CK7 variable, GATA3-",
            id : "00", name : "Papillary renal cell carcinoma, Type 2"
          }, {
             description : "Pax8+, CK7 +, GATA3+",
            id : "00", name : "Oncocytic papillary renal cell carcinoma"
          }, {
             description : "Hales+, CK7+, CK20+, PAX8+, CD117+, CD10-/focal+, oncocytoma: Hales-, CK7 -/focal+, CK20 -/focal+, PAX8-, CD117+, CD10-/focal+",
            id : "00", name : "Chromophobe renal cell carcinoma"
          }, {
             description : "Pax8+, CK7+, INI+, OCT3/4-, FH+, 2SC-",
            id : "00", name : "Collecting duct carcinoma"
          }, {
            description : "Pax8+, CK7+, INI-, OCT3/4+, FH+,2SC-",
            id : "00", name : "Renal medullary carcinoma"
          }, {
               description : "TFE3 +, Ker -/focal+, EMA -/focal+, Pax8 variable",
            id : "00", name : "MiT family translocation renal cell carcinoma"
          }, {
               description : "TFE3 +, Ker -/focal+, EMA -/focal+, Pax8 variable",
            id : "00", name : "Xp11 translocation renal cell carcinoma"
          }, {
               description : "TFE3 +, Ker -/focal+, EMA -/focal+, Pax8 variable",
            id : "00", name : "t(6;11) renal cell carcinoma"
          }, {
             description : "CK7+, ? Hales +",
            id : "00", name : "TCEB1-mutated cell carcinoma"
          }, {
               description : "Pax8+, CK7+",
            id : "00", name : "Mucinous tubular and spindle cell carcinoma"
          }, {
            id : "00", name : "Tubulocystic renal cell carcinoma "
          }, {
            id : "00", name : "Acquired cystic disease associated renal cell carcinoma"
          }, {
               description : "Pax8+, CK7+, GATA3+",
            id : "00", name : "Clear cell papillary"
          }, {
             description : "Fumarate -, 2-succinocysteine (2SC) + CMV like nucleoli",
            id : "00", name : "Hereditary leiomyomatosis and renal cell carcinoma-associated renal cell carcinoma"
          }, {
               description : "SDH -",
            id : "00", name : "Succinate dehydrogenase (SDH) deficient renal carcinoma"
          }, {
            id : "00", name : "Renal cell carcinoma, unclassified"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Sarcomatoid features",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Present"
          }, {  
            id : "00", name : "Equivocal"
          } ],
          id : "00", name : ""
        } ]
        }, {
        id : "00", name : "Rhabdoid features",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Present"
          }, {  
            id : "00", name : "Equivocal"
          } ],
          id : "00", name : ""
        } ] 
         
         }, {
        description : "Clear cell RCC only",
        id : "00", name : "Geographic necrosis",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Present"
          }, {  
            id : "00", name : "Equivocal"
          }, {  
             description : "non clear cell RCCs",
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]    
      }, {
        id : "00", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
             description : "Nucleoli absent or inconspicuous and basophilic at 400x magnification",
            id : "00", name : "WHO/ISUP grade 1/4"
          }, {
             description : "Nucleoli conspicuous and eosinophilic at 400x magnification, visible but not prominent at 100x magnification",
            id : "00", name : "WHO/ISUP grade 2/4"
          }, {
             description : "Nucleoli conspicuous and eosinophilic at 100x magnification",
            id : "00", name : "WHO/ISUP grade 3/4"
          }, {
             description : "Extreme nuclear pleomorphism and/or multi-nuclear giant cells and/or rhabdoid and/or sarcomatoid differentiation",
            id : "00", name : "WHO/ISUP grade 4/4"
          }, {
             description : "Chromophobe RCC",
            id : "00", name : "Not applicable"
          }],
          id : "00", name : ""
         } ]
      }, {
        id : "00", name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Limited to kidney"
          }, {
            id : "00", name : "Invades perinephric tissue"
          }, {
            id : "00", name : "Invades renal sinus"
          }, {
            id : "64", name : "Invades beyond Gerota's fascia"
          }, {
            id : "00", name : "Invades major veins"
          }, {
            id : "00", name : "Invades pelvicaliceal system"
          }, {
            id : "64", name : "Direct extension into adrenal (T4)"
          }, {
            id : "00", name : "Metastasis to adrenal (M1)"
          }, {
             description : "specify",
              inputs_required : [ "" ],
            id : "11", name : "Invades other organs"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Free"
          }, {
            description : "location parenchymal, capsular (partial), perinephric fat, renal sinus, Gerota, renal vein, ureter",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "50", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "50", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "51", name : "0" },{ id : "53", name : "1" },{ id : "53", name : "2" },{ id : "53", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "01", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "00", name : ""
          }, {
            description : "pathologic",
            id : "00", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "00", name : "m"
          }, {
            description : "recurrent",
            id : "00", name : "r"
          }, {
            description : "post-treatment",
            id : "00", name : "y"
          }, {
            id : "00", name : "mp"
          }, {
            id : "00", name : "rp"
          }, {
            id : "00", name : "yp"
          }, {
            id : "00", name : "mrp"
          }, {
            id : "00", name : "myp"
          }, {
            id : "00", name : "ryp"
          }, {
            id : "00", name : "mryp"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "02", name : "T",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "cannot be assessed",
            id : "00", name : "TX"
          }, {
            description : "<= 4cm, limited to kidney",
            id : "00", name : "T1a"
          }, {
            description : "> 4cm AND <=7cm, limited to kidney",
            id : "00", name : "T1b"
          }, {
            description : "> 7 cm AND <= 10cm  limited to kidney",
            id : "00", name : "T2a"
          }, {
            description : "> 10cm  limited to kidney",
            id : "00", name : "T2b"
          }, {
            description : "perinephric invasion OR renal sinus invasion OR renal vein or its segmental [muscle containing] branches invasion",
            id : "00", name : "T3a"
          }, {
            description : "Invades vena cava below diaphragm",
            id : "00", name : "T3b"
          }, {
            description : "Invades vena cava above diaphragm",
            id : "00", name : "T3c"
          }, {
            description : "Invades beyond Gerota's fascia or into adrenal",
            id : "00", name : "T4"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "03", name : "N",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "00", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "00", name : "N0"
          }, {
            description : "Regional lymph nodes",
            id : "00", name : "N1"
          } ],
          id : "00", name : "Category (pN)"
        }]
        }, {
          id : "04", name : "M",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "metastases",
            id : "00", name : "M1"
          }, {
            id : "00", name : "M (not applicable)"
          }, {
            id : "00", name : "distant metastasis not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
         description : "in non-neoplastic kidney, including glomerular, tubulointerstitial and vascular disease",
        id : "00", name : "Additional findings",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Nonspecific changes"         
          }, {
            id : "00", name : "Focal nonspecific chronic inflammation"         
          }, {
            id : "00", name : "Focal glomerulosclerosis"         
          }, {
            id : "00", name : "Interstitial nephritis"
          }, {
            id : "00", name : "Chronic pyelonephritis"
          }, {
            id : "00", name : "Acute pyelonephritis"
          }, {
            id : "00", name : "End stage kidney disease"
          } ],
          id : "00", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "00", name : "Larynx",
      optional : false,
      organ_group : "Head and Neck",
      properties : [ {
        id : "00", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Excision"
          }, {
            id : "00", name : "Endolaryngeal excision"
          }, {
            id : "00", name : "Transoral laser excision (glottis)"
          }, {
            id : "00", name : "Supraglottic laryngectomy"
          }, {
            id : "00", name : "Supracricoid laryngectomy"
          }, {description : "specify type",
            inputs_required : [ "" ],
            id : "10", name : "Vertical hemilaryngectomy "
          }, {description : "specify type",
            inputs_required : [ "" ],
            id : "10", name : "Partial laryngectomy "
          }, {
            id : "00", name : "Total laryngectomy"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Right supraglottis"
          }, {
            id : "00", name : "Right glottis"
          }, {
            id : "00", name : "Right subglottis"
          }, {
            id : "00", name : "Left supraglottis"
          }, {
            id : "00", name : "Left glottis"
          }, {
            id : "00", name : "Left subglottis"
          }, {
            id : "00", name : "Midline supraglottis"
          }, {
            id : "00", name : "Midline glottis"
          }, {
            id : "00", name : "Midline subglottis"
          }, {
            id : "00", name : "Bilateral supraglottis"
          }, {
            id : "00", name : "Bilateral glottis"
          }, {
            id : "00", name : "Bilateral subglottis"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Transglottic extension",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor focality",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Single focus"
          }, {
            id : "00", name : "Multiple foci"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Squamous cell carcinoma"
          }, {
            id : "00", name : "Squamous cell carcinoma, conventional (keratinizing)"
          }, {
            id : "00", name : "Squamous cell carcinoma, nonkeratinizing"
          }, {
            id : "00", name : "Acantholytic squamous cell carcinoma"
          }, {
            id : "00", name : "Adenosquamous carcinoma"
          }, {
            id : "00", name : "Basaloid squamous cell carcinoma"
          }, {
            id : "00", name : "Papillary squamous cell carcinoma"
          }, {
            id : "00", name : "Spindle cell squamous cell carcinoma"
          }, {
            id : "00", name : "Verrucous squamous cell carcinoma"
          }, {
            id : "00", name : "Lymphoepithelial carcinoma  "
          }, {
            id : "00", name : "Mucoepidermoid carcinoma, low grade"
          }, {
            id : "00", name : "Mucoepidermoid carcinoma, intermediate grade"
          }, {
            id : "00", name : "Mucoepidermoid carcinoma, high grade"
          }, {
            id : "00", name : "Adenoid cystic carcinoma"
          }, {
            id : "00", name : "Adenoid cystic carcinoma, tubular pattern"
          }, {
            id : "00", name : "Adenoid cystic carcinoma, cribriform pattern"
          }, {
            id : "00", name : "Adenoid cystic carcinoma, solid pattern"
          }, {
            id : "00", name : "Adenocarcinoma, not otherwise specified, low grade"
          }, {
            id : "00", name : "Adenocarcinoma, not otherwise specified, intermediate grade"
          }, {
            id : "00", name : "Adenocarcinoma, not otherwise specified, high grade"
          }, {
            id : "00", name : "Typical carcinoid tumor (well differentiated neuroendocrine carcinoma)"
          }, {
            id : "00", name : "Atypical carcinoid tumor (moderately differentiated neuroendocrine carcinoma)"
          }, {
            id : "00", name : "Large cell neuroendocrine carcinoma"
          }, {
            id : "00", name : "Small cell carcinoma"
          }, {
            id : "00", name : "Mucosal melanoma"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Grade 1/3, Well differentiated"
          }, {
            id : "00", name : "Grade 2/3, Moderately differentiated"
          }, {
            id : "00", name : "Grade 3/3, Poorly differentiated"
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "include distance/location of closest margin",
        id : "00", name : "Margins, invasive tumor",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "10", name : "Free, "
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "include distance/location of closest margin",
        id : "00", name : "Margins, dysplasia/CIS",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "10", name : "Free, "
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Indeterminate"
          }, {
            id : "00", name : "Suspicious"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Present, extensive"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Perineural invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Equivocal"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "50", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "50", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "51", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "50", name : "Positive node laterality",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Not applicable"
          }, {
            id : "00", name : "Right"
          }, {
            id : "00", name : "Left"
          }, {
            id : "00", name : "Bilateral"
          }, {
            id : "00", name : "Indeterminate"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "50", name : "Extranodal extension",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Not applicable"
          }, {
            id : "00", name : "None"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Equivocal"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "01", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "00", name : ""
          }, {
            description : "pathologic",
            id : "00", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "00", name : "m"
          }, {
            description : "recurrent",
            id : "00", name : "r"
          }, {
            description : "post-treatment",
            id : "00", name : "y"
          }, {
            id : "00", name : "mp"
          }, {
            id : "00", name : "rp"
          }, {
            id : "00", name : "yp"
          }, {
            id : "00", name : "mrp"
          }, {
            id : "00", name : "myp"
          }, {
            id : "00", name : "ryp"
          }, {
            id : "00", name : "mryp"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "02", name : "T",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "cannot be assessed",
            id : "00", name : "TX"
          }, {
            description : "SUPRAGLOTTIS, = 1 site, mobile vocal cords ",
            id : "00", name : "T1"
          }, {
            description : "SUPRAGLOTTIS, > 1 site, mobile vocal cords ",
            id : "00", name : "T2"
          }, {
            description : "SUPRAGLOTTIS, vocal cords fixed OR invades post cricoid, preepiglotic paraglottic or thyroid cartilage",
            id : "00", name : "T3"
          }, {
            description : "SUPRAGLOTTIS, invades through thyroid cartilage or beyond larynx",
            id : "00", name : "T4a"
          }, {
            description : "SUPRAGLOTTIS, invades prevertebral space, carotid artery or mediastinum",
            id : "00", name : "T4b"
          }, {
            description : "GLOTTIS, = 1  vocal cords ",
            id : "00", name : "T1a"
          }, {
            description : "GLOTTIS, = both  vocal cords ",
            id : "00", name : "T1b"
          }, {
            description : "GLOTTIS, invades supraglottic OR subglotis AND OR impaired vocal cords ",
            id : "00", name : "T2"
          }, {
            description : "GLOTTIS, vocal cords fixed OR invades post cricoid, preepiglotic paraglottic or thyroid cartilage",
            id : "00", name : "T3"
          }, {
            description : "GLOTTIS, invades through thyroid cartilage or beyond larynx",
            id : "00", name : "T4a"
          }, {
            description : "GLOTTIS, invades prevertebral space, carotid artery or mediastinum",
            id : "00", name : "T4b"
          }, {
            description : "SUBGLOTTIS, limited to subglottis ",
            id : "00", name : "T1a"
          }, {
            description : "SUBGLOTTIS, invades vocal cords ",
            id : "00", name : "T2"
          }, {
            description : "SUBGLOTTIS, vocal cords fixed ",
            id : "00", name : "T3"
          }, {
            description : "SUBGLOTTIS, invades through thyroid cartilage or beyond larynx",
            id : "00", name : "T4a"
          }, {
            description : "SUBGLOTTIS, invades prevertebral space, carotid artery or mediastinum",
            id : "00", name : "T4b"
          }, {
            description : "MELANOMA, limited to the mucosa and immediately underlying soft tissue ",
            id : "00", name : "T3"
          }, {
            description : "MELANOMA, Tumor involving deep soft tissue, cartilage, bone, or overlying skin",
            id : "00", name : "T4a"
          }, {
            description : "MELANOMA, Tumor involving brain, dura, skull base, lower cranial nerves (IX, X, XI, XII), masticator space, carotid artery, prevertebral space, or mediastinal structures",
            id : "00", name : "T4b"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "03", name : "N",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "00", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "00", name : "N0"
          }, {
            description : "single ipsilateral lymph node metastasis <= 3cm AND no extranodal extension OR MELANOMA regional metastases",
            id : "00", name : "N1"
          }, {
            description : "(single ipsilateral lymph node metastasis > 3cm AND <= 6cm AND no extranodal extension) OR (bilateral or contralateral lymph nodemetastases, <= 6cm  AND no extranodal extension)",
            id : "00", name : "N2a"
          }, {
            description : "multiple ipsilateral lymph node AND metastases <= 6cm AND no extranodal extension",
            id : "00", name : "N2b"
          }, {
            description : "bilateal or contralateral lymph node AND metastases <= 6cm AND no extranodal extension",
            id : "00", name : "N2c"
          }, {
            description : "metastases > 6cm AND no extranodal extension",
            id : "00", name : "N3a"
          }, {
            description : "(metastases single ipsilateral lymph node >3cm AND extranodal extension) OR ( multiple ipsilateral, contralateral or bilateral nodes AND no extranodal extension) OR (single contralateral node metastases <=3cm AND extranodal extension)",
            id : "00", name : "N3b"
          } ],
          id : "00", name : "Category (pN)"
        }]
        }, {
          id : "04", name : "M",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "metastases",
            id : "00", name : "M1"
          }, {
            id : "00", name : "M (not applicable)"
          }, {
            id : "00", name : "distant metastasis not applicable"
          } ],
          id : "00", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "00", name : "Lip Oral Cavity",
      optional : false,
      organ_group : "Head and Neck",
      properties : [ {
        id : "00", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Excisional biopsy"
          }, {
            id : "00", name : "Resection"
          }, {
            id : "00", name : "Resection and neck dissection "
          } , {
            id : "00", name : "Glossectomy"
          }, {
            id : "00", name : "Mandibulectomy "
          }, {
            id : "00", name : "Maxillectomy"
          }, {
            id : "00", name : "Palatectomy"
          }],
          id : "00", name : ""
        } ]
      },{
        id : "00", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Right lip"
          }, {
            id : "00", name : "Right oral"
          }, {
            id : "00", name : "Left lip"
          }, {
            id : "00", name : "Left oral"
          }, {
            id : "00", name : "Midline lip"
          }, {
            id : "00", name : "Midline oral"
          }  ],
          id : "00", name : ""
        } ]
     
     
     
      }, {
        id : "00", name : "Tumor focality",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Single focus"
          }, {
            id : "00", name : "Multiple foci"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "00", name : ""
        } ]
        }, {
        id : "00", name : "Depth of invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Indeterminate"
          } ],
          id : "00", name : ""
        } ] 
      }, {
        id : "00", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Squamous cell carcinoma"
          }, {
            id : "00", name : "Acantholytic squamous cell carcinoma"
          }, {
            id : "00", name : "Adenosquamous carcinoma"
          }, {
            id : "00", name : "Basaloid squamous cell carcinoma"
          }, {
            id : "00", name : "Carcinoma cuniculatum"
          }, {
            id : "00", name : "Papillary squamous cell carcinoma"
          }, {
            id : "00", name : "Spindle cell squamous cell carcinoma"
          }, {
            id : "00", name : "Verrucous carcinoma"
          }, {
            id : "00", name : "Lymphoepithelial carcinoma (nonnasopharyngeal)"
          }, {
            id : "00", name : "Mucoepidermoid carcinoma"
          }, {
            id : "00", name : "Adenoid cystic carcinoma"
          }, {
            id : "00", name : "Polymorphous low-grade adenocarcinoma"
          }, {
            id : "00", name : "Salivary duct carcinoma"
          }, {
            id : "00", name : "Carcinoma ex pleomorphic adenoma (malignant mixed tumor), Intracapsular (noninvasive)"
          }, {
            id : "00", name : "Carcinoma ex pleomorphic adenoma (malignant mixed tumor), Minimally invasive "
          }, {
            id : "00", name : "Carcinoma ex pleomorphic adenoma (malignant mixed tumor), Invasive"
          }, {
            id : "00", name : "Acinic cell carcinoma"
          }, {
            id : "00", name : "Adenocarcinoma, not otherwise specified"
          }, {
            id : "00", name : "Carcinoma, type cannot be determined"
          }, {
            id : "00", name : "Carcinosarcoma"
          }, {
            id : "00", name : "(Hyalinizing) clear cell carcinoma"
          }, {
            id : "00", name : "Cystadenocarcinoma"
          }, {
            id : "00", name : "Epithelial-myoepithelial carcinoma"
          }, {
            id : "00", name : "Mucinous adenocarcinoma (colloid carcinoma)"
          }, {
            id : "00", name : "Myoepithelial carcinoma (malignant myoepithelioma)"
          }, {
            id : "00", name : "Oncocytic carcinoma"
          }, {
            id : "00", name : "Typical carcinoid tumor (well differentiated neuroendocrine carcinoma)"
          }, {
            id : "00", name : "Atypical carcinoid tumor (moderately differentiated neuroendocrine carcinoma)"
          }, {
            id : "00", name : "Large cell carcinoma, neuroendocrine type (poorly differentiated neuroendocrine carcinoma)"
          }, {
            id : "00", name : "Small cell carcinoma, neuroendocrine type (poorly differentiated neuroendocrine carcinoma)"
          }, {
            id : "00", name : "Combined (or composite) small cell carcinoma, neuroendocrine type with (specify type)"
          }, {
            id : "00", name : "Mucosal melanoma "
          }  ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Grade 1/3, Well differentiated"
          }, {
            id : "00", name : "Grade 2/3, Moderately differentiated"
          }, {
            id : "00", name : "Grade 3/3, Poorly differentiated"
          } ],
          id : "00", name : ""
        } ]
       }, {
        description : "include distance/location of closest margin",
        id : "00", name : "Margins, main part, invasive tumor",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "10", name : "Free, "
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
     }, {
        description : "include distance/location of closest margin",
        id : "00", name : "Margins, main part, dysplasia/CIS",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "10", name : "Free, "
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
   }, {
        description : " only if submitted separately,  include location of closest margin",
        id : "00", name : "Margins, separate part(s)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Free, "
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Indeterminate"
          }, {
            id : "00", name : "Suspicious"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Present, extensive"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Perineural invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Equivocal"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "50", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "50", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "51", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Positive node laterality",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Not applicable"
          }, {
            id : "00", name : "Right"
          }, {
            id : "00", name : "Left"
          }, {
            id : "00", name : "Bilateral"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Extranodal extension",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Not applicable"
          }, {
            id : "00", name : "None"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Equivocal"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "01", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "00", name : ""
          }, {
            description : "pathologic",
            id : "00", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "00", name : "m"
          }, {
            description : "recurrent",
            id : "00", name : "r"
          }, {
            description : "post-treatment",
            id : "00", name : "y"
          }, {
            id : "00", name : "mp"
          }, {
            id : "00", name : "rp"
          }, {
            id : "00", name : "yp"
          }, {
            id : "00", name : "mrp"
          }, {
            id : "00", name : "myp"
          }, {
            id : "00", name : "ryp"
          }, {
            id : "00", name : "mryp"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "02", name : "T",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "cannot be assessed",
            id : "00", name : "TX"
          }, {
            description : "CARCINOMA in situ ",
            id : "00", name : "Tis"
          }, {
            description : "CARCINOMA <= 2 cm AND <= 5mm deep ",
            id : "00", name : "T1"
          }, {
            description : "CARCINOMA (<= 2cm AND >5mm deep AND <=10 mm deep) OR  (>2 cm AND <= 4cm and <= 10 mm deep)",
            id : "00", name : "T2"
          }, {
            description : "CARCINOMA > 4cm OR >10 mm deep",
            id : "00", name : "T3"
          }, {
            description : "CARCINOMA Lip: Tumor invades through cortical bone, inferior alveolar nerve, floor of mouth, or skin of face, ie, chin or nose.  Oral cavity: Tumor invades adjacent structures only (eg, through cortical bone [mandible, maxilla], into deep [extrinsic] muscle of tongue [genioglossus, hyoglossus, palatoglossus, and styloglossus], maxillary sinus, skin of face)",
            id : "00", name : "T4a"
          }, {
            description : "CARCINOMA Tumor invades masticator space, pterygoid plates, or skull base, and/or encases internal carotid artery",
            id : "00", name : "T4b"
          }, {
            description : "MELANOMA Mucosal disease",
            id : "00", name : "T3"
          }, {
            description : "MELANOMA Tumor involving deep soft tissue, cartilage, bone, or overlying skin",
            id : "00", name : "T4a"
          }, {
            description : "MELANOMA Tumor involving brain, dura, skull base, lower cranial nerves (IX, X, XI, XII), masticator space, carotid artery, prevertebral space, or mediastinal structures",
            id : "00", name : "T4b"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "03", name : "N",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "00", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "00", name : "N0"
          }, {
            description : "CARCINOMA single ipsilateral lymph node metastasis <= 3cm AND no extranodal extension",
            id : "00", name : "N1"
          }, {
            description : "CARCINOMA single ipsilateral or contralateral lymph node metastasis either (<3cm with extranodal extension) OR (> 3cm AND <= 6cm and no extranodal extension)",
            id : "00", name : "N2a"
          }, {
            description : "CARCINOMA multiple ipsilateral lymph node AND metastases <= 6cm",
            id : "00", name : "N2b"
          }, {
            description : "CARCINOMA contralateral lymph node AND metastases <= 6cm",
            id : "00", name : "N2c"
          }, {
            description : "CARCINOMA metastases > 6cm no extranodal extension",
            id : "00", name : "N3a"
          }, {
            description : "CARCINOMA (metastases >3cm AND extranodal extension) OR (multiple nodes with extranodal extension at least in one) OR (single contralateral node metastases <=3cm AND extranodal extension)",
            id : "00", name : "N3b"
          }, {
            description : "MELANOMA regional metastases",
            id : "00", name : "N1"
          } ],
          id : "00", name : "Category (pN)"
        }]
        }, {
          id : "04", name : "M",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "metastases",
            id : "00", name : "M1"
          }, {
            id : "00", name : "M (not applicable)"
          }, {
            id : "00", name : "distant metastasis not applicable"
          } ],
          id : "00", name : ""
        } ]
      } ]
    }, {
      most_common : true,
      id : "00", name : "Lung",
      optional : false,
      organ_group : "Thorax",
      properties : [  {
        id : "00", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Lobectomy"
          }, {
            id : "00", name : "Sleeve lobectomy"
          }, {
            id : "00", name : "Segmentectomy"
          }, {
            id : "00", name : "Wedge resection"
          }, {
            id : "00", name : "Bilobectomy"
          }, {
            id : "00", name : "Pneumonectomy"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Right upper lobe"
          }, {
            id : "00", name : "Right middle lobe"
          }, {
            id : "00", name : "Right lower lobe"
          }, {
            id : "00", name : "Left upper lobe"
          }, {
            id : "00", name : "Left lower lobe"
          }, {
            id : "00", name : "Bronchus, main"
          }, {
            id : "00", name : "Bronchus, lobar "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor size, total",
       optional_state  : "required", "options" : [ {
          id : "00", name : ""
        } ]
      }, { description : "for ACA with lepidic component",
        id : "00", name : "Tumor size, invasive component",
       optional_state  : "required", "options" : [ {
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor focality",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Single focus"
          }, {
            id : "00", name : "Multiple foci, same lobe"
          }, {
            id : "00", name : "Multiple foci, different lobes"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Adenocarcinoma, invasive"
          }, {
            id : "00", name : "Adenocarcinoma in situ (AIS), nonmucinous"
          }, {
            id : "00", name : "Adenocarcinoma in situ (AIS), mucinous"
          }, {
            id : "00", name : "Minimally invasive adenocarcinoma, nonmucinous"
          }, {
            id : "00", name : "Minimally invasive adenocarcinoma, mucinous"
          }, {
            id : "00", name : "Invasive adenocarcinoma, lepidic predominant"
          }, {
            id : "00", name : "Invasive adenocarcinoma, acinar predominant"
          }, {
            id : "00", name : "Invasive adenocarcinoma, papillary predominant"
          }, {
            id : "00", name : "Invasive adenocarcinoma, micropapillary predominant"
          } , {
            id : "00", name : "Invasive adenocarcinoma, solid predominant"
          }, {
            id : "00", name : "Invasive adenocarcinoma, mucinous predominant"
          }, {
            id : "00", name : "Mixed invasive mucinous and nonmucinous adenocarcinoma"
          }, {
            id : "00", name : "Colloid adenocarcinoma"
          }, {
            id : "00", name : "Fetal adenocarcinoma"
          }, {
            id : "00", name : "Enteric adenocarcinoma"
          }, {
            id : "00", name : "Squamous cell carcinoma in situ (SCIS)"
          }, {
            id : "00", name : "Invasive squamous cell carcinoma"
          }, {
            id : "00", name : "Invasive squamous cell carcinoma, keratinizing "
          }, {
            id : "00", name : "Invasive squamous cell carcinoma, non-keratinizing"
          }, {
            id : "00", name : "Invasive squamous cell carcinoma, basaloid "
          }, {
            id : "00", name : "Small cell carcinoma"
          }, {
            id : "00", name : "Large cell neuroendocrine carcinoma"
          }, {
            id : "00", name : "Typical carcinoid"
          }, {
            id : "00", name : "Atypical carcinoid"
          }, {
            id : "00", name : "Large cell carcinoma"
          }, {
            id : "00", name : "Adenosquamous carcinoma"
          }, {
            id : "00", name : "Pleomorphic carcinoma"
          }, {
            id : "00", name : "Spindle cell carcinoma"
          }, {
            id : "00", name : "Giant cell carcinoma"
          }, {
            id : "00", name : "Carcinosarcoma"
          }, {
            id : "00", name : "Pulmonary blastoma"
          }, {
            id : "00", name : "Lymphoepithelioma-like carcinoma"
          }, {
            id : "00", name : "NUT carcinoma"
          }, {
            id : "00", name : "Mucoepidermoid carcinoma"
          }, {
            id : "00", name : "Adenoid cystic carcinoma"
          }, {
            id : "00", name : "Epithelial-myoepithelial carcinoma"
          }, {
            id : "00", name : "Non-small cell carcinoma"
          }],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Visceral pleura invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Equivocal"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Other tissue(s) involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "No adjacent structures present"
          }, {
            id : "00", name : "Invades main bronchus"
          }, {
            id : "00", name : "Invades hilar soft tissue"
          }, {
            id : "00", name : "Invades parietal pleura"
          }, {
            id : "00", name : "Invades chest wall"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Present"
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "include distance/location of closest margin bronchial, vascular parenchymal",
        id : "00", name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "10", name : "Free, "
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Treatment effect, primary site",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Not applicable"
          }, {
            id : "00", name : "Greater than 10% residual tumor"
          }, {
            id : "00", name : "Less than or equal to 10% residual tumor"
          }, {
            id : "00", name : "Not known"
          }  ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Indeterminate"
          }, {
            id : "00", name : "Suspicious"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Present, extensive"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymph nodes, sites sampled",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Peribronchial"
          }, {
            id : "50", name : "None"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "50", name : "Lymph nodes, sites involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Peribronchial"
          }, {
            id : "51", name : "None"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "Mediastinal (N2) nodes only, NOT N1 or peribronchial nodes (ie ipsilateral station 2-9 (upper paratracheal, prevascular retrovascular, lower paratracheal, subaortic, paraaortic,subcarinal, paraesophageal, pulmonary ligament) nodes",
        id : "50", name : "Extranodal extension",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Indeterminate"
          }, {
            id : "00", name : "None"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "01", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "00", name : ""
          }, {
            description : "pathologic",
            id : "00", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "00", name : "m"
          }, {
            description : "recurrent",
            id : "00", name : "r"
          }, {
            description : "post-treatment",
            id : "00", name : "y"
          }, {
            id : "00", name : "mp"
          }, {
            id : "00", name : "rp"
          }, {
            id : "00", name : "yp"
          }, {
            id : "00", name : "mrp"
          }, {
            id : "00", name : "myp"
          }, {
            id : "00", name : "ryp"
          }, {
            id : "00", name : "mryp"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "02", name : "T",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "cannot be assessed",
            id : "00", name : "TX"
          }, {
            description : "in situ",
            id : "00", name : "Tis"
          }, {
            description : "minimally invasive, <= 3cm, predominantly lepidic pattern and <= 5mm invasion",
            id : "00", name : "T1mi"
          }, {
            description : "<=1cm AND (no involvement of main bronchus, no visceral pleural invasion, no atelectasis or obstructuve pneumonitis extending to hilum) ",
            id : "00", name : "T1a"
          }, {
            description : "> 1cm AND <= 2cm  AND (no involvement of main bronchus, no visceral pleural invasion, no atelectasis or obstructuve pneumonitis extending to hilum)",
            id : "00", name : "T1b"
          }, {
            description : ">2 cm AND <=3cm AND (no involvement of main bronchus, no visceral pleural invasion, no atelectasis or obstructuve pneumonitis extending to hilum)",
            id : "00", name : "T1c"
          }, {
            description : ">3cm AND <= 4 cm  OR (< 3cm AND (involvement of main bronchus, or visceral pleural invasion, or atelectasis or obstructuve pneumonitis extending to hilum))",
            id : "00", name : "T2a"
          }, {
            description : "> 4cm <= 5cm",
            id : "00", name : "T2b"
          }, {
            description : "> 5cm AND <= 7cm OR invades parietal pleura, chest wall, phrenic nerve parietal pericardium or separate tumor nodule in the same lobe as the primary ",
            id : "00", name : "T3"
          }, {
            description : "> 7cm  OR invades diaphragm, mediastinum, heart, great vessels, trachea, recurrent laryngeal nerve, esophagus, vertebral body, carina, or separate tumor nodule in an ipsilateral lobe different from that of the primary",
            id : "00", name : "T4"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "03", name : "N",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "00", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "00", name : "N0"
          }, {
            description : "ipsilateral intrapumonary, peribronchial, and/or station 10-14 (hilar, interlobar, lobar, segmental and subsegmental) nodes",
            id : "00", name : "N1"
          }, {
            description : "ipsilateral station 2-9 (upper paratracheal, prevascular retrovascular, lower paratracheal, subaortic, paraaortic,subcarinal, paraesophageal, pulmonary ligament) nodes",
            id : "00", name : "N2"
          }, {
            description : "ipsilateral/contralateral station 1 (supraclavicular, scalene) nodes OR contralateral station 2-14 nodes",
            id : "00", name : "N3"
          } ],
          id : "00", name : "Category (pN)"
        }]
        }, {
          id : "04", name : "M",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "metastases contralateral lung OR plerual or pericardial nodules, OR malignant pleural or pericaridal effusions",
            id : "00", name : "M1a"
          }, {
            description : "single extrathoracic metastasis in a single organ including involvement of a single nonregional node",
            id : "00", name : "M1b"
          }, {
            description : "multiple extrathoracic metastases in a single or multiple organs",
            id : "00", name : "M1c"
          }, {
            id : "00", name : "M (not applicable)"
          }, {
            id : "00", name : "distant metastasis not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        
        id : "00", name : "Ancillary studies ordered",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "reflex all lung non-small cell carcinomas except squamous cell ca",
            id : "00", name : "EGFR, ROS1, ALK, BRAF, MET exon 14 deletion, and PDL1"
          }, {
            description : "squamous cell carcinomas",
            id : "00", name : "PDL1"
          }, {
            id : "00", name : "None"
          }, {
            id : "00", name : "Not applicable"
          }, {
            inputs_required : [ "" ],
            id : "10", name : "See case"
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "Add billing codes G9422 for NSCC",
        id : "46", name : "ICD10",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "C34.90"
          } ],
          id : "00", name : ""
        } ]
      } ]
    },{
      most_common : false,
      id : "00", name : "Lymphadenectomy (retroperitoneal/ Germ cell)",
      optional : true,
      organ_group : "Genitourinary",
      properties : [ {
        id : "00", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Retroperitoneal lymphadenectomy"
          } ,{
            id : "00", name : "Lympadenectomy"
          }],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Preesection treament",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Chemo/radiation"
          }, {
            id : "00", name : "None"
          }, {
            id : "00", name : "Not known"
          } ],
          id : "00", name : ""
        } ]  
      }, {
        id : "00", name : "Tumor viability",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Viable teratoma"
          }, {
            id : "00", name : "Viable teratoma and non-teratoma"
          }, {
            id : "00", name : "No viable tumor"
          } ],
          id : "00", name : ""
        } ]  
      }, {
        id : "00", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
             description : "SALL4+, OCT3/4+, CD117+, Keratin -/focal+, CD30-, Glypican3-, CDX2-/focal+, D2-40+",
            id : "00", name : "Seminoma, classical"
          }, {
            description : "give percentages",
            inputs_required : [ "" ],
            id : "10", name : "Mixed germ cell tumor"
          }, {
            description : "SALL4+, OCT3/4+, CD117-, Keratin+, CD30+, Glypican3-, CDX2-/focal+. D2-40 - or focal+",
            id : "00", name : "Embryonal tumor"
          }, {
            description : "SALL4+, OCT3/4-, CD117-, Keratin -/focal +, CD30-, Glypican3+, CDX2+, D2-40-",
            id : "00", name : "Yolk sac tumor"
          }, {
             description : "SALL4 +, OCT3/4-, GATA3+, D2-40-(CK7+, p63+, inhibin+, other germ cell tumors neg)",
            id : "00", name : "Choriocarcinoma"
          }, {
              description : "Prepubertal teratoma is benign, genetically distinct, and does not get a tumor summary",
            id : "00", name : "Teratoma, postpubertal type"
          }, {
            id : "00", name : "Teratoma with carcinoma"
          }, {
            id : "00", name : "Teratoma with sarcoma"
          }, {
             description : "SALL4 +, OCT3/4 -, CD117+ (used to be spermatocytic seminoma)",
            id : "00", name : "Spermatocytic tumor"
          }, {
            id : "00", name : "Spermatocytic tumor with sarcoma"
          }, {
            id : "00", name : "Leydig cell tumor"
          }, {
            id : "00", name : "Malignant Leydig cell tumor"
          }, {
            id : "00", name : "Gonadolblastoma"
          }, {
            id : "00", name : "Sertoli cell tumor, classic"
          }, {
            id : "00", name : "Sertoli cell tumor, malignant"
          }, {
            id : "00", name : "Sertoli cell tumor, large cell calcifying"
          }, {
            id : "00", name : "Granulosa cell tumor, adult"
          }, {
            id : "00", name : "Granulosa cell tumor, juvenile"
          }, {
            id : "00", name : "Fibroma-thecoma"
          } ],
          id : "00", name : ""
        } ]
      
      },  {
        id : "00", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "50", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "50", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "51", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
   }, {
        id : "50", name : "Positive lymph node location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Not applicable"
          }, {
            id : "00", name : "Interaortocaval"
          }, {
            id : "00", name : "Paraaortic"
          }, {
            id : "00", name : "Paracaval"
          }, {
            id : "00", name : "Preaortic"
          }, {
            id : "00", name : "Precaval"
          }, {
            id : "00", name : "Retroaortic"
          }, {
            id : "00", name : "Retrocaval"
          }, {
            id : "00", name : "Other"
          } ],
          id : "00", name : ""
        } ]
  
   }, {
     description : "size of lymph nod met",
        id : "50", name : "Size of largest lymph node metastasis",
        optional_state : "required",
        "options" : [ {
          group : [ {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
   }, {
        id : "50", name : "Extranodal extension",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Not applicable"
          }, {
            id : "00", name : "None"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Equivocal"
          } ],
          id : "00", name : ""
        } ]
  
      }, {
        id : "50", name : "Tumor type in largest lymph node",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
  
      }, {
        id : "01", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "00", name : ""
          }, {
            description : "pathologic",
            id : "00", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "00", name : "m"
          }, {
            description : "recurrent",
            id : "00", name : "r"
          }, {
            description : "post-treatment",
            id : "00", name : "y"
          }, {
            id : "00", name : "mp"
          }, {
            id : "00", name : "rp"
          }, {
            id : "00", name : "yp"
          }, {
            id : "00", name : "mrp"
          }, {
            id : "00", name : "myp"
          }, {
            id : "00", name : "ryp"
          }, {
            id : "00", name : "mryp"
          } ],
          id : "00", name : ""
        }]
        },  {
          id : "03", name : "N",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "00", name : "NX"
          }, {
            description : "No regional lymph node metastases",
            id : "00", name : "N0"
          }, {
            description : "<= 5 metastasis, all <= 2cm",
            id : "00", name : "N1"
          }, {
            description : "1 metastasis (not ln) >2cm AND <= 5cm OR > 5 metastases AND all <= 5cm AND no extranodal extension",
            id : "00", name : "N2"
          }, {
            description : "metastases (not ln) > 5cm",
            id : "00", name : "N3"
          } ],
          id : "00", name : "Category (pN)"
        }]
        } ]
    }, {
      most_common : false,
      id : "00", name : "Lymphoma, Hodgkin",
      optional : true,
      organ_group : "Hematologic",
      properties : [ {
        id : "00", name : "Specimen",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Lymph node"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Biopsy"
          }, {
            id : "00", name : "Resection"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Classical Hodgkin lymphoma"
          }, {
            id : "00", name : "Nodular lymphocyte predominant Hodgkin lymphoma"
          }, {
            id : "00", name : "Nodular sclerosis classical Hodgkin lymphoma"
          }, {
            id : "00", name : "Mixed cellularity classical Hodgkin lymphoma"
          }, {
            id : "00", name : "Lymphocyte-rich classical Hodgkin lymphoma"
          }, {
            id : "00", name : "Lymphocyte-depleted classical Hodgkin lymphoma"
          }, {
            id : "00", name : "Classical Hodgkin lymphoma, histologic subtype cannot be determined"
          }, {
            id : "00", name : "Hodgkin lymphoma, histologic subtype cannot be determined"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Immunophenotying",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "Performed",
            inputs_required : [ "" ],
            id : "10", name : ""
          }, {
            id : "00", name : "See separate report"
          }, {
            id : "00", name : "See above"
          }, {
            id : "00", name : "Not performed"
          } ],
          id : "00", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "00", name : "Lymphoma, non-Hodgkin",
      optional : true,
      organ_group : "Hematologic",
      properties : [ {
        id : "00", name : "Specimen",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Lymph node"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Biopsy"
          }, {
            id : "00", name : "Resection"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Type (WHO)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "Extended list",
            inputs_required : [ {name: "PRECURSOR LYMPHOID NEOPLASMS"} ,{name:  "B lymphoblastic leukemia/lymphoma"} ,{name:  "B lymphoblastic leukemia/lymphoma with t(9;22)(q34;q11.2); BCR-ABL1"} ,{name:  "B lymphoblastic leukemia/lymphoma with t(v;11q23); MLL rearranged"} ,{name:  "B lymphoblastic leukemia/lymphoma with t(12;21)(p13;q22); TEL-AML1 (ETV6-RUNX1"} ,{name:  "B lymphoblastic leukemia/lymphoma with hyperdiploidy"} ,{name:  "B lymphoblastic leukemia/lymphoma with hypodiploidy (hypodiploid acute lymphoblastic leukemia/lymphoma [ALL])"} ,{name:  "B lymphoblastic leukemia/lymphoma with t(5;14)(q31;q32); IL3-IGH"} ,{name:  "B lymphoblastic leukemia/lymphoma with t(1;19)(q23;p13.3); E2A-PBX1 (TCF3-PBX1)"} ,{name:  "T lymphoblastic leukemia/lymphoma"} ,{name:  ""} ,{name:  "MATURE B CELL NEOPLASMS"} ,{name:  "B-cell lymphoma"} ,{name:  "Chronic lymphocytic leukemia/small lymphocytic lymphoma"} ,{name:  "B-cell prolymphocytic leukemia"} ,{name:  "Splenic B-cell marginal zone lymphoma"} ,{name:  "Hairy cell leukemia"} ,{name:  "Splenic B-cell lymphoma/leukemia} ,{name:  unclassifiable"} ,{name:  "Splenic diffuse red pulp small B-cell lymphoma"} ,{name:  "Hairy cell leukemia-variant"} ,{name:  "Lymphoplasmacytic lymphoma"} ,{name:  "Gamma heavy chain disease"} ,{name:  "Mu heavy chain disease"} ,{name:  "Alpha heavy chain disease"} ,{name:  "Plasma cell myeloma"} ,{name:  "Solitary plasmacytoma of bone"} ,{name:  "Extraosseous plasmacytoma"} ,{name:  "Extranodal marginal zone lymphoma of mucosa-associated lymphoid tissue (MALT lymphoma) "} ,{name:  "Nodal marginal zone lymphoma"} ,{name:  "Pediatric nodal marginal zone lymphoma"} ,{name:  "Follicular lymphoma"} ,{name:  "Pediatric follicular lymphoma"} ,{name:  "Primary intestinal follicular lymphoma"} ,{name:  "Primary cutaneous follicle center lymphoma"} ,{name:  "Mantle cell lymphoma"} ,{name:  "Diffuse large B-cell lymphoma (DLBCL)"} ,{name:  "T cell/histiocyte-rich large B-cell lymphoma"} ,{name:  "Primary DLBCL of the central nervous system (CNS)"} ,{name:  "Primary cutaneous DLBCL} ,{name:  leg type"} ,{name:  "Epstein-Barr virus (EBV)-positive DLBCL of the elderly"} ,{name:  "DLBCL associated with chronic inflammation"} ,{name:  "Lymphomatoid granulomatosis"} ,{name:  "Primary mediastinal (thymic) large B-cell lymphoma"} ,{name:  "Intravascular large B-cell lymphoma"} ,{name:  "Anaplastic lymphoma kinase (ALK)-positive large B-cell lymphoma"} ,{name:  "Plasmablastic lymphoma"} ,{name:  "Large B-cell lymphoma arising in HHV8-associated multicentric Castleman disease"} ,{name:  "Primary effusion lymphoma"} ,{name:  "Burkitt lymphoma"} ,{name:  "B-cell lymphoma} ,{name:  unclassifiable} ,{name:  with features intermediate between diffuse large B-cell lymphoma and Burkitt lymphoma"} ,{name:  "B-cell lymphoma} ,{name:  unclassifiable} ,{name:  with features intermediate between diffuse large B-cell lymphoma and classical Hodgkin lymphoma"} ,{name:  ""} ,{name:  "MATURE T AND NK CELL NEOPLASMS"} ,{name:  "T-cell lymphoma"} ,{name:  "T-cell prolymphocytic leukemia"} ,{name:  "T-cell large granular lymphocytic leukemia"} ,{name:  "Chronic lymphoproliferative disorder of NK cells"} ,{name:  "Aggressive NK-cell leukemia"} ,{name:  "Systemic EBV-positive T-cell lymphoproliferative disease of childhood"} ,{name:  "Hydroa vacciniforme-like lymphoma "} ,{name:  "Adult T-cell leukemia/lymphoma "} ,{name:  "Extranodal NK/T-cell lymphoma} ,{name:  nasal type"} ,{name:  "Enteropathy-associated T-cell lymphoma"} ,{name:  "Hepatosplenic T-cell lymphoma"} ,{name:  "Subcutaneous panniculitis-like T-cell lymphoma"} ,{name:  "Primary cutaneous anaplastic large cell lymphoma"} ,{name:  "Lymphomatoid papulosis"} ,{name:  "Primary cutaneous gamma-delta T-cell lymphoma"} ,{name:  "Primary cutaneous CD8-positive aggressive epidermotropic cytotoxic T-cell lymphoma"} ,{name:  "Primary cutaneous CD4-positive small/medium T-cell lymphoma"} ,{name:  "Peripheral T-cell lymphoma} ,{name:  NOS"} ,{name:  "Angioimmunoblastic T-cell lymphoma"} ,{name:  "Anaplastic large cell lymphoma} ,{name:  ALK-positive"} ,{name:  "Anaplastic large cell lymphoma} ,{name:  ALK-negative"} ,{name:  ""} ,{name:  "HISTIOCYTIC AND DENDRITIC NEOPLASMS"} ,{name:  "Histiocytic sarcoma"} ,{name:  "Langerhans cell histiocytosis"} ,{name:  "Langerhans cell sarcoma"} ,{name:  "Interdigitating dendritic cell sarcoma"} ,{name:  "Follicular dendritic cell sarcoma"} ,{name:  "Fibroblastic reticular cell tumor"} ,{name:  "Equivocal dendritic cell tumor"} ,{name:  "Disseminated juvenile xanthogranuloma"} ,{name:  ""} ,{name:  "POST-TRANSPLANT LYMPHOPROLIFERATIVE DISORDERS"} ,{name:  "Plasmacytic hyperplasia"} ,{name:  "Infectious mononucleosis-like PTLD"} ,{name:  "Polymorphic PTLD"} ,{name:  "Monomorphic PTLD (B- and T/NK-cell types)"} ,{name:  "Classical Hodgkin lymphoma type PTLD" } ] ,
            id : "30", name : ""
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Immunophenotyping",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "Performed",
            inputs_required : [ "" ],
            id : "10", name : ""
          }, {
            id : "00", name : "See separate report"
          }, {
            id : "00", name : "See above"
          }, {
            id : "00", name : "Not performed"
          } ],
          id : "00", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "00", name : "Major Salivary Glands",
      optional : false,
      organ_group : "Head and Neck",
      properties : [ {
        id : "00", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Excision"
          }, {
            id : "00", name : "Parotidectomy, superficial lobe "
          }, {
            id : "00", name : "Parotidectomy, superficial lobe "
          }, {
            id : "00", name : "Parotidectomy, deep lobe "
          }, {
            id : "00", name : "Parotidectomy, total"
          }, {
            id : "00", name : "Submandibular gland resection"
          }, {
            id : "00", name : "Sublingual gland resection"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Right parotid gland"
          }, {
            id : "00", name : "Right parotid gland, superficial lobe "
          }, {
            id : "00", name : "Right parotid gland, deep lobe "
          }, {
            id : "00", name : "Right submandibular gland"
          }, {
            id : "00", name : "Right sublingual gland"
          }, {
            id : "00", name : "Left parotid gland"
          }, {
            id : "00", name : "Left parotid gland, superficial lobe "
          }, {
            id : "00", name : "Left parotid gland, deep lobe "
          }, {
            id : "00", name : "Left submandibular gland"
          }, {
            id : "00", name : "Left sublingual gland"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor focality",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Single focus"
          }, {
            id : "00", name : "Multiple foci"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
             description : "PAS-d+, DOG1+",
            id : "00", name : "Acinic cell carcinoma"
          }, {
             description : "CD117+, MIB1+, bilaminar with CK7 and p63",
            id : "00", name : "Adenoid cystic carcinoma"
          }, {
            id : "00", name : "Adenocarcinoma, (NOS)"
          }, {
             description : "beta catenin- (basal cell adenoma beta catenin+)",
            id : "00", name : "Basal cell adenocarcinoma"
          }, {
            id : "00", name : "Carcinoma ex pleomorphic adenoma (malignant mixed tumor)"
          }, {
            id : "00", name : "Carcinoma ex pleomorphic adenoma (malignant mixed tumor), Minimally invasive "
          }, {
            id : "00", name : "Carcinoma ex pleomorphic adenoma (malignant mixed tumor), Invasive"
          }, {
            id : "00", name : "Carcinosarcoma (true malignant mixed tumor)"
          }, {
             description : "p63-, hyalinizing clear cell carcinoma p63+, EWSR1",
            id : "00", name : "Clear cell adenocarcinoma"
          }, {
            id : "00", name : "Cystadenocarcinoma"
          }, {
             description : "DOG1+/-, CD117+, GFAP +/-",
            id : "00", name : "Epithelial-myoepithelial carcinoma"
          }, {
            
            id : "00", name : "Large cell carcinoma"
          }, {
              description : "PRKD1",
            id : "00", name : "Low-grade cribriform cystadenocarcinoma "
          }, {
            id : "00", name : "Lymphoepithelial carcinoma"
          }, {
             description : "Mammoglobin +, ETV6",
            id : "00", name : "Mammary analogue secretory carcinoma"
          }, {
            id : "00", name : "Metastasizing pleomorphic adenoma"
          }, {
             description : "CRTC1-MAML2 fusion, high grade either Her2Neu+ or EGFR+",
            id : "00", name : "Mucoepidermoid carcinoma"
          }, {
            id : "00", name : "Mucinous adenocarcinoma (colloid carcinoma)"
          }, {
            id : "00", name : "Myoepithelial carcinoma (malignant myoepithelioma)"
          }, {
            id : "00", name : "Oncocytic carcinoma"
          }, {
             description : "CD117+, GFAP+, PRKD1",
            id : "00", name : "Polymorphous low-grade adenocarcinoma "
          }, {
             description : "Her2Neu+, AR+, ER-, PIK3CA+",
            id : "00", name : "Salivary duct carcinoma"
          }, {
            id : "00", name : "Sebaceous adenocarcinoma"
          }, {
            id : "00", name : "Sebaceous lymphadenocarcinoma"
          }, {
             description : "Her2Neu (focal)",
            id : "00", name : "Sialoblastoma "
          }, {
            id : "00", name : "Small cell (neuroendocrine) carcinoma"
          }, {
            id : "00", name : "Squamous cell carcinoma, primary "
          }, {
            id : "00", name : "Undifferentiated carcinoma, large cell type "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Grade 1/3, low grade"
          }, {
            id : "00", name : "Grade 2/3, intermediate grade"
          }, {
            id : "00", name : "Grade 3/3, high grade"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Extent, macroscopic",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Limited to salivary gland"
          }, {
            id : "00", name : "Invades regional adipose tissue"
          }, {
            id : "00", name : "Invades large nerve"
          }, {
             description : "specify",
              inputs_required : [ "" ],
            id : "10", name : "invades other organs"
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "include distance/location of closest margin",
        id : "00", name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "10", name : "Free, "
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Tumor abuts the inked margin, "
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Indeterminate"
          }, {
            id : "00", name : "Suspicious"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Present, extensive"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Perineural invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Equivocal"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "50", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "50", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "51", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "50", name : "Positive node laterality",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Not applicable"
          }, {
            id : "00", name : "Right"
          }, {
            id : "00", name : "Left"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "50", name : "Extranodal extension",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Not applicable"
          }, {
            id : "00", name : "None"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Equivocal"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "01", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "00", name : ""
          }, {
            description : "preliminary/pathologic",
            id : "00", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "00", name : "m"
          }, {
            description : "recurrent",
            id : "00", name : "r"
          }, {
            description : "post-treatment",
            id : "00", name : "y"
          }, {
            id : "00", name : "mp"
          }, {
            id : "00", name : "rp"
          }, {
            id : "00", name : "yp"
          }, {
            id : "00", name : "mrp"
          }, {
            id : "00", name : "myp"
          }, {
            id : "00", name : "ryp"
          }, {
            id : "00", name : "mryp"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "02", name : "T",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "cannot be assessed",
            id : "00", name : "TX"
          }, {
            description : "in situ ",
            id : "00", name : "Tis"
          }, {
            description : "CARCINOMA <= 2 cm AND no extraparenchymal extension (gross but not microscopic soft tissue invasion)",
            id : "00", name : "T1"
          }, {
            description : "CARCINOMA > 2cm AND <= 4 cm AND no extraparenchymal extension (gross but not microscopic soft tissue invasion)",
            id : "00", name : "T2"
          }, {
            description : "CARCINOMA > 4cm OR extraparenchymal extension (gross but not microscopic soft tissue invasion) ",
            id : "00", name : "T3"
          }, {
            description : "CARCINOMA Tumor invades skin, mandible ear canal and or facial nerve",
            id : "00", name : "T4a"
          }, {
            description : "CARCINOMA Tumor invades skull base and or pterygoid plates and or encases carotid artery",
            id : "00", name : "T4b"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "03", name : "N",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "00", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "00", name : "N0"
          }, {
            description : "CARCINOMA single ipsilateral lymph node metastasis <= 3cm AND no extranodal extension",
            id : "00", name : "N1"
          }, {
            description : "CARCINOMA single ipsilateral lymph node metastasis either (<3cm with extranodal extension) OR (> 3cm AND <= 6cm and no extranodal extension)",
            id : "00", name : "N2a"
          }, {
            description : "CARCINOMA multiple ipsilateral lymph node metastases AND <= 6cm",
            id : "00", name : "N2b"
          }, {
            description : "CARCINOMA contralateral lymph node metastases AND <= 6cm",
            id : "00", name : "N2c"
          }, {
            description : "CARCINOMA metastases > 6cm no extranodal extension",
            id : "00", name : "N3a"
          }, {
            description : "CARCINOMA (metastases >3cm AND extranodal extension) OR (multiple node metastases with extranodal extension at least in one) OR (single contralateral node metastases <=3cm AND extranodal extension)",
            id : "00", name : "N3b"
          } ],
          id : "00", name : "Category (pN)"
        }]
        }, {
          id : "04", name : "M",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "metastases",
            id : "00", name : "M1"
          }, {
            id : "00", name : "M (not applicable)"
          }, {
            id : "00", name : "distant metastasis not applicable"
          } ],
          id : "00", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "00", name : "Mesothelioma, pleural",
      optional : false,
      organ_group : "Thorax",
      properties : [  {
        id : "00", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Right pleural decortication"
          }, {
            id : "00", name : "Right pleurectomy "
          }, {
            id : "00", name : "Right extrapleural pneumonectomy"
          }, {
            id : "00", name : "Left pleural decortication "
          }, {
            id : "00", name : "Left pleurectomy "
          }, {
            id : "00", name : "Left extrapleural pneumonectomy"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor location ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Parietal pleura"
          }, {
            id : "00", name : "Visceral pleura"
          }, {
            id : "00", name : "Visceral and parietal pleura"
          }, {
            id : "00", name : "Diaphragm"
          }, {
            id : "00", name : "Visceral and parietal pleura and diaphragm"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Focality",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Single focus"
          }, {
            id : "00", name : "Multiple foci "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Epithelioid mesothelioma"
          }, {
            id : "00", name : "Sarcomatoid mesothelioma"
          }, {
            id : "00", name : "Biphasic mesothelioma"
          }, {
            id : "00", name : "Desmoplastic mesothelioma"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Parietal pleura without involvement of ipsilateral visceral pleura "
          }, {
            id : "00", name : "Parietal pleura with focal involvement of ipsilateral visceral pleura"
          }, {
            id : "00", name : "Tumor involves all of the ipsilateral pleural surfaces (including fissure)  "
          }, {
            id : "00", name : "Into but not through diaphragm"
          }, {
            id : "00", name : "Lung parenchyma "
          }, {
            id : "00", name : "Endothoracic fascia"
          }, {
            id : "00", name : "Into mediastinal fat"
          }, {
            id : "00", name : "Solitary focus invading soft tissue of the chest wall "
          }, {
            id : "00", name : "Diffuse or multiple foci invading soft tissue of chest wall"
          }, {
            id : "00", name : "Into but not through the pericardium "
          }, {
            id : "00", name : "Rib(s)"
          }, {
            id : "00", name : "Mediastinal organ(s) "
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "include distance/location of closest margin",
        id : "00", name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Free "
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Treatment effect, primary site",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Greater than 50% residual viable tumor"
          }, {
            id : "00", name : "Less than or equal to 50% residual viable tumor"
          }, {
            id : "00", name : "Indeterminate"
          }, {
            id : "00", name : "Not known"
          }  ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "50", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "50", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "51", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "01", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "00", name : ""
          }, {
            description : "pathologic",
            id : "00", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "00", name : "m"
          }, {
            description : "recurrent",
            id : "00", name : "r"
          }, {
            description : "post-treatment",
            id : "00", name : "y"
          }, {
            id : "00", name : "mp"
          }, {
            id : "00", name : "rp"
          }, {
            id : "00", name : "yp"
          }, {
            id : "00", name : "mrp"
          }, {
            id : "00", name : "myp"
          }, {
            id : "00", name : "ryp"
          }, {
            id : "00", name : "mryp"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "02", name : "T",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "cannot be assessed",
            id : "00", name : "TX"
          }, {
            description : "Tumor limited to ipsilateral parietal pleura with or without mediastinal or diaphragmatic pleural involvement",
            id : "00", name : "T1"
          }, {
            description : "Tumor involves each of the ipsilateral pleural surfaces (parietal, mediastinal, diaphragmatic, and visceral pleura) with at least 1 of the following features: involvement of diaphragmatic muscle, extension of tumor from visceral pleura into the underlying pulmonary parenchyma ",
            id : "00", name : "T2"
          }, {
            description : "Locally advanced but potentially resectable tumor that involves all of the ipsilateral pleural surfaces (parietal, mediastinal, diaphragmatic, and visceral pleura), with at least 1 of the following features: involvement of the endothoracic fascia, extension into mediastinal fat, solitary completely resectable focus of tumor extending into the soft tissues of the chest wall, nontransmural involvement of the pericardium ",
            id : "00", name : "T3"
          }, {
            description : "Locally advanced technically unresectable tumor involving all of the ipsilateral pleural surfaces (parietal, mediastinal, diaphragmatic, and visceral pleura), with at least 1 of the following features: diffuse extension or multifocal masses of tumor in the chest wall with or without associated rib destruction, direct transdiaphragmatic extension to the peritoneum, direct extension to the contralateral pleura, direct extension to mediastinal organs, direct extension into the spine, extension through the internal surface of the pericardium with or without a pericardial effusion, tumor involving the myocardium",
            id : "00", name : "T4"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "03", name : "N",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "00", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "00", name : "N0"
          }, {
            description : "Metastases in the ipsilateral bronchopulmonary or hilar or mediastinal or peridiaphragmatic or pericardial fat pad or intercostal  lymph nodes",
            id : "00", name : "N1"
          }, {
            description : "Metastases in the contralateral mediastinal, ipsilateral or contralateral supraclavicular lymph nodes ",
            id : "00", name : "N3"
          } ],
          id : "00", name : "Category (pN)"
        }]
        }, {
          id : "04", name : "M",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Distant metastases",
            id : "00", name : "M1"
          }, {
            id : "00", name : "M (not applicable)"
          }, {
            id : "00", name : "distant metastasis not applicable"
          } ],
          id : "00", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "00", name : "Nasal Cavity and Paranasal Sinus",
      optional : false,
      organ_group : "Head and Neck",
      properties : [   {
        id : "00", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [  {
            id : "00", name : "Excisional biopsy"
          }, {
            id : "00", name : "Resection "
          }, {
            id : "00", name : "Partial maxillectomy "
          }, {
            id : "00", name : "Radical maxillectomy"
          }, {
            id : "00", name : "Resection, and neck (lymph node) dissection  "
          }, {
            id : "00", name : "Partial maxillectomy, and neck (lymph node) dissection  "
          }, {
            id : "00", name : "Radical maxillectomy, and neck (lymph node) dissection "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Right nasal cavity"
          }, {
            id : "00", name : "Right nasal cavity, septum"
          }, {
            id : "00", name : "Right nasal cavity, floor"
          }, {
            id : "00", name : "Right nasal cavity, lateral wall"
          }, {
            id : "00", name : "Right nasal cavity, vestibule"
          }, {
            id : "00", name : "Right paranasal sinus(es), maxillary"
          }, {
            id : "00", name : "Right paranasal sinus(es), ethmoid"
          }, {
            id : "00", name : "Right paranasal sinus(es), frontal"
          }, {
            id : "00", name : "Right paranasal sinus(es), sphenoid "
          }, {
            id : "00", name : "Left nasal cavity"
          }, {
            id : "00", name : "Left nasal cavity, septum"
          }, {
            id : "00", name : "Left nasal cavity, floor"
          }, {
            id : "00", name : "Left nasal cavity, lateral wall"
          }, {
            id : "00", name : "Left nasal cavity, vestibule"
          }, {
            id : "00", name : "Left paranasal sinus(es), maxillary"
          }, {
            id : "00", name : "Left paranasal sinus(es), ethmoid"
          }, {
            id : "00", name : "Left paranasal sinus(es), frontal"
          }, {
            id : "00", name : "Left paranasal sinus(es), sphenoid "
          }, {
            id : "00", name : "Midline nasal cavity"
          }, {
            id : "00", name : "Midline nasal cavity, septum"
          }, {
            id : "00", name : "Midline nasal cavity, floor"
          }, {
            id : "00", name : "Midline nasal cavity, lateral wall"
          }, {
            id : "00", name : "Midline nasal cavity, vestibule"
          }, {
            id : "00", name : "Midline paranasal sinus(es), maxillary"
          }, {
            id : "00", name : "Midline paranasal sinus(es), ethmoid"
          }, {
            id : "00", name : "Midline paranasal sinus(es), frontal"
          }, {
            id : "00", name : "Midline paranasal sinus(es), sphenoid "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor focality",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Single focus"
          }, {
            id : "00", name : "Multiple foci"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Squamous cell carcinoma"
          }, {
            id : "00", name : "Squamous cell carcinoma, keratinizing"
          }, {
            id : "00", name : "Squamous cell carcinoma, nonkeratinizing"
          }, {
            id : "00", name : "Adenosquamous carcinoma"
          }, {
            id : "00", name : "Basaloid squamous cell carcinoma"
          }, {
            id : "00", name : "Papillary squamous cell carcinoma"
          }, {
            id : "00", name : "Spindle cell squamous carcinoma"
          }, {
            id : "00", name : "Verrucous carcinoma"
          }, {
            id : "00", name : "Lymphoepithelial carcinoma (non-nasopharyngeal)"
          }, {
            id : "00", name : "Sinonasal undifferentiated carcinoma (SNUC)"
          }, {
            id : "00", name : "NUT carcinoma"
          }, {
            id : "00", name : "Adenocarcinoma, Intestinal type"
          }, {
            id : "00", name : "Adenocarcinoma, Non-intestinal type"
          }, {
            id : "00", name : "Acinic cell carcinoma"
          }, {
            id : "00", name : "Adenoid cystic carcinoma"
          }, {
            id : "00", name : "Adenocarcinoma, not otherwise specified (NOS)"
          }, {
            id : "00", name : "Carcinoma ex pleomorphic adenoma (malignant mixed tumor)"
          }, {
            id : "00", name : "Clear cell adenocarcinoma"
          }, {
            id : "00", name : "Epithelial-myoepithelial carcinoma"
          }, {
            id : "00", name : "Mucoepidermoid carcinoma"
          }, {
            id : "00", name : "Myoepithelial carcinoma (malignant myoepithelioma)"
          }, {
            id : "00", name : "Oncocytic carcinoma"
          }, {
            id : "00", name : "Polymorphous low-grade adenocarcinoma"
          }, {
            id : "00", name : "Salivary duct carcinoma"
          }, {
            id : "00", name : "Typical carcinoid tumor (well differentiated neuroendocrine carcinoma)"
          }, {
            id : "00", name : "Atypical carcinoid tumor (moderately differentiated neuroendocrine carcinoma)"
          }, {
            id : "00", name : "Small cell carcinoma (poorly differentiated neuroendocrine carcinoma)"
          }, {
            id : "00", name : "Combined (or composite) small cell carcinoma, neuroendocrine type"
          }, {
            id : "00", name : "Mucosal malignant melanoma"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Grade 1/3, Well differentiated"
          }, {
            id : "00", name : "Grade 2/3, Moderately differentiated"
          }, {
            id : "00", name : "Grade 3/3, Poorly differentiated "
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "include distance/location of closest margin",
        id : "00", name : "Margins, invasive tumor",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "10", name : "Free, "
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "include distance/location of closest margin",
        id : "00", name : "Margins, dysplasia/CIS",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "10", name : "Free, "
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Indeterminate"
          }, {
            id : "00", name : "Suspicious"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Present, extensive"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Perineural invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Equivocal"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "50", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "50", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "51", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "50", name : "Positive node laterality ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Not applicable"
          }, {
            id : "00", name : "Right"
          }, {
            id : "00", name : "Left"
          }, {
            id : "00", name : "Bilateral"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "50", name : "Size of largest metastasis",
       optional_state  : "required", "options" : [ {
        group : [ {
          id : "00", name : "Not applicable"
        } ],
          id : "00", name : ""
        } ]
      }, {
        id : "50", name : "Extranodal Extension ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Not applicable"
          }, {
            id : "00", name : "None"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Equivocal"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "01", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "00", name : ""
          }, {
            description : "pathologic",
            id : "00", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "00", name : "m"
          }, {
            description : "recurrent",
            id : "00", name : "r"
          }, {
            description : "post-treatment",
            id : "00", name : "y"
          }, {
            id : "00", name : "mp"
          }, {
            id : "00", name : "rp"
          }, {
            id : "00", name : "yp"
          }, {
            id : "00", name : "mrp"
          }, {
            id : "00", name : "myp"
          }, {
            id : "00", name : "ryp"
          }, {
            id : "00", name : "mryp"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "02", name : "T",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "cannot be assessed",
            id : "00", name : "TX"
          }, {
            description : "MAXILLARY SINUS, Tumor limited to maxillary sinus mucosa with no erosion or destruction of bone ",
            id : "00", name : "T1"
          }, {
            description : "MAXILLARY SINUS, Tumor causing bone erosion or destruction including extension into the hard palate and/or middle nasal meatus, except extension to posterior wall of maxillary sinus and pterygoid plates ",
            id : "00", name : "T2"
          }, {
            description : "MAXILLARY SINUS, Tumor invades any of the following: bone of the posterior wall of maxillary sinus, subcutaneous tissues, floor or medial wall of orbit, pterygoid fossa, ethmoid sinuses",
            id : "00", name : "T3"
          }, {
            description : "MAXILLARY SINUS, Moderately advanced local disease. Tumor invades anterior orbital contents, skin of cheek, pterygoid plates, infratemporal fossa, cribriform plate, sphenoid or frontal sinuses",
            id : "00", name : "T4a"
          }, {
            description : "MAXILLARY SINUS, Very advanced local disease. Tumor invades any of the following: orbital apex, dura, brain, middle cranial fossa, cranial nerves other than maxillary division of trigeminal nerve (V2), nasopharynx, or clivus",
            id : "00", name : "T4b"
          }, {
            description : "NASAL CAVITY AND ETHMOID SINUS, Tumor restricted to any one subsite, with our without bone invasion ",
            id : "00", name : "T1"
          }, {
            description : "NASAL CAVITY AND ETHMOID SINUS, Tumor invading two subsites in a single region or extending to involve an adjacent region within the nasoethmoidal complex, with our without bone invasion ",
            id : "00", name : "T2"
          }, {
            description : "NASAL CAVITY AND ETHMOID SINUS, Tumor extends to invade the medial wall or floor of the orbit, maxillary sinus, palate, or cribriform plate",
            id : "00", name : "T3"
          }, {
            description : "NASAL CAVITY AND ETHMOID SINUS, Moderately advanced local disease Tumor invades any of the following:  anterior orbital contents, skin of nose or cheek, minimal extension to anterior cranial fossa, pterygoid plates, sphenoid or frontal sinuses",
            id : "00", name : "T4a"
          }, {
            description : "NASAL CAVITY AND ETHMOID SINUS, Very advanced local disease. Tumor invades any of the following:  orbital apex, dura, brain, middle cranial fossa, cranial nerves other than maxillary division of trigeminal nerve (V2), nasopharynx, or clivus",
            id : "00", name : "T4b"
          }, {
            description : "MELANOMA, Mucosal disease",
            id : "00", name : "T3"
          }, {
            description : "MELANOMA, Moderately advanced disease. Tumor involving deep soft tissue, cartilage, bone, or overlying skin ",
            id : "00", name : "T4a"
          }, {
            description : "MELANOMA, Very advanced disease. Tumor involving brain, dura, skull base, lower cranial nerves (IX, X, XI, XII), masticator space, carotid artery, prevertebral space, or mediastinal structures",
            id : "00", name : "T4b"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "03", name : "N",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "00", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "00", name : "N0"
          }, {
            description : "CARCINOMA Metastasis in a single ipsilateral lymph node, 3 cm or less in greatest dimensiona, AND no extranodal extension",
            id : "00", name : "N1"
          }, {
            description : "CARCINOMA Metastasis in a (single ipsilateral lymph node <= 3mc AND extranodal extension) OR, (more than 3 cm but not more than 6 cm in greatest dimension, AND no extranodal extenison) ",
            id : "00", name : "N2a"
          }, {
            description : "CARCINOMA Metastasis in multiple ipsilateral lymph nodes, none more than 6 cm in greatest dimension AND no extrandoal extension",
            id : "00", name : "N2b"
          }, {
            description : "CARCINOMA Metastasis in bilateral or contralateral lymph nodes, none more than 6 cm in greatest dimension AND no extranodal extension",
            id : "00", name : "N2c"
          }, {
            description : "CARCINOMA Metastasis in a lymph node more than 6 cm in greatest dimension AND no extranodal extension",
            id : "00", name : "N3a"
          }, {
            description : "CARCINOMA Metastasis in (a single ipsilateral node > 3cm AND extranodal extension) OR ( multiple ipsilatearl, contralateral or bilateral nodes AND extranodal extension OR (single contralateral node <=3cm AND extranodal extension)",
            id : "00", name : "N3b"
          }, {
            description : "MELANOMA, regional metastases",
            id : "00", name : "N1"
          } ],
          id : "00", name : "Category (pN)"
        }]
        }, {
          id : "04", name : "M",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "metastases",
            id : "00", name : "M1"
          }, {
            id : "00", name : "M (not applicable)"
          }, {
            id : "00", name : "distant metastasis not applicable"
          } ],
          id : "00", name : ""
        } ]
      } ]
  
   }, {
      most_common : false,
      id : "00", name : "Neuroblastoma, biopsy",
      optional : true,
      organ_group : "Pediatric",
      properties : [ {
        id : "00", name : "Specimen",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Adrenal/periadrenal"
          }, {
            id : "00", name : "Retroperitoneal, nonadrenal"
          }, {
            id : "00", name : "Thoracic paraspinal"
          }, {
            id : "00", name : "Cervical "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Needle biopsy"
          }, {
            id : "00", name : "Incisional biopsy"
          } ],
          id : "00", name : ""
        } ]
     
      },  {
        id : "00", name : "Patient Age ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "<18 months"
          }, {
            id : "00", name : "≥18 months and <5 years "
          }, {
            id : "00", name : "≥5 years "
          }, {
            id : "00", name : "Equivocal "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Neuroblastoma"
          }, {
            id : "00", name : "Ganglioneuroblastoma Nodular subtype "
          }, {
            id : "00", name : "Ganglioneuroblastoma Intermixed subtype "
          }, {
            id : "00", name : "Ganglioneuroma "
          }, {
            id : "00", name : "Neuroblastic tumor, unclassifiable"
          }, {
            id : "00", name : "Equivocal "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Degree of Differentiation ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Undifferentiated"
          }, {
            id : "00", name : "Poorly differentiated "
          }, {
            id : "00", name : "Differentiating "
          }, {
            id : "00", name : "Not applicable "
          }, {
            id : "00", name : "Equivocal "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Mitotic-Karyorrhectic Index (MKI) ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Low (<100 per 5000 cells; <2%)"
          }, {
            id : "00", name : "Intermediate (100-200 per 5000 cells; 2%-4%) "
          }, {
            id : "00", name : "High (>200 per 5000 cells; >4%) "
          }, {
            id : "00", name : "Not applicable "
          }, {
            id : "00", name : "Equivocal "
          } ],
          id : "00", name : ""
        } ]
      },  {
        id : "00", name : "International Neuroblastoma Pathology Classification (INPC)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "Any age; ganglioneuroma (Schwannian stroma-dominant); maturing or mature OR Any age; ganglioneuroblastoma, intermixed (Schwannian stroma-rich) OR Less than 18 months old; neuroblastoma (Schwannian stroma-poor) or nodular ganglioneuroblastoma; poorly differentiated or differentiating subtypes with low or intermediate mitosis-karyorrhexis index (MKI)  OR 18 months up to less than 5 years old; neuroblastoma (Schwannian stroma-poor) or nodular ganglioneuroblastoma; differentiating subtype and low MKI",
            id : "00", name : "Favorable Histopathology"
          }, {
            description : "Any age; neuroblastoma (Schwannian stroma-poor) or nodular ganglioneuroblastoma with undifferentiated histology and any MKI OR Less than 18 months old; neuroblastoma (Schwannian stroma-poor) or nodular ganglioneuroblastoma with poorly differentiated or differentiating subtypes with high MKI OR 18 months up to less than 5 years old; neuroblastoma (Schwannian stroma-poor) or nodular ganglioneuroblastoma; poorly differentiated and any MKI, or differentiating and intermediate or high MKI OR Equal to or greater than 5 years old; neuroblastoma (Schwannian stroma-poor) or nodular ganglioneuroblastoma; any subtype and any MKI",
            id : "00", name : "Unfavorable Histopathology"
          }, {
            id : "00", name : "Equivocal"
          }, {
            id : "00", name : "Not applicable  "
          } ],
          id : "00", name : ""
        } ]
   
      },  {
         description : "required for all tumors except ganglioneuroma",
        id : "00", name : "MYCN Amplification Status  ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Not amplified"
          }, {
            id : "00", name : "Amplified "
          }, {
            id : "00", name : "Gain"
          }, {
            id : "00", name : "Pending"
          }, {
            id : "00", name : "Equivocal "
          } ],
          id : "00", name : ""
        } ]
      } ]
    },{
      most_common : false,
      id : "00", name : "Neuroblastoma, resection",
      optional : true,
      organ_group : "Pediatric",
      properties : [ {
        id : "00", name : "Specimen",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Adrenal/periadrenal"
          }, {
            id : "00", name : "Retroperitoneal, nonadrenal"
          }, {
            id : "00", name : "Thoracic paraspinal"
          }, {
            id : "00", name : "Cervical "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Resection"
          }, {
            id : "00", name : "Incisional biopsy"
          } ],
          id : "00", name : ""
        } ]
     
      }, {
        id : "00", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "00", name : ""
        } ]
    
      }, {
        id : "00", name : "Patient Age ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "<18 months"
          }, {
            id : "00", name : "≥18 months and <5 years "
          }, {
            id : "00", name : "≥5 years "
          }, {
            id : "00", name : "Equivocal "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Neuroblastoma"
          }, {
            id : "00", name : "Ganglioneuroblastoma Nodular subtype "
          }, {
            id : "00", name : "Ganglioneuroblastoma Intermixed subtype "
          }, {
            id : "00", name : "Ganglioneuroma "
          }, {
            id : "00", name : "Neuroblastic tumor, unclassifiable"
          }, {
            id : "00", name : "Equivocal "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Degree of Differentiation ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Undifferentiated"
          }, {
            id : "00", name : "Poorly differentiated "
          }, {
            id : "00", name : "Differentiating "
          }, {
            id : "00", name : "Not applicable "
          }, {
            id : "00", name : "Equivocal "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Mitotic-Karyorrhectic Index (MKI) ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Low (<100 per 5000 cells; <2%)"
          }, {
            id : "00", name : "Intermediate (100-200 per 5000 cells; 2%-4%) "
          }, {
            id : "00", name : "High (>200 per 5000 cells; >4%) "
          }, {
            id : "00", name : "Not applicable "
          }, {
            id : "00", name : "Equivocal "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Treatment History ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "No known presurgical chemotherapy"
          }, {
            id : "00", name : "Presurgical chemotherapy given "
          }, {
            id : "00", name : "Indeterminate "
          }, {
            id : "00", name : "Not known"
          }  ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "International Neuroblastoma Pathology Classification (INPC)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "Any age; ganglioneuroma (Schwannian stroma-dominant); maturing or mature OR Any age; ganglioneuroblastoma, intermixed (Schwannian stroma-rich) OR Less than 18 months old; neuroblastoma (Schwannian stroma-poor) or nodular ganglioneuroblastoma; poorly differentiated or differentiating subtypes with low or intermediate mitosis-karyorrhexis index (MKI)  OR 18 months up to less than 5 years old; neuroblastoma (Schwannian stroma-poor) or nodular ganglioneuroblastoma; differentiating subtype and low MKI",
            id : "00", name : "Favorable Histopathology"
          }, {
            description : "Any age; neuroblastoma (Schwannian stroma-poor) or nodular ganglioneuroblastoma with undifferentiated histology and any MKI OR Less than 18 months old; neuroblastoma (Schwannian stroma-poor) or nodular ganglioneuroblastoma with poorly differentiated or differentiating subtypes with high MKI OR 18 months up to less than 5 years old; neuroblastoma (Schwannian stroma-poor) or nodular ganglioneuroblastoma; poorly differentiated and any MKI, or differentiating and intermediate or high MKI OR Equal to or greater than 5 years old; neuroblastoma (Schwannian stroma-poor) or nodular ganglioneuroblastoma; any subtype and any MKI",
            id : "00", name : "Unfavorable Histopathology"
          }, {
            id : "00", name : "Equivocal"
          }, {
            id : "00", name : "Not applicable  "
          } ],
          id : "00", name : ""
        } ]
   
      },  {
        id : "00", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "50", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "50", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "51", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
       
        id : "00", name : "Distant metastases",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Present"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
         description : "required for all tumors except ganglioneuroma",
        id : "00", name : "MYCN Amplification Status  ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Not amplified"
          }, {
            id : "00", name : "Amplified "
          }, {
            id : "00", name : "Gain"
          }, {
            id : "00", name : "Pending"
          }, {
            id : "00", name : "Equivocal "
          } ],
          id : "00", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "00", name : "Ocular hematopoietic neoplasms",
      optional : true,
      organ_group : "Hematologic",
      properties : [ {
        id : "00", name : "Specimen",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Conjunctiva"
          }, {
            id : "00", name : "Orbital soft tissue (orbit) "
          }, {
            id : "00", name : "Lacrimal gland"
          }, {
            id : "00", name : "Lacrimal sac or nasolacrimal duct "
          }, {
            id : "00", name : "Eyelid"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Biopsy"
          }, {
            id : "00", name : "Resection "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymph Node Sampling ",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "preauricular/parotid, submandibular, or cervical",
            id : "00", name : "Regional lymph node(s) "
          }, {
            description : "lymph nodes from the trunk, eg, mediastinal, para-aortic",
            id : "00", name : "Central lymph node(s)  "
          }, {
            description : "lymph nodes from distant sites other than central",
            id : "00", name : "Peripheral lymph node(s)  "
          }, {
            id : "00", name : "Equivocal"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Extranodal marginal zone lymphoma of mucosa-associated lymphoid tissue (MALT lymphoma)"
          }, {
            id : "00", name : "Follicular lymphoma"
          }, {
            id : "00", name : "Diffuse large B-cell lymphoma, not otherwise specified (NOS)"
          }, {
            id : "00", name : "Mantle cell lymphoma"
          }, {
            id : "00", name : "Chronic lymphocytic leukemia/small lymphocytic lymphoma"
          }, {
            id : "00", name : "Lymphoplasmacytic lymphoma"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "01", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "00", name : ""
          }, {
            description : "pathologic",
            id : "00", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "00", name : "m"
          }, {
            description : "recurrent",
            id : "00", name : "r"
          }, {
            description : "post-treatment",
            id : "00", name : "y"
          }, {
            id : "00", name : "mp"
          }, {
            id : "00", name : "rp"
          }, {
            id : "00", name : "yp"
          }, {
            id : "00", name : "mrp"
          }, {
            id : "00", name : "myp"
          }, {
            id : "00", name : "ryp"
          }, {
            id : "00", name : "mryp"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "02", name : "T",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "cannot be assessed",
            id : "00", name : "TX"
          }, {
            description : "Conjunctiva involvement only",
            id : "00", name : "T1"
          }, {
            description : "Orbital involvement ",
            id : "00", name : "T2"
          }, {
            description : "Preseptal eyelid involvement ",
            id : "00", name : "T3"
          }, {
            description : "Beyond orbit (bone, sinus, brain)",
            id : "00", name : "T4"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "03", name : "N",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "00", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "00", name : "N0"
          }, {
            description : "Single lymph node region superior to mediastinum",
            id : "00", name : "N1a"
          }, {
            description : "2 or more lymph node regions above mediastinum",
            id : "00", name : "N1b"
          }, {
            description : "Involvement of mediastinum",
            id : "00", name : "N2"
          }, {
            description : "Involvement of peropheral and central lymph node regions ",
            id : "00", name : "N3"
          } ],
          id : "00", name : "Category (pN)"
        }]
        }, {
          id : "04", name : "M",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Non-contiguous involvement of tissues or organs external to the ocular adnexa (eg, salivary glands, lung, liver)",
            id : "00", name : "M1a"
          }, {
            description : "Bone marrow involvement",
            id : "00", name : "M1b"
          }, {
            description : "Both pM1a and pM1b involvement",
            id : "00", name : "M1c"
          }, {
            id : "00", name : "M (not applicable)"
          }, {
            id : "00", name : "distant metastasis not applicable"
          } ],
          id : "00", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "00", name : "Ovary Fallopian Tube Peritoneum",
      optional : false,
      organ_group : "Gynecologic",
      properties : [  {
        id : "00", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Oophorectomy"
          }, {
            id : "00", name : "Bilateral oophorectomy"
          }, {
            id : "00", name : "Unilateral salpingo-oophorectomy"
          }, {
            id : "00", name : "Bilateral salpingo-oophorectomy"
          }, {
            id : "00", name : "Salpingectomy"
          }, {
            id : "00", name : "Hysterectomy and unilateral salpingo-oophorectomy"
          }, {
            id : "00", name : "Hysterectomy and bilateral salpingo-oophorectomy"
          }, {
            id : "00", name : "Hysterectomy, bilateral salpingo-oophorectomy, and omentectomy"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Right ovary integrity",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Not applicable"
          }, {
            id : "00", name : "Capsule intact"
          }, {
            id : "00", name : "Capsule ruptured"
          }, {
            id : "00", name : "Fragmented"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Left ovary integrity",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Not applicable"
          }, {
            id : "00", name : "Capsule intact"
          }, {
            id : "00", name : "Capsule ruptured"
          }, {
            id : "00", name : "Fragmented"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Right fallopian tube integrity",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Not applicable"
          }, {
            id : "00", name : "Capsule intact"
          }, {
            id : "00", name : "Capsule ruptured"
          }, {
            id : "00", name : "Fragmented"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Left fallopian tube integrity",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Not applicable"
          }, {
            id : "00", name : "Capsule intact"
          }, {
            id : "00", name : "Capsule ruptured"
          }, {
            id : "00", name : "Fragmented"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Primary tumor site",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Right ovary"
          }, {
            id : "00", name : "Left Ovary"
          }, {
            id : "00", name : "Bilateral ovaries"
          }, {
            id : "00", name : "Right fallopian tube"
          }, {
            id : "00", name : "Left fallopian tube"
          } , {
            id : "00", name : "Primary peritoneum"
          }],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Ovarian surface involvement",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Equivocal"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Fallopian tube surface involvement",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Equivocal"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
                   description : "WT1- p53-/focal+, ER +, Pax8+",
            id : "00", name : "Endometrioid adenocarcinoma"
          }, {
            id : "00", name : "Endometrioid adenocarcinoma with squamous differentiation"
          }, {
            id : "00", name : "Endometrioid borderline tumor"
          }, {
            id : "00", name : "Mucinous adenocarcinoma"
          }, {
            id : "00", name : "Mucinous borderline tumor"
          }, {
            id : "00", name : "Seromucinous borderline tumor"
          }, {
                       description : "NapsinA+, HNF-1b +, Pax8+",
            id : "00", name : "Clear cell adenocarcinoma"
          }, {
               description : "WT1+ p53+ or completely -, ER variable, Pax8+",
            id : "00", name : "Serous carcinoma"
          }, {
            id : "00", name : "Serous borderline tumor"
          }, {
            id : "00", name : "Serous borderline tumor with microinvasion"
          }, {
            id : "00", name : "Serous borderline tumor-micropapillary variant/noninvasive low-grade serous carcinoma"
          }, {
            id : "00", name : "Serous tubal intraepithelial carcinoma (STIC)"
          }, {
            id : "00", name : "Small cell carcinoma"
          }, {
            id : "00", name : "Large cell neuroendocrine carcinoma"
          }, {
            id : "00", name : "Carcinosarcoma (MMMT), homologous"
          }, {
            id : "00", name : "Carcinosarcoma (MMMT), heterologous"
          }, {
            id : "00", name : "Brenner tumor, borderline"
          }, {
            id : "00", name : "Brenner tumor malignant"
          }, {
            id : "00", name : "Granulosa cell tumor"
          }, {
            id : "00", name : "Sex cord stromal tumor"
          }, {
            id : "00", name : "Dysgerminoma"
          }, {
            id : "00", name : "Yolk sac tumor"
          }, {
            id : "00", name : "Immature teratoma"
          }, {
            id : "00", name : "Carcinoma arising from a teratoma"
          }, {
            id : "00", name : "Mixed germ cell tumor"
          }  ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "WHO grade 1/3"
          }, {
            id : "00", name : "WHO grade 2/3"
          }, {
            id : "00", name : "WHO grade 3/3"
          }, {
            description : "required for serous carcinoma and teratoma",
            id : "00", name : "Low grade"
          }, {
            description : "required for serous carcinoma and teratoma",
            id : "00", name : "High grade"
          }, {
             description : "Clear cell tumors, Sertoli Leydig cell tumors",
            id : "00", name : "Not applicable"
          }  ],
          id : "00", name : ""
        } ]
      }, {
          description : "Serous tumor implants that were formerly classified as “invasive implants” are now classified as low-grade serous carcinoma of the peritoneum",
        id : "00", name : "Implants",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
         description : "R/L ovary, tube, uterus, cervix, pelvic peritoneum, abdominal peritoneum, omentum",
        id : "00", name : "Other tissue(s) involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          },{
           description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
            }],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Largest Extrapelvic Peritoneal Focus ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Not applicable"
          }, {
            id : "00", name : "Microscopic"
          }, {
            id : "00", name : "Macroscopic (2 cm or less)"
          }, {
            id : "00", name : "Macroscopic (greater than 2 cm)"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Peritoneal fluid/washings",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Not applicable"
          }, {
            id : "00", name : "Benign"
          }, {
            id : "00", name : "Atypical"
          }, {
            id : "00", name : "Suspicious"
          }, {
            id : "00", name : "Malignant"
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "includes as pelvic, external iliac, internal iliac (hypogastric), common iliac, parametrial, obturator, sacral, presacral, para-aortic, and retroperitoneal are considered regional lymph nodes. Although not specifically named by AJCC or FIGO, intra-omental and peri-intestinal lymph nodes, are also regarded as regional lymph nodes for staging purposes ",
        id : "00", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "50", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
      
        id : "50", name : "Lymph nodes, # w/ mets > 10mm",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
       
        id : "50", name : "Lymph nodes, # w/ mets >0.2mm, <= 10mm",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "<= 0.2mm",
        id : "50", name : "Lymph nodes, # w/ isolated tumor cells",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "50", name : "Size of largest deposit",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "50", name : "Location of largest deposit",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "required only for high-grade serous carcinomas",
        id : "00", name : "Treatment Effect ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "No known therapy"
          }, {
            id : "00", name : "None or minimal response (CRS1)"
          }, {
            id : "00", name : "Moderate response (CRS 2)"
          }, {
            id : "00", name : "Marked response with no or minimal residual cancer (CRS 3)"
          }, {
            id : "00", name : "Indeterminate"
          }, {
            id : "00", name : "Not applicable"
          }  ],
          id : "00", name : ""
        } ] 
  
     }, {
        id : "01", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "00", name : ""
          }, {
            description : "pathologic",
            id : "00", name : "AJCC p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "00", name : "AJCC m"
          }, {
            description : "recurrent",
            id : "00", name : "AJCC r"
          }, {
            description : "post-treatment",
            id : "00", name : "AJCC y"
          }, {
            id : "00", name : "AJCC mp"
          }, {
            id : "00", name : "AJCC rp"
          }, {
            id : "00", name : "AJCC yp"
          }, {
            id : "00", name : "AJCC mrp"
          }, {
            id : "00", name : "AJCC myp"
          }, {
            id : "00", name : "AJCC ryp"
          }, {
            id : "00", name : "AJCC mryp"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "02", name : "T",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "cannot be assessed",
            id : "00", name : "TX"
          }, {
            description : "Tumor limited to one ovary (capsule intact) or fallopian tube, no tumor on ovarian or fallopian tube surface; no malignant cells in ascites or peritoneal washings. Serous tubal intraepithelial carcinoma (STIC) should be staged as pT1a if it involves one tube only, as pT1b if it involves both tubes, and as pT1c3 if it is accompanied by positive peritoneal washing washings or ascites. Nonmalignant ascites is not classified. The presence of ascites does not affect staging unless malignant cells are present.",
            id : "00", name : "T1a"
          }, {
            description : "Tumor limited to both ovaries (capsules intact) or fallopian tubes; no tumor on ovarian or fallopian tube surface; no malignant cells in ascites or peritoneal washings",
            id : "00", name : "T1b"
          }, {
            description : "Tumor limited to one or both ovaries or fallopian tubes with any of the followingpT1c1:  Surgical spill, Capsule ruptured before surgery or tumor on ovarian or fallopian tube surface, Malignant cells in ascites or peritoneal washings",
            id : "00", name : "T1c"
          }, {
            description : "Extension and/or implants on uterus and/or fallopian tube(s) and/or ovaries. ",
            id : "00", name : "T2a"
          }, {
            description : "Extension to and/or implants on other pelvic tissues. ",
            id : "00", name : "T2b"
          }, {
            description : "Microscopic extrapelvic (above the pelvic brim) peritoneal involvement with or without positive retroperitoneal lymph nodes ",
            id : "00", name : "T3a"
          }, {
            description : "Macroscopic peritoneal metastasis beyond pelvis 2 cm or less in greatest dimension with or without metastasis to retroperitoneal lymph nodes ",
            id : "00", name : "T3b"
          }, {
            description : "Macroscopic peritoneal metastasis beyond pelvis more than 2 cm in greatest dimension with or without metastasis to the retroperitoneal lymph nodes (includes extension of tumor to capsule of liver and spleen without parenchymal involvement of either organ)",
            id : "00", name : "T3c"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "03", name : "N",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "00", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "00", name : "N0"
          }, {
            description : "Isolated tumor cells, <=0.2mm",
            id : "00", name : "N0(i+)"
          }, {
            description : "regional lymph node metastasis <= 10mm",
            id : "00", name : "N1a"
          }, {
            description : "regional lymph node metastasis, > 10 mm",
            id : "00", name : "N1b"
          } ],
          id : "00", name : "Category (pN)"
        }]
        }, {
          id : "04", name : "M",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Positive pleural effusion",
            id : "00", name : "M1a"
          }, {
             description : "all other metastases",
            id : "00", name : "M1b"
          }, {
            id : "00", name : "M (not applicable)"
          }, {
            id : "00", name : "distant metastasis not applicable"
          } ],
          id : "00", name : ""
        } ]
  
    }, {
        id : "00", name : "Stage FIGO (2015)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "Tumor limited to 1 ovary (capsule intact) or fallopian tube; no tumor on ovarian or fallopian tube surface; no malignant cells in the ascites or peritoneal washings",
            id : "00", name : "FIGO IA"
          }, {
            description : "Tumor limited to both ovaries (capsules intact) or fallopian tubes; no tumor on ovarian or fallopian tube surface; no malignant cells in the ascites or peritoneal washings",
            id : "00", name : "FIGO IB"
          }, {
            description : "Surgical spill intraoperatively",
            id : "00", name : "FIGO IC1"
          }, {
            description : "Capsule ruptured before surgery or tumor on ovarian or fallopian tube surface",
            id : "00", name : "FIGO IC2"
          }, {
            description : "Malignant cells present in the ascites or peritoneal washings",
            id : "00", name : "FIGO IC3"
          }, {
            description : "Extension and/or implants on the uterus and/or fallopian tubes and/or ovaries",
            id : "00", name : "FIGO IIA"
          }, {
            description : "Extension to other pelvic intraperitoneal tissues",
            id : "00", name : "FIGO IIB"
          }, {
            description : "Positive retroperitoneal lymph nodes only (cytologically or histologically proven)",
            id : "00", name : "FIGO IIIA1"
          }, {
            description : "Microscopic extrapelvic (above the pelvic brim) peritoneal involvement with or without positive retroperitoneal lymph nodes",
            id : "00", name : "FIGO IIIA2"
          }, {
            description : "Macroscopic peritoneal metastases beyond the pelvic brim ≤2 cm in greatest dimension, with or without metastasis to the retroperitoneal lymph nodes",
            id : "00", name : "FIGO IIIB"
          }, {
            description : "Macroscopic peritoneal metastases beyond the pelvic brim >2 cm in greatest dimension, with or without metastases to the retroperitoneal nodes",
            id : "00", name : "FIGO IIIC"
          }, {
            description : "Pleural effusion with positive cytology",
            id : "00", name : "FIGO IVA"
          }, {
            description : "Metastases to extra-abdominal organs (including inguinal lymph nodes and lymph nodes outside of abdominal cavity)",
            id : "00", name : "FIGO IVB"
          }, {
            description : "",
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
           } ]
      }, {
      most_common : false,
      id : "00", name : "Pancreas neuroendocrine tumor",
      optional : false,
      organ_group : "Endocrine",
      properties : [  {
        id : "00", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Excisional biopsy (enucleation)"
          }, {
            id : "00", name : "Pancreaticoduodenectomy (Whipple resection), partial pancreatectomy"
          }, {
            id : "00", name : "Pancreaticoduodenectomy (Whipple resection), total pancreatectomy"
          }, {
            id : "00", name : "Partial pancreatectomy, pancreatic body "
          }, {
            id : "00", name : "Partial pancreatectomy, pancreatic tail"
          }, {
            id : "00", name : "Distal pancreatectomy"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Pancreatic head"
          }, {
            id : "00", name : "Uncinate process"
          }, {
            id : "00", name : "Pancreatic body"
          }, {
            id : "00", name : "Pancreatic tail"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor Focality ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Single focus"
          }, {
            id : "00", name : "Multiple foci"
          }, {
            id : "00", name : "Equivocal"
          } ],
          id : "00", name : ""
        } ]
      }, {
         description : "For small cell (high grade NET use pancreas carcinoma protocol not this one) ",  
        id : "00", name : "Type and Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "< 2mitoses/10 hpf and/or Ki67<3% ", 
            id : "00", name : "Grade 1/3, Well differentiated neuroendocrine tumor, low grade (carcinoid)"
          }, {
            description : ">= 2 AND < 20 mitoses/10 hpf and/or Ki67 >=3 AND <20% ",  
            id : "00", name : "Grade 2/3, Well differentiated neuroendocrine tumor, intermediate grade (atypical carcinoid)"
          }, {
             description : "> 20 mitoses/10 hpf and/or Ki67 >20% ",  
            id : "00", name : "Grade 3/3, Well differentiated neuroendocrine tumor"
          } ],
          id : "00", name : ""
        } ]
      }, {
           description : "mitoses/ 2 mm squared NOT 10 hpf, approximately count 42 hpf and divide by 5", 
        id : "00", name : "Mitotic rate",
       optional_state  : "required", "options" : [ {
          group : [ {
            
            id : "00", name : "Less than 2/ 2mm squared"
          }, {
          
            id : "00", name : "at least 2 and less than 20 /2 mm squared"
          }, {
            
            id : "00", name : "More than 20 per 2 mm squared"
          } ],
          id : "00", name : ""
        } ]  
        
      }, {
        id : "00", name : "Ki67 (Mib1)",
       optional_state  : "required", "options" : [ {
          group : [ {
            
            id : "00", name : "Less than 3%"
          }, {
          
            id : "00", name : "at least 3% and less than 20%"
          }, {
            
            id : "00", name : "More than 20%"
          } ],
          id : "00", name : ""
        } ]  
        
      }, {
        id : "00", name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "No evidence of primary tumor"
          }, {
            id : "00", name : "Tumor is limited to pancreas"
          }, {
            id : "00", name : "Tumor invades common bile duct"
          }, {
            id : "00", name : "Tumor invades duodenum "
          }, {
             description : "location",
            inputs_required : [ "" ],
            id : "11", name : "Tumor directly invades adjacent structures "
          }, {
             description : "location",
            inputs_required : [ "" ],
            id : "11", name : "Tumor directly invades wall of large vessel "
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "include distance/location of closest proximal/distal/bile duct/pancreatic/uncinate margin",
        id : "00", name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "10", name : "Free, "
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Indeterminate"
          }, {
            id : "00", name : "Suspicious"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Present, extensive"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Perineural invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Equivocal"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "50", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "50", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "51", name : "0" },{ id : "53", name : "1" },{ id : "53", name : "2" },{ id : "53", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "01", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "00", name : ""
          }, {
            description : "pathologic",
            id : "00", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "00", name : "m"
          }, {
            description : "recurrent",
            id : "00", name : "r"
          }, {
            description : "post-treatment",
            id : "00", name : "y"
          }, {
            id : "00", name : "mp"
          }, {
            id : "00", name : "rp"
          }, {
            id : "00", name : "yp"
          }, {
            id : "00", name : "mrp"
          }, {
            id : "00", name : "myp"
          }, {
            id : "00", name : "ryp"
          }, {
            id : "00", name : "mryp"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "02", name : "T",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "cannot be assessed",
            id : "00", name : "TX"
          }, {
            description : "No tumor",
            id : "00", name : "T0"
          }, {
            description : "Tumor limited to the pancreas, 2 cm or less in greatest dimension ",
            id : "00", name : "T1"
          }, {
            description : "Tumor limited to the pancreas, > 2cm and <= 4cm",
            id : "00", name : "T2"
          }, {
            description : "(Tumor limited to pancreas AND > 4cm) OR (Tumor invades duodenum or bile duct",
            id : "00", name : "T3"
          }, {
            description : "Tumor invades adjacent organs or wall of large vessels ",
            id : "00", name : "T4"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "03", name : "N",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "00", name : "NX"
          }, {
            description : "No regional lymph node metastases",
            id : "00", name : "N0"
          }, {
            description : "Metastases to regional lymph nodes",
            id : "00", name : "N1"
          } ],
          id : "00", name : "Category (pN)"
        }]
        }, {
          id : "04", name : "M",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Distant metastases liver",
            id : "00", name : "M1a"
          }, {
                description : "Distant metastases other than liver",
            id : "00", name : "M1b"
          }, {
                description : "Distant metastases liver and other",
            id : "00", name : "M1c"
          }, {
            id : "00", name : "M (not applicable)"
          }, {
            id : "00", name : "distant metastasis not applicable"
          } ],
          id : "00", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "00", name : "Pancreas Exocrine tumor",
      optional : false,
      organ_group : "Gastrointestinal",
      properties : [ {
        id : "00", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Pancreaticoduodenectomy (Whipple resection), partial pancreatectomy"
          }, {
            id : "00", name : "Pancreaticoduodenectomy (Whipple resection), total pancreatectomy"
          }, {
            id : "00", name : "Partial pancreatectomy, pancreatic body "
          }, {
            id : "00", name : "Partial pancreatectomy, pancreatic tail"
          }, {
            id : "00", name : "Distal pancreatectomy"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Pancreatic head"
          }, {
            id : "00", name : "Uncinate process"
          }, {
            id : "00", name : "Pancreatic body"
          }, {
            id : "00", name : "Pancreatic tail"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Adenocarcinoma"
          }, {
            id : "00", name : "Ductal adenocarcinoma "
          }, {
            id : "00", name : "Colloid carcinoma (mucinous noncystic carcinoma) "
          }, {
            id : "00", name : "Signet-ring cell carcinoma "
          }, {
            id : "00", name : "Adenosquamous carcinoma"
          }, {
            id : "00", name : "Intraductal papillary-mucinous carcinoma with an associated invasive carcinoma "
          }, {
            id : "00", name : "Mucinous cystic neoplasm with an associated invasive carcinoma"
          }, {
            id : "00", name : "Large cell neuroendocrine carcinoma"
          }, {
            id : "00", name : "Small cell neuroendocrine carcinoma"
          }, {
            id : "00", name : "Undifferentiated (anaplastic) carcinoma"
          }, {
            id : "00", name : "Undifferentiated carcinoma with osteoclast-like giant cells"
          }, {
            id : "00", name : "Acinar cell carcinoma "
          }, {
            id : "00", name : "Acinar cell cystadenocarcinoma"
          }, {
            id : "00", name : "Serous cystadenocarcinoma"
          }, {
            id : "00", name : "Mixed acinar-ductal carcinoma"
          }, {
            id : "00", name : "Mixed ductal-neuroendocrine carcinoma"
          }, {
            id : "00", name : "Mixed acinar-neuroendocrine carcinoma"
          }, {
            id : "00", name : "Mixed acinar-neuroendocrine-ductal carcinoma"
          }, {
            description : "nuclear B-catenin +, cyto E-cad -, PR +, CD10+, Chr -, Syn +/-",
            id : "00", name : "Solid-pseudopapillary neoplasm "
          }, {
            id : "00", name : "Hepatoid carcinoma"
          }, {
            id : "00", name : "Medullary carcinoma"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Grade 1/3, Well differentiated"
          }, {
            id : "00", name : "Grade 2/3, Moderately differentiated"
          }, {
            id : "00", name : "Grade 3/3, Poorly differentiated"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "No evidence of primary tumor"
          }, {
            id : "60", name : "Carcinoma in situ"
          }, {
            id : "00", name : "Tumor is limited to pancreas"
          }, {
            id : "00", name : "Tumor invades ampulla of Vater or sphincter of Oddi "
          }, {
            id : "00", name : "Tumor invades duodenal wall "
          }, {
            id : "00", name : "Tumor invades peripancreatic soft tissues  "
          }, {
            description : "which",
            inputs_required : [ "" ],
            id : "10", name : "Tumor invades other adjacent organs or structures  "
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "include distance/location of closest proximal/distal/radial/bile duct/uncinate/pancreatic margin",
        id : "00", name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "10", name : "Free, "
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Treatment effect, primary site",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "No prior treatment"
          }, {
            id : "00", name : "Present (score 1-2)"
          }, {
            id : "00", name : "Poor or no response, score 3"
          }, {
            id : "00", name : "Indeterminate"
          }, {
            id : "00", name : "Not applicable"
          }, {
            id : "00", name : "Not known"
          }  ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Indeterminate"
          }, {
            id : "00", name : "Suspicious"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Present, extensive"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Perineural invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Equivocal"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "50", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "50", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "51", name : "0" },{ id : "53", name : "1" },{ id : "53", name : "2" },{ id : "53", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "01", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "00", name : ""
          }, {
            description : "pathologic",
            id : "00", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "00", name : "m"
          }, {
            description : "recurrent",
            id : "00", name : "r"
          }, {
            description : "post-treatment",
            id : "00", name : "y"
          }, {
            id : "00", name : "mp"
          }, {
            id : "00", name : "rp"
          }, {
            id : "00", name : "yp"
          }, {
            id : "00", name : "mrp"
          }, {
            id : "00", name : "myp"
          }, {
            id : "00", name : "ryp"
          }, {
            id : "00", name : "mryp"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "02", name : "T",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "cannot be assessed",
            id : "00", name : "TX"
          }, {
            description : "No tumor",
            id : "00", name : "T0"
          }, {
            description : "Carcinoma in situ including intraductal tumor",
            id : "00", name : "Tis"
          }, {
            description : " <= 0.5 cm ",
            id : "00", name : "T1a"
          }, {
            description : " > 0.5cm AND <= 1cm ",
            id : "00", name : "T1b"
          }, {
            description : " >1 cm AND <=2 cm  ",
            id : "00", name : "T1c"
          }, {
            description : "> 2 cm and <=4cm",
            id : "00", name : "T2"
          }, {
            description : "> 4cm",
            id : "00", name : "T3"
          }, {
            description : "Tumor involves the celiac axis or the superior mesenteric artery and or common hepatic artery ",
            id : "00", name : "T4"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "03", name : "N",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "00", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "00", name : "N0"
          }, {
            description : "1-3 Metastases to regional lymph nodes",
            id : "00", name : "N1"
          }, {
            description : "4 or more Metastases to regional lymph nodes",
            id : "00", name : "N2"
          } ],
          id : "00", name : "Category (pN)"
        }]
        }, {
          id : "04", name : "M",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Distant metastases",
            id : "00", name : "M1"
          }, {
            id : "00", name : "M (not applicable)"
          }, {
            id : "00", name : "distant metastasis not applicable"
          } ],
          id : "00", name : ""
        } ]
       }, {
         description: "adenocarcinoma only",
        id : "00", name : "MSI IHC and Interpretation",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Intact nuclear expression of MMR proteins (MLH1, MSH2, MSH6, PMS2): No evidence of deficient mismatch repair (low probability of MSI-H)"
          },{
            id : "00", name : "Loss of nuclear expression of one or more MMR proteins (MLH1, MSH2, MSH6, PMS2): deficient mismatch repair/ high probability of microsatellite instability-high (MSI-H). The presence of MSI-H/deficient mismatch repair may also be an indication for additional testing for Lynch syndrome and genetic counselling."
          }, {
            id : "00", name : "Pending"
          }, {
            id : "00", name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            id : "10", name : "See case "
          }],
          id : "00", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "00", name : "Penis",
      optional : false,
      organ_group : "Genitourinary",
      properties : [ {
        id : "00", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Incisional biopsy"
          }, {
            id : "00", name : "Excisional biopsy"
          }, {
            id : "00", name : "Partial penectomy"
          }, {
            id : "00", name : "Total penectomy"
          }, {
            id : "00", name : "Circumcision"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Foreskin",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Equivocal"
          } ],
          id : "00", name : ""
        } ]
     
      }, {
        id : "00", name : "Tumor location ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Glans"
          }, {
            id : "00", name : "Foreskin mucosal surface"
          }, {
            id : "00", name : "Foreskin skin surface"
          }, {
            id : "00", name : "Coronal sulcus  "
          }, {
            id : "00", name : "Skin of the shaft"
          }, {
            id : "00", name : "Penile urethra"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "00", name : ""
        } ]
      
      }, {
        id : "00", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Squamous cell carcinoma "
          }, {
            id : "00", name : "Squamous cell carcinoma, pseudohyperplastic"
          }, {
            id : "00", name : "Squamous cell carcinoma, pseudoglandular"
          }, {
            id : "00", name : "Squamous cell carcinoma, verrucous"
          }, {
            id : "00", name : "Squamous cell carcinoma, carcinoma cuniculatum"
          }, {
            id : "00", name : "Squamous cell carcinoma, papillary"
          }, {
            id : "00", name : "Squamous cell carcinoma, verrucous"
          }, {
            id : "00", name : "Squamous cell carcinoma, sarcomatoid"
          }, {
            id : "00", name : "Squamous cell carcinoma, basaloid"
          }, {
            id : "00", name : "Squamous cell carcinoma, papillary-basaloid"
          }, {
            id : "00", name : "Squamous cell carcinoma, warty"
          }, {
            id : "00", name : "Squamous cell carcinoma, warty-basaloid"
          }, {
            id : "00", name : "Squamous cell carcinoma, clear cell"
          }, {
            id : "00", name : "Squamous cell carcinoma, lymphoepithelioma-like"
          }, {
            id : "00", name : "Adenosquamous carcinoma"
          }, {
            id : "00", name : "Paget’s disease"
          }, {
            id : "00", name : "Adnexal carcinoma "
          }, {
            id : "00", name : "Clear cell carcinoma"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Grade 1/3, Well differentiated"
          }, {
            id : "00", name : "Grade 2/3, Moderately differentiated"
          }, {
            id : "00", name : "Grade 3/3, Poorly differentiated"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            
            id : "00", name : "No evidence of primary tumor"
          }, {
          
            id : "60", name : "Carcinoma in situ"
          }, {
           
            id : "00", name : "Noninvasive localized squamous cell carcinoma "
          }, {
          
            id : "00", name : "Tumor invades lamina propria"
          }, {
          
            id : "00", name : "Tumor invades dermis  "
          }, {
          
            id : "00", name : "Tumor involves dartos"
          }, {
           
            id : "620", name : "Tumor invades corpus spongiosum"
          }, {
          
            id : "63", name : "Tumor invades corpus cavernosum"
          }, {
           
            id : "00", name : "Tumor invades tunica albuginea "
          }, {
            
            id : "00", name : "Tumor invades Buck’s fascia "
          }, {
            
            id : "00", name : "Tumor invades penile (distal) urethra"
          }, {
          
            id : "00", name : "Tumor invades regional skin (pubis, inguinal)"
          }, {
            description : "scrotum, prostate, pubic bone",
             inputs_required : [ "" ],
            id : "10", name : "Tumor invades into adjacent structures "
          }, {
            description : "specify",
            inputs_required : [ "" ],
            id : "10", name : "Tumor invades other structures "
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "urethral, periurethral tissues, corpus cavernosum, Bucks fascia, skin, coronal sulcus",
        id : "00", name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Free "
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
   }, {
        id : "00", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Indeterminate"
          }, {
            id : "00", name : "Suspicious"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Present, extensive"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Perineural invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Equivocal"
          } ],
          id : "00", name : ""
        } ]
  
       }, {
        id : "00", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "50", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "50", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "51", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ] 
  
  }, {
        id : "50", name : "Lymph nodes, # inguinal involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ] 
  
  }, {
        id : "50", name : "Positive inguinal lymph node laterality",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Not applicable"
          }, {
            id : "00", name : "Right"
          }, {
            id : "00", name : "Left"
          }, {
            id : "00", name : "Bilateral"
          }, {
            id : "00", name : "Other"
          } ],
          id : "00", name : ""
        } ]
         
      }, {
        id : "50", name : "Extranodal Extension ",
        optional_state : "required",
        "options" : [ {
          group : [ {
            id : "00", name : "Not applicable"
          }, {
            id : "00", name : "None"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Equivocal"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "01", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "00", name : ""
          }, {
            description : "pathologic",
            id : "00", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "00", name : "m"
          }, {
            description : "recurrent",
            id : "00", name : "r"
          }, {
            description : "post-treatment",
            id : "00", name : "y"
          }, {
            id : "00", name : "mp"
          }, {
            id : "00", name : "rp"
          }, {
            id : "00", name : "yp"
          }, {
            id : "00", name : "mrp"
          }, {
            id : "00", name : "myp"
          }, {
            id : "00", name : "ryp"
          }, {
            id : "00", name : "mryp"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "02", name : "T",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "cannot be assessed",
            id : "00", name : "TX"
          }, {
            description : "noninvasive papillary or verrucous",
            id : "00", name : "Ta"
          }, {
            description : "CIS",
            id : "00", name : "Tis"
          }, {
            description : "Noninvasive verrucous carcinoma ",
            id : "00", name : "Ta"
          }, {
            description : "Tumor invades subepithelial connective tissue: Glans: Tumor invades lamina propria, Foreskin: Tumor invades dermis, lamina propria, or dartos fascia, Shaft: Tumor invades connective tissue between epidermis and corpora regardless of location, all without lymph vascular invasion, without perineural invasion, and is not poorly differentiated (ie, grade 3-4)",
            id : "00", name : "T1a"
          }, {
            description : "Tumor invades subepithelial connective tissue:  Glans: Tumor invades lamina propria, Foreskin: Tumor invades dermis, lamina propria, or dartos fascia, Shaft: Tumor invades connective tissue between epidermis and corpora regardless of location, with either lymph vascular invasion, or perineural invasion, or is poorly differentiated",
            id : "00", name : "T1b"
          }, {
            description : "Tumor invades corpus spongiosum",
            id : "00", name : "T2"
          }, {
            description : "Tumor invades corpus cavernosum",
            id : "00", name : "T3"
          }, {
            description : "Tumor invades other adjacent structures (scrotum, prostate, bone)(urethra does not count (still T3)",
            id : "00", name : "T4"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "03", name : "N",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "00", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "00", name : "N0"
          }, {
            description : "Metastasis in a 1-2 unilateral inguinal lymph node, no extranodal extension",
            id : "00", name : "N1"
          }, {
            description : "Metastasis in 3 or more unilateral inguinal lymph nodes or any bilateral inguinal metastases, no extranodal extension",
            id : "00", name : "N2"
          }, {
            description : "Extranodal extension of lymph node metastasis or pelvic lymph node(s) unilateral or bilateral",
            id : "00", name : "N3"
          } ],
          id : "00", name : "Category (pN)"
        }]
        }, {
          id : "04", name : "M",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "metastases",
            id : "00", name : "M1"
          }, {
            id : "00", name : "M (not applicable)"
          }, {
            id : "00", name : "distant metastasis not applicable"
          } ],
          id : "00", name : ""
        } ]
       }, {
        description : "p16, HPV",
        id : "00", name : "Ancillary studies ordered",
       optional_state  : "required", "options" : [ {
          id : "00", name : ""
        } ]  
      } ]
    }, {
      most_common : false,
      id : "00", name : "Perihilar Bile Ducts",
      optional : false,
      organ_group : "Gastrointestinal",
      properties : [  {
        id : "00", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Hilar and hepatic resection"
          }, {
            id : "00", name : "Segmental resection of bile ducts(s)"
          }, {
            id : "00", name : "Choledochal cyst resection "
          }, {
            id : "00", name : "Total hepatectomy "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Right hepatic duct"
          }, {
            id : "00", name : "Left hepatic duct "
          }, {
            id : "00", name : "Junction of right and left hepatic ducts "
          }, {
            id : "00", name : "Cystic duct "
          }, {
            id : "00", name : "Common hepatic duct "
          }, {
            id : "00", name : "Common bile duct "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Adenocarcinoma"
          }, {
            id : "00", name : "Adenocarcinoma, intestinal type"
          }, {
            id : "00", name : "Adenocarcinoma, biliary type"
          }, {
            id : "00", name : "Adenocarcinoma, gastric foveolar type"
          }, {
            id : "00", name : "Intraductal papillary neoplasm with an associated invasive carcinoma"
          }, {
            id : "00", name : "Mucinous cystic neoplasm with an associated invasive carcinoma"
          }, {
            id : "00", name : "Mucinous adenocarcinoma"
          }, {
            id : "00", name : "Clear cell adenocarcinoma"
          }, {
            id : "00", name : "Signet-ring cell carcinoma"
          }, {
            id : "00", name : "Large cell neuroendocrine carcinoma "
          }, {
            id : "00", name : "Small cell neuroendocrine carcinoma"
          }, {
            id : "00", name : "Neuroendocrine carcinoma (poorly differentiated)"
          }, {
            id : "00", name : "Adenosquamous carcinoma"
          }, {
            id : "00", name : "Squamous cell carcinoma"
          }, {
            id : "00", name : "Mixed adenoneuroendocrine carcinoma"
          }, {
            id : "00", name : "Undifferentiated carcinoma"
          }  ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Grade 1/3, well differentiated"
          }, {
            id : "00", name : "Grade 2/3, moderately differentiated"
          }, {
            id : "00", name : "Grade 3/3, poorly differentiated"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "60", name : "Carcinoma in situ "
          }, {
            id : "61", name : "Tumor limited to the bile duct histologically"
          }, {
            id : "70", name : "Tumor invades beyond the wall of the bile duct into surrounding connective tissue "
          }, {
            id : "71", name : "Tumor invades the adjacent liver parenchyma"
          }, {
            id : "00", name : "Invades the gallbladder"
          }, {
            id : "00", name : "Tumor invades the unilateral branches of the portal vein (right or left) "
          }, {
            id : "00", name : "Tumor invades the unilateral branches of the hepatic artery (right or left) "
          }, {
            id : "00", name : "Tumor invades main portal vein or its branches bilaterally "
          }, {
            id : "00", name : "Tumor invades common hepatic artery "
          }, {
            id : "00", name : "Tumor invades second-order biliary radicals, unilateral"
          }, {
            id : "00", name : "Tumor invades second-order biliary radicals, bilaterall"
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "include distance/location of closest proximal/distal/radial/bile duct/hepatic margin",
        id : "00", name : "Margins, invasive tumor",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "10", name : "Free, "
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          }],
          id : "00", name : ""
        } ]
      }, {
        description : "include distance/location of closest proximal/distal bile duct margin",
        id : "00", name : "Margins, dysplasia/CIS",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "10", name : "Free, "
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Indeterminate"
          }, {
            id : "00", name : "Suspicious"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Present, extensive"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Perineural invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Equivocal"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "50", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "50", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "51", name : "0" },{ id : "53", name : "1" },{ id : "53", name : "2" },{ id : "53", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "01", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "00", name : ""
          }, {
            description : "pathologic",
            id : "00", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "00", name : "m"
          }, {
            description : "recurrent",
            id : "00", name : "r"
          }, {
            description : "post-treatment",
            id : "00", name : "y"
          }, {
            id : "00", name : "mp"
          }, {
            id : "00", name : "rp"
          }, {
            id : "00", name : "yp"
          }, {
            id : "00", name : "mrp"
          }, {
            id : "00", name : "myp"
          }, {
            id : "00", name : "ryp"
          }, {
            id : "00", name : "mryp"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "02", name : "T",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "cannot be assessed",
            id : "00", name : "TX"
          }, {
            description : "Carcinoma in situ",
            id : "00", name : "Tis"
          }, {
            description : "Tumor limited to the bile duct, with extension up to the muscle layer or fibrous tissue ",
            id : "00", name : "T1"
          }, {
            description : "Tumor invades beyond the wall of the bile duct to surrounding adipose tissue ",
            id : "00", name : "T2a"
          }, {
            description : "Tumor invades adjacent hepatic parenchyma ",
            id : "00", name : "T2b"
          }, {
            description : "Tumor invades unilateral branches of the portal vein or hepatic artery ",
            id : "00", name : "T3"
          }, {
            description : "Tumor invades main portal vein or its branches bilaterally; or the common hepatic artery; or the second-order biliary radicals bilaterally; or unilateral second-order biliary radicals with contralateral portal vein or hepatic artery involvement",
            id : "00", name : "T4"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "03", name : "N",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "00", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "00", name : "N0"
          }, {
            description : "1-3 positive lymph nodes ",
            id : "00", name : "N1"
          }, {
            description : "4 or more positive lymph nodes",
            id : "00", name : "N2"
          } ],
          id : "00", name : "Category (pN)"
        }]
        }, {
          id : "04", name : "M",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Distant metastases",
            id : "00", name : "M1"
          }, {
            id : "00", name : "M (not applicable)"
          }, {
            id : "00", name : "distant metastasis not applicable"
          } ],
          id : "00", name : ""
        } ]
        }, {
          description: "adenocarcinoma only",
        id : "00", name : "MSI IHC and Interpretation",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Intact nuclear expression of MMR proteins (MLH1, MSH2, MSH6, PMS2): No evidence of deficient mismatch repair (low probability of MSI-H)"
          },{
            id : "00", name : "Loss of nuclear expression of one or more MMR proteins (MLH1, MSH2, MSH6, PMS2): deficient mismatch repair/ high probability of microsatellite instability-high (MSI-H). The presence of MSI-H/deficient mismatch repair may also be an indication for additional testing for Lynch syndrome and genetic counselling."
          }, {
            id : "00", name : "Pending"
          }, {
            id : "00", name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            id : "10", name : "See case "
          }],
          id : "00", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "00", name : "Oropharynx, Nasopharynx, and Hypopharynx, (p16-)",
      optional : false,
      organ_group : "Head and Neck",
      properties : [  {
        id : "00", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Excisional biopsy"
          }, {
            id : "00", name : "Tonsillectomy "
          }, {
            id : "00", name : "Laryngopharyngectomy"
          }, {
            id : "00", name : "Tonsillectomy and neck (lymph node) dissection "
          }, {
            id : "00", name : "Laryngopharyngectomy and neck (lymph node) dissection "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Right oropharynx"
          }, {
            id : "00", name : "Right nasopharynx"
          }, {
            id : "00", name : "Right hypopharynx"
          }, {
            id : "00", name : "Left oropharynx"
          }, {
            id : "00", name : "Left nasopharynx"
          }, {
            id : "00", name : "Left hypopharynx"
          }, {
            id : "00", name : "Bilateral oropharynx"
          }, {
            id : "00", name : "Bilateral nasopharynx"
          }, {
            id : "00", name : "Bilateral hypopharynx"
          }, {
            id : "00", name : "Midline oropharynx"
          }, {
            id : "00", name : "Midline nasopharynx"
          }, {
            id : "00", name : "Midline hypopharynx"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor focality",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Single focus"
          }, {
            id : "00", name : "Multiple foci"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Squamous cell carcinoma, keratinizing"
          }, {
            id : "00", name : "Squamous cell carcinoma, non-keratinizing"
          }, {
            id : "00", name : "Acantholytic squamous cell carcinoma"
          }, {
            id : "00", name : "Adenosquamous carcinoma"
          }, {
            id : "00", name : "Basaloid squamous cell carcinoma"
          }, {
            id : "00", name : "Papillary squamous cell carcinoma"
          }, {
            id : "00", name : "Spindle cell squamous carcinoma"
          }, {
            id : "00", name : "Verrucous carcinoma"
          }, {
            id : "00", name : "Lymphoepithelial carcinoma (non-nasopharyngeal)"
          }, {
            id : "00", name : "Nasopharyngeal papillary adenocarcinoma"
          }, {
            id : "00", name : "Adenocarcinoma"
          }, {
            id : "00", name : "Basal cell adenocarcinoma"
          }, {
            id : "00", name : "Carcinoma ex pleomorphic adenoma (malignant mixed tumor)"
          }, {
            id : "00", name : "Clear cell adenocarcinoma"
          }, {
            id : "00", name : "Cystadenocarcinoma"
          }, {
            id : "00", name : "Epithelial-myoepithelial carcinoma"
          }, {
            id : "00", name : "Mucoepidermoid carcinoma"
          }, {
            id : "00", name : "Mucinous adenocarcinoma (colloid carcinoma)"
          }, {
            id : "00", name : "Myoepithelial carcinoma (malignant myoepithelioma)"
          }, {
            id : "00", name : "Oncocytic carcinoma"
          }, {
            id : "00", name : "Polymorphous low-grade adenocarcinoma"
          }, {
            id : "00", name : "Salivary duct carcinoma"
          }, {
            id : "00", name : "Typical carcinoid tumor (well differentiated neuroendocrine carcinoma)"
          }, {
            id : "00", name : "Atypical carcinoid tumor (moderately differentiated neuroendocrine carcinoma)"
          }, {
            id : "00", name : "Small cell carcinoma (poorly differentiated neuroendocrine carcinoma)"
          }, {
            id : "00", name : "Combined (or composite) small cell carcinoma, neuroendocrine type"
          }, {
            id : "00", name : "Mucosal malignant melanoma"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Grade 1/3, Well differentiated"
          }, {
            id : "00", name : "Grade 2/3, Moderately differentiated"
          }, {
            id : "00", name : "Grade 3/3, Poorly differentiated"
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "include distance/location of closest margin",
        id : "00", name : "Margins, invasive tumor",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "10", name : "Free, "
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "include distance/location of closest margin",
        id : "00", name : "Margins, dysplasia/CIS",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "10", name : "Free, "
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Indeterminate"
          }, {
            id : "00", name : "Suspicious"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Present, extensive"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Perineural invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Equivocal"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "50", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "50", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "51", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "50", name : "Positive node laterality",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Not applicable"
          }, {
            id : "00", name : "Ipsilateral, including midline"
          }, {
            id : "00", name : "Contralateral"
          }, {
            id : "00", name : "Bilateral"
          }, {
            id : "00", name : "Indeterminate"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "50", name : "Size of largest metastasis",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "50", name : "Extranodal Extension ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Not applicable"
          }, {
            id : "00", name : "None"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Equivocal"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "01", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "00", name : ""
          }, {
            description : "pathologic",
            id : "00", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "00", name : "m"
          }, {
            description : "recurrent",
            id : "00", name : "r"
          }, {
            description : "post-treatment",
            id : "00", name : "y"
          }, {
            id : "00", name : "mp"
          }, {
            id : "00", name : "rp"
          }, {
            id : "00", name : "yp"
          }, {
            id : "00", name : "mrp"
          }, {
            id : "00", name : "myp"
          }, {
            id : "00", name : "ryp"
          }, {
            id : "00", name : "mryp"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "02", name : "T",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "cannot be assessed",
            id : "00", name : "TX"
          }, {
            description : "OROPHARYNX CARCINOMA, Tumor 2 cm or less in greatest dimension ",
            id : "00", name : "T1"
          }, {
            description : "OROPHARYNX CARCINOMA, Tumor more than 2 cm but not more than 4 cm in greatest dimension without fixation of hemilarynx ",
            id : "00", name : "T2"
          }, {
            description : "OROPHARYNX CARCINOMA, Tumor more than 4 cm in greatest dimension or with fixation of hemilarynx or extension to lingual surface of epiglottis",
            id : "00", name : "T3"
          }, {
            description : "OROPHARYNX CARCINOMA, Moderately advanced local disease. Tumor invades larynx, deep/extrinsic muscle of tongue, medial pterygoid muscles, hard palate, or mandible",
            id : "00", name : "T4a"
          }, {
            description : "OROPHARYNX CARCINOMA, Very advanced local disease. Tumor invades lateral pterygoid muscle, pterygoid plates, lateral nasopharynx, or skull base, or encases carotid artery",
            id : "00", name : "T4b"
          }, {
            description : " NASOPHARYNX Tumor confined to nasopharynx, or extension to oropharynx and/or nasal cavity without parapharyngeal involvement ",
            id : "00", name : "T1"
          }, {
            description : "NASOPHARYNX Tumor with extension to parapharyngeal space, and/or adjacent soft tissue involvement (medial pterygoid, lateral pterygoid, prevertebral muscles) ",
            id : "00", name : "T2"
          }, {
            description : "NASOPHARYNX Tumor with infiltration of bony structures at skull base, cervical vertebra, pterygoid structures, and/or paranasal sinuses ",
            id : "00", name : "T3"
          }, {
            description : "NASOPHARYNX Tumor with intracranial extension, involvement of cranial nerves, hypopharynx, orbit, parotid gland, and/or extensive soft tissue infiltration beyond the lateral surface of the lateral pterygoid muscle",
            id : "00", name : "T4"
          }, {
            description : "HYPOPHARYNX CARCINOMA, Tumor limited to one subsite of hypopharynx and/or 2 cm or less in greatest dimension ",
            id : "00", name : "T1"
          }, {
            description : "HYPOPHARYNX CARCINOMA, Tumor invades more than one subsite of hypopharynx or an adjacent site, or measures more than 2 cm but not more than 4 cm in greatest dimension without fixation of hemilarynx",
            id : "00", name : "T2"
          }, {
            description : "HYPOPHARYNX CARCINOMA, Tumor measures more than 4 cm in greatest dimension or with fixation of hemilarynx or extension to esophagus",
            id : "00", name : "T3"
          }, {
            description : "HYPOPHARYNX CARCINOMA, Moderately advanced local disease. Tumor invades thyroid/cricoid cartilage, hyoid bone, thyroid gland, or central compartment soft tissue",
            id : "00", name : "T4a"
          }, {
            description : "HYPOPHARYNX CARCINOMA, Very advanced local disease. Tumor invades prevertebral fascia, encases carotid artery, or involves mediastinal structures",
            id : "00", name : "T4b"
          }, {
            description : "MELANOMA, Mucosal disease",
            id : "00", name : "T3"
          }, {
            description : "MELANOMA, Moderately advanced disease. Tumor involving deep soft tissue, cartilage, bone, or overlying skin. ",
            id : "00", name : "T4a"
          }, {
            description : "MELANOMA, Very advanced disease. Tumor involving brain, dura, skull base, lower  cranial nerves (IX, X, XI, XII), masticator space, carotid artery, prevertebral  space, or mediastinal structures",
            id : "00", name : "T4b"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "03", name : "N",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "00", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "00", name : "N0"
          }, {
            description : "ORO- AND HYPOPHARYNX Metastasis in a single ipsilateral lymph node, 3 cm or less in greatest dimensiona and no extranodal extension",
            id : "00", name : "N1"
          }, {
            description : "ORO- AND HYPOPHARYNX( Metastasis in a single ipsilateral or contralateral  lymph node <= 3 cm AND extranodal extension) OR (single ipsilateral lymph node >3 cm AND not more than 6 cm in greatest dimension AND no extranodal extension) ",
            id : "00", name : "N2a"
          }, {
            description : "ORO- AND HYPOPHARYNX Metastasis in multiple ipsilateral lymph nodes, none more than 6 cm in greatest dimension AND no extranodal extension",
            id : "00", name : "N2b"
          }, {
            description : "ORO- AND HYPOPHARYNX Metastasis in bilateral or contralateral lymph nodes, none more than 6 cm in greatest dimension AND no extranodal extension",
            id : "00", name : "N2c"
          }, {
            description : "ORO- AND HYPOPHARYNX Metastasis in a lymph node more than 6 cm in greatest dimension adn no extranodal extension",
            id : "00", name : "N3a"
          }, {
            description : "ORO- AND HYPOPHARYNX (Metastasis in a lymph noe >3 cm in greatest dimension AND extranodal extension) OR (multiple nodes AND extranodal extension) OR (single contralateral node <=3cm AND extranodal extension)",
            id : "00", name : "N3b"
          }, {
            description : " NASOPHARYNX Metastasis in one or more ipsilateral lymph node, 6 cm or less in greatest dimension",
            id : "00", name : "N1"
          }, {
            description : " NASOPHARYNX Metastasis in contralateral or bilateral lymph node,  6 cm or less in greatest dimension ",
            id : "00", name : "N2"
          }, {
            description : " NASOPHARYNX Metastasis in a lymph node more than 6 cm in greatest dimension",
            id : "00", name : "N3"
          }, {
            description : "MELANOMA, regional metastases",
            id : "00", name : "N1"
          } ],
          id : "00", name : "Category (pN)"
        }]
        }, {
          id : "04", name : "M",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "metastases",
            id : "00", name : "M1"
          }, {
            id : "00", name : "M (not applicable)"
          }, {
            id : "00", name : "distant metastasis not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "p16 Immunohistochemistry ",
       optional_state  : "required", "options" : [ {
          group : [  {
            id : "00", name : "Negative "
          }, {
            id : "00", name : "Equivocal"
          }, {
            id : "00", name : "Not applicable "
          }, {
            id : "00", name : "Not performed"
          }, {
            id : "00", name : "Pending"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "HPV ISH ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Positive "
          }, {
            id : "00", name : "Negative "
          }, {
            id : "00", name : "Equivocal"
          }, {
            id : "00", name : "Not applicable "
          }, {
            id : "00", name : "Not performed"
          }, {
            id : "00", name : "Pending"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "HPV PCR ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Positive "
          }, {
            id : "00", name : "Negative "
          }, {
            id : "00", name : "Equivocal"
          }, {
            id : "00", name : "Not applicable "
          }, {
            id : "00", name : "Not performed"
          }, {
            id : "00", name : "Pending"
          } ],
          id : "00", name : ""
        } ]
      } ]
  }, {
      most_common : false,
      id : "00", name : "Oropharynx and Nasopharynx, p16+ (HPV mediated)",
      optional : false,
      organ_group : "Head and Neck",
      properties : [  {
        id : "00", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Excisional biopsy"
          }, {
            id : "00", name : "Tonsillectomy "
          }, {
            id : "00", name : "Laryngopharyngectomy"
          }, {
            id : "00", name : "Tonsillectomy and neck (lymph node) dissection "
          }, {
            id : "00", name : "Laryngopharyngectomy and neck (lymph node) dissection "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Right oropharynx"
          }, {
            id : "00", name : "Right nasopharynx"
          }, {
            id : "00", name : "Right hypopharynx"
          }, {
            id : "00", name : "Left oropharynx"
          }, {
            id : "00", name : "Left nasopharynx"
          }, {
            id : "00", name : "Left hypopharynx"
          }, {
            id : "00", name : "Bilateral oropharynx"
          }, {
            id : "00", name : "Bilateral nasopharynx"
          }, {
            id : "00", name : "Bilateral hypopharynx"
          }, {
            id : "00", name : "Midline oropharynx"
          }, {
            id : "00", name : "Midline nasopharynx"
          }, {
            id : "00", name : "Midline hypopharynx"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor focality",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Single focus"
          }, {
            id : "00", name : "Multiple foci"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Squamous cell carcinoma"
          }, {
            id : "00", name : "Small cell neuroendocrine carcinoma"
          }, {
            id : "00", name : "Large cell neuroendocrine carcinoma"
          } ],
          id : "00", name : ""
        } ]
    
      }, {
        description : "include distance/location of closest margin",
        id : "00", name : "Margins, invasive tumor",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "10", name : "Free, "
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "include distance/location of closest margin",
        id : "00", name : "Margins, dysplasia/CIS",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "10", name : "Free, "
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Indeterminate"
          }, {
            id : "00", name : "Suspicious"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Present, extensive"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Perineural invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Equivocal"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "50", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "50", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "51", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "50", name : "Positive node laterality",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Not applicable"
          }, {
            id : "00", name : "Ipsilateral, including midline"
          }, {
            id : "00", name : "Contralateral"
          }, {
            id : "00", name : "Bilateral"
          }, {
            id : "00", name : "Indeterminate"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "50", name : "Size of largest metastasis",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "50", name : "Extranodal Extension ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Not applicable"
          }, {
            id : "00", name : "None"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Equivocal"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "01", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "00", name : ""
          }, {
            description : "pathologic",
            id : "00", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "00", name : "m"
          }, {
            description : "recurrent",
            id : "00", name : "r"
          }, {
            description : "post-treatment",
            id : "00", name : "y"
          }, {
            id : "00", name : "mp"
          }, {
            id : "00", name : "rp"
          }, {
            id : "00", name : "yp"
          }, {
            id : "00", name : "mrp"
          }, {
            id : "00", name : "myp"
          }, {
            id : "00", name : "ryp"
          }, {
            id : "00", name : "mryp"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "02", name : "T",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "cannot be assessed",
            id : "00", name : "TX"
          }, {
            description : " NASOPHARYNX Tumor confined to nasopharynx, or extension to oropharynx and/or nasal cavity without parapharyngeal involvement ",
            id : "00", name : "T1"
          }, {
            description : "NASOPHARYNX Tumor with extension to parapharyngeal space, and/or adjacent soft tissue involvement (medial pterygoid, lateral pterygoid, prevertebral muscles) ",
            id : "00", name : "T2"
          }, {
            description : "NASOPHARYNX Tumor with infiltration of bony structures at skull base, cervical vertebra, pterygoid structures, and/or paranasal sinuses ",
            id : "00", name : "T3"
          }, {
            description : "NASOPHARYNX Tumor with intracranial extension, involvement of cranial nerves, hypopharynx, orbit, parotid gland, and/or extensive soft tissue infiltration beyond the lateral surface of the lateral pterygoid muscle",
            id : "00", name : "T4"
          }, {
            description : " OROPHARYNX Tumor 2 cm or less in greatest dimension ",
            id : "00", name : "T1"
          }, {
            description : "OROPHARYNX Tumor more than 2 cm but not more than 4 cm in greatest dimension ",
            id : "00", name : "T2"
          }, {
            description : "OROPHARYNX Tumor more than 4 cm in greatest dimension or extension to lingual surface of epiglottis",
            id : "00", name : "T3"
          }, {
            description : "OROPHARYNX Moderately advanced local disease. Tumor invades larynx, deep/extrinsic muscle of tongue, medial pterygoid muscles, hard palate, or mandible",
            id : "00", name : "T4"
          }],
          id : "00", name : ""
        }]
        }, {
          id : "03", name : "N",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "00", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "00", name : "N0"
          }, {
            description : " NASOPHARYNX Metastasis in one or more ipsilateral lymph node, 6 cm or less in greatest dimension",
            id : "00", name : "N1"
          }, {
            description : " NASOPHARYNX Metastasis in contralateral or bilateral lymph node,  6 cm or less in greatest dimension ",
            id : "00", name : "N2"
          }, {
            description : " NASOPHARYNX Metastasis in a lymph node more than 6 cm in greatest dimension",
            id : "00", name : "N3"
          }, {
            description : " OROPHARYNX Metastasis in 4 or fewer lymph nodes",
            id : "00", name : "N1"
          }, {
            description : " OROPHARYNX Metastasis in more than 4 lymph nodes ",
            id : "00", name : "N2"
          }],
          id : "00", name : "Category (pN)"
        }]
        }, {
          id : "04", name : "M",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "metastases",
            id : "00", name : "M1"
          }, {
            id : "00", name : "M (not applicable)"
          }, {
            id : "00", name : "distant metastasis not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "p16 Immunohistochemistry ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Positive "
          }],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "HPV ISH ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Positive "
          }, {
            id : "00", name : "Negative "
          }, {
            id : "00", name : "Equivocal"
          }, {
            id : "00", name : "Not applicable "
          }, {
            id : "00", name : "Not performed"
          }, {
            id : "00", name : "Pending"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "HPV PCR ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Positive "
          }, {
            id : "00", name : "Negative "
          }, {
            id : "00", name : "Equivocal"
          }, {
            id : "00", name : "Not applicable "
          }, {
            id : "00", name : "Not performed"
          }, {
            id : "00", name : "Pending"
          } ],
          id : "00", name : ""
        } ]
      } ]
  
    }, {
      most_common : true,
      id : "00", name : "Prostate, prostatectomy",
      optional : false,
      organ_group : "Genitourinary",
      properties : [ {
        id : "00", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Radical prostatectomy"
          }, {
            id : "00", name : "Cystoprostatectomy"
          } ],
          id : "00", name : ""
        } ]
     
      }, {
        id : "42", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Adenocarcinoma"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Gleason 3+3 = 6 (Group 1)"
          },{
            id : "00", name : "Gleason 3+4 = 7 (Group 2)"
          },{
            id : "00", name : "Gleason 4+3 = 7 (Group 3)"
          }, {
            id : "00", name : "Gleason 4+4 = 8 (Group 4)"
          }, {
            id : "00", name : "Gleason 3+5 = 8 (Group 4)"
          }, {
            id : "00", name : "Gleason 5+3 = 8 (Group 4)"
          }, {
            id : "00", name : "Gleason 4+5 = 9 (Group 5)"
          }, {
            id : "00", name : "Gleason 5+4 = 9 (Group 5)"
          }, {
            id : "00", name : "Gleason 5+5 = 10 (Group 5)"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "3+4 and 4+3 only",
        id : "00", name : "Percent Pattern 4",
       optional_state  : "required", "options" : [ {
          group : [  {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Gleason tertiary pattern",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Grade 3"
          }, {
            id : "00", name : "Grade 4"
          }, {
            id : "00", name : "Grade 5"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Extraprostatic extension",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            description : "less than 1 high-power field in 1 or 2 sections,location",
            inputs_required : [ "" ],
            id : "10", name : "Present, focal"
          }, {
            description : "more than 1 high-power field in 1 or 2 sections,location",
            inputs_required : [ "" ],
            id : "10", name : "Present, nonfocal"
          }, {
            id : "00", name : "Equivocal"
          } ],
          id : "00", name : ""
        } ]
        }, {
           description : "involves thick muscle bundles that do not have normal prostate glands in them, does not need to be + margin",
        id : "00", name : "Urinary bladder neck invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Equivocal"
          } ],
          id : "00", name : ""
        } ]  
      }, {
        id : "00", name : "Seminal vesicle invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Equivocal"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Free "
          }, {
            description : "< 3mm, location",
            inputs_required : [ "" ],
            id : "10", name : "Positive, focal"
          }, {
            description : ">= 3mm, location",
            inputs_required : [ "" ],
            id : "10", name : "Positive, nonfocal"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Treatment effect, primary site",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Not applicable"
          }, {
            id : "00", name : "Not known"
          }  ],
          id : "00", name : ""
        } ]
     
      }, {
        id : "00", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "50", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "50", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "51", name : "0" },{ id : "53", name : "1" },{ id : "53", name : "2" },{ id : "53", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
    
        
      }, {
        id : "01", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "00", name : ""
          }, {
            description : "pathologic",
            id : "00", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "00", name : "m"
          }, {
            description : "recurrent",
            id : "00", name : "r"
          }, {
            description : "post-treatment",
            id : "00", name : "y"
          }, {
            id : "00", name : "mp"
          }, {
            id : "00", name : "rp"
          }, {
            id : "00", name : "yp"
          }, {
            id : "00", name : "mrp"
          }, {
            id : "00", name : "myp"
          }, {
            id : "00", name : "ryp"
          }, {
            id : "00", name : "mryp"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "02", name : "T",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "cannot be assessed",
            id : "00", name : "TX"
          }, {
            description : "organ limited",
            id : "00", name : "T2"
          }, {
            description : "Extraprostatic extension or invasion of bladder neck",
            id : "00", name : "T3a"
          }, {
            description : "Seminal vesicle invasion",
            id : "00", name : "T3b"
          }, {
            description : "Invades rectum or pelvis",
            id : "00", name : "T4"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "03", name : "N",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "00", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "00", name : "N0"
          }, {
            description : "Regional lymph nodes involved",
            id : "00", name : "N1"
          } ],
          id : "00", name : "Category (pN)"
        }]
        }, {
          id : "04", name : "M",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "metastases to non regional nodes",
            id : "00", name : "M1a"
          }, {
              description : "metastases to bone",
            id : "00", name : "M1b"
          }, {
              description : "metastases to other sites",
            id : "00", name : "M1c"
          }, {
            id : "00", name : "M (not applicable)"
          }, {
            id : "00", name : "distant metastasis not applicable"
          } ],
          id : "00", name : ""
        } ]
        }, {
         description : "",
        id : "00", name : "Additional findings",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "High Grade PIN"
          }, {
            id : "00", name : "Lymphatic vascular invasion"
          }, {
            id : "00", name : "Lymphatic vascular invasion and High grade PIN"
          } ],
          id : "00", name : ""
        } ]  
      }, {
        description : "Add billing code 3267F",
        id : "43", name : "ICD10",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "C61"
          } ],
          id : "00", name : ""
        } ]
      } ]
    }, {
      biopsy_type : "Malignant",
      most_common : false,
      id : "00", name : "Prostate biopsy",
      optional : true,
      organ_group : "Genitourinary",
       properties : [ {
        id : "00", name : "Part",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : false,
          group : [{
        description : "Single specimen, no letter/part",
            id : "00", name : ""
          }, {
            id : "00", name : "A."
          }, {
            id : "00", name : "B."
          }, {
            id : "00", name : "C."
          }, {
            id : "00", name : "D."
          }, {
            id : "00", name : "E."
          }, {
            id : "00", name : "F."
          }, {
            id : "00", name : "G."
          }, {
            id : "00", name : "H."
          }, {
            id : "00", name : "I."
          }, {
            id : "00", name : "J."
          }, {
            id : "00", name : "K."
          }, {
            id : "00", name : "L."
          }, {
            id : "00", name : "M."
          }, {
            id : "00", name : "O."
          }, {
            id : "00", name : "P."
          }, {
            id : "00", name : "Q."
          }, {
            id : "00", name : "R."
          }, {
            id : "00", name : "S."
          }, {
            id : "00", name : "T."
          }, {
            id : "00", name : "U."
          } ],
          id : "00", name : ""
        } ]
      }, {
         id : "00", name : "Location",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : false,
          group : [ {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "right"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "left"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Procedure",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : false,
          group : [ {
            id : "00", name : "core needle biopsy"
          }, {
            id : "00", name : "MRI guided core needle biopsy"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Diagnosis/Type",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : false,
          group : [ {
            id : "00", name : "Prostatic adenocarcinoma"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Gleason grade",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : false,
          group : [ {
            id : "00", name : "3 + 3 = 6 (Group 1)"
          }, {
            id : "00", name : "3 + 4 = 7 (Group 2)"
          }, {
            id : "00", name : "4 + 3 = 7 (Group 3)"
          }, {
            id : "00", name : "4 + 4 = 8 (Group 4)"
          }, {
            id : "00", name : "4 + 5 = 9 (Group 5)"
          }, {
            id : "00", name : "5 + 4 = 9 (Group 5)"
          }, {
            id : "00", name : "5 + 5 = 10 (Group 5)"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
         
        id : "00", name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            inputs_required : [ [" 1 of 1 core ", "1 of 2 cores ", "2 of 2 cores", "1 of 3 cores", "2 of 3 cores", "3 of 3 cores", "Involving multiple cores"], " &nbsp; % of tissue" ],
            id : "10", name : ""
          } ],
          id : "00", name : ""
        } ]
      }, {
         description : "MULTI-SELECT",
        id : "00", name : "Additional findings",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Gleason pattern 5 is also present"
          }, {
            id : "00", name : "Gleason pattern 4 is also present"
          }, {
            id : "00", name : "Gleason pattern 3 is also present"
          }, {
            id : "00", name : "Perineural invasion is present"
          }, {
            id : "00", name : "Seminal vesicle invasion is present"
          }, {
            id : "00", name : "Periprostatic fat invasion is present"
          }, {
            id : "00", name : "Gleason pattern 5 and perineural invasion are present"
          }, {
            id : "00", name : "Gleason pattern 4 and perineural invasion are present"
          }, {
            id : "00", name : "Gleason pattern 3 and perineural invasion are present"
          } ],
          id : "00", name : ""
        } ]
      } ]
    }, {
      biopsy_type : "Other",
      most_common : false,
      id : "00", name : "Prostate biopsy",
      optional : true,
      organ_group : "Genitourinary",
      properties : [ {
        id : "00", name : "Location",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "right"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "left"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Procedure",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            id : "00", name : "core needle biopsy"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Diagnosis/Type",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            id : "00", name : "Atypical glands suspicious for carcinoma"
          }, {
            id : "00", name : "High grade prostatic intraepithelial neoplasia (HGPIN)"
          }, {
            id : "00", name : "Atypical glands suspicious for carcinoma with adjacent high grade prostatic intraepithelial neoplasia (HGPIN)"
          }, {
            id : "00", name : "Atypical glands, favor benign"
          }, {
            id : "00", name : "Benign prostate tissue"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Total # of cores",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "immunohistochemistry",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            id : "00", name : "PIN4 supports the above diagnosis"
          }, {
            id : "00", name : "PIN4/PSA support the above diagnosis"
          }, {
            id : "00", name : "PIN4/34BE12 support the above diagnosis"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "00", name : "Prostate, TURP",
      optional : true,
      organ_group : "Genitourinary",
      properties : [ {
        id : "00", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Transurethral prostatic resection"
          } ,{
          id : "00", name : "Enucleation"
        } ], 
          id : "00", name : ""
        } ]
      
      }, {
        id : "00", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Adenocarcinoma"
          } ],
          id : "00", name : ""
        } ]
      },{
        id : "00", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Gleason 3+3 = 6 (Group 1)"
          },{
            id : "00", name : "Gleason 3+4 = 7 (Group 2)"
          },{
            id : "00", name : "Gleason 4+3 = 7 (Group 3)"
          }, {
            id : "00", name : "Gleason 4+4 = 8 (Group 4)"
          }, {
            id : "00", name : "Gleason 3+5 = 8 (Group 4)"
          }, {
            id : "00", name : "Gleason 5+3 = 8 (Group 4)"
          }, {
            id : "00", name : "Gleason 4+5 = 9 (Group 5)"
          }, {
            id : "00", name : "Gleason 5+4 = 9 (Group 5)"
          }, {
            id : "00", name : "Gleason 5+5 = 10 (Group 5)"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "3+4 and 4+3 only",
        id : "00", name : "Percent Pattern 4",
       optional_state  : "required", "options" : [ {
          group : [  {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Gleason tertiary pattern",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Grade 3"
          }, {
            id : "00", name : "Grade 4"
          }, {
            id : "00", name : "Grade 5"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      },  {
        id : "00", name : "Percent of tissue invovled",
       optional_state  : "required", "options" : [ {
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Periprostatic fat invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Equivocal"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Seminal vesicle invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Equivocal"
          } ],
          id : "00", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "00", name : "Retinoblastoma",
      optional : false,
      organ_group : "Ophthalmic",
      properties : [ {
        id : "00", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Right enucleation"
          }, {
            id : "00", name : "Right partial exenteration"
          }, {
            id : "00", name : "Right complete exenteration"
          }, {
            id : "00", name : "Left enucleation"
          }, {
            id : "00", name : "Left partial exenteration"
          }, {
            id : "00", name : "Left complete exenteration"
          }  ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Superotemporal quadrant of globe"
          }, {
            id : "00", name : "Superonasal quadrant of globe"
          }, {
            id : "00", name : "Inferotemporal quadrant of globe"
          }, {
            id : "00", name : "Inferonasal quadrant of globe"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor size after sectioning",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Equivocal"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor location after sectioning",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Superotemporal"
          }, {
            id : "00", name : "Superonasal"
          }, {
            id : "00", name : "Inferotemporal"
          }, {
            id : "00", name : "Inferonasal"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor Involvement of Other Ocular Structures ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Cornea"
          }, {
            id : "00", name : "Anterior chamber"
          }, {
            id : "00", name : "Iris"
          }, {
            id : "00", name : "Angle"
          }, {
            id : "00", name : "Lens"
          }, {
            id : "00", name : "Ciliary body"
          }, {
            id : "00", name : "Vitreous "
          }, {
            id : "00", name : "Retinal detachment"
          }, {
            id : "00", name : "Optic disc"
          }, {
            id : "00", name : "Choroid, minimal (solid tumor nest less than 3 mm in maximum diameter [width or thickness])"
          }, {
            id : "00", name : "Choroid, massive (solid tumor nest 3 mm or more in maximum diameter [width or thickness]) "
          }, {
            id : "00", name : "Sclera"
          }, {
            id : "00", name : "Vortex vein"
          }, {
            id : "00", name : "Orbit"
          }, {
            id : "00", name : "Equivocal"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Growth Pattern ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Endophytic "
          }, {
            id : "00", name : "Exophytic"
          }, {
            id : "00", name : "Combined endophytic/exophytic"
          }, {
            id : "00", name : "Diffuse"
          }, {
            id : "00", name : "Anterior diffuse"
          }, {
            id : "00", name : "Equivocal"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Extent of Optic Nerve Invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Anterior to lamina cribrosa"
          }, {
            id : "00", name : "At lamina cribrosa"
          }, {
            id : "00", name : "Posterior to lamina cribrosa but not to end of nerve"
          }, {
            id : "00", name : "To cut end of optic nerve"
          }, {
            id : "00", name : "Equivocal"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "Tumor with areas of retinocytoma (fleurettes or neuronal differentiation)",
            id : "00", name : "Grade 1/4, well differentiated"
          }, {
            description : "Tumor with many rosettes (Flexner-Wintersteiner or Homer Wright)",
            id : "00", name : "Grade 2/4, moderately differentiated"
          }, {
            description : "Tumor with occasional rosettes (Flexner-Wintersteiner or Homer Wright)",
            id : "00", name : "Grade 3/4, poorly differentiated"
          }, {
            description : "Tumor with poorly differentiated cells without rosettes and/or with extensive areas (more than half of tumor) of anaplasia",
            id : "00", name : "Grade 4/4, undifferentiated"
          }, {
            id : "00", name : "Equivocal"
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "include distance/location of closest margin",
        id : "00", name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            id : "00", name : "Free, "
          }, {
            description : "location, including optic nerve and extrascleral extension",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "50", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "50", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "51", name : "0" },{ id : "53", name : "1" },{ id : "53", name : "2" },{ id : "53", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
    
        
      }, {
        id : "01", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "00", name : ""
          }, {
            description : "pathologic",
            id : "00", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "00", name : "m"
          }, {
            description : "recurrent",
            id : "00", name : "r"
          }, {
            description : "post-treatment",
            id : "00", name : "y"
          }, {
            id : "00", name : "mp"
          }, {
            id : "00", name : "rp"
          }, {
            id : "00", name : "yp"
          }, {
            id : "00", name : "mrp"
          }, {
            id : "00", name : "myp"
          }, {
            id : "00", name : "ryp"
          }, {
            id : "00", name : "mryp"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "02", name : "T",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "cannot be assessed",
            id : "00", name : "TX"
          }, {
            description : "Intraocular tumor without any local invasion, focal choroidal invasion, or pre- or intralaminar involvement of the optic nerve head",
            id : "00", name : "T1"
          }, {
            description : "concomitant focal choroidal invasion and pre- or intralaminar involvement of the optic nerve head",
            id : "00", name : "T2a"
          }, {
            description : "Tumor invasion of stroma of iris and or trabecular meshwork and or Schlemm's canal",
            id : "00", name : "T2b"
          }, {
            description : "Massive choroidal invasion (> 3mm in largest diameter, or multiple foci of focal choroidal involvement totalling > 3mm or any full thinkness choroidal involvement)",
            id : "00", name : "T3a"
          }, {
            description : "Retrolaminar invasion of the optic nerve head, not involving the transected end of the optic nerve",
            id : "00", name : "T3b"
          }, {
            description : "any partial thickness involvement of the sclera within the inner two thirds",
            id : "00", name : "T3c"
          }, {
            description : "full thickness invasion into the outer third of the sclera and or invasion into or around emissary channels",
            id : "00", name : "T3d"
          }, {
            description : "extraocular tumor",
            id : "00", name : "T4"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "03", name : "N",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "00", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "00", name : "N0"
          }, {
            description : "Regional lymph node involvement (preauricular, cervical, submandibular)",
            id : "00", name : "N1"
          } ],
          id : "00", name : "Category (pN)"
        }]
        }, {
          id : "04", name : "M",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "metastases other than CSF and CNS",
            id : "00", name : "M1a"
          }, {
            description : "CSF or CNS metastasis",
            id : "00", name : "M1b"
          } ],
          id : "00", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "00", name : "Rhabdomyosarcoma, biopsy",
      optional : true,
      organ_group : "Pediatric",
      properties : [ {
        id : "00", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Biopsy"
          }, {
            id : "00", name : "Incisional biopsy"
          }, {
            id : "00", name : "Excisional biopsy"
          } ],
          id : "00", name : ""
        } ]
     
      }, {
        id : "00", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Bile duct"
          },{
            id : "00", name : "Bladder/prostate"
          }, {
            id : "00", name : "Cranial parameningeal"
          }, {
            id : "00", name : "Extremity "
          }, {
            id : "00", name : "Genitourinary (not bladder/prostate) "
          }, {
            id : "00", name : "Head and neck (excluding parameningeal) "
          }, {
            id : "00", name : "Orbit"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Embryonal"
          }, {
            id : "00", name : "Spindle cell/sclerosing  "
          }, {
            id : "00", name : "Alveolar "
          }, {
            id : "00", name : "Ectomesenchymoma  "
          }, {
            id : "00", name : "Rhabdomyosarcoma, subtype Equivocal "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Anaplasia",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Focal (single or few scattered anaplastic cells)"
          }, {
            id : "00", name : "Diffuse (clusters or sheets of anaplastic cells) "
          }, {
            id : "00", name : "Equivocal "
          }, {
            id : "00", name : "Not applicable "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Fusion Status ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Not performed"
          }, {
            id : "00", name : "No FOXO1 rearrangement"
          }, {
            id : "00", name : "FOXO1 rearrangement present  "
          }, {
            id : "00", name : "Equivocal "
          }, {
            id : "00", name : "Not applicable "
          } ],
          id : "00", name : ""
        } ]
  
      }, {
        description : "Excisional biopsy, only include distance",
        id : "00", name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "10", name : "Free, "
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          }, {
            id : "00", name : "Not applicable "
          } ],
          id : "00", name : ""
        } ]
      }   ]
    },{
      most_common : false,
      id : "00", name : "Rhabdomyosarcoma, resection",
      optional : true,
      organ_group : "Pediatric",
      properties : [ {
        id : "00", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [  {
            id : "00", name : "Marginal resection"
          }, {
            id : "00", name : "Radical resection"
          }, {
            id : "00", name : "Amputation "
          } ],
          id : "00", name : ""
        } ]
     
      }, {
        id : "00", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Bile duct"
          },{
            id : "00", name : "Bladder/prostate"
          }, {
            id : "00", name : "Cranial parameningeal"
          }, {
            id : "00", name : "Extremity "
          }, {
            id : "00", name : "Genitourinary (not bladder/prostate) "
          }, {
            id : "00", name : "Head and neck (excluding parameningeal) "
          }, {
            id : "00", name : "Orbit"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Embryonal"
          }, {
            id : "00", name : "Spindle cell/sclerosing  "
          }, {
            id : "00", name : "Alveolar "
          }, {
            id : "00", name : "Ectomesenchymoma  "
          }, {
            id : "00", name : "Rhabdomyosarcoma, subtype Equivocal "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Treatment History ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "No known presurgical chemotherapy"
          }, {
            id : "00", name : "Presurgical chemotherapy given "
          }, {
            id : "00", name : "Presurgical radiation given "
          }, {
            id : "00", name : "Presurgical chemo and radiation given "
          }, {
            id : "00", name : "Not known"
          }  ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Anaplasia",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Focal (single or few scattered anaplastic cells)"
          }, {
            id : "00", name : "Diffuse (clusters or sheets of anaplastic cells) "
          }, {
            id : "00", name : "Equivocal "
          }, {
            id : "00", name : "Not applicable "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Fusion Status ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Not performed"
          }, {
            id : "00", name : "No FOXO1 rearrangement"
          }, {
            id : "00", name : "FOXO1 rearrangement present  "
          }, {
            id : "00", name : "Equivocal "
          }, {
            id : "00", name : "Not applicable "
          } ],
          id : "00", name : ""
        } ]
  
      }, {
        description : "include distance",
        id : "00", name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "10", name : "Free, "
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "50", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "50", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "51", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Distant metastases",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            inputs_required : [ "" ],
            id : "10", name : "Present"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
     
      } ]
    }, {
      most_common : false,
      id : "00", name : "Skin Melanoma",
      optional : false,
      organ_group : "Skin",
      properties : [ {
        id : "00", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Excision"
          } ],
          id : "00", name : ""
        } ]
      }, { id : "00", name : "Location",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Right"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Left"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Midline"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Equivocal"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Macroscopic satellite nodules",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Equivocal"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Melanoma in situ"
          }, {
            id : "00", name : "Superficial spreading melanoma"
          }, {
            id : "00", name : "Nodular melanoma"
          }, {
            id : "00", name : "Lentigo maligna melanoma"
          }, {
            id : "00", name : "Acral lentiginous melanoma"
          }, {
            id : "00", name : "Desmoplastic melanoma"
          }, {
            id : "00", name : "Invasive melanoma, NOS"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor thickness (mm)",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Equivocal"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
    
      }, {
        id : "00", name : "Ulceration",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Equivocal"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Microsatellites",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Equivocal"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "include distance/location of closest margin",
        id : "00", name : "Margins, peripheral",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
             inputs_required : [ "" ],
            id : "10", name : "Free, "
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "include distance of closest deep margin",
        id : "00", name : "Margins, deep",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance",
             inputs_required : [ "" ],
            id : "10", name : "Free, "
          }, {
           
           
            id : "00", name : "Positive, "
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Mitotic rate",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Equivocal"
          }, {
            id : "00", name : "None"
          }, {
            id : "00", name : "< 1 per square millimeter"
          }, {
            id : "00", name : "Present but < 1 per square millimeter"
          }, {
            id : "00", name : "> 1 per square millimeter"
          }, {
            description : "# per square millimeter",
            inputs_required : [ "" ],
            id : "10", name : ""
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Indeterminate"
          }, {
            id : "00", name : "Suspicious"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Present, extensive"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Perineural invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Equivocal"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor regression",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Less than or equal to 75% of lesion"
          }, {
            id : "00", name : "Greater than 75% of lesion"
          }, {
            id : "00", name : "Equivocal"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymph nodes, # sentinel",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "50", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "50", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "51", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "50", name : "Matted nodes",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Equivocal"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "01", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "00", name : ""
          }, {
            description : "pathologic",
            id : "00", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "00", name : "m"
          }, {
            description : "recurrent",
            id : "00", name : "r"
          }, {
            description : "post-treatment",
            id : "00", name : "y"
          }, {
            id : "00", name : "mp"
          }, {
            id : "00", name : "rp"
          }, {
            id : "00", name : "yp"
          }, {
            id : "00", name : "mrp"
          }, {
            id : "00", name : "myp"
          }, {
            id : "00", name : "ryp"
          }, {
            id : "00", name : "mryp"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "02", name : "T",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "cannot be assessed",
            id : "00", name : "TX"
          }, {
            description : "in situ",
            id : "00", name : "Tis"
          }, {
            description : "<= 0.8 mm AND no ulceration",
            id : "00", name : "T1a"
          }, {
            description : "<= (0.8 mm AND ulceration) OR (>=0.8 mm AND <=1.0 mm with or without ulceration)",
            id : "00", name : "T1b"
          }, {
            description : "> 1mm AND <= 2mm , no ulceration",
            id : "00", name : "T2a"
          }, {
            description : "> 1mm AND <= 2mm , ulceration",
            id : "00", name : "T2b"
          }, {
            description : "> 2mm AND <= 4mm , no ulceration",
            id : "00", name : "T3a"
          }, {
            description : "> 2mm AND <= 4mm , ulceration",
            id : "00", name : "T3b"
          }, {
            description : "> 4mm AND no ulceration",
            id : "00", name : "T4a"
          }, {
            description : "> 4mm AND ulceration",
            id : "00", name : "T4b"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "03", name : "N",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "00", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "00", name : "N0"
          }, {
            description : "1 metastasis, clincially occult",
            id : "00", name : "N1a"
          }, {
            description : "1 metastasis, clincially apparent",
            id : "00", name : "N1b"
          }, {
            description : "negative nodes, positive intransit metastasis AND/OR microsatellite metastases",
            id : "00", name : "N1c"
          }, {
            description : "2-3 metastasis, clincially occult",
            id : "00", name : "N2a"
          }, {
            description : "2-3 metastasis, clincially apparent",
            id : "00", name : "N2b"
          }, {
            description : " 1 metastasis AND Satellite or in-transit metastasis",
            id : "00", name : "N2c"
          }, {
            description : ">= 4 metastases clincally occult",
            id : "00", name : "N3a"
          }, {
            description : " 4 metastases clincally apparent",
            id : "00", name : "N3b"
          }, {
            description : "2 or more positive nodes, positive intransit metastasis AND/OR microsatellite metastases",
            id : "00", name : "N3c"
          } ],
          id : "00", name : "Category (pN)"
        }]
        }, {
          id : "04", name : "M",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "metastasesto skin soft tissue including muscles and or nonregional lymph nodes",
            id : "00", name : "M1a"
          }, {
              description : "metastases to lung",
            id : "00", name : "M1b"
          }, {
              description : "metastases to non-CNS visceral sites",
            id : "00", name : "M1c"
          }, {
              description : "metastases to CNS",
            id : "00", name : "M1d"
          }, {
              description : "metastases",
            id : "00", name : "M (not applicable)"
          }, {
            id : "00", name : "distant metastasis not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
       
        id : "00", name : "Ancillary studies ordered",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          },{
            id : "00", name : "Not applicable"
          } ,{
            description : "N1 or M1 only",
            id : "00", name : "BRAF, C-Kit (molecular), and PDL-1"
          }],
          id : "00", name : ""
        } ]
      }, {
        description : "Add billing code G9428 for residual melanoma and G9429 no melanoma left",
        id : "45", name : "ICD10",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "C43.9"
          } ],
          id : "00", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "00", name : "Skin Merkel Cell Carcinoma",
      optional : false,
      organ_group : "Skin",
      properties : [ {
        id : "00", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Excision"
          }, {
            id : "00", name : "Excision and sentinel node(s)"
          }, {
            id : "00", name : "Excision and regional node(s)"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Not specified"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Equivocal"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "include distance/location of closest margin",
        id : "00", name : "Margins, peripheral",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            id : "00", name : "Free, "
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "include distance/location of closest margin",
        id : "00", name : "Margins, deep",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            id : "00", name : "Free, "
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Indeterminate"
          }, {
            id : "00", name : "Suspicious"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Present, extensive"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "T4",
        id : "00", name : "Invasion of Bone, Muscle, Fascia, or Cartilage ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "64", name : "Present"
          }, {
            id : "00", name : "Equivocal"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymph nodes, # sentinel",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "50", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "50", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "51", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "01", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "00", name : ""
          }, {
            description : "pathologic",
            id : "00", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "00", name : "m"
          }, {
            description : "recurrent",
            id : "00", name : "r"
          }, {
            description : "post-treatment",
            id : "00", name : "y"
          }, {
            id : "00", name : "mp"
          }, {
            id : "00", name : "rp"
          }, {
            id : "00", name : "yp"
          }, {
            id : "00", name : "mrp"
          }, {
            id : "00", name : "myp"
          }, {
            id : "00", name : "ryp"
          }, {
            id : "00", name : "mryp"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "02", name : "T",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "cannot be assessed",
            id : "00", name : "TX"
          }, {
            description : "in situ",
            id : "00", name : "Tis"
          }, {
            description : "Less than or equal to 2 cm maximum tumor dimension ",
            id : "00", name : "T1"
          }, {
            description : "Greater than 2 cm but not more than 5 cm maximum tumor dimension ",
            id : "00", name : "T2"
          }, {
            description : "Over 5 cm maximum tumor dimension",
            id : "00", name : "T3"
          }, {
            description : "Primary tumor invades bone, muscle, fascia, or cartilage",
            id : "00", name : "T4"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "03", name : "N",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "00", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "00", name : "N0"
          }, {
            description : "Clinically occult positive sentinel lymph node(s)",
            id : "00", name : "N1a(sn)"
          }, {
            description : "Clinically occult positive regional lymph node(s)",
            id : "00", name : "N1a"
          }, {
            description : "Clinically or radiographically lymph node met, pathologically confirmed",
            id : "00", name : "N1b"
          }, {
            description : "In transit metastasis (discontinuous from primary tumor, located between primary and draining regional nodes or distal to primary AND NO lymph node metastases",
            id : "00", name : "N2"
          }, {
            description : "In transit metastasis (discontinuous from primary tumor, located between primary and draining regional nodes or distal to primary AND lymph node metastases",
            id : "00", name : "N3"
          }  ],
          id : "00", name : "Category (pN)"
        }]
        }, {
          id : "04", name : "M",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "metastases to distant skin, subcutaneous tissue or distant lymph nodes",
            id : "00", name : "M1a"
          }, {
             description : "metastases to lung",
            id : "00", name : "M1b"
          }, {
             description : "metastases all other sites",
            id : "00", name : "M1c"
          }, {
            id : "00", name : "M (not applicable)"
          }, {
            id : "00", name : "distant metastasis not applicable"
          } ],
          id : "00", name : ""
        } ]
      } ]
     }, {
      most_common : false,
      id : "00", name : "Small Intestine",
      optional : false,
      organ_group : "Gastrointestinal",
      properties : [  {
        id : "00", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Segmental resection"
          }, {
            id : "00", name : "Ileocolic resection"
          }, {
            id : "00", name : "Pancreaticoduodenectomy (Whipple resection)"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Duodenum"
          }, {
            id : "00", name : "Jejunum"
          } , {
            id : "00", name : "Ileum"
          }, {
            id : "00", name : "Small intestine"
          }],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor Perforation ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Present"
          }, {
            id : "00", name : "None"
          }, {
            id : "00", name : "Equivocal"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Adenocarcinoma"
          }, {
            description : "greater than 50% mucinous",
            id : "00", name : "Mucinous adenocarcinoma "
          }, {
            description : ">50% signet-ring cells",
            id : "00", name : "Adenocarcinoma, signet-ring carcinoma "
          }, {
            id : "00", name : "Medullary carcinoma "
          }, {
            id : "00", name : "Undifferentiated carcinoma"
          }, {
            id : "00", name : "Squamous cell carcinoma"
          }, {
            id : "00", name : "Adenosquamous carcinoma "
          }, {
            id : "00", name : "Undifferentiated carcinoma"
          }, {
            id : "00", name : "Mixed adenoneuroendocrine carcinoma"
          }, {
            id : "00", name : "Large cell neuroendocrine carcinoma"
          }, {
            id : "00", name : "Small cell neuroendocrine carcinoma"
          }, {
            id : "00", name : "Neuroendocrine carcinoma (poorly differentiated)"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Grade 1/4, Well differentiated "
          }, {
            id : "00", name : "Grade 2/4, Moderately differentiated "
          }, {
            id : "00", name : "Grade 3/4, Poorly differentiated"
          }, {
            id : "00", name : "Grade 4/4, Undifferentiated"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "No evidence of primary tumor"
          }, {
            id : "65", name : "Invades lamina propria"
          }, {
            id : "66", name : "Invades submucosa"
          }, {
            id : "62", name : "Invades muscularis propria"
          }, {
            id : "63", name : "Tumor invades through the muscularis propria into the subserosal adipose tissue or the nonperitonealized peri-intestinal soft tissues but does not extend to the serosal surface"
          }, {
            id : "64", name : "Tumor microscopically involves the serosal surface (visceral peritoneum) "
          }, {
            description : "which",
            inputs_required : [ "" ],
            id : "11", name : "Tumor directly invades adjacent structures "
          }, {
            description : "which",
            inputs_required : [ "" ],
            id : "11", name : "Tumor penetrates to the surface of the visceral peritoneum (serosa) and directly invades adjacent structures"
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "include distance/location of closest proximal/distal/radial/bile duct/pancreatic margin",
        id : "00", name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "10", name : "Free, "
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Indeterminate"
          }, {
            id : "00", name : "Suspicious"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Present, extensive"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "50", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "50", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "51", name : "0" },{ id : "53", name : "1" },{ id : "53", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "01", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "00", name : ""
          }, {
            description : "pathologic",
            id : "00", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "00", name : "m"
          }, {
            description : "recurrent",
            id : "00", name : "r"
          }, {
            description : "post-treatment",
            id : "00", name : "y"
          }, {
            id : "00", name : "mp"
          }, {
            id : "00", name : "rp"
          }, {
            id : "00", name : "yp"
          }, {
            id : "00", name : "mrp"
          }, {
            id : "00", name : "myp"
          }, {
            id : "00", name : "ryp"
          }, {
            id : "00", name : "mryp"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "02", name : "T",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "cannot be assessed",
            id : "00", name : "TX"
          }, {
            description : "No tumor",
            id : "00", name : "T0"
          }, {
            description : "Carcinoma in situ",
            id : "00", name : "Tis"
          }, {
            description : "Tumor invades lamina propria ",
            id : "00", name : "T1a"
          }, {
            description : "Tumor invades submucosa",
            id : "00", name : "T1b"
          }, {
            description : "Tumor invades muscularis propria",
            id : "00", name : "T2"
          }, {
            description : "Tumor invades through the muscularis propria into the subserosa or into the nonperitonealized perimuscular tissue (mesentery or retroperitoneum)without serosal penetration",
            id : "00", name : "T3"
          }, {
            description : "Tumor perforates the visceral peritoneum or directly invades other organs or structures (includes other loops of small intestine, mesentery, and abdominal wall by way of serosa; for duodenum only, invasion of pancreas or bile duct) ",
            id : "00", name : "T4"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "03", name : "N",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "00", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "00", name : "N0"
          }, {
            description : "Metastasis in 1 to 2 regional lymph nodes",
            id : "00", name : "N1"
          }, {
            description : "Metastasis in 3 or more regional lymph nodes",
            id : "00", name : "N2"
          } ],
          id : "00", name : "Category (pN)"
        }]
        }, {
          id : "04", name : "M",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Distant metastases",
            id : "00", name : "M1"
          }, {
            id : "00", name : "M (not applicable)"
          }, {
            id : "00", name : "distant metastasis not applicable"
          } ],
          id : "00", name : ""
        } ]
        }, {
          description: "adenocarcinoma only",
        id : "00", name : "MSI IHC and Interpretation",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Intact nuclear expression of MMR proteins (MLH1, MSH2, MSH6, PMS2): No evidence of deficient mismatch repair (low probability of MSI-H)"
          },{
            id : "00", name : "Loss of nuclear expression of one or more MMR proteins (MLH1, MSH2, MSH6, PMS2): deficient mismatch repair/ high probability of microsatellite instability-high (MSI-H). The presence of MSI-H/deficient mismatch repair may also be an indication for additional testing for Lynch syndrome and genetic counselling."
          }, {
            id : "00", name : "Pending"
          }, {
            id : "00", name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            id : "10", name : "See case "
          }],
          id : "00", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "00", name : "Soft Tissue",
      optional : false,
      organ_group : "Other",
      properties : [ {
        id : "00", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Biopsy"
          }, {
            id : "00", name : "Intralesional resection  "
          }, {
            id : "00", name : "Marginal resection "
          }, {
            id : "00", name : "Wide resection "
          }, {
            id : "00", name : "Radical resection "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Type",
       optional_state  : "required", "options" : [ {
          id : "00", name : ""
        } ]
      }, {
         description : "per 10 hpf where 1 hpf =.17mm squared",
        id : "00", name : "Mitotic Rate ",
       optional_state  : "required", "options" : [ {
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Necrosis",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            description : "%",
            inputs_required : [ "" ],
            id : "10", name : "Present"
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "French Federation of Cancer Centers Sarcoma Group [FNCLCC]",
        id : "00", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Grade 1/3"
          }, {
            id : "00", name : "Grade 2/3  "
          }, {
            id : "00", name : "Grade 3/3  "
          }, {
            id : "00", name : "Ungraded sarcoma"
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "include distance",
        id : "00", name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "10", name : "Free, "
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "50", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "50", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "51", name : "0" },{ id : "53", name : "1" },{ id : "53", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Treatment effect, primary site",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Present  "
          }, {
            id : "00", name : "Indeterminate  "
          }, {
            id : "00", name : "Not known"
          }  ],
          id : "00", name : ""
        } ]
      }, {
        id : "01", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "00", name : ""
          }, {
            description : "pathologic",
            id : "00", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "00", name : "m"
          }, {
            description : "recurrent",
            id : "00", name : "r"
          }, {
            description : "post-treatment",
            id : "00", name : "y"
          }, {
            id : "00", name : "mp"
          }, {
            id : "00", name : "rp"
          }, {
            id : "00", name : "yp"
          }, {
            id : "00", name : "mrp"
          }, {
            id : "00", name : "myp"
          }, {
            id : "00", name : "ryp"
          }, {
            id : "00", name : "mryp"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "02", name : "T",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "ABDOMEN AND THORAX cannot be assessed",
            id : "00", name : "TX"
          }, {
            description : "ABDOMEN AND THORAX  No tumor",
            id : "00", name : "T0"
          }, {
            description : "ABDOMEN AND THORAX Organ limited",
            id : "00", name : "T1"
          }, {
            description : "ABDOMEN AND THORAX invades serosa or visceral peritoneum",
            id : "00", name : "T2a"
          }, {
            description : "ABDOMEN AND THORAX extends beyond serosa (mesentery)",
            id : "00", name : "T2b"
          }, {
            description : "ABDOMEN AND THORAX Invades another organ",
            id : "00", name : "T3"
          }, {
            description : "ABDOMEN AND THORAX 2 sites",
            id : "00", name : "T4a"
          }, {
            description : "ABDOMEN AND THORAX 3-5 sites",
            id : "00", name : "T4b"
          }, {
            description : "ABDOMEN AND THORAX >5 sites",
            id : "00", name : "T4c"
          } , {
            description : "HEAD AND NECK Tumor <=2cm",
            id : "00", name : "T1"
          }, {
            description : "HEAD AND NECK Tumor >2cm AND <= 4cm",
            id : "00", name : "T2"
          }, {
            description : "HEAD AND NECK Tumor > 4cm",
            id : "00", name : "T3"
          }, {
            description : "HEAD AND NECK Tumor invades orbit, skull base dural central compartment facial skeleton or pterygoid musclesr",
            id : "00", name : "T4a"
          }, {
            description : "HEAD AND NECK Tumor invades brain, carotid artery, prevertebral muscle, or CNS spread via perinerual spread",
            id : "00", name : "T4b"
          }, {
            description : "TRUNK EXTREMITIES AND RETROPERITONEUM Tumor 5 cm or less in greatest dimension",
            id : "00", name : "T1"
          }, {
            description : "TRUNK EXTREMITIES AND RETROPERITONEUM Tumor > 5cm AND <= 10cmr",
            id : "00", name : "T2"
          }, {
            description : "TRUNK EXTREMITIES AND RETROPERITONEUM Tumor > 10 cm AND <=15cm",
            id : "00", name : "T3"
          }, {
            description : "TRUNK EXTREMITIES AND RETROPERITONEUM Tumor >15 cm",
            id : "00", name : "T4"
          }],
          id : "00", name : ""
        }]
        }, {
          id : "03", name : "N",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "00", name : "NX"
          }, {
            description : "No regional lymph node metastases",
            id : "00", name : "N0"
          }, {
            description : "Regional lymph node metastases",
            id : "00", name : "N1"
          } ],
          id : "00", name : "Category (pN)"
        }]
        }, {
          id : "04", name : "M",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Distant metastases",
            id : "00", name : "M1"
          }, {
            id : "00", name : "M (not applicable)"
          }, {
            id : "00", name : "distant metastasis not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "Immunohistochemistry, Cytogenetics, Molecular Pathology",
        id : "00", name : "Ancillary studies ordered",
       optional_state  : "required", "options" : [ {
          id : "00", name : ""
        } ]
      } ]    
   
    
      
    }, {
      most_common : false,
      id : "00", name : "Stomach",
      optional : false,
      organ_group : "Gastrointestinal",
      properties : [  {
        id : "00", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Endoscopic mucosal resection"
          }, {
            id : "00", name : "Partial gastrectomy, proximal "
          }, {
            id : "00", name : "Partial gastrectomy, distal "
          }, {
            id : "00", name : "Partial gastrectomy, other  "
          }, {
            id : "00", name : "Total gastrectomy"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Fundus"
          }, {
            id : "00", name : "Body"
          }, {
            id : "00", name : "Antrum"
          }, {
            id : "00", name : "Pylorus"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Adenocarcinoma"
          }, {
            id : "00", name : "Adenocarcinoma, intestinal type"
          }, {
            id : "00", name : "Adenocarcinoma, diffuse type "
          }, {
            description : "if >50% signet-ring cells",
            id : "00", name : "Adenocarcinoma, signet-ring carcinoma "
          }, {
            id : "00", name : "Adenocarcinoma, mixed "
          }, {
            id : "00", name : "Adenocarcinoma, hepatoid  "
          }, {
            id : "00", name : "Medullary carcinoma  "
          }, {
            id : "00", name : "Large cell neuroendocrine carcinoma"
          }, {
            id : "00", name : "Small cell neuroendocrine carcinoma"
          }, {
            id : "00", name : "Mixed adenoneuroendocrine carcinoma"
          }, {
            id : "00", name : "Squamous cell carcinoma"
          }, {
            id : "00", name : "Adenosquamous carcinoma"
          }, {
            id : "00", name : "Undifferentiated carcinoma"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Grade 1/3, Well differentiated"
          }, {
            id : "00", name : "Grade 2/3, Moderately differentiated"
          }, {
            id : "00", name : "Grade 3/3, Poorly differentiated"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "No evidence of primary tumor"
          }, {
            id : "60", name : "High-grade dysplasia (carcinoma in situ) "
          }, {
            id : "65", name : "Invades lamina propria"
          }, {
            id : "65", name : "Invades into but not through muscularis mucosae"
          }, {
            id : "66", name : "Invades submucosa"
          }, {
            id : "62", name : "Invades muscularis propria"
          }, {
            id : "63", name : "Invades subserosal connective tissue without involvement of visceral peritoneum"
          }, {
            id : "64", name : "Penetrates serosa"
          }, {
            description : "specify",
            inputs_required : [ "" ],
            id : "13", name : "Invades adjacent structures "
          }, {
            description : "specify",
            inputs_required : [ "" ],
            id : "11", name : "Penetrates to the surface of the visceral peritoneum (serosa) and directly invades adjacent structures"
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "include distance/location of closest proximal/distal/radial margin",
        id : "00", name : "Margins, invasive tumor",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "10", name : "Free, "
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "include distance/location of closest proximal/distal margin",
        id : "00", name : "Margins, dysplasia/CIS",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "10", name : "Free, "
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Treatment effect, primary site",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "No prior treatment"
          }, {
            id : "00", name : "Present (score 1 or 2)"
          }, {
            id : "00", name : "No response (score 3)"
          }, {
            id : "00", name : "Indeterminate"
          }, {
            id : "00", name : "Not known"
          }  ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Indeterminate"
          }, {
            id : "00", name : "Suspicious"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Present, extensive"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "50", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "50", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "51", name : "0" },{ id : "53", name : "1" },{ id : "53", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "01", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "00", name : ""
          }, {
            description : "pathologic",
            id : "00", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "00", name : "m"
          }, {
            description : "recurrent",
            id : "00", name : "r"
          }, {
            description : "post-treatment",
            id : "00", name : "y"
          }, {
            id : "00", name : "mp"
          }, {
            id : "00", name : "rp"
          }, {
            id : "00", name : "yp"
          }, {
            id : "00", name : "mrp"
          }, {
            id : "00", name : "myp"
          }, {
            id : "00", name : "ryp"
          }, {
            id : "00", name : "mryp"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "02", name : "T",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "cannot be assessed",
            id : "00", name : "TX"
          }, {
            description : "No tumor",
            id : "00", name : "T0"
          }, {
            description : "Carcinoma in situ/high-grade glandular dysplasia",
            id : "00", name : "Tis"
          }, {
            description : "Tumor invades lamina propria, muscularis mucosae, or submucosa",
            id : "00", name : "T1"
          }, {
            description : "Tumor invades lamina propria or muscularis mucosae",
            id : "00", name : "T1a"
          }, {
            description : "Tumor invades submucosa",
            id : "00", name : "T1b"
          }, {
            description : "Tumor invades muscularis propria",
            id : "00", name : "T2"
          }, {
            description : "Tumor invades subserosal connective tissue, without involvement of visceral peritoneum or adjacent structures",
            id : "00", name : "T3"
          }, {
            description : "Tumor invades serosa (visceral peritoneum) or adjacent structures ",
            id : "00", name : "T4"
          }, {
            description : "Tumor invades serosa (visceral peritoneum)  ",
            id : "00", name : "T4a"
          }, {
            description : "Tumor invades adjacent structures",
            id : "00", name : "T4b"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "03", name : "N",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "00", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "00", name : "N0"
          }, {
            description : "Regional lymph node metastasis involving 1 to 2 nodes",
            id : "00", name : "N1"
          }, {
            description : "3 to 6 nodes involved",
            id : "00", name : "N2"
          }, {
            description : "7 or more nodes involved",
            id : "00", name : "N3"
          }, {
            description : "7 to 15 perigastric lymph nodes",
            id : "00", name : "N3a"
          }, {
            description : "16 or more perigastric lymph nodes",
            id : "00", name : "N3b"
          } ],
          id : "00", name : "Category (pN)"
        }]
        }, {
          id : "04", name : "M",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Distant metastases",
            id : "00", name : "M1"
          }, {
            id : "00", name : "M (not applicable)"
          }, {
            id : "00", name : "distant metastasis not applicable"
          } ],
          id : "00", name : ""
        } ]
         }, {
          description : "Order IHC with reflex FISH",
        id : "00", name : "Her2Neu by IHC",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Positive (3+)"
          }, {
            id : "00", name : "Negative (0-1+)"
          }, {
            id : "00", name : "Equivocal (2+)"
          }, {
            id : "00", name : "Pending"
          }, {
            id : "00", name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            id : "18", name : "See case "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Her2Neu by FISH",
        description : "Order IHC with reflext FISH",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Positive, "
          }, {
            id : "00", name : "Negative"
          }, {
            id : "00", name : "Equivocal"
          }, {
            id : "00", name : "Pending"
          }, {
            id : "00", name : "Reflex pending if appropriate"
          }, {
            id : "00", name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            id : "10", name : "See case "
          } ],
          id : "00", name : ""
        } ]
      }, {
         description : "Keytruda, specific scoring system",
        id : "00", name : "PDL1",
       optional_state  : "required", "options" : [ {
          group : [ {
            inputs_required : [ "% of cells", [ "strong", "moderate", "weak" ] ],
            id : "10", name : "Positive/Expressed"
          }, {
            inputs_required : [ "" ],
            id : "10", name : "Positive, Score ="
          }, {
            id : "00", name : "Negative (0%)"
          }, {
            id : "00", name : "Pending"
          }, {
            id : "00", name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            id : "10", name : "See case "
          } ],
          id : "00", name : ""
        }  ]
        }, {
           description: "adenocarcinoma only",
        id : "00", name : "MSI IHC and Interpretation",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Intact nuclear expression of MMR proteins (MLH1, MSH2, MSH6, PMS2): No evidence of deficient mismatch repair (low probability of MSI-H)"
          },{
            id : "00", name : "Loss of nuclear expression of one or more MMR proteins (MLH1, MSH2, MSH6, PMS2): deficient mismatch repair/ high probability of microsatellite instability-high (MSI-H). The presence of MSI-H/deficient mismatch repair may also be an indication for additional testing for Lynch syndrome and genetic counselling."
          }, {
            id : "00", name : "Pending"
          }, {
            id : "00", name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            id : "10", name : "See case "
          }],
          id : "00", name : ""
        } ]
     }]
    }, {
      most_common : false,
      id : "00", name : "Stomach neuroendocrine tumor",
      optional : false,
      organ_group : "Endocrine",
      properties : [  {
        id : "00", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Endoscopic mucosal resection"
          }, {
            id : "00", name : "Partial gastrectomy, proximal "
          }, {
            id : "00", name : "Partial gastrectomy, distal "
          }, {
            id : "00", name : "Partial gastrectomy, other  "
          }, {
            id : "00", name : "Total gastrectomy"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Cardia"
          }, {
            id : "00", name : "Fundus"
          }, {
            id : "00", name : "Body"
          }, {
            id : "00", name : "Antrum"
          }, {
            id : "00", name : "Pylorus"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor focality",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Single focus"
          }, {
            id : "00", name : "Multiple foci"
          } ],
          id : "00", name : ""
        } ]
      }, {
         description : "For small cell (high grade NET use stomach carcinoma protocol not this one) ",  
        id : "00", name : "Type and Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "< 2mitoses/10 hpf and/or Ki67<3% ", 
            id : "00", name : "Grade 1/3, Well differentiated neuroendocrine tumor, low grade (carcinoid)"
          }, {
            description : ">= 2 AND < 20 mitoses/10 hpf and/or Ki67 >=3 AND <20% ",  
            id : "00", name : "Grade 2/3, Well differentiated neuroendocrine tumor, intermediate grade (atypical carcinoid)"
          }, {
             description : "> 20 mitoses/10 hpf and/or Ki67 >20% ",  
            id : "00", name : "Grade 3/3, Well differentiated neuroendocrine tumor"
          } ],
          id : "00", name : ""
        } ]
      }, {
           description : "mitoses/ 2 mm squared NOT 10 hpf, approximately count 42 hpf and divide by 5", 
        id : "00", name : "Mitotic rate",
       optional_state  : "required", "options" : [ {
          group : [ {
            
            id : "00", name : "Less than 2/ 2mm squared"
          }, {
          
            id : "00", name : "at least 2 and less than 20 /2 mm squared"
          }, {
            
            id : "00", name : "More than 20 per 2 mm squared"
          } ],
          id : "00", name : ""
        } ]  
        
      }, {
        id : "00", name : "Ki67 (Mib1)",
       optional_state  : "required", "options" : [ {
          group : [ {
            
            id : "00", name : "Less than 3%"
          }, {
          
            id : "00", name : "at least 3% and less than 20%"
          }, {
            
            id : "00", name : "More than 20%"
          } ],
          id : "00", name : ""
        } ]  
        
      }, {
        id : "00", name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "No evidence of primary tumor"
          }, {
            id : "00", name : "Invades lamina propria"
          }, {
            id : "00", name : "Invades into but not through muscularis mucosae"
          }, {
            id : "00", name : "Invades submucosa"
          }, {
            id : "00", name : "Invades muscularis propria"
          }, {
            id : "63", name : "Invades subserosal connective tissue without involvement of visceral peritoneum"
          }, {
            id : "64", name : "Penetrates serosa"
          }, {
            description : "specify",
            inputs_required : [ "" ],
            id : "11", name : "Invades adjacent structures "
          }, {
            description : "specify",
            inputs_required : [ "" ],
            id : "11", name : "Penetrates to the surface of the visceral peritoneum (serosa) and directly invades adjacent structures"
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "include distance/location of closest proximal/distal/radial margin",
        id : "00", name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "10", name : "Free, "
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Indeterminate"
          }, {
            id : "00", name : "Suspicious"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Present, extensive"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "50", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "50", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "51", name : "0" },{ id : "53", name : "1" },{ id : "53", name : "2" },{ id : "53", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "01", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "00", name : ""
          }, {
            description : "pathologic",
            id : "00", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "00", name : "m"
          }, {
            description : "recurrent",
            id : "00", name : "r"
          }, {
            description : "post-treatment",
            id : "00", name : "y"
          }, {
            id : "00", name : "mp"
          }, {
            id : "00", name : "rp"
          }, {
            id : "00", name : "yp"
          }, {
            id : "00", name : "mrp"
          }, {
            id : "00", name : "myp"
          }, {
            id : "00", name : "ryp"
          }, {
            id : "00", name : "mryp"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "02", name : "T",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "cannot be assessed",
            id : "00", name : "TX"
          }, {
            description : "No tumor",
            id : "00", name : "T0"
          }, {
            description : "Carcinoma in situ/dysplasia (tumor size less than 0.5 mm), limited to mucosa",
            id : "00", name : "Tis"
          }, {
            description : "Tumor invades lamina propria or submucosa and 1 cm or less in size",
            id : "00", name : "T1"
          }, {
            description : "Tumor invades muscularis propria or more than 1 cm in size",
            id : "00", name : "T2"
          }, {
            description : "Tumor penetrates subserosa",
            id : "00", name : "T3"
          }, {
            description : "Tumor invades visceral peritoneum (serosal) or other organs or adjacent structures ",
            id : "00", name : "T4"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "03", name : "N",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "00", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "00", name : "N0"
          }, {
            description : "Regional lymph node metastases",
            id : "00", name : "N1"
          } ],
          id : "00", name : "Category (pN)"
        }]
        }, {
          id : "04", name : "M",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Distant metastases",
            id : "00", name : "M1"
          }, {
            id : "00", name : "M (not applicable)"
          }, {
            id : "00", name : "distant metastasis not applicable"
          } ],
          id : "00", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "00", name : "Testis",
      optional : false,
      organ_group : "Genitourinary",
      properties : [ {
        id : "00", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Right radical orchiectomy"
          } ,{
            id : "00", name : "Left radical orchiectomy"
          }],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor focality",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Single focus"
          }, {
            id : "00", name : "Multiple foci"
          } ],
          id : "00", name : ""
        } ]  
      }, {
        id : "00", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Equivocal"
          } ],
          id : "00", name : ""
        } ]
     
      }, {
        id : "00", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
             description : "SALL4+, OCT3/4+, CD117+, Keratin -/focal+, CD30-, Glypican3-, CDX2-/focal+, D2-40+",
            id : "00", name : "Seminoma, classical"
          }, {
            description : "give percentages",
            inputs_required : [ "" ],
            id : "10", name : "Mixed germ cell tumor"
          }, {
            description : "SALL4+, OCT3/4+, CD117-, Keratin+, CD30+, Glypican3-, CDX2-/focal+, D2-40- or focal+",
            id : "00", name : "Embryonal tumor"
          }, {
            description : "SALL4+, OCT3/4-, CD117-, Keratin -/focal +, CD30-, Glypican3+, CDX2+, D2-40-",
            id : "00", name : "Yolk sac tumor"
          }, {
             description : "SALL4 +, OCT3/4-, GATA3+, D2-40-, (CK7+, p63+, inhibin+, other germ cell tumors neg)",
            id : "00", name : "Choriocarcinoma"
          }, {
              description : "Prepubertal teratoma is benign, genetically distinct, and does not get a tumor summary",
            id : "00", name : "Teratoma, postpubertal type"
          }, {
            id : "00", name : "Teratoma with carcinoma"
          }, {
            id : "00", name : "Teratoma with sarcoma"
          }, {
             description : "SALL4 +, OCT3/4 -, CD117+ (used to be spermatocytic seminoma)",
            id : "00", name : "Spermatocytic tumor"
          }, {
            id : "00", name : "Spermatocytic tumor with sarcoma"
          }, {
            id : "00", name : "Leydig cell tumor"
          }, {
            id : "00", name : "Malignant Leydig cell tumor"
          }, {
            id : "00", name : "Gonadolblastoma"
          }, {
            id : "00", name : "Sertoli cell tumor, classic"
          }, {
            id : "00", name : "Sertoli cell tumor, malignant"
          }, {
            id : "00", name : "Sertoli cell tumor, large cell calcifying"
          }, {
            id : "00", name : "Granulosa cell tumor, adult"
          }, {
            id : "00", name : "Granulosa cell tumor, juvenile"
          }, {
            id : "00", name : "Fibroma-thecoma"
          } ],
          id : "00", name : ""
        } ]
      
      }, {
        id : "00", name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Limited to testis"
          }, {
            id : "00", name : "Invades through tunica albuginea"
          }, {
            id : "00", name : "Invades hilar soft tissues"
          }, {
            id : "00", name : "Invades epididymis"
          }, {
            id : "00", name : "Invades spermatic cord"
          }, {
              description : "M1a",
            id : "00", name : "Discontinuous spermatic cord involvement"
          }, {
            id : "64", name : "Invades scrotal wall"
          } ],
          id : "00", name : ""
        } ]
  }, {
        id : "00", name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Free "
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          } ],
          id : "00", name : ""
        } ]
  
      }, {
        id : "00", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Indeterminate"
          }, {
            id : "00", name : "Suspicious"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Present, extensive"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "50", name : "0" 
          },{ 
            id : "00", name : "See separate lymphadenectomy tumor summary" 
          },{
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      },  {
        id : "01", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "00", name : ""
          }, {
            description : "pathologic",
            id : "00", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "00", name : "m"
          }, {
            description : "recurrent",
            id : "00", name : "r"
          }, {
            description : "post-treatment",
            id : "00", name : "y"
          }, {
            id : "00", name : "mp"
          }, {
            id : "00", name : "rp"
          }, {
            id : "00", name : "yp"
          }, {
            id : "00", name : "mrp"
          }, {
            id : "00", name : "myp"
          }, {
            id : "00", name : "ryp"
          }, {
            id : "00", name : "mryp"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "02", name : "T",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "cannot be assessed",
            id : "00", name : "TX"
          }, {
            description : "in situ",
            id : "00", name : "Tis"
          }, {
            description : "NONSEMINOMATOUS, limited to testis and rete testis AND no LVI (do not substage, that is only for seminoma)",
            id : "00", name : "T1"
          }, {
            description : "PURE SEMINOMA ONLY: <= 3cm AND limited to testis and rete testis AND no LVI",
            id : "00", name : "T1a"
          }, {
            description : "PURE SEMINOMA ONLY: > 3cm AND limited to testis and rete testis AND no LVI",
            id : "00", name : "T1b"
          }, {
            description : "(limited to testis and rete testis AND LVI) OR (invades hilar soft tissue, epididymis, or external surface of tunica albuginea)",
            id : "00", name : "T2"
          }, {
            description : "Invades spermatic cord",
            id : "00", name : "T3"
          }, {
            description : "Invades scrotum",
            id : "00", name : "T4"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "03", name : "N",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "00", name : "NX"
          }, {
            description : "No regional lymph node metastases",
            id : "00", name : "N0"
          }, {
            description : "<= 5 metastasis, all <= 2cm",
            id : "00", name : "N1"
          }, {
            description : "1 metastasis (not ln) >2cm AND <= 5cm OR > 5 metastases AND all <= 5cm AND no extranodal extension",
            id : "00", name : "N2"
          }, {
            description : "metastases (not ln) > 5cm",
            id : "00", name : "N3"
          } ],
          id : "00", name : "Category (pN)"
        }]
        }, {
          id : "04", name : "M",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "metastases nonregional or lung or discontinuous spermatic cord involvement",
            id : "00", name : "M1a"
          }, {
            description : "other metastases",
            id : "00", name : "M1b"
          }, {
            id : "00", name : "M (not applicable)"
          }, {
            id : "00", name : "distant metastasis not applicable"
          } ],
          id : "00", name : ""
        } ]
      } ]
    }, {
      most_common : true,
      id : "00", name : "Thyroid",
      optional : false,
      organ_group : "Endocrine",
      properties : [ {
        id : "00", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Total thyroidectomy"
          }, {
            id : "00", name : "Right lobectomy"
          }, {
            id : "00", name : "Left lobectomy"
          }, {
            id : "00", name : "Right lobe and isthmus resection"
          }, {
            id : "00", name : "Left lobe and isthmus resection"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Right lobe"
          }, {
            id : "00", name : "Left lobe"
          }, {
            id : "00", name : "Isthmus"
          }, {
            id : "00", name : "Pyramidal lobe"
          }, {
            id : "00", name : "Bilateral, largest focus right lobe"
          }, {
            id : "00", name : "Bilateral, largest focus left lobe"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor focality",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Single focus"
          }, {
            id : "00", name : "Multiple foci"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Papillary carcinoma, NOS"
          }, {
            id : "00", name : "Papillary carcinoma, NOS, predominantly encapsulated"
          }, {
            id : "00", name : "Papillary carcinoma, cystic, predominantly encapsulated"
          }, {
            id : "00", name : "Papillary carcinoma with tall cell features"
          }, {
            id : "00", name : "Papillary carcinoma, follicular variant"
          }, {
            id : "00", name : "Papillary carcinoma, follicular variant, invasive"
          }, {
            id : "00", name : "Papillary carcinoma, follicular variant, invasive, predominantly encapsulated"
          }, {
              description : "CDX2 +",
            id : "00", name : "Papillary carcinoma, columnar variant"
          }, {
              description : "Nuclear beta catenin +",
            id : "00", name : "Papillary carcinoma, cribriform morular variant"
          }, {
            id : "00", name : "Follicular carcinoma, minimally invasive"
          }, {
            id : "00", name : "Follicular carcinoma, widely invasive"
          }, {
            id : "00", name : "Hurthle cell carcinoma, minimally invasive"
          }, {
            id : "00", name : "Hurthle cell carcinoma, widely invasive"
          }, {
            id : "00", name : "Poorly differentiated thyroid carcinoma"
          }, {
             description : "CEA +, Calcitonin+, Chromogranin+, TTF1+, thyroglobulin -",
            id : "00", name : "Medullary carcinoma"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Free "
          }, {
            id : "00", name : "Tumor abuts the inked margin"
          }, {
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Angioinvasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Equivocal"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymphatic invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Equivocal"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Extra-thyroidal extension",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Present, microscopic strap muscle invasion only"
          }, {
            id : "00", name : "Present, clinical/macroscopic and histologic invasion of strap muscles"
          }, {
            id : "00", name : "Present, invasion beyond strap muscles"
          }, {
            id : "00", name : "Present, invasion of prevertebral fascia or encasing the carotid artery or mediastinal vessels "
          }, {
            id : "00", name : "Equivocal"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymph nodes, sites sampled",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "50", name : "None"
          }, {
            id : "00", name : "Lymph nodes in thyroidectomy/lobectomy (Level VI)"
          }, {
            id : "00", name : "Focused or single lymph node resection"
          }, {
            id : "00", name : "Lymph nodes in thyroidectomy/lobectomy  and focused or single lymph node resection"
          }, {
            id : "00", name : "Central compartment dissection (level VI)"
          }, {
            id : "00", name : "Right lateral neck dissection (levels I-V)"
          }, {
            id : "00", name : "Left lateral neck dissection (levels I-V)"
          }, {
            id : "00", name : "Superior mediastinal lymph nodes (levels VII)"
          }, {
            id : "00", name : "Right/central neck dissection (levels II-VI)"
          }, {
            id : "00", name : "Left/central neck dissection (levels II-VI)"
          }, {
            id : "00", name : "Right/central neck dissection (levels II-VI) and perithyroidal lymph nodes"
          }, {
            id : "00", name : "Left/central neck dissection (levels II-VI) and perithyroidal lymph nodes"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "51", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "50", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "50", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "52", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "List all of Right levels I-V, Left levels I-V, Level VI, Level VII",
        id : "50", name : "Lymph nodes, sites involved",
       optional_state  : "required", "options" : [ {
          group : [  {
            id : "00", name : "Right, Levels I-V"
          },{
            id : "00", name : "Left, Levels I-V"
          },{
            id : "00", name : "Levels I-V"
          },{
            id : "51", name : "None"
          }, {
            description : "Perithyroidal ",
            id : "00", name : "Level VI"
          }, {
            id : "00", name : "Level VII"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "50", name : "Extranodal extension",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Not applicable"
          }, {
            id : "00", name : "None"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Equivocal"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "50", name : "Size of largest metastasis",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "01", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "00", name : ""
          }, {
            description : "pathologic",
            id : "00", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "00", name : "m"
          }, {
            description : "recurrent",
            id : "00", name : "r"
          }, {
            description : "post-treatment",
            id : "00", name : "y"
          }, {
            id : "00", name : "mp"
          }, {
            id : "00", name : "rp"
          }, {
            id : "00", name : "yp"
          }, {
            id : "00", name : "mrp"
          }, {
            id : "00", name : "myp"
          }, {
            id : "00", name : "ryp"
          }, {
            id : "00", name : "mryp"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "02", name : "T",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "cannot be assessed",
            id : "00", name : "TX"
          }, {
            description : "<= 1cm  organ limited",
            id : "00", name : "T1a"
          }, {
            description : "> 1 cm AND <= 2cm  organ limited",
            id : "00", name : "T1b"
          }, {
            description : "> 2 cm AND <= 4cm  organ limited",
            id : "00", name : "T2"
          }, {
            description : "> 4 cm limited to thyroid ",
            id : "00", name : "T3a"
          }, {
            description : "GROSS (theoretically from the op report, not microscopic) extrathyroidal extension invading only strap muscles from a tumor of any size ",
            id : "00", name : "T3b"
          }, {
            description : "GROSS (theoretically from the op report, not microscopic)invasion of subcutaneous tissue, larynx, trachea, esophagus, recurrent laryngeal nerve ",
            id : "00", name : "T4a"
          }, {
            description : "GROSS (theoretically from the op report, not microscopic)invasion of prevertebral fascia, carotid artery or mediastinal vessel",
            id : "00", name : "T4b"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "03", name : "N",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "00", name : "NX"
          }, {
            description : "No regional lymph node metastasis by pathology",
            id : "00", name : "N0a"
          }, {
            description : "positive level VI or VII nodes (pretracheal, paratracheal or prelaryngeal/Delphian or upper mediastinal",
            id : "00", name : "N1a"
          }, {
            description : "positive level I - V nodes (lateral neck or retropharyngeal",
            id : "00", name : "N1b"
          } ],
          id : "00", name : "Category (pN)"
        }]
        }, {
          id : "04", name : "M",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "metastases",
            id : "00", name : "M1"
          }, {
            id : "00", name : "M (not applicable)"
          }, {
            id : "00", name : "distant metastasis not applicable"
          } ],
          id : "00", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "00", name : "Thymus",
      optional : false,
      organ_group : "Thorax",
      properties : [ {
        id : "00", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Thymectomy"
          }, {
            id : "00", name : "Partial thymectomy"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Thymoma"
          }, {
             description : "spindle/medullary",
            id : "00", name : "Type A thymoma "
          }, {
             description : "mixed spindle/medullary and lymphocyte/epithelial",
            id : "00", name : "Type AB thymoma"
          }, {
             description : "lymphocyte predominant",
            id : "00", name : "Type B1 thymoma "
          }, {
             description : "mixed lymphocyte and epithelial",
            id : "00", name : "Type B2 thymoma "
          }, {
             description : "epithelial predominant",
            id : "00", name : "Type B3 thymoma "
          }, {
            id : "00", name : "Thymic carcinoma "
          }, {
            id : "00", name : "Squamous cell carcinoma "
          }, {
            id : "00", name : "Basaloid carcinoma"
          }, {
            id : "00", name : "Mucoepidermoid carcinoma"
          }, {
            id : "00", name : "Lymphoepithelioma-like carcinoma "
          }, {
            id : "00", name : "Sarcomatoid carcinoma "
          }, {
            id : "00", name : "Clear cell carcinoma "
          }, {
            id : "00", name : "Adenocarcinoma "
          }, {
            id : "00", name : "Well-differentiated neuroendocrine carcinoma, typical carcinoid"
          }, {
            id : "00", name : "Well-differentiated neuroendocrine carcinoma, atypical carcinoid "
          }, {
            id : "00", name : "Poorly differentiated neuroendocrine carcinoma, large cell neuroendocrine carcinoma"
          }, {
            id : "00", name : "Poorly differentiated neuroendocrine carcinoma, small cell carcinoma, neuroendocrine type"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Limited to thymus"
          }, {
            id : "00", name : "Invades mediastinal fat"
          }, {
            id : "00", name : "Invades pulmonary parenchyma"
          }, {
            id : "00", name : "Invades pleura"
          }, {
            id : "00", name : "Invades pericardium"
          }, {
            id : "00", name : "Invades diaphragm"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Free, "
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Treatment effect, primary site",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Not applicable"
          }, {
            id : "00", name : "None"
          }, {
            description : "% residual viable tumor",
            inputs_required : [ "" ],
            id : "10", name : "Present"
          }, {
            id : "00", name : "Indeterminate"
          }, {
            id : "00", name : "Not known"
          }  ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Indeterminate"
          }, {
            id : "00", name : "Suspicious"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Present, extensive"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "50", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "50", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "51", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "01", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "00", name : ""
          }, {
            description : "pathologic",
            id : "00", name : "p"
          }, {
            description : "multiple foci",
            id : "00", name : "m"
          }, {
            description : "recurrent",
            id : "00", name : "r"
          }, {
            description : "post-treatment",
            id : "00", name : "y"
          }, {
            id : "00", name : "mp"
          }, {
            id : "00", name : "rp"
          }, {
            id : "00", name : "yp"
          }, {
            id : "00", name : "mrp"
          }, {
            id : "00", name : "myp"
          }, {
            id : "00", name : "ryp"
          }, {
            id : "00", name : "mryp"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "02", name : "T",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "cannot be assessed",
            id : "00", name : "TX"
          }, {
            description : "No mediastinal pleural involvement)",
            id : "00", name : "T1a"
          }, {
            description : "direct invasion of mediastinal pleura",
            id : "00", name : "T1b"
          }, {
            description : "invasion of pericardium",
            id : "00", name : "T2"
          }, {
            description : "invasion of lung brachiocephalic vein superior vena cava phrenic nerve chest wall pulmonary artery or vein",
            id : "00", name : "T3"
          }, {
            description : "Invasion of aorta, arch vessels pulmonary artery myocardium, trachea or esophagus",
            id : "00", name : "T4"
          }],
          id : "00", name : ""
        }]
        }, {
          id : "03", name : "N",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "THYMOMA",
            id : "00", name : "N (not applicable)"
          }, {
            description : "THYMIC CARCINOMA Regional lymph nodes cannot be assessed",
            id : "00", name : "NX"
          }, {
            description : "THYMIC CARCINOMA No regional lymph node metastasis",
            id : "00", name : "N0"
          }, {
            description : "THYMIC CARCINOMA Metastasis in anterior mediastinal lymph nodes",
            id : "00", name : "N1"
          }, {
            description : "THYMIC CARCINOMA Metastasis in other intrathoracic lymph nodes, excluding anterior mediastinal lymph nodes ",
            id : "00", name : "N2"
          } ],
          id : "00", name : "Category (pN)"
        }]
        }, {
          id : "04", name : "M",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "separate plerual or pericardial nodule",
            id : "00", name : "M1a"
          }, {
               description : "pulmonary intraparenchymal met or distant mets",
            id : "00", name : "M1b"
          }, {
            id : "00", name : "M (not applicable)"
          }, {
            id : "00", name : "distant metastasis not applicable"
          } ],
          id : "00", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "00", name : "Trophoblast",
      optional : false,
      organ_group : "Gynecologic",
      properties : [ {
        id : "00", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Dilation and curettage "
          }, {
            id : "00", name : "Hysterectomy"
          }, {
            id : "00", name : "Radical hysterectomy"
          }, {
            id : "00", name : "Pelvic exenteration "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [  {
            id : "00", name : "Hydatidiform mole, invasive "
          }, {
            id : "00", name : "Choriocarcinoma "
          }, {
            id : "00", name : "Placental site trophoblastic tumor "
          }, {
            id : "00", name : "Epithelioid trophoblastic tumor "
          } ],
          id : "00", name : ""
        } ]
      }, {
         description : "R/L ovary, fallopian tube, vagina, broad ligament",
        id : "00", name : "Other tissue(s) involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Not applicable"
          }, {
            description : "specify",
            inputs_required : [ "" ],
            id : "10", name : "Positive "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Free, "
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Indeterminate"
          }, {
            id : "00", name : "Suspicious"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Present, extensive"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "01", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "00", name : ""
          }, {
            description : "pathologic",
            id : "00", name : "AJCC p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "00", name : "AJCC m"
          }, {
            description : "recurrent",
            id : "00", name : "AJCC r"
          }, {
            description : "post-treatment",
            id : "00", name : "AJCC y"
          }, {
            id : "00", name : "AJCC mp"
          }, {
            id : "00", name : "AJCC rp"
          }, {
            id : "00", name : "AJCC yp"
          }, {
            id : "00", name : "AJCC mrp"
          }, {
            id : "00", name : "AJCC myp"
          }, {
            id : "00", name : "AJCC ryp"
          }, {
            id : "00", name : "AJCC mryp"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "02", name : "T",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "cannot be assessed",
            id : "00", name : "TX"
          }, {
            description : "Tumor limited to uterus",
            id : "00", name : "T1"
          }, {
            description : "Tumor extends to other genital structures (ovary, tube, vagina, broad ligaments) by metastasis or direct extension",
            id : "00", name : "T2"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "04", name : "M",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "lung metastases",
            id : "00", name : "M1a"
          }, {
            description : "all other metastases, specify # and site",
            inputs_required : [ "" ],
            id : "10", name : "M1b"
          }, {
            id : "00", name : "M (not applicable)"
          }, {
            id : "00", name : "distant metastasis not applicable"
          } ],
          id : "00", name : ""
        } ]
   
    }, {
        id : "00", name : "Stage FIGO (2015)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "Disease confined to the uterus",
            id : "00", name : "FIGO I"
          }, {
            description : "Gestational trophoblastic tumor extends outside of the uterus, but limited to the genital structures (adenexa, vagina, broad ligament)",
            id : "00", name : "FIGO II"
          }, {
            description : "Gestational trophoblastic tumor extends to the lungs, with or without known genital tract involvement",
            id : "00", name : "FIGO III"
          }, {
            description : "All other metastatic sites",
            id : "00", name : "FIGO IV"
          }, {
            description : "",
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
          } ]
      }, {
      most_common : false,
      id : "00", name : "Ureter Renal Pelvis",
      optional : false,
      organ_group : "Genitourinary",
      properties : [ {
        id : "00", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Right nephroureterectomy, partial"
          }, {
            id : "00", name : "Right nephroureterectomy, complete"
          }, {
            id : "00", name : "Right ureterectomy"
          },{
            id : "00", name : "Left nephroureterectomy, partial"
          }, {
            id : "00", name : "Left nephroureterectomy, complete"
          }, {
            id : "00", name : "Left ureterectomy"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor Location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Ureter"
          }, {
            id : "00", name : "Renal pelvis"
          }, {
            id : "00", name : "Ureter and renal pelvis"
          }, {
            id : "00", name : "Not specified"
          } ],
          id : "00", name : ""
        } ] 
  }, {
        id : "00", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Urothelial carcinoma (TCC) papillary, non invasive"
          }, {
            id : "00", name : "Urothelial carcinoma in situ"
          }, {
            id : "00", name : "Urothelial carcinoma (TCC) papillary, non invasive, and Urothelial carcinoma in situ"
          }, {
            id : "00", name : "Invasive urothelial carcinoma (TCC)"
          }, {
            id : "00", name : "Invasive urothelial carcinoma (TCC) with squamous differentiation"
          }, {
            id : "00", name : "Invasive urothelial carcinoma (TCC) with glandular differentiation"
          }, {
            id : "00", name : "Invasive urothelial carcinoma, nested "
          }, {
            id : "00", name : "Invasive urothelial carcinoma, microcystic"
          }, {
            id : "00", name : "Invasive urothelial carcinoma, lympho-epithelial"
          }, {
            id : "00", name : "Invasive urothelial carcinoma, plasmacytoid"
          }, {
            id : "00", name : "Invasive urothelial carcinoma, sarcomatoid"
          }, {
            id : "00", name : "Invasive urothelial carcinoma, giant cell"
          }, {
            id : "00", name : "Squamous cell carcinoma"
          }, {
            id : "00", name : "Squamous cell carcinoma, verrucous variant"
          }, {
            id : "00", name : "Adenocarcinoma"
          }, {
            id : "00", name : "Small cell carcinoma"
          }, {
            id : "00", name : "Large cell neuroendocrine carcinoma"
          }, {
            id : "00", name : "Well-differentiated neuroendocrine tumor (carcinoid)"
          }, {
            id : "00", name : "Paraganglioma"
          }, {
            id : "00", name : "Clear cell carcinoma"
          }, {
            id : "00", name : "Endometrioid carcinoma"
          }],
          id : "00", name : ""
        } ]
  
      }, {
        id : "00", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Low grade"
          }, {
            id : "00", name : "High grade"
          }, {
            description : "(squamous carcinoma and adenocarcinoma only",
            id : "00", name : "Grade 1/3, low grade"
          }, {
            id : "00", name : "Grade 2/3, intermediate grade"
          }, {
            id : "00", name : "Grade 3/3, high grade"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "69", name : "Noninvasive papillary carcinoma"
          }, {
            id : "60", name : "Carcinoma in situ"
          }, {
            id : "61", name : "Invades subepithelial connective tissue"
          }, {
            id : "62", name : "Invades muscularis propria"
          }, {
            id : "63", name : "Invades into peripelvic fat or the renal parenchyma"
          }, {
             description : "specify",
            inputs_required : [ "" ],
            id : "11", name : "Invades adjacent organs, or through the kidney into the perinephric fat"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Margins, invasive tumor",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Free "
          }, {
            description : "location (proximal/distal ureteral, deep)",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
         }, {
          description : "location (proximal/distal ureteral)",
        id : "00", name : "Margins, non-invasive tumor",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Free "
          }, {
            description : "location (ureteral, urethral, deep), type (papillary, CIS)",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
  
   
  
      }, {
        id : "00", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "50", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "50", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "51", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "01", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "00", name : ""
          }, {
            description : "pathologic",
            id : "00", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "00", name : "m"
          }, {
            description : "recurrent",
            id : "00", name : "r"
          }, {
            description : "post-treatment",
            id : "00", name : "y"
          }, {
            id : "00", name : "mp"
          }, {
            id : "00", name : "rp"
          }, {
            id : "00", name : "yp"
          }, {
            id : "00", name : "mrp"
          }, {
            id : "00", name : "myp"
          }, {
            id : "00", name : "ryp"
          }, {
            id : "00", name : "mryp"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "02", name : "T",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "cannot be assessed",
            id : "00", name : "TX"
          }, {
            description : "noninvasive papillary",
            id : "00", name : "Ta"
          }, {
            description : "CIS",
            id : "00", name : "Tis"
          }, {
            description : "Ta/CIS",
            id : "00", name : "Ta/Tis"
          }, {
            description : "Invades lamina propria",
            id : "00", name : "T1"
          }, {
            description : "Invades muscularis propria",
            id : "00", name : "T2"
          }, {
            description : "Invades into peripelvic fat or the renal parenchyma or periureteric fat",
            id : "00", name : "T3"
          }, {
            description : "Invades adjacent organs, or through the kidney into the perinephric fat",
            id : "00", name : "T4"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "03", name : "N",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "00", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "00", name : "N0"
          }, {
            description : " 1 regional lymph node metastasis  (not ln) <= 2cm",
            id : "00", name : "N1"
          }, {
            description : "(> 1 regional lymph node metastases) OR (1 metastasis  (not ln) > 2cm)",
            id : "00", name : "N2"
          } ],
          id : "00", name : "Category (pN)"
        }]
        }, {
          id : "04", name : "M",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "metastases",
            id : "00", name : "M1"
          }, {
            id : "00", name : "M (not applicable)"
          }, {
            id : "00", name : "distant metastasis not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
         description : "in non-neoplastic kidney, including glomerular, tubulointerstitial and vascular disease",
        id : "00", name : "Additional findings",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Nonspecific changes"         
          }, {
            id : "00", name : "Focal nonspecific chronic inflammation"
          }, {
            id : "00", name : "Focal glomerulosclerosis"
          }, {
            id : "00", name : "Interstitial nephritis"
          }, {
            id : "00", name : "Chronic pyelonephritis"
          }, {
            id : "00", name : "Acute pyelonephritis"
          }, {
            id : "00", name : "End stage kidney disease"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
        }, {
         description: "T3+ or N1+ only, otherwise NA",
        id : "00", name : "MSI IHC and Interpretation",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Intact nuclear expression of MMR proteins (MLH1, MSH2, MSH6, PMS2): No evidence of deficient mismatch repair (low probability of MSI-H)"
          },{
            id : "00", name : "Loss of nuclear expression of one or more MMR proteins (MLH1, MSH2, MSH6, PMS2): deficient mismatch repair/ high probability of microsatellite instability-high (MSI-H). The presence of MSI-H/deficient mismatch repair may also be an indication for additional testing for Lynch syndrome and genetic counselling."
          }, {
            id : "00", name : "Pending"
          }, {
            id : "00", name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            id : "10", name : "See case "
          }],
          id : "00", name : ""
        } ]
        }, {
           description : "Ventana PDL1, if squamous differentiation use that block for PDL1",
        id : "00", name : "Ancillary studies ordered",
       optional_state  : "required", "options" : [ {
          group : [ {
             description : "T1-2N0",
            id : "00", name : "None"
          }, {
             description : "T3-4 or N1",
            id : "00", name : "PDL1"
          }, {
            id : "00", name : "Pending"
          }, {
            id : "00", name : "Not applicable"
          }, {
            inputs_required : [ "" ],
            id : "10", name : "See case"
          } ],
          id : "00", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "00", name : "Urethra",
      optional : false,
      organ_group : "Genitourinary",
      properties : [  {
        id : "00", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Partial urethrectomy"
          }, {
            id : "00", name : "Total urethrectomy"
          }, {
            id : "00", name : "Urethrectomy with cystectomy"
          }, {
            id : "00", name : "Urethrectomy with cystoprostatectomy"
          }, {
            id : "00", name : "Urethrectomy with penectomy"
          }, {
            id : "00", name : "Anterior exenteration"
          } ],
          id : "00", name : ""
        } ]
      
       }, {
        id : "00", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Urothelial carcinoma (TCC) papillary, non invasive"
          }, {
            id : "00", name : "Urothelial carcinoma in situ"
          }, {
            id : "00", name : "Urothelial carcinoma (TCC) papillary, non invasive, and Urothelial carcinoma in situ"
          }, {
            id : "00", name : "Invasive urothelial carcinoma (TCC)"
          }, {
            id : "00", name : "Invasive urothelial carcinoma (TCC) with squamous differentiation"
          }, {
            id : "00", name : "Invasive urothelial carcinoma (TCC) with glandular differentiation"
          }, {
            id : "00", name : "Invasive urothelial carcinoma, nested "
          }, {
            id : "00", name : "Invasive urothelial carcinoma, microcystic"
          }, {
            id : "00", name : "Invasive urothelial carcinoma, lympho-epithelial"
          }, {
            id : "00", name : "Invasive urothelial carcinoma, plasmacytoid"
          }, {
            id : "00", name : "Invasive urothelial carcinoma, sarcomatoid"
          }, {
            id : "00", name : "Invasive urothelial carcinoma, giant cell"
          }, {
            id : "00", name : "Squamous cell carcinoma"
          }, {
            id : "00", name : "Squamous cell carcinoma, verrucous variant"
          }, {
            id : "00", name : "Adenocarcinoma"
          }, {
            id : "00", name : "Small cell carcinoma"
          }, {
            id : "00", name : "Large cell neuroendocrine carcinoma"
          }, {
            id : "00", name : "Well-differentiated neuroendocrine tumor (carcinoid)"
          }, {
            id : "00", name : "Paraganglioma"
          }, {
            id : "00", name : "Clear cell carcinoma"
          }, {
            id : "00", name : "Endometrioid carcinoma"
          }],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Low grade"
          }, {
            id : "00", name : "High grade"
          }, {
            description : "(squamous carcinoma and adenocarcinoma only",
            id : "00", name : "Grade 1/3, low grade"
          }, {
            id : "00", name : "Grade 2/3, intermediate grade"
          }, {
            id : "00", name : "Grade 3/3, high grade"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "69", name : "Noninvasive papillary carcinoma"
          }, {
            id : "60", name : "Carcinoma in situ"
          }, {
            id : "61", name : "Invades subepithelial connective tissue"
          }, {
            id : "62", name : "Invades corpus spongiosum"
          }, {
            id : "62", name : "Invades periurethral muscle"
          }, {
            id : "60", name : "Urothelial CIS involves prostatic urethra"
          }, {
            id : "60", name : "Urothelial CIS involves prostatic ducts"
          }, {
            id : "62", name : "Invades prostatic stroma"
          }, {
            id : "00", name : "Invades periprostatic fat"
          }, {
            id : "63", name : "Invades corpus cavernosum"
          }, {
            id : "63", name : "Invades beyond prostatic capsule"
          }, {
            id : "63", name : "Invades anterior vagina"
          }, {
            id : "63", name : "Invades bladder neck"
          }, {
            id : "64", name : "Invades bladder wall"
          }, {
            id : "64", name : "Invades rectum"
          }, {
            inputs_required : [ "" ],
            id : "11", name : "Invades adjacent structures"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Margins, invasive tumor",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Free "
          }, {
            description : "location (proximal, distal ,deep)",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Margins, dysplasia/CIS",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Free "
          }, {
            description : "location (proximal, distal ,deep)",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "50", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "50", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "51", name : "0" },{ id : "53", name : "1" },{ id : "54", name : "2" },{ id : "54", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "01", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "00", name : ""
          }, {
            description : "pathologic",
            id : "00", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "00", name : "m"
          }, {
            description : "recurrent",
            id : "00", name : "r"
          }, {
            description : "post-treatment",
            id : "00", name : "y"
          }, {
            id : "00", name : "mp"
          }, {
            id : "00", name : "rp"
          }, {
            id : "00", name : "yp"
          }, {
            id : "00", name : "mrp"
          }, {
            id : "00", name : "myp"
          }, {
            id : "00", name : "ryp"
          }, {
            id : "00", name : "mryp"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "02", name : "T",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "cannot be assessed",
            id : "00", name : "TX"
          }, {
            description : "noninvasive papillary or verrucous",
            id : "00", name : "Ta"
          }, {
            description : "CIS",
            id : "00", name : "Tis"
          }, {
            description : "Ta/CIS",
            id : "00", name : "Ta/Tis"
          }, {
            description : "CIS involvement of prostatic urethra  ",
            id : "00", name : "Tis pu"
          }, {
            description : "CIS involvement of prostatic ducts",
            id : "00", name : "Tis pd"
          }, {
            description : "Invades lamina propria",
            id : "00", name : "T1"
          }, {
            description : "Invades corpus spongiosum, prostate stroma, or periurethral muscle",
            id : "00", name : "T2"
          }, {
            description : "Invades corpus cavernosum, beyond prostatic capsule, anterior vagina, or bladder neck",
            id : "00", name : "T3"
          }, {
            description : "Invades adjacent organs (invasion of the bladder)",
            id : "00", name : "T4"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "03", name : "N",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "00", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "00", name : "N0"
          }, {
            description : " 1 regional lymph node metastasis",
            id : "00", name : "N1"
          }, {
            description : "> 1 regional lymph node metastases",
            id : "00", name : "N2"
          } ],
          id : "00", name : "Category (pN)"
        }]
        }, {
          id : "04", name : "M",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "metastases",
            id : "00", name : "M1"
          }, {
            id : "00", name : "M (not applicable)"
          }, {
            id : "00", name : "distant metastasis not applicable"
          } ],
          id : "00", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "00", name : "Urinary Bladder, Cystectomy",
      optional : false,
      organ_group : "Genitourinary",
      properties : [ {
        id : "00", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Partial cystectomy"
          }, {
            id : "00", name : "Total/radical cystectomy"
          }, {
            id : "00", name : "Radical cystoprostatectomy"
          }, {
            id : "00", name : "Anterior exenteration"
          } ],
          id : "00", name : ""
        } ]
       }, {
        id : "00", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Trigone"
          }, {
            id : "00", name : "Right lateral wall"
          }, {
            id : "00", name : "Left lateral wall"
          }, {
            id : "00", name : "Anterior wall"
          }, {
            id : "00", name : "Posterior wall"
          } , {
            id : "00", name : "Dome"
          }, {
            id : "00", name : "Indeterminate"
          }],
          id : "00", name : ""
        } ]  
      }, {
        id : "00", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Urothelial carcinoma (TCC) papillary, non invasive"
          }, {
            id : "00", name : "Urothelial carcinoma in situ"
          }, {
            id : "00", name : "Urothelial carcinoma (TCC) papillary, non invasive, and Urothelial carcinoma in situ"
          }, {
            id : "00", name : "Invasive urothelial carcinoma (TCC)"
          }, {
            id : "00", name : "Invasive urothelial carcinoma (TCC) with squamous differentiation"
          }, {
            id : "00", name : "Invasive urothelial carcinoma (TCC) with glandular differentiation"
          }, {
            id : "00", name : "Invasive urothelial carcinoma, nested "
          }, {
            id : "00", name : "Invasive urothelial carcinoma, microcystic"
          }, {
            id : "00", name : "Invasive urothelial carcinoma, lympho-epithelial"
          }, {
            id : "00", name : "Invasive urothelial carcinoma, plasmacytoid"
          }, {
            id : "00", name : "Invasive urothelial carcinoma, sarcomatoid"
          }, {
            id : "00", name : "Invasive urothelial carcinoma, giant cell"
          }, {
            id : "00", name : "Squamous cell carcinoma"
          }, {
            id : "00", name : "Squamous cell carcinoma, verrucous variant"
          }, {
            id : "00", name : "Adenocarcinoma"
          }, {
            id : "00", name : "Small cell carcinoma"
          }, {
            id : "00", name : "Large cell neuroendocrine carcinoma"
          }, {
            id : "00", name : "Well-differentiated neuroendocrine tumor (carcinoid)"
          }, {
            id : "00", name : "Paraganglioma"
          }, {
            id : "00", name : "Clear cell carcinoma"
          }, {
            id : "00", name : "Endometrioid carcinoma"
          }],
          id : "00", name : ""
        } ]
      
      }, {
        id : "00", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Low grade"
          }, {
            id : "00", name : "High grade"
          }, {
            description : "(squamous carcinoma and adenocarcinoma only",
            id : "00", name : "Grade 1/3, low grade"
          }, {
            id : "00", name : "Grade 2/3, intermediate grade"
          }, {
            id : "00", name : "Grade 3/3, high grade"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "69", name : "Noninvasive papillary carcinoma"
          }, {
            id : "60", name : "Carcinoma in situ"
          }, {
            id : "61", name : "Invades lamina propria"
          }, {
            id : "70", name : "Invades superficial muscularis propria (inner half)"
          }, {
            id : "71", name : "Invades deep muscularis propria (outer half)"
          }, {
            id : "72", name : "Invades perivesical tissue, microscopically"
          }, {
            id : "73", name : "Invades perivesical tissue, grossly (extravesicular mass)"
          }, {
             description : "includes prostate (consider if urethral protocol is more appropriate), seminal vesicles, uterus, vagina rectum soft tissues",
            inputs_required : [ "" ],
            id : "10", name : "Invades adjacent structures"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Margins, invasive tumor",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Free "
          }, {
            description : "location (ureteral (right and left), urethral ,deep/soft tissue)",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Margins, non-invasive tumor",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Free "
          }, {
            description : "location (ureteral, urethral, deep), type (papillary, CIS)",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
         }, {
        id : "00", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Indeterminate"
          }, {
            id : "00", name : "Suspicious"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Present, extensive"
          } ],
          id : "00", name : ""
        } ]
        
      }, {
        id : "00", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "50", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "50", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "51", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      
      }, {
        id : "01", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "00", name : ""
          }, {
            description : "pathologic",
            id : "00", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "00", name : "m"
          }, {
            description : "recurrent",
            id : "00", name : "r"
          }, {
            description : "post-treatment",
            id : "00", name : "y"
          }, {
            id : "00", name : "mp"
          }, {
            id : "00", name : "rp"
          }, {
            id : "00", name : "yp"
          }, {
            id : "00", name : "mrp"
          }, {
            id : "00", name : "myp"
          }, {
            id : "00", name : "ryp"
          }, {
            id : "00", name : "mryp"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "02", name : "T",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "cannot be assessed",
            id : "00", name : "TX"
          }, {
            description : "noninvasive papillary",
            id : "00", name : "Ta"
          }, {
            description : "CIS",
            id : "00", name : "Tis"
          }, {
            description : "Ta/CIS",
            id : "00", name : "Ta/Tis"
          }, {
            description : "Invades lamina propria",
            id : "00", name : "T1"
          }, {
            description : "Invades superficial muscularis propria (inner half)",
            id : "00", name : "T2a"
          }, {
            description : "Invades deep muscularis propria (outer half)",
            id : "00", name : "T2b"
          }, {
            description : "Invades perivesical tissue, microscopically",
            id : "00", name : "T3a"
          }, {
            description : "Invades perivesical tissue, grossly (extravesicular mass)",
            id : "00", name : "T3b"
          }, {
            description : "Invades prostatic stroma, seminal vesicles, uterus, or vagina",
            id : "00", name : "T4a"
          }, {
            description : "Invades pelvic wall or abdominal wall",
            id : "00", name : "T4b"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "03", name : "N",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "00", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "00", name : "N0"
          }, {
            description : " 1 regional lymph node metastasis",
            id : "00", name : "N1"
          }, {
            description : "> 1 regional lymph node metastases",
            id : "00", name : "N2"
          }, {
            description : ">= 1 common iliac lymph node metastases",
            id : "00", name : "N3"
          } ],
          id : "00", name : "Category (pN)"
        }]
        }, {
          id : "04", name : "M",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "metastases to non regional lymph nodes",
            id : "00", name : "M1a"
          }, {
              description : "metastases to non lymph nodes",
            id : "00", name : "M1b"
          }, {
            id : "00", name : "M (not applicable)"
          }, {
            id : "00", name : "distant metastasis not applicable"
          } ],
          id : "00", name : ""
        } ]
        }, {
         description: "T3+ or N1+ only, otherwise NA",
        id : "00", name : "MSI IHC and Interpretation",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Intact nuclear expression of MMR proteins (MLH1, MSH2, MSH6, PMS2): No evidence of deficient mismatch repair (low probability of MSI-H)"
          },{
            id : "00", name : "Loss of nuclear expression of one or more MMR proteins (MLH1, MSH2, MSH6, PMS2): deficient mismatch repair/ high probability of microsatellite instability-high (MSI-H). The presence of MSI-H/deficient mismatch repair may also be an indication for additional testing for Lynch syndrome and genetic counselling."
          }, {
            id : "00", name : "Pending"
          }, {
            id : "00", name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            id : "10", name : "See case "
          }],
          id : "00", name : ""
        } ]
        }, {
           description : "Ventana PDL1, if squamous differentiation use that block for PDL1",
        id : "00", name : "Ancillary studies ordered",
       optional_state  : "required", "options" : [ {
          group : [ {
             description : "T1-2N0",
            id : "00", name : "None"
          }, {
             description : "T3-4 or N1",
            id : "00", name : "PDL1"
          }, {
            id : "00", name : "Pending"
          }, {
            id : "00", name : "Not applicable"
          }, {
            inputs_required : [ "" ],
            id : "10", name : "See case"
          } ],
          id : "00", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "00", name : "Urinary Bladder, TUR/Biopsy",
      optional : true,
      organ_group : "Genitourinary",
      properties : [ {
        id : "00", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Bladder TUR"
          }, {
            id : "00", name : "Bladder biopsy"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor Location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Trigone"
          }, {
            id : "00", name : "Right lateral wall"
          }, {
            id : "00", name : "Left lateral wall"
          },{
            id : "00", name : "Anterior wall"
          }, {
            id : "00", name : "Posterior wall"
          }, {
            id : "00", name : "Dome"
          }, {
            id : "00", name : "Not specified"
          } ],
          id : "00", name : ""
        } ] 
  }, {
        id : "00", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Urothelial carcinoma (TCC) papillary, non invasive"
          }, {
            id : "00", name : "Urothelial carcinoma in situ"
          }, {
            id : "00", name : "Urothelial carcinoma (TCC) papillary, non invasive, and Urothelial carcinoma in situ"
          }, {
            id : "00", name : "Invasive Urothelial carcinoma (TCC)"
          }, {
            id : "00", name : "Invasive urothelial carcinoma (TCC) with squamous differentiation"
          }, {
            id : "00", name : "Invasive urothelial carcinoma (TCC) with glandular differentiation"
          }, {
            id : "00", name : "Squamous cell carcinoma"
          }, {
            id : "00", name : "Adenocarcinoma"
          }, {
            id : "00", name : "Small cell carcinoma"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Additional findings",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Papilloma"
          }, {
            id : "00", name : "Inverted papilloma"
          }, {
            id : "00", name : "PUN-LMP"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Low grade"
          }, {
            id : "00", name : "High grade"
          }, {
            description : "(squamous carcinoma and adenocarcinoma only",
            id : "00", name : "Intermediate grade"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Muscularis Propria (Adequacy)",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Equivocal"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Indeterminate"
          }, {
            id : "00", name : "Suspicious"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Present, extensive"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "69", name : "Noninvasive papillary carcinoma"
          }, {
            id : "60", name : "Carcinoma in situ"
          }, {
            id : "61", name : "Invades lamina propria"
          }, {
            id : "00", name : "Suspicious for lamina propria invasion"
          }, {
            id : "62", name : "Invades muscularis propria"
          }, {
            id : "00", name : "Invades muscle, favor muscularis mucosa"
          }, {
            id : "00", name : "Invades muscle, favor muscularis propria"
          }, {
            id : "00", name : "CIS involves prostatic urethra in prostatic chips"
          }, {
            id : "00", name : "CIS involves prostatic ducts and acini"
          }, {
            id : "67", name : "Invades prostatic stroma"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "01", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "00", name : ""
          }, {
            description : "pathologic",
            id : "00", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "00", name : "m"
          }, {
            description : "recurrent",
            id : "00", name : "r"
          }, {
            description : "post-treatment",
            id : "00", name : "y"
          }, {
            id : "00", name : "mp"
          }, {
            id : "00", name : "rp"
          }, {
            id : "00", name : "yp"
          }, {
            id : "00", name : "mrp"
          }, {
            id : "00", name : "myp"
          }, {
            id : "00", name : "ryp"
          }, {
            id : "00", name : "mryp"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "02", name : "T",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "cannot be assessed",
            id : "00", name : "TX"
          }, {
            description : "noninvasive papillary",
            id : "00", name : "Ta"
          }, {
            description : "noninvasive papillary, no muscularis propria",
            id : "00", name : " at least Ta"
          }, {
            description : "CIS",
            id : "00", name : "Tis"
          }, {
            description : "CIS, no muscularis propria",
            id : "00", name : "at least Tis"
          }, {
            description : "Ta/CIS",
            id : "00", name : "Ta/Tis"
          }, {
            description : "Ta/CIS no muscluaris propria",
            id : "00", name : "at least Ta/Tis"
          }, {
            description : "Invades lamina propria",
            id : "00", name : "T1"
          }, {
            description : "Suspicious for lamina propria invasion",
            id : "00", name : "Ta-1"
          }, {
            description : "Invades lamina propria, no muscularis propria",
            id : "00", name : " at least T1"
          }, {
            description : "Invades superficial muscularis propria (inner half)",
            id : "00", name : "T2"
          }, {
            description : "Invades prostatic stroma",
            id : "00", name : "T4a"
          } ],
          id : "00", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "00", name : "Uterine Sarcoma",
      optional : false,
      organ_group : "Gynecologic",
      properties : [ {
        id : "00", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Myomectomy"
          }, {
            id : "00", name : "Supracervical hysterectomy"
          }, {
            id : "00", name : "Simple hysterectomy"
          }, {
            id : "00", name : "Radical hysterectomy"
          }, {
            id : "00", name : "Supracervical hysterectomy and right salpingo-oophorectomy"
          }, {
            id : "00", name : "Simple hysterectomy and right salpingo-oophorectomy"
          }, {
            id : "00", name : "Radical hysterectomy and right salpingo-oophorectomy"
          }, {
            id : "00", name : "Supracervical hysterectomy and left salpingo-oophorectomy"
          }, {
            id : "00", name : "Simple hysterectomy and left salpingo-oophorectomy"
          }, {
            id : "00", name : "Radical hysterectomy and left salpingo-oophorectomy"
          }, {
            id : "00", name : "Supracervical hysterectomy and bilateral salpingo-oophorectomy"
          }, {
            id : "00", name : "Simple hysterectomy and bilateral salpingo-oophorectomy"
          }, {
            id : "00", name : "Radical hysterectomy and bilateral salpingo-oophorectomy"
          }, {
            id : "00", name : "Supracervical hysterectomy, bilateral salpingo-oophorectomy and omentectomy"
          }, {
            id : "00", name : "Simple hysterectomy, bilateral salpingo-oophorectomy and omentectomy"
          }, {
            id : "00", name : "Radical hysterectomy, bilateral salpingo-oophorectomy and omentectomy"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Specimen integrity",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Not applicable"
          }, {
            id : "00", name : "Intact"
          }, {
            id : "00", name : "Morcellated"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Leiomyosarcoma"
          }, {
            id : "00", name : "Low-grade endometrial stromal sarcoma"
          }, {
            id : "00", name : "Low-grade endometrial stromal sarcoma with smooth muscle differentiation "
          }, {
            id : "00", name : "Low-grade endometrial stromal sarcoma with sex cord elements"
          }, {
            id : "00", name : "Low-grade endometrial stromal sarcoma with glandular elements"
          }, {
            id : "00", name : "High-grade endometrial stromal sarcoma"
          }, {
            id : "00", name : "Undifferentiated uterine/endometrial sarcoma"
          }, {
            id : "00", name : "Adenosarcoma"
          }, {
            id : "00", name : "Adenosarcoma with rhabdomyoblastic differentiation"
          }, {
            id : "00", name : "Adenosarcoma with cartilaginous differentiation"
          }, {
            id : "00", name : "Adenosarcoma with osseous differentiation"
          }, {
            id : "00", name : "Adenosarcoma with sarcomatous overgrowth"
          } ],
          id : "00", name : ""
        } ]
      }, {
         description : "only for adenosarcoma",
        id : "00", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Not applicable"
          }, {
            id : "00", name : "Low grade"
          }, {
            id : "00", name : "High grade"
          }, {
            id : "00", name : "With sarcomatous overgrowth"
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "only for adenosarcoma",
        id : "00", name : "Myometrial Invasion ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Tumor is limited to the endometrium or cervical surface without myometrial invasion"
          }, {
            id : "00", name : "Tumor invades less than or equal to 50% of myometrial thickness"
          }, {
            id : "00", name : "Tumor invades greater than 50% myometrial thickness"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
         description : "R/L ovary, fallopian tube, vagina, parametrium, pelvic wall omentum",
        id : "00", name : "Other tissue(s) involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Free, "
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Indeterminate"
          }, {
            id : "00", name : "Suspicious"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Present, extensive"
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "includes pelvic, parametrial, obturator, internal iliac (hypogastric), external iliac, common iliac, sacral, presacral and para-aortic",
        id : "00", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "50", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "50", name : "Lymph nodes, # involved (no ITC)",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "0" },{ id : "53", name : "1" },{ id : "53", name : "2" },{ id : "53", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "50", name : "Lymph nodes, # with isolated tumor cells",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "50", name : "Positive lymph node location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "01", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "00", name : ""
          }, {
            description : "pathologic",
            id : "00", name : "AJCC p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "00", name : "AJCC m"
          }, {
            description : "recurrent",
            id : "00", name : "AJCC r"
          }, {
            description : "post-treatment",
            id : "00", name : "AJCC y"
          }, {
            id : "00", name : "AJCC mp"
          }, {
            id : "00", name : "AJCC rp"
          }, {
            id : "00", name : "AJCC yp"
          }, {
            id : "00", name : "AJCC mrp"
          }, {
            id : "00", name : "AJCC myp"
          }, {
            id : "00", name : "AJCC ryp"
          }, {
            id : "00", name : "AJCC mryp"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "02", name : "T",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "cannot be assessed",
            id : "00", name : "TX"
          }, {
            description : "SARCOMA Tumor is 5 cm or less (≤5 cm) in greatest dimension ",
            id : "00", name : "T1a"
          }, {
            description : "SARCOMA Tumor is greater than 5 cm (>5 cm) in greatest dimension",
            id : "00", name : "T1b"
          }, {
            description : "SARCOMA Tumor involves the adnexa",
            id : "00", name : "T2a"
          }, {
            description : "SARCOMA Tumor involves other pelvic tissue",
            id : "00", name : "T2b"
          }, {
            description : "SARCOMA Tumor invades abdominal tissues at one site ",
            id : "00", name : "T3a"
          }, {
            description : "SARCOMA Tumor invades abdominal tissues at more than one site ",
            id : "00", name : "T3b"
          }, {
            description : "SARCOMA Tumor invades bladder mucosa and/or rectum ",
            id : "00", name : "T4"
          }, {
            description : "ADENOSARCOMA Tumor is limited to the endometrium/endocervix without myometrial invasion ",
            id : "00", name : "T1a"
          }, {
            description : "ADENOSARCOMA Tumor invades less than or equal to 50% (≤50%) total myometrial thickness",
            id : "00", name : "T1b"
          }, {
            description : "ADENOSARCOMA Tumor invades greater than 50% (>50%) total myometrial thickness",
            id : "00", name : "T1c"
          }, {
            description : "ADENOSARCOMA Tumor involves the adnexa",
            id : "00", name : "T2a"
          }, {
            description : "ADENOSARCOMA Tumor involves other pelvic tissue",
            id : "00", name : "T2b"
          }, {
            description : "ADENOSARCOMA  Tumor invades abdominal tissues at one site",
            id : "00", name : "T3a"
          }, {
            description : "ADENOSARCOMA  Tumor invades abdominal tissues at more than one site",
            id : "00", name : "T3b"
          }, {
            description : "ADENOSARCOMA  Tumor invades bladder mucosa and/or rectum",
            id : "00", name : "T4"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "03", name : "N",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "00", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "00", name : "N0"
          }, {
            description : "Isolated tumor cells, <=0.2mm",
            id : "00", name : "N0(i+)"
          }, {
            description : "regional lymph node metastasis",
            id : "00", name : "N1"
          } ],
          id : "00", name : "Category (pN)"
        }]
        }, {
          id : "04", name : "M",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "metastases",
            id : "00", name : "M1"
          }, {
            id : "00", name : "M (not applicable)"
          }, {
            id : "00", name : "distant metastasis not applicable"
          } ],
          id : "00", name : ""
        } ]
   
    }, {
        id : "00", name : "Stage FIGO (2015)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "Tumor limited to uterus, Less than or equal to 5 cm",
            id : "00", name : "FIGO IA"
          }, {
            description : "Tumor limited to uterus, More than 5 cm",
            id : "00", name : "FIGO IB"
          }, {
            description : "Adnexal involvement",
            id : "00", name : "FIGO IIA"
          }, {
            description : "Involvement of other pelvic tissues",
            id : "00", name : "FIGO IIB"
          }, {
            description : "Tumor invades abdominal tissues (not just protruding into the abdomen)1 site",
            id : "00", name : "FIGO IIIA"
          }, {
            description : "Tumor invades abdominal tissues (not just protruding into the abdomen)More than 1 site",
            id : "00", name : "FIGO IIIB"
          }, {
            description : "Tumor invades abdominal tissues (not just protruding into the abdomen)Metastasis to pelvic and/or para-aortic lymph nodes",
            id : "00", name : "FIGO IIIC"
          }, {
            description : " Tumor invades bladder and/or rectal mucosa    ",
            id : "00", name : "FIGO IVA"
          }, {
            description : "Distant metastasis",
            id : "00", name : "FIGO IVB"
          }, {
            description : "ADENOSARCOMA Tumor limited to endometrium/endocervix with no myometrial invasion",
            id : "00", name : "FIGO IA"
          }, {
            description : "ADENOSARCOMA Less than or equal to half myometrial invasion",
            id : "00", name : "FIGO IB"
          }, {
            description : "ADENOSARCOMA More than half myometrial invasion",
            id : "00", name : "FIGO IC"
          }, {
            description : "ADENOSARCOMA Adnexal involvement",
            id : "00", name : "FIGO IIA"
          }, {
            description : "ADENOSARCOMA Tumor extends to extrauterine pelvic tissue",
            id : "00", name : "FIGO IIB"
          }, {
            description : "ADENOSARCOMA Tumor invades abdominal tissues (not just protruding into the abdomen)1 site",
            id : "00", name : "FIGO IIIA"
          }, {
            description : "ADENOSARCOMA Tumor invades abdominal tissues (not just protruding into the abdomen)More than 1 site",
            id : "00", name : "FIGO IIIB"
          }, {
            description : "ADENOSARCOMA Tumor invades abdominal tissues (not just protruding into the abdomen)Metastasis to pelvic and/or para-aortic lymph nodes",
            id : "00", name : "FIGO IIIC"
          }, {
            description : " ADENOSARCOMA  Tumor invades bladder and/or rectal mucosa  ",
            id : "00", name : "FIGO IVA"
          }, {
            description : "ADENOSARCOMA Distant metastasis",
            id : "00", name : "FIGO IVB"
          }, {
            description : "",
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
          } ]
      }, {
      most_common : false,
      id : "00", name : "Uveal melanoma",
      optional : false,
      organ_group : "Ophthalmic",
      properties : [ {
        id : "00", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Right local resection"
          }, {
            id : "00", name : "Right enucleation"
          }, {
            id : "00", name : "Right limited exenteration"
          }, {
            id : "00", name : "Right complete exenteration"
          },{
            id : "00", name : "Left local resection"
          }, {
            id : "00", name : "Left enucleation"
          }, {
            id : "00", name : "Left limited exenteration"
          }, {
            id : "00", name : "Left complete exenteration"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Superotemporal quadrant of globe"
          }, {
            id : "00", name : "Superonasal quadrant of globe"
          }, {
            id : "00", name : "Inferotemporal quadrant of globe"
          }, {
            id : "00", name : "Inferonasal quadrant of globe"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor size after sectioning",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Equivocal"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor location after sectioning",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Superotemporal"
          }, {
            id : "00", name : "Superonasal"
          }, {
            id : "00", name : "Inferotemporal"
          }, {
            id : "00", name : "Inferonasal"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor Involvement of Other Ocular Structures ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Sclera"
          }, {
            id : "00", name : "Vortex vein(s)"
          }, {
            id : "00", name : "Optic disc"
          }, {
            id : "00", name : "Vitreous "
          }, {
            id : "00", name : "Choroid"
          }, {
            id : "00", name : "Ciliary body"
          }, {
            id : "00", name : "Iris "
          }, {
            id : "00", name : "Lens"
          }, {
            id : "00", name : "Anterior chamber"
          }, {
            id : "00", name : "Extrascleral extension (anterior)"
          }, {
            id : "00", name : "Extrascleral extension (posterior) "
          }, {
            id : "00", name : "Angle/Schlemm’s canal"
          }, {
            id : "00", name : "Optic nerve"
          }, {
            id : "00", name : "Retina"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Growth Pattern ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Solid mass "
          }, {
            id : "00", name : "Dome shape"
          }, {
            id : "00", name : "Mushroom shape"
          }, {
            id : "00", name : "Diffuse (ciliary body ring)"
          }, {
            id : "00", name : "Diffuse (flat)"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : ">90% spindle cells",
            id : "00", name : "Spindle cell melanoma"
          }, {
            description : ">10% epithelioid cells and <90% spindle cells",
            id : "00", name : "Mixed cell melanoma "
          }, {
            description : ">90% epithelioid cells",
            id : "00", name : "Epithelioid cell melanoma "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Extention",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Intrascleral"
          }, {
            id : "00", name : "Extrascleral, 5 or less mm"
          }, {
            id : "00", name : "Extrascleral, more than 5 mm"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Free "
          }, {
            description : "for enucleation specimens",
            id : "00", name : "Positive extrascleral extension"
          }, {
            id : "00", name : "Equivocal"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "50", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "50", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "51", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "01", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "00", name : ""
          }, {
            description : "pathologic",
            id : "00", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "00", name : "m"
          }, {
            description : "recurrent",
            id : "00", name : "r"
          }, {
            description : "post-treatment",
            id : "00", name : "y"
          }, {
            id : "00", name : "mp"
          }, {
            id : "00", name : "rp"
          }, {
            id : "00", name : "yp"
          }, {
            id : "00", name : "mrp"
          }, {
            id : "00", name : "myp"
          }, {
            id : "00", name : "ryp"
          }, {
            id : "00", name : "mryp"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "02", name : "T",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "cannot be assessed",
            id : "00", name : "TX"
          }, {
            description : "IRIS TUMOR Tumor limited to the iris not more than 3 clock hours in size",
            id : "00", name : "T1a"
          }, {
            description : "IRIS TUMOR Tumor limited to the iris more than 3 clock hours in size",
            id : "00", name : "T1b"
          }, {
            description : "IRIS TUMOR Tumor limited to the iris with secondary glaucoma",
            id : "00", name : "T1c"
          }, {
            description : "IRIS TUMOR Tumor confluent with or extending into the ciliary body, choroid, or both",
            id : "00", name : "T2"
          }, {
            description : "IRIS TUMOR Tumor confluent with or extending into the ciliary body, choroid, or both, with secondary glaucoma",
            id : "00", name : "T2a"
          }, {
            description : "IRIS TUMOR Tumor confluent with or extending into the ciliary body, choroid, or both, with scleral extension",
            id : "00", name : "T3"
          }, {
            description : "IRIS TUMOR Tumor confluent with or extending into the ciliary body, choroid, or both, with scleral extension and secondary glaucoma",
            id : "00", name : "T3a"
          }, {
            description : "IRIS TUMOR Tumor with extrascleral extension less than or equal to 5 mm in diameter",
            id : "00", name : "T4a"
          }, {
            description : "IRIS TUMOR Tumor with extrascleral extension more than 5 mm in diameter",
            id : "00", name : "T4b"
          }, {
            description : "CILIARY BODY AND CHOROID Tumor size category 1 without ciliary body involvement and extraocular extension",
            id : "00", name : "T1a"
          }, {
            description : "CILIARY BODY AND CHOROID Tumor size category 1 with ciliary body involvement",
            id : "00", name : "T1b"
          }, {
            description : "CILIARY BODY AND CHOROID Tumor size category 1 without ciliary body involvement but with extraocular extension less than or equal to 5 mm in diameter",
            id : "00", name : "T1c"
          }, {
            description : "CILIARY BODY AND CHOROID Tumor size category 1 with ciliary body involvement and extraocular extension less than or equal to 5 mm in diameter",
            id : "00", name : "T1d"
          }, {
            description : "CILIARY BODY AND CHOROID Tumor size category 2 without ciliary body involvement and extraocular extension",
            id : "00", name : "T2a"
          }, {
            description : "CILIARY BODY AND CHOROID Tumor size category 2 with ciliary body involvement",
            id : "00", name : "T2b"
          }, {
            description : "CILIARY BODY AND CHOROID Tumor size category 2 without ciliary body involvement but with extraocular extension less than or equal to 5 mm in diameter",
            id : "00", name : "T2c"
          }, {
            description : "CILIARY BODY AND CHOROID Tumor size category 2 with ciliary body involvement and extraocular extension less than or equal to 5 mm in diameter",
            id : "00", name : "T2d"
          }, {
            description : "CILIARY BODY AND CHOROID Tumor size category 3 without ciliary body involvement and extraocular extension",
            id : "00", name : "T3a"
          }, {
            description : "CILIARY BODY AND CHOROID Tumor size category 3 with ciliary body involvement",
            id : "00", name : "T3b"
          }, {
            description : "CILIARY BODY AND CHOROID Tumor size category 3 without ciliary body involvement but with extraocular extension less than or equal to 5 mm in diameter",
            id : "00", name : "T3c"
          }, {
            description : "CILIARY BODY AND CHOROID Tumor size category 3 with ciliary body involvement and extraocular extension less than or equal to 5 mm in diameter",
            id : "00", name : "T3d"
          }, {
            description : "CILIARY BODY AND CHOROID Tumor size category 4 without ciliary body involvement and extraocular extension",
            id : "00", name : "T4a"
          }, {
            description : "CILIARY BODY AND CHOROID Tumor size category 4 with ciliary body involvement",
            id : "00", name : "T4b"
          }, {
            description : "CILIARY BODY AND CHOROID Tumor size category 4 without ciliary body involvement but with extraocular extension less than or equal to 5 mm in diameter",
            id : "00", name : "T4c"
          }, {
            description : "CILIARY BODY AND CHOROID Tumor size category 4 with ciliary body involvement and extraocular extension less than or equal to 5 mm in diameter",
            id : "00", name : "T4d"
          }, {
            description : "CILIARY BODY AND CHOROID Any tumor size category with extraocular extension more than 5 mm in diameter",
            id : "00", name : "T4e"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "03", name : "N",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "00", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "00", name : "N0"
          }, {
            description : "Regional lymph node involvement",
            id : "00", name : "N1a"
          }, {
            description : "Tumor deposits in the orbit, no regional lymph node involvement (choroidal and ciliary body)",
            id : "00", name : "N1b"
          } ],
          id : "00", name : "Category (pN)"
        }]
        }, {
          id : "04", name : "M",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Largest diameter of the largest metastasis 3 cm or less",
            id : "00", name : "M1a"
          }, {
            description : "Largest diameter of the largest metastasis 3.1-8.0 cm",
            id : "00", name : "M1b"
          }, {
            description : "Largest diameter of the largest metastasis 8.1 cm or more",
            id : "00", name : "M1c"
          }, {
            id : "00", name : "M (not applicable)"
          }, {
            id : "00", name : "distant metastasis not applicable"
          } ],
          id : "00", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "00", name : "Vagina",
      optional : false,
      organ_group : "Gynecologic",
      properties : [  {
        id : "00", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Excisional biopsy"
          }, {
            id : "00", name : "Partial vaginectomy"
          }, {
            id : "00", name : "Radical vaginectomy"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Upper third"
          }, {
            id : "00", name : "Middle third"
          }, {
            id : "00", name : "Lower third"
          }, {
            id : "00", name : "Not specified"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Squamous cell carcinoma"
          }, {
            id : "00", name : "Squamous cell carcinoma, keratinizing "
          }, {
            id : "00", name : "Squamous cell carcinoma, non-keratinizing "
          }, {
            id : "00", name : "Squamous cell carcinoma, basaloid "
          }, {
            id : "00", name : "Squamous cell carcinoma, warty "
          }, {
            id : "00", name : "Squamous cell carcinoma, verrucous "
          }, {
            id : "00", name : "Paget disease "
          }, {
            id : "00", name : "Adenocarcinoma"
          }, {
            id : "00", name : "Clear cell adenocarcinoma"
          }, {
            id : "00", name : "Endometrioid adenocarcinoma "
          }, {
            id : "00", name : "Mucinous adenocarcinoma "
          }, {
            id : "00", name : "Mesonephric adenocarcinoma "
          }, {
            id : "00", name : "Intestinal type adenocarcinoma "
          }, {
            id : "00", name : "Adenosquamous carcinoma"
          }, {
            id : "00", name : "Small cell carcinoma"
          }, {
            id : "00", name : "Large cell neuroendocrine carcinoma"
          }, {
            id : "00", name : "Undifferentiated carcinoma"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Grade 1/4, Well differentiated"
          }, {
            id : "00", name : "Grade 2/4, Moderately differentiated"
          }, {
            id : "00", name : "Grade 3/4, Poorly differentiated"
          }, {
            id : "00", name : "Grade 4/4, Undifferentiated"
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "paravaginal tissue, pelvic sidewall, vagina lower third, bladder mucosa, rectal mucosa",
        id : "00", name : "Other tissue(s) involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "peripheral, deep",
        id : "00", name : "Margins, invasive tumor",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Free "
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "peripheral",
        id : "00", name : "Margins, HSIL",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Free "
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Indeterminate"
          }, {
            id : "00", name : "Suspicious"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Present, extensive"
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "includes : For upper two-thirds of the vagina, the following are considered regional lymph nodes: pelvic, parametrial, obturator, internal iliac (hypogastric), external iliac, common iliac, sacral, presacral, and para-aortic. For lower third of the vagina, the following are considered regional lymph nodes: inguinal and femoral",
        id : "00", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "50", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "50", name : "Lymph nodes, # involved (no ITC)",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "0" },{ id : "53", name : "1" },{ id : "53", name : "2" },{ id : "53", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "50", name : "Lymph nodes, # with isolated tumor cells",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "50", name : "Positive lymph node location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "01", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "00", name : ""
          }, {
            description : "pathologic",
            id : "00", name : "AJCC p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "00", name : "AJCC m"
          }, {
            description : "recurrent",
            id : "00", name : "AJCC r"
          }, {
            description : "post-treatment",
            id : "00", name : "AJCC y"
          }, {
            id : "00", name : "AJCC mp"
          }, {
            id : "00", name : "AJCC rp"
          }, {
            id : "00", name : "AJCC yp"
          }, {
            id : "00", name : "AJCC mrp"
          }, {
            id : "00", name : "AJCC myp"
          }, {
            id : "00", name : "AJCC ryp"
          }, {
            id : "00", name : "AJCC mryp"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "02", name : "T",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "cannot be assessed",
            id : "00", name : "TX"
          }, {
            description : "Carcinoma in situ",
            id : "00", name : "Tis"
          }, {
            description : "<= 2cm AND Tumor limited to vaginal wall",
            id : "00", name : "T1a"
          }, {
            description : "> 2 cm AND Tumor limited to vaginal wall",
            id : "00", name : "T1b"
          }, {
            description : "<= 2cm AND Tumor invades paravaginal tissues but not the pelvic wall",
            id : "00", name : "T2a"
          }, {
            description : "> 2 cm AND Tumor invades paravaginal tissues but not the pelvic wall",
            id : "00", name : "T2b"
          }, {
            description : "Tumor extends to pelvic wall",
            id : "00", name : "T3"
          }, {
            description : "Tumor invades mucosa of bladder or rectum and/or extends beyond true pelvis",
            id : "00", name : "T4"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "03", name : "N",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "00", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "00", name : "N0"
          }, {
            description : "Isolated tumor cells, <=0.2mm",
            id : "00", name : "N0(i+)"
          }, {
            description : "Regional lymph node metastases",
            id : "00", name : "N1"
          } ],
          id : "00", name : "Category (pN)"
        }]
        }, {
          id : "04", name : "M",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "metastases",
            id : "00", name : "M1"
          }, {
            id : "00", name : "M (not applicable)"
          }, {
            id : "00", name : "distant metastasis not applicable"
          } ],
          id : "00", name : ""
        } ]
  
    }, {
        id : "00", name : "Stage FIGO (2015)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "Carcinoma is limited to the vaginal wall",
            id : "00", name : "FIGO I"
          }, {
            description : "Carcinoma has involved the para-vaginal tissue but has not extended to the pelvic wall",
            id : "00", name : "FIGO II"
          }, {
            description : "Carcinoma has extended to the pelvic wall and/or involving the lower third of the vagina and/or causing hydronephrosis or nonfunctioning kidney",
            id : "00", name : "FIGO III"
          }, {
            description : "Tumor invades bladder and/or rectal mucosa and/or direct extension beyond the true pelvis",
            id : "00", name : "FIGO IVA"
          }, {
            description : "Spread to distant organs",
            id : "00", name : "FIGO IVB"
          }, {
            description : "",
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
           } ]
      }, {
      most_common : false,
      id : "00", name : "Vulva",
      optional : false,
      organ_group : "Gynecologic",
      properties : [  {
        id : "00", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Local excision"
          }, {
            id : "00", name : "Wide excision"
          }, {
            id : "00", name : "Partial vulvectomy"
          }, {
            id : "00", name : "Total vulvectomy "
          }, {
            id : "00", name : "Radical vulvectomy"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Right vulva"
          }, {
            id : "00", name : "Left vulva"
          }, {
            id : "00", name : "Clitoris"
          }, {
            id : "00", name : "Not specified"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor Focality",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Single focus"
          }, {
            id : "00", name : "Multiple foci"
          }, {
            id : "00", name : "Equivocal"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Squamous cell carcinoma"
          }, {
            id : "00", name : "Superficial invasive squamous cell carcinoma (SISSCA)"
          }, {
            id : "00", name : "Squamous cell carcinoma, keratinizing "
          }, {
            id : "00", name : "Squamous cell carcinoma, non-keratinizing "
          }, {
            id : "00", name : "Squamous cell carcinoma, basaloid "
          }, {
            id : "00", name : "Squamous cell carcinoma, warty "
          }, {
            id : "00", name : "Squamous cell carcinoma, verrucous "
          }, {
            id : "00", name : "Paget disease "
          }, {
            id : "00", name : "Adenocarcinoma"
          }, {
            id : "00", name : "Adenoid cystic carcinoma"
          }, {
            id : "00", name : "Adenosquamous carcinoma "
          }, {
            id : "00", name : "Transitional cell carcinoma "
          }, {
            id : "00", name : "Adenocarcinoma of mammary gland type "
          }, {
            id : "00", name : "Adenocarcinoma of Skene gland origin "
          }, {
            id : "00", name : "Malignant sweat gland tumor"
          }, {
            id : "00", name : "Small cell carcinoma"
          }, {
            id : "00", name : "Large cell neuroendocrine carcinoma"
          }, {
            id : "00", name : "Merkel cell carcinoma"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Grade 1/4, Well differentiated"
          }, {
            id : "00", name : "Grade 2/4, Moderately differentiated"
          }, {
            id : "00", name : "Grade 3/4, Poorly differentiated"
          }, {
            id : "00", name : "Grade 4/4, Undifferentiated"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Depth of invasion",
       optional_state  : "required", "options" : [ {
          id : "00", name : ""
        } ]
      }, {
        description : "vagina lower third, vagina upper two thirds, urethra lower third, urethra upper two thirds, anus, bladder mucosa, rectal mucosa, pelvic bone",
        id : "00", name : "Other tissue(s) involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
         description : "peripheral, deep",
        id : "00", name : "Margins, invasive tumor",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Free "
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
         description : "peripheral",
        id : "00", name : "Margins, HSIL/Pagets",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Free "
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "10", name : "Positive, "
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Indeterminate"
          }, {
            id : "00", name : "Suspicious"
          }, {
            id : "00", name : "Present"
          }, {
            id : "00", name : "Present, extensive"
          } ],
          id : "00", name : ""
        } ]
      }, {
        
        id : "00", name : "Lymph nodes, # sentinel",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "includes inguinal, femoral ",
        id : "00", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "50", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
       
        id : "50", name : "Lymph nodes, # w/ mets >= 5mm",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
       
        id : "50", name : "Lymph nodes, # w/ mets >0.2mm, < 5mm",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        description : "<= 0.2mm",
        id : "50", name : "Lymph nodes, # w/ isolated tumor cells",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "50", name : "Location of largest deposit",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "50", name : "Lymph node other findings",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Not applicable"
          }, {
            id : "00", name : "None"
          }, {
            id : "00", name : "Extranodal extension"
          }, {
            id : "00", name : "Fixed or Ulcerated nodes"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "01", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "00", name : ""
          }, {
            description : "pathologic",
            id : "00", name : "AJCC p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "00", name : "AJCC m"
          }, {
            description : "recurrent",
            id : "00", name : "AJCC r"
          }, {
            description : "post-treatment",
            id : "00", name : "AJCC y"
          }, {
            id : "00", name : "AJCC mp"
          }, {
            id : "00", name : "AJCC rp"
          }, {
            id : "00", name : "AJCC yp"
          }, {
            id : "00", name : "AJCC mrp"
          }, {
            id : "00", name : "AJCC myp"
          }, {
            id : "00", name : "AJCC ryp"
          }, {
            id : "00", name : "AJCC mryp"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "02", name : "T",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "cannot be assessed",
            id : "00", name : "TX"
          }, {
            description : "High-grade squamous intraepithelial lesion (carcinoma in situ, VIN 2-3, preinvasive carcinoma)",
            id : "00", name : "Tis"
          }, {
            description : "Lesions 2 cm or less in size, limited to the vulva or perineum, and with stromal invasion 1.0 mm or less",
            id : "00", name : "T1a"
          }, {
            description : "Lesions more than 2 cm in size or any size with stromal invasion more than 1.0 mm, limited to the vulva or perineum",
            id : "00", name : "T1b"
          }, {
            description : "Tumor of any size with extension to adjacent perineal structures (lower/distal one-third urethra, lower/distal one-third vagina, anal involvement)",
            id : "00", name : "T2"
          }, {
            description : "Tumor of any size with extension to any of the following: upper/proximal two-thirds of urethra, upper/proximal two-thirds vagina, bladder mucosa, rectal mucosa, or fixed to pelvic bone",
            id : "00", name : "T3"
          } ],
          id : "00", name : ""
        }]
        }, {
          id : "03", name : "N",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "00", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "00", name : "N0"
          }, {
            description : "1 or 2 lymph node metastasis  (not ln) all 5 mm or less",
            id : "00", name : "N1a"
          }, {
            description : "1 lymph node metastasis (not ln) 5 mm or greater",
            id : "00", name : "N1b"
          }, {
            description : "3 or more lymph node metastases  (not ln) all less than 5 mm",
            id : "00", name : "N2a"
          }, {
            description : "2 or more lymph node metastases (not ln) one of which is 5 mm or greater ",
            id : "00", name : "N2b"
          }, {
            description : "Lymph node metastasis with extracapsular extension",
            id : "00", name : "N2c"
          }, {
            description : "Fixed or ulcerated regional lymph node metastasis",
            id : "00", name : "N3"
          } ],
          id : "00", name : "Category (pN)"
        }]
        }, {
          id : "04", name : "M",
           optional_state  : "required", "options" : [ {
          group : [ {
            description : "metastases",
            id : "00", name : "M1"
          }, {
            id : "00", name : "M (not applicable)"
          }, {
            id : "00", name : "distant metastasis not applicable"
          } ],
          id : "00", name : ""
        } ]
  
    }, {
        id : "00", name : "Stage FIGO (2015)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "Lesions ≤2 cm in size, confined to the vulva or perineum and with stromal invasion ≤1.0 mm, no nodal metastasis",
            id : "00", name : "FIGO IA"
          }, {
            description : "Lesions >2 cm in size or with stromal invasion >1.0 mm, confined to the vulva and/or perineum, with negative nodes",
            id : "00", name : "FIGO IB"
          }, {
            description : "Tumor of any size with extension to adjacent perineal structures (lower third of urethra, lower third of vagina, anus) with negative nodes",
            id : "00", name : "FIGO II"
          }, {
            description : "With 1 lymph node metastasis (≥5 mm) OR With 1 to 2 lymph node metastasis(es) (<5 mm)",
            id : "00", name : "FIGO IIIA"
          }, {
            description : "With 2 or more lymph node metastases (≥5 mm) OR With 3 or more lymph node metastases (<5 mm)",
            id : "00", name : "FIGO IIIB"
          }, {
            description : "With positive nodes with extracapsular spread",
            id : "00", name : "FIGO IIIC"
          }, {
            description : "Tumor invades any of the following: upper urethral and/or vaginal mucosa, bladder mucosa, rectal mucosa, or fixed to pelvic bone, or fixed or ulcerated inguinofemoral lymph nodes",
            id : "00", name : "FIGO IVA"
          }, {
            description : "Any distant metastasis including pelvic lymph nodes",
            id : "00", name : "FIGO IVB"
          }, {
            description : "",
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
           } ]
      }, {
        most_common : false,
        id : "00", name : "Wilms tumor, biopsy",
        optional : true,
        organ_group : "Pediatric",
        properties : [ {
          id : "00", name : "Procedure",
         optional_state  : "required", "options" : [ {
            group : [ {
              id : "00", name : "Right Core biopsy"
            }, {
              id : "00", name : "Right Incisional biopsy"
            },{
              id : "00", name : "Left Core biopsy"
            }, {
              id : "00", name : "Left Incisional biopsy "
            } ],
            id : "00", name : ""
          } ]
        }, {
          id : "00", name : "Type",
         optional_state  : "required", "options" : [ {
            group : [ {
              id : "00", name : "Wilms tumor, favorable histology"
            }, {
              id : "00", name : "Wilms tumor, focal anaplasia "
            }, {
              id : "00", name : "Wilms tumor, diffuse anaplasia "
            }, {
              id : "00", name : "Nephrogenic rest only"
            }, {
              id : "00", name : "Congenital mesoblastic nephroma, classical, cellular or mixed"
            }, {
              id : "00", name : "Clear cell sarcoma "
            }, {
              id : "00", name : "Rhabdoid tumor"
            } ],
            id : "00", name : ""
          } ]
        }   ]
      }, {
      most_common : false,
      id : "00", name : "Wilms tumor, resection",
      optional : false,
      organ_group : "Pediatric",
      properties : [ {
        id : "00", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Right partial nephrectomy"
          }, {
            id : "00", name : "Right radical nephrectomy "
          },{
            id : "00", name : "Left partial nephrectomy"
          }, {
            id : "00", name : "Left radical nephrectomy "
          },{
            id : "00", name : "Bilateral partial nephrectomy"
          }, {
            id : "00", name : "Bilateral radical nephrectomy "
          },{
            id : "00", name : "Horseshoe, midline partial nephrectomy"
          }, {
            id : "00", name : "Horseshoe midline radical nephrectomy "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Specimen weight",
       optional_state  : "required", "options" : [ {
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Tumor Focality",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Single focus"
          }, {
            id : "00", name : "Multiple foci "
          } ],
          id : "00", name : ""
        } ]
      },{
        id : "00", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Wilms tumor, favorable histology"
          }, {
            id : "00", name : "Wilms tumor, focal anaplasia "
          }, {
            id : "00", name : "Wilms tumor, diffuse anaplasia "
          }, {
            id : "00", name : "Nephrogenic rest only"
          }, {
            id : "00", name : "Congenital mesoblastic nephroma, classical, cellular or mixed"
          }, {
            id : "00", name : "Clear cell sarcoma "
          }, {
            id : "00", name : "Rhabdoid tumor"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Gerota’s Fascia Involvement",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Gerota’s fascia intact"
          }, {
            id : "00", name : "Gerota’s fascia disrupted"
          }, {
            id : "00", name : "Equivocal "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Renal Sinus Involvement",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Tumor minimally extends into renal sinus soft tissue"
          }, {
            id : "00", name : "Tumor extensively involves renal sinus soft tissue"
          }, {
            id : "00", name : "Tumor involves Lymphovascular spaces in the renal sinus "
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Renal Vein Involvement",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            id : "00", name : "Renal vein invasion present"
          }, {
            id : "00", name : "Equivocal "
          } ],
          id : "00", name : ""
        } ]
       }, {
        id : "00", name : "Renal Capsule Involvement",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "Extension beyond renal capsule present"
          }, {
            id : "00", name : "No extension beyond renal capsule"
          }, {
            id : "00", name : "Equivocal "
          } ],
          id : "00", name : ""
        } ]  
      }, {
        id : "00", name : "Adjacent Organ Involvement",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            description : "specify",
            inputs_required : [ "" ],
            id : "10", name : "Present"
          }, {
            id : "00", name : "Equivocal "
          } ],
          id : "00", name : ""
        } ]
      },  {
       
        id : "00", name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
         
           
            id : "00", name : "Free "
          }, {
         
          
            id : "00", name : "Positive, "
          }],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "50", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "50", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "51", name : "0" },{ id : "00", name : "1" },{ id : "00", name : "2" },{ id : "00", name : "3"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "00", name : "Distant metastases",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "00", name : "None"
          }, {
            inputs_required : [ "" ],
            id : "10", name : "Present"
          }, {
            id : "00", name : "Not applicable"
          } ],
          id : "00", name : ""
        } ]
      }, {
        id : "01", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "Tumor limited to kidney and completely resected",
            id : "00", name : "Stage 1"
          }, {
            description : "Tumor extends beyond kidney but completely resected",
            id : "00", name : "Stage 2 "
          }, {
            description : "Residual tumor",
            id : "00", name : "Stage 3"
          }, {
            description : "Metastatic disease",
            id : "00", name : "Stage 4"
          }, {
            description : "Bilateral renal involvement at diagnosis ",
            id : "00", name : "Stage 5 "
          } ],
          id : "00", name : ""
        } ]
      } ]
    } ],
  
   
  };
 


        
  var app = new Vue({
    el: '#app',
    data: database,

    watch: {
      row: {
        handler: function() {
          
          this.updateTable();
        },
        deep: true
      },
      row2: {
        handler: function() {
          
          this.updateTable();
        },
        deep: true
      },
      row7: {
        handler: function() {
          
          this.updateTable();
        },
        deep: true
      },
      row5: {
        handler: function() {
          
          this.updateTable();
        },
        deep: true
      },
      row10: {
        handler: function() {
          
          this.updateTable();
        },
        deep: true
      },
      row11: {
        handler: function() {
          
          this.updateTable();
        },
        deep: true
      },

    },
    
    methods: {
        
        displayQuestions: function(site){

            //set up tumor type and arrasy to correct length and with YOU FORGOT in it

            this.section = "showQuestions";  
            this.current_tumor = site.name;  
            this.current_tumor_biopsy_type = site.biopsy_type;
            this.synresults = site.properties;
         
            for (var i=0; i<this.synresults.length; i++){
              var firstans = "!!!!YOU FORGOT THIS ONE??" + this.synresults[i].id +"00";
              this.row.inputanswers.push(firstans);
            }
              
            for (var j=0; j<this.synresults.length; j++){
              this.row2.freetextanswers.push(" ");
                
            }
            
            firstrow = {question: "TUMOR SUMMARY", answer: this.current_tumor};
            this.row3.finalanswers.push(firstrow);

            for ( var i=0; i<this.synresults.length; i++){
              var value = {question: this.synresults[i].name, answer: this.row.inputanswers[i]};
              this.row3.finalanswers.push(value);
            }
            for (var i=0; i<this.synresults.length; i++){
              this.row5.useFreeText.push(true);
            }
            for (var i=0; i<this.synresults.length; i++){
              this.row6.bgc.push("#ffcccc");
            }
            for (var i=0; i<this.synresults.length; i++){
              this.row7.modifyFreeText.push(" ");
                
            }
            for (var i=0; i<this.synresults.length; i++){
              this.row8.modifyFreeTextHeader.push(" ");
                
            }
            for (var i=0; i<this.synresults.length; i++){
              this.row11.freeTextGID.push(" ");
                
            }



        },
        
        displayhomeMenu: function(){

          //reset all arrays
          this.section = "homeMenu";
          this.synresults = [];
          this.row.inputanswers = [];
          this.row2.freetextanswers = [];
          this.row3.finalanswers = [];
          this.row4.comboanswers = [];
          this.row5.useFreeText = [];
          this.row6.bgc = [];
          this.row7.modifyFreeText = [];
          this.row8.modifyFreeTextHeader = [];
          this.row9.comboMixed = [];
          this.row10.useCombo = [];
          scroll(0,0);
        },

        //switch from input (radio) text to free text
        changeUseFreeText: function(i){
          
          this.row5.useFreeText[i] = false;
          this.row5.useFreeText[i] = true;
          this.row10.useCombo[i] = false;
          this.row6.bgc[i] = "#66ff99"   ;
          this.row8.modifyFreeTextHeader[i] = " ";
          this.updateTable();
          
         
        },
        //switch from radio text to free text
        dontUseFreeText: function(i,index2, gid){
          this.row5.useFreeText[i] = false;
          this.row10.useCombo[i] = false;
          this.row6.bgc[i] = "#66ff99"  ;
          this.row8.modifyFreeTextHeader[i] = " ";
          //console.log(this.row.inputanswers[i])
          
          //logic for two treatment effect na qustions
          if(gid=="17"){
           
            this.row5.useFreeText[i+1] = false;
            this.row6.bgc[i+1] = "#66ff99";
            this.row.inputanswers[i+1] = "Not applicable5000";
          }
          
          //logic for breast grade
          //tubules
          if(gid=="80"){
            this.row12.breastGrade[0] = 1;
           
            if (this.row12.breastGrade[0] != 0 && this.row12.breastGrade[1] != 0 && this.row12.breastGrade[2] != 0 ){
              this.row6.bgc[i+3] = "#66ff99" ;
              this.row5.useFreeText[i+3] = false;
              var total = this.row12.breastGrade[0] + this.row12.breastGrade[1] + this.row12.breastGrade[2];
              if (total < 6) {
                this.row.inputanswers[i+3] = "Nottingham grade 1/30000";
              }
              else if (total > 7) {
                this.row.inputanswers[i+3] = "Nottingham grade 3/30000";
              }
              else {
                this.row.inputanswers[i+3] = "Nottingham grade 2/30000";
              }
            }
          }
          if(gid=="81"){
            this.row12.breastGrade[0] = 2;
           
            if (this.row12.breastGrade[0] != 0 && this.row12.breastGrade[1] != 0 && this.row12.breastGrade[2] != 0 ){
              this.row6.bgc[i+3] = "#66ff99" ;
              this.row5.useFreeText[i+3] = false;
              var total = this.row12.breastGrade[0] + this.row12.breastGrade[1] + this.row12.breastGrade[2];
              if (total < 6) {
                this.row.inputanswers[i+3] = "Nottingham grade 1/30000";
              }
              else if (total > 7) {
                this.row.inputanswers[i+3] = "Nottingham grade 3/30000";
              }
              else {
                this.row.inputanswers[i+3] = "Nottingham grade 2/30000";
              }
            }
          }
          if(gid=="82"){
            this.row12.breastGrade[0] = 3;
            
            if (this.row12.breastGrade[0] != 0 && this.row12.breastGrade[1] != 0 && this.row12.breastGrade[2] != 0 ){
              this.row6.bgc[i+3] = "#66ff99" ;
              this.row5.useFreeText[i+3] = false;
              var total = this.row12.breastGrade[0] + this.row12.breastGrade[1] + this.row12.breastGrade[2];
              if (total < 6) {
                this.row.inputanswers[i+3] = "Nottingham grade 1/30000";
              }
              else if (total > 7) {
                this.row.inputanswers[i+3] = "Nottingham grade 3/30000";
              }
              else {
                this.row.inputanswers[i+3] = "Nottingham grade 2/30000";
              }
            }
          }
          

          //nuclear pleo
          if(gid=="83"){
            this.row12.breastGrade[1] = 1;
            
            if (this.row12.breastGrade[0] != 0 && this.row12.breastGrade[1] != 0 && this.row12.breastGrade[2] != 0 ){
              this.row6.bgc[i+2] = "#66ff99" ;
              this.row5.useFreeText[i+2] = false;
              var total = this.row12.breastGrade[0] + this.row12.breastGrade[1] + this.row12.breastGrade[2];
              if (total < 6) {
                this.row.inputanswers[i+2] = "Nottingham grade 1/30000";
              }
              else if (total > 7) {
                this.row.inputanswers[i+2] = "Nottingham grade 3/30000";
              }
              else {
                this.row.inputanswers[i+2] = "Nottingham grade 2/30000";
              }
            }
          }
          if(gid=="84"){
            this.row12.breastGrade[1] = 2;
           
            if (this.row12.breastGrade[0] != 0 && this.row12.breastGrade[1] != 0 && this.row12.breastGrade[2] != 0 ){
              this.row6.bgc[i+2] = "#66ff99" ;
              this.row5.useFreeText[i+2] = false;
              var total = this.row12.breastGrade[0] + this.row12.breastGrade[1] + this.row12.breastGrade[2];
              if (total < 6) {
                this.row.inputanswers[i+2] = "Nottingham grade 1/30000";
              }
              else if (total > 7) {
                this.row.inputanswers[i+2] = "Nottingham grade 3/30000";
              }
              else {
                this.row.inputanswers[i+2] = "Nottingham grade 2/30000";
              }
            }
          }
          if(gid=="85"){
            this.row12.breastGrade[1] = 3;
           
            if (this.row12.breastGrade[0] != 0 && this.row12.breastGrade[1] != 0 && this.row12.breastGrade[2] != 0 ){
              this.row6.bgc[i+2] = "#66ff99" ;
              this.row5.useFreeText[i+2] = false;
              var total = this.row12.breastGrade[0] + this.row12.breastGrade[1] + this.row12.breastGrade[2];
              if (total < 6) {
                this.row.inputanswers[i+2] = "Nottingham grade 1/30000";
              }
              else if (total > 7) {
                this.row.inputanswers[i+2] = "Nottingham grade 3/30000";
              }
              else {
                this.row.inputanswers[i+2] = "Nottingham grade 2/30000";
              }
            }
          }

          //mitotic count
          if(gid=="86"){
            this.row12.breastGrade[2] = 1;
            
            if (this.row12.breastGrade[0] != 0 && this.row12.breastGrade[1] != 0 && this.row12.breastGrade[2] != 0 ){
              this.row6.bgc[i+1] = "#66ff99" ;
              this.row5.useFreeText[i+1] = false;
              var total = this.row12.breastGrade[0] + this.row12.breastGrade[1] + this.row12.breastGrade[2];
              if (total < 6) {
                this.row.inputanswers[i+1] = "Nottingham grade 1/30000";
              }
              else if (total > 7) {
                this.row.inputanswers[i+1] = "Nottingham grade 3/30000";
              }
              else {
                this.row.inputanswers[i+1] = "Nottingham grade 2/30000";
              }
            }
          }
          if(gid=="87"){
            this.row12.breastGrade[2] = 2;
            
            if (this.row12.breastGrade[0] != 0 && this.row12.breastGrade[1] != 0 && this.row12.breastGrade[2] != 0 ){
              this.row6.bgc[i+1] = "#66ff99" ;
              this.row5.useFreeText[i+1] = false;
              var total = this.row12.breastGrade[0] + this.row12.breastGrade[1] + this.row12.breastGrade[2];
              if (total < 6) {
                this.row.inputanswers[i+1] = "Nottingham grade 1/30000";
              }
              else if (total > 7) {
                this.row.inputanswers[i+1] = "Nottingham grade 3/30000";
              }
              else {
                this.row.inputanswers[i+1] = "Nottingham grade 2/30000";
              }
            }
          }
          if(gid=="88"){
            this.row12.breastGrade[2] = 3;
            
            if (this.row12.breastGrade[0] != 0 && this.row12.breastGrade[1] != 0 && this.row12.breastGrade[2] != 0 ){
              this.row6.bgc[i+1] = "#66ff99" ;
              this.row5.useFreeText[i+1] = false;
              var total = this.row12.breastGrade[0] + this.row12.breastGrade[1] + this.row12.breastGrade[2];
              if (total < 6) {
                this.row.inputanswers[i+1] = "Nottingham grade 1/30000";
              }
              else if (total > 7) {
                this.row.inputanswers[i+1] = "Nottingham grade 3/30000";
              }
              else {
                this.row.inputanswers[i+1] = "Nottingham grade 2/30000";
              }
            }
          }

          
          
        },
        //switch to mixed text
        changeUseMixed: function(i){
          
          this.row5.useFreeText[i] = false;
          this.row10.useCombo[i] = true;
          this.row6.bgc[i] = "#66ff99";
          
          
          
          this.updateTable();
          
         
        },


        //change color of question
        changeColor: function(i){
          this.row6.bgc[i] = "#66ff99";
        },



        // put the radio and free text together for the mixed texts
        compoundFreeText: function(i, hope, gid){ 
          //T4
          if (gid == '11') {
            for (var j = 0; j<this.row.inputanswers.length; j++){                
               if (this.row.inputanswers[j] ==  "!!!!YOU FORGOT THIS ONE??0200") {
                this.row.inputanswers[j] = "T40200";
                this.dontUseFreeText(j);
               }
                    
            }
           
          }
          //T4a
          if (gid == '12') {
            for (var j = 0; j<this.row.inputanswers.length; j++){                
               if (this.row.inputanswers[j] ==  "!!!!YOU FORGOT THIS ONE??0200") {
                this.row.inputanswers[j] = "T4a0200";
                this.dontUseFreeText(j);
               }
                    
            }
           
          }
          //T4b
          if (gid == '13') {
            for (var j = 0; j<this.row.inputanswers.length; j++){                
               if (this.row.inputanswers[j] ==  "!!!!YOU FORGOT THIS ONE??0200") {
                this.row.inputanswers[j] = "T4b0200";
                this.dontUseFreeText(j);
               }
                    
            }
           
          }
          
          
          this.row5.useFreeText[i] = false;
          this.row10.useCombo[i] = true;
          this.row6.bgc[i] = "#66ff99";
          this.row8.modifyFreeTextHeader[i] = hope;
          this.row.inputanswers[i] = "0000";
          

          // logic for repeating see case text
          if(gid=="15"){
            this.row5.useFreeText[i+1] = false;
            this.row10.useCombo[i+1] = true;
            this.row6.bgc[i+1] = "#66ff99";
            this.row8.modifyFreeTextHeader[i+1] = hope  ;          
            this.row11.freeTextGID[i] = gid    ; 
            
            this.row5.useFreeText[i+2] = false;
            this.row6.bgc[i+2] = "#66ff99";
            this.row.inputanswers[i+2] = "No0000";


            this.updateTable();
          }

          if(gid=="16"){
            
            this.row11.freeTextGID[i] = gid  ;

            this.row5.useFreeText[i+1] = false;
            this.row10.useCombo[i+1] = true;
            this.row6.bgc[i+1] = "#66ff99";
            this.row8.modifyFreeTextHeader[i+1] = hope    ;        
            
            this.row5.useFreeText[i+2] = false;
            this.row10.useCombo[i+2] = true;
            this.row6.bgc[i+2] = "#66ff99";
            this.row8.modifyFreeTextHeader[i+2] = hope    ;

            this.row5.useFreeText[i+3] = false;
            this.row10.useCombo[i+3] = true;
            this.row6.bgc[i+3] = "#66ff99";
            this.row8.modifyFreeTextHeader[i+3] = hope  ;  

            this.row5.useFreeText[i+4] = false;
            this.row6.bgc[i+4] = "#66ff99";
            this.row.inputanswers[i+4] = "No0000";

            this.row5.useFreeText[i+5] = false;
            this.row6.bgc[i+5] = "#66ff99";
            this.row.inputanswers[i+5] = "No0000";

            this.updateTable();
          }

            // logic for repeating see case text for gastric trip only three for her2, pdl1, msi
          if(gid=="18"){

            this.row11.freeTextGID[i] = gid   ;
            //console.log(hope);
            this.row5.useFreeText[i+1] = false;
            this.row10.useCombo[i+1] = true;
            this.row6.bgc[i+1] = "#66ff99";
            this.row8.modifyFreeTextHeader[i+1] = hope   ;  
            
            this.row5.useFreeText[i+2] = false;
            this.row10.useCombo[i+2] = true;
            this.row6.bgc[i+2] = "#66ff99";
            this.row8.modifyFreeTextHeader[i+2] = hope  ;  

            this.row5.useFreeText[i+3] = false;
            this.row10.useCombo[i+3] = true;
            this.row6.bgc[i+3] = "#66ff99";
            this.row8.modifyFreeTextHeader[i+3] = hope  ;  
              

            this.updateTable();
          }

          //logic to turn off repeat See case
          if(gid!="15" && gid!="16" && gid!="18"){           
            this.row11.freeTextGID[i] = " "  ;         
            this.updateTable();
          }

          




          

          this.updateTable();
          
          
          
         
         
         

        },


        updateTable: function(){

         // update free text based on gid in freeTExtFID
         for (var i = 0; i<this.row11.freeTextGID.length; i++){
          if (this.row11.freeTextGID[i] == "15") {
            this.row7.modifyFreeText[i+1] = this.row7.modifyFreeText[i];
            
          }  
        }
          for (var i = 0; i<this.row11.freeTextGID.length; i++){
            if (this.row11.freeTextGID[i] == "18") {
              this.row7.modifyFreeText[i+1] = this.row7.modifyFreeText[i];
              this.row7.modifyFreeText[i+2] = this.row7.modifyFreeText[i];
              this.row7.modifyFreeText[i+3] = this.row7.modifyFreeText[i];
            } 
          }
        
        for (var i = 0; i<this.row11.freeTextGID.length; i++){
          if (this.row11.freeTextGID[i] == "16") {
            this.row7.modifyFreeText[i+1] = this.row7.modifyFreeText[i];
            this.row7.modifyFreeText[i+2] = this.row7.modifyFreeText[i];
            this.row7.modifyFreeText[i+3] = this.row7.modifyFreeText[i];
          }   
        
      
    }
         
         

          //update free text answer based on table modifyFreeText
          for (var i = 0; i<this.row7.modifyFreeText.length; i++){
            
              this.row9.comboMixed[i] = this.row8.modifyFreeTextHeader[i] + this.row7.modifyFreeText[i];
            
          }
         

          //qid = 0 regular quesitons, 01 = stage, 02 = T, 03 = N and 04 = M

          this.showtable = false;
          this.showtable = true;

          // go through each question and answer
          
          this.row4.comboanswers = [];

          var count = 0 ;// index of AJCC stage question to combine responses
          var removeRow = 0; // use this to match up length of finalanswer and comboanswer since combo is shorter with TNM combined
          for (var i = 0; i<this.row.inputanswers.length; i++){
            ans = this.row.inputanswers[i].substring(0,this.row.inputanswers[i].length-4);
            qid = this.row.inputanswers[i].substring(this.row.inputanswers[i].length-4, this.row.inputanswers[i].length-2);
            gid = this.row.inputanswers[i].substring(this.row.inputanswers[i].length-2, this.row.inputanswers[i].length);

             // insert loop to update all dependent questions to defaults
            

             //single answer responses
             if (this.current_tumor == 'Breast DCIS') {
              for (var j = i; j<this.row.inputanswers.length; j++){ 
                              
                if (this.row.inputanswers[j] ==  "!!!!YOU FORGOT THIS ONE??4000") {
                 
                 this.row.inputanswers[j] = "Ductal carcinoma in situ4000";
                 this.dontUseFreeText(j);
                }
                if (this.row.inputanswers[j] ==  "!!!!YOU FORGOT THIS ONE??0200") {
                  
                  this.row.inputanswers[j] = "Tis0200";
                  this.dontUseFreeText(j);
                 }

              }                 
               
             }


             if (this.current_tumor == 'Prostate, prostatectomy') {
              for (var j = i; j<this.row.inputanswers.length; j++){ 
                              
                if (this.row.inputanswers[j] ==  "!!!!YOU FORGOT THIS ONE??4200") {
                 
                 this.row.inputanswers[j] = "Adenocarcinoma4200";
                 this.dontUseFreeText(j);
                }
                if (this.row.inputanswers[j] ==  "!!!!YOU FORGOT THIS ONE??4300") {
                 
                  this.row.inputanswers[j] = "C614300";
                  this.dontUseFreeText(j);
                 }
              }                              
             }

             if (this.current_tumor == 'Colon') {
              for (var j = i; j<this.row.inputanswers.length; j++){ 
                              
                if (this.row.inputanswers[j] ==  "!!!!YOU FORGOT THIS ONE??4400") {
                 
                 this.row.inputanswers[j] = "C18.94400";
                 this.dontUseFreeText(j);
                }      
              }                              
             }

             if (this.current_tumor == 'Lung') {
              for (var j = i; j<this.row.inputanswers.length; j++){ 
                            
                if (this.row.inputanswers[j] ==  "!!!!YOU FORGOT THIS ONE??4600") {
                  
                 this.row.inputanswers[j] = "C34.904600";
                 this.dontUseFreeText(j);
                }      
              }                              
             }

             if (this.current_tumor == 'Skin Melanoma') {
              for (var j = i; j<this.row.inputanswers.length; j++){ 
                            
                if (this.row.inputanswers[j] ==  "!!!!YOU FORGOT THIS ONE??4500") {
                  
                 this.row.inputanswers[j] = "C43.94500";
                 this.dontUseFreeText(j);
                }      
              }                              
             }
             
          
             
             // T stage

             //Tis
            if (gid == '60') {
              for (var j = i; j<this.row.inputanswers.length; j++){                
                 if (this.row.inputanswers[j] ==  "!!!!YOU FORGOT THIS ONE??0200") {
                  this.row.inputanswers[j] = "Tis0200";
                  this.dontUseFreeText(j);
                 }
                      
              }
             
            }

            //Ta
            if (gid == '69') {
              for (var j = i; j<this.row.inputanswers.length; j++){                
                 if (this.row.inputanswers[j] ==  "!!!!YOU FORGOT THIS ONE??0200") {
                  this.row.inputanswers[j] = "Ta0200";
                  this.dontUseFreeText(j);
                 }
                      
              }
             
            }

            //Ta/Tis
            if (gid == '74') {
              for (var j = i; j<this.row.inputanswers.length; j++){                
                 if (this.row.inputanswers[j] ==  "!!!!YOU FORGOT THIS ONE??0200") {
                  this.row.inputanswers[j] = "TaTis0200";
                  this.dontUseFreeText(j);
                 }
                      
              }
             
            }

            //T1
            if (gid == '61') {
              for (var j = i; j<this.row.inputanswers.length; j++){                
                 if (this.row.inputanswers[j] ==  "!!!!YOU FORGOT THIS ONE??0200") {
                  this.row.inputanswers[j] = "T10200";
                  this.dontUseFreeText(j);
                 }
                      
              }
             
            }

            //T2
            if (gid == '62') {
              for (var j = i; j<this.row.inputanswers.length; j++){                
                 if (this.row.inputanswers[j] ==  "!!!!YOU FORGOT THIS ONE??0200") {
                  this.row.inputanswers[j] = "T20200";
                  this.dontUseFreeText(j);
                 }
                      
              }
             
            }

            //T3
            if (gid == '63') {
              for (var j = i; j<this.row.inputanswers.length; j++){                
                 if (this.row.inputanswers[j] ==  "!!!!YOU FORGOT THIS ONE??0200") {
                  this.row.inputanswers[j] = "T30200";
                  this.dontUseFreeText(j);
                 }
                      
              }
             
            }

            //T4
            if (gid == '64') {
              for (var j = i; j<this.row.inputanswers.length; j++){                
                 if (this.row.inputanswers[j] ==  "!!!!YOU FORGOT THIS ONE??0200") {
                  this.row.inputanswers[j] = "T40200";
                  this.dontUseFreeText(j);
                 }
                      
              }
             
            }

            //T1a
            if (gid == '65') {
              for (var j = i; j<this.row.inputanswers.length; j++){                
                 if (this.row.inputanswers[j] ==  "!!!!YOU FORGOT THIS ONE??0200") {
                  this.row.inputanswers[j] = "T1a0200";
                  this.dontUseFreeText(j);
                 }
                      
              }
             
            }

            //T1b
            if (gid == '66') {
              for (var j = i; j<this.row.inputanswers.length; j++){                
                 if (this.row.inputanswers[j] ==  "!!!!YOU FORGOT THIS ONE??0200") {
                  this.row.inputanswers[j] = "T1b0200";
                  this.dontUseFreeText(j);
                 }
                      
              }
             
            }

            //T2a
            if (gid == '70') {
              for (var j = i; j<this.row.inputanswers.length; j++){                
                 if (this.row.inputanswers[j] ==  "!!!!YOU FORGOT THIS ONE??0200") {
                  this.row.inputanswers[j] = "T2a0200";
                  this.dontUseFreeText(j);
                 }
                      
              }
             
            }

            //T2b
            if (gid == '71') {
              for (var j = i; j<this.row.inputanswers.length; j++){                
                 if (this.row.inputanswers[j] ==  "!!!!YOU FORGOT THIS ONE??0200") {
                  this.row.inputanswers[j] = "T2b0200";
                  this.dontUseFreeText(j);
                 }
                      
              }
             
            }

            //T3a
            if (gid == '72') {
              for (var j = i; j<this.row.inputanswers.length; j++){                
                 if (this.row.inputanswers[j] ==  "!!!!YOU FORGOT THIS ONE??0200") {
                  this.row.inputanswers[j] = "T3a0200";
                  this.dontUseFreeText(j);
                 }
                      
              }
             
            }

            //T3b
            if (gid == '73') {
              for (var j = i; j<this.row.inputanswers.length; j++){                
                 if (this.row.inputanswers[j] ==  "!!!!YOU FORGOT THIS ONE??0200") {
                  this.row.inputanswers[j] = "T3b0200";
                  this.dontUseFreeText(j);
                 }
                      
              }
             
            }


            //T4
            if (gid == '11') {
              
              
              for (var j = i; j<this.row.inputanswers.length; j++){                
                 if (this.row.inputanswers[j] ==  "!!!!YOU FORGOT THIS ONE??0200") {
                  this.row.inputanswers[j] = "T40200";
                  this.dontUseFreeText(j);
                 }
                      
              }
             
            }

            //T4a
            if (gid == '67') {
              for (var j = i; j<this.row.inputanswers.length; j++){                
                 if (this.row.inputanswers[j] ==  "!!!!YOU FORGOT THIS ONE??0200") {
                  this.row.inputanswers[j] = "T4a0200";
                  this.dontUseFreeText(j);
                 }
                      
              }
             
            }

            //T4b
            if (gid == '68') {
              for (var j = i; j<this.row.inputanswers.length; j++){                
                 if (this.row.inputanswers[j] ==  "!!!!YOU FORGOT THIS ONE??0200") {
                  this.row.inputanswers[j] = "T4b0200";
                  this.dontUseFreeText(j);
                 }
                      
              }
             
            }

            //T4a
            if (gid == '12') {
              for (var j = i; j<this.row.inputanswers.length; j++){                
                 if (this.row.inputanswers[j] ==  "!!!!YOU FORGOT THIS ONE??0200") {
                  this.row.inputanswers[j] = "T4a0200";
                  this.dontUseFreeText(j);
                 }
                      
              }
             
            }

            //T4b
            if (gid == '13') {
              for (var j = i; j<this.row.inputanswers.length; j++){                
                 if (this.row.inputanswers[j] ==  "!!!!YOU FORGOT THIS ONE??0200") {
                  this.row.inputanswers[j] = "T4b0200";
                  this.dontUseFreeText(j);
                 }
                      
              }
             
            }

            
             // lymph nodes
             //NX
            if (gid == '50') {
              for (var j = i; j<this.row.inputanswers.length; j++){
                
                 if (this.row.inputanswers[j] ==  "!!!!YOU FORGOT THIS ONE??5000") {
                  this.row.inputanswers[j] = "Not applicable5000";
                  this.dontUseFreeText(j)      ;          
                 }

                 if (this.row.inputanswers[j] ==  "!!!!YOU FORGOT THIS ONE??5100") {
                  this.row.inputanswers[j] = "05150";
                  this.dontUseFreeText(j)      ;          
                 }

                 if (this.row.inputanswers[j] ==  "!!!!YOU FORGOT THIS ONE??0300") {
                  this.row.inputanswers[j] = "NX0300";
                  this.dontUseFreeText(j);
                 }
                      
              }
             
            }

            //N0
            if (gid == '51') {
              for (var j = i; j<this.row.inputanswers.length; j++){
                
                 if (this.row.inputanswers[j] ==  "!!!!YOU FORGOT THIS ONE??5000") {
                  this.row.inputanswers[j] = "Not applicable5000";
                  this.dontUseFreeText(j);
                 }
                 if (this.row.inputanswers[j] ==  "!!!!YOU FORGOT THIS ONE??0300") {
                  this.row.inputanswers[j] = "N00300";
                  this.dontUseFreeText(j);
                 }
                      
              }
             
            }
            //N0a
            if (gid == '52') {
              for (var j = i; j<this.row.inputanswers.length; j++){
                
                 if (this.row.inputanswers[j] ==  "!!!!YOU FORGOT THIS ONE??5000") {
                  this.row.inputanswers[j] = "Not applicable5000";
                  this.dontUseFreeText(j);
                 }
                 if (this.row.inputanswers[j] ==  "!!!!YOU FORGOT THIS ONE??0300") {
                  this.row.inputanswers[j] = "N0a0300";
                  this.dontUseFreeText(j);
                 }
                      
              }
             
            }

            //N1
            if (gid == '53') {
              for (var j = i; j<this.row.inputanswers.length; j++){
                
                 
                 if (this.row.inputanswers[j] ==  "!!!!YOU FORGOT THIS ONE??0300") {
                  this.row.inputanswers[j] = "N10300";
                  this.dontUseFreeText(j);
                 }
                      
              }
             
            }

            //N2
            if (gid == '54') {
              for (var j = i; j<this.row.inputanswers.length; j++){
                
                 
                 if (this.row.inputanswers[j] ==  "!!!!YOU FORGOT THIS ONE??0300") {
                  this.row.inputanswers[j] = "N20300";
                  this.dontUseFreeText(j);
                 }
                      
              }
             
            }
            
            // identify row to combine all AJCC stage with

            if (qid == "01"){
                    count = this.row4.comboanswers.length;
                  }
            // all rows other than AJCC T N M responses

            if (qid === "00" || 
                qid === '40' || 
                qid === '41' || 
                qid === '42' || 
                qid === '43' || 
                qid === '44' || 
                qid === '45' || 
                qid === '46' || 
                qid === "01" || 
                qid === "50" || 
                qid === "51" || 
                qid === "52" || 
                qid === "53"){
              

              // if free text selected
              if (this.row5.useFreeText[i] && this.row2.freetextanswers[i]=== " "){
                this.row4.comboanswers.push("!!!!YOU FORGOT THIS ONE??X");
              }
              else if (this.row5.useFreeText[i] && this.row2.freetextanswers[i]!= " "){
                this.row4.comboanswers.push(this.row2.freetextanswers[i]);
              }
              //if mixed text selected
              else if (this.row10.useCombo[i] && this.row9.comboMixed[i]=== " "){
                this.row4.comboanswers.push("!!!!YOU FORGOT THIS ONE??X");
              }
              else if (this.row10.useCombo[i] && this.row9.comboMixed[i]!= " "){
                this.row4.comboanswers.push(this.row9.comboMixed[i]);
              }


              else {
                //if input/radio selected
                this.row4.comboanswers.push(ans);
              }
             
            }
            
            // rows to be combined with qid 01
            if ((qid === "02" || qid === "03" ||qid === "04") && this.row5.useFreeText[i] && this.row2.freetextanswers[i]=== " " && count !=0) {
            
             
            
            
              this.row4.comboanswers[count] = this.row4.comboanswers[count] + " " + "!!!!YOU FORGOT THIS ONE??X";
              }
            else if ((qid === "02" || qid === "03" ||qid === "04") && this.row5.useFreeText[i] && this.row2.freetextanswers[i]!= " " && count !=0) {
                this.row4.comboanswers[count] = this.row4.comboanswers[count] + " " + this.row2.freetextanswers[i];
              }
            else if (qid === "02" || qid === "03" ||qid === "04") {
              this.row4.comboanswers[count] = this.row4.comboanswers[count] + " " + ans;
              removeRow += 1;
            }
            
          }

          
          // make final table
          var removeRow = 0;
          this.row3.finalanswers = [];
          firstrow = {question: "TUMOR SUMMARY", answer: this.current_tumor};
          this.row3.finalanswers.push(firstrow);
          for (var i=0; i<this.synresults.length; i++){

            if (this.synresults[i].id === "02" || 
            this.synresults[i].id === "03" || 
            this.synresults[i].id === "04") {
              removeRow += 1;
            }
            
            if (this.synresults[i].id === "01"){
              ans = this.row4.comboanswers[i-removeRow];
              var value = {question: this.synresults[i].name, answer: ans};
      //     console.log (this.synresults[i].name, this.synresults[i].id)
            
              this.row3.finalanswers.push(value);

            }

            
            if (this.synresults[i].id === "00" || 
                this.synresults[i].id === "40" || 
                this.synresults[i].id === "41" || 
                this.synresults[i].id === "42" || 
                this.synresults[i].id === "43" || 
                this.synresults[i].id === "44" || 
                this.synresults[i].id === "45" || 
                this.synresults[i].id === "46" || 
                this.synresults[i].id === "50" || 
                this.synresults[i].id === "51" || 
                this.synresults[i].id === "52" || 
                this.synresults[i].id === "53"){
            

              if (this.row5.useFreeText[i]){
                if (this.row2.freetextanswers[i]=== " ") {
                  ans = "!!!!YOU FORGOT THIS ONE??0";
                }
                else{
                  ans =this.row2.freetextanswers[i];
                }
              } else {
                
                ans = this.row4.comboanswers[i-removeRow];
              } 
              var value1 = {question: this.synresults[i].name, answer: ans};
      //     console.log (this.synresults[i].name, this.synresults[i].id)
            
              this.row3.finalanswers.push(value1);

            }
            
              

          }
          
       //   console.log (this.row4.comboanswers)

          return this.row3.finalanswers;

          
      }

    },
    


});
