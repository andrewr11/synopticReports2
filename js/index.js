


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
    site_groups: [
      {id : "0", name : "Breast"},
      {id : "0", name : "Central Nervous System"},
      {id : "0", name : "Endocrine"},
      {id : "0", name : "Gastrointestinal"},
      {id : "0", name : "Genitourinary"},
      {id : "0", name : "Gynecologic"},
      {id : "0", name : "Head and Neck"},
      {id : "0", name : "Hematologic"},
      {id : "0", name : "Ophthalmic"},
      {id : "0", name : "Other"},
      {id : "0", name : "Other-Biomarkers"},
      {id : "0", name : "Pediatric"},
      {id : "0", name : "Skin"},
      {id : "0", name : "Thorax"}
    ],
   
    current_tumor:"Tango",
    current_tumor_biopsy_type: " ",
    section: "homeMenu",
    showtable: true,
    tumor_types : [ {
      most_common : false,
      id : "0", name : "Adrenal",
      optional : false,
      organ_group : "Endocrine",
      properties : [  {
        id : "0", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Right adrenalectomy, total"
          }, {
            id : "0", name : "Right adrenalectomy, partial"
          }, {
            id : "0", name : "Left adrenalectomy, total"
          }, {
            id : "0", name : "Left adrenalectomy, partial"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor weight",
       optional_state  : "required", "options" : [ {
          id : "0", name : ""
        } ]
      }, {
         description : "do not use for pheochromocytoma",
        id : "0", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Adrenal cortical carcinoma"
          } ],
          id : "0", name : ""
        } ]
   }, {
        id : "0", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
             description : "<= 20 mitoses/50 hpf",
            id : "0", name : "Low grade"
          }, {
             description : ">20 mitoses/50 hpf",
            id : "0", name : "High grade"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Indeterminate"
          }, {
            id : "0", name : "Suspicious"
          }, {
            id : "0", name : "Large vessel, renal vein (including when identifed clinically)"
          }, {
            id : "0", name : "Large vessel, vena cava (including when identifed clinically)"
          }, {
            id : "0", name : "Small vessel"
          }   ],
          id : "0", name : ""
        } ]
   
   
      }, {
        id : "0", name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Limited to adrenal"
          }, {
            id : "0", name : "Tumor invades into or through the adrenal capsule"
          }, {
            id : "0", name : "Tumor invades into extra-adrenal structures "
          }, {
             description : "specify",
            inputs_required : [ "" ],
            id : "0", name : "Tumor invades into adjacent organs"
          }  ],
          id : "0", name : ""
        } ]
   
   
      }, {
        description : "include distance/location of closest margin",
        id : "0", name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "0", name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Positive"
          } ],
          id : "0", name : ""
        } ]
  
   
      }, {
        id : "0", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
  
  
      }, {
        id : "0", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "0", name : ""
          }, {
            description : "pathologic",
            id : "0", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "0", name : "m"
          }, {
            description : "recurrent",
            id : "0", name : "r"
          }, {
            description : "post-treatment",
            id : "0", name : "y"
          }, {
            id : "0", name : "mp"
          }, {
            id : "0", name : "rp"
          }, {
            id : "0", name : "yp"
          }, {
            id : "0", name : "mrp"
          }, {
            id : "0", name : "myp"
          }, {
            id : "0", name : "ryp"
          }, {
            id : "0", name : "mryp"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            id : "0", name : "TX"
          }, {
            description : "ADRENAL CORTICAL CARCINOMA <=5 cm AND organ limited",
            id : "0", name : "T1"
          }, {
            description : "ADRENAL CORTICAL CARCINOMA >5 cm  AND organ limited",
            id : "0", name : "T2"
          }, {
            description : "ADRENAL CORTICAL CARCINOMA local invasion, no organs",
            id : "0", name : "T3"
          }, {
            description : "ADRENAL CORTICAL CARCINOMA Invades other organs",
            id : "0", name : "T4"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "0", name : "NX"
          }, {
            description : "No metastasis",
            id : "0", name : "N0"
          }, {
            description : "Regional metastases",
            id : "0", name : "N1"
          } ],
          id : "0", name : "Category (M)"
        }, {
          group : [ {
            description : "Distant metastases",
            id : "0", name : "M1"
          }, {
            id : "0", name : "M (not applicable)"
          }, {
            id : "0", name : "distant metastasis not applicable"
          } ],
          id : "0", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "0", name : "Ampulla of  Vater",
      optional : false,
      organ_group : "Gastrointestinal",
      properties : [  {
        id : "0", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Ampullectomy"
          }, {
            id : "0", name : "Whipple resection"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Intra-ampullary"
          }, {
            id : "0", name : "Peri-ampullary"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Adenocarcinoma"
          }, {
            id : "0", name : "Adenocarcinoma, pancreaticobiliary type"
          }, {
            id : "0", name : "Adenocarcinoma, intestinal type"
          }, {
            id : "0", name : "Medullary carcinoma"
          }, {
            id : "0", name : "Invasive papillary adenocarcinoma"
          }, {
            id : "0", name : "Mucinous adenocarcinoma"
          }, {
            id : "0", name : "Clear cell adenocarcinoma"
          }, {
            id : "0", name : "Signet-ring cell carcinoma"
          }, {
            id : "0", name : "Adenosquamous carcinoma"
          }, {
            id : "0", name : "Squamous cell carcinoma"
          }, {
            id : "0", name : "Hepatoid adenocarcinoma "
          }, {
            id : "0", name : "Large cell neuroendocrine carcinoma"
          }, {
            id : "0", name : "Small cell neuroendocrine carcinoma"
          }, {
            id : "0", name : "Neuroendocrine carcinoma (poorly differentiated)"
          }, {
            id : "0", name : "Undifferentiated carcinoma"
          }, {
            id : "0", name : "Undifferentiated carcinoma with osteoclast giant cells"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Grade 1/3, well differentiated"
          }, {
            id : "0", name : "Grade 2/3, moderately differentiated"
          }, {
            id : "0", name : "Grade 3/3, poorly differentiated"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Carcinoma in situ"
          }, {
            id : "0", name : "Limited to ampulla of Vater or sphincter of Oddi"
          }, {
            id : "0", name : "Invades beyond sphincter of Oddi (perisphincteric invasion) "
          }, {
            id : "0", name : "Invades into duodenal submucosa "
          }, {
            id : "0", name : "Invades into muscularis propria of the duodenum"
          }, {
            id : "0", name : "Directly invades pancreas up to 0.5 cm"
          }, {
            id : "0", name : "Extends more than 0.5 cm into pancreas "
          }, {
            id : "0", name : "Extends into peripancreatic soft tissues "
          }, {
            id : "0", name : "Extends into periduodenal tissue"
          }, {
            id : "0", name : "Extends into duodenal serosa "
          }, {
             description : "specify",
              inputs_required : [ "" ],
            id : "0", name : "Invades other adjacent organs or structures other than pancreas "
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "include distance/location of closest margin, including mucosa(ampullectomy), pancreatic neck, uncinate, bile duct, proximal, distal",
        id : "0", name : "Margins, invasive tumor",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "0", name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Positive"
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "include distance/location of closest margin, including mucosa(ampullectomy), pancreatic neck, uncinate, bile duct, proximal, distal",
        id : "0", name : "Margins, dysplasia/CIS",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "0", name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Positive"
          }, {
            id : "0", name : "Not applicable"
          }  ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Indeterminate"
          }, {
            id : "0", name : "Suspicious"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Present, extensive"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "0", name : ""
          }, {
            description : "pathologic",
            id : "0", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "0", name : "m"
          }, {
            description : "recurrent",
            id : "0", name : "r"
          }, {
            description : "post-treatment",
            id : "0", name : "y"
          }, {
            id : "0", name : "mp"
          }, {
            id : "0", name : "rp"
          }, {
            id : "0", name : "yp"
          }, {
            id : "0", name : "mrp"
          }, {
            id : "0", name : "myp"
          }, {
            id : "0", name : "ryp"
          }, {
            id : "0", name : "mryp"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            id : "0", name : "TX"
          }, {
            description : "Carcinoma in situ",
            id : "0", name : "Tis"
          }, {
            description : "limited to ampulla of Vater and sphincter of Oddi",
            id : "0", name : "T1a"
          }, {
            description : "invades beyond sphincter of Oddi and/or into the duodenal mucosa",
            id : "0", name : "T1b"
          }, {
            description : "invades muscularis propria of duodenum",
            id : "0", name : "T2"
          }, {
            description : "invades pancreas up to 0.5 cm",
            id : "0", name : "T3a"
          }, {
            description : "(Tumor extends more than 0.5 cm into the pancreas, or extends into peripancreatic tissue or periduodenal tissue or duodenal serosa without involvement of the celiac axis or superior mesenteric artery)",
            id : "0", name : "T3b"
          }, {
            description : "Invades celiac axis superior mesenteric artery and or common hepatic artery",
            id : "0", name : "T4"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "0", name : "NX"
          }, {
            description : "No metastasis",
            id : "0", name : "N0"
          }, {
            description : "1- 3 Regional metastases",
            id : "0", name : "N1"
          }, {
            description : "4 or more Regional metastases",
            id : "0", name : "N2"
          } ],
          id : "0", name : "Category (M)"
        }, {
          group : [ {
            description : "Distant metastases",
            id : "0", name : "M1"
          }, {
            id : "0", name : "M (not applicable)"
          }, {
            id : "0", name : "distant metastasis not applicable"
          } ],
          id : "0", name : ""
        } ]
        }, {
         description: "adenocarcinoma only",
        id : "0", name : "MSI IHC and Interpretation",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Intact nuclear expression of MMR proteins (MLH1, MSH2, MSH6, PMS2): No evidence of deficient mismatch repair (low probability of MSI-H)"
          },{
            id : "0", name : "Loss of nuclear expression of one or more MMR proteins (MLH1, MSH2, MSH6, PMS2): deficient mismatch repair/ high probability of microsatellite instability-high (MSI-H). The presence of MSI-H/deficient mismatch repair may also be an indication for additional testing for Lynch syndrome and genetic counselling."
          }, {
            id : "0", name : "Pending"
          }, {
            id : "0", name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            id : "0", name : "See case "
          }],
          id : "0", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "0", name : "Anus",
      optional : false,
      organ_group : "Gastrointestinal",
      properties : [  {
        id : "0", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Abdominoperineal resection"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Anal canal"
          }, {
            id : "0", name : "Perianal region"
          }, {
            id : "0", name : "Anus, not otherwise specified"
          }, {
            id : "0", name : "Anorectal junction"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Squamous cell carcinoma"
          }, {
            id : "0", name : "Verrucous carcinoma"
          }, {
            id : "0", name : "Basal cell carcinoma"
          }, {
            id : "0", name : "Adenocarcinoma"
          }, {
            id : "0", name : "Mucinous adenocarcinoma"
          }, {
            id : "0", name : "Squamous cell carcinoma"
          }, {
            id : "0", name : "Large cell neuroendocrine carcinoma"
          }, {
            id : "0", name : "Small cell carcinoma"
          }, {
            id : "0", name : "Paget's disease"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Grade 1/4, Well differentiated"
          }, {
            id : "0", name : "Grade 2/4, Moderately differentiated"
          }, {
            id : "0", name : "Grade 3/4, Poorly differentiated"
          }, {
            id : "0", name : "Grade 4/4, Undifferentiated"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Carcinoma in situ"
          }, {
            id : "0", name : "Invades lamina propria"
          }, {
            id : "0", name : "Invades muscularis mucosae"
          }, {
            id : "0", name : "Invades submucosa"
          }, {
            id : "0", name : "Invades anal sphincter muscle"
          }, {
            id : "0", name : "Invades perianal or perirectal soft tissue"
          }, {
             description : "specify",
              inputs_required : [ "" ],
            id : "0", name : "Invades other structures"
          }, {
            id : "0", name : "Invades perianal skin"
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "include distance/location of closest margin, proximal distal and radial",
        id : "0", name : "Margins, invasive tumor",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "0", name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Positive"
          }],
          id : "0", name : ""
        } ]
      }, {
        description : "include distance/location of closest margin, proximal distal radial",
        id : "0", name : "Margins, dysplasia/CIS",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "0", name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Positive"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Treatment effect, primary site",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Not applicable"
          }, {
            id : "0", name : "Absent"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Not known"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, external iliac, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, ,external iliac, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, other, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, ,other, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "0", name : ""
          }, {
            description : "pathologic",
            id : "0", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "0", name : "m"
          }, {
            description : "recurrent",
            id : "0", name : "r"
          }, {
            description : "post-treatment",
            id : "0", name : "y"
          }, {
            id : "0", name : "mp"
          }, {
            id : "0", name : "rp"
          }, {
            id : "0", name : "yp"
          }, {
            id : "0", name : "mrp"
          }, {
            id : "0", name : "myp"
          }, {
            id : "0", name : "ryp"
          }, {
            id : "0", name : "mryp"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            id : "0", name : "TX"
          }, {
            description : "Carcinoma in situ",
            id : "0", name : "Tis"
          }, {
            description : "<= 2cm",
            id : "0", name : "T1"
          }, {
            description : ">2cm AND <=5cm",
            id : "0", name : "T2"
          }, {
            description : ">5cm",
            id : "0", name : "T3"
          }, {
            description : "Invades other organs",
            id : "0", name : "T4"
          } ],
          id : "0", name : ""
           }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "0", name : "NX"
          }, {
            description : "No regional lymph node metastases",
            id : "0", name : "N0"
          }, {
            description : "Inguinal mesorectal or internal iliac lymph node metastases",
            id : "0", name : "N1a"
          }, {
            description : "External iliac lymph node metastases",
            id : "0", name : "N1b"
          }, {
            description : "N1a metastasis plus external iliac lymph node metastases",
            id : "0", name : "N1c"
          } ],
          id : "0", name : "Category (pN)"
        }, {
          group : [ {
            description : "Metastases",
            id : "0", name : "M1"
          }, {
            id : "0", name : "M (not applicable)"
          }, {
            id : "0", name : "distant metastasis not applicable"
          } ],
          id : "0", name : ""
        } ]
  
      }, {
         description : "for squamous/basaloid carcinoma",
        id : "0", name : "p16 Immunohistochemistry ",
       optional_state  : "required", "options" : [ {
          group : [  {
            id : "0", name : "Negative "
          }, {
            id : "0", name : "Equivocal"
          }, {
            id : "0", name : "Not applicable "
          }, {
            id : "0", name : "Not performed"
          }, {
            id : "0", name : "Pending"
          } ],
          id : "0", name : ""
        } ]
      }, {
         description : "for squamous/basaloid carcinoma",
        id : "0", name : "HPV ISH ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Positive "
          }, {
            id : "0", name : "Negative "
          }, {
            id : "0", name : "Equivocal"
          }, {
            id : "0", name : "Not applicable "
          }, {
            id : "0", name : "Not performed"
          }, {
            id : "0", name : "Pending"
          } ],
          id : "0", name : ""
        } ]
      }, {
         description : "for squamous/basaloid carcinoma",
        id : "0", name : "HPV PCR ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Positive "
          }, {
            id : "0", name : "Negative "
          }, {
            id : "0", name : "Equivocal"
          }, {
            id : "0", name : "Not applicable "
          }, {
            id : "0", name : "Not performed"
          }, {
            id : "0", name : "Pending"
          } ],
          id : "0", name : ""
        } ]
        }]
    }, {
      most_common : false,
      id : "0", name : "Appendix",
      optional : false,
      organ_group : "Gastrointestinal",
      properties : [  {
        id : "0", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Appendectomy"
          }, {
            id : "0", name : "Appendectomy and cecal resection"
          }, {
            id : "0", name : "Appendectomy and right colectomy"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Adenocarcinoma"
          }, {
            id : "0", name : "Mucinous carcinoma"
          }, {
            id : "0", name : "Low grade mucinous neoplasm"
          }, {
            id : "0", name : "High grade mucinous neoplasm"
          }, {
            id : "0", name : "Signet ring cell carcinoma"
          }, {
            id : "0", name : "Goblet cell carcinoid"
          }, {
            id : "0", name : "Mixed adenocarcinoma/goblet cell carcinoid"
          }, {
            id : "0", name : "Large cell neuroendocrine carcinoma"
          }, {
            id : "0", name : "Small cell carcinoma"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Grade 1/3, Well differentiated"
          }, {
            id : "0", name : "Grade 2/3, Moderately differentiated"
          }, {
            id : "0", name : "Grade 3/3, Poorly differentiated"
          }, {
            description : "low grade mucinous neoplasm",
            id : "0", name : "Low grade"
          }, {
            description : "high grade mucinous neoplasm",
            id : "0", name : "High grade"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "In situ/No invasion of lamina propria"
          }, {
            id : "0", name : "Intramucosal (invades lamina propria/muscularis mucosa)"
          }, {
            id : "0", name : "Invades submucosa"
          }, {
            id : "0", name : "Invades muscularis propria"
          }, {
            id : "0", name : "Invades subserosa"
          }, {
            id : "0", name : "Penetrates serosa"
          }, {
             description : "specify",
               inputs_required : [ "" ],
            id : "0", name : "Invades other organs"
          }, {
             description : "Stage TIS for low grade mucinous tumors",
            id : "0", name : "Mucin or cells invade muscularis propria"
          }, {
            id : "0", name : "Invades subserosal tissue"
          }, {
             description : "Stage T3 for low grade mucinous tumors",
            id : "0", name : "Mucin or cells invade subserosal tissue"
          }, {
            id : "0", name : "Penetrates serosa"
          }, {
             description : "Stage T4a for low grade mucinous tumors",
            id : "0", name : "Mucin or cells penetrate serosa"
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "include distance/location of closest margin, proximal, radial(if applicable)",
        id : "0", name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "0", name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Positive"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Indeterminate"
          }, {
            id : "0", name : "Suspicious"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Present, extensive"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor deposits",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "Present",
            inputs_required : [ "#" ],
            id : "0", name : ""
          }, {
            id : "0", name : "None"
          }, {
            id : "0", name : "Equivocal"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "0", name : ""
          }, {
            description : "pathologic",
            id : "0", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "0", name : "m"
          }, {
            description : "recurrent",
            id : "0", name : "r"
          }, {
            description : "post-treatment",
            id : "0", name : "y"
          }, {
            id : "0", name : "mp"
          }, {
            id : "0", name : "rp"
          }, {
            id : "0", name : "yp"
          }, {
            id : "0", name : "mrp"
          }, {
            id : "0", name : "myp"
          }, {
            id : "0", name : "ryp"
          }, {
            id : "0", name : "mryp"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "cannot be assessed OR acceptable for any stage low grade mucinous tumor",
            id : "0", name : "TX"
          }, {
            description : "No tumor",
            id : "0", name : "T0"
          }, {
            description : "in situ or invasion of lamina propria or muscularis mucosa ",
            id : "0", name : "Tis"
          }, {
            description : "low grade appendiceal mucinous neoplasm confined by the muscularis propria. acellular mucin or mucinous epithelium may invade into the muscularis propria. T1 and t2 are not appropriate for LAMN.  Mucin or epithelium into subserosa (T3) or serosa (T4a) are OK for either mucin or cells",
            id : "0", name : "Tis(LAMN)"
          }, {
            description : "invades submucosa (Do not use for low grade mucinous tumors",
            id : "0", name : "T1"
          }, {
            description : "Invades muscularis propria (do not use for low grade mucinous tumors)",
            id : "0", name : "T2"
          }, {
            description : "Invades subserosa, including acellular mucin or mucinous epithelium involving the subserosa of the appendix or mesoappendix",
            id : "0", name : "T3"
          }, {
            description : "Penetrates serosa, including acellular mucin or mucinous epithelium involving the serosa of the appendix or mesoappendix",
            id : "0", name : "T4a"
          }, {
            description : " invades adjacent organs",
            id : "0", name : "T4b"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "0", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "0", name : "N0"
          }, {
            description : "1 positive nodes",
            id : "0", name : "N1a"
          }, {
            description : "2 -3 positive nodes",
            id : "0", name : "N1b"
          }, {
            description : "tumor deposits only",
            id : "0", name : "N1c"
          }, {
            description : ">= 4 positive nodes",
            id : "0", name : "N2"
          } ],
          id : "0", name : "Category (pN)"
        }, {
          group : [ {
            description : "intraperitoneal mucin only",
            id : "0", name : "M1a"
          }, {
            description : "intraperitoneal cells with or without mucin (LAM), or metastases (carcinoma) only",
            id : "0", name : "M1b"
          }, {
            description : "other metastases outside of peritoneum",
            id : "0", name : "M1c"
          }, {
            id : "0", name : "M (not applicable)"
          }, {
            id : "0", name : "distant metastasis not applicable"
          } ],
          id : "0", name : ""
        } ]
        },  {
        id : "0", name : "MSI IHC and Interpretation",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Pending, addendum to follow"
          },{
             description : "tell the secretary to pick this and copy the answer in a separate note",
            id : "0", name : " see Note."
          },{
             description : "A.",
            id : "0", name : "MLH1+, MSH2+, MSH6+, PMS2+. Intact nuclear expression of MMR protein, low probability of microsatellite instability-high (MSI-H).  There are exceptions to the above IHC interpretations. These results should not be considered in isolation, and clinical correlation with genetic counseling is recommended to assess the need for germline testing."
          }, {
             description : "B.",
            id : "0", name : "MLH1-, MSH2+, MSH6+, PMS2-. Loss of nuclear expression of MLH1 and PMS2: deficient mismatch repair/ high probability of microsatellite instability-high (MSI-H). Testing for methylation of the MLH1 promoter is indicated (the presence of MLH1 methylation suggests that the tumor is sporadic and germline evaluation is probably not indicated; absence of MLH1 methylation suggests the possibility of Lynch syndrome, and sequencing and/or large deletion/duplication testing of germline MLH1 is indicated). There are exceptions to the above IHC interpretations. These results should not be considered in isolation, and clinical correlation with genetic counseling is recommended to assess the need for germline testing."
          }, {
             description : "C.",
            id : "0", name : "MLH1+, MSH2-, MSH6-, PMS2+. Loss of nuclear expression of MSH2 and MSH6: deficient mismatch repair/ high probability of microsatellite instability-high (MSI-H). High probability of Lynch syndrome (sequencing and or large deletion/duplication testing of germline MSH2 may be indicated, and, if negative, sequencing and or large deletion/duplication testing of germline MSH6 may be indicated). There are exceptions to the above IHC interpretations.   These results should not be considered in isolation, and clinical correlation with genetic counseling is recommended to assess the need for germline testing."
          }, {
             description : "D.",
            id : "0", name : "MLH1+, MSH2+, MSH6-, PMS2+. Loss of nuclear expression of MSH6 only: deficient mismatch repair/ high probability of microsatellite instability-high (MSI-H). High probability of Lynch syndrome (sequencing and or large deletion/duplication testing of germline MSH6 may be indicated). There are exceptions to the above IHC interpretations.   These results should not be considered in isolation, and clinical correlation with genetic counseling is recommended to assess the need for germline testing."
          }, {
             description : "E.",
            id : "0", name : "MLH1+, MSH2+, MSH6+, PMS2-. Loss of nuclear expression of PMS2 only: deficient mismatch repair/ high probability of microsatellite instability-high (MSI-H). High probability of Lynch syndrome (sequencing and or large deletion/duplication testing of germline PMS2 may be indicated). There are exceptions to the above IHC interpretations.   These results should not be considered in isolation, and clinical correlation with genetic counseling is recommended to assess the need for germline testing."
          } , {
            id : "0", name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            id : "0", name : "See case "
          } ],
          id : "0", name : ""
        } ]
      }, {
          description : "includes LAM by stage",
        id : "0", name : "Ancillary studies ordered",
       optional_state  : "required", "options" : [ {
          group : [ {
             description : "T1-3N0",
            id : "0", name : "PIK3CA"
          },{
             description : "T1-3N0 AND loss of MLH1 and PMS2",
            id : "0", name : "PIK3CA and MLH1 promoter methylation"
          }, {
             description : "T4 or N1",
            id : "0", name : "PIK3CA, K-RAS extended panel, N-RAS, and BRAF"
          }, {
             description : "T4 or N1 AND loss of MLH1 and PMS2",
            id : "0", name : "PIK3CA, K-RAS extended panel, N-RAS, BRAF, and MLH1 promoter methylation"
          }, {
            id : "0", name : "Pending results of MMR protein panel"
          }, {
            id : "0", name : "None"
          }, {
            id : "0", name : "Not applicable"
          }, {
            inputs_required : [ "" ],
            id : "0", name : "See case"
          } ],
          id : "0", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "0", name : "Appendix neuroendocrine tumor",
      optional : false,
      organ_group : "Endocrine",
      properties : [  {
        id : "0", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Appendectomy"
          }, {
            id : "0", name : "Appendectomy and cecal resecton"
          }, {
            id : "0", name : "Appendectomy and right colectmy"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Proximal half of appendix"
          }, {
            id : "0", name : "Distal half of appendix"
          }, {
            id : "0", name : "Diffusely involving appendix"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "0", name : ""
        } ]
      }, {
         description : "For small cell (high grade NET use appendix carcinoma protocol not this one) ",  
        id : "0", name : "Type and Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "< 2mitoses/10 hpf and/or Ki67<3% ", 
            id : "0", name : "Grade 1/3, Well differentiated neuroendocrine tumor, low grade (carcinoid)"
          }, {
            description : ">= 2 AND < 20 mitoses/10 hpf and/or Ki67 >=3 AND <20% ",  
            id : "0", name : "Grade 2/3, Well differentiated neuroendocrine tumor, intermediate grade (atypical carcinoid)"
          }, {
             description : "> 20 mitoses/10 hpf and/or Ki67 >20% ",  
            id : "0", name : "Grade 3/3, Well differentiated neuroendocrine tumor"
          } ],
          id : "0", name : ""
        } ]
      }, {
           description : "mitoses/ 2 mm squared NOT 10 hpf, approximately count 42 hpf and divide by 5", 
        id : "0", name : "Mitotic rate",
       optional_state  : "required", "options" : [ {
          group : [ {
            
            id : "0", name : "Less than 2 per 2 mm squared"
          }, {
          
            id : "0", name : "at least 2 and less than 20 /2 mm squared"
          }, {
            
            id : "0", name : "More than 20 per 2 mm squared"
          } ],
          id : "0", name : ""
        } ]  
        
      }, {
        id : "0", name : "Ki67 (Mib1)",
       optional_state  : "required", "options" : [ {
          group : [ {
              
            id : "0", name : "Less than 3%"
          }, {
          
            id : "0", name : "at least 3% and less than 20%"
          }, {
              
            id : "0", name : "More than 20%"
          } ],
          id : "0", name : ""
        } ]  
        
      }, {
        id : "0", name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "No invasion of lamina propria"
          }, {
            id : "0", name : "Intramucosal (invades lamina propria/muscularis mucosa)"
          }, {
            id : "0", name : "Invades submucosa"
          }, {
            id : "0", name : "Invades muscularis propria"
          }, {
            id : "0", name : "Invades subserosal tissue"
          }, {
            id : "0", name : "Penetrates serosa"
          }, {
            description : "specify",
             inputs_required : [ "" ],
            id : "0", name : "Invades other organs"
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "include distance/location of closest margin, proximal distal and radial",
        id : "0", name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "0", name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Positive"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Indeterminate"
          }, {
            id : "0", name : "Suspicious"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Present, extensive"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "0", name : ""
          }, {
            description : "pathologic",
            id : "0", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "0", name : "m"
          }, {
            description : "recurrent",
            id : "0", name : "r"
          }, {
            description : "post-treatment",
            id : "0", name : "y"
          }, {
            id : "0", name : "mp"
          }, {
            id : "0", name : "rp"
          }, {
            id : "0", name : "yp"
          }, {
            id : "0", name : "mrp"
          }, {
            id : "0", name : "myp"
          }, {
            id : "0", name : "ryp"
          }, {
            id : "0", name : "mryp"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            id : "0", name : "TX"
          }, {
            description : "No tumor",
            id : "0", name : "T0"
          }, {
            description : " Tumor 2 cm or less in greatest dimension",
            id : "0", name : "T1"
          }, {
            description : "Tumor more than 2 cm but less than or equal to 4 cm",
            id : "0", name : "T2"
          }, {
            description : "Tumor more than 4 cm or with subserosal invasion or involvement of the mesoappendix",
            id : "0", name : "T3"
          }, {
            description : " Tumor perforates the peritoneum or directly invades other adjacent organs or structures (excluding direct mural extension to adjacent subserosa of adjacent bowel), eg, abdominal wall and skeletal muscle",
            id : "0", name : "T4"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "0", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "0", name : "N0"
          }, {
            description : "positive nodes",
            id : "0", name : "N1"
          } ],
          id : "0", name : "Category (pN)"
        }, {
          group : [ {
            description : "distant metastases",
            id : "0", name : "M1"
          }, {
            id : "0", name : "M (not applicable)"
          }, {
            id : "0", name : "distant metastasis not applicable"
          } ],
          id : "0", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "0", name : "Bone",
      optional : false,
      organ_group : "Other",
      properties : [ {
        id : "0", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Intralesional resection"
          }, {
            id : "0", name : "Marginal resection "
          }, {
            id : "0", name : "Segmental/wide resection "
          }, {
            id : "0", name : "Radical resection "
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Anatomic location",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "specify",
             inputs_required : [ "" ],
            id : "0", name : "Appendicular skeleton "
          }, {
             description : "specify",
              inputs_required : [ "" ],
            id : "0", name : "Spine"
          }, {
             description : "specify",
              inputs_required : [ "" ],
            id : "0", name : "Pelvis "
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Epiphysis or apophysis"
          }, {
            id : "0", name : "Metaphysis "
          }, {
            id : "0", name : "Diaphysis"
          }, {
            id : "0", name : "Cortex "
          }, {
            id : "0", name : "Medullary cavity "
          }, {
            id : "0", name : "Surface "
          }, {
            id : "0", name : "Joint"
          }, {
            id : "0", name : "Tumor extension into soft tissue "
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Type",
       optional_state  : "required", "options" : [ {
          id : "0", name : ""
        } ]
      }, {
         description : "/10 hpf, most proliferative area",
        id : "0", name : "Mitotic Rate ",
       optional_state  : "required", "options" : [ {
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Necrosis",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            description : "%",
            inputs_required : [ "" ],
            id : "0", name : "Present"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Grade 1/3, Well differentiated"
          }, {
            id : "0", name : "Grade 2/3, Moderately differentiated"
          }, {
            id : "0", name : "Grade 3/3, Poorly differentiated"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "include distance",
        id : "0", name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "0", name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Positive"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Treatment effect, primary site",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Present  "
          }, {
            id : "0", name : "Indeterminate "
          }, {
            id : "0", name : "Not known"
          }  ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "0", name : ""
          }, {
            description : "pathologic",
            id : "0", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "0", name : "m"
          }, {
            description : "recurrent",
            id : "0", name : "r"
          }, {
            description : "post-treatment",
            id : "0", name : "y"
          }, {
            id : "0", name : "mp"
          }, {
            id : "0", name : "rp"
          }, {
            id : "0", name : "yp"
          }, {
            id : "0", name : "mrp"
          }, {
            id : "0", name : "myp"
          }, {
            id : "0", name : "ryp"
          }, {
            id : "0", name : "mryp"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            id : "0", name : "TX"
          }, {
            description : "No tumor",
            id : "0", name : "T0"
          }, {
            description : " NOS Tumor 8 cm or less in greatest dimension",
            id : "0", name : "T1"
          }, {
            description : "NOS Tumor more than 8 cm in greatest dimension",
            id : "0", name : "T2"
          }, {
            description : "NOS Discontinuous tumors in the primary bone site ",
            id : "0", name : "T3"
          }, {
            description : "SPINE  limited to one or two adjacent vertebrae",
            id : "0", name : "T1"
          }, {
            description : "SPINE  confied to 3 adjacent vertebrae",
            id : "0", name : "T2"
          }, {
            description : "SPINE  limited to 4 or more adjacent vertebrae or any non adjacent vertebrae",
            id : "0", name : "T3"
          }, {
            description : "SPINE  extends into spinal canal",
            id : "0", name : "T4a"
          }, {
            description : "SPINE  gross vascular invasion or tumor thrombus in great vessels",
            id : "0", name : "T4b"
          }, {
            description : "PELVIS one pelvic segment, <= 8cm",
            id : "0", name : "T1a"
          }, {
            description : "PELVIS one pelvic segment, > 8cm",
            id : "0", name : "T1b"
          }, {
            description : "PELVIS two pelvic segments or extraosseous extension, <= 8cm",
            id : "0", name : "T2a"
          }, {
            description : "PELVIS two pelvic segments or extraosseous extension, > 8cm",
            id : "0", name : "T2b"
          }, {
            description : "PELVIS two pelvis segments and extraosseous extension, <= 8cm",
            id : "0", name : "T3a"
          }, {
            description : "PELVIS two pelvis segments and extraosseous extension, > 8cm ",
            id : "0", name : "T3b"
          }, {
            description : "PELVIS three pelvic segments or crossing sacroiliac joint",
            id : "0", name : "T4"
          }  ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "0", name : "NX"
          }, {
            description : "No regional lymph node metastases",
            id : "0", name : "N0"
          }, {
            description : "Regional lymph node metastases",
            id : "0", name : "N1"
          } ],
          id : "0", name : "Category (pN)"
        }, {
          group : [ {
            description : "Lung metastases",
            id : "0", name : "M1a"
          }, {
            description : "Other metastases",
            id : "0", name : "M1b"
          }, {
            id : "0", name : "M (not applicable)"
          }, {
            id : "0", name : "distant metastasis not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "Immunohistochemistry, Cytogenetics, Molecular Pathology",
        id : "0", name : "Ancillary studies ordered",
       optional_state  : "required", "options" : [ {
          id : "0", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "0", name : "Bone marrow, NOS",
      optional : true,
      organ_group : "Hematologic",
      properties : [ {
        id : "0", name : "Specimen",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Right posterior iliac crest"
          } , {
            id : "0", name : "Left posterior iliac crest"
          }, {
            id : "0", name : "Sternal"
          }],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Aspiration"
          }, {
            id : "0", name : "Aspirate and clot"
          }, {
            id : "0", name : "Aspirate, clot, and core biopsy"
          }, {
            id : "0", name : "Aspirate, clot, core biopsy, and peripheral smear"
          } ],
          id : "0", name : ""
        } ]
      
      }, {
        id : "0", name : "Specimen adequacy",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Satisfactory"
          }, {
            id : "0", name : "Unsatisfactory"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "Extended list",
            inputs_required : [ [ "MYELOPROLIFERATIVE NEOPLASMS", "Chronic myelogenous leukemia, BCR-ABL1 positive", "Chronic neutrophilia leukemia", "Polycythemia vera", "Primary myelofibrosis", "Essential thrombocythemia", "Chronic eosinophilic leukemia, not otherwise specified (NOS)", "Mastocytosis", "Myeloproliferative neoplasm, unclassifiable", "", "PDGFRA, PDGFRB and FGFR1 NEOPLASMS", "Myeloid or lymphoid neoplasm with PDGFRA rearrangement", "Myeloid neoplasm with PDGFRB rearrangement", "Myeloid or lymphoid neoplasm with FGFR1 abnormalities", "", "MYELODYSPLASTIC/MYELOPROLIFERATIVE NEOPLASMS", "Chronic myelomonocytic leukemia", "Atypical chronic myeloid leukemia BCR-ABL1 negative", "Juvenile myelomonocytic leukemia", "Myelodysplastic/myeloproliferative neoplasm, unclassifiable", "Refractory anemia with ring sideroblasts associated with marked thrombocytosis", "", "MYELODYSPLASTIC SYNDROMES", "Refractory anemia", "Refractory neutropenia", "Refractory thrombocytopenia", "Refractory anemia with ring sideroblasts", "Refractory cytopenia with multilineage dysplasia", "Refractory anemia with excess blasts", "Myelodysplastic syndrome associated with isolated del(5q)", "Myelodysplastic syndrome, unclassifiable", "Refractory cytopenia of childhood", "", "AML WITH RECURRENT GENETIC ABNORMALITIES", "AML with t(8;21)(q22;q22); RUNX1-RUNX1T1", "AML with inv(16)(p13.1q22) or t(16;16)(p13.1;q22); CBFB-MYH11", "Acute promyelocytic leukemia with t(15;17)(q22;q12); PML-RARA", "AML with t(9;11)(p22;q23); MLLT3-MLL", "AML with t(6;9)(p23;q34); DEK-NUP214", "AML with inv(3)(q21q26.2) or t(3;3)(q21;q26.2); RPN1-EVI1", "AML (megakaryoblastic) with t(1;22)(p13;q13); RBM15-MKL1", "AML with mutated NPM1", "AML with mutated CEBPA", "", "AML WITH MDS", "AML with Multilineage dysplasia", "AML with Prior myelodysplastic syndrome", "AML with Myelodysplasia-related cytogenetic abnormalities", "", "THERAPY RELATED MYELOID NEOPLASMS", "Therapy-related AML", "Therapy-related myelodysplastic syndrome", "Therapy-related myelodysplastic/myeloproliferative neoplasm", "", "AML NOS", "AML with minimal differentiation", "AML without maturation", "AML with maturation", "Acute myelomonocytic leukemia", "Acute monoblastic/monocytic leukemia", "Acute erythroid leukemia", "Acute megakaryocytic leukemia", "Acute basophilic leukemia", "Acute panmyelosis with myelofibrosis", "AML, NOS", "", "MPS IN DOWNS SYNDROME", "Transient abnormal myelopoiesis in Downs syndrome", "Myeloid leukemia associated with Down syndrome", "", "ACUTE LEUKEMIA OF AMBIGUOUS LINEAGE", "Acute undifferentiated leukemia", "Mixed phenotype acute leukemia with t(9;22)(q34;q11.2); BCR-ABL1", "Mixed phenotype acute leukemia with t(v;11q23); MLL rearranged", "Mixed phenotype acute leukemia, B/myeloid, NOS", "Mixed phenotype acute leukemia, T/myeloid, NOS", "Mixed phenotype acute leukemia, NOS, rare types", "Natural killer (NK) cell lymphoblastic leukemia/lymphoma", "", "OTHER MYEOLOID LEUKEMIAS", "Blastic plasmacytoid dendritic cell neoplasm", "PRECURSOR LYMPHOID NEOPLASMS", "B lymphoblastic leukemia/lymphoma, NOS", "B lymphoblastic leukemia/lymphoma with t(9;22)(q34;q11.2); BCR-ABL1", "B lymphoblastic leukemia/lymphoma with t(v;11q23); MLL rearranged", "B lymphoblastic leukemia/lymphoma with t(12;21)(p13;q22); TEL-AML1 (ETV6-RUNX1)", "B lymphoblastic leukemia/lymphoma with hyperdiploidy", "B lymphoblastic leukemia/lymphoma with hypodiploidy (hypodiploid ALL)", "B lymphoblastic leukemia/lymphoma with t(5;14)(q31;q32); IL3-IGH", "B lymphoblastic leukemia/lymphoma with t(1;19)(q23;p13.3); E2A-PBX1 (TCF3-PBX1)", "T lymphoblastic leukemia/lymphoma", "", "MATURE B CELL NEOPLASMS", "Chronic lymphocytic leukemia/small lymphocytic lymphoma", "B-cell prolymphocytic leukemia", "Splenic B-cell marginal zone lymphoma", "Hairy cell leukemia", "Splenic B-cell lymphoma/leukemia, unclassifiable", "Splenic diffuse red pulp small B-cell lymphoma", "Hairy cell leukemia-variant", "Lymphoplasmacytic lymphoma", "Plasma cell myeloma", "Extranodal marginal zone lymphoma of mucosa-associated lymphoid tissue (MALT lymphoma", "Follicular lymphoma", "Mantle cell lymphoma", "Diffuse large B-cell lymphoma (DLBCL), NOS", "T cell/histiocyte-rich large B-cell lymphoma", "Primary cutaneous DLBCL, leg type", "Epstein-Barr virus (EBV)-positive DLBCL of the elderly", "DLBCL associated with chronic inflammation", "Lymphomatoid granulomatosis", "Anaplastic lymphoma kinase (ALK)-positive large B-cell lymphoma", "Plasmablastic lymphoma", "Large B-cell lymphoma arising in HHV8-associated multicentric Castleman disease", "Burkitt lymphoma", "B-cell lymphoma, unclassifiable, with features intermediate between diffuse large B-cell lymphoma and Burkitt lymphoma", "B-cell lymphoma, unclassifiable, with features intermediate between diffuse large B-cell lymphoma and classical Hodgkin lymphoma", "B-cell lymphoma, NOS", "", "MATURE T AND NK CELL NEOPLASMS", "T-cell lymphoma,", "T-cell prolymphocytic leukemia", "T-cell large granular lymphocytic leukemia", "Chronic lymphoproliferative disorder of NK cells", "Aggressive NK-cell leukemia ", "Adult T-cell leukemia/lymphoma ", "Extranodal NK/T-cell lymphoma, nasal type", "Enteropathy-associated T-cell lymphoma", "Hepatosplenic T-cell lymphoma", "Mycosis fungoides", "Peripheral T-cell lymphoma, NOS", "Angioimmunoblastic T-cell lymphoma", "Anaplastic large cell lymphoma, ALK-positive", "Anaplastic large cell lymphoma, ALK-negative", "", "HODGKIN LYMPHOMA", "Nodular lymphocyte predominant Hodgkin lymphoma", "Classical Hodgkin lymphoma", "", "HISTIOCYTIC AND DENDRITIC CELL NEOPLASMS", "Histiocytic sarcom", "Langerhans cell histiocytosis", "Langerhans cell sarcoma", "Interdigitating dendritic cell sarcoma", "Follicular dendritic cell sarcoma", "Disseminated juvenile xanthogranuloma", "Histiocytic neoplasm, NOS", "", "POST-TRANSPLASNT LYMPHOPROLIFERATIVE DISORDERS (PTLD)", "Plasmacytic hyperplasia", "Infectious mononucleosis-like PTLD", "Polymorphic PTLD", "Monomorphic PTLD (B- and T/NK-cell types)", "Classical Hodgkin lymphoma type PTLD" ] ],
            id : "0", name : ""
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Immunohistochemistry",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "Performed",
            inputs_required : [ "" ],
            id : "0", name : ""
          }, {
            id : "0", name : "See separate report"
          }, {
  
            id : "0", name : "See above"
          }, {
            id : "0", name : "Not performed"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Flow cytometry",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "Performed",
            inputs_required : [ "" ],
            id : "0", name : ""
          }, {
            id : "0", name : "See separate report"
          }, {
            id : "0", name : "See above"
          }, {
            id : "0", name : "Not performed"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Cytogenetics (chromosome analysis)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "Performed",
            inputs_required : [ "" ],
            id : "0", name : ""
          }, {
            id : "0", name : "See separate report"
          }, {
            id : "0", name : "Not performed"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Cytogenetics (FISH)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "Performed",
            inputs_required : [ "" ],
            id : "0", name : ""
          }, {
            id : "0", name : "See separate report"
          }, {
            id : "0", name : "Not performed"
          } ],
          id : "0", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "0", name : "Bone marrow, Plasma cell neoplasm",
      optional : true,
      organ_group : "Hematologic",
      properties : [ {
        id : "0", name : "Specimen",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Right posterior iliac crest"
          }, {
            id : "0", name : "Left posterior iliac crest"
          }, {
            id : "0", name : "Sternal"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Aspirate only"
          }, {
            id : "0", name : "Aspirate and clot"
          }, {
            id : "0", name : "Aspirate, clot, and core biopsy"
          }, {
            id : "0", name : "Aspirate, clot, core biopsy, and peripheral smear"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Extent of plasma cell infiltrate",
       optional_state  : "required", "options" : [ {
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Immunoglobulin deposits",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None (negative Congo red stain)"
          }, {
            id : "0", name : "Amyloid present (positive Congo red stain)"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Plasma cell myeloma"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Immunohistochemistry",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "Performed",
            inputs_required : [ "" ],
            id : "0", name : ""
          }, {
            id : "0", name : "See separate report"
          }, {
            id : "0", name : "See above"
          }, {
            id : "0", name : "Not performed"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Flow cytometry",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "Performed",
            inputs_required : [ "" ],
            id : "0", name : ""
          }, {
            id : "0", name : "See separate report"
          }, {
            id : "0", name : "See above"
          }, {
            id : "0", name : "Not performed"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Cytogenetics (chromosome analysis)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "Performed",
            inputs_required : [ "" ],
            id : "0", name : ""
          }, {
            id : "0", name : "See separate report"
          }, {
            id : "0", name : "Not performed"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Cytogenetics (FISH)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "Performed",
            inputs_required : [ "" ],
            id : "0", name : ""
          }, {
            id : "0", name : "See separate report"
          }, {
            id : "0", name : "Not performed"
          } ],
          id : "0", name : ""
        } ]
      } ]
    }, {
      most_common : true,
      id : "0", name : "Breast DCIS",
      optional : false,
      organ_group : "Breast",
      properties : [ {
        id : "0", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Right breast excision"
          }, {
            id : "0", name : "Right breast excision with separate margins"
          }, {
            id : "0", name : "Right breast re-excision"
          }, {
            id : "0", name : "Right mastectomy"
          }, {
            id : "0", name : "Right nipple sparing mastectomy"
          }, {
            id : "0", name : "Left breast excision"
          }, {
            id : "0", name : "Left breast excision with separate margins"
          }, {
            id : "0", name : "Left breast re-excision"
          }, {
            id : "0", name : "Left mastectomy"
          }, {
            id : "0", name : "Left nipple sparing mastectomy"
          } ],
          id : "0", name : ""
        } ]
      }, {
          description : "1 block = 4mm",
        id : "0", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Ductal carcinoma in situ"
          }, {
            
            id : "0", name : "Paget disease of nipple without DCIS"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "low",
            id : "0", name : "Grade 1/3, low nuclear grade"
          }, {
            description : "intermediate",
            id : "0", name : "Grade 2/3, intermediate nuclear grade"
          }, {
            description : "high",
            id : "0", name : "Grade 3/3, high nuclear grade"
          }, {
            description : "intermediate and high",
            id : "0", name : "Grade 3/3 and 2/3, high and intermediate nuclear grade"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Necrosis",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Present, focal"
          }, {
            id : "0", name : "Present, central/comedo"
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "Free text distance, location, for all tumors 0-2mm from ink, do NOT use terms FREE or POSITIVE",
        id : "0", name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [  {
            id : "0", name : "Free (>2mm)"
          }, {
            description : "location, only use for TUMOR ON ink",
            inputs_required : [ "" ],
            id : "0", name : "Positive"
          } ],
           
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # sentinel",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "> 2mm",
        id : "0", name : "Lymph nodes, # w/ macrometastases",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : ">0.2 mm AND <= 2mm OR > 200 cells",
        id : "0", name : "Lymph nodes, # w/ micrometastases",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "<= 0.2mm AND <= 200 cells",
        id : "0", name : "Lymph nodes, # w/ isolated tumor cells",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "0", name : ""
          }, {
            description : "pathologic",
            id : "0", name : "p"
          }, {
            description : "multiple foci of DCIS",
            id : "0", name : "m"
          }, {
            description : "recurrent",
            id : "0", name : "r"
          }, {
            description : "post-treatment",
            id : "0", name : "y"
          }, {
            id : "0", name : "mp"
          }, {
            id : "0", name : "rp"
          }, {
            id : "0", name : "yp"
          }, {
            id : "0", name : "mrp"
          }, {
            id : "0", name : "myp"
          }, {
            id : "0", name : "ryp"
          }, {
            id : "0", name : "mryp"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "DCIS",
            id : "0", name : "Tis"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "0", name : "NX"
          }, {
            description : "No metastases",
            id : "0", name : "N0"
          }, {
            description : "No metastases AND <6 sentinel Nodes",
            id : "0", name : "N0 (sn)"
          }, {
            description : "ITC's <= 0.2 mm AND <= 200 cells (detected by H&E or IHC)",
            id : "0", name : "N0 (i+)"
          }, {
            description : "ITC's <= 0.2 mm AND <= 200 cells (detected by H&E or IHC AND < 6 sentinel nodes)",
            id : "0", name : "N0 (i+) (sn)"
          }, {
            description : "Metastases > 0.2 mm AND <= 2.0 mm OR > 200 cells)",
            id : "0", name : "N1mi"
          }, {
            description : "Metastases > 0.2 mm AND <= 2.0 mm OR > 200 cells) AND < 6 sentinel nodes",
            id : "0", name : "N1mi (sn)"
          }, {
            description : "Metastases in 1 to 3 axillary lymph nodes, at least 1 > 2.0 mm",
            id : "0", name : "N1a"
          }, {
            description : "Metastases in 1 to 3 axillary lymph nodes, at least 1 > 2.0 mm AND < 6 sentinel nodes",
            id : "0", name : "N1a (sn)"
          }, {
            description : "Metastases in 4 to 9 axillary lymph nodes (at least 1 > 2.0 mm)",
            id : "0", name : "N2a"
          }, {
            description : "Metastases in 4 to 9 axillary lymph nodes (at least 1 > 2.0 mm) AND < 6 sentinel nodes",
            id : "0", name : "N2a (sn)"
          }, {
            description : "Metastases in 10 or more axillary lymph nodes (at least 1 > 2.0 mm)",
            id : "0", name : "N3a"
          } ],
          id : "0", name : "Category (pN)"
        }, {
          group : [ {
            description : "Distant detectable metastases as histologically proven larger than 0.2 mm",
            id : "0", name : "M1"
          }, {
            id : "0", name : "M (not applicable)"
          }, {
            id : "0", name : "distant metastasis not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
         description : "repeat if original negative or s/p neoadjuvant therapy regardless of original",
        id : "0", name : "Estrogen Receptor",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name :  "Positive, >90% of cells, strong intensity"
          },{
            id : "0", name :  "Positive  50-90% of cells, strong intensity"
          },{
            id : "0", name :  "Positive  10-50% of cells, strong intensity"
          },{
            id : "0", name :  "Positive  50-90% of cells, moderate intensity"
          },{
            id : "0", name :  "Positive  10-50% of cells, moderateintensity"
          },{
            id : "0", name :  "Positive  10-50% of cells, moderate intensity"
          },{
            id : "0", name :  "Positive  10-50% of cells, weak intensity"
          },{
            id : "0", name :  "Positive  1-10% of cells, weak intensity"
          }, {
            id : "0", name : "Negative (<1%)"
          }, {
            id : "0", name : "Pending"
          }, {
            id : "0", name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            id : "0", name : "See case "
          } ],
          id : "0", name : ""
        } ]
      }, {
         description : "repeat if original negative or s/p neoadjuvant therapy regardless of original",
        id : "0", name : "Progesterone Receptor",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name :  "Positive, >90% of cells, strong intensity"
          },{
            id : "0", name :  "Positive  50-90% of cells, strong intensity"
          },{
            id : "0", name :  "Positive  10-50% of cells, strong intensity"
          },{
            id : "0", name :  "Positive  50-90% of cells, moderate intensity"
          },{
            id : "0", name :  "Positive  10-50% of cells, moderateintensity"
          },{
            id : "0", name :  "Positive  10-50% of cells, moderate intensity"
          },{
            id : "0", name :  "Positive  10-50% of cells, weak intensity"
          },{
            id : "0", name :  "Positive  1-10% of cells, weak intensity"
          }, {
            id : "0", name : "Negative (<1%)"
          }, {
            id : "0", name : "Pending"
          }, {
            id : "0", name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            id : "0", name : "See case "
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Known repeat ER/PR testing",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "No"
          }, {
            id : "0", name : "Yes"
          } ],
          id : "0", name : ""
        } ]
           }, {
        id : "0", name : "Additional findings",
        optional_state : "required",
        "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Biopsy site"
          }, {
            id : "0", name : "Biopsy site x 2"
          }, {
            id : "0", name : "Atypical ductal hyperplasia"
          }, {
            id : "0", name : "Atypical lobular hyperplasia"
          }, { 
            id : "0", name : "Lobular carcinoma in situ, classical type"
          }, { 
            id : "0", name : "Lobular carcinoma in situ, pleomorphic type"
          }, {
            id : "0", name : "Pagets disease"
          }, {
            id : "0", name : "Biopsy site and atypical ductal hyperplasia"
          }, {
            id : "0", name : "Biopsy site, atypical ductal hyperplasia and Pagets disease"
          }, {
            id : "0", name : "Biopsy site and atypical lobular hyperplasia"
          }, {
            id : "0", name : "Biopsy site, atypical lobular hyperplasia and Pagets disease"
          }, {
            id : "0", name : "Biopsy site and lobular carcinoma in situ, classical type"
          }, {
            id : "0", name : "Biopsy site and lobular carcinoma in situ, classical type and Pagets disease"
          }, {
            id : "0", name : "Biopsy site, atypical ductal hyperplasia, and atypical lobular hyperplasia"
          }, {
            id : "0", name : "Biopsy site, atypical ductal hyperplasia, and lobular carcinoma in situ, classical type"
          }, {
            id : "0", name : "Biopsy site, atypical ductal hyperplasia, lobular carcinoma in situ, classical type and Pagets disease"
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "Add billing code 3260F for women, 3260F1P for men",
        id : "0", name : "ICD10",
       optional_state  : "required", "options" : [ {
          group : [ {
             description : " for women",
            id : "0", name : "C50.919"
          },{
             description : " for men",
            id : "0", name : "C50.929"
          } ],
          id : "0", name : ""
        } ]
      } ]
    }, {
      most_common : true,
      id : "0", name : "Breast Invasive",
      optional : false,
      organ_group : "Breast",
      properties : [ {
        id : "0", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Right breast excision"
          }, {
            id : "0", name : "Right breast excision with separate margins"
          }, {
            id : "0", name : "Right breast re-excision"
          }, {
            id : "0", name : "Right mastectomy"
          }, {
            id : "0", name : "Right nipple sparing mastectomy"
          }, {
            id : "0", name : "Left breast excision"
          }, {
            id : "0", name : "Left breast excision with separate margins"
          }, {
            id : "0", name : "Left breast re-excision"
          }, {
            id : "0", name : "Left mastectomy"
          }, {
            id : "0", name : "Left nipple sparing mastectomy"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Invasive ductal carcinoma"
          }, {
            id : "0", name : "Invasive lobular carcinoma, classical type"
          }, {
            id : "0", name : "Invasive lobular carcinoma, pleomorphic type"
          }, {
            id : "0", name : "Invasive carcinoma with both ductal and lobular features"
          }, {
            id : "0", name : "Micro-invasive carcinoma"
          }, {
            id : "0", name : "Mucinous carcinoma"
          }, {
            id : "0", name : "Invasive ductal carcinoma with mucinous features"
          }, {
            id : "0", name : "Invasive ductal carcinoma and mucinous carcinoma"
          }, {
            id : "0", name : "Invasive tubular carcinoma"
          }, {
            id : "0", name : "Invasive ductal carcinoma with tubular features"
          }, {
            id : "0", name : "Invasive tubulo-lobular carcinoma"
          }, {
            id : "0", name : "Invasive cribiform carcinoma"
          }, {
            id : "0", name : "Invasive carcinoma with micropapillary features"
          }, {
            id : "0", name : "Invasive papillary carcinoma"
          }, {
            id : "0", name : "Medullary carcinoma"
          }, {
            id : "0", name : "Metaplastic carcinoma"
          }, {
            id : "0", name : "Adenoid cystic carcinoma"
          }, {
            id : "0", name : "Secretory carcinoma"
          }, {
            id : "0", name : "Invasive carcinoma with basaloid features"
          }, {
            description : "T0, no residual tumor",
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tubule formation",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : ">75%",
            id : "0", name : "Score 1"
          }, {
            description : "10% to 75%",
            id : "0", name : "Score 2"
          }, {
            description : "<10%",
            id : "0", name : "Score 3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Nuclear pleomorphism",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "nuclei small",
            id : "0", name : "Score 1"
          }, {
            description : "cells larger than normal",
            id : "0", name : "Score 2"
          }, {
            description : "prominent nucleoli, marked variation",
            id : "0", name : "Score 3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Mitotic rate",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "<=3 mitoses per mm2",
            id : "0", name : "Score 1"
          }, {
            description : "4-7 mitoses per mm2",
            id : "0", name : "Score 2"
          }, {
            description : ">8 mitoses per mm2",
            id : "0", name : "Score 3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
     
      }, {
        id : "0", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "scores of 3, 4, or 5",
            id : "0", name : "Nottingham grade 1/3"
          }, {
            description : "scores of 6 or 7",
            id : "0", name : "Nottingham grade 2/3"
          }, {
            description : "scores of 8 or 9",
            id : "0", name : "Nottingham grade 3/3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
         description : "Give size if only microinvasive",
        id : "0", name : "DCIS",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
             description : "use for mastectomy; try to use Extensive/nonextensive for excision",
            id : "0", name : "Present"
          }, {
             description : "excision specimen, DCIS >25% of main mass AND extends beyond invasive tumor",
            id : "0", name : "Extensive intraductal component present"
          }, {
              description : "excision specimen, DCIS <25% of main mass OR does not extends beyond invasive tumor",
            id : "0", name : "Present, but NOT extensive"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      
      }, {
        id : "0", name : "Skin involvement",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Not applicable"
          }, {
            description : "this does not change the T stage",
            id : "0", name : "Invades into the dermis without ulceration"
          }, {
            description : "this does not change the T stage",
            id : "0", name : "Invades into the epidermis without ulceration"
          }, {
            description : "classified as T4b",
            id : "0", name : "Invades into the dermis with ulceration"
          }, {
            description : "classified as T4b",
            id : "0", name : "Invades into the epidermis with ulceration"
          }, {
            description : "classified as T4b",
            id : "0", name : "Satellite skin foci are present"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Nipple involvement",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Not applicable"
          }, {
            id : "0", name : "Paget disease of the nipple"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Muscle involvement",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Not applicable"
          }, {
            id : "0", name : "Carcinoma invades skeletal muscle"
          }, {
            description : "classified as T4a",
            id : "0", name : "Carcinoma invades chest wall"
          } ],
          id : "0", name : ""
        } ]
      }, {
         description : "Free text distance, location, for all tumors 0-2mm from ink, do not use terms FREE or POSITIVE",
        id : "0", name : "Margins, invasive tumor",
       optional_state  : "required", "options" : [ {
          group : [  {
            id : "0", name : "Free (>2mm)"
          }, {
            description : "location, only use for TUMOR ON INK",
            inputs_required : [ "" ],
            id : "0", name : "Positive"
          }, {
            description : "T0, no residual tumor",
            id : "0", name : "Not applicable"
          } ],
          
          id : "0", name : ""
        } ]
      }, {
         description : "Free text distance, location, for all tumors 0-2mm from ink, do not use term FREE or POSITIVE",
        id : "0", name : "Margins, DCIS",
       optional_state  : "required", "options" : [ {
          group : [  {
            id : "0", name : "Free (>2mm)"
          }, {
            description : "location, only for TUMOR ON INK",
            inputs_required : [ "" ],
            id : "0", name : "Positive"
          }, {
            id : "0", name : "Not applicable"
          } ],
          
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # sentinel",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "> 2mm",
        id : "0", name : "Lymph nodes, # w/ macrometastases",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : ">0.2 mm AND <= 2mm OR > 200 cells",
        id : "0", name : "Lymph nodes, # w/ micrometastases",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "<= 0.2mm and < 200 cells",
        id : "0", name : "Lymph nodes, # w/ isolated tumor cells",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
       }, {
        id : "0", name : "Size of largest metastasis",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
          }]
      }, {
        id : "0", name : "Extranodal Extension ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Not applicable"
          }, {
            id : "0", name : "None"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Equivocal"
          } ],
          id : "0", name : ""
          }]
        }, {
        id : "0", name : "Metastasis detection method ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Not applicable"
          }, {
            id : "0", name : "Frozen section/intra-operative smear"
          }, {
            description : "First H&E",
            id : "0", name : "Routine H&E"
          }, {
             description : "2nd or more levels",
            id : "0", name : "Serial H&E"
          }, {
           id : "0", name : "Serial H&E and IHC"
         }, {
            id : "0", name : "IHC only"
          }, {
            id : "0", name : "Other"
          } ],
          id : "0", name : ""
          }]
        }, {
        id : "0", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Indeterminate"
          }, {
            id : "0", name : "Suspicious"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Present, extensive"
          }, {
            id : "0", name : "Present, including dermal LVI"
          } ],
          id : "0", name : ""
        } ]
   
      }, {
        id : "0", name : "Treatment effect, primary site",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Not applicable"
          }, {
            id : "0", name : "No definite response"
          }, {
            id : "0", name : "Probable or definite response"
          } , {
            id : "0", name : "Not known"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Treatment effect, lymph nodes",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Not applicable"
          }, {
            id : "0", name : "No definite response"
          }, {
            id : "0", name : "Fibrous scarring with metastases"
          }, {
            id : "0", name : "Fibrous scarring without metastases"
          }, {
            id : "0", name : "Fibrous scarring (treatment effect) and biopsy site with metastases"
          }, {
            id : "0", name : "Fibrous scarring (treatment effect) and biopsy site without metastases"
          }, {
            id : "0", name : "No fibrous scarring or metastases"
          }, {
            id : "0", name : "Not known"
          }  ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "0", name : ""
          }, {
            description : "pathologic",
            id : "0", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "0", name : "m"
          }, {
            description : "recurrent",
            id : "0", name : "r"
          }, {
            description : "post-treatment",
            id : "0", name : "y"
          }, {
            id : "0", name : "mp"
          }, {
            id : "0", name : "rp"
          }, {
            id : "0", name : "yp"
          }, {
            id : "0", name : "mrp"
          }, {
            id : "0", name : "myp"
          }, {
            id : "0", name : "ryp"
          }, {
            id : "0", name : "mryp"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "No residual tumor, s/p neoadjuvant treatment",
            id : "0", name : "T0"
          }, {
            description : "DCIS only, s/p neoadjuvant treament",
            id : "0", name : "Tis"
          }, {
            description : "Tumor <= 1 mm",
            id : "0", name : "T1mi"
          }, {
            description : "Tumor > 1 mm AND <= 5 mm",
            id : "0", name : "T1a"
          }, {
            description : "Tumor > 5 mm AND <= 10 mm",
            id : "0", name : "T1b"
          }, {
            description : "Tumor > 10 mm AND <= 20 mm",
            id : "0", name : "T1c"
          }, {
            description : "Tumor > 20 mm AND <= 50 mm",
            id : "0", name : "T2"
          }, {
            description : "Tumor > 50 mm",
            id : "0", name : "T3"
          }, {
            description : "Extension to chest wall, not including only pectoralis muscle",
            id : "0", name : "T4a"
          }, {
            description : "Ulceration and/or ipsilateral satellite nodules and/or edema (including peau d'orange) of the skin which do not meet the criteria for inflammatory carcinoma",
            id : "0", name : "T4b"
          }, {
            description : "Both T4a and T4b",
            id : "0", name : "T4c"
          }, {
            description : "Inflammatory carcinoma",
            id : "0", name : "T4d"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "0", name : "NX"
          }, {
            description : "No metastases",
            id : "0", name : "N0"
          }, {
            description : "No metastases AND <6 sentinel Nodes",
            id : "0", name : "N0 (sn)"
          }, {
            description : "ITC's <= 0.2 mm AND <= 200 cells (detected by H&E or IHC)",
            id : "0", name : "N0 (i+)"
          }, {
            description : "ITC's <= 0.2 mm AND <= 200 cells (detected by H&E or IHC AND < 6 sentinel nodes)",
            id : "0", name : "N0 (i+) (sn)"
          }, {
            description : "Metastases > 0.2 mm AND <= 2.0 mm OR > 200 cells)",
            id : "0", name : "N1mi"
          }, {
            description : "Metastases > 0.2 mm AND <= 2.0 mm OR > 200 cells) AND < 6 sentinel nodes",
            id : "0", name : "N1mi (sn)"
          }, {
            description : "Metastases in 1 to 3 axillary lymph nodes, at least 1 > 2.0 mm",
            id : "0", name : "N1a"
          }, {
            description : "Metastases in 1 to 3 axillary lymph nodes, at least 1 > 2.0 mm AND < 6 sentinel nodes",
            id : "0", name : "N1a (sn)"
          }, {
            description : "Metastases in 4 to 9 axillary lymph nodes (at least 1 > 2.0 mm)",
            id : "0", name : "N2a"
          }, {
            description : "Metastases in 4 to 9 axillary lymph nodes (at least 1 > 2.0 mm) AND < 6 sentinel nodes",
            id : "0", name : "N2a (sn)"
          }, {
            description : "Metastases in 10 or more axillary lymph nodes (at least 1 > 2.0 mm)",
            id : "0", name : "N3a"
          } ],
          id : "0", name : "Category (pN)"
        }, {
          group : [ {
            description : "Distant detectable metastasis as histologically proven larger than 0.2 mm",
            id : "0", name : "M1"
          }, {
            id : "0", name : "M (not applicable)"
          }, {
            id : "0", name : "distant metastasis not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
         description : "repeat if original negative or s/p neoadjuvant therapy regardless of original",
        id : "0", name : "Estrogen Receptor",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name :  "Positive, >90% of cells, strong intensity"
          },{
            id : "0", name :  "Positive  50-90% of cells, strong intensity"
          },{
            id : "0", name :  "Positive  10-50% of cells, strong intensity"
          },{
            id : "0", name :  "Positive  50-90% of cells, moderate intensity"
          },{
            id : "0", name :  "Positive  10-50% of cells, moderateintensity"
          },{
            id : "0", name :  "Positive  10-50% of cells, moderate intensity"
          },{
            id : "0", name :  "Positive  10-50% of cells, weak intensity"
          },{
            id : "0", name :  "Positive  1-10% of cells, weak intensity"
          }, {
            id : "0", name : "Negative (<1%)"
          }, {
            id : "0", name : "Pending"
          }, {
            id : "0", name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            id : "0", name : "See case "
          } ],
          id : "0", name : ""
        } ]
      }, {
         description : "repeat if original negative or s/p neoadjuvant therapy regardless of original",
        id : "0", name : "Progesterone Receptor",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name :  "Positive, >90% of cells, strong intensity"
          },{
            id : "0", name :  "Positive  50-90% of cells, strong intensity"
          },{
            id : "0", name :  "Positive  10-50% of cells, strong intensity"
          },{
            id : "0", name :  "Positive  50-90% of cells, moderate intensity"
          },{
            id : "0", name :  "Positive  10-50% of cells, moderateintensity"
          },{
            id : "0", name :  "Positive  10-50% of cells, moderate intensity"
          },{
            id : "0", name :  "Positive  10-50% of cells, weak intensity"
          },{
            id : "0", name :  "Positive  1-10% of cells, weak intensity"
          }, {
            id : "0", name : "Negative (<1%)"
          }, {
            id : "0", name : "Pending"
          }, {
            id : "0", name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            id : "0", name : "See case "
          } ],
          id : "0", name : ""
        } ]
      }, {
         description : "repeat if original triple negative or s/p neoadjuvant therapy regardless of original",
        id : "0", name : "Her2Neu by IHC",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Positive (3+)"
          }, {
            id : "0", name : "Negative (0-1+)"
          }, {
            id : "0", name : "Equivocal (2+)"
          }, {
            id : "0", name : "Pending"
          }, {
            id : "0", name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            id : "0", name : "See case "
          } ],
          id : "0", name : ""
        } ]
      }, {
          description : "repeat if original triple negative or s/p neoadjuvant therapy regardless of original",
        id : "0", name : "Her2Neu by FISH",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Positive"
          }, {
            id : "0", name : "Negative"
          }, {
            id : "0", name : "Equivocal"
          }, {
            id : "0", name : "Reflex pending if appropriate"
          }, {
            id : "0", name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            id : "0", name : "See case "
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Known repeat ER/PR testing",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "No"
          }, {
            id : "0", name : "Yes"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Known repeat Her2Neu testing",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "No"
          }, {
            id : "0", name : "Yes"
          } ],
          id : "0", name : ""
        } ]
           }, {
  
        id : "0", name : "Additional findings",
        optional_state : "required",
        "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Biopsy site"
          }, {
            id : "0", name : "Biopsy site x 2"
          }, {
            id : "0", name : "Atypical ductal hyperplasia"
          }, {
            id : "0", name : "Atypical lobular hyperplasia"
          }, {
            id : "0", name : "Lobular carcinoma in situ, classical type"
          }, {
            id : "0", name : "Lobular carcinoma in situ, pleomorphic type"
          }, {
            id : "0", name : "Pagets disease"
          }, {
            id : "0", name : "Biopsy site and atypical ductal hyperplasia"
          }, {
            id : "0", name : "Biopsy site, atypical ductal hyperplasia and Pagets disease"
          }, {
            id : "0", name : "Biopsy site and atypical lobular hyperplasia"
          }, {
            id : "0", name : "Biopsy site, atypical lobular hyperplasia and Pagets disease"
          }, {
            id : "0", name : "Biopsy site and lobular carcinoma in situ, classical type"
          }, {
            id : "0", name : "Biopsy site and lobular carcinoma in situ, classical type and Pagets disease"
          }, {
            id : "0", name : "Biopsy site, atypical ductal hyperplasia, and atypical lobular hyperplasia"
          }, {
            id : "0", name : "Biopsy site, atypical ductal hyperplasia, and lobular carcinoma in situ, classical type"
          }, {
            id : "0", name : "Biopsy site, atypical ductal hyperplasia, lobular carcinoma in situ, classical type and Pagets disease"
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "Add billing code 3260F for women, 3260F1P for men",
        id : "0", name : "ICD10",
       optional_state  : "required", "options" : [ {
          group : [ {
             description : " for women",
            id : "0", name : "C50.919"
          },{
             description : " for men",
            id : "0", name : "C50.929"
          } ],
          id : "0", name : ""
        } ]
      
      } ]
    }, {
      biopsy_type : "Invasive",
      most_common : false,
      id : "0", name : "Breast biopsy",
      optional : true,
      organ_group : "Breast",
      properties : [ { id : "0", name : "Location",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Right"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Left"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Procedure",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            id : "0", name : "Core needle biopsy"
          }, {
            id : "0", name : "Stereotactic core needle biopsy"
          }, {
            id : "0", name : "Ultrasound guided core needle biopsy"
          }, {
            id : "0", name : "MRI guided core needle biopsy"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Type",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            id : "0", name : "Invasive ductal carcinoma"
          }, {
            id : "0", name : "Invasive lobular carcinoma"
          }, {
            id : "0", name : "Invasive lobular carcinoma, pleomorphic type"
          }, {
            id : "0", name : "Invasive carcinoma with both ductal and lobular features"
          }, {
            id : "0", name : "Invasive mammary carcinoma"
          }, {
            id : "0", name : "Micro-invasive carcinoma"
          }, {
            id : "0", name : "Mucinous carcinoma"
          }, {
            id : "0", name : "Invasive ductal carcinoma with mucinous carcinoma features"
          }, {
            id : "0", name : "Tubular carcinoma"
          }, {
            id : "0", name : "Invasive ductal carcinoma with tubular carcinoma features"
          }, {
            id : "0", name : "Invasive tubulo-lobular carcinoma"
          }, {
            id : "0", name : "Invasive cribiform carcinoma"
          }, {
            id : "0", name : "Invasive carcinoma with micropapillary features"
          }, {
            id : "0", name : "Invasive papillary carcinoma"
          }, {
            id : "0", name : "Medullary carcinoma"
          }, {
            id : "0", name : "Metaplastic carcinoma"
          }, {
            id : "0", name : "Adenoid cystic carcinoma"
          }, {
            id : "0", name : "Secretory carcinoma"
          }, {
            id : "0", name : "Invasive carcinoma with basaloid features"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            inputs_required : [ "" ],
            id : "0", name : "At least"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Grade",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            description : "Scores of 3, 4, or 5",
            id : "0", name : "Well differentiated"
          }, {
            description : "Scores of 3, 4, or 5",
            id : "0", name : "At least well differentiated"
          }, {
            description : "Scores of 5 or 6",
            id : "0", name : "Well to moderately differentiated"
          }, {
            description : "Scores of 6 or 7",
            id : "0", name : "Moderately differentiated"
          }, {
            description : "Scores of 6 or 7",
            id : "0", name : "At least moderately differentiated"
          }, {
            description : "Scores of 7 or 8",
            id : "0", name : "Moderately to poorly differentiated"
          }, {
            description : "Scores of 8 or 9",
            id : "0", name : "Poorly differentiated"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Indeterminate"
          }, {
            id : "0", name : "Suspicious"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Not applicable"
          }, {
            id : "0", name : "Present, extensive"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "DCIS",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            id : "0", name : "High grade with calcifications and necrosis"
          }, {
            id : "0", name : "High grade with calcifications"
          }, {
            id : "0", name : "High grade with necrosis"
          }, {
            id : "0", name : "High grade"
          }, {
            id : "0", name : "Intermediate grade with calcifications"
          }, {
            id : "0", name : "Intermediate grade"
          }, {
            id : "0", name : "Low grade with calcifications"
          }, {
            id : "0", name : "Low grade"
          }, {
            id : "0", name : "cannot be ruled out"
          }, {
            id : "0", name : "None"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
         description : "MULTI-SELECT",
        id : "0", name : "Additional findings",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Atypical ductal hyperplasia"
          }, {
            id : "0", name : "Atypical ductal hyperplasia with calcifications"
          }, {
            id : "0", name : "Atypical lobular hyperplasia"
          }, {
            id : "0", name : "Atypical lobular hyperplasia with calcifications"
          }, {
            id : "0", name : "Atypical lobular hyperplasia/lobular carcinoma in situ, classical type"
          }, {
            id : "0", name : "Atypical lobular hyperplasia/lobular carcinoma in situ, classical type with calcifications"
          }, {
            id : "0", name : "Lobular carcinoma in situ, classical type"
          }, {
            id : "0", name : "Lobular carcinoma in situ, classical type with calcifications"
          }, {
            id : "0", name : "Lobular carcinoma in situ, pleomorphic type"
          }, {
            id : "0", name : "Lobular carcinoma in situ, pleomorphic type with calcifications"
          }, {
            id : "0", name : "In situ carcinoma with both ductal and lobular features"
          }, {
            id : "0", name : "In situ carcinoma with both ductal and lobular features with calcifications"
          }, {
            id : "0", name : "Flat epithelial atypia"
          }, {
            id : "0", name : "Flat epithelial atypia with calcifications"
          }, {
            id : "0", name : "Fibrocystic changes"
          }, {
            id : "0", name : "Fibrocystic changes with calcifications"
          }, {
            id : "0", name : "Fibrocystic changes, including large cysts"
          }, {
            id : "0", name : "Fibrocystic changes, including large cysts, with calcifications"
          }, {
            id : "0", name : "Fibrocystic changes, including radial scar/complex sclerosing lesion"
          }, {
            id : "0", name : "Fibrocystic changes, including radial scar/complex sclerosing lesion, with calcifications"
          }, {
            id : "0", name : "Fibrocystic changes, including benign papilloma"
          }, {
            id : "0", name : "Fibrocystic changes, including benign papilloma, with calcifications"
          }, {
            id : "0", name : "Fibroadenoma"
          }, {
            id : "0", name : "Fibroadenoma, with calcifications"
          }, {
            id : "0", name : "Metastatic carcinoma in axillary lymph node"
          }, {
            id : "0", name : "Metastatic carcinoma in axillary biopsy"
          }, {
            id : "0", name : "Benign protion of a lymph node in axillary biopsy"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Estrogen Receptor",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            id : "0", name : "Pending"
          }, {
            id : "0", name :  "Positive, >90% of cells, strong intensity"
          },{
            id : "0", name :  "Positive  50-90% of cells, strong intensity"
          },{
            id : "0", name :  "Positive  10-50% of cells, strong intensity"
          },{
            id : "0", name :  "Positive  50-90% of cells, moderate intensity"
          },{
            id : "0", name :  "Positive  10-50% of cells, moderateintensity"
          },{
            id : "0", name :  "Positive  10-50% of cells, moderate intensity"
          },{
            id : "0", name :  "Positive  10-50% of cells, weak intensity"
          },{
            id : "0", name :  "Positive  1-10% of cells, weak intensity"
          }, {
            id : "0", name : "Negative (<1%)"
          }, {
            id : "0", name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            id : "0", name : "See case "
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Progesterone Receptor",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            id : "0", name : "Pending"
          }, {
            id : "0", name :  "Positive, >90% of cells, strong intensity"
          },{
            id : "0", name :  "Positive  50-90% of cells, strong intensity"
          },{
            id : "0", name :  "Positive  10-50% of cells, strong intensity"
          },{
            id : "0", name :  "Positive  50-90% of cells, moderate intensity"
          },{
            id : "0", name :  "Positive  10-50% of cells, moderateintensity"
          },{
            id : "0", name :  "Positive  10-50% of cells, moderate intensity"
          },{
            id : "0", name :  "Positive  10-50% of cells, weak intensity"
          },{
            id : "0", name :  "Positive  1-10% of cells, weak intensity"
          }, {
            id : "0", name : "Negative (<1%)"
          }, {
            id : "0", name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            id : "0", name : "See case "
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Her2Neu by IHC",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            id : "0", name : "Pending"
          }, {
            id : "0", name : "Positive (3+)"
          }, {
            id : "0", name : "Negative (0-1+)"
          }, {
            id : "0", name : "Equivocal (2+)"
          }, {
            id : "0", name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            id : "0", name : "See case "
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Her2Neu by FISH",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            id : "0", name : "Positive"
          }, {
            id : "0", name : "Negative"
          }, {
            id : "0", name : "Equivocal"
          }, {
            id : "0", name : "Reflex pending if appropriate"
          }, {
            id : "0", name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            id : "0", name : "See case "
          } ],
          id : "0", name : ""
        } ]
      } ]
    }, {
      biopsy_type : "DCIS",
      most_common : false,
      id : "0", name : "Breast biopsy",
      optional : true,
      organ_group : "Breast",
      properties : [  {
         id : "0", name : "Location",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Right"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Left"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Procedure",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            id : "0", name : "Core needle biopsy"
          }, {
            id : "0", name : "Stereotactic core needle biopsy"
          }, {
            id : "0", name : "Ultrasound guided core needle biopsy"
          }, {
            id : "0", name : "MRI guided core needle biopsy"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Type",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            id : "0", name : "Ductal carcinoma in situ (DCIS)"
          }, {
            id : "0", name : "Ductal carcinoma in situ (DCIS), invasion cannot be ruled out"
          }, {
            id : "0", name : "Ductal carcinoma in situ (DCIS), see note"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Subtype",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            id : "0", name : "Comedo type"
          }, {
            id : "0", name : "Solid type"
          }, {
            id : "0", name : "Cribriform type"
          }, {
            id : "0", name : "Solid and cribriform type"
          }, {
            id : "0", name : "Micropapillary type"
          }, {
            id : "0", name : "Cribriform and micropapillary type"
          }, {
            id : "0", name : "Flat (clinging) type"
          }, {
            id : "0", name : "Solid-papillary type"
          }, {
            id : "0", name : "Papillary and cribriform type"
          }, {
            id : "0", name : "Comedo type, with areas suspicious for invasion"
          }, {
            id : "0", name : "Solid type, with areas suspicious for invasion"
          }, {
            id : "0", name : "Solid-papillary type, with areas suspicious for invasion"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Grade",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            id : "0", name : "Low nuclear grade"
          }, {
            id : "0", name : "Low to intermediate nuclear grade"
          }, {
            id : "0", name : "Intermediate nuclear grade"
          }, {
            id : "0", name : "Intermediate to high nuclear grade"
          }, {
            id : "0", name : "High nuclear grade"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Calcifications",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Calcium oxalate present"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Necrosis",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Present, focal"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
         description : "MULTI-SELECT",
        id : "0", name : "Additional findings",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Atypical ductal hyperplasia"
          }, {
            id : "0", name : "Atypical ductal hyperplasia with calcifications"
          }, {
            id : "0", name : "Atypical lobular hyperplasia"
          }, {
            id : "0", name : "Atypical lobular hyperplasia with calcifications"
          }, {
            id : "0", name : "Atypical lobular hyperplasia/lobular carcinoma in situ, classical type"
          }, {
            id : "0", name : "Atypical lobular hyperplasia/lobular carcinoma in situ, classical type with calcifications"
          }, {
            id : "0", name : "Lobular carcinoma in situ, classical type"
          }, {
            id : "0", name : "Lobular carcinoma in situ, classical type with calcifications"
          }, {
            id : "0", name : "Lobular carcinoma in situ, pleomorphic type"
          }, {
            id : "0", name : "Lobular carcinoma in situ, pleomorphic type with calcifications"
          }, {
            id : "0", name : "In situ carcinoma with both ductal and lobular features"
          }, {
            id : "0", name : "In situ carcinoma with both ductal and lobular features with calcifications"
          }, {
            id : "0", name : "Flat epithelial atypia"
          }, {
            id : "0", name : "Flat epithelial atypia with calcifications"
          }, {
            id : "0", name : "Fibrocystic changes"
          }, {
            id : "0", name : "Fibrocystic changes with calcifications"
          }, {
            id : "0", name : "Fibrocystic changes, including large cysts"
          }, {
            id : "0", name : "Fibrocystic changes, including large cysts, with calcifications"
          }, {
            id : "0", name : "Fibrocystic changes, including radial scar/complex sclerosing lesion"
          }, {
            id : "0", name : "Fibrocystic changes, including radial scar/complex sclerosing lesion, with calcifications"
          }, {
            id : "0", name : "Fibrocystic changes, including benign papilloma"
          }, {
            id : "0", name : "Fibrocystic changes, including benign papilloma, with calcifications"
          }, {
            id : "0", name : "Fibroadenoma"
          }, {
            id : "0", name : "Fibroadenoma, with calcifications"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Estrogen Receptor",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            id : "0", name : "Pending"
          }, {
            id : "0", name :  "Positive, >90% of cells, strong intensity"
          },{
            id : "0", name :  "Positive  50-90% of cells, strong intensity"
          },{
            id : "0", name :  "Positive  10-50% of cells, strong intensity"
          },{
            id : "0", name :  "Positive  50-90% of cells, moderate intensity"
          },{
            id : "0", name :  "Positive  10-50% of cells, moderateintensity"
          },{
            id : "0", name :  "Positive  10-50% of cells, moderate intensity"
          },{
            id : "0", name :  "Positive  10-50% of cells, weak intensity"
          },{
            id : "0", name :  "Positive  1-10% of cells, weak intensity"
          }, {
            id : "0", name : "Negative (<1%)"
          }, {
            id : "0", name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            id : "0", name : "See case "
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Progesterone Receptor",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            id : "0", name : "Pending"
          }, {
            id : "0", name :  "Positive, >90% of cells, strong intensity"
          },{
            id : "0", name :  "Positive  50-90% of cells, strong intensity"
          },{
            id : "0", name :  "Positive  10-50% of cells, strong intensity"
          },{
            id : "0", name :  "Positive  50-90% of cells, moderate intensity"
          },{
            id : "0", name :  "Positive  10-50% of cells, moderateintensity"
          },{
            id : "0", name :  "Positive  10-50% of cells, moderate intensity"
          },{
            id : "0", name :  "Positive  10-50% of cells, weak intensity"
          },{
            id : "0", name :  "Positive  1-10% of cells, weak intensity"
          }, {
            id : "0", name : "Negative (<1%)"
          }, {
            id : "0", name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            id : "0", name : "See case "
          } ],
          id : "0", name : ""
        } ]
      } ]
    }, {
      biopsy_type : "Other",
      most_common : false,
      id : "0", name : "Breast biopsy",
      optional : true,
      organ_group : "Breast",
      properties : [ {
        id : "0", name : "Location",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Right"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Left"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Procedure",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            id : "0", name : "Core needle biopsy"
          }, {
            id : "0", name : "Stereotactic core needle biopsy"
          }, {
            id : "0", name : "Ultrasound guided core needle biopsy"
          }, {
            id : "0", name : "MRI guided core needle biopsy"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Diagnosis/Type",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            id : "0", name : "Suspicious for invasive carcinoma, recommend excision for definitive classification"
          }, {
            id : "0", name : "Atypical ductal hyperplasia, recommend excision for definitive classification"
          }, {
            id : "0", name : "Atypical ductal hyperplasia with calcifications, recommend excision for definitive classification"
          }, {
            id : "0", name : "Atypical ductal hyperplasia and lobular neoplasia, recommend excision for definitive classification"
          }, {
            id : "0", name : "Atypical ductal hyperplasia and lobular neoplasia with calcifications, recommend excision for definitive classification"
          }, {
            id : "0", name : "Lobular carcinoma in situ, pleomorphic type, recommend excision for definitive classification"
          }, {
            id : "0", name : "Lobular carcinoma in situ, pleomorphic type with calcifications, recommend excision for definitive classification"
          }, {
            id : "0", name : "Atypical lobular hyperplasia/lobular carcinoma in situ, classical type"
          }, {
            id : "0", name : "Atypical lobular hyperplasia/lobular carcinoma in situ, classical type with calcifications"
          }, {
            id : "0", name : "Flat epithelial atypia, recommend excision for definitive classification"
          }, {
            id : "0", name : "Flat epithelial atypia with calcifications, recommend excision for definitive classification"
          }, {
            id : "0", name : "Atypical papillary lesion, recommend excision for definitive classification"
          }, {
            id : "0", name : "Atypical papillary lesion with calcifications, recommend excision for definitive classification"
          }, {
            id : "0", name : "Atypical mucinous lesion, recommend excision for definitive classification"
          }, {
            id : "0", name : "Atypical mucinous lesion with calcifications, recommend excision for definitive classification"
          }, {
            id : "0", name : "Hypercellular fibroepithelial lesion, recommend excision for definitive classification"
          }, {
            id : "0", name : "Fibrocystic changes with atypia, NOS"
          }, {
            id : "0", name : "Fibrocystic changes"
          }, {
            id : "0", name : "Fibrocystic changes with calcifications"
          }, {
            id : "0", name : "Fibrocystic changes, including large cysts"
          }, {
            id : "0", name : "Fibrocystic changes, including large cysts with calcifications"
          }, {
            id : "0", name : "Fibrocystic changes, including radial scar/complex sclerosing lesion"
          }, {
            id : "0", name : "Fibrocystic changes, including radial scar/complex sclerosing lesion with calcifications"
          }, {
            id : "0", name : "Fibrocystic changes, including benign papilloma"
          }, {
            id : "0", name : "Fibrocystic changes, including benign papilloma with calcifications"
          }, {
            id : "0", name : "Fibrocystic changes, including pseudoangiomatous hyperplasia (PASH)"
          }, {
            id : "0", name : "Fibroadenoma"
          }, {
            id : "0", name : "Fibroadenoma with calcifications"
          } ],
          id : "0", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "0", name : "Central Nervous System",
      optional : true,
      organ_group : "Central Nervous System",
      properties : [ {
        id : "0", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Skull "
          }, {
            id : "0", name : "Dura "
          }, {
            id : "0", name : "Right frontal"
          }, {
            id : "0", name : "Left frontal"
          }, {
            id : "0", name : "Right temporal"
          }, {
            id : "0", name : "Left temporal"
          }, {
            id : "0", name : "Right parietal"
          }, {
            id : "0", name : "Left parietal"
          }, {
            id : "0", name : "Right sagittal"
          }, {
            id : "0", name : "Left sagittal"
          }, {
            id : "0", name : "Occipital"
          }, {
            id : "0", name : "Right cerebellopontine angle"
          }, {
            id : "0", name : "Left cerebellopontine angle"
          }, {
            id : "0", name : "Sellar/suprasellar/pituitary"
          }, {
            description : "which",
            inputs_required : [ "" ],
            id : "0", name : "Cranial nerve "
          }, {
            description : "which",
            inputs_required : [ "" ],
            id : "0", name : "Ventricle"
          }, {
            id : "0", name : "Brain stem "
          }, {
            id : "0", name : "Spine "
          }, {
            id : "0", name : "Spinal Cord"
          }, {
            description : "which",
            inputs_required : [ "" ],
            id : "0", name : "Spinal nerve root(s) "
          }, {
            description : "which",
            inputs_required : [ "" ],
            id : "0", name : "Peripheral nerve "
          }, {
            description : "which",
            inputs_required : [ "" ],
            id : "0", name : "Ganglion"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Open biopsy"
          }, {
            id : "0", name : "Stereotactic biopsy"
          }, {
            id : "0", name : "Resection"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Type (WHO)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "IMPOX: IDH + (mutant), MGMT +/-, p53 +, ATRX - (mutant), 1p/19q wild type",
            id : "0", name : "Diffuse astrocytoma, IDH-mutant"
          }, {
            description : "mitoses, IMPOX: IDH + (mutant), MGMT +/-, p53 +, ATRX - (mutant), 1p/19q wild type",
            id : "0", name : "Anaplastic astrocytoma, IDH-mutant"
          }, {
            description : "necrosis or vasc prolif, IMPOX: IDH - (wild type), ATRX + (wild type), MGMT +/-, p53 -, EGFR amplification +, TERT + , 1p/19q wild type",
            id : "0", name : "Glioblastoma, IDH-wild type"
          }, {
            description : "necrosis or vasc prolif, IMPOX: IDH + (mutant), ATRX - (mutant), MGMT +/-, p53 +, EGFR amplification -, TERT - , 1p/19q wild type",
            id : "0", name : "Glioblastoma, IDH-mutant"
          }, {
            description : "IMPOX: 1p/19q codeleted, IDH + (mutant), p53 -/+, MGMT +, ATRX + (wild type) , TERT +, Ki67 <5%",
            id : "0", name : "Oligodendroglioma, IDH-mutant, 1p/19q codeleted"
          }, {
            description : "atypia, cellularity, mitoses, IMPOX: 1p/19q codeleted, IDH + (mutant), p53 -, MGMT +, ATRX + (wild type), TERT +, Ki67 >5%",
            id : "0", name : "Anaplastic oligodendroglioma IDH-mutant, 1p/19q codeleted"
          }, {
            description : "rare mitoses and necrosis, IMPOX: IDH - (wild type), p53 -, BRAF V600E +",
            id : "0", name : "Pleomorphic xanthoastrocytoma"
          }, {
            description : "IMPOX: IDH - (wild type), p53 -",
            id : "0", name : "Pilocytic astrocytoma"
          }, {
            description : "GFAP+, s100+, EMA +",
            id : "0", name : "Ependymoma"
          }, {
            description : "GFAP+, s100+, EMA +",
            id : "0", name : "Myxopapillary ependymoma"
          }, {
            description : "IMPOX: IDH1 - (wild type), synaptophysin +, GFAP -/focal, p53 -",
            id : "0", name : "Central neurocytoma"
          }, {
            description : "WNT activatied OR SHH activated OR group 3 OR group 4 IMPOX: synaptophysin +, beta catenin +, p53 +/-, Ki67 +",
            id : "0", name : "Medulloblastoma"
          }, {
            description : "IMPOX: s100+, EMA -, PR -",
            id : "0", name : "Schwannoma"
          }, {
            description : " grade 1/3, IMPOX: s100-, EMA +, PR +, NF1/NF2 mutations",
            id : "0", name : "Meningioma"
          }, {
            description : " grade 2/3, mitoses >=4/10hpf OR ki67 >4% OR brain invasion OR (3 of increased cellularity, small cell change, nucleoli, sheeting, necrosis) OR clear cell OR Chordoid,  IMPOX: s100-, EMA +, PR +, NF1/NF2 mutations",
            id : "0", name : "Atypical meningioma"
          }, {
            description : "grade 3/3, malignant cytology OR mitoses> 20/10 hpf OR Ki67>20% OR Papillary OR Rhabdoid, IMPOX: s100-, EMA +, PR +, NF1/NF2 mutations",
            id : "0", name : "Anaplastic (malignant) meningioma"
          }, {
            description : "IMPOX: chromogranin +, synaptophysin +",
            id : "0", name : "Pituitary adenoma"
          }, {
            description : "Extended list",
            inputs_required : [ [ "ASTROCYTIC TUMORS", "Pilocytic astrocytoma (WHO grade I)", "Pilomyxoid astrocytoma (WHO grade II) ", "Subependymal giant cell astrocytoma (WHO grade I)", "Pleomorphic xanthoastrocytoma (WHO grade II)", "Pleomorphic xanthoastrocytoma with anaplastic features (WHO grade not assigned) ", "Diffuse astrocytoma (WHO grade II)", "Fibrillary astrocytoma (WHO grade II)", "Protoplasmic astrocytoma (WHO grade II)", "Gemistocytic astrocytoma (WHO grade II)", "Anaplastic astrocytoma (WHO grade III)", "Glioblastoma (WHO grade IV)", "Giant cell glioblastoma (WHO grade IV) ", "Gliosarcoma (WHO grade IV)", "Gliomatosis cerebri ", "Astrocytoma, not otherwise characterized ", "", "OLIGODENDROGLIAL TUMORS", "Oligodendroglioma (WHO grade II)", "Anaplastic oligodendroglioma (WHO grade III)", "", "OLIGOASTROCYTIC TUMORS", "Oligoastrocytoma (WHO grade II)", "Anaplastic oligoastrocytoma (WHO grade III)", "", "EPENDYMAL TUMORS", "Subependymoma (WHO grade I)", "Myxopapillary ependymoma (WHO grade I)", "Ependymoma (WHO grade II)", "Cellular ependymoma (WHO grade II)", "Papillary ependymoma (WHO grade II)", "Clear cell ependymoma (WHO grade II)", "Tanycytic ependymoma (WHO grade II)", "Anaplastic ependymoma (WHO grade III)", "", "CHOROID PLEXUS TUMORS", "Choroid plexus papilloma (WHO grade I)", "Atypical choroid plexus papilloma (WHO grade II)", "Choroid plexus carcinoma (WHO grade III)", "", "OTHER NEUROEPITHELIAL TUMORS", "Astroblastoma (WHO grade not assigned)", "Chordoid glioma of the third ventricle (WHO grade II)", "Angiocentric glioma (WHO grade I)", "", "NEURONAL AND MIXED NEURONAL-GLIAL TUMORS", "Dysplastic gangliocytoma of cerebellum (Lhermitte-Duclos) (WHO grade I)", "Desmoplastic infantile astrocytoma/ganglioglioma (WHO grade I)", "Dysembryoplastic neuroepithelial tumor (WHO grade I)", "Gangliocytoma (WHO grade I)", "Ganglioglioma (WHO grade I)", "Anaplastic ganglioglioma (WHO grade III)", "Central neurocytoma (WHO grade II)", "Extraventricular neurocytoma (WHO grade II)", "Cerebellar liponeurocytoma (WHO grade II)", "Papillary glioneuronal tumor (PGNT) (WHO grade I)", "Rosette-forming glioneuronal tumor of the fourth ventricle (RGNT) (WHO grade I)", "Paraganglioma of the spinal cord (WHO grade I)", "", "PINEAL TUMORS", "Pineocytoma (WHO grade I)", "Pineal parenchymal tumor of intermediate differentiation (WHO II III)", "Pineoblastoma (WHO grade IV)", "Papillary tumor of the pineal region (WHO grade II-III)", "", "EMBRYONAL TUMORS", "Medulloblastoma, not otherwise characterized (WHO grade IV)", "Desmoplastic/nodular medulloblastoma (WHO grade IV)", "Medulloblastoma with extensive nodularity (WHO grade IV)", "Anaplastic medulloblastoma (WHO grade IV)", "Large cell medulloblastoma (WHO grade IV)", "Central nervous system (CNS) primitive neuroectodermal tumor (PNET) (WHO grade IV)", "Medulloepithelioma (WHO grade IV)", "Neuroblastoma (WHO grade IV)", "Ganglioneuroblastoma (WHO grade IV)", "Ependymoblastoma (WHO grade IV)", "Atypical teratoid/rhabdoid tumor (WHO grade IV)", "", "TUMORS OF NERVES", "Schwannoma (WHO grade I)", "Cellular schwannoma (WHO grade I)", "Plexiform schwannoma(WHO grade I)", "Melanotic schwannoma (WHO grade I)", "Neurofibroma (WHO grade I", "Plexiform neurofibroma (WHO grade I) ", "Perineurioma (WHO grade I)", "Intraneural perineurioma (WHO grade I)", "Soft tissue perineurioma (WHO grade I)", "Malignant perineurioma (WHO grade III)", "Ganglioneuroma (WHO grade I) ", "Malignant peripheral nerve sheath tumor (MPNST) (WHO grade II-IV) ", "Epithelioid MPNST (WHO grade II-IV)", "MPNST with divergent mesenchymal and/or epithelial differentiation (WHO grade II-IV)", "", "MENINGEAL TUMORS", "Meningioma (WHO grade I)", "Meningothelial meningioma (WHO grade I)", "Fibrous meningioma (fibroblastic) (WHO grade I)", "Transitional meningioma (mixed) (WHO grade I)", "Psammomatous meningioma (WHO grade I)", "Angiomatous meningioma (WHO grade I)", "Microcystic meningioma (WHO grade I)", "Secretory meningioma (WHO grade I)", "Lymphoplasmacyte-rich (lymphoplasmacytic) meningioma (WHO grade I)", "Metaplastic meningioma (WHO grade I)", "Atypical meningioma (WHO grade II)", "Clear cell meningioma (WHO grade II)", "Chordoid meningioma (WHO grade II)", "Anaplastic meningioma (WHO grade III)", "Papillary meningioma (WHO grade III)", "Rhabdoid meningioma (WHO grade III)", "", "MESENCHYMAL TUMORS", "Lipoma", "Angiolipoma", "Hibernoma", "Liposarcoma (intracranial)", "Solitary fibrous tumor", "Fibrosarcoma ", "Malignant fibrous histiocytoma", "Leiomyoma", "Leiomyosarcoma", "Rhabdomyoma ", "Rhabdomyosarcoma", "Chondroma", "Chondrosarcoma", "Osteoma", "Osteosarcoma ", "Osteochondroma ", "Hemangioma ", "Epithelioid hemangioendothelioma ", "Hemangiopericytoma ", "Anaplastic hemangiopericytoma  ", "Angiosarcoma", "Kaposi sarcoma", "Chordoma", "Mesenchymal, nonmeningothelial tumor", "Sarcoma, primary CNS ", "", "MELANOTIC TUMORS", "Diffuse melanocytosis", "Melanocytoma", "Malignant melanoma", "Meningeal melanomatosis", "", "TUMORS OF UNCERTAIN HISTOGENESIS", "Hemangioblastoma (WHO grade I)", "", "LYMPHOMA AND HEMATOPOIETIC TUMORS", "Malignant lymphoma", "Plasmacytoma", "Granulocytic sarcoma", "Hematopoietic neoplasm, other ", "", "GERM CELL TUMORS", "Germinoma", "Embryonal carcinoma", "Yolk sac tumor", "Choriocarcinoma", "Teratoma, mature", "Teratoma, immature", "Teratoma with malignant transformation", "Malignant mixed germ cell tumor ", "", "SELLAR TUMORS", "Craniopharyngioma (WHO grade I)", "Craniopharyngioma, adamantinomatous (WHO grade I)", "Craniopharyngioma, papillary (WHO grade I)", "Granular cell tumor (WHO grade I)", "Pituicytoma (WHO grade I)", "Spindle cell oncocytoma (WHO grade I)", "Pituitary adenoma ", "Pituitary carcinoma", "Pituitary hyperplasia", "", "OTHER", "Malignant neoplasm, type cannot be determined", "Pediatric low grade glioma (pLGG) not otherwise specified (NOS) (Grade I/II)" ] ],
            id : "0", name : ""
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Grade",
  
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Grade 1"
          }, {
            id : "0", name : "Grade 2"
          }, {
            id : "0", name : "Grade 3"
          }, {
            id : "0", name : "Grade 4"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Immunohistochemistry",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "IDH, P53, ATRX",
            inputs_required : [ "" ],
            id : "0", name : ""
          }, {
            id : "0", name : "None"
          }, {
            id : "0", name : "Not applicable"
          }, {
            id : "0", name : "See above"
          }, {
            inputs_required : [ "" ],
            id : "0", name : "See case"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Ancillary studies ordered",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "astrocytoma grade 2-3",
            id : "0", name : "1p 19q FISH and MGMT"
          }, {
            description : "GBM",
            id : "0", name : "1p 19q FISH, MGMT and EGFR amplification by FISH"
          }, {
            id : "0", name : "None"
          }, {
            id : "0", name : "Not applicable"
          }, {
            inputs_required : [ "" ],
            id : "0", name : "See case"
          } ],
          id : "0", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "0", name : "Cervix, Hysterectomy",
      optional : false,
      organ_group : "Gynecologic",
      properties : [  {
        id : "0", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Simple hysterectomy"
          }, {
            id : "0", name : "Radical hysterectomy"
          }, {
            id : "0", name : "Simple hysterectomy and bilateral salpingo-oopherectomy"
          }, {
            id : "0", name : "Radical hysterectomy and bilateral salpingo-oopherectomy"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Squamous cell carcinoma"
          }, {
            id : "0", name : "Squamous cell carcinoma, keratinizing"
          }, {
            id : "0", name : "Squamous cell carcinoma, nonkeratinizing"
          }, {
            id : "0", name : "Squamous cell carcinoma, basaloid"
          }, {
            id : "0", name : "Squamous cell carcinoma, verrucous"
          }, {
            id : "0", name : "Squamous cell carcinoma, warty"
          }, {
            id : "0", name : "Squamous cell carcinoma, papillary"
          }, {
            id : "0", name : "Squamous cell carcinoma, lymphoepithelioma-like"
          }, {
            id : "0", name : "Squamous cell carcinoma, squamotransitional"
          }, {
            description : "cervical HPV ISH +, p16+, CEA+, p53 wild type, ER-/wk, Vim -/wk vs endometrial HPV ISH-, p16-/wk, CEA -/wk, p53 abnormal/-, ER-/+, Vim -/wk",
            id : "0", name : "Endocervical adenocarcinoma"
          }, {
            id : "0", name : "Endocervical adenocarcinoma, usual type"
          }, {
            id : "0", name : "Mucinous carcinoma, NOS"
          }, {
            id : "0", name : "Mucinous carcinoma, intestinal type"
          }, {
            id : "0", name : "Mucinous carcinoma, signet-ring cell type"
          }, {
            id : "0", name : "Mucinous carcinoma, gastric type"
          }, {
            id : "0", name : "Villoglandular carcinoma"
          }, {
            id : "0", name : "Endometrioid carcinoma"
          }, {
            id : "0", name : "Clear cell carcinoma"
          }, {
            id : "0", name : "Serous carcinoma"
          }, {
            id : "0", name : "Mesonephric carcinoma"
          }, {
            id : "0", name : "Adenocarcinoma admixed with neuroendocrine carcinoma"
          }, {
            id : "0", name : "Adenosquamous carcinoma"
          }, {
            id : "0", name : "Adenosquamous carcinoma, glassy cell variant"
          }, {
            id : "0", name : "Adenoid cystic carcinoma"
          }, {
            id : "0", name : "Adenoid basal carcinoma"
          }, {
            id : "0", name : "Small cell carcinoma"
          }, {
            id : "0", name : "Large cell neuroendocrine carcinoma"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Grade 1/3, Well differentiated"
          }, {
            id : "0", name : "Grade 2/3, Moderately differentiated"
          }, {
            id : "0", name : "Grade 3/3, Poorly differentiated"
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "depth and width in mm and thickness of cervix",
        id : "0", name : "Cervical stromal invasion",
       optional_state  : "required", "options" : [ {
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Other tissue(s) involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Right parametrium"
          }, {
            id : "0", name : "Left parametrium"
          }, {
            id : "0", name : "Bilateral parametrium"
          }, {
             description : "specify, incluidng vagina, ovaries, fallopian tubes, pelvic side wall, bladder bowel and omentum",
              inputs_required : [ "" ],
            id : "0", name : "Other organs"
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "include distance/location of closest margin, ectocervical and radial",
        id : "0", name : "Margins, invasive tumor",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "0", name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Positive"
          }],
          id : "0", name : ""
        } ]
      }, {
        description : "include distance/location of closest margin, ectocervical",
        id : "0", name : "Margins, HSIL",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "0", name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Positive"
          }],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Indeterminate"
          }, {
            id : "0", name : "Suspicious"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Present, extensive"
          } ],
          id : "0", name : ""
        } ]
      }, {
       
        id : "0", name : "Lymph nodes, # sentinel",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "includes pelvic, parametrial, obturator, internal iliac (hypogastric), external iliac, common iliac, sacral, presacral and para-aortic ",
        id : "0", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
         description : "do not include ITCs",
        id : "0", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            description : "# positive, specify location",
            inputs_required : [ "" ],
            id : "0", name : ""
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # w/ isolated tumor cells",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            description : "# positive, specify location",
            inputs_required : [ "" ],
            id : "0", name : ""
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "0", name : ""
          }, {
            description : "pathologic",
            id : "0", name : "AJCC p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "0", name : "AJCC m"
          }, {
            description : "recurrent",
            id : "0", name : "AJCC r"
          }, {
            description : "post-treatment",
            id : "0", name : "AJCC y"
          }, {
            id : "0", name : "AJCC mp"
          }, {
            id : "0", name : "AJCC rp"
          }, {
            id : "0", name : "AJCC yp"
          }, {
            id : "0", name : "AJCC mrp"
          }, {
            id : "0", name : "AJCC myp"
          }, {
            id : "0", name : "AJCC ryp"
          }, {
            id : "0", name : "AJCC mryp"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            id : "0", name : "TX"
          }, {
            description : "<= 3 mm deep AND <= 7mm wide",
            id : "0", name : "T1a1"
          }, {
            description : ">3mm AND <=5mm deep, AND <=7mm wide",
            id : "0", name : "T1a2"
          }, {
            description : "Clincially visible lesion <= 4 cm",
            id : "0", name : "T1b1"
          }, {
            description : "Clinically visible lesion > 4cm",
            id : "0", name : "T1b2"
          }, {
            description : "Clinically visible lesion <= 4cm, invades beyond uterus",
            id : "0", name : "T2a1"
          }, {
            description : "Clinically visible lesion > 4cm, invades beyond uterus",
            id : "0", name : "T2a2"
          }, {
            description : "Parametrial invasion",
            id : "0", name : "T2b"
          }, {
            description : "Extends to lower third of vagina ",
            id : "0", name : "T3a"
          }, {
            description : "Extends to pelvic wall OR hydronephrosis OR nonfunctioning kidney ",
            id : "0", name : "T3b"
          }, {
            description : "Invades mucosa of bladder, rectum or beyond true pelvis",
            id : "0", name : "T4"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "0", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "0", name : "N0"
          }, {
            description : "Isolated tumor cells, <=0.2mm",
            id : "0", name : "N0(i+)"
          }, {
            description : "positive nodes",
            id : "0", name : "N1"
          } ],
          id : "0", name : "Category (pN)"
        }, {
          group : [ {
            description : "metastases",
            id : "0", name : "M1"
          }, {
            id : "0", name : "M (not applicable)"
          }, {
            id : "0", name : "distant metastasis not applicable"
          } ],
          id : "0", name : ""
        } ]
   
    }, {
        id : "0", name : "Stage FIGO (2015)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "Measured invasion of stroma ≤3 mm in depth and ≤7 mm width",
            id : "0", name : "FIGO IA1"
          }, {
            description : "Measured invasion of stroma >3 mm and <5 mm in depth and ≤7 mm width",
            id : "0", name : "FIGO IA2"
          }, {
            description : "Clinical lesions confined to the cervix, or preclinical lesions greater than stage IA, Clinical lesions ≤4 cm in size",
            id : "0", name : "FIGO IB1"
          }, {
            description : "Clinical lesions confined to the cervix, or preclinical lesions greater than stage IA, Clinical lesions >4cm in size",
            id : "0", name : "FIGO IB2"
          }, {
            description : "Involvement of up to the upper two-thirds of the vagina. No obvious parametrial involvement. Clinically visible lesion ≤4 cm",
            id : "0", name : "FIGO IIA1"
          }, {
            description : "Involvement of up to the upper two-thirds of the vagina. No obvious parametrial involvement. Clinically visible lesion >4 cm",
            id : "0", name : "FIGO IIA2"
          }, {
            description : "Obvious parametrial involvement but not onto the pelvic sidewall",
            id : "0", name : "FIGO IIB"
          }, {
            description : "Involvement of the lower third of the vagina but no extension onto pelvic sidewall",
            id : "0", name : "FIGO IIIA"
          }, {
            description : "Extension onto the pelvic sidewall, and/or causing hydronephrosis/nonfunctioning kidney",
            id : "0", name : "FIGO IIIB"
          }, {
            description : "Spread to adjacent pelvic organs, ie, tumor invading the mucosa of the bladder and/or rectum and/or extending beyond the true pelvis (bullous edema is not sufficient)",
            id : "0", name : "FIGO IVA"
          }, {
            description : "Spread to distant organs",
            id : "0", name : "FIGO IVB"
          }, {
            description : "",
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
          } ]
      }, {
      most_common : false,
      id : "0", name : "Cervix, LEEP",
      optional : true,
      organ_group : "Gynecologic",
      properties : [  {
        id : "0", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Cold knife cone"
          }, {
            id : "0", name : "LEEP"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Left superior"
          }, {
            id : "0", name : "Left inferior"
          }, {
            id : "0", name : "Right superior"
          }, {
            id : "0", name : "Right inferior"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Squamous cell carcinoma"
          }, {
            id : "0", name : "Squamous cell carcinoma, keratinizing"
          }, {
            id : "0", name : "Squamous cell carcinoma, nonkeratinizing"
          }, {
            id : "0", name : "Squamous cell carcinoma, basaloid"
          }, {
            id : "0", name : "Squamous cell carcinoma, verrucous"
          }, {
            id : "0", name : "Squamous cell carcinoma, warty"
          }, {
            id : "0", name : "Squamous cell carcinoma, papillary"
          }, {
            id : "0", name : "Squamous cell carcinoma, lymphoepithelioma-like"
          }, {
            id : "0", name : "Squamous cell carcinoma, squamotransitional"
          }, {
             description : "cervical HPV ISH+, p16+, CEA+, p53 wild type, ER-/wk, Vim -/wk vs endometrial HPV ISH-, p16-/wk, CEA -/wk, p53 abnormal/-, ER-/+, Vim -/wk",
            id : "0", name : "Endocervical adenocarcinoma"
          }, {
            
            id : "0", name : "Endocervical adenocarcinoma, usual type"
          }, {
            id : "0", name : "Mucinous carcinoma, NOS"
          }, {
            id : "0", name : "Mucinous carcinoma, intestinal type"
          }, {
            id : "0", name : "Mucinous carcinoma, signet-ring cell type"
          }, {
            id : "0", name : "Mucinous carcinoma, gastric type"
          }, {
            id : "0", name : "Villoglandular carcinoma"
          }, {
            id : "0", name : "Endometrioid carcinoma"
          }, {
            id : "0", name : "Clear cell carcinoma"
          }, {
            id : "0", name : "Serous carcinoma"
          }, {
            id : "0", name : "Mesonephric carcinoma"
          }, {
            id : "0", name : "Adenocarcinoma admixed with neuroendocrine carcinoma"
          }, {
            id : "0", name : "Adenosquamous carcinoma"
          }, {
            id : "0", name : "Adenosquamous carcinoma, glassy cell variant"
          }, {
            id : "0", name : "Adenoid cystic carcinoma"
          }, {
            id : "0", name : "Adenoid basal carcinoma"
          }, {
            id : "0", name : "Small cell carcinoma"
          }, {
            id : "0", name : "Large cell neuroendocrine carcinoma"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Grade 1/3, Well differentiated"
          }, {
            id : "0", name : "Grade 2/3, Moderately differentiated"
          }, {
            id : "0", name : "Grade 3/3, Poorly differentiated"
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "depth and width in mm",
        id : "0", name : "Cervical stromal invasion",
       optional_state  : "required", "options" : [ {
          description : "depth and width in mm",
          id : "0", name : ""
        } ]
      }, {
        description : "include distance/location of closest margin, endocervical, exctocervical and deep",
        id : "0", name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "0", name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Positive"
          }],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Indeterminate"
          }, {
            id : "0", name : "Suspicious"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Present, extensive"
          } ],
          id : "0", name : ""
        } ]
      } ]
    }, {
      most_common : true,
       description : "including small cell carcinoma",
      id : "0", name : "Colon",
      optional : false,
      organ_group : "Gastrointestinal",
      properties : [  {
        id : "0", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Right hemicolectomy"
          }, {
            id : "0", name : "Transverse colectomy"
          }, {
            id : "0", name : "Left hemicolectomy"
          }, {
            id : "0", name : "Sigmoidectomy"
          }, {
            id : "0", name : "Rectosigmoid colectomy"
          }, {
            id : "0", name : "Rectal/rectosigmoid colon (low anterior resection)"
          }, {
            id : "0", name : "Total abdominal colectomy"
          }, {
            id : "0", name : "Abdominoperineal resection"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Cecum"
          }, {
            id : "0", name : "Right (ascending) colon"
          }, {
            id : "0", name : "Cecum/Right (ascending) colon"
          }, {
            id : "0", name : "Hepatic flexure"
          }, {
            id : "0", name : "Transverse colon"
          }, {
            id : "0", name : "Splenic flexure"
          }, {
            id : "0", name : "Left (descending) colon"
          }, {
            id : "0", name : "Sigmoid colon"
          }, {
            id : "0", name : "Rectosigmoid"
          }, {
            id : "0", name : "Rectum"
          }, {
            id : "0", name : "Ileocecal valve"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor perforation",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Equivocal"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Adenocarcinoma"
          }, {
            id : "0", name : "Mucinous carcinoma"
          }, {
            id : "0", name : "Adenocarcinoma with mucinous features"
          }, {
            id : "0", name : "Adenocarcinoma with mucinous features and signet ring cells"
          }, {
            id : "0", name : "Signet-ring cell carcinoma"
          }, {
            id : "0", name : "Micropapillary carcinoma"
          }, {
            id : "0", name : "Serrated adenocarcinoma"
          }, {
            id : "0", name : "Medullary carcinoma"
          }, {
            id : "0", name : "Large cell neuroendocrine carcinoma"
          }, {
            id : "0", name : "Small cell neuroendocrine carcinoma"
          }, {
            id : "0", name : "Squamous cell carcinoma"
          }, {
            id : "0", name : "Adenosquamous cell carcinoma"
          }, {
            id : "0", name : "Undifferentiated carcinoma"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Grade 1/4, Well differentiated"
          }, {
            id : "0", name : "Grade 2/4, Moderately differentiated"
          }, {
            id : "0", name : "Grade 2-3/4, Moderately to focally poorly differentiated"       
          }, {
            id : "0", name : "Grade 3/4, Poorly differentiated"
          }, {
            id : "0", name : "Grade 4/4, , Undifferentiated"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "No invasion of lamina propria"
          }, {
            id : "0", name : "Intramucosal (invades lamina propria/muscularis mucosa)"
          }, {
            id : "0", name : "Invades submucosa"
          }, {
            id : "0", name : "Invades muscularis propria"
          }, {
            id : "0", name : "Invades pericolonic/rectal adipose tissue"
          }, {
            id : "0", name : "Invades pericolonic adipose tissue"
          }, {
            id : "0", name : "Invades perirectal adipose tissue"
          }, {
             description : "T4a",
            id : "0", name : "Penetrates serosa"
          }, {
             description : "T4b",
             inputs_required : [ "" ],
            id : "0", name : "Adherent to other organs"
          }, {
             description : "T4b",
            id : "0", name : "Invades omentum"
          }, {
             description : "T4b, specify",
             inputs_required : [ "" ],
            id : "0", name : "Invades other organs"
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "include distance/location of closest proximal/distal/radial margin",
        id : "0", name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "0", name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Positive"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Treatment effect, primary site",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "No prior treatment"
          }, {
            id : "0", name : "Present (score 1 or 2)"
          }, {
            id : "0", name : "No response (score 3)"
          }, {
            id : "0", name : "indeterminate"
          }, {
            id : "0", name : "Not known"
          }  ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Indeterminate"
          }, {
            id : "0", name : "Suspicious"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Present, extensive"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Perineural invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Equivocal"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor deposits",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            description : "#",
            inputs_required : [ "" ],
            id : "0", name : "Present"
          }, {
            id : "0", name : "Equivocal"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "0", name : ""
          }, {
            description : "pathologic",
            id : "0", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "0", name : "m"
          }, {
            description : "recurrent",
            id : "0", name : "r"
          }, {
            description : "post-treatment",
            id : "0", name : "y"
          }, {
            id : "0", name : "mp"
          }, {
            id : "0", name : "rp"
          }, {
            id : "0", name : "yp"
          }, {
            id : "0", name : "mrp"
          }, {
            id : "0", name : "myp"
          }, {
            id : "0", name : "ryp"
          }, {
            id : "0", name : "mryp"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            id : "0", name : "TX"
          }, {
            description : "No tumor",
            id : "0", name : "T0"
          }, {
            description : "in situ or invasion of lamina propria or muscularis mucosa",
            id : "0", name : "Tis"
          }, {
            description : "invades submucosa",
            id : "0", name : "T1"
          }, {
            description : "Invades muscularis propria",
            id : "0", name : "T2"
          }, {
            description : "Invades pericolonc adipose tissue",
            id : "0", name : "T3"
          }, {
            description : "Penetrates serosa",
            id : "0", name : "T4a"
          }, {
            description : "adherent or invades adjacent organs",
            id : "0", name : "T4b"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "0", name : "NX"
          }, {
            description : "No regional lymph node metastasis or <0.2mm",
            id : "0", name : "N0"
          }, {
            description : "IHC+(i+) OR lymph node metastasis <0.2mm",
            id : "0", name : "N0 (see lymph nodes above)"
          }, {
            description : "1 positive nodes, >0.2mm",
            id : "0", name : "N1a"
          }, {
            description : "2-3 postive nodes, >0.2mm",
            id : "0", name : "N1b"
          }, {
            description : "Tumor deposits only",
            id : "0", name : "N1c"
          }, {
            description : "4-6 positive nodes",
            id : "0", name : "N2a"
          }, {
            description : ">=7 positive nodes",
            id : "0", name : "N2b"
          } ],
          id : "0", name : "Category (pN)"
        }, {
          group : [ {
            description : "Distant metastases, one site, no peritoneal metastases",
            id : "0", name : "M1a"
          }, {
                description : "Distant metastases two sites, no peritoneal metastases",
            id : "0", name : "M1b"
          }, {
                description : "Distant metastases to peritoneal surface",
            id : "0", name : "M1c"
          }, {
            id : "0", name : "M (not applicable)"
          }, {
            id : "0", name : "distant metastasis not applicable"
          } ],
          id : "0", name : ""
        } ]
      },  {
         description : "Perform for adenocarcinoma, NOT small cell carcinoma, per Dr Ucar",
        id : "0", name : "MSI IHC and Interpretation",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Pending, addendum to follow"
          },{
             description : "tell the secretary to pick this and copy the answer in a separate note",
            id : "0", name : " see Note."
          },{
             description : "A.",
            id : "0", name : " MLH1+, MSH2+, MSH6+, PMS2+. Intact nuclear expression of MMR protein, low probability of microsatellite instability-high (MSI-H).  There are exceptions to the above IHC interpretations. These results should not be considered in isolation, and clinical correlation with genetic counseling is recommended to assess the need for germline testing."
          }, {
             description : "B.",
            id : "0", name : "MLH1-, MSH2+, MSH6+, PMS2-. Loss of nuclear expression of MLH1 and PMS2: deficient mismatch repair/ high probability of microsatellite instability-high (MSI-H). Testing for methylation of the MLH1 promoter is indicated (the presence of MLH1 methylation suggests that the tumor is sporadic and germline evaluation is probably not indicated; absence of MLH1 methylation suggests the possibility of Lynch syndrome, and sequencing and/or large deletion/duplication testing of germline MLH1 is indicated). There are exceptions to the above IHC interpretations. These results should not be considered in isolation, and clinical correlation with genetic counseling is recommended to assess the need for germline testing."
          }, {
             description : "C.",
            id : "0", name : "MLH1+, MSH2-, MSH6-, PMS2+. Loss of nuclear expression of MSH2 and MSH6: deficient mismatch repair/ high probability of microsatellite instability-high (MSI-H). High probability of Lynch syndrome (sequencing and or large deletion/duplication testing of germline MSH2 may be indicated, and, if negative, sequencing and or large deletion/duplication testing of germline MSH6 may be indicated). There are exceptions to the above IHC interpretations.   These results should not be considered in isolation, and clinical correlation with genetic counseling is recommended to assess the need for germline testing."
          }, {
             description : "D.",
            id : "0", name : "MLH1+, MSH2+, MSH6-, PMS2+. Loss of nuclear expression of MSH6 only: deficient mismatch repair/ high probability of microsatellite instability-high (MSI-H). High probability of Lynch syndrome (sequencing and or large deletion/duplication testing of germline MSH6 may be indicated). There are exceptions to the above IHC interpretations.   These results should not be considered in isolation, and clinical correlation with genetic counseling is recommended to assess the need for germline testing."
          }, {
             description : "E.",
            id : "0", name : "MLH1+, MSH2+, MSH6+, PMS2-. Loss of nuclear expression of PMS2 only: deficient mismatch repair/ high probability of microsatellite instability-high (MSI-H). High probability of Lynch syndrome (sequencing and or large deletion/duplication testing of germline PMS2 may be indicated). There are exceptions to the above IHC interpretations.   These results should not be considered in isolation, and clinical correlation with genetic counseling is recommended to assess the need for germline testing."
          } , {
            description : "case #",
            inputs_required : [ "" ],
            id : "0", name : "See case "
          }],
          id : "0", name : ""
        } ]
     }, {
        id : "0", name : "Ancillary studies ordered",
       optional_state  : "required", "options" : [ {
          group : [ {
             description : "T1-3N0",
            id : "0", name : "PIK3CA"
          },{
             description : "T1-3N0 AND loss of MLH1 and PMS2",
            id : "0", name : "PIK3CA and MLH1 promoter methylation"
          }, {
             description : "T4 or N1",
            id : "0", name : "PIK3CA, K-RAS extended panel, N-RAS, and BRAF"
          }, {
             description : "T4 or N1 AND loss of MLH1 and PMS2",
            id : "0", name : "PIK3CA, K-RAS extended panel, N-RAS, BRAF, and MLH1 promoter methylation"
          }, {
            id : "0", name : "Pending results of MMR protein panel"
          }, {
            id : "0", name : "None"
          }, {
            id : "0", name : "Not applicable"
          }, {
            inputs_required : [ "" ],
            id : "0", name : "See case"
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "Add billing code G8721",
        id : "0", name : "ICD10",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "C18.9"
          } ],
          id : "0", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      description : "Do NOT use for small cell, use regular colon",
      id : "0", name : "Colon neuroendocrine tumor, excluding small cell",
      optional : false,
      organ_group : "Endocrine",
      properties : [  {
        id : "0", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Right hemicolectomy"
          }, {
            id : "0", name : "Transverse hemicolectomy"
          }, {
            id : "0", name : "Left hemicoloectomy"
          }, {
            id : "0", name : "Sigmoidectomy"
          }, {
            id : "0", name : "Rectal/rectosigmoid colon (low anterior resection)"
          }, {
            id : "0", name : "Total abdominal colectomy"
          }, {
            id : "0", name : "Abdominoperineal resection"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Cecum"
          }, {
            id : "0", name : "Right (ascending) colon"
          }, {
            id : "0", name : "Cecum/Right (ascending) colon"
          }, {
            id : "0", name : "Hepatic flexure"
          }, {
            id : "0", name : "Transverse colon"
          }, {
            id : "0", name : "Splenic flexure"
          }, {
            id : "0", name : "Left (descending) colon"
          }, {
            id : "0", name : "Sigmoid colon"
          }, {
            id : "0", name : "Rectosigmoid"
          }, {
            id : "0", name : "Rectum"
          }, {
            id : "0", name : "Ileocecal valve"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor focality",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Single focus of tumor"
          }, {
            id : "0", name : "Multiple foci of tumor"
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "not for small cell, use other colon protocol ",
        id : "0", name : "Type and Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
               description : "< 2mitoses/10 hpf and/or Ki67<3% ",	
            id : "0", name : "Grade 1/3, Well-differentiated neuroendocrine tumor"
          }, {
           description : ">= 2 AND < 20 mitoses/10 hpf and/or Ki67 >=3 AND <20% ",	
            id : "0", name : "Grade 2/3, Well-differentiated neuroendocrine tumor"
          }, {
               description : "> 20 mitoses/10 hpf and/or Ki67 >20% ",	
            id : "0", name : "Grade 3/3, Well-differentiated neuroendocrine tumor"
          } ],
          id : "0", name : ""
        } ]
      }, {
           description : "mitoses/ 2 mm squared NOT 10 hpf, approximately count 42 hpf and divide by 5", 
        id : "0", name : "Mitotic rate",
       optional_state  : "required", "options" : [ {
          group : [ {
            
            id : "0", name : "Less than 2 / 2mm squared"
          }, {
          
            id : "0", name : "at least 2 and less than 20 /2 mm squared"
          }, {
            
            id : "0", name : "More than 20 per 2 mm squared"
          } ],
          id : "0", name : ""
        } ]  
        
      }, {
        id : "0", name : "Ki67 (Mib1)",
       optional_state  : "required", "options" : [ {
          group : [ {
            
            id : "0", name : "Less than 3%"
          }, {
          
            id : "0", name : "at least 3% and less than 20%"
          }, {
            
            id : "0", name : "More than 20%"
          } ],
          id : "0", name : ""
        } ]  
        
      }, {
        id : "0", name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Invades lamina propria"
          }, {
            id : "0", name : "Invades muscularis mucosa"
          }, {
            id : "0", name : "Invades submucosa"
          }, {
            id : "0", name : "Invades muscularis propria"
          }, {
            id : "0", name : "Invades pericolonic/rectal adipose tissue"
          }, {
            id : "0", name : "Invades pericolonic adipose tissue"
          }, {
            id : "0", name : "Invades perirectal adipose tissue"
          }, {
            id : "0", name : "Penetrates serosa"
          }, {
            id : "0", name : "Adherent to other organs"
          }, {
            id : "0", name : "Invades other organs"
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "include distance/location of closest proximal/distal/radial margin",
        id : "0", name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "0", name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Positive"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Indeterminate"
          }, {
            id : "0", name : "Suspicious"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Present, extensive"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "0", name : ""
          }, {
            description : "pathologic",
            id : "0", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "0", name : "m"
          }, {
            description : "recurrent",
            id : "0", name : "r"
          }, {
            description : "post-treatment",
            id : "0", name : "y"
          }, {
            id : "0", name : "mp"
          }, {
            id : "0", name : "rp"
          }, {
            id : "0", name : "yp"
          }, {
            id : "0", name : "mrp"
          }, {
            id : "0", name : "myp"
          }, {
            id : "0", name : "ryp"
          }, {
            id : "0", name : "mryp"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            id : "0", name : "TX"
          }, {
            description : "No tumor",
            id : "0", name : "T0"
          }, {
            description : "<= 1cm",
            id : "0", name : "T1a"
          }, {
            description : "> 1cm AND <= 2cm",
            id : "0", name : "T1b"
          }, {
            description : "> 2 cm OR invades muscularis propria",
            id : "0", name : "T2"
          }, {
            description : "Invades pericolonic/rectal adipose tissue",
            id : "0", name : "T3"
          }, {
            description : "Penetrates serosa or other organs",
            id : "0", name : "T4"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "0", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "0", name : "N0"
          }, {
            description : "Positive nodes",
            id : "0", name : "N1"
          } ],
          id : "0", name : "Category (pN)"
        }, {
          group : [ {
            description : "Distant metastases liver",
            id : "0", name : "M1a"
          }, {
               description : "Distant metastases other than liver",
            id : "0", name : "M1b"
          }, {
               description : "Distant metastases liver and other",
            id : "0", name : "M1c)"
          }, {
            id : "0", name : "M (not applicable)"
          }, {
            id : "0", name : "distant metastasis not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
         description : "add billing code G8721",
        id : "0", name : "ICD10",
       optional_state  : "required", "options" : [ {
          group : [ {
  
            id : "0", name : "153.9"
          } ],
          id : "0", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "0", name : "Distal Bile Ducts",
      optional : false,
      organ_group : "Gastrointestinal",
      properties : [ {
        id : "0", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Pancreaticoduodenectomy (Whipple)"
          }, {
            id : "0", name : "Segmental resection of bile duct(s)"
          }, {
            id : "0", name : "Choledochal cyst resection "
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Common bile duct"
          }, {
            id : "0", name : "Extrapancreatic Common bile duct "
          } , {
            id : "0", name : "Intrapancreatic Common bile duct "
          }],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Adenocarcinoma"
          }, {
            id : "0", name : "Adenocarcinoma, intestinal type"
          }, {
            id : "0", name : "Adenocarcinoma, biliary type"
          }, {
            id : "0", name : "Adenocarcinoma, gastric foveolar type"
          }, {
            id : "0", name : "Intraductal papillary neoplasm with an associated invasive carcinoma"
          }, {
            id : "0", name : "Mucinous cystic neoplasm with an associated invasive carcinoma"
          }, {
            id : "0", name : "Mucinous adenocarcinoma"
          }, {
            id : "0", name : "Clear cell adenocarcinoma"
          }, {
            id : "0", name : "Signet-ring cell carcinoma"
          }, {
            id : "0", name : "Adenosquamous carcinoma"
          }, {
            id : "0", name : "Squamous cell carcinoma"
          }, {
            id : "0", name : "Undifferentiated carcinoma"
          }, {
            id : "0", name : "Mixed adenoneuroendocrine carcinoma"
          }, {
            id : "0", name : "Large cell neuroendocrine carcinoma"
          }, {
            id : "0", name : "Small cell neuroendocrine carcinoma"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Grade 1/3, Well differentiated"
          }, {
            id : "0", name : "Grade 2/3, Moderately differentiated"
          }, {
            id : "0", name : "Grade 3/3, Poorly differentiated"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "No invasion (carcinoma in situ) "
          }, {
            id : "0", name : "Limited to the bile duct"
          }, {
            id : "0", name : "Invades beyond the wall of the bile duct"
          }, {
            id : "0", name : "Invades the duodenum "
          }, {
            id : "0", name : "Invades the pancreas"
          }, {
            id : "0", name : "Invades the gallbladder"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Invades other adjacent structures"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Depth of invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "No invasion"
          }, {
            id : "0", name : "Invades less than 5 mm"
          }, {
            id : "0", name : "Invades at least 5 mm and no more than 12 mm"
          }, {
            id : "0", name : "Invades more than 12 mm"
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "include distance/location of closest proximal bile duct/distal bile duct /radial soft tissue margin, pancreatic neck, uncinate",
        id : "0", name : "Margins invasive tumor",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "0", name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Positive"
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "include distance/location of closest proximal bile duct/distal bile duct /radial soft tissue margin, pancreatic neck, uncinate",
        id : "0", name : "Margins in situ/high grade dysplasia",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "0", name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Positive"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Indeterminate"
          }, {
            id : "0", name : "Suspicious"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Present, extensive"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Perineural invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Equivocal"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "0", name : ""
          }, {
            description : "pathologic",
            id : "0", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "0", name : "m"
          }, {
            description : "recurrent",
            id : "0", name : "r"
          }, {
            description : "post-treatment",
            id : "0", name : "y"
          }, {
            id : "0", name : "mp"
          }, {
            id : "0", name : "rp"
          }, {
            id : "0", name : "yp"
          }, {
            id : "0", name : "mrp"
          }, {
            id : "0", name : "myp"
          }, {
            id : "0", name : "ryp"
          }, {
            id : "0", name : "mryp"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            id : "0", name : "TX"
          }, {
            description : "Carcinoma in situ",
            id : "0", name : "Tis"
          }, {
            description : "Invades bile duct with depth < 5mm ",
            id : "0", name : "T1"
          }, {
            description : "Invades bile duct to depth of >= 5 mm and <=12 mm ",
            id : "0", name : "T2"
          }, {
            description : "Invades bile duct to depth of >12 mm ",
            id : "0", name : "T3"
          }, {
            description : "Involves the celiac axis or the superior mesenteric artery",
            id : "0", name : "T4"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "0", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "0", name : "N0"
          }, {
            description : "1-3 positive nodes",
            id : "0", name : "N1"
          }, {
            description : " 4 or more positive nodes",
            id : "0", name : "N2"
          } ],
          id : "0", name : "Category (pN)"
        }, {
          group : [ {
            description : "Distant metastases",
            id : "0", name : "M1"
          }, {
            id : "0", name : "M (not applicable)"
          }, {
            id : "0", name : "distant metastasis not applicable"
          } ],
          id : "0", name : ""
        } ]
        }, {
          description: "adenocarcinoma only",
        id : "0", name : "MSI IHC and Interpretation",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Intact nuclear expression of MMR proteins (MLH1, MSH2, MSH6, PMS2): No evidence of deficient mismatch repair (low probability of MSI-H)"
          },{
            id : "0", name : "Loss of nuclear expression of one or more MMR proteins (MLH1, MSH2, MSH6, PMS2): deficient mismatch repair/ high probability of microsatellite instability-high (MSI-H). The presence of MSI-H/deficient mismatch repair may also be an indication for additional testing for Lynch syndrome and genetic counselling."
          }, {
            id : "0", name : "Pending"
          }, {
            id : "0", name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            id : "0", name : "See case "
          }],
          id : "0", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "0", name : "DNA Mismatch Repair",
      optional : false,
      organ_group : "Other-Biomarkers",
      properties : [  {
        id : "0", name : "MLH1 Immunohistochemistry",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Pending, addendum to follow"
          }, {
            id : "0", name : "Intact nuclear expression"
          }, {
            id : "0", name : "Loss of  nuclear expression"
          }, {
            id : "0", name : "Equivocal"
          } , {
            id : "0", name : "Not applicable"
          }],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "MSH2 Immunohistochemistry",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Pending, addendum to follow"
          },{
            id : "0", name : "Intact nuclear expression"
          }, {
            id : "0", name : "Loss of  nuclear expression"
          }, {
            id : "0", name : "Equivocal"
          } , {
            id : "0", name : "Not applicable"
          }],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "MSH6 Immunohistochemistry",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Pending, addendum to follow"
          },{
            id : "0", name : "Intact nuclear expression"
          }, {
            id : "0", name : "Loss of  nuclear expression"
          }, {
            id : "0", name : "Equivocal"
          } , {
            id : "0", name : "Not applicable"
          }],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "PMS2 Immunohistochemistry",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Pending, addendum to follow"
          },{
            id : "0", name : "Intact nuclear expression"
          }, {
            id : "0", name : "Loss of  nuclear expression"
          }, {
            id : "0", name : "Equivocal"
          } , {
            id : "0", name : "Not applicable"
          }],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "MSI IHC and Interpretation",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Intact nuclear expression of MMR proteins (MLH1, MSH2, MSH6, PMS2): No evidence of deficient mismatch repair (low probability of MSI-H)"
          },{
            id : "0", name : "Loss of nuclear expression of one or more MMR proteins (MLH1, MSH2, MSH6, PMS2): deficient mismatch repair/ high probability of microsatellite instability-high (MSI-H). The presence of MSI-H/deficient mismatch repair may also be an indication for additional testing for Lynch syndrome and genetic counselling."
          }],
          id : "0", name : ""
        } ]
  
      } ]    
   
    
      
    }, {
      most_common : false,
      id : "0", name : "Duodenum/Ampulla of Vater neuroendocrine tumor",
      optional : false,
      organ_group : "Endocrine",
      properties : [  {
        id : "0", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Ampullectomy"
          }, {
            id : "0", name : "Endoscopic or local resection"
          }, {
            id : "0", name : "Duodenum, segmental resection"
          }, {
            id : "0", name : "Pancreaticoduodenectomy (Whipple resection)"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Duodenum"
          }, {
            id : "0", name : "Ampulla "
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor Focality ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Single focus"
          }, {
            id : "0", name : "Multiple foci"
          }, {
            id : "0", name : "Equivocal"
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "not for small cell, use other colon protocol ",
        id : "0", name : "Type and Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
             description : "< 2mitoses/10 hpf and/or Ki67<3% ",  
            id : "0", name : "Grade 1/3, Well-differentiated neuroendocrine tumor"
          }, {
           description : ">= 2 AND < 20 mitoses/10 hpf and/or Ki67 >=3 AND <20% ", 
            id : "0", name : "Grade 2/3, Well-differentiated neuroendocrine tumor"
          }, {
             description : "> 20 mitoses/10 hpf and/or Ki67 >20% ",  
            id : "0", name : "Grade 3/3, Well-differentiated neuroendocrine tumor"
          } ],
          id : "0", name : ""
        } ]
      }, {
           description : "mitoses/ 2 mm squared NOT 10 hpf, approximately count 42 hpf and divide by 5", 
        id : "0", name : "Mitotic rate",
       optional_state  : "required", "options" : [ {
          group : [ {
            
            id : "0", name : "Less than 2/ 2mm squared"
          }, {
          
            id : "0", name : "at least 2 and less than 20 /2 mm squared"
          }, {
            
            id : "0", name : "More than 20 per 2 mm squared"
          } ],
          id : "0", name : ""
        } ]  
        
      }, {
        id : "0", name : "Ki67 (Mib1)",
       optional_state  : "required", "options" : [ {
          group : [ {
            
            id : "0", name : "Less than 3%"
          }, {
          
            id : "0", name : "at least 3% and less than 20%"
          }, {
            
            id : "0", name : "More than 20%"
          } ],
          id : "0", name : ""
        } ]  
        
      }, {
        id : "0", name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "No evidence of primary tumor"
          }, {
            description : "DUODENUM",
            id : "0", name : "Invades mucosa/lamina propria"
          }, {
            description : "DUODENUM",
            id : "0", name : "Invades submucosa"
          }, {
            description : "DUODENUM",
            id : "0", name : "Invades muscularis propria"
          }, {
            description : "DUODENUM",
            id : "0", name : "Invades pancreas"
          }, {
            description : "DUODENUM",
            id : "0", name : "Tumor invades peripancreatic tissue"
          }, {
            description : "DUODENUM",
            id : "0", name : "Tumor penetrates serosa (visceral peritoneum) "
          }, {
            description : "DUODENUM",
            inputs_required : [ "" ],
            id : "0", name : "Tumor directly invades adjacent structures "
          }, {
            description : "AMPULLA ",
            id : "0", name : "Tumor limited to ampulla of Vater or sphincter of Oddi "
          }, {
            description : "AMPULLA ",
            id : "0", name : "Tumor invades duodenal submucosa"
          }, {
            description : "AMPULLA ",
            id : "0", name : "Tumor invades duodenal muscularis propria"
          }, {
            description : "AMPULLA ",
            id : "0", name : "Tumor invades pancreas "
          }, {
            description : "AMPULLA ",
            id : "0", name : "Tumor invades peripancreatic soft tissues  "
          }, {
            description : "AMPULLA ",
            id : "0", name : "Tumor penetrates serosa"
          }, {
            description : "AMPULLA",
            inputs_required : [ "" ],
            id : "0", name : "Tumor directly invades adjacent structures "
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "include distance/location of closest proximal/distal/radial/bile duct/uncinate, pancreatic neck margin",
        id : "0", name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "0", name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Positive"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Indeterminate"
          }, {
            id : "0", name : "Suspicious"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Present, extensive"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "0", name : ""
          }, {
            description : "pathologic",
            id : "0", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "0", name : "m"
          }, {
            description : "recurrent",
            id : "0", name : "r"
          }, {
            description : "post-treatment",
            id : "0", name : "y"
          }, {
            id : "0", name : "mp"
          }, {
            id : "0", name : "rp"
          }, {
            id : "0", name : "yp"
          }, {
            id : "0", name : "mrp"
          }, {
            id : "0", name : "myp"
          }, {
            id : "0", name : "ryp"
          }, {
            id : "0", name : "mryp"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            id : "0", name : "TX"
          }, {
            description : "No tumor",
            id : "0", name : "T0"
          }, {
            description : "Tumor invades lamina propria or submucosa and size 1 cm or less (small intestinal tumors); tumor 1 cm or less and confiend to sphincter of Oddi (ampullary tumors) ",
            id : "0", name : "T1"
          }, {
            description : "Tumor invades muscularis propria or tumor size >1 cm (small intestinal tumors); tumor size >1 cm or invades sphincter of Oddi (ampullary tumors)",
            id : "0", name : "T2"
          }, {
            description : "Tumor  invades pancreas or peripacnreatic adipose tissues",
            id : "0", name : "T3"
          }, {
            description : "Tumor penetrates visceral peritoneum (serosa) or invades other organs ",
            id : "0", name : "T4"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "0", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "0", name : "N0"
          }, {
            description : "Metastases to regional lymph nodes",
            id : "0", name : "N1"
          } ],
          id : "0", name : "Category (pN)"
        }, {
          group : [ {
            description : "Distant metastases liver",
            id : "0", name : "M1a"
          }, {
               description : "Distant metastases all others",
            id : "0", name : "M1b"
          }, {
               description : "Distant metastases liver and others",
            id : "0", name : "M1c"
          }, {
            id : "0", name : "M (not applicable)"
          }, {
            id : "0", name : "distant metastasis not applicable"
          } ],
          id : "0", name : ""
        } ]
      } ]
      
     }, {
      most_common : false,
      id : "0", name : "Endometrium",
      optional : false,
      organ_group : "Gynecologic",
      properties : [  {
        id : "0", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Simple hysterectomy"
          }, {
            id : "0", name : "Radical hysterectomy"
          }, {
            id : "0", name : "Supracervical hysterectomy"
          }, {
            id : "0", name : "Simple hysterectomy and bilateral salpingo-oophorectomy"
          }, {
            id : "0", name : "Radical hysterectomy and bilateral salpingo-oophorectomy"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "WT1-, p53 -/focal+, ER +, Pax8+ p16-, HPV ISH- or cervical HPV ISH+, p16+, CEA+, p53 wild type, ER-/wk, Vim -/wk vs endometrial HPV ISH-, p16-/wk, CEA -/wk, p53 abnormal/-, ER-/+, Vim -/wk",
            id : "0", name : "Endometrioid adenocarcinoma"
          }, {
            id : "0", name : "Endometrioid adenocarcinoma with squamous differentiation"
          }, {
            id : "0", name : "Endometrioid adenocarcinoma, villoglandular variant"
          }, {
            id : "0", name : "Endometrioid adenocarcinoma with secretory differentiation"
          }, {
            id : "0", name : "Mucinous adenocarcinoma"
          }, {
            description : "NapsinA+, HNF-1b +, Pax8+",
            id : "0", name : "Clear cell adenocarcinoma"
          }, {
            description : "WT1-, p53 + or completely -, ER variable, Pax8+, p16+, HPV-",
            id : "0", name : "Serous endometrial intraepithelial carcinoma"
          }, {
            description : "WT1-, p53 + or completely -, ER variable, Pax8+, p16+, HPV-",
            id : "0", name : "Serous carcinoma"
          }, {
            id : "0", name : "Small cell carcinoma"
          }, {
            id : "0", name : "Large cell neuroendocrine carcinoma"
          }, {
            id : "0", name : "Carcinosarcoma (MMMT)"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "endometrioid and mucinous, <5% solid, small nuclei",
            id : "0", name : "FIGO grade 1/3"
          }, {
            description : "endometrioid and mucinous, 5-50% solid, small nuclei OR <5% solid, big nuclei",
            id : "0", name : "FIGO grade 2/3"
          }, {
            description : "endometrioid and mucinous, >50% solid, small nuclei OR 5-50% solid, big nuclei",
            id : "0", name : "FIGO grade 3/3"
          }, {
            description : "for serous, clear cell carcinoma",
            id : "0", name : "High grade"
          }, {
            description : "MMMT",
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Myometrial invasion (depth)",
       optional_state  : "required", "options" : [ {
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Myometrial thickness",
       optional_state  : "required", "options" : [ {
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Myometrial invasion (%)",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Limited to endometrium"
          }, {
            id : "0", name : "Less than or equal to 50%"
          }, {
            id : "0", name : "Greater than 50%"
          }, {
            id : "0", name : "Indeterminate"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Uterine serosal involvement",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Indeterminate"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Cervix involvement",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Cervical surface involvement only without stromal invasion"
          }, {
            id : "0", name : "Cervical stromal invasion limited to inner 50% of cervix thickness"
          }, {
            id : "0", name : "Cervical stromal invasion of outer 50% of cervix thickness"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {  description : "includes R/L parametrium, ovary, fallopian tube, vagina, pelvic wall, bladder wall, bladder mucosa, rectal wall, bowel mucosa, omentum",
        id : "0", name : "Other tissue(s) involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Indeterminate"
          }, {
            id : "0", name : "Suspicious"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Present, extensive"
          } ],
          id : "0", name : ""
        } ]
      }, {
    
        id : "0", name : "Lymph nodes, pelvic, # sentinel",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
            description : "includes pelvic, parametrial, obturator, internal iliac (hypogastric), external iliac, common iliac, sacral, and presacral",
        id : "0", name : "Lymph nodes, pelvic, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Pelvic lymph node laterality",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Right"
          }, {
            id : "0", name : "Left"
          }, {
            id : "0", name : "Bilateral"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
       
        id : "0", name : "Lymph nodes, pelvic, # w/ mets > 2mm",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
      
        id : "0", name : "Lymph nodes, pelvic, # w/ mets >0.2mm, <= 2mm",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "<= 0.2mm",
        id : "0", name : "Lymph nodes, pelvic, # w/ isolated tumor cells",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
       
        id : "0", name : "Lymph nodes, paraaortic, # sentinel",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, paraaortic, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Paraaortic lymph node laterality",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Right"
          }, {
            id : "0", name : "Left"
          }, {
            id : "0", name : "Bilateral"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
      
        id : "0", name : "Lymph nodes, paraaortic, # w/ mets > 2mm",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
       
        id : "0", name : "Lymph nodes, paraaortic, # w/ mets >0.2mm, <= 2mm",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "<= 0.2mm",
        id : "0", name : "Lymph nodes, paraaortic, # w/ isolated tumor cells",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "0", name : ""
          }, {
            description : "preliminary/pathologic",
            id : "0", name : "AJCC p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "0", name : "AJCC m"
          }, {
            description : "recurrent",
            id : "0", name : "AJCC r"
          }, {
            description : "post-treatment",
            id : "0", name : "AJCC y"
          }, {
            id : "0", name : "AJCC mp"
          }, {
            id : "0", name : "AJCC rp"
          }, {
            id : "0", name : "AJCC yp"
          }, {
            id : "0", name : "AJCC mrp"
          }, {
            id : "0", name : "AJCC myp"
          }, {
            id : "0", name : "AJCC ryp"
          }, {
            id : "0", name : "AJCC mryp"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            id : "0", name : "TX"
          }, {
            description : "Limited to endometrium or invades <50% of myometrium",
            id : "0", name : "T1a"
          }, {
            description : ">= 50% myometrial invasion",
            id : "0", name : "T1b"
          }, {
            description : "Invades stroma of cervix",
            id : "0", name : "T2"
          }, {
            description : "Penetrates serosa OR adnexa ",
            id : "0", name : "T3a"
          }, {
            description : "Invades vagina OR parametrium ",
            id : "0", name : "T3b"
          }, {
            description : "Invades mucosa of bladder, rectum",
            id : "0", name : "T4"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "0", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "0", name : "N0"
          }, {
            description : "Positive ITCs (<=0.2mm) any site (pelvic or para-aortic)",
            id : "0", name : "N0(i+)"
          }, {
            description : "positive pelvic nodes >0.2mm AND <=2mm",
            id : "0", name : "N1mi"
          }, {
            description : "positive pelvic nodes, > 2mm",
            id : "0", name : "N1a"
          }, {
            description : "positive para-aortic nodes, >0.2mm AND <=2mm",
            id : "0", name : "N2mi"
          }, {
            description : "positive para-aortic nodes, >2mm",
            id : "0", name : "N2a"
          } ],
          id : "0", name : "Category (pN)"
        }, {
          group : [ {
            description : "metastases",
            id : "0", name : "M1"
          }, {
            id : "0", name : "M (not applicable)"
          }, {
            id : "0", name : "distant metastasis not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Stage (FIGO 2015)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "No or less than half myometrial invasion",
            id : "0", name : "FIGO IA"
          }, {
            description : "Invasion equal to or more than half of the myometrium",
            id : "0", name : "FIGO IB"
          }, {
            description : "Tumor invades cervical stroma, but does not extend beyond the uterus",
            id : "0", name : "FIGO II"
          }, {
            description : "Tumor invades the serosa of the corpus uteri and/or adnexae",
            id : "0", name : "FIGO IIIA"
          }, {
            description : "Vaginal involvement and/ or parametrial involvement",
            id : "0", name : "FIGO IIIB"
          }, {
            description : "Positive pelvic nodes",
            id : "0", name : "FIGO IIIC1"
          }, {
            description : "Positive para-aortic nodes with or without positive pelvic lymph nodes",
            id : "0", name : "FIGO IIIC2"
          }, {
            description : "Tumor invasion of bladder and/or bowel mucosa",
            id : "0", name : "FIGO IVA"
          }, {
            description : "Distant metastasis, including intraabdominal metastases and/or inguinal nodes",
            id : "0", name : "FIGO IVB"
          }, {
            description : "",
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      },  {
        description : "ALL women",
        id : "0", name : "MSI IHC and Interpretation",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Pending, addendum to follow"
          },{
             description : "tell the secretary to pick this and copy the answer in a separate note",
            id : "0", name : " See note"
          },{
              description : "A.",
            id : "0", name : " MLH1+, MSH2+, MSH6+, PMS2+. Intact nuclear expression of MMR proteins: low probability of microsatellite instability-high (MSI-H). There are exceptions to the above IHC interpretations. These results should not be considered in isolation, and clinical correlation with genetic counseling is recommended to assess the need for germline testing."
          }, {
              description : "B.",
            id : "0", name : "MLH1-, MSH2+, MSH6+, PMS2-. Loss of nuclear expression of MLH1 and PMS2: deficient mismatch repair/ high probability of microsatellite instability-high (MSI-H). Testing for methylation of the MLH1 promoter is indicated (the presence of MLH1 methylation suggests that the tumor is sporadic and germline evaluation is probably not indicated; absence of MLH1 methylation suggests the possibility of Lynch syndrome, and sequencing and/or large deletion/duplication testing of germline MLH1 is indicated). There are exceptions to the above IHC interpretations. These results should not be considered in isolation, and clinical correlation with genetic counseling is recommended to assess the need for germline testing."
          }, {
              description : "C.",
            id : "0", name : "MLH1+, MSH2-, MSH6-, PMS2+. Loss of nuclear expression of MSH2 and MSH6: deficient mismatch repair/ high probability of microsatellite instability-high (MSI-H). High probability of Lynch syndrome (sequencing and/or large deletion/duplication testing of germline MSH2 is indicated, and, if negative, sequencing and/or large deletion/duplication testing of germline MSH6 is indicated. If both are negative, sequencing and/or large deletion/duplication testing of germline EPCAM is indicated.) There are exceptions to the above IHC interpretations. These results should not be considered in isolation, and clinical correlation with genetic counseling is recommended to assess the need for germline testing"
          }, {
              description : "D.",
            id : "0", name : "MLH1+, MSH2+, MSH6-, PMS2+. Loss of nuclear expression of MSH6 only: deficient mismatch repair/ high probability of microsatellite instability-high (MSI-H). High probability of Lynch syndrome (sequencing and/or large deletion/duplication testing of germline MSH6 is indicated). There are exceptions to the above IHC interpretations. These results should not be considered in isolation, and clinical correlation with genetic counseling is recommended to assess the need for germline testing."
          }, {
              description : "E.",
            id : "0", name : "MLH1+, MSH2+, MSH6+, PMS2-. Loss of nuclear expression of PMS2 only: deficient mismatch repair/ high probability of microsatellite instability-high (MSI-H). High probability of Lynch syndrome (sequencing and/or large deletion/duplication testing of germline PMS2 is indicated). There are exceptions to the above IHC interpretations. These results should not be considered in isolation, and clinical correlation with genetic counseling is recommended to assess the need for germline testing."
          }, {
            id : "0", name : "Not applicable"
          } , {
            description : "case #",
            inputs_required : [ "" ],
            id : "0", name : "See case "
          }],
          id : "0", name : ""
        } ]
         }, {
        id : "0", name : "Ancillary studies ordered",
       optional_state  : "required", "options" : [ {
          group : [ {
             description : "loss of MLH1 and PMS2",
            id : "0", name : "MLH1 promoter methylation"
          }, {
            id : "0", name : "Pending results of MMR protein panel"
          }, {
            id : "0", name : "None"
          }, {
            id : "0", name : "Not applicable"
          }, {
            inputs_required : [ "" ],
            id : "0", name : "See case"
          } ],
          id : "0", name : ""
        } ] 
      } ]
    }, {
      most_common : false,
      id : "0", name : "Esophagus",
      optional : false,
      organ_group : "Gastrointestinal",
      properties : [  {
        id : "0", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Endoscopic resection"
          }, {
            id : "0", name : "Esophagectomy"
          }, {
            id : "0", name : "Esophagogastrectomy"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Cervical (proximal) esophagus"
          }, {
            id : "0", name : "Mid esophagus, upper thoracic esophagus"
          }, {
            id : "0", name : "Mid esophagus, middle thoracic esophagus"
          }, {
            id : "0", name : "Mid esophagus"
          }, {
            id : "0", name : "Distal esophagus (lower thoracic esophagus)"
          }, {
            id : "0", name : "Esophagogastric junction (EGJ)"
          }, {
            id : "0", name : "Proximal stomach and esophagogastric junction"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Relationship of Tumor to Esophagogastric Junction ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Tumor is entirely located within the tubular esophagus and does not involve the esophagogastric junction"
          }, {
            id : "0", name : "Tumor midpoint lies in the distal esophagus and tumor involves the esophagogastric junction"
          }, {
            id : "0", name : "Tumor midpoint is located at the esophagogastric junction"
          }, {
            id : "0", name : "Tumor midpoint lies in the proximal stomach or cardia and tumor involves the esophagogastric junction"
          }, {
            id : "0", name : "Indeterminate"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Distance of tumor center from esophagogastric junction ",
       optional_state  : "required", "options" : [ {
         group : [ {
          
            id : "0", name : "Not applicable"
          }, {
            id : "0", name : "indeterminate"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Adenocarcinoma"
          }, {
            id : "0", name : "Adenoid cystic carcinoma"
          }, {
            id : "0", name : "Mucoepidermoid carcinoma"
          }, {
            id : "0", name : "Mixed adenoneuroendocrine carcinoma "
          }, {
            id : "0", name : "Undifferentiated carcinoma with glandular component"
          }, {
            id : "0", name : "Squamous cell carcinoma"
          }, {
            id : "0", name : "Basaloid squamous cell carcinoma"
          }, {
            id : "0", name : "Adenosquamous carcinoma"
          }, {
            id : "0", name : "Spindle cell (squamous) carcinoma"
          }, {
            id : "0", name : "Verrucous (squamous) carcinoma"
          }, {
            id : "0", name : "Undifferentiated carcinoma with squamous component"
          }, {
            id : "0", name : "Undifferentiated carcinoma"
          }, {
            id : "0", name : "Large cell neuroendocrine carcinoma"
          }, {
            id : "0", name : "Small cell neuroendocrine carcinoma"
          }, {
            id : "0", name : "Neuroendocrine carcinoma (poorly differentiated)"
          }, {
            id : "0", name : "G1: Well-differentiated neuroendocrine tumor"
          }, {
            id : "0", name : "G2: Well-differentiated neuroendocrine tumor"
          }, {
            id : "0", name : "G3: Well-differentiated neuroendocrine tumor"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Grade 1/3, Well differentiated"
          }, {
            id : "0", name : "Grade 2/3, Moderately differentiated"
          }, {
            id : "0", name : "Grade 3/3, Poorly differentiated, undifferentiated"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "No evidence of primary tumor"
          }, {
            id : "0", name : "High-grade dysplasia (carcinoma in situ) "
          }, {
            id : "0", name : "Invades lamina propria"
          }, {
            id : "0", name : "Invades muscularis mucosae"
          }, {
            id : "0", name : "Invades submucosa"
          }, {
            id : "0", name : "Invades muscularis propria"
          }, {
            id : "0", name : "Invades periesophageal soft tissue (adventitia)"
          }, {
            id : "0", name : "Penetrates serosa"
          }, {
            description : "which",
            inputs_required : [ "" ],
            id : "0", name : "Invades adjacent structures "
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "include distance/location of closest proximal/distal/radial margin",
        id : "0", name : "Margins, invasive tumor",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "0", name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Positive"
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "include distance/location of closest proximal/distal margin",
        id : "0", name : "Margins, dysplasia/CIS",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "0", name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Positive"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Treatment effect, primary site",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "No prior treatment"
          }, {
            id : "0", name : "Present (score 1 or 2)"
          }, {
            id : "0", name : "No response (score 3)"
          }, {
            id : "0", name : "Indeterminate"
          }, {
            id : "0", name : "Not known"
          }  ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Indeterminate"
          }, {
            id : "0", name : "Suspicious"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Present, extensive"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "0", name : ""
          }, {
            description : "pathologic",
            id : "0", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "0", name : "m"
          }, {
            description : "recurrent",
            id : "0", name : "r"
          }, {
            description : "post-treatment",
            id : "0", name : "y"
          }, {
            id : "0", name : "mp"
          }, {
            id : "0", name : "rp"
          }, {
            id : "0", name : "yp"
          }, {
            id : "0", name : "mrp"
          }, {
            id : "0", name : "myp"
          }, {
            id : "0", name : "ryp"
          }, {
            id : "0", name : "mryp"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            id : "0", name : "TX"
          }, {
            description : "No tumor",
            id : "0", name : "T0"
          }, {
            description : "High-grade dysplasia",
            id : "0", name : "Tis"
          }, {
            description : "Tumor invades lamina propria, muscularis mucosae, or submucosa",
            id : "0", name : "T1"
          }, {
            description : "Tumor invades lamina propria or muscularis mucosae",
            id : "0", name : "T1a"
          }, {
            description : "Tumor invades submucosa",
            id : "0", name : "T1b"
          }, {
            description : "Tumor invades muscularis propria",
            id : "0", name : "T2"
          }, {
            description : "Tumor invades adventitia",
            id : "0", name : "T3"
          }, {
            description : "Tumor invades adjacent structures ",
            id : "0", name : "T4"
          }, {
            description : "Resectable tumor invading pleura, pericardium, or diaphragm ",
            id : "0", name : "T4a"
          }, {
            description : "Unresectable tumor invading other adjacent structures, such as aorta, vertebral body, trachea, etc",
            id : "0", name : "T4b"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "0", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "0", name : "N0"
          }, {
            description : "Regional lymph node metastasis involving 1 to 2 nodes",
            id : "0", name : "N1"
          }, {
            description : "3 to 6 nodes involved",
            id : "0", name : "N2"
          }, {
            description : "7 or more nodes involved",
            id : "0", name : "N3"
          } ],
          id : "0", name : "Category (pN)"
        }, {
          group : [ {
            description : "Distant metastases",
            id : "0", name : "M1"
          }, {
            id : "0", name : "M (not applicable)"
          }, {
            id : "0", name : "distant metastasis not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Additional findings ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Intestinal metaplasia (Barrett’s esophagus)"
          }, {
            id : "0", name : "Low grade dysplasia"
          }, {
            id : "0", name : "High grade Dysplasia"
          }, {
            id : "0", name : "Equivocal"
          }, {
            id : "0", name : "None"
          } ],
          id : "0", name : ""
        } ]
         }, {
          description : "Order IHC with reflext FISH for adenocarcinoma",
        id : "0", name : "Her2Neu by IHC",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Positive (3+)"
          }, {
            id : "0", name : "Negative (0-1+)"
          }, {
            id : "0", name : "Equivocal (2+)"
          }, {
            id : "0", name : "Pending"
          }, {
            id : "0", name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            id : "0", name : "See case "
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Her2Neu by FISH",
        description : "Order IHC with reflext FISH for adenocarcinoma",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Positive"
          }, {
            id : "0", name : "Negative"
          }, {
            id : "0", name : "Equivocal"
          }, {
            id : "0", name : "Pending"
          }, {
            id : "0", name : "Reflex pending if appropriate"
          }, {
            id : "0", name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            id : "0", name : "See case "
          } ],
          id : "0", name : ""
        } ]
        }, {
         description : "Keytruda, specific scoring system for adenocarcinoma",
        id : "0", name : "PDL1",
       optional_state  : "required", "options" : [ {
          group : [ {
            inputs_required : [ "% of cells", [ "strong", "moderate", "weak" ] ],
            id : "0", name : "Positive/Expressed"
          }, {
            inputs_required : [ "" ],
            id : "0", name : "Positive, Score ="
          }, {
            id : "0", name : "Negative (0%)"
          }, {
            id : "0", name : "Pending"
          }, {
            id : "0", name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            id : "0", name : "See case "
          } ],
          id : "0", name : ""
        }  ]
       }, {
          description: "adenocarcinoma only",
        id : "0", name : "MSI IHC and Interpretation",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Intact nuclear expression of MMR proteins (MLH1, MSH2, MSH6, PMS2): No evidence of deficient mismatch repair (low probability of MSI-H)"
          },{
            id : "0", name : "Loss of nuclear expression of one or more MMR proteins (MLH1, MSH2, MSH6, PMS2): deficient mismatch repair/ high probability of microsatellite instability-high (MSI-H). The presence of MSI-H/deficient mismatch repair may also be an indication for additional testing for Lynch syndrome and genetic counselling."
          }, {
            id : "0", name : "Pending"
          }, {
            id : "0", name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            id : "0", name : "See case "
          }],
          id : "0", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "0", name : "Ewing sarcoma/PNET",
      optional : true,
      organ_group : "Pediatric",
      properties : [ {
        id : "0", name : "Procedure ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Resection "
          }, {
            id : "0", name : "Amputation"
          } , {
            id : "0", name : "Limb salvage procedure "
          }],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "0", name : ""
        } ]
      }, {
        description : "include distance/location of closest soft tissue and bone margin",
        id : "0", name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance to closest bone and or soft tissue margin (specify)",
            inputs_required : [ "" ],
            id : "0", name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Positive"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Preresection Treatment  ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Chemotherapy"
          }, {
            id : "0", name : "Radiation therapy"
          }, {
            id : "0", name : "Chemotherapy and radiation therapy"
          }, {
            id : "0", name : "Indeterminate"
          }, {
            id : "0", name : "Not known"
          }  ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Treatment effect, primary site ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Not applicable"
          }, {
            id : "0", name : "None"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Indeterminate"
          }, {
            id : "0", name : "Not known"
          }  ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
       }, {
        id : "0", name : "Distant Metastases ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
             description : "site",
            inputs_required : [ "" ],
            id : "0", name : "Present"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
    
      } ]
    }, {
      most_common : false,
      id : "0", name : "Gallbladder",
      optional : false,
      organ_group : "Gastrointestinal",
      properties : [ {
        id : "0", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Simple cholecystectomy"
          }, {
            id : "0", name : "Radical cholecystectomy (with liver resection and/or lymph nodes)"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Fundus"
          }, {
            id : "0", name : "Body"
          }, {
            id : "0", name : "Neck"
          }, {
            id : "0", name : "Cystic duct"
          }, {
            id : "0", name : "Free peritoneal side of gallbladder"
          }, {
            id : "0", name : "Hepatic side of gallbladder"
          }, {
            id : "0", name : "Equivocal"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Adenocarcinoma"
          }, {
            id : "0", name : "Adenocarcinoma, intestinal type"
          }, {
            id : "0", name : "Adenocarcinoma, biliary type"
          }, {
            id : "0", name : "Adenocarcinoma, gastric foveolar type"
          }, {
            id : "0", name : "Mucinous adenocarcinoma"
          }, {
            id : "0", name : "Signet-ring cell carcinoma"
          }, {
            id : "0", name : "Clear cell carcinoma"
          }, {
            id : "0", name : "Intracystic papillary neoplasm with an associated invasive carcinoma"
          }, {
            id : "0", name : "Mucinous cystic neoplasm with an associated invasive carcinoma "
          }, {
            id : "0", name : "Large cell neuroendocrine carcinoma"
          }, {
            id : "0", name : "Small cell carcinoma"
          }, {
            id : "0", name : "Neuroendocrine carcinoma (poorly differentiated)"
          }, {
            id : "0", name : "Adenosquamous carcinoma"
          }, {
            id : "0", name : "Squamous cell carcinoma"
          }, {
            id : "0", name : "Undifferentiated carcinoma"
          }, {
            id : "0", name : "Goblet cell carcinoid"
          }, {
            id : "0", name : "Mixed adenoneuroendocrine carcinoma"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Grade 1/3, Well differentiated"
          }, {
            id : "0", name : "Grade 2/3, Moderately differentiated"
          }, {
            id : "0", name : "Grade 3/3, Poorly differentiated"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Invades lamina propria"
          }, {
            id : "0", name : "Invades muscle"
          }, {
            id : "0", name : "Invades perimuscular connective tissue on the peritoneal side "
          }, {
            id : "0", name : "Invades perimuscular connective tissue on the hepatic side "
          }, {
            id : "0", name : "Penetrates serosa"
          }, {
            id : "0", name : "Invades liver"
          }, {
            description : "specify",
             inputs_required : [ "" ],
            id : "0", name : "Invades other organs"
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "include distance/location of closest margin, cystic duct, liver parenchyma",
        id : "0", name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "0", name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Positive"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "0", name : ""
          }, {
            description : "pathologic",
            id : "0", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "0", name : "m"
          }, {
            description : "recurrent",
            id : "0", name : "r"
          }, {
            description : "post-treatment",
            id : "0", name : "y"
          }, {
            id : "0", name : "mp"
          }, {
            id : "0", name : "rp"
          }, {
            id : "0", name : "yp"
          }, {
            id : "0", name : "mrp"
          }, {
            id : "0", name : "myp"
          }, {
            id : "0", name : "ryp"
          }, {
            id : "0", name : "mryp"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            id : "0", name : "TX"
          }, {
            description : "in situ",
            id : "0", name : "Tis"
          }, {
            description : "invades lamina propria",
            id : "0", name : "T1a"
          }, {
            description : "invades muscle",
            id : "0", name : "T1b"
          }, {
            description : "invades perimuscular tissue on the peritoneal side, without penetrating serosa",
            id : "0", name : "T2a"
          }, {
            description : "invades perimuscular tissue on the hepatic side, with out extension into liver",
            id : "0", name : "T2b"
          }, {
            description : "Penetrates serosa OR invades organs",
            id : "0", name : "T3"
          }, {
            description : "Invades main portal vein OR hepatic artery OR 2 extra hepatic organs",
            id : "0", name : "T4"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "0", name : "NX"
          }, {
            description : "No metastasis",
            id : "0", name : "N0"
          }, {
            description : "1-3 Regional metastases",
            id : "0", name : "N1"
          }, {
            description : "4 or more lymph nodes",
            id : "0", name : "N2"
          } ],
          id : "0", name : "Category (M)"
        }, {
          group : [ {
            description : "Distant metastasis ",
            id : "0", name : "M1"
          }, {
            id : "0", name : "M (not applicable)"
          }, {
            id : "0", name : "distant metastasis not applicable"
          } ],
          id : "0", name : ""
        } ]
        }, {
          description: "adenocarcinoma only",
        id : "0", name : "MSI IHC and Interpretation",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Intact nuclear expression of MMR proteins (MLH1, MSH2, MSH6, PMS2): No evidence of deficient mismatch repair (low probability of MSI-H)"
          },{
            id : "0", name : "Loss of nuclear expression of one or more MMR proteins (MLH1, MSH2, MSH6, PMS2): deficient mismatch repair/ high probability of microsatellite instability-high (MSI-H). The presence of MSI-H/deficient mismatch repair may also be an indication for additional testing for Lynch syndrome and genetic counselling."
          }, {
            id : "0", name : "Pending"
          }, {
            id : "0", name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            id : "0", name : "See case "
          }],
          id : "0", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "0", name : "Germ Cell, extragonadal",
      optional : true,
      organ_group : "Pediatric",
      properties : [ {
        id : "0", name : "Procedure ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Core needle biopsy"
          }, {
            id : "0", name : "Incisional biopsy"
          }, {
            id : "0", name : "Excisional biopsy"
          } ],
          id : "0", name : ""
        } ]
      },{
        id : "0", name : "Patient Age ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Congenital/neonatal (birth - 6 mo)"
          }, {
            id : "0", name : "Childhood/prepubertal (7 mo - 12 y)"
          }, {
            id : "0", name : "Postpubertal/adult (≥12 y)"
          }, {
            id : "0", name : "Not known"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Intracranial"
          }, {
            id : "0", name : "Head and neck region "
          }, {
            id : "0", name : "Mediastinum"
          }, {
            id : "0", name : "Retroperitoneum/abdomen"
          }, {
            id : "0", name : "Sacrococcygeal"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "0", name : ""
        } ]
      
      }, {
        id : "0", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Mature teratoma"
          }, {
            id : "0", name : "Immature teratoma"
          }, {
            id : "0", name : "Teratoma and other germ cell tumor "
          }, {
            id : "0", name : "Teratoma and other non-germ cell epithelial malignancy "
          }, {
            id : "0", name : "Teratoma and sarcoma "
          }, {
            id : "0", name : "Germinoma"
          }, {
            id : "0", name : "Yolk sac tumor"
          }, {
            id : "0", name : "Embryonal carcinoma "
          }, {
            id : "0", name : "Choriocarcinoma "
          }, {
            id : "0", name : "Teratoma and sarcoma "
          }, {
            id : "0", name : "Combined nonteratomatous germ cell tumor "
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Tumor involving coccyx"
          }, {
            id : "0", name : "Coccyx uninvolved"
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "include distance/location of closest margin",
        id : "0", name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "0", name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Positive"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Distant Metastases",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Present"
          }, {
            id : "0", name : "M (not applicable)"
          }, {
            id : "0", name : "distant metastasis not applicable"
          } ],
          id : "0", name : ""
        } ]
     
      } ]
    }, {
      most_common : false,
      id : "0", name : "GIST",
      optional : false,
      organ_group : "Gastrointestinal",
      properties : [ {
        id : "0", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Excisional biopsy"
          }, {
            id : "0", name : "Resection"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Esophagus"
          }, {
            id : "0", name : "Stomach"
          }, {
            id : "0", name : "Duodenum"
          }, {
            id : "0", name : "Jejunum"
          }, {
            id : "0", name : "Ileum"
          }, {
            id : "0", name : "Small intestine"
          }, {
            id : "0", name : "Right colon"
          }, {
            id : "0", name : "Transverse colon"
          }, {
            id : "0", name : "Descending colon"
          }, {
            id : "0", name : "Colon"
          }, {
            id : "0", name : "Rectum"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor focality",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Single focus"
          }, {
            id : "0", name : "Multiple foci"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Subtype",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Spindle cell"
          }, {
            id : "0", name : "Epithelioid"
          }, {
            id : "0", name : "Mixed"
          } ],
          id : "0", name : ""
        } ]
       }, {
         description : " mitoses/ 5 mm squared approximately 20-25 hpfs",
        id : "0", name : "Mitotic rate",
       optional_state  : "required", "options" : [ {
          group : [  {
            id : "0", name : " 5 or less/ 5 mm squared"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : " 5 or less mitoses/ 5 mm squared",
            id : "0", name : "Low grade"
          }, {
            description : "greater than 5 mitoses/ 5 mm squared",
            id : "0", name : "High grade"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Risk assessment",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "GASTRIC: <= 2 cm",
            id : "0", name : "None"
          }, {
            description : "GASTRIC: >2cm AND <= 5cm AND mitoses <=5/5 mm squared",
            id : "0", name : "Very low risk"
          }, {
            description : "GASTRIC: > 5cm AND < 10cm AND mitoses <=5/5 mm squared",
            id : "0", name : "Low risk"
          }, {
            description : "GASTRIC: (> 10cm AND mitoses <=5/5 mm squared) OR (>2cm AND <=5cm AND mitoses > 5/50 hpf) ",
            id : "0", name : "Moderate risk"
          }, {
            description : "GASTRIC:> 5cm AND  mitoses >5/5 mm squared ",
            id : "0", name : "High risk"
          }, {
            description : "DUODENUM: <= 2cm AND mitoses <=5/5 mm squared",
            id : "0", name : "None"
          }, {
            description : "DUODENUM: (>2cm AND <= 5cm AND mitoses <=5/5 mm squared)",
            id : "0", name : "Low risk"
          }, {
            description : "DUODENUM: {> 10cm AND mitoses <=5/5 mm squared) OR (> 2cm AND <= 5cm AND mitoses > 5/50 hpf) OR (> 10 cm AND mitoses > 5/5 mm squared)",
            id : "0", name : "High risk"
          }, {
            description : "DUODENUM: (> 5cm AND <= 10cm AND mitoses <= 5/50 hpf) OR (< 2cm AND mitoses >5/5 mm squared) OR (> 5cm AND <= 10cm AND mitoses >5/5 mm squared)",
            id : "0", name : "Insufficient data"
          }, {
            description : "JEJUNUM/ILEUM: (<= 2 cm AND mitoses <=5/5 mm squared)",
            id : "0", name : "None"
          }, {
            description : "JEJUNUM/ILEUM: (>2cm AND <= 5cm AND mitoses <=5/5 mm squared)",
            id : "0", name : "Low risk"
          }, {
            description : "JEJUNUM/ILEUM: (> 5cm AND < 10cm AND mitoses <=5/5 mm squared)",
            id : "0", name : "Moderate risk"
          }, {
            description : "JEJUNUM/ILEUM: (> 10cm) OR (mitoses >5/5 mm squared)",
            id : "0", name : "High risk"
          }, {
            description : "RECTUM: (<= 2 cm AND mitoses <=5/5 mm squared)",
            id : "0", name : "None"
          }, {
            description : "RECTUM: (>2cm AND <= 5cm AND mitoses <=5/5 mm squared)",
            id : "0", name : "Low risk"
          }, {
            description : "RECTUM:( > 10cm) OR (< 5cm AND mitoses >5/5 mm squared)",
            id : "0", name : "High risk"
          }, {
            description : "RECTUM: (> 5cm AND < 10cm)",
            id : "0", name : "Insufficient data"
          }, {
            id : "0", name : "Metastatic"
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "include distance/location of closest margin",
        id : "0", name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "0", name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Positive"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Treatment Effect ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "No known therapy"
          }, {
            id : "0", name : "None"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Indeterminate"
          }  ],
          id : "0", name : ""
        } ] 
  
     }, {
        id : "0", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "0", name : ""
          }, {
            description : "pathologic",
            id : "0", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "0", name : "m"
          }, {
            description : "recurrent",
            id : "0", name : "r"
          }, {
            description : "post-treatment",
            id : "0", name : "y"
          }, {
            id : "0", name : "mp"
          }, {
            id : "0", name : "rp"
          }, {
            id : "0", name : "yp"
          }, {
            id : "0", name : "mrp"
          }, {
            id : "0", name : "myp"
          }, {
            id : "0", name : "ryp"
          }, {
            id : "0", name : "mryp"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            id : "0", name : "TX"
          }, {
            description : "<= 2cm",
            id : "0", name : "T1"
          }, {
            description : "> 2 cm AND <= 5cm",
            id : "0", name : "T2"
          }, {
            description : "> 5 cm AND <= 10cm",
            id : "0", name : "T3"
          }, {
            description : ">10 cm",
            id : "0", name : "T4"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "0", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "0", name : "N0"
          }, {
            description : "Regional lymph nodes",
            id : "0", name : "N1"
          } ],
          id : "0", name : "Category (pN)"
        }, {
          group : [ {
            description : "metastases",
            id : "0", name : "M1"
          }, {
            id : "0", name : "M (not applicable)"
          }, {
            id : "0", name : "distant metastasis not applicable"
          } ],
          id : "0", name : ""
        } ]
  
    }, {
        id : "0", name : "KIT(CD117) Immunohistochemistry",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Positive"
          }, {
            id : "0", name : "Negative"
          }, {
            id : "0", name : "Equivocal"
          } ],
          id : "0", name : ""
        } ]
     } , {
        id : "0", name : "DOG1 Immunohistochemistry",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Positive"
          }, {
            id : "0", name : "Negative"
          }, {
            id : "0", name : "Equivocal"
          } ],
          id : "0", name : ""
        } ]
     }]
    }, {
      most_common : false,
      id : "0", name : "Hepatoblastoma",
      optional : true,
      organ_group : "Pediatric",
      properties : [ {
        id : "0", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Right lobectomy"
          }, {
            id : "0", name : "Extended right lobectomy "
          }, {
            id : "0", name : "Medial segmentectomy "
          }, {
            id : "0", name : "Left lateral segmentectomy "
          }, {
            id : "0", name : "Total left lobectomy "
          }, {
            id : "0", name : "Explanted liver "
          }, {
            id : "0", name : "Medial segmentectomy "
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Right lobe"
          }, {
            id : "0", name : "Left lobe "
          }, {
            id : "0", name : "Right and left lobes "
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          description : "each nodule",
          id : "0", name : ""
        } ]
          }, {
        id : "0", name : "Preoperative treatment",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "No known preoperative therapy"
          }, {
            id : "0", name : "Preoperative therapy given"
          }, {
            id : "0", name : "Not specified"
          }, {
            id : "0", name : "Not known"
          }  ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Hepatoblastoma, epithelial type, fetal pattern (mitotically inactive)"
          }, {
            id : "0", name : "Hepatoblastoma, epithelial type, fetal pattern (mitotically active)  "
          }, {
            id : "0", name : "Hepatoblastoma, epithelial type, embryonal pattern  "
          }, {
            id : "0", name : "Hepatoblastoma, epithelial type, pleomorphic (poorly differentiated)  "
          }, {
            id : "0", name : "Hepatoblastoma, epithelial type, macrotrabecular pattern "
          }, {
            id : "0", name : "Hepatoblastoma, epithelial type, small cell undifferentiated pattern "
          }, {
            id : "0", name : "Hepatoblastoma, mixed epithelial and mesenchymal type without teratoid features  "
          }, {
            id : "0", name : "Hepatoblastoma, mixed epithelial and mesenchymal type with teratoid features  "
          } ],
          id : "0", name : ""
        } ]
     
    
      }, {
        description : "include distance",
        id : "0", name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "0", name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Positive"
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "include distance/location of closest extent",
        id : "0", name : "Capsular surface",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "0", name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Positive"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "(includes metastasis to lymph nodes in the following locations: inferior phrenic, distal to hilum, hepatoduodenal ligament, or caval region",
        id : "0", name : "Distant metastases",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Present"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
           }, {
        id : "0", name : "Serum Alpha Fetoprotein (αFP) Level ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "<100 ng/mL "
          }, {
            id : "0", name : "≥100 ng/mL"
          }, {
            id : "0", name : "Not known "
          } ],
          id : "0", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "0", name : "Hepatocellular Carcinoma",
      optional : false,
      organ_group : "Gastrointestinal",
      properties : [  {
        id : "0", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Wedge resection"
          }, {
            id : "0", name : "Partial hepatectomy "
          }, {
            id : "0", name : "Total hepatectomy "
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor focality",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Single focus"
          }, {
            id : "0", name : "Multiple foci "
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Right lobe"
          }, {
            id : "0", name : "Left lobe"
          }, {
            id : "0", name : "Caudate lobe "
          }, {
            id : "0", name : "Quadrate lobe"
          }, {
             description : "specify",
              inputs_required : [ "" ],
            id : "0", name : "Segmental location  "
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Hepatocellular carcinoma"
          }, {
            id : "0", name : "Fibrolamellar hepatocellular carcinoma  "
          }, {
            id : "0", name : "Undifferentiated carcinoma  "
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Grade 1/4, well differentiated"
          }, {
            id : "0", name : "Grade 2/4, moderately differentiated"
          }, {
            id : "0", name : "Grade 3/4, poorly differentiated"
          }, {
            id : "0", name : "Grade 4/4, undifferentiated"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Tumor limited to liver "
          }, {
            id : "0", name : "Tumor involves a major branch of the portal vein"
          }, {
            id : "0", name : "Tumor involves 1 or more hepatic vein(s) "
          }, {
            id : "0", name : "Tumor involves visceral peritoneum"
          }, {
            id : "0", name : "Tumor directly invades gallbladder "
          }, {
            description : "which",
            inputs_required : [ "" ],
            id : "0", name : "Tumor directly invades adjacent organs other than the gallbladder  "
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "include distance/location of closest hepatic parenchymal margin",
        id : "0", name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "0", name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Positive"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Indeterminate"
          }, {
            id : "0", name : "Suspicious"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Present, extensive"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Treatment Effect ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "No known therapy"
          }, {
            id : "0", name : "None"
          }, {
            id : "0", name : "Complete necrosis (no viable tumor)"
          }, {
            id : "0", name : "Incomplete necrosis (viable tumor present)"
          }, {
            id : "0", name : "Indeterminate"
          }  ],
          id : "0", name : ""
        } ] 
  
     }, {
        id : "0", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "0", name : ""
          }, {
            description : "pathologic",
            id : "0", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "0", name : "m"
          }, {
            description : "recurrent",
            id : "0", name : "r"
          }, {
            description : "post-treatment",
            id : "0", name : "y"
          }, {
            id : "0", name : "mp"
          }, {
            id : "0", name : "rp"
          }, {
            id : "0", name : "yp"
          }, {
            id : "0", name : "mrp"
          }, {
            id : "0", name : "myp"
          }, {
            id : "0", name : "ryp"
          }, {
            id : "0", name : "mryp"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            id : "0", name : "TX"
          }, {
            description : "Solitary tumor <= 2cm",
            id : "0", name : "T1a"
          }, {
            description : "Solitary tumor >2cm without vascular invasion ",
            id : "0", name : "T1b"
          }, {
            description : "Solitary tumor > 2cm with vascular invasion OR multiple tumors none more than 5 cm ",
            id : "0", name : "T2"
          }, {
            description : "Multiple tumors, at least one of which is >5 cm",
            id : "0", name : "T3"
          }, {
            description : "Tumor(s) with direct invasion of adjacent organs other than the gallbladder or with perforation of visceral peritoneum ",
            id : "0", name : "T4"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "0", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "0", name : "N0"
          }, {
            description : "Regional lymph node metastases) ",
            id : "0", name : "N1"
          } ],
          id : "0", name : "Category (pN)"
        }, {
          group : [ {
            description : "Distant metastases",
            id : "0", name : "M1"
          }, {
            id : "0", name : "M (not applicable)"
          }, {
            id : "0", name : "distant metastasis not applicable"
          } ],
          id : "0", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "0", name : "Intrahepatic Bile Ducts",
      optional : false,
      organ_group : "Gastrointestinal",
      properties : [  {
        id : "0", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Wedge resection"
          }, {
            id : "0", name : "Partial hepatectomy "
          }, {
            id : "0", name : "Total hepatectomy "
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor focality",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Single focus"
          }, {
            id : "0", name : "Multiple foci "
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Intrahepatic cholangiocarcinoma"
          }, {
            id : "0", name : "Combined hepatocellular and cholangiocarcinoma "
          }, {
            id : "0", name : "Intraductal papillary neoplasm with an associated invasive carcinoma"
          }, {
            id : "0", name : "Mucinous cystic neoplasm with an associated invasive carcinoma"
          }, {
            id : "0", name : "Large cell neuroendocrine carcinoma"
          }, {
            id : "0", name : "Small cell neuroendocrine carcinoma"
          }, {
            id : "0", name : "Neuroendocrine carcinoma (poorly differentiated)"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Grade 1/3, well differentiated"
          }, {
            id : "0", name : "Grade 2/3, moderately differentiated"
          }, {
            id : "0", name : "Grade 3/3, poorly differentiated"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Tumor limited to the intrahepatic bile ducts histologically (carcinoma in situ) "
          }, {
            id : "0", name : "Tumor limited to hepatic parenchyma"
          }, {
            id : "0", name : "Tumor involves visceral peritoneal surface "
          }, {
            id : "0", name : "Tumor invades the adjacent liver parenchyma"
          }, {
            id : "0", name : "Tumor directly invades gallbladder "
          }, {
            description : "which",
            inputs_required : [ "" ],
            id : "0", name : "Tumor directly invades adjacent organs other than the gallbladder  "
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "include distance/location of closest bile duct/hepatic margin",
        id : "0", name : "Margins, invasive tumor",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "0", name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Positive"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Indeterminate"
          }, {
            id : "0", name : "Suspicious"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Present, extensive"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "0", name : ""
          }, {
            description : "pathologic",
            id : "0", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "0", name : "m"
          }, {
            description : "recurrent",
            id : "0", name : "r"
          }, {
            description : "post-treatment",
            id : "0", name : "y"
          }, {
            id : "0", name : "mp"
          }, {
            id : "0", name : "rp"
          }, {
            id : "0", name : "yp"
          }, {
            id : "0", name : "mrp"
          }, {
            id : "0", name : "myp"
          }, {
            id : "0", name : "ryp"
          }, {
            id : "0", name : "mryp"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            id : "0", name : "TX"
          }, {
            description : "Carcinoma in situ",
            id : "0", name : "Tis"
          }, {
            description : "Solitary tumor <=5cm without vascular invasion ",
            id : "0", name : "T1a"
          }, {
            description : "Solitary tumor > 5cm without vascular invasion ",
            id : "0", name : "T1b"
          }, {
            description : "Solitary tumor with vascular invasion OR multiple tumors ",
            id : "0", name : "T2"
          }, {
            description : "Tumor perforating the visceral peritoneum or   ",
            id : "0", name : "T3"
          }, {
            description : "Tumor involving the local extrahepatic structures by direct invasion ",
            id : "0", name : "T4"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "0", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "0", name : "N0"
          }, {
            description : "Regional lymph node metastases) ",
            id : "0", name : "N1"
          } ],
          id : "0", name : "Category (pN)"
        }, {
          group : [ {
            description : "Distant metastases",
            id : "0", name : "M1"
          }, {
            id : "0", name : "M (not applicable)"
          }, {
            id : "0", name : "distant metastasis not applicable"
          } ],
          id : "0", name : ""
        } ]
        }, {
          description: "adenocarcinoma only",
        id : "0", name : "MSI IHC and Interpretation",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Intact nuclear expression of MMR proteins (MLH1, MSH2, MSH6, PMS2): No evidence of deficient mismatch repair (low probability of MSI-H)"
          },{
            id : "0", name : "Loss of nuclear expression of one or more MMR proteins (MLH1, MSH2, MSH6, PMS2): deficient mismatch repair/ high probability of microsatellite instability-high (MSI-H). The presence of MSI-H/deficient mismatch repair may also be an indication for additional testing for Lynch syndrome and genetic counselling."
          }, {
            id : "0", name : "Pending"
          }, {
            id : "0", name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            id : "0", name : "See case "
          }],
          id : "0", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "0", name : "Jejunum/Ileal neuroendocrine tumor",
      optional : false,
      organ_group : "Endocrine",
      properties : [  {
        id : "0", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Segmental resection"
          }, {
            id : "0", name : "Ileocolic resection"
          }],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Jejunum "
          }, {
            id : "0", name : "Ileum"
          }, {
            id : "0", name : "Small intestine, other than duodenum"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor Focality ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Single focus"
          }, {
            id : "0", name : "Multiple foci"
          }, {
            id : "0", name : "Equivocal"
          } ],
          id : "0", name : ""
        } ]
      }, {
         description : "For small cell (high grade NET use small intesting carcinoma protocol not this one) ",  
        id : "0", name : "Type and Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "< 2mitoses/10 hpf and/or Ki67<3% ", 
            id : "0", name : "Grade 1/3, Well differentiated neuroendocrine tumor, low grade (carcinoid)"
          }, {
            description : ">= 2 AND < 20 mitoses/10 hpf and/or Ki67 >=3 AND <20% ",  
            id : "0", name : "Grade 2/3, Well differentiated neuroendocrine tumor, intermediate grade (atypical carcinoid)"
          }, {
             description : "> 20 mitoses/10 hpf and/or Ki67 >20% ",  
            id : "0", name : "Grade 3/3, Well differentiated neuroendocrine tumor"
          } ],
          id : "0", name : ""
        } ]
      }, {
           description : "mitoses/ 2 mm squared NOT 10 hpf, approximately count 42 hpf and divide by 5", 
        id : "0", name : "Mitotic rate",
       optional_state  : "required", "options" : [ {
          group : [ {
            
            id : "0", name : "Less than 2/2mm squared"
          }, {
          
            id : "0", name : "at least 2 and less than 20 /2 mm squared"
          }, {
            
            id : "0", name : "More than 20 per 2 mm squared"
          } ],
          id : "0", name : ""
        } ]  
        
      }, {
        id : "0", name : "Ki67 (Mib1)",
       optional_state  : "required", "options" : [ {
          group : [ {
            
            id : "0", name : "Less than 3%"
          }, {
          
            id : "0", name : "at least 3% and less than 20%"
          }, {
            
            id : "0", name : "More than 20%"
          } ],
          id : "0", name : ""
        } ]  
        
      }, {
        id : "0", name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "No evidence of primary tumor"
          }, {
           
            id : "0", name : "Invades lamina propria"
          }, {
           
            id : "0", name : "Invades submucosa"
          }, {
            
            id : "0", name : "Invades muscularis propria"
          }, {
            
            id : "0", name : "Tumor invades subserosal tissue without involvement of visceral peritoneum"
          }, {
            
            id : "0", name : "Tumor penetrates serosa (visceral peritoneum) "
          }, {
            description : "specify",
            inputs_required : [ "" ],
            id : "0", name : "Tumor directly invades adjacent structures "
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "include distance/location of closest proximal/distal/radial margin",
        id : "0", name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "0", name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Positive"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Indeterminate"
          }, {
            id : "0", name : "Suspicious"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Present, extensive"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Large Mesenteric Masses (>2 cm) ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Indeterminate"
          }, {
            id : "0", name : "Present"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "0", name : ""
          }, {
            description : "pathologic",
            id : "0", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "0", name : "m"
          }, {
            description : "recurrent",
            id : "0", name : "r"
          }, {
            description : "post-treatment",
            id : "0", name : "y"
          }, {
            id : "0", name : "mp"
          }, {
            id : "0", name : "rp"
          }, {
            id : "0", name : "yp"
          }, {
            id : "0", name : "mrp"
          }, {
            id : "0", name : "myp"
          }, {
            id : "0", name : "ryp"
          }, {
            id : "0", name : "mryp"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            id : "0", name : "TX"
          }, {
            description : "No tumor",
            id : "0", name : "T0"
          }, {
            description : "Tumor invades lamina propria or submucosa and size 1 cm or less (small intestinal tumors) ",
            id : "0", name : "T1"
          }, {
            description : "Tumor invades muscularis propria or tumor size >1 cm (small intestinal tumors)",
            id : "0", name : "T2"
          }, {
            description : "Tumor invades through the muscularis propria into subserosal tissue without penetration of overlying serosa ",
            id : "0", name : "T3"
          }, {
            description : "Tumor penetrates visceral peritoneum (serosa) or invades other organs ",
            id : "0", name : "T4"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "0", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "0", name : "N0"
          }, {
            description : "Metastases to < 12 regional lymph nodes",
            id : "0", name : "N1"
          }, {
            description : "Metastases to >= 12 regional lymph nodes OR mesenteric mass >2cm",
            id : "0", name : "N2"
          } ],
          id : "0", name : "Category (pN)"
        }, {
          group : [ {
            description : "Distant metastases liver only",
            id : "0", name : "M1a"
          }, {
              description : "Distant metastases other than liver",
            id : "0", name : "M1b"
          }, {
              description : "Distant metastases liver and other",
            id : "0", name : "M1c"
          }, {
            id : "0", name : "M (not applicable)"
          }, {
            id : "0", name : "distant metastasis not applicable"
          } ],
          id : "0", name : ""
        } ]
      } ]  
     }, {
      most_common : false,
      id : "0", name : "Kidney",
      optional : false,
      organ_group : "Genitourinary",
      properties : [ {
        id : "0", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Right partial nephrectomy"
          }, {
            id : "0", name : "Right radical nephrectomy"
          }, {
            id : "0", name : "Right total nephrectomy"
          } , {
            id : "0", name : "Right nephroureterectomy"
          }, {
            id : "0", name : "Left partial nephrectomy"
          }, {
            id : "0", name : "Left radical nephrectomy"
          }, {
            id : "0", name : "Left total nephrectomy"
          } , {
            id : "0", name : "Left nephroureterectomy"
          }],
          id : "0", name : ""
        } ]
    
      }, {
        id : "0", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor focality",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Single focus"
          }, {
            id : "0", name : "Multiple foci"
          } ],
          id : "0", name : ""
        } ]
    
      }, {
        id : "0", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
                   description : "Pax8+, CK7-, CD117-, CD10+, GATA3-",
            id : "0", name : "Clear cell renal cell carcinoma"
          }, {
               description : "Pax8+, CK7+",
            id : "0", name : "Multilocular clear cell renal cell carcinoma"
          }, {
               description : "Pax8+, CK7+, GATA3-",
            id : "0", name : "Papillary renal cell carcinoma"
          }, {
               description : "Pax8+, CK7+, GATA3-",
            id : "0", name : "Papillary renal cell carcinoma, Type 1"
          }, {
               description : "Pax8+, CK7 variable, GATA3-",
            id : "0", name : "Papillary renal cell carcinoma, Type 2"
          }, {
             description : "Pax8+, CK7 +, GATA3+",
            id : "0", name : "Oncocytic papillary renal cell carcinoma"
          }, {
             description : "Hales+, CK7+, CK20+, PAX8+, CD117+, CD10-/focal+, oncocytoma: Hales-, CK7 -/focal+, CK20 -/focal+, PAX8-, CD117+, CD10-/focal+",
            id : "0", name : "Chromophobe renal cell carcinoma"
          }, {
             description : "Pax8+, CK7+, INI+, OCT3/4-, FH+, 2SC-",
            id : "0", name : "Collecting duct carcinoma"
          }, {
            description : "Pax8+, CK7+, INI-, OCT3/4+, FH+,2SC-",
            id : "0", name : "Renal medullary carcinoma"
          }, {
               description : "TFE3 +, Ker -/focal+, EMA -/focal+, Pax8 variable",
            id : "0", name : "MiT family translocation renal cell carcinoma"
          }, {
               description : "TFE3 +, Ker -/focal+, EMA -/focal+, Pax8 variable",
            id : "0", name : "Xp11 translocation renal cell carcinoma"
          }, {
               description : "TFE3 +, Ker -/focal+, EMA -/focal+, Pax8 variable",
            id : "0", name : "t(6;11) renal cell carcinoma"
          }, {
             description : "CK7+, ? Hales +",
            id : "0", name : "TCEB1-mutated cell carcinoma"
          }, {
               description : "Pax8+, CK7+",
            id : "0", name : "Mucinous tubular and spindle cell carcinoma"
          }, {
            id : "0", name : "Tubulocystic renal cell carcinoma "
          }, {
            id : "0", name : "Acquired cystic disease associated renal cell carcinoma"
          }, {
               description : "Pax8+, CK7+, GATA3+",
            id : "0", name : "Clear cell papillary"
          }, {
             description : "Fumarate -, 2-succinocysteine (2SC) + CMV like nucleoli",
            id : "0", name : "Hereditary leiomyomatosis and renal cell carcinoma-associated renal cell carcinoma"
          }, {
               description : "SDH -",
            id : "0", name : "Succinate dehydrogenase (SDH) deficient renal carcinoma"
          }, {
            id : "0", name : "Renal cell carcinoma, unclassified"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Sarcomatoid features",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Present"
          }, {  
            id : "0", name : "Equivocal"
          } ],
          id : "0", name : ""
        } ]
        }, {
        id : "0", name : "Rhabdoid features",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Present"
          }, {  
            id : "0", name : "Equivocal"
          } ],
          id : "0", name : ""
        } ] 
         
         }, {
        description : "Clear cell RCC only",
        id : "0", name : "Geographic necrosis",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Present"
          }, {  
            id : "0", name : "Equivocal"
          }, {  
             description : "non clear cell RCCs",
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]    
      }, {
        id : "0", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
             description : "Nucleoli absent or inconspicuous and basophilic at 400x magnification",
            id : "0", name : "WHO/ISUP grade 1/4"
          }, {
             description : "Nucleoli conspicuous and eosinophilic at 400x magnification, visible but not prominent at 100x magnification",
            id : "0", name : "WHO/ISUP grade 2/4"
          }, {
             description : "Nucleoli conspicuous and eosinophilic at 100x magnification",
            id : "0", name : "WHO/ISUP grade 3/4"
          }, {
             description : "Extreme nuclear pleomorphism and/or multi-nuclear giant cells and/or rhabdoid and/or sarcomatoid differentiation",
            id : "0", name : "WHO/ISUP grade 4/4"
          }, {
             description : "Chromophobe RCC",
            id : "0", name : "Not applicable"
          }],
          id : "0", name : ""
         } ]
      }, {
        id : "0", name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Limited to kidney"
          }, {
            id : "0", name : "Invades perinephric tissue"
          }, {
            id : "0", name : "Invades renal sinus"
          }, {
            id : "0", name : "Invades beyond Gerota's fascia"
          }, {
            id : "0", name : "Invades major veins"
          }, {
            id : "0", name : "Invades pelvicaliceal system"
          }, {
            id : "0", name : "Direct extension into adrenal (T4)"
          }, {
            id : "0", name : "Metastasis to adrenal (M1)"
          }, {
             description : "specify",
              inputs_required : [ "" ],
            id : "0", name : "Invades other organs"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Free"
          }, {
            description : "location parenchymal, capsular (partial), perinephric fat, renal sinus, Gerota, renal vein, ureter",
            inputs_required : [ "" ],
            id : "0", name : "Positive"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "0", name : ""
          }, {
            description : "pathologic",
            id : "0", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "0", name : "m"
          }, {
            description : "recurrent",
            id : "0", name : "r"
          }, {
            description : "post-treatment",
            id : "0", name : "y"
          }, {
            id : "0", name : "mp"
          }, {
            id : "0", name : "rp"
          }, {
            id : "0", name : "yp"
          }, {
            id : "0", name : "mrp"
          }, {
            id : "0", name : "myp"
          }, {
            id : "0", name : "ryp"
          }, {
            id : "0", name : "mryp"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            id : "0", name : "TX"
          }, {
            description : "<= 4cm, limited to kidney",
            id : "0", name : "T1a"
          }, {
            description : "> 4cm AND <=7cm, limited to kidney",
            id : "0", name : "T1b"
          }, {
            description : "> 7 cm AND <= 10cm  limited to kidney",
            id : "0", name : "T2a"
          }, {
            description : "> 10cm  limited to kidney",
            id : "0", name : "T2b"
          }, {
            description : "perinephric invasion OR renal sinus invasion OR renal vein or its segmental [muscle containing] branches invasion",
            id : "0", name : "T3a"
          }, {
            description : "Invades vena cava below diaphragm",
            id : "0", name : "T3b"
          }, {
            description : "Invades vena cava above diaphragm",
            id : "0", name : "T3c"
          }, {
            description : "Invades beyond Gerota's fascia or into adrenal",
            id : "0", name : "T4"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "0", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "0", name : "N0"
          }, {
            description : "Regional lymph nodes",
            id : "0", name : "N1"
          } ],
          id : "0", name : "Category (pN)"
        }, {
          group : [ {
            description : "metastases",
            id : "0", name : "M1"
          }, {
            id : "0", name : "M (not applicable)"
          }, {
            id : "0", name : "distant metastasis not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
         description : "in non-neoplastic kidney, including glomerular, tubulointerstitial and vascular disease",
        id : "0", name : "Additional findings",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Nonspecific changes"         
          }, {
            id : "0", name : "Focal nonspecific chronic inflammation"         
          }, {
            id : "0", name : "Focal glomerulosclerosis"         
          }, {
            id : "0", name : "Interstitial nephritis"
          }, {
            id : "0", name : "Chronic pyelonephritis"
          }, {
            id : "0", name : "Acute pyelonephritis"
          }, {
            id : "0", name : "End stage kidney disease"
          } ],
          id : "0", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "0", name : "Larynx",
      optional : false,
      organ_group : "Head and Neck",
      properties : [ {
        id : "0", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Excision"
          }, {
            id : "0", name : "Endolaryngeal excision"
          }, {
            id : "0", name : "Transoral laser excision (glottis)"
          }, {
            id : "0", name : "Supraglottic laryngectomy"
          }, {
            id : "0", name : "Supracricoid laryngectomy"
          }, {description : "specify type",
            inputs_required : [ "" ],
            id : "0", name : "Vertical hemilaryngectomy "
          }, {description : "specify type",
            inputs_required : [ "" ],
            id : "0", name : "Partial laryngectomy "
          }, {
            id : "0", name : "Total laryngectomy"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Right supraglottis"
          }, {
            id : "0", name : "Right glottis"
          }, {
            id : "0", name : "Right subglottis"
          }, {
            id : "0", name : "Left supraglottis"
          }, {
            id : "0", name : "Left glottis"
          }, {
            id : "0", name : "Left subglottis"
          }, {
            id : "0", name : "Midline supraglottis"
          }, {
            id : "0", name : "Midline glottis"
          }, {
            id : "0", name : "Midline subglottis"
          }, {
            id : "0", name : "Bilateral supraglottis"
          }, {
            id : "0", name : "Bilateral glottis"
          }, {
            id : "0", name : "Bilateral subglottis"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Transglottic extension",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor focality",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Single focus"
          }, {
            id : "0", name : "Multiple foci"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Squamous cell carcinoma"
          }, {
            id : "0", name : "Squamous cell carcinoma, conventional (keratinizing)"
          }, {
            id : "0", name : "Squamous cell carcinoma, nonkeratinizing"
          }, {
            id : "0", name : "Acantholytic squamous cell carcinoma"
          }, {
            id : "0", name : "Adenosquamous carcinoma"
          }, {
            id : "0", name : "Basaloid squamous cell carcinoma"
          }, {
            id : "0", name : "Papillary squamous cell carcinoma"
          }, {
            id : "0", name : "Spindle cell squamous cell carcinoma"
          }, {
            id : "0", name : "Verrucous squamous cell carcinoma"
          }, {
            id : "0", name : "Lymphoepithelial carcinoma  "
          }, {
            id : "0", name : "Mucoepidermoid carcinoma, low grade"
          }, {
            id : "0", name : "Mucoepidermoid carcinoma, intermediate grade"
          }, {
            id : "0", name : "Mucoepidermoid carcinoma, high grade"
          }, {
            id : "0", name : "Adenoid cystic carcinoma"
          }, {
            id : "0", name : "Adenoid cystic carcinoma, tubular pattern"
          }, {
            id : "0", name : "Adenoid cystic carcinoma, cribriform pattern"
          }, {
            id : "0", name : "Adenoid cystic carcinoma, solid pattern"
          }, {
            id : "0", name : "Adenocarcinoma, not otherwise specified, low grade"
          }, {
            id : "0", name : "Adenocarcinoma, not otherwise specified, intermediate grade"
          }, {
            id : "0", name : "Adenocarcinoma, not otherwise specified, high grade"
          }, {
            id : "0", name : "Typical carcinoid tumor (well differentiated neuroendocrine carcinoma)"
          }, {
            id : "0", name : "Atypical carcinoid tumor (moderately differentiated neuroendocrine carcinoma)"
          }, {
            id : "0", name : "Large cell neuroendocrine carcinoma"
          }, {
            id : "0", name : "Small cell carcinoma"
          }, {
            id : "0", name : "Mucosal melanoma"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Grade 1/3, Well differentiated"
          }, {
            id : "0", name : "Grade 2/3, Moderately differentiated"
          }, {
            id : "0", name : "Grade 3/3, Poorly differentiated"
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "include distance/location of closest margin",
        id : "0", name : "Margins, invasive tumor",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "0", name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Positive"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "include distance/location of closest margin",
        id : "0", name : "Margins, dysplasia/CIS",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "0", name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Positive"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Indeterminate"
          }, {
            id : "0", name : "Suspicious"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Present, extensive"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Perineural invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Equivocal"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Positive node laterality",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Not applicable"
          }, {
            id : "0", name : "Right"
          }, {
            id : "0", name : "Left"
          }, {
            id : "0", name : "Bilateral"
          }, {
            id : "0", name : "Indeterminate"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Extranodal extension",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Not applicable"
          }, {
            id : "0", name : "None"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Equivocal"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "0", name : ""
          }, {
            description : "pathologic",
            id : "0", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "0", name : "m"
          }, {
            description : "recurrent",
            id : "0", name : "r"
          }, {
            description : "post-treatment",
            id : "0", name : "y"
          }, {
            id : "0", name : "mp"
          }, {
            id : "0", name : "rp"
          }, {
            id : "0", name : "yp"
          }, {
            id : "0", name : "mrp"
          }, {
            id : "0", name : "myp"
          }, {
            id : "0", name : "ryp"
          }, {
            id : "0", name : "mryp"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            id : "0", name : "TX"
          }, {
            description : "SUPRAGLOTTIS, = 1 site, mobile vocal cords ",
            id : "0", name : "T1"
          }, {
            description : "SUPRAGLOTTIS, > 1 site, mobile vocal cords ",
            id : "0", name : "T2"
          }, {
            description : "SUPRAGLOTTIS, vocal cords fixed OR invades post cricoid, preepiglotic paraglottic or thyroid cartilage",
            id : "0", name : "T3"
          }, {
            description : "SUPRAGLOTTIS, invades through thyroid cartilage or beyond larynx",
            id : "0", name : "T4a"
          }, {
            description : "SUPRAGLOTTIS, invades prevertebral space, carotid artery or mediastinum",
            id : "0", name : "T4b"
          }, {
            description : "GLOTTIS, = 1  vocal cords ",
            id : "0", name : "T1a"
          }, {
            description : "GLOTTIS, = both  vocal cords ",
            id : "0", name : "T1b"
          }, {
            description : "GLOTTIS, invades supraglottic OR subglotis AND OR impaired vocal cords ",
            id : "0", name : "T2"
          }, {
            description : "GLOTTIS, vocal cords fixed OR invades post cricoid, preepiglotic paraglottic or thyroid cartilage",
            id : "0", name : "T3"
          }, {
            description : "GLOTTIS, invades through thyroid cartilage or beyond larynx",
            id : "0", name : "T4a"
          }, {
            description : "GLOTTIS, invades prevertebral space, carotid artery or mediastinum",
            id : "0", name : "T4b"
          }, {
            description : "SUBGLOTTIS, limited to subglottis ",
            id : "0", name : "T1a"
          }, {
            description : "SUBGLOTTIS, invades vocal cords ",
            id : "0", name : "T2"
          }, {
            description : "SUBGLOTTIS, vocal cords fixed ",
            id : "0", name : "T3"
          }, {
            description : "SUBGLOTTIS, invades through thyroid cartilage or beyond larynx",
            id : "0", name : "T4a"
          }, {
            description : "SUBGLOTTIS, invades prevertebral space, carotid artery or mediastinum",
            id : "0", name : "T4b"
          }, {
            description : "MELANOMA, limited to the mucosa and immediately underlying soft tissue ",
            id : "0", name : "T3"
          }, {
            description : "MELANOMA, Tumor involving deep soft tissue, cartilage, bone, or overlying skin",
            id : "0", name : "T4a"
          }, {
            description : "MELANOMA, Tumor involving brain, dura, skull base, lower cranial nerves (IX, X, XI, XII), masticator space, carotid artery, prevertebral space, or mediastinal structures",
            id : "0", name : "T4b"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "0", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "0", name : "N0"
          }, {
            description : "single ipsilateral lymph node <= 3cm AND no extranodal extension OR MELANOMA regional metastases",
            id : "0", name : "N1"
          }, {
            description : "(single ipsilateral lymph node > 3cm AND <= 6cm AND no extranodal extension) OR (bilateral or contralateral lymph nodes, <= 6cm  AND no extranodal extension)",
            id : "0", name : "N2a"
          }, {
            description : "multiple ipsilateral lymph node AND <= 6cm AND no extranodal extension",
            id : "0", name : "N2b"
          }, {
            description : "bilateal or contralateral lymph node AND <= 6cm AND no extranodal extension",
            id : "0", name : "N2c"
          }, {
            description : "> 6cm AND no extranodal extension",
            id : "0", name : "N3a"
          }, {
            description : "(metastases single ipsilateral lymph node >3cm AND extranodal extension) OR ( multiple ipsilateral, contralateral or bilateral nodes AND no extranodal extension) OR (single contralateral node <=3cm AND extranodal extension)",
            id : "0", name : "N3b"
          } ],
          id : "0", name : "Category (pN)"
        }, {
          group : [ {
            description : "metastases",
            id : "0", name : "M1"
          }, {
            id : "0", name : "M (not applicable)"
          }, {
            id : "0", name : "distant metastasis not applicable"
          } ],
          id : "0", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "0", name : "Lip Oral Cavity",
      optional : false,
      organ_group : "Head and Neck",
      properties : [ {
        id : "0", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Excisional biopsy"
          }, {
            id : "0", name : "Resection"
          }, {
            id : "0", name : "Resection and neck dissection "
          } , {
            id : "0", name : "Glossectomy"
          }, {
            id : "0", name : "Mandibulectomy "
          }, {
            id : "0", name : "Maxillectomy"
          }, {
            id : "0", name : "Palatectomy"
          }],
          id : "0", name : ""
        } ]
      },{
        id : "0", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Right lip"
          }, {
            id : "0", name : "Right oral"
          }, {
            id : "0", name : "Left lip"
          }, {
            id : "0", name : "Left oral"
          }, {
            id : "0", name : "Midline lip"
          }, {
            id : "0", name : "Midline oral"
          }  ],
          id : "0", name : ""
        } ]
     
     
     
      }, {
        id : "0", name : "Tumor focality",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Single focus"
          }, {
            id : "0", name : "Multiple foci"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "0", name : ""
        } ]
        }, {
        id : "0", name : "Depth of invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Indeterminate"
          } ],
          id : "0", name : ""
        } ] 
      }, {
        id : "0", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Squamous cell carcinoma"
          }, {
            id : "0", name : "Acantholytic squamous cell carcinoma"
          }, {
            id : "0", name : "Adenosquamous carcinoma"
          }, {
            id : "0", name : "Basaloid squamous cell carcinoma"
          }, {
            id : "0", name : "Carcinoma cuniculatum"
          }, {
            id : "0", name : "Papillary squamous cell carcinoma"
          }, {
            id : "0", name : "Spindle cell squamous cell carcinoma"
          }, {
            id : "0", name : "Verrucous carcinoma"
          }, {
            id : "0", name : "Lymphoepithelial carcinoma (nonnasopharyngeal)"
          }, {
            id : "0", name : "Mucoepidermoid carcinoma"
          }, {
            id : "0", name : "Adenoid cystic carcinoma"
          }, {
            id : "0", name : "Polymorphous low-grade adenocarcinoma"
          }, {
            id : "0", name : "Salivary duct carcinoma"
          }, {
            id : "0", name : "Carcinoma ex pleomorphic adenoma (malignant mixed tumor), Intracapsular (noninvasive)"
          }, {
            id : "0", name : "Carcinoma ex pleomorphic adenoma (malignant mixed tumor), Minimally invasive "
          }, {
            id : "0", name : "Carcinoma ex pleomorphic adenoma (malignant mixed tumor), Invasive"
          }, {
            id : "0", name : "Acinic cell carcinoma"
          }, {
            id : "0", name : "Adenocarcinoma, not otherwise specified"
          }, {
            id : "0", name : "Carcinoma, type cannot be determined"
          }, {
            id : "0", name : "Carcinosarcoma"
          }, {
            id : "0", name : "(Hyalinizing) clear cell carcinoma"
          }, {
            id : "0", name : "Cystadenocarcinoma"
          }, {
            id : "0", name : "Epithelial-myoepithelial carcinoma"
          }, {
            id : "0", name : "Mucinous adenocarcinoma (colloid carcinoma)"
          }, {
            id : "0", name : "Myoepithelial carcinoma (malignant myoepithelioma)"
          }, {
            id : "0", name : "Oncocytic carcinoma"
          }, {
            id : "0", name : "Typical carcinoid tumor (well differentiated neuroendocrine carcinoma)"
          }, {
            id : "0", name : "Atypical carcinoid tumor (moderately differentiated neuroendocrine carcinoma)"
          }, {
            id : "0", name : "Large cell carcinoma, neuroendocrine type (poorly differentiated neuroendocrine carcinoma)"
          }, {
            id : "0", name : "Small cell carcinoma, neuroendocrine type (poorly differentiated neuroendocrine carcinoma)"
          }, {
            id : "0", name : "Combined (or composite) small cell carcinoma, neuroendocrine type with (specify type)"
          }, {
            id : "0", name : "Mucosal melanoma "
          }  ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Grade 1/3, Well differentiated"
          }, {
            id : "0", name : "Grade 2/3, Moderately differentiated"
          }, {
            id : "0", name : "Grade 3/3, Poorly differentiated"
          } ],
          id : "0", name : ""
        } ]
       }, {
        description : "include distance/location of closest margin",
        id : "0", name : "Margins, main part, invasive tumor",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "0", name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Positive"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
     }, {
        description : "include distance/location of closest margin",
        id : "0", name : "Margins, main part, dysplasia/CIS",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "0", name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Positive"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
   }, {
        description : " only if submitted separately,  include location of closest margin",
        id : "0", name : "Margins, separate part(s)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Positive"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Indeterminate"
          }, {
            id : "0", name : "Suspicious"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Present, extensive"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Perineural invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Equivocal"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Positive node laterality",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Not applicable"
          }, {
            id : "0", name : "Right"
          }, {
            id : "0", name : "Left"
          }, {
            id : "0", name : "Bilateral"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Extranodal extension",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Not applicable"
          }, {
            id : "0", name : "None"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Equivocal"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "0", name : ""
          }, {
            description : "pathologic",
            id : "0", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "0", name : "m"
          }, {
            description : "recurrent",
            id : "0", name : "r"
          }, {
            description : "post-treatment",
            id : "0", name : "y"
          }, {
            id : "0", name : "mp"
          }, {
            id : "0", name : "rp"
          }, {
            id : "0", name : "yp"
          }, {
            id : "0", name : "mrp"
          }, {
            id : "0", name : "myp"
          }, {
            id : "0", name : "ryp"
          }, {
            id : "0", name : "mryp"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            id : "0", name : "TX"
          }, {
            description : "CARCINOMA in situ ",
            id : "0", name : "Tis"
          }, {
            description : "CARCINOMA <= 2 cm AND <= 5mm deep ",
            id : "0", name : "T1"
          }, {
            description : "CARCINOMA (<= 2cm AND >5mm deep AND <=10 mm deep) OR  (>2 cm AND <= 4cm and <= 10 mm deep)",
            id : "0", name : "T2"
          }, {
            description : "CARCINOMA > 4cm OR >10 mm deep",
            id : "0", name : "T3"
          }, {
            description : "CARCINOMA Lip: Tumor invades through cortical bone, inferior alveolar nerve, floor of mouth, or skin of face, ie, chin or nose.  Oral cavity: Tumor invades adjacent structures only (eg, through cortical bone [mandible, maxilla], into deep [extrinsic] muscle of tongue [genioglossus, hyoglossus, palatoglossus, and styloglossus], maxillary sinus, skin of face)",
            id : "0", name : "T4a"
          }, {
            description : "CARCINOMA Tumor invades masticator space, pterygoid plates, or skull base, and/or encases internal carotid artery",
            id : "0", name : "T4b"
          }, {
            description : "MELANOMA Mucosal disease",
            id : "0", name : "T3"
          }, {
            description : "MELANOMA Tumor involving deep soft tissue, cartilage, bone, or overlying skin",
            id : "0", name : "T4a"
          }, {
            description : "MELANOMA Tumor involving brain, dura, skull base, lower cranial nerves (IX, X, XI, XII), masticator space, carotid artery, prevertebral space, or mediastinal structures",
            id : "0", name : "T4b"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "0", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "0", name : "N0"
          }, {
            description : "CARCINOMA single ipsilateral lymph node <= 3cm AND no extranodal extension",
            id : "0", name : "N1"
          }, {
            description : "CARCINOMA single ipsilateral or contralateral lymph node either (<3cm with extranodal extension) OR (> 3cm AND <= 6cm and no extranodal extension)",
            id : "0", name : "N2a"
          }, {
            description : "CARCINOMA multiple ipsilateral lymph node AND <= 6cm",
            id : "0", name : "N2b"
          }, {
            description : "CARCINOMA contralateral lymph node AND <= 6cm",
            id : "0", name : "N2c"
          }, {
            description : "CARCINOMA > 6cm no extranodal extension",
            id : "0", name : "N3a"
          }, {
            description : "CARCINOMA (>3cm AND extranodal extension) OR (multiple nodes with extranodal extension at least in one) OR (single contralateral node <=3cm AND extranodal extension)",
            id : "0", name : "N3b"
          }, {
            description : "MELANOMA No regional lymph node metastasis",
            id : "0", name : "N0"
          }, {
            description : "MELANOMA regional metastases",
            id : "0", name : "N1"
          } ],
          id : "0", name : "Category (pN)"
        }, {
          group : [ {
            description : "metastases",
            id : "0", name : "M1"
          }, {
            id : "0", name : "M (not applicable)"
          }, {
            id : "0", name : "distant metastasis not applicable"
          } ],
          id : "0", name : ""
        } ]
      } ]
    }, {
      most_common : true,
      id : "0", name : "Lung",
      optional : false,
      organ_group : "Thorax",
      properties : [  {
        id : "0", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Lobectomy"
          }, {
            id : "0", name : "Sleeve lobectomy"
          }, {
            id : "0", name : "Segmentectomy"
          }, {
            id : "0", name : "Wedge resection"
          }, {
            id : "0", name : "Bilobectomy"
          }, {
            id : "0", name : "Pneumonectomy"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Right upper lobe"
          }, {
            id : "0", name : "Right middle lobe"
          }, {
            id : "0", name : "Right lower lobe"
          }, {
            id : "0", name : "Left upper lobe"
          }, {
            id : "0", name : "Left lower lobe"
          }, {
            id : "0", name : "Bronchus, main"
          }, {
            id : "0", name : "Bronchus, lobar "
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor size, total",
       optional_state  : "required", "options" : [ {
          id : "0", name : ""
        } ]
      }, { description : "for ACA with lepidic component",
        id : "0", name : "Tumor size, invasive component",
       optional_state  : "required", "options" : [ {
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor focality",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Single focus"
          }, {
            id : "0", name : "Multiple foci, same lobe"
          }, {
            id : "0", name : "Multiple foci, different lobes"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Adenocarcinoma, invasive"
          }, {
            id : "0", name : "Adenocarcinoma in situ (AIS), nonmucinous"
          }, {
            id : "0", name : "Adenocarcinoma in situ (AIS), mucinous"
          }, {
            id : "0", name : "Minimally invasive adenocarcinoma, nonmucinous"
          }, {
            id : "0", name : "Minimally invasive adenocarcinoma, mucinous"
          }, {
            id : "0", name : "Invasive adenocarcinoma, lepidic predominant"
          }, {
            id : "0", name : "Invasive adenocarcinoma, acinar predominant"
          }, {
            id : "0", name : "Invasive adenocarcinoma, papillary predominant"
          }, {
            id : "0", name : "Invasive adenocarcinoma, micropapillary predominant"
          } , {
            id : "0", name : "Invasive adenocarcinoma, solid predominant"
          }, {
            id : "0", name : "Invasive adenocarcinoma, mucinous predominant"
          }, {
            id : "0", name : "Mixed invasive mucinous and nonmucinous adenocarcinoma"
          }, {
            id : "0", name : "Colloid adenocarcinoma"
          }, {
            id : "0", name : "Fetal adenocarcinoma"
          }, {
            id : "0", name : "Enteric adenocarcinoma"
          }, {
            id : "0", name : "Squamous cell carcinoma in situ (SCIS)"
          }, {
            id : "0", name : "Invasive squamous cell carcinoma"
          }, {
            id : "0", name : "Invasive squamous cell carcinoma, keratinizing "
          }, {
            id : "0", name : "Invasive squamous cell carcinoma, non-keratinizing"
          }, {
            id : "0", name : "Invasive squamous cell carcinoma, basaloid "
          }, {
            id : "0", name : "Small cell carcinoma"
          }, {
            id : "0", name : "Large cell neuroendocrine carcinoma"
          }, {
            id : "0", name : "Typical carcinoid"
          }, {
            id : "0", name : "Atypical carcinoid"
          }, {
            id : "0", name : "Large cell carcinoma"
          }, {
            id : "0", name : "Adenosquamous carcinoma"
          }, {
            id : "0", name : "Pleomorphic carcinoma"
          }, {
            id : "0", name : "Spindle cell carcinoma"
          }, {
            id : "0", name : "Giant cell carcinoma"
          }, {
            id : "0", name : "Carcinosarcoma"
          }, {
            id : "0", name : "Pulmonary blastoma"
          }, {
            id : "0", name : "Lymphoepithelioma-like carcinoma"
          }, {
            id : "0", name : "NUT carcinoma"
          }, {
            id : "0", name : "Mucoepidermoid carcinoma"
          }, {
            id : "0", name : "Adenoid cystic carcinoma"
          }, {
            id : "0", name : "Epithelial-myoepithelial carcinoma"
          }, {
            id : "0", name : "Non-small cell carcinoma"
          }],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Visceral pleura invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Equivocal"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Other tissue(s) involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "No adjacent structures present"
          }, {
            id : "0", name : "Invades main bronchus"
          }, {
            id : "0", name : "Invades hilar soft tissue"
          }, {
            id : "0", name : "Invades parietal pleura"
          }, {
            id : "0", name : "Invades chest wall"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Present"
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "include distance/location of closest margin bronchial, vascular parenchymal",
        id : "0", name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "0", name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Positive"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Treatment effect, primary site",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Not applicable"
          }, {
            id : "0", name : "Greater than 10% residual tumor"
          }, {
            id : "0", name : "Less than or equal to 10% residual tumor"
          }, {
            id : "0", name : "Not known"
          }  ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Indeterminate"
          }, {
            id : "0", name : "Suspicious"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Present, extensive"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, sites sampled",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Peribronchial"
          }, {
            id : "0", name : "None"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, sites involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Peribronchial"
          }, {
            id : "0", name : "None"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "Mediastinal (N2) nodes only, NOT N1 or peribronchial nodes (ie ipsilateral station 2-9 (upper paratracheal, prevascular retrovascular, lower paratracheal, subaortic, paraaortic,subcarinal, paraesophageal, pulmonary ligament) nodes",
        id : "0", name : "Extranodal extension",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Indeterminate"
          }, {
            id : "0", name : "None"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "0", name : ""
          }, {
            description : "pathologic",
            id : "0", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "0", name : "m"
          }, {
            description : "recurrent",
            id : "0", name : "r"
          }, {
            description : "post-treatment",
            id : "0", name : "y"
          }, {
            id : "0", name : "mp"
          }, {
            id : "0", name : "rp"
          }, {
            id : "0", name : "yp"
          }, {
            id : "0", name : "mrp"
          }, {
            id : "0", name : "myp"
          }, {
            id : "0", name : "ryp"
          }, {
            id : "0", name : "mryp"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            id : "0", name : "TX"
          }, {
            description : "in situ",
            id : "0", name : "Tis"
          }, {
            description : "minimally invasive, <= 3cm, predominantly lepidic pattern and <= 5mm invasion",
            id : "0", name : "T1mi"
          }, {
            description : "<=1cm AND (no involvement of main bronchus, no visceral pleural invasion, no atelectasis or obstructuve pneumonitis extending to hilum) ",
            id : "0", name : "T1a"
          }, {
            description : "> 1cm AND <= 2cm  AND (no involvement of main bronchus, no visceral pleural invasion, no atelectasis or obstructuve pneumonitis extending to hilum)",
            id : "0", name : "T1b"
          }, {
            description : ">2 cm AND <=3cm AND (no involvement of main bronchus, no visceral pleural invasion, no atelectasis or obstructuve pneumonitis extending to hilum)",
            id : "0", name : "T1c"
          }, {
            description : ">3cm AND <= 4 cm  OR (< 3cm AND (involvement of main bronchus, or visceral pleural invasion, or atelectasis or obstructuve pneumonitis extending to hilum))",
            id : "0", name : "T2a"
          }, {
            description : "> 4cm <= 5cm",
            id : "0", name : "T2b"
          }, {
            description : "> 5cm AND <= 7cm OR invades parietal pleura, chest wall, phrenic nerve parietal pericardium or separate tumor nodule in the same lobe as the primary ",
            id : "0", name : "T3"
          }, {
            description : "> 7cm  OR invades diaphragm, mediastinum, heart, great vessels, trachea, recurrent laryngeal nerve, esophagus, vertebral body, carina, or separate tumor nodule in an ipsilateral lobe different from that of the primary",
            id : "0", name : "T4"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "0", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "0", name : "N0"
          }, {
            description : "ipsilateral intrapumonary, peribronchial, and/or station 10-14 (hilar, interlobar, lobar, segmental and subsegmental) nodes",
            id : "0", name : "N1"
          }, {
            description : "ipsilateral station 2-9 (upper paratracheal, prevascular retrovascular, lower paratracheal, subaortic, paraaortic,subcarinal, paraesophageal, pulmonary ligament) nodes",
            id : "0", name : "N2"
          }, {
            description : "ipsilateral/contralateral station 1 (supraclavicular, scalene) nodes OR contralateral station 2-14 nodes",
            id : "0", name : "N3"
          } ],
          id : "0", name : "Category (pN)"
        }, {
          group : [ {
            description : "metastases contralateral lung OR plerual or pericardial nodules, OR malignant pleural or pericaridal effusions",
            id : "0", name : "M1a"
          }, {
            description : "single extrathoracic metastasis in a single organ including involvement of a single nonregional node",
            id : "0", name : "M1b"
          }, {
            description : "multiple extrathoracic metastases in a single or multiple organs",
            id : "0", name : "M1c"
          }, {
            id : "0", name : "M (not applicable)"
          }, {
            id : "0", name : "distant metastasis not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        
        id : "0", name : "Ancillary studies ordered",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "reflex all lung non-small cell carcinomas except squamous cell ca",
            id : "0", name : "EGFR, ROS1, ALK, BRAF, MET exon 14 deletion, and PDL1"
          }, {
            description : "squamous cell carcinomas",
            id : "0", name : "PDL1"
          }, {
            id : "0", name : "None"
          }, {
            id : "0", name : "Not applicable"
          }, {
            inputs_required : [ "" ],
            id : "0", name : "See case"
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "Add billing codes G9422 for NSCC",
        id : "0", name : "ICD10",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "C34.90"
          } ],
          id : "0", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "0", name : "Lymphoma, Hodgkin",
      optional : true,
      organ_group : "Hematologic",
      properties : [ {
        id : "0", name : "Specimen",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Lymph node"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Biopsy"
          }, {
            id : "0", name : "Resection"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Classical Hodgkin lymphoma"
          }, {
            id : "0", name : "Nodular lymphocyte predominant Hodgkin lymphoma"
          }, {
            id : "0", name : "Nodular sclerosis classical Hodgkin lymphoma"
          }, {
            id : "0", name : "Mixed cellularity classical Hodgkin lymphoma"
          }, {
            id : "0", name : "Lymphocyte-rich classical Hodgkin lymphoma"
          }, {
            id : "0", name : "Lymphocyte-depleted classical Hodgkin lymphoma"
          }, {
            id : "0", name : "Classical Hodgkin lymphoma, histologic subtype cannot be determined"
          }, {
            id : "0", name : "Hodgkin lymphoma, histologic subtype cannot be determined"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Immunophenotying",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "Performed",
            inputs_required : [ "" ],
            id : "0", name : ""
          }, {
            id : "0", name : "See separate report"
          }, {
            id : "0", name : "See above"
          }, {
            id : "0", name : "Not performed"
          } ],
          id : "0", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "0", name : "Lymphoma, non-Hodgkin",
      optional : true,
      organ_group : "Hematologic",
      properties : [ {
        id : "0", name : "Specimen",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Lymph node"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Biopsy"
          }, {
            id : "0", name : "Resection"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Type (WHO)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "Extended list",
            inputs_required : [ [ "PRECURSOR LYMPHOID NEOPLASMS", "B lymphoblastic leukemia/lymphoma", "B lymphoblastic leukemia/lymphoma with t(9;22)(q34;q11.2); BCR-ABL1", "B lymphoblastic leukemia/lymphoma with t(v;11q23); MLL rearranged", "B lymphoblastic leukemia/lymphoma with t(12;21)(p13;q22); TEL-AML1 (ETV6-RUNX1", "B lymphoblastic leukemia/lymphoma with hyperdiploidy", "B lymphoblastic leukemia/lymphoma with hypodiploidy (hypodiploid acute lymphoblastic leukemia/lymphoma [ALL])", "B lymphoblastic leukemia/lymphoma with t(5;14)(q31;q32); IL3-IGH", "B lymphoblastic leukemia/lymphoma with t(1;19)(q23;p13.3); E2A-PBX1 (TCF3-PBX1)", "T lymphoblastic leukemia/lymphoma", "", "MATURE B CELL NEOPLASMS", "B-cell lymphoma", "Chronic lymphocytic leukemia/small lymphocytic lymphoma", "B-cell prolymphocytic leukemia", "Splenic B-cell marginal zone lymphoma", "Hairy cell leukemia", "Splenic B-cell lymphoma/leukemia, unclassifiable", "Splenic diffuse red pulp small B-cell lymphoma", "Hairy cell leukemia-variant", "Lymphoplasmacytic lymphoma", "Gamma heavy chain disease", "Mu heavy chain disease", "Alpha heavy chain disease", "Plasma cell myeloma", "Solitary plasmacytoma of bone", "Extraosseous plasmacytoma", "Extranodal marginal zone lymphoma of mucosa-associated lymphoid tissue (MALT lymphoma) ", "Nodal marginal zone lymphoma", "Pediatric nodal marginal zone lymphoma", "Follicular lymphoma", "Pediatric follicular lymphoma", "Primary intestinal follicular lymphoma", "Primary cutaneous follicle center lymphoma", "Mantle cell lymphoma", "Diffuse large B-cell lymphoma (DLBCL)", "T cell/histiocyte-rich large B-cell lymphoma", "Primary DLBCL of the central nervous system (CNS)", "Primary cutaneous DLBCL, leg type", "Epstein-Barr virus (EBV)-positive DLBCL of the elderly", "DLBCL associated with chronic inflammation", "Lymphomatoid granulomatosis", "Primary mediastinal (thymic) large B-cell lymphoma", "Intravascular large B-cell lymphoma", "Anaplastic lymphoma kinase (ALK)-positive large B-cell lymphoma", "Plasmablastic lymphoma", "Large B-cell lymphoma arising in HHV8-associated multicentric Castleman disease", "Primary effusion lymphoma", "Burkitt lymphoma", "B-cell lymphoma, unclassifiable, with features intermediate between diffuse large B-cell lymphoma and Burkitt lymphoma", "B-cell lymphoma, unclassifiable, with features intermediate between diffuse large B-cell lymphoma and classical Hodgkin lymphoma", "", "MATURE T AND NK CELL NEOPLASMS", "T-cell lymphoma", "T-cell prolymphocytic leukemia", "T-cell large granular lymphocytic leukemia", "Chronic lymphoproliferative disorder of NK cells", "Aggressive NK-cell leukemia", "Systemic EBV-positive T-cell lymphoproliferative disease of childhood", "Hydroa vacciniforme-like lymphoma ", "Adult T-cell leukemia/lymphoma ", "Extranodal NK/T-cell lymphoma, nasal type", "Enteropathy-associated T-cell lymphoma", "Hepatosplenic T-cell lymphoma", "Subcutaneous panniculitis-like T-cell lymphoma", "Primary cutaneous anaplastic large cell lymphoma", "Lymphomatoid papulosis", "Primary cutaneous gamma-delta T-cell lymphoma", "Primary cutaneous CD8-positive aggressive epidermotropic cytotoxic T-cell lymphoma", "Primary cutaneous CD4-positive small/medium T-cell lymphoma", "Peripheral T-cell lymphoma, NOS", "Angioimmunoblastic T-cell lymphoma", "Anaplastic large cell lymphoma, ALK-positive", "Anaplastic large cell lymphoma, ALK-negative", "", "HISTIOCYTIC AND DENDRITIC NEOPLASMS", "Histiocytic sarcoma", "Langerhans cell histiocytosis", "Langerhans cell sarcoma", "Interdigitating dendritic cell sarcoma", "Follicular dendritic cell sarcoma", "Fibroblastic reticular cell tumor", "Equivocal dendritic cell tumor", "Disseminated juvenile xanthogranuloma", "", "POST-TRANSPLANT LYMPHOPROLIFERATIVE DISORDERS", "Plasmacytic hyperplasia", "Infectious mononucleosis-like PTLD", "Polymorphic PTLD", "Monomorphic PTLD (B- and T/NK-cell types)", "Classical Hodgkin lymphoma type PTLD" ] ],
            id : "0", name : ""
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Immunophenotyping",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "Performed",
            inputs_required : [ "" ],
            id : "0", name : ""
          }, {
            id : "0", name : "See separate report"
          }, {
            id : "0", name : "See above"
          }, {
            id : "0", name : "Not performed"
          } ],
          id : "0", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "0", name : "Major Salivary Glands",
      optional : false,
      organ_group : "Head and Neck",
      properties : [ {
        id : "0", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Excision"
          }, {
            id : "0", name : "Parotidectomy, superficial lobe "
          }, {
            id : "0", name : "Parotidectomy, superficial lobe "
          }, {
            id : "0", name : "Parotidectomy, deep lobe "
          }, {
            id : "0", name : "Parotidectomy, total"
          }, {
            id : "0", name : "Submandibular gland resection"
          }, {
            id : "0", name : "Sublingual gland resection"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Right parotid gland"
          }, {
            id : "0", name : "Right parotid gland, superficial lobe "
          }, {
            id : "0", name : "Right parotid gland, deep lobe "
          }, {
            id : "0", name : "Right submandibular gland"
          }, {
            id : "0", name : "Right sublingual gland"
          }, {
            id : "0", name : "Left parotid gland"
          }, {
            id : "0", name : "Left parotid gland, superficial lobe "
          }, {
            id : "0", name : "Left parotid gland, deep lobe "
          }, {
            id : "0", name : "Left submandibular gland"
          }, {
            id : "0", name : "Left sublingual gland"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor focality",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Single focus"
          }, {
            id : "0", name : "Multiple foci"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
             description : "PAS-d+, DOG1+",
            id : "0", name : "Acinic cell carcinoma"
          }, {
             description : "CD117+, MIB1+, bilaminar with CK7 and p63",
            id : "0", name : "Adenoid cystic carcinoma"
          }, {
            id : "0", name : "Adenocarcinoma, (NOS)"
          }, {
             description : "beta catenin- (basal cell adenoma beta catenin+)",
            id : "0", name : "Basal cell adenocarcinoma"
          }, {
            id : "0", name : "Carcinoma ex pleomorphic adenoma (malignant mixed tumor)"
          }, {
            id : "0", name : "Carcinoma ex pleomorphic adenoma (malignant mixed tumor), Minimally invasive "
          }, {
            id : "0", name : "Carcinoma ex pleomorphic adenoma (malignant mixed tumor), Invasive"
          }, {
            id : "0", name : "Carcinosarcoma (true malignant mixed tumor)"
          }, {
             description : "p63-, hyalinizing clear cell carcinoma p63+, EWSR1",
            id : "0", name : "Clear cell adenocarcinoma"
          }, {
            id : "0", name : "Cystadenocarcinoma"
          }, {
             description : "DOG1+/-, CD117+, GFAP +/-",
            id : "0", name : "Epithelial-myoepithelial carcinoma"
          }, {
            
            id : "0", name : "Large cell carcinoma"
          }, {
              description : "PRKD1",
            id : "0", name : "Low-grade cribriform cystadenocarcinoma "
          }, {
            id : "0", name : "Lymphoepithelial carcinoma"
          }, {
             description : "Mammoglobin +, ETV6",
            id : "0", name : "Mammary analogue secretory carcinoma"
          }, {
            id : "0", name : "Metastasizing pleomorphic adenoma"
          }, {
             description : "CRTC1-MAML2 fusion, high grade either Her2Neu+ or EGFR+",
            id : "0", name : "Mucoepidermoid carcinoma"
          }, {
            id : "0", name : "Mucinous adenocarcinoma (colloid carcinoma)"
          }, {
            id : "0", name : "Myoepithelial carcinoma (malignant myoepithelioma)"
          }, {
            id : "0", name : "Oncocytic carcinoma"
          }, {
             description : "CD117+, GFAP+, PRKD1",
            id : "0", name : "Polymorphous low-grade adenocarcinoma "
          }, {
             description : "Her2Neu+, AR+, ER-, PIK3CA+",
            id : "0", name : "Salivary duct carcinoma"
          }, {
            id : "0", name : "Sebaceous adenocarcinoma"
          }, {
            id : "0", name : "Sebaceous lymphadenocarcinoma"
          }, {
             description : "Her2Neu (focal)",
            id : "0", name : "Sialoblastoma "
          }, {
            id : "0", name : "Small cell (neuroendocrine) carcinoma"
          }, {
            id : "0", name : "Squamous cell carcinoma, primary "
          }, {
            id : "0", name : "Undifferentiated carcinoma, large cell type "
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Grade 1/3, low grade"
          }, {
            id : "0", name : "Grade 2/3, intermediate grade"
          }, {
            id : "0", name : "Grade 3/3, high grade"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Extent, macroscopic",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Limited to salivary gland"
          }, {
            id : "0", name : "Invades regional adipose tissue"
          }, {
            id : "0", name : "Invades large nerve"
          }, {
             description : "specify",
              inputs_required : [ "" ],
            id : "0", name : "invades other organs"
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "include distance/location of closest margin",
        id : "0", name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "0", name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Positive"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Indeterminate"
          }, {
            id : "0", name : "Suspicious"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Present, extensive"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Perineural invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Equivocal"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Positive node laterality",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Not applicable"
          }, {
            id : "0", name : "Right"
          }, {
            id : "0", name : "Left"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Extranodal extension",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Not applicable"
          }, {
            id : "0", name : "None"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Equivocal"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "0", name : ""
          }, {
            description : "preliminary/pathologic",
            id : "0", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "0", name : "m"
          }, {
            description : "recurrent",
            id : "0", name : "r"
          }, {
            description : "post-treatment",
            id : "0", name : "y"
          }, {
            id : "0", name : "mp"
          }, {
            id : "0", name : "rp"
          }, {
            id : "0", name : "yp"
          }, {
            id : "0", name : "mrp"
          }, {
            id : "0", name : "myp"
          }, {
            id : "0", name : "ryp"
          }, {
            id : "0", name : "mryp"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            id : "0", name : "TX"
          }, {
            description : "in situ ",
            id : "0", name : "Tis"
          }, {
            description : "CARCINOMA <= 2 cm AND no extraparenchymal extension (gross but not microscopic soft tissue invasion)",
            id : "0", name : "T1"
          }, {
            description : "CARCINOMA > 2cm AND <= 4 cm AND no extraparenchymal extension (gross but not microscopic soft tissue invasion)",
            id : "0", name : "T2"
          }, {
            description : "CARCINOMA > 4cm OR extraparenchymal extension (gross but not microscopic soft tissue invasion) ",
            id : "0", name : "T3"
          }, {
            description : "CARCINOMA Tumor invades skin, mandible ear canal and or facial nerve",
            id : "0", name : "T4a"
          }, {
            description : "CARCINOMA Tumor invades skull base and or pterygoid plates and or encases carotid artery",
            id : "0", name : "T4b"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "0", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "0", name : "N0"
          }, {
            description : "CARCINOMA single ipsilateral lymph node <= 3cm AND no extranodal extension",
            id : "0", name : "N1"
          }, {
            description : "CARCINOMA single ipsilateral lymph node either (<3cm with extranodal extension) OR (> 3cm AND <= 6cm and no extranodal extension)",
            id : "0", name : "N2a"
          }, {
            description : "CARCINOMA multiple ipsilateral lymph node AND <= 6cm",
            id : "0", name : "N2b"
          }, {
            description : "CARCINOMA contralateral lymph node AND <= 6cm",
            id : "0", name : "N2c"
          }, {
            description : "CARCINOMA > 6cm no extranodal extension",
            id : "0", name : "N3a"
          }, {
            description : "CARCINOMA (>3cm AND extranodal extension) OR (multiple nodes with extranodal extension at least in one) OR (single contralateral node <=3cm AND extranodal extension)",
            id : "0", name : "N3b"
          } ],
          id : "0", name : "Category (pN)"
        }, {
          group : [ {
            description : "metastases",
            id : "0", name : "M1"
          }, {
            id : "0", name : "M (not applicable)"
          }, {
            id : "0", name : "distant metastasis not applicable"
          } ],
          id : "0", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "0", name : "Mesothelioma, pleural",
      optional : false,
      organ_group : "Thorax",
      properties : [  {
        id : "0", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Right pleural decortication"
          }, {
            id : "0", name : "Right pleurectomy "
          }, {
            id : "0", name : "Right extrapleural pneumonectomy"
          }, {
            id : "0", name : "Left pleural decortication "
          }, {
            id : "0", name : "Left pleurectomy "
          }, {
            id : "0", name : "Left extrapleural pneumonectomy"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor location ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Parietal pleura"
          }, {
            id : "0", name : "Visceral pleura"
          }, {
            id : "0", name : "Visceral and parietal pleura"
          }, {
            id : "0", name : "Diaphragm"
          }, {
            id : "0", name : "Visceral and parietal pleura and diaphragm"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Focality",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Single focus"
          }, {
            id : "0", name : "Multiple foci "
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Epithelioid mesothelioma"
          }, {
            id : "0", name : "Sarcomatoid mesothelioma"
          }, {
            id : "0", name : "Biphasic mesothelioma"
          }, {
            id : "0", name : "Desmoplastic mesothelioma"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Parietal pleura without involvement of ipsilateral visceral pleura "
          }, {
            id : "0", name : "Parietal pleura with focal involvement of ipsilateral visceral pleura"
          }, {
            id : "0", name : "Tumor involves all of the ipsilateral pleural surfaces (including fissure)  "
          }, {
            id : "0", name : "Into but not through diaphragm"
          }, {
            id : "0", name : "Lung parenchyma "
          }, {
            id : "0", name : "Endothoracic fascia"
          }, {
            id : "0", name : "Into mediastinal fat"
          }, {
            id : "0", name : "Solitary focus invading soft tissue of the chest wall "
          }, {
            id : "0", name : "Diffuse or multiple foci invading soft tissue of chest wall"
          }, {
            id : "0", name : "Into but not through the pericardium "
          }, {
            id : "0", name : "Rib(s)"
          }, {
            id : "0", name : "Mediastinal organ(s) "
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "include distance/location of closest margin",
        id : "0", name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Positive"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Treatment effect, primary site",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Greater than 50% residual viable tumor"
          }, {
            id : "0", name : "Less than or equal to 50% residual viable tumor"
          }, {
            id : "0", name : "Indeterminate"
          }, {
            id : "0", name : "Not known"
          }  ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "0", name : ""
          }, {
            description : "pathologic",
            id : "0", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "0", name : "m"
          }, {
            description : "recurrent",
            id : "0", name : "r"
          }, {
            description : "post-treatment",
            id : "0", name : "y"
          }, {
            id : "0", name : "mp"
          }, {
            id : "0", name : "rp"
          }, {
            id : "0", name : "yp"
          }, {
            id : "0", name : "mrp"
          }, {
            id : "0", name : "myp"
          }, {
            id : "0", name : "ryp"
          }, {
            id : "0", name : "mryp"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            id : "0", name : "TX"
          }, {
            description : "Tumor limited to ipsilateral parietal pleura with or without mediastinal or diaphragmatic pleural involvement",
            id : "0", name : "T1"
          }, {
            description : "Tumor involves each of the ipsilateral pleural surfaces (parietal, mediastinal, diaphragmatic, and visceral pleura) with at least 1 of the following features: involvement of diaphragmatic muscle, extension of tumor from visceral pleura into the underlying pulmonary parenchyma ",
            id : "0", name : "T2"
          }, {
            description : "Locally advanced but potentially resectable tumor that involves all of the ipsilateral pleural surfaces (parietal, mediastinal, diaphragmatic, and visceral pleura), with at least 1 of the following features: involvement of the endothoracic fascia, extension into mediastinal fat, solitary completely resectable focus of tumor extending into the soft tissues of the chest wall, nontransmural involvement of the pericardium ",
            id : "0", name : "T3"
          }, {
            description : "Locally advanced technically unresectable tumor involving all of the ipsilateral pleural surfaces (parietal, mediastinal, diaphragmatic, and visceral pleura), with at least 1 of the following features: diffuse extension or multifocal masses of tumor in the chest wall with or without associated rib destruction, direct transdiaphragmatic extension to the peritoneum, direct extension to the contralateral pleura, direct extension to mediastinal organs, direct extension into the spine, extension through the internal surface of the pericardium with or without a pericardial effusion, tumor involving the myocardium",
            id : "0", name : "T4"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "0", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "0", name : "N0"
          }, {
            description : "Metastases in the ipsilateral bronchopulmonary or hilar or mediastinal or peridiaphragmatic or pericardial fat pad or intercostal  lymph nodes",
            id : "0", name : "N1"
          }, {
            description : "Metastases in the contralateral mediastinal, ipsilateral or contralateral supraclavicular lymph nodes ",
            id : "0", name : "N3"
          } ],
          id : "0", name : "Category (pN)"
        }, {
          group : [ {
            description : "Distant metastases",
            id : "0", name : "M1"
          }, {
            id : "0", name : "M (not applicable)"
          }, {
            id : "0", name : "distant metastasis not applicable"
          } ],
          id : "0", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "0", name : "Nasal Cavity and Paranasal Sinus",
      optional : false,
      organ_group : "Head and Neck",
      properties : [   {
        id : "0", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [  {
            id : "0", name : "Excisional biopsy"
          }, {
            id : "0", name : "Resection "
          }, {
            id : "0", name : "Partial maxillectomy "
          }, {
            id : "0", name : "Radical maxillectomy"
          }, {
            id : "0", name : "Resection, and neck (lymph node) dissection  "
          }, {
            id : "0", name : "Partial maxillectomy, and neck (lymph node) dissection  "
          }, {
            id : "0", name : "Radical maxillectomy, and neck (lymph node) dissection "
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Right nasal cavity"
          }, {
            id : "0", name : "Right nasal cavity, septum"
          }, {
            id : "0", name : "Right nasal cavity, floor"
          }, {
            id : "0", name : "Right nasal cavity, lateral wall"
          }, {
            id : "0", name : "Right nasal cavity, vestibule"
          }, {
            id : "0", name : "Right paranasal sinus(es), maxillary"
          }, {
            id : "0", name : "Right paranasal sinus(es), ethmoid"
          }, {
            id : "0", name : "Right paranasal sinus(es), frontal"
          }, {
            id : "0", name : "Right paranasal sinus(es), sphenoid "
          }, {
            id : "0", name : "Left nasal cavity"
          }, {
            id : "0", name : "Left nasal cavity, septum"
          }, {
            id : "0", name : "Left nasal cavity, floor"
          }, {
            id : "0", name : "Left nasal cavity, lateral wall"
          }, {
            id : "0", name : "Left nasal cavity, vestibule"
          }, {
            id : "0", name : "Left paranasal sinus(es), maxillary"
          }, {
            id : "0", name : "Left paranasal sinus(es), ethmoid"
          }, {
            id : "0", name : "Left paranasal sinus(es), frontal"
          }, {
            id : "0", name : "Left paranasal sinus(es), sphenoid "
          }, {
            id : "0", name : "Midline nasal cavity"
          }, {
            id : "0", name : "Midline nasal cavity, septum"
          }, {
            id : "0", name : "Midline nasal cavity, floor"
          }, {
            id : "0", name : "Midline nasal cavity, lateral wall"
          }, {
            id : "0", name : "Midline nasal cavity, vestibule"
          }, {
            id : "0", name : "Midline paranasal sinus(es), maxillary"
          }, {
            id : "0", name : "Midline paranasal sinus(es), ethmoid"
          }, {
            id : "0", name : "Midline paranasal sinus(es), frontal"
          }, {
            id : "0", name : "Midline paranasal sinus(es), sphenoid "
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor focality",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Single focus"
          }, {
            id : "0", name : "Multiple foci"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Squamous cell carcinoma"
          }, {
            id : "0", name : "Squamous cell carcinoma, keratinizing"
          }, {
            id : "0", name : "Squamous cell carcinoma, nonkeratinizing"
          }, {
            id : "0", name : "Adenosquamous carcinoma"
          }, {
            id : "0", name : "Basaloid squamous cell carcinoma"
          }, {
            id : "0", name : "Papillary squamous cell carcinoma"
          }, {
            id : "0", name : "Spindle cell squamous carcinoma"
          }, {
            id : "0", name : "Verrucous carcinoma"
          }, {
            id : "0", name : "Lymphoepithelial carcinoma (non-nasopharyngeal)"
          }, {
            id : "0", name : "Sinonasal undifferentiated carcinoma (SNUC)"
          }, {
            id : "0", name : "NUT carcinoma"
          }, {
            id : "0", name : "Adenocarcinoma, Intestinal type"
          }, {
            id : "0", name : "Adenocarcinoma, Non-intestinal type"
          }, {
            id : "0", name : "Acinic cell carcinoma"
          }, {
            id : "0", name : "Adenoid cystic carcinoma"
          }, {
            id : "0", name : "Adenocarcinoma, not otherwise specified (NOS)"
          }, {
            id : "0", name : "Carcinoma ex pleomorphic adenoma (malignant mixed tumor)"
          }, {
            id : "0", name : "Clear cell adenocarcinoma"
          }, {
            id : "0", name : "Epithelial-myoepithelial carcinoma"
          }, {
            id : "0", name : "Mucoepidermoid carcinoma"
          }, {
            id : "0", name : "Myoepithelial carcinoma (malignant myoepithelioma)"
          }, {
            id : "0", name : "Oncocytic carcinoma"
          }, {
            id : "0", name : "Polymorphous low-grade adenocarcinoma"
          }, {
            id : "0", name : "Salivary duct carcinoma"
          }, {
            id : "0", name : "Typical carcinoid tumor (well differentiated neuroendocrine carcinoma)"
          }, {
            id : "0", name : "Atypical carcinoid tumor (moderately differentiated neuroendocrine carcinoma)"
          }, {
            id : "0", name : "Small cell carcinoma (poorly differentiated neuroendocrine carcinoma)"
          }, {
            id : "0", name : "Combined (or composite) small cell carcinoma, neuroendocrine type"
          }, {
            id : "0", name : "Mucosal malignant melanoma"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Grade 1/3, Well differentiated"
          }, {
            id : "0", name : "Grade 2/3, Moderately differentiated"
          }, {
            id : "0", name : "Grade 3/3, Poorly differentiated "
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "include distance/location of closest margin",
        id : "0", name : "Margins, invasive tumor",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "0", name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Positive"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "include distance/location of closest margin",
        id : "0", name : "Margins, dysplasia/CIS",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "0", name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Positive"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Indeterminate"
          }, {
            id : "0", name : "Suspicious"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Present, extensive"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Perineural invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Equivocal"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Positive node laterality ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Not applicable"
          }, {
            id : "0", name : "Right"
          }, {
            id : "0", name : "Left"
          }, {
            id : "0", name : "Bilateral"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Size of largest metastasis",
       optional_state  : "required", "options" : [ {
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Extranodal Extension ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Not applicable"
          }, {
            id : "0", name : "None"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Equivocal"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "0", name : ""
          }, {
            description : "pathologic",
            id : "0", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "0", name : "m"
          }, {
            description : "recurrent",
            id : "0", name : "r"
          }, {
            description : "post-treatment",
            id : "0", name : "y"
          }, {
            id : "0", name : "mp"
          }, {
            id : "0", name : "rp"
          }, {
            id : "0", name : "yp"
          }, {
            id : "0", name : "mrp"
          }, {
            id : "0", name : "myp"
          }, {
            id : "0", name : "ryp"
          }, {
            id : "0", name : "mryp"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            id : "0", name : "TX"
          }, {
            description : "MAXILLARY SINUS, Tumor limited to maxillary sinus mucosa with no erosion or destruction of bone ",
            id : "0", name : "T1"
          }, {
            description : "MAXILLARY SINUS, Tumor causing bone erosion or destruction including extension into the hard palate and/or middle nasal meatus, except extension to posterior wall of maxillary sinus and pterygoid plates ",
            id : "0", name : "T2"
          }, {
            description : "MAXILLARY SINUS, Tumor invades any of the following: bone of the posterior wall of maxillary sinus, subcutaneous tissues, floor or medial wall of orbit, pterygoid fossa, ethmoid sinuses",
            id : "0", name : "T3"
          }, {
            description : "MAXILLARY SINUS, Moderately advanced local disease. Tumor invades anterior orbital contents, skin of cheek, pterygoid plates, infratemporal fossa, cribriform plate, sphenoid or frontal sinuses",
            id : "0", name : "T4a"
          }, {
            description : "MAXILLARY SINUS, Very advanced local disease. Tumor invades any of the following: orbital apex, dura, brain, middle cranial fossa, cranial nerves other than maxillary division of trigeminal nerve (V2), nasopharynx, or clivus",
            id : "0", name : "T4b"
          }, {
            description : "NASAL CAVITY AND ETHMOID SINUS, Tumor restricted to any one subsite, with our without bone invasion ",
            id : "0", name : "T1"
          }, {
            description : "NASAL CAVITY AND ETHMOID SINUS, Tumor invading two subsites in a single region or extending to involve an adjacent region within the nasoethmoidal complex, with our without bone invasion ",
            id : "0", name : "T2"
          }, {
            description : "NASAL CAVITY AND ETHMOID SINUS, Tumor extends to invade the medial wall or floor of the orbit, maxillary sinus, palate, or cribriform plate",
            id : "0", name : "T3"
          }, {
            description : "NASAL CAVITY AND ETHMOID SINUS, Moderately advanced local disease Tumor invades any of the following:  anterior orbital contents, skin of nose or cheek, minimal extension to anterior cranial fossa, pterygoid plates, sphenoid or frontal sinuses",
            id : "0", name : "T4a"
          }, {
            description : "NASAL CAVITY AND ETHMOID SINUS, Very advanced local disease. Tumor invades any of the following:  orbital apex, dura, brain, middle cranial fossa, cranial nerves other than maxillary division of trigeminal nerve (V2), nasopharynx, or clivus",
            id : "0", name : "T4b"
          }, {
            description : "MELANOMA, Mucosal disease",
            id : "0", name : "T3"
          }, {
            description : "MELANOMA, Moderately advanced disease. Tumor involving deep soft tissue, cartilage, bone, or overlying skin ",
            id : "0", name : "T4a"
          }, {
            description : "MELANOMA, Very advanced disease. Tumor involving brain, dura, skull base, lower cranial nerves (IX, X, XI, XII), masticator space, carotid artery, prevertebral space, or mediastinal structures",
            id : "0", name : "T4b"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "0", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "0", name : "N0"
          }, {
            description : "CARCINOMA Metastasis in a single ipsilateral lymph node, 3 cm or less in greatest dimensiona, AND no extranodal extension",
            id : "0", name : "N1"
          }, {
            description : "CARCINOMA Metastasis in a (single ipsilateral lymph node <= 3mc AND extranodal extension) OR, (more than 3 cm but not more than 6 cm in greatest dimension, AND no extranodal extenison) ",
            id : "0", name : "N2a"
          }, {
            description : "CARCINOMA Metastasis in multiple ipsilateral lymph nodes, none more than 6 cm in greatest dimension AND no extrandoal extension",
            id : "0", name : "N2b"
          }, {
            description : "CARCINOMA Metastasis in bilateral or contralateral lymph nodes, none more than 6 cm in greatest dimension AND no extranodal extension",
            id : "0", name : "N2c"
          }, {
            description : "CARCINOMA Metastasis in a lymph node more than 6 cm in greatest dimension AND no extranodal extension",
            id : "0", name : "N3a"
          }, {
            description : "CARCINOMA Metastasis in (a single ipsilateral node > 3cm AND extranodal extension) OR ( multiple ipsilatearl, contralateral or bilateral nodes AND extranodal extension OR (single contralateral node <=3cm AND extranodal extension)",
            id : "0", name : "N3b"
          }, {
            description : "MELANOMA, regional metastases",
            id : "0", name : "N1"
          } ],
          id : "0", name : "Category (pN)"
        }, {
          group : [ {
            description : "metastases",
            id : "0", name : "M1"
          }, {
            id : "0", name : "M (not applicable)"
          }, {
            id : "0", name : "distant metastasis not applicable"
          } ],
          id : "0", name : ""
        } ]
      } ]
  
   }, {
      most_common : false,
      id : "0", name : "Neuroblastoma",
      optional : true,
      organ_group : "Pediatric",
      properties : [ {
        id : "0", name : "Specimen",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Adrenal/periadrenal"
          }, {
            id : "0", name : "Retroperitoneal, nonadrenal"
          }, {
            id : "0", name : "Thoracic paraspinal"
          }, {
            id : "0", name : "Cervical "
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Resection"
          }, {
            id : "0", name : "Incisional biopsy"
          } ],
          id : "0", name : ""
        } ]
     
      }, {
        id : "0", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "0", name : ""
        } ]
    
      }, {
        id : "0", name : "Patient Age ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "<18 months"
          }, {
            id : "0", name : "≥18 months and <5 years "
          }, {
            id : "0", name : "≥5 years "
          }, {
            id : "0", name : "Equivocal "
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Neuroblastoma"
          }, {
            id : "0", name : "Ganglioneuroblastoma Nodular subtype "
          }, {
            id : "0", name : "Ganglioneuroblastoma Intermixed subtype "
          }, {
            id : "0", name : "Ganglioneuroma "
          }, {
            id : "0", name : "Neuroblastic tumor, unclassifiable"
          }, {
            id : "0", name : "Equivocal "
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Degree of Differentiation ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Undifferentiated"
          }, {
            id : "0", name : "Poorly differentiated "
          }, {
            id : "0", name : "Differentiating "
          }, {
            id : "0", name : "Not applicable "
          }, {
            id : "0", name : "Equivocal "
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Mitotic-Karyorrhectic Index (MKI) ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Low (<100 per 5000 cells; <2%)"
          }, {
            id : "0", name : "Intermediate (100-200 per 5000 cells; 2%-4%) "
          }, {
            id : "0", name : "High (>200 per 5000 cells; >4%) "
          }, {
            id : "0", name : "Not applicable "
          }, {
            id : "0", name : "Equivocal "
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Treatment History ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "No known presurgical chemotherapy"
          }, {
            id : "0", name : "Presurgical chemotherapy given "
          }, {
            id : "0", name : "Indeterminate "
          }, {
            id : "0", name : "Not known"
          }  ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "International Neuroblastoma Pathology Classification (INPC)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "Any age; ganglioneuroma (Schwannian stroma-dominant); maturing or mature OR Any age; ganglioneuroblastoma, intermixed (Schwannian stroma-rich) OR Less than 18 months old; neuroblastoma (Schwannian stroma-poor) or nodular ganglioneuroblastoma; poorly differentiated or differentiating subtypes with low or intermediate mitosis-karyorrhexis index (MKI)  OR 18 months up to less than 5 years old; neuroblastoma (Schwannian stroma-poor) or nodular ganglioneuroblastoma; differentiating subtype and low MKI",
            id : "0", name : "Favorable Histopathology"
          }, {
            description : "Any age; neuroblastoma (Schwannian stroma-poor) or nodular ganglioneuroblastoma with undifferentiated histology and any MKI OR Less than 18 months old; neuroblastoma (Schwannian stroma-poor) or nodular ganglioneuroblastoma with poorly differentiated or differentiating subtypes with high MKI OR 18 months up to less than 5 years old; neuroblastoma (Schwannian stroma-poor) or nodular ganglioneuroblastoma; poorly differentiated and any MKI, or differentiating and intermediate or high MKI OR Equal to or greater than 5 years old; neuroblastoma (Schwannian stroma-poor) or nodular ganglioneuroblastoma; any subtype and any MKI",
            id : "0", name : "Unfavorable Histopathology"
          }, {
            id : "0", name : "Equivocal"
          }, {
            id : "0", name : "Not applicable  "
          } ],
          id : "0", name : ""
        } ]
   
      }, {
        id : "0", name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Encapsulated"
          }, {
            id : "0", name : "Extracapsular extension without adjacent organ involvement "
          }, {
            id : "0", name : "Extension into adjacent organs "
          }, {
            id : "0", name : "Extension into spinal canal "
          }, {
            id : "0", name : "Equivocal "
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
       
        id : "0", name : "Distant metastases",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Present"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
         description : "required for all tumors except ganglioneuroma",
        id : "0", name : "MYCN Amplification Status  ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Not amplified"
          }, {
            id : "0", name : "Amplified "
          }, {
            id : "0", name : "Gain"
          }, {
            id : "0", name : "Pending"
          }, {
            id : "0", name : "Equivocal "
          } ],
          id : "0", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "0", name : "Ocular hematopoietic neoplasms",
      optional : true,
      organ_group : "Hematologic",
      properties : [ {
        id : "0", name : "Specimen",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Conjunctiva"
          }, {
            id : "0", name : "Orbital soft tissue (orbit) "
          }, {
            id : "0", name : "Lacrimal gland"
          }, {
            id : "0", name : "Lacrimal sac or nasolacrimal duct "
          }, {
            id : "0", name : "Eyelid"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Biopsy"
          }, {
            id : "0", name : "Resection "
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph Node Sampling ",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "preauricular/parotid, submandibular, or cervical",
            id : "0", name : "Regional lymph node(s) "
          }, {
            description : "lymph nodes from the trunk, eg, mediastinal, para-aortic",
            id : "0", name : "Central lymph node(s)  "
          }, {
            description : "lymph nodes from distant sites other than central",
            id : "0", name : "Peripheral lymph node(s)  "
          }, {
            id : "0", name : "Equivocal"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Extranodal marginal zone lymphoma of mucosa-associated lymphoid tissue (MALT lymphoma)"
          }, {
            id : "0", name : "Follicular lymphoma"
          }, {
            id : "0", name : "Diffuse large B-cell lymphoma, not otherwise specified (NOS)"
          }, {
            id : "0", name : "Mantle cell lymphoma"
          }, {
            id : "0", name : "Chronic lymphocytic leukemia/small lymphocytic lymphoma"
          }, {
            id : "0", name : "Lymphoplasmacytic lymphoma"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "0", name : ""
          }, {
            description : "pathologic",
            id : "0", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "0", name : "m"
          }, {
            description : "recurrent",
            id : "0", name : "r"
          }, {
            description : "post-treatment",
            id : "0", name : "y"
          }, {
            id : "0", name : "mp"
          }, {
            id : "0", name : "rp"
          }, {
            id : "0", name : "yp"
          }, {
            id : "0", name : "mrp"
          }, {
            id : "0", name : "myp"
          }, {
            id : "0", name : "ryp"
          }, {
            id : "0", name : "mryp"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            id : "0", name : "TX"
          }, {
            description : "Conjunctiva involvement only",
            id : "0", name : "T1"
          }, {
            description : "Orbital involvement ",
            id : "0", name : "T2"
          }, {
            description : "Preseptal eyelid involvement ",
            id : "0", name : "T3"
          }, {
            description : "Beyond orbit (bone, sinus, brain)",
            id : "0", name : "T4"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "0", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "0", name : "N0"
          }, {
            description : "Single lymph node region superior to mediastinum",
            id : "0", name : "N1a"
          }, {
            description : "2 or more lymph node regions above mediastinum",
            id : "0", name : "N1b"
          }, {
            description : "Involvement of mediastinum",
            id : "0", name : "N2"
          }, {
            description : "Involvement of peropheral and central lymph node regions ",
            id : "0", name : "N3"
          } ],
          id : "0", name : "Category (pN)"
        }, {
          group : [ {
            description : "Non-contiguous involvement of tissues or organs external to the ocular adnexa (eg, salivary glands, lung, liver)",
            id : "0", name : "M1a"
          }, {
            description : "Bone marrow involvement",
            id : "0", name : "M1b"
          }, {
            description : "Both pM1a and pM1b involvement",
            id : "0", name : "M1c"
          }, {
            id : "0", name : "M (not applicable)"
          }, {
            id : "0", name : "distant metastasis not applicable"
          } ],
          id : "0", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "0", name : "Ovary Fallopian Tube Peritoneum",
      optional : false,
      organ_group : "Gynecologic",
      properties : [  {
        id : "0", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Oophorectomy"
          }, {
            id : "0", name : "Bilateral oophorectomy"
          }, {
            id : "0", name : "Unilateral salpingo-oophorectomy"
          }, {
            id : "0", name : "Bilateral salpingo-oophorectomy"
          }, {
            id : "0", name : "Salpingectomy"
          }, {
            id : "0", name : "Hysterectomy and unilateral salpingo-oophorectomy"
          }, {
            id : "0", name : "Hysterectomy and bilateral salpingo-oophorectomy"
          }, {
            id : "0", name : "Hysterectomy, bilateral salpingo-oophorectomy, and omentectomy"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Right ovary integrity",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Not applicable"
          }, {
            id : "0", name : "Capsule intact"
          }, {
            id : "0", name : "Capsule ruptured"
          }, {
            id : "0", name : "Fragmented"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Left ovary integrity",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Not applicable"
          }, {
            id : "0", name : "Capsule intact"
          }, {
            id : "0", name : "Capsule ruptured"
          }, {
            id : "0", name : "Fragmented"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Right fallopian tube integrity",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Not applicable"
          }, {
            id : "0", name : "Capsule intact"
          }, {
            id : "0", name : "Capsule ruptured"
          }, {
            id : "0", name : "Fragmented"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Left fallopian tube integrity",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Not applicable"
          }, {
            id : "0", name : "Capsule intact"
          }, {
            id : "0", name : "Capsule ruptured"
          }, {
            id : "0", name : "Fragmented"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Primary tumor site",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Right ovary"
          }, {
            id : "0", name : "Left Ovary"
          }, {
            id : "0", name : "Bilateral ovaries"
          }, {
            id : "0", name : "Right fallopian tube"
          }, {
            id : "0", name : "Left fallopian tube"
          } , {
            id : "0", name : "Primary peritoneum"
          }],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Ovarian surface involvement",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Equivocal"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Fallopian tube surface involvement",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Equivocal"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
                   description : "WT1- p53-/focal+, ER +, Pax8+",
            id : "0", name : "Endometrioid adenocarcinoma"
          }, {
            id : "0", name : "Endometrioid adenocarcinoma with squamous differentiation"
          }, {
            id : "0", name : "Endometrioid borderline tumor"
          }, {
            id : "0", name : "Mucinous adenocarcinoma"
          }, {
            id : "0", name : "Mucinous borderline tumor"
          }, {
            id : "0", name : "Seromucinous borderline tumor"
          }, {
                       description : "NapsinA+, HNF-1b +, Pax8+",
            id : "0", name : "Clear cell adenocarcinoma"
          }, {
               description : "WT1+ p53+ or completely -, ER variable, Pax8+",
            id : "0", name : "Serous carcinoma"
          }, {
            id : "0", name : "Serous borderline tumor"
          }, {
            id : "0", name : "Serous borderline tumor with microinvasion"
          }, {
            id : "0", name : "Serous borderline tumor-micropapillary variant/noninvasive low-grade serous carcinoma"
          }, {
            id : "0", name : "Serous tubal intraepithelial carcinoma (STIC)"
          }, {
            id : "0", name : "Small cell carcinoma"
          }, {
            id : "0", name : "Large cell neuroendocrine carcinoma"
          }, {
            id : "0", name : "Carcinosarcoma (MMMT), homologous"
          }, {
            id : "0", name : "Carcinosarcoma (MMMT), heterologous"
          }, {
            id : "0", name : "Brenner tumor, borderline"
          }, {
            id : "0", name : "Brenner tumor malignant"
          }, {
            id : "0", name : "Granulosa cell tumor"
          }, {
            id : "0", name : "Sex cord stromal tumor"
          }, {
            id : "0", name : "Dysgerminoma"
          }, {
            id : "0", name : "Yolk sac tumor"
          }, {
            id : "0", name : "Immature teratoma"
          }, {
            id : "0", name : "Carcinoma arising from a teratoma"
          }, {
            id : "0", name : "Mixed germ cell tumor"
          }  ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "WHO grade 1/3"
          }, {
            id : "0", name : "WHO grade 2/3"
          }, {
            id : "0", name : "WHO grade 3/3"
          }, {
            description : "required for serous carcinoma and teratoma",
            id : "0", name : "Low grade"
          }, {
            description : "required for serous carcinoma and teratoma",
            id : "0", name : "High grade"
          }, {
             description : "Clear cell tumors, Sertoli Leydig cell tumors",
            id : "0", name : "Not applicable"
          }  ],
          id : "0", name : ""
        } ]
      }, {
          description : "Serous tumor implants that were formerly classified as “invasive implants” are now classified as low-grade serous carcinoma of the peritoneum",
        id : "0", name : "Implants",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
         description : "R/L ovary, tube, uterus, cervix, pelvic peritoneum, abdominal peritoneum, omentum",
        id : "0", name : "Other tissue(s) involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          },{
           description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Positive"
            }],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Largest Extrapelvic Peritoneal Focus ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Not applicable"
          }, {
            id : "0", name : "Microscopic"
          }, {
            id : "0", name : "Macroscopic (2 cm or less)"
          }, {
            id : "0", name : "Macroscopic (greater than 2 cm)"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Peritoneal fluid/washings",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Not applicable"
          }, {
            id : "0", name : "Benign"
          }, {
            id : "0", name : "Atypical"
          }, {
            id : "0", name : "Suspicious"
          }, {
            id : "0", name : "Malignant"
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "includes as pelvic, external iliac, internal iliac (hypogastric), common iliac, parametrial, obturator, sacral, presacral, para-aortic, and retroperitoneal are considered regional lymph nodes. Although not specifically named by AJCC or FIGO, intra-omental and peri-intestinal lymph nodes, are also regarded as regional lymph nodes for staging purposes ",
        id : "0", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
      
        id : "0", name : "Lymph nodes, # w/ mets > 10mm",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
       
        id : "0", name : "Lymph nodes, # w/ mets >0.2mm, <= 10mm",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "<= 0.2mm",
        id : "0", name : "Lymph nodes, # w/ isolated tumor cells",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Size of largest deposit",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Location of largest deposit",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "required only for high-grade serous carcinomas",
        id : "0", name : "Treatment Effect ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "No known therapy"
          }, {
            id : "0", name : "None or minimal response (CRS1)"
          }, {
            id : "0", name : "Moderate response (CRS 2)"
          }, {
            id : "0", name : "Marked response with no or minimal residual cancer (CRS 3)"
          }, {
            id : "0", name : "Indeterminate"
          }, {
            id : "0", name : "Not applicable"
          }  ],
          id : "0", name : ""
        } ] 
  
     }, {
        id : "0", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "0", name : ""
          }, {
            description : "pathologic",
            id : "0", name : "AJCC p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "0", name : "AJCC m"
          }, {
            description : "recurrent",
            id : "0", name : "AJCC r"
          }, {
            description : "post-treatment",
            id : "0", name : "AJCC y"
          }, {
            id : "0", name : "AJCC mp"
          }, {
            id : "0", name : "AJCC rp"
          }, {
            id : "0", name : "AJCC yp"
          }, {
            id : "0", name : "AJCC mrp"
          }, {
            id : "0", name : "AJCC myp"
          }, {
            id : "0", name : "AJCC ryp"
          }, {
            id : "0", name : "AJCC mryp"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            id : "0", name : "TX"
          }, {
            description : "Tumor limited to one ovary (capsule intact) or fallopian tube, no tumor on ovarian or fallopian tube surface; no malignant cells in ascites or peritoneal washings. Serous tubal intraepithelial carcinoma (STIC) should be staged as pT1a if it involves one tube only, as pT1b if it involves both tubes, and as pT1c3 if it is accompanied by positive peritoneal washing washings or ascites. Nonmalignant ascites is not classified. The presence of ascites does not affect staging unless malignant cells are present.",
            id : "0", name : "T1a"
          }, {
            description : "Tumor limited to both ovaries (capsules intact) or fallopian tubes; no tumor on ovarian or fallopian tube surface; no malignant cells in ascites or peritoneal washings",
            id : "0", name : "T1b"
          }, {
            description : "Tumor limited to one or both ovaries or fallopian tubes with any of the followingpT1c1:  Surgical spill, Capsule ruptured before surgery or tumor on ovarian or fallopian tube surface, Malignant cells in ascites or peritoneal washings",
            id : "0", name : "T1c"
          }, {
            description : "Extension and/or implants on uterus and/or fallopian tube(s) and/or ovaries. ",
            id : "0", name : "T2a"
          }, {
            description : "Extension to and/or implants on other pelvic tissues. ",
            id : "0", name : "T2b"
          }, {
            description : "Microscopic extrapelvic (above the pelvic brim) peritoneal involvement with or without positive retroperitoneal lymph nodes ",
            id : "0", name : "T3a"
          }, {
            description : "Macroscopic peritoneal metastasis beyond pelvis 2 cm or less in greatest dimension with or without metastasis to retroperitoneal lymph nodes ",
            id : "0", name : "T3b"
          }, {
            description : "Macroscopic peritoneal metastasis beyond pelvis more than 2 cm in greatest dimension with or without metastasis to the retroperitoneal lymph nodes (includes extension of tumor to capsule of liver and spleen without parenchymal involvement of either organ)",
            id : "0", name : "T3c"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "0", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "0", name : "N0"
          }, {
            description : "Isolated tumor cells, <=0.2mm",
            id : "0", name : "N0(i+)"
          }, {
            description : "regional lymph node metastasis <= 10mm",
            id : "0", name : "N1a"
          }, {
            description : "regional lymph node metastasis, > 10 mm",
            id : "0", name : "N1b"
          } ],
          id : "0", name : "Category (pN)"
        }, {
          group : [ {
            description : "Positive pleural effusion",
            id : "0", name : "M1a"
          }, {
             description : "all other metastases",
            id : "0", name : "M1b"
          }, {
            id : "0", name : "M (not applicable)"
          }, {
            id : "0", name : "distant metastasis not applicable"
          } ],
          id : "0", name : ""
        } ]
  
    }, {
        id : "0", name : "Stage FIGO (2015)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "Tumor limited to 1 ovary (capsule intact) or fallopian tube; no tumor on ovarian or fallopian tube surface; no malignant cells in the ascites or peritoneal washings",
            id : "0", name : "FIGO IA"
          }, {
            description : "Tumor limited to both ovaries (capsules intact) or fallopian tubes; no tumor on ovarian or fallopian tube surface; no malignant cells in the ascites or peritoneal washings",
            id : "0", name : "FIGO IB"
          }, {
            description : "Surgical spill intraoperatively",
            id : "0", name : "FIGO IC1"
          }, {
            description : "Capsule ruptured before surgery or tumor on ovarian or fallopian tube surface",
            id : "0", name : "FIGO IC2"
          }, {
            description : "Malignant cells present in the ascites or peritoneal washings",
            id : "0", name : "FIGO IC3"
          }, {
            description : "Extension and/or implants on the uterus and/or fallopian tubes and/or ovaries",
            id : "0", name : "FIGO IIA"
          }, {
            description : "Extension to other pelvic intraperitoneal tissues",
            id : "0", name : "FIGO IIB"
          }, {
            description : "Positive retroperitoneal lymph nodes only (cytologically or histologically proven)",
            id : "0", name : "FIGO IIIA1"
          }, {
            description : "Microscopic extrapelvic (above the pelvic brim) peritoneal involvement with or without positive retroperitoneal lymph nodes",
            id : "0", name : "FIGO IIIA2"
          }, {
            description : "Macroscopic peritoneal metastases beyond the pelvic brim ≤2 cm in greatest dimension, with or without metastasis to the retroperitoneal lymph nodes",
            id : "0", name : "FIGO IIIB"
          }, {
            description : "Macroscopic peritoneal metastases beyond the pelvic brim >2 cm in greatest dimension, with or without metastases to the retroperitoneal nodes",
            id : "0", name : "FIGO IIIC"
          }, {
            description : "Pleural effusion with positive cytology",
            id : "0", name : "FIGO IVA"
          }, {
            description : "Metastases to extra-abdominal organs (including inguinal lymph nodes and lymph nodes outside of abdominal cavity)",
            id : "0", name : "FIGO IVB"
          }, {
            description : "",
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
           } ]
      }, {
      most_common : false,
      id : "0", name : "Pancreas neuroendocrine tumor",
      optional : false,
      organ_group : "Endocrine",
      properties : [  {
        id : "0", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Excisional biopsy (enucleation)"
          }, {
            id : "0", name : "Pancreaticoduodenectomy (Whipple resection), partial pancreatectomy"
          }, {
            id : "0", name : "Pancreaticoduodenectomy (Whipple resection), total pancreatectomy"
          }, {
            id : "0", name : "Partial pancreatectomy, pancreatic body "
          }, {
            id : "0", name : "Partial pancreatectomy, pancreatic tail"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Pancreatic head"
          }, {
            id : "0", name : "Uncinate process"
          }, {
            id : "0", name : "Pancreatic body"
          }, {
            id : "0", name : "Pancreatic tail"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor Focality ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Single focus"
          }, {
            id : "0", name : "Multiple foci"
          }, {
            id : "0", name : "Equivocal"
          } ],
          id : "0", name : ""
        } ]
      }, {
         description : "For small cell (high grade NET use pancreas carcinoma protocol not this one) ",  
        id : "0", name : "Type and Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "< 2mitoses/10 hpf and/or Ki67<3% ", 
            id : "0", name : "Grade 1/3, Well differentiated neuroendocrine tumor, low grade (carcinoid)"
          }, {
            description : ">= 2 AND < 20 mitoses/10 hpf and/or Ki67 >=3 AND <20% ",  
            id : "0", name : "Grade 2/3, Well differentiated neuroendocrine tumor, intermediate grade (atypical carcinoid)"
          }, {
             description : "> 20 mitoses/10 hpf and/or Ki67 >20% ",  
            id : "0", name : "Grade 3/3, Well differentiated neuroendocrine tumor"
          } ],
          id : "0", name : ""
        } ]
      }, {
           description : "mitoses/ 2 mm squared NOT 10 hpf, approximately count 42 hpf and divide by 5", 
        id : "0", name : "Mitotic rate",
       optional_state  : "required", "options" : [ {
          group : [ {
            
            id : "0", name : "Less than 2/ 2mm squared"
          }, {
          
            id : "0", name : "at least 2 and less than 20 /2 mm squared"
          }, {
            
            id : "0", name : "More than 20 per 2 mm squared"
          } ],
          id : "0", name : ""
        } ]  
        
      }, {
        id : "0", name : "Ki67 (Mib1)",
       optional_state  : "required", "options" : [ {
          group : [ {
            
            id : "0", name : "Less than 3%"
          }, {
          
            id : "0", name : "at least 3% and less than 20%"
          }, {
            
            id : "0", name : "More than 20%"
          } ],
          id : "0", name : ""
        } ]  
        
      }, {
        id : "0", name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "No evidence of primary tumor"
          }, {
            id : "0", name : "Tumor is limited to pancreas"
          }, {
            id : "0", name : "Tumor invades common bile duct"
          }, {
            id : "0", name : "Tumor invades duodenum "
          }, {
             description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Tumor directly invades adjacent structures "
          }, {
             description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Tumor directly invades wall of large vessel "
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "include distance/location of closest proximal/distal/bile duct/pancreatic/uncinate margin",
        id : "0", name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "0", name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Positive"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Indeterminate"
          }, {
            id : "0", name : "Suspicious"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Present, extensive"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Perineural invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Equivocal"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "0", name : ""
          }, {
            description : "pathologic",
            id : "0", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "0", name : "m"
          }, {
            description : "recurrent",
            id : "0", name : "r"
          }, {
            description : "post-treatment",
            id : "0", name : "y"
          }, {
            id : "0", name : "mp"
          }, {
            id : "0", name : "rp"
          }, {
            id : "0", name : "yp"
          }, {
            id : "0", name : "mrp"
          }, {
            id : "0", name : "myp"
          }, {
            id : "0", name : "ryp"
          }, {
            id : "0", name : "mryp"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            id : "0", name : "TX"
          }, {
            description : "No tumor",
            id : "0", name : "T0"
          }, {
            description : "Tumor limited to the pancreas, 2 cm or less in greatest dimension ",
            id : "0", name : "T1"
          }, {
            description : "Tumor limited to the pancreas, > 2cm and <= 4cm",
            id : "0", name : "T2"
          }, {
            description : "(Tumor limited to pancreas AND > 4cm) OR (Tumor invades duodenum or bile duct",
            id : "0", name : "T3"
          }, {
            description : "Tumor invades adjacent organs or wall of large vessels ",
            id : "0", name : "T4"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "0", name : "NX"
          }, {
            description : "No regional lymph node metastases",
            id : "0", name : "N0"
          }, {
            description : "Metastases to regional lymph nodes",
            id : "0", name : "N1"
          } ],
          id : "0", name : "Category (pN)"
        }, {
          group : [ {
            description : "Distant metastases liver",
            id : "0", name : "M1a"
          }, {
                description : "Distant metastases other than liver",
            id : "0", name : "M1b"
          }, {
                description : "Distant metastases liver and other",
            id : "0", name : "M1c"
          }, {
            id : "0", name : "M (not applicable)"
          }, {
            id : "0", name : "distant metastasis not applicable"
          } ],
          id : "0", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "0", name : "Pancreas Exocrine tumor",
      optional : false,
      organ_group : "Gastrointestinal",
      properties : [ {
        id : "0", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Pancreaticoduodenectomy (Whipple resection), partial pancreatectomy"
          }, {
            id : "0", name : "Pancreaticoduodenectomy (Whipple resection), total pancreatectomy"
          }, {
            id : "0", name : "Partial pancreatectomy, pancreatic body "
          }, {
            id : "0", name : "Partial pancreatectomy, pancreatic tail"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Pancreatic head"
          }, {
            id : "0", name : "Uncinate process"
          }, {
            id : "0", name : "Pancreatic body"
          }, {
            id : "0", name : "Pancreatic tail"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Adenocarcinoma"
          }, {
            id : "0", name : "Ductal adenocarcinoma "
          }, {
            id : "0", name : "Colloid carcinoma (mucinous noncystic carcinoma) "
          }, {
            id : "0", name : "Signet-ring cell carcinoma "
          }, {
            id : "0", name : "Adenosquamous carcinoma"
          }, {
            id : "0", name : "Intraductal papillary-mucinous carcinoma with an associated invasive carcinoma "
          }, {
            id : "0", name : "Mucinous cystic neoplasm with an associated invasive carcinoma"
          }, {
            id : "0", name : "Large cell neuroendocrine carcinoma"
          }, {
            id : "0", name : "Small cell neuroendocrine carcinoma"
          }, {
            id : "0", name : "Undifferentiated (anaplastic) carcinoma"
          }, {
            id : "0", name : "Undifferentiated carcinoma with osteoclast-like giant cells"
          }, {
            id : "0", name : "Acinar cell carcinoma "
          }, {
            id : "0", name : "Acinar cell cystadenocarcinoma"
          }, {
            id : "0", name : "Serous cystadenocarcinoma"
          }, {
            id : "0", name : "Mixed acinar-ductal carcinoma"
          }, {
            id : "0", name : "Mixed ductal-neuroendocrine carcinoma"
          }, {
            id : "0", name : "Mixed acinar-neuroendocrine carcinoma"
          }, {
            id : "0", name : "Mixed acinar-neuroendocrine-ductal carcinoma"
          }, {
            description : "nuclear B-catenin +, cyto E-cad -, PR +, CD10+, Chr -, Syn +/-",
            id : "0", name : "Solid-pseudopapillary neoplasm "
          }, {
            id : "0", name : "Hepatoid carcinoma"
          }, {
            id : "0", name : "Medullary carcinoma"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Grade 1/3, Well differentiated"
          }, {
            id : "0", name : "Grade 2/3, Moderately differentiated"
          }, {
            id : "0", name : "Grade 3/3, Poorly differentiated"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "No evidence of primary tumor"
          }, {
            id : "0", name : "Carcinoma in situ"
          }, {
            id : "0", name : "Tumor is limited to pancreas"
          }, {
            id : "0", name : "Tumor invades ampulla of Vater or sphincter of Oddi "
          }, {
            id : "0", name : "Tumor invades duodenal wall "
          }, {
            id : "0", name : "Tumor invades peripancreatic soft tissues  "
          }, {
            description : "which",
            inputs_required : [ "" ],
            id : "0", name : "Tumor invades other adjacent organs or structures  "
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "include distance/location of closest proximal/distal/radial/bile duct/uncinate/pancreatic margin",
        id : "0", name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "0", name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Positive"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Treatment effect, primary site",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "No prior treatment"
          }, {
            id : "0", name : "Present (score 1-2)"
          }, {
            id : "0", name : "Poor or no response, score 3"
          }, {
            id : "0", name : "Indeterminate"
          }, {
            id : "0", name : "Not applicable"
          }, {
            id : "0", name : "Not known"
          }  ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Indeterminate"
          }, {
            id : "0", name : "Suspicious"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Present, extensive"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Perineural invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Equivocal"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "0", name : ""
          }, {
            description : "pathologic",
            id : "0", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "0", name : "m"
          }, {
            description : "recurrent",
            id : "0", name : "r"
          }, {
            description : "post-treatment",
            id : "0", name : "y"
          }, {
            id : "0", name : "mp"
          }, {
            id : "0", name : "rp"
          }, {
            id : "0", name : "yp"
          }, {
            id : "0", name : "mrp"
          }, {
            id : "0", name : "myp"
          }, {
            id : "0", name : "ryp"
          }, {
            id : "0", name : "mryp"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            id : "0", name : "TX"
          }, {
            description : "No tumor",
            id : "0", name : "T0"
          }, {
            description : "Carcinoma in situ including intraductal tumor",
            id : "0", name : "Tis"
          }, {
            description : " <= 0.5 cm ",
            id : "0", name : "T1a"
          }, {
            description : " > 0.5cm AND <= 1cm ",
            id : "0", name : "T1b"
          }, {
            description : " >1 cm AND <=2 cm  ",
            id : "0", name : "T1c"
          }, {
            description : "> 2 cm and <=4cm",
            id : "0", name : "T2"
          }, {
            description : "> 4cm",
            id : "0", name : "T3"
          }, {
            description : "Tumor involves the celiac axis or the superior mesenteric artery and or common hepatic artery ",
            id : "0", name : "T4"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "0", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "0", name : "N0"
          }, {
            description : "1-3 Metastases to regional lymph nodes",
            id : "0", name : "N1"
          }, {
            description : "4 or more Metastases to regional lymph nodes",
            id : "0", name : "N2"
          } ],
          id : "0", name : "Category (pN)"
        }, {
          group : [ {
            description : "Distant metastases",
            id : "0", name : "M1"
          }, {
            id : "0", name : "M (not applicable)"
          }, {
            id : "0", name : "distant metastasis not applicable"
          } ],
          id : "0", name : ""
        } ]
       }, {
         description: "adenocarcinoma only",
        id : "0", name : "MSI IHC and Interpretation",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Intact nuclear expression of MMR proteins (MLH1, MSH2, MSH6, PMS2): No evidence of deficient mismatch repair (low probability of MSI-H)"
          },{
            id : "0", name : "Loss of nuclear expression of one or more MMR proteins (MLH1, MSH2, MSH6, PMS2): deficient mismatch repair/ high probability of microsatellite instability-high (MSI-H). The presence of MSI-H/deficient mismatch repair may also be an indication for additional testing for Lynch syndrome and genetic counselling."
          }, {
            id : "0", name : "Pending"
          }, {
            id : "0", name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            id : "0", name : "See case "
          }],
          id : "0", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "0", name : "Penis",
      optional : false,
      organ_group : "Genitourinary",
      properties : [ {
        id : "0", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Incisional biopsy"
          }, {
            id : "0", name : "Excisional biopsy"
          }, {
            id : "0", name : "Partial penectomy"
          }, {
            id : "0", name : "Total penectomy"
          }, {
            id : "0", name : "Circumcision"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Foreskin",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Equivocal"
          } ],
          id : "0", name : ""
        } ]
     
      }, {
        id : "0", name : "Tumor location ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Glans"
          }, {
            id : "0", name : "Foreskin mucosal surface"
          }, {
            id : "0", name : "Foreskin skin surface"
          }, {
            id : "0", name : "Coronal sulcus  "
          }, {
            id : "0", name : "Skin of the shaft"
          }, {
            id : "0", name : "Penile urethra"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "0", name : ""
        } ]
      
      }, {
        id : "0", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Squamous cell carcinoma "
          }, {
            id : "0", name : "Squamous cell carcinoma, pseudohyperplastic"
          }, {
            id : "0", name : "Squamous cell carcinoma, pseudoglandular"
          }, {
            id : "0", name : "Squamous cell carcinoma, verrucous"
          }, {
            id : "0", name : "Squamous cell carcinoma, carcinoma cuniculatum"
          }, {
            id : "0", name : "Squamous cell carcinoma, papillary"
          }, {
            id : "0", name : "Squamous cell carcinoma, verrucous"
          }, {
            id : "0", name : "Squamous cell carcinoma, sarcomatoid"
          }, {
            id : "0", name : "Squamous cell carcinoma, basaloid"
          }, {
            id : "0", name : "Squamous cell carcinoma, papillary-basaloid"
          }, {
            id : "0", name : "Squamous cell carcinoma, warty"
          }, {
            id : "0", name : "Squamous cell carcinoma, warty-basaloid"
          }, {
            id : "0", name : "Squamous cell carcinoma, clear cell"
          }, {
            id : "0", name : "Squamous cell carcinoma, lymphoepithelioma-like"
          }, {
            id : "0", name : "Adenosquamous carcinoma"
          }, {
            id : "0", name : "Paget’s disease"
          }, {
            id : "0", name : "Adnexal carcinoma "
          }, {
            id : "0", name : "Clear cell carcinoma"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Grade 1/3, Well differentiated"
          }, {
            id : "0", name : "Grade 2/3, Moderately differentiated"
          }, {
            id : "0", name : "Grade 3/3, Poorly differentiated"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            
            id : "0", name : "No evidence of primary tumor"
          }, {
          
            id : "0", name : "Carcinoma in situ"
          }, {
           
            id : "0", name : "Noninvasive localized squamous cell carcinoma "
          }, {
          
            id : "0", name : "Tumor invades lamina propria"
          }, {
          
            id : "0", name : "Tumor invades dermis  "
          }, {
          
            id : "0", name : "Tumor involves dartos"
          }, {
           
            id : "0", name : "Tumor invades corpus spongiosum"
          }, {
          
            id : "0", name : "Tumor invades corpus cavernosum"
          }, {
           
            id : "0", name : "Tumor invades tunica albuginea "
          }, {
            
            id : "0", name : "Tumor invades Buck’s fascia "
          }, {
            
            id : "0", name : "Tumor invades penile (distal) urethra"
          }, {
          
            id : "0", name : "Tumor invades regional skin (pubis, inguinal)"
          }, {
            description : "scrotum, prostate, pubic bone",
             inputs_required : [ "" ],
            id : "0", name : "Tumor invades into adjacent structures "
          }, {
            description : "specify",
            inputs_required : [ "" ],
            id : "0", name : "Tumor invades other structures "
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "urethral, periurethral tissues, corpus cavernosum, Bucks fascia, skin, coronal sulcus",
        id : "0", name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Positive"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
   }, {
        id : "0", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Indeterminate"
          }, {
            id : "0", name : "Suspicious"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Present, extensive"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Perineural invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Equivocal"
          } ],
          id : "0", name : ""
        } ]
  
       }, {
        id : "0", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ] 
  
  }, {
        id : "0", name : "Lymph nodes, # inguinal involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ] 
  
  }, {
        id : "0", name : "Positive inguinal lymph node laterality",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Not applicable"
          }, {
            id : "0", name : "Right"
          }, {
            id : "0", name : "Left"
          }, {
            id : "0", name : "Bilateral"
          }, {
            id : "0", name : "Other"
          } ],
          id : "0", name : ""
        } ]
         
      }, {
        id : "0", name : "Extranodal Extension ",
        optional_state : "required",
        "options" : [ {
          group : [ {
            id : "0", name : "Not applicable"
          }, {
            id : "0", name : "None"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Equivocal"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "0", name : ""
          }, {
            description : "pathologic",
            id : "0", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "0", name : "m"
          }, {
            description : "recurrent",
            id : "0", name : "r"
          }, {
            description : "post-treatment",
            id : "0", name : "y"
          }, {
            id : "0", name : "mp"
          }, {
            id : "0", name : "rp"
          }, {
            id : "0", name : "yp"
          }, {
            id : "0", name : "mrp"
          }, {
            id : "0", name : "myp"
          }, {
            id : "0", name : "ryp"
          }, {
            id : "0", name : "mryp"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            id : "0", name : "TX"
          }, {
            description : "noninvasive papillary or verrucous",
            id : "0", name : "Ta"
          }, {
            description : "CIS",
            id : "0", name : "Tis"
          }, {
            description : "Noninvasive verrucous carcinoma ",
            id : "0", name : "Ta"
          }, {
            description : "Tumor invades subepithelial connective tissue: Glans: Tumor invades lamina propria, Foreskin: Tumor invades dermis, lamina propria, or dartos fascia, Shaft: Tumor invades connective tissue between epidermis and corpora regardless of location, all without lymph vascular invasion, without perineural invasion, and is not poorly differentiated (ie, grade 3-4)",
            id : "0", name : "T1a"
          }, {
            description : "Tumor invades subepithelial connective tissue:  Glans: Tumor invades lamina propria, Foreskin: Tumor invades dermis, lamina propria, or dartos fascia, Shaft: Tumor invades connective tissue between epidermis and corpora regardless of location, with either lymph vascular invasion, or perineural invasion, or is poorly differentiated",
            id : "0", name : "T1b"
          }, {
            description : "Tumor invades corpus spongiosum",
            id : "0", name : "T2"
          }, {
            description : "Tumor invades corpus cavernosum",
            id : "0", name : "T3"
          }, {
            description : "Tumor invades other adjacent structures (scrotum, prostate, bone)(urethra does not count (still T3)",
            id : "0", name : "T4"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "0", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "0", name : "N0"
          }, {
            description : "Metastasis in a 1-2 unilateral inguinal lymph node, no extranodal extension",
            id : "0", name : "N1"
          }, {
            description : "Metastasis in 3 or more unilateral inguinal lymph nodes or any bilateral inguinal metastases, no extranodal extension",
            id : "0", name : "N2"
          }, {
            description : "Extranodal extension of lymph node metastasis or pelvic lymph node(s) unilateral or bilateral",
            id : "0", name : "N3"
          } ],
          id : "0", name : "Category (pN)"
        }, {
          group : [ {
            description : "metastases",
            id : "0", name : "M1"
          }, {
            id : "0", name : "M (not applicable)"
          }, {
            id : "0", name : "distant metastasis not applicable"
          } ],
          id : "0", name : ""
        } ]
       }, {
        description : "p16, HPV",
        id : "0", name : "Ancillary studies ordered",
       optional_state  : "required", "options" : [ {
          id : "0", name : ""
        } ]  
      } ]
    }, {
      most_common : false,
      id : "0", name : "Perihilar Bile Ducts",
      optional : false,
      organ_group : "Gastrointestinal",
      properties : [  {
        id : "0", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Hilar and hepatic resection"
          }, {
            id : "0", name : "Segmental resection of bile ducts(s)"
          }, {
            id : "0", name : "Choledochal cyst resection "
          }, {
            id : "0", name : "Total hepatectomy "
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Right hepatic duct"
          }, {
            id : "0", name : "Left hepatic duct "
          }, {
            id : "0", name : "Junction of right and left hepatic ducts "
          }, {
            id : "0", name : "Cystic duct "
          }, {
            id : "0", name : "Common hepatic duct "
          }, {
            id : "0", name : "Common bile duct "
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Adenocarcinoma"
          }, {
            id : "0", name : "Adenocarcinoma, intestinal type"
          }, {
            id : "0", name : "Adenocarcinoma, biliary type"
          }, {
            id : "0", name : "Adenocarcinoma, gastric foveolar type"
          }, {
            id : "0", name : "Intraductal papillary neoplasm with an associated invasive carcinoma"
          }, {
            id : "0", name : "Mucinous cystic neoplasm with an associated invasive carcinoma"
          }, {
            id : "0", name : "Mucinous adenocarcinoma"
          }, {
            id : "0", name : "Clear cell adenocarcinoma"
          }, {
            id : "0", name : "Signet-ring cell carcinoma"
          }, {
            id : "0", name : "Large cell neuroendocrine carcinoma "
          }, {
            id : "0", name : "Small cell neuroendocrine carcinoma"
          }, {
            id : "0", name : "Neuroendocrine carcinoma (poorly differentiated)"
          }, {
            id : "0", name : "Adenosquamous carcinoma"
          }, {
            id : "0", name : "Squamous cell carcinoma"
          }, {
            id : "0", name : "Mixed adenoneuroendocrine carcinoma"
          }, {
            id : "0", name : "Undifferentiated carcinoma"
          }  ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Grade 1/3, well differentiated"
          }, {
            id : "0", name : "Grade 2/3, moderately differentiated"
          }, {
            id : "0", name : "Grade 3/3, poorly differentiated"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Carcinoma in situ "
          }, {
            id : "0", name : "Tumor limited to the bile duct histologically"
          }, {
            id : "0", name : "Tumor invades beyond the wall of the bile duct into surrounding connective tissue "
          }, {
            id : "0", name : "Tumor invades the adjacent liver parenchyma"
          }, {
            id : "0", name : "Invades the gallbladder"
          }, {
            id : "0", name : "Tumor invades the unilateral branches of the portal vein (right or left) "
          }, {
            id : "0", name : "Tumor invades the unilateral branches of the hepatic artery (right or left) "
          }, {
            id : "0", name : "Tumor invades main portal vein or its branches bilaterally "
          }, {
            id : "0", name : "Tumor invades common hepatic artery "
          }, {
            id : "0", name : "Tumor invades second-order biliary radicals, unilateral"
          }, {
            id : "0", name : "Tumor invades second-order biliary radicals, bilaterall"
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "include distance/location of closest proximal/distal/radial/bile duct/hepatic margin",
        id : "0", name : "Margins, invasive tumor",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "0", name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Positive"
          }],
          id : "0", name : ""
        } ]
      }, {
        description : "include distance/location of closest proximal/distal bile duct margin",
        id : "0", name : "Margins, dysplasia/CIS",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "0", name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Positive"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Indeterminate"
          }, {
            id : "0", name : "Suspicious"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Present, extensive"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Perineural invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Equivocal"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "0", name : ""
          }, {
            description : "pathologic",
            id : "0", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "0", name : "m"
          }, {
            description : "recurrent",
            id : "0", name : "r"
          }, {
            description : "post-treatment",
            id : "0", name : "y"
          }, {
            id : "0", name : "mp"
          }, {
            id : "0", name : "rp"
          }, {
            id : "0", name : "yp"
          }, {
            id : "0", name : "mrp"
          }, {
            id : "0", name : "myp"
          }, {
            id : "0", name : "ryp"
          }, {
            id : "0", name : "mryp"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            id : "0", name : "TX"
          }, {
            description : "Carcinoma in situ",
            id : "0", name : "Tis"
          }, {
            description : "Tumor limited to the bile duct, with extension up to the muscle layer or fibrous tissue ",
            id : "0", name : "T1"
          }, {
            description : "Tumor invades beyond the wall of the bile duct to surrounding adipose tissue ",
            id : "0", name : "T2a"
          }, {
            description : "Tumor invades adjacent hepatic parenchyma ",
            id : "0", name : "T2b"
          }, {
            description : "Tumor invades unilateral branches of the portal vein or hepatic artery ",
            id : "0", name : "T3"
          }, {
            description : "Tumor invades main portal vein or its branches bilaterally; or the common hepatic artery; or the second-order biliary radicals bilaterally; or unilateral second-order biliary radicals with contralateral portal vein or hepatic artery involvement",
            id : "0", name : "T4"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "0", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "0", name : "N0"
          }, {
            description : "1-3 positive lymph nodes ",
            id : "0", name : "N1"
          }, {
            description : "4 or more positive lymph nodes",
            id : "0", name : "N2"
          } ],
          id : "0", name : "Category (pN)"
        }, {
          group : [ {
            description : "Distant metastases",
            id : "0", name : "M1"
          }, {
            id : "0", name : "M (not applicable)"
          }, {
            id : "0", name : "distant metastasis not applicable"
          } ],
          id : "0", name : ""
        } ]
        }, {
          description: "adenocarcinoma only",
        id : "0", name : "MSI IHC and Interpretation",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Intact nuclear expression of MMR proteins (MLH1, MSH2, MSH6, PMS2): No evidence of deficient mismatch repair (low probability of MSI-H)"
          },{
            id : "0", name : "Loss of nuclear expression of one or more MMR proteins (MLH1, MSH2, MSH6, PMS2): deficient mismatch repair/ high probability of microsatellite instability-high (MSI-H). The presence of MSI-H/deficient mismatch repair may also be an indication for additional testing for Lynch syndrome and genetic counselling."
          }, {
            id : "0", name : "Pending"
          }, {
            id : "0", name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            id : "0", name : "See case "
          }],
          id : "0", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "0", name : "Oropharynx, Nasopharynx, and Hypopharynx, (p16-)",
      optional : false,
      organ_group : "Head and Neck",
      properties : [  {
        id : "0", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Excisional biopsy"
          }, {
            id : "0", name : "Tonsillectomy "
          }, {
            id : "0", name : "Laryngopharyngectomy"
          }, {
            id : "0", name : "Tonsillectomy and neck (lymph node) dissection "
          }, {
            id : "0", name : "Laryngopharyngectomy and neck (lymph node) dissection "
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Right oropharynx"
          }, {
            id : "0", name : "Right nasopharynx"
          }, {
            id : "0", name : "Right hypopharynx"
          }, {
            id : "0", name : "Left oropharynx"
          }, {
            id : "0", name : "Left nasopharynx"
          }, {
            id : "0", name : "Left hypopharynx"
          }, {
            id : "0", name : "Bilateral oropharynx"
          }, {
            id : "0", name : "Bilateral nasopharynx"
          }, {
            id : "0", name : "Bilateral hypopharynx"
          }, {
            id : "0", name : "Midline oropharynx"
          }, {
            id : "0", name : "Midline nasopharynx"
          }, {
            id : "0", name : "Midline hypopharynx"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor focality",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Single focus"
          }, {
            id : "0", name : "Multiple foci"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Squamous cell carcinoma, keratinizing"
          }, {
            id : "0", name : "Squamous cell carcinoma, non-keratinizing"
          }, {
            id : "0", name : "Acantholytic squamous cell carcinoma"
          }, {
            id : "0", name : "Adenosquamous carcinoma"
          }, {
            id : "0", name : "Basaloid squamous cell carcinoma"
          }, {
            id : "0", name : "Papillary squamous cell carcinoma"
          }, {
            id : "0", name : "Spindle cell squamous carcinoma"
          }, {
            id : "0", name : "Verrucous carcinoma"
          }, {
            id : "0", name : "Lymphoepithelial carcinoma (non-nasopharyngeal)"
          }, {
            id : "0", name : "Nasopharyngeal papillary adenocarcinoma"
          }, {
            id : "0", name : "Adenocarcinoma"
          }, {
            id : "0", name : "Basal cell adenocarcinoma"
          }, {
            id : "0", name : "Carcinoma ex pleomorphic adenoma (malignant mixed tumor)"
          }, {
            id : "0", name : "Clear cell adenocarcinoma"
          }, {
            id : "0", name : "Cystadenocarcinoma"
          }, {
            id : "0", name : "Epithelial-myoepithelial carcinoma"
          }, {
            id : "0", name : "Mucoepidermoid carcinoma"
          }, {
            id : "0", name : "Mucinous adenocarcinoma (colloid carcinoma)"
          }, {
            id : "0", name : "Myoepithelial carcinoma (malignant myoepithelioma)"
          }, {
            id : "0", name : "Oncocytic carcinoma"
          }, {
            id : "0", name : "Polymorphous low-grade adenocarcinoma"
          }, {
            id : "0", name : "Salivary duct carcinoma"
          }, {
            id : "0", name : "Typical carcinoid tumor (well differentiated neuroendocrine carcinoma)"
          }, {
            id : "0", name : "Atypical carcinoid tumor (moderately differentiated neuroendocrine carcinoma)"
          }, {
            id : "0", name : "Small cell carcinoma (poorly differentiated neuroendocrine carcinoma)"
          }, {
            id : "0", name : "Combined (or composite) small cell carcinoma, neuroendocrine type"
          }, {
            id : "0", name : "Mucosal malignant melanoma"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Grade 1/3, Well differentiated"
          }, {
            id : "0", name : "Grade 2/3, Moderately differentiated"
          }, {
            id : "0", name : "Grade 3/3, Poorly differentiated"
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "include distance/location of closest margin",
        id : "0", name : "Margins, invasive tumor",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "0", name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Positive"
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "include distance/location of closest margin",
        id : "0", name : "Margins, dysplasia/CIS",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "0", name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Positive"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Indeterminate"
          }, {
            id : "0", name : "Suspicious"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Present, extensive"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Perineural invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Equivocal"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Positive node laterality",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Not applicable"
          }, {
            id : "0", name : "Ipsilateral, including midline"
          }, {
            id : "0", name : "Contralateral"
          }, {
            id : "0", name : "Bilateral"
          }, {
            id : "0", name : "Indeterminate"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Size of largest involved lymph node",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Extranodal Extension ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Not applicable"
          }, {
            id : "0", name : "None"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Equivocal"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "0", name : ""
          }, {
            description : "pathologic",
            id : "0", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "0", name : "m"
          }, {
            description : "recurrent",
            id : "0", name : "r"
          }, {
            description : "post-treatment",
            id : "0", name : "y"
          }, {
            id : "0", name : "mp"
          }, {
            id : "0", name : "rp"
          }, {
            id : "0", name : "yp"
          }, {
            id : "0", name : "mrp"
          }, {
            id : "0", name : "myp"
          }, {
            id : "0", name : "ryp"
          }, {
            id : "0", name : "mryp"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            id : "0", name : "TX"
          }, {
            description : "OROPHARYNX CARCINOMA, Tumor 2 cm or less in greatest dimension ",
            id : "0", name : "T1"
          }, {
            description : "OROPHARYNX CARCINOMA, Tumor more than 2 cm but not more than 4 cm in greatest dimension without fixation of hemilarynx ",
            id : "0", name : "T2"
          }, {
            description : "OROPHARYNX CARCINOMA, Tumor more than 4 cm in greatest dimension or with fixation of hemilarynx or extension to lingual surface of epiglottis",
            id : "0", name : "T3"
          }, {
            description : "OROPHARYNX CARCINOMA, Moderately advanced local disease. Tumor invades larynx, deep/extrinsic muscle of tongue, medial pterygoid muscles, hard palate, or mandible",
            id : "0", name : "T4a"
          }, {
            description : "OROPHARYNX CARCINOMA, Very advanced local disease. Tumor invades lateral pterygoid muscle, pterygoid plates, lateral nasopharynx, or skull base, or encases carotid artery",
            id : "0", name : "T4b"
          }, {
            description : " NASOPHARYNX Tumor confined to nasopharynx, or extension to oropharynx and/or nasal cavity without parapharyngeal involvement ",
            id : "0", name : "T1"
          }, {
            description : "NASOPHARYNX Tumor with extension to parapharyngeal space, and/or adjacent soft tissue involvement (medial pterygoid, lateral pterygoid, prevertebral muscles) ",
            id : "0", name : "T2"
          }, {
            description : "NASOPHARYNX Tumor with infiltration of bony structures at skull base, cervical vertebra, pterygoid structures, and/or paranasal sinuses ",
            id : "0", name : "T3"
          }, {
            description : "NASOPHARYNX Tumor with intracranial extension, involvement of cranial nerves, hypopharynx, orbit, parotid gland, and/or extensive soft tissue infiltration beyond the lateral surface of the lateral pterygoid muscle",
            id : "0", name : "T4"
          }, {
            description : "HYPOPHARYNX CARCINOMA, Tumor limited to one subsite of hypopharynx and/or 2 cm or less in greatest dimension ",
            id : "0", name : "T1"
          }, {
            description : "HYPOPHARYNX CARCINOMA, Tumor invades more than one subsite of hypopharynx or an adjacent site, or measures more than 2 cm but not more than 4 cm in greatest dimension without fixation of hemilarynx",
            id : "0", name : "T2"
          }, {
            description : "HYPOPHARYNX CARCINOMA, Tumor measures more than 4 cm in greatest dimension or with fixation of hemilarynx or extension to esophagus",
            id : "0", name : "T3"
          }, {
            description : "HYPOPHARYNX CARCINOMA, Moderately advanced local disease. Tumor invades thyroid/cricoid cartilage, hyoid bone, thyroid gland, or central compartment soft tissue",
            id : "0", name : "T4a"
          }, {
            description : "HYPOPHARYNX CARCINOMA, Very advanced local disease. Tumor invades prevertebral fascia, encases carotid artery, or involves mediastinal structures",
            id : "0", name : "T4b"
          }, {
            description : "MELANOMA, Mucosal disease",
            id : "0", name : "T3"
          }, {
            description : "MELANOMA, Moderately advanced disease. Tumor involving deep soft tissue, cartilage, bone, or overlying skin. ",
            id : "0", name : "T4a"
          }, {
            description : "MELANOMA, Very advanced disease. Tumor involving brain, dura, skull base, lower  cranial nerves (IX, X, XI, XII), masticator space, carotid artery, prevertebral  space, or mediastinal structures",
            id : "0", name : "T4b"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "0", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "0", name : "N0"
          }, {
            description : "ORO- AND HYPOPHARYNX Metastasis in a single ipsilateral lymph node, 3 cm or less in greatest dimensiona and no extranodal extension",
            id : "0", name : "N1"
          }, {
            description : "ORO- AND HYPOPHARYNX( Metastasis in a single ipsilateral or contralateral  lymph node <= 3 cm AND extranodal extension) OR (single ipsilateral lymph node >3 cm AND not more than 6 cm in greatest dimension AND no extranodal extension) ",
            id : "0", name : "N2a"
          }, {
            description : "ORO- AND HYPOPHARYNX Metastasis in multiple ipsilateral lymph nodes, none more than 6 cm in greatest dimension AND no extranodal extension",
            id : "0", name : "N2b"
          }, {
            description : "ORO- AND HYPOPHARYNX Metastasis in bilateral or contralateral lymph nodes, none more than 6 cm in greatest dimension AND no extranodal extension",
            id : "0", name : "N2c"
          }, {
            description : "ORO- AND HYPOPHARYNX Metastasis in a lymph node more than 6 cm in greatest dimension adn no extranodal extension",
            id : "0", name : "N3a"
          }, {
            description : "ORO- AND HYPOPHARYNX (Metastasis in a lymph noe >3 cm in greatest dimension AND extranodal extension) OR (multiple nodes AND extranodal extension) OR (single contralateral node <=3cm AND extranodal extension)",
            id : "0", name : "N3b"
          }, {
            description : " NASOPHARYNX Metastasis in one or more ipsilateral lymph node, 6 cm or less in greatest dimension",
            id : "0", name : "N1"
          }, {
            description : " NASOPHARYNX Metastasis in contralateral or bilateral lymph node,  6 cm or less in greatest dimension ",
            id : "0", name : "N2"
          }, {
            description : " NASOPHARYNX Metastasis in a lymph node more than 6 cm in greatest dimension",
            id : "0", name : "N3"
          }, {
            description : "MELANOMA, regional metastases",
            id : "0", name : "N1"
          } ],
          id : "0", name : "Category (pN)"
        }, {
          group : [ {
            description : "metastases",
            id : "0", name : "M1"
          }, {
            id : "0", name : "M (not applicable)"
          }, {
            id : "0", name : "distant metastasis not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "p16 Immunohistochemistry ",
       optional_state  : "required", "options" : [ {
          group : [  {
            id : "0", name : "Negative "
          }, {
            id : "0", name : "Equivocal"
          }, {
            id : "0", name : "Not applicable "
          }, {
            id : "0", name : "Not performed"
          }, {
            id : "0", name : "Pending"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "HPV ISH ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Positive "
          }, {
            id : "0", name : "Negative "
          }, {
            id : "0", name : "Equivocal"
          }, {
            id : "0", name : "Not applicable "
          }, {
            id : "0", name : "Not performed"
          }, {
            id : "0", name : "Pending"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "HPV PCR ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Positive "
          }, {
            id : "0", name : "Negative "
          }, {
            id : "0", name : "Equivocal"
          }, {
            id : "0", name : "Not applicable "
          }, {
            id : "0", name : "Not performed"
          }, {
            id : "0", name : "Pending"
          } ],
          id : "0", name : ""
        } ]
      } ]
  }, {
      most_common : false,
      id : "0", name : "Oropharynx and Nasopharynx, p16+ (HPV mediated)",
      optional : false,
      organ_group : "Head and Neck",
      properties : [  {
        id : "0", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Excisional biopsy"
          }, {
            id : "0", name : "Tonsillectomy "
          }, {
            id : "0", name : "Laryngopharyngectomy"
          }, {
            id : "0", name : "Tonsillectomy and neck (lymph node) dissection "
          }, {
            id : "0", name : "Laryngopharyngectomy and neck (lymph node) dissection "
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Right oropharynx"
          }, {
            id : "0", name : "Right nasopharynx"
          }, {
            id : "0", name : "Right hypopharynx"
          }, {
            id : "0", name : "Left oropharynx"
          }, {
            id : "0", name : "Left nasopharynx"
          }, {
            id : "0", name : "Left hypopharynx"
          }, {
            id : "0", name : "Bilateral oropharynx"
          }, {
            id : "0", name : "Bilateral nasopharynx"
          }, {
            id : "0", name : "Bilateral hypopharynx"
          }, {
            id : "0", name : "Midline oropharynx"
          }, {
            id : "0", name : "Midline nasopharynx"
          }, {
            id : "0", name : "Midline hypopharynx"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor focality",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Single focus"
          }, {
            id : "0", name : "Multiple foci"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Squamous cell carcinoma"
          }, {
            id : "0", name : "Small cell neuroendocrine carcinoma"
          }, {
            id : "0", name : "Large cell neuroendocrine carcinoma"
          } ],
          id : "0", name : ""
        } ]
    
      }, {
        description : "include distance/location of closest margin",
        id : "0", name : "Margins, invasive tumor",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "0", name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Positive"
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "include distance/location of closest margin",
        id : "0", name : "Margins, dysplasia/CIS",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "0", name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Positive"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Indeterminate"
          }, {
            id : "0", name : "Suspicious"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Present, extensive"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Perineural invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Equivocal"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Positive node laterality",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Not applicable"
          }, {
            id : "0", name : "Ipsilateral, including midline"
          }, {
            id : "0", name : "Contralateral"
          }, {
            id : "0", name : "Bilateral"
          }, {
            id : "0", name : "Indeterminate"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Size of largest involved lymph node",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Extranodal Extension ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Not applicable"
          }, {
            id : "0", name : "None"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Equivocal"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "0", name : ""
          }, {
            description : "pathologic",
            id : "0", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "0", name : "m"
          }, {
            description : "recurrent",
            id : "0", name : "r"
          }, {
            description : "post-treatment",
            id : "0", name : "y"
          }, {
            id : "0", name : "mp"
          }, {
            id : "0", name : "rp"
          }, {
            id : "0", name : "yp"
          }, {
            id : "0", name : "mrp"
          }, {
            id : "0", name : "myp"
          }, {
            id : "0", name : "ryp"
          }, {
            id : "0", name : "mryp"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            id : "0", name : "TX"
          }, {
            description : " NASOPHARYNX Tumor confined to nasopharynx, or extension to oropharynx and/or nasal cavity without parapharyngeal involvement ",
            id : "0", name : "T1"
          }, {
            description : "NASOPHARYNX Tumor with extension to parapharyngeal space, and/or adjacent soft tissue involvement (medial pterygoid, lateral pterygoid, prevertebral muscles) ",
            id : "0", name : "T2"
          }, {
            description : "NASOPHARYNX Tumor with infiltration of bony structures at skull base, cervical vertebra, pterygoid structures, and/or paranasal sinuses ",
            id : "0", name : "T3"
          }, {
            description : "NASOPHARYNX Tumor with intracranial extension, involvement of cranial nerves, hypopharynx, orbit, parotid gland, and/or extensive soft tissue infiltration beyond the lateral surface of the lateral pterygoid muscle",
            id : "0", name : "T4"
          }, {
            description : " OROPHARYNX Tumor 2 cm or less in greatest dimension ",
            id : "0", name : "T1"
          }, {
            description : "OROPHARYNX Tumor more than 2 cm but not more than 4 cm in greatest dimension ",
            id : "0", name : "T2"
          }, {
            description : "OROPHARYNX Tumor more than 4 cm in greatest dimension or extension to lingual surface of epiglottis",
            id : "0", name : "T3"
          }, {
            description : "OROPHARYNX Moderately advanced local disease. Tumor invades larynx, deep/extrinsic muscle of tongue, medial pterygoid muscles, hard palate, or mandible",
            id : "0", name : "T4"
          }],
          id : "0", name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "0", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "0", name : "N0"
          }, {
            description : " NASOPHARYNX Metastasis in one or more ipsilateral lymph node, 6 cm or less in greatest dimension",
            id : "0", name : "N1"
          }, {
            description : " NASOPHARYNX Metastasis in contralateral or bilateral lymph node,  6 cm or less in greatest dimension ",
            id : "0", name : "N2"
          }, {
            description : " NASOPHARYNX Metastasis in a lymph node more than 6 cm in greatest dimension",
            id : "0", name : "N3"
          }, {
            description : " OROPHARYNX Metastasis in 4 or fewer lymph nodes",
            id : "0", name : "N1"
          }, {
            description : " OROPHARYNX Metastasis in more than 4 lymph nodes ",
            id : "0", name : "N2"
          }],
          id : "0", name : "Category (pN)"
        }, {
          group : [ {
            description : "metastases",
            id : "0", name : "M1"
          }, {
            id : "0", name : "M (not applicable)"
          }, {
            id : "0", name : "distant metastasis not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "p16 Immunohistochemistry ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Positive "
          }],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "HPV ISH ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Positive "
          }, {
            id : "0", name : "Negative "
          }, {
            id : "0", name : "Equivocal"
          }, {
            id : "0", name : "Not applicable "
          }, {
            id : "0", name : "Not performed"
          }, {
            id : "0", name : "Pending"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "HPV PCR ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Positive "
          }, {
            id : "0", name : "Negative "
          }, {
            id : "0", name : "Equivocal"
          }, {
            id : "0", name : "Not applicable "
          }, {
            id : "0", name : "Not performed"
          }, {
            id : "0", name : "Pending"
          } ],
          id : "0", name : ""
        } ]
      } ]
  
    }, {
      most_common : true,
      id : "0", name : "Prostate, prostatectomy",
      optional : false,
      organ_group : "Genitourinary",
      properties : [ {
        id : "0", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Radical prostatectomy"
          }, {
            id : "0", name : "Cystoprostatectomy"
          } ],
          id : "0", name : ""
        } ]
     
      }, {
        id : "0", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Adenocarcinoma"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Gleason primary pattern",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Grade 3"
          }, {
            id : "0", name : "Grade 4"
          }, {
            id : "0", name : "Grade 5"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Gleason secondary pattern",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Grade 3"
          }, {
            id : "0", name : "Grade 4"
          }, {
            id : "0", name : "Grade 5"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Gleason tertiary pattern",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Grade 3"
          }, {
            id : "0", name : "Grade 4"
          }, {
            id : "0", name : "Grade 5"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Gleason score",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Score 6"
          }, {
            id : "0", name : "Score 7"
          }, {
            id : "0", name : "Score 8"
          }, {
            id : "0", name : "Score 9"
          }, {
            id : "0", name : "Score 10"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
       }, {
        id : "0", name : "Grade group",
       optional_state  : "required", "options" : [ {
          group : [ {
             description : "Gleason 6",
            id : "0", name : "Group 1"
          }, {
             description : "Gleason 3+4",
            id : "0", name : "Group 2"
          }, {
             description : "Gleason 4+3",
            id : "0", name : "Group 3"
          }, {
             description : "Gleason 8",
            id : "0", name : "Group 4"
          }, {
             description : "Gleason 9 & 10",
            id : "0", name : "Group 5"
          }, {
           
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]  
      }, {
        id : "0", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Extraprostatic extension",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            description : "less than 1 high-power field in 1 or 2 sections,location",
            inputs_required : [ "" ],
            id : "0", name : "Present, focal"
          }, {
            description : "more than 1 high-power field in 1 or 2 sections,location",
            inputs_required : [ "" ],
            id : "0", name : "Present, nonfocal"
          }, {
            id : "0", name : "Equivocal"
          } ],
          id : "0", name : ""
        } ]
        }, {
           description : "involves thick muscle bundles that do not have normal prostate glands in them, does not need to be + margin",
        id : "0", name : "Urinary bladder neck invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Equivocal"
          } ],
          id : "0", name : ""
        } ]  
      }, {
        id : "0", name : "Seminal vesicle invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Equivocal"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Free"
          }, {
            description : "< 3mm, location",
            inputs_required : [ "" ],
            id : "0", name : "Positive, focal"
          }, {
            description : ">= 3mm, location",
            inputs_required : [ "" ],
            id : "0", name : "Positive, nonfocal"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Positive"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Treatment effect, primary site",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Not applicable"
          }, {
            id : "0", name : "Not known"
          }  ],
          id : "0", name : ""
        } ]
     
      }, {
        id : "0", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
    
        
      }, {
        id : "0", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "0", name : ""
          }, {
            description : "pathologic",
            id : "0", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "0", name : "m"
          }, {
            description : "recurrent",
            id : "0", name : "r"
          }, {
            description : "post-treatment",
            id : "0", name : "y"
          }, {
            id : "0", name : "mp"
          }, {
            id : "0", name : "rp"
          }, {
            id : "0", name : "yp"
          }, {
            id : "0", name : "mrp"
          }, {
            id : "0", name : "myp"
          }, {
            id : "0", name : "ryp"
          }, {
            id : "0", name : "mryp"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            id : "0", name : "TX"
          }, {
            description : "organ limited",
            id : "0", name : "T2"
          }, {
            description : "Extraprostatic extension or invasion of bladder neck",
            id : "0", name : "T3a"
          }, {
            description : "Seminal vesicle invasion",
            id : "0", name : "T3b"
          }, {
            description : "Invades rectum or pelvis",
            id : "0", name : "T4"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "0", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "0", name : "N0"
          }, {
            description : "Regional lymph nodes involved",
            id : "0", name : "N1"
          } ],
          id : "0", name : "Category (pN)"
        }, {
          group : [ {
            description : "metastases to non regional nodes",
            id : "0", name : "M1a"
          }, {
              description : "metastases to bone",
            id : "0", name : "M1b"
          }, {
              description : "metastases to other sites",
            id : "0", name : "M1c"
          }, {
            id : "0", name : "M (not applicable)"
          }, {
            id : "0", name : "distant metastasis not applicable"
          } ],
          id : "0", name : ""
        } ]
        }, {
         description : "",
        id : "0", name : "Additional findings",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "High Grade PIN"
          }, {
            id : "0", name : "Lymphatic vascular invasion"
          }, {
            id : "0", name : "Lymphatic vascular invasion and High grade PIN"
          } ],
          id : "0", name : ""
        } ]  
      }, {
        description : "Add billing code 3267F",
        id : "0", name : "ICD10",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "C61"
          } ],
          id : "0", name : ""
        } ]
      } ]
    }, {
      biopsy_type : "Malignant",
      most_common : false,
      id : "0", name : "Prostate biopsy",
      optional : true,
      organ_group : "Genitourinary",
       properties : [ {
        id : "0", name : "Part",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : false,
          group : [{
        description : "Single specimen, no letter/part",
            id : "0", name : ""
          }, {
            id : "0", name : "A."
          }, {
            id : "0", name : "B."
          }, {
            id : "0", name : "C."
          }, {
            id : "0", name : "D."
          }, {
            id : "0", name : "E."
          }, {
            id : "0", name : "F."
          }, {
            id : "0", name : "G."
          }, {
            id : "0", name : "H."
          }, {
            id : "0", name : "I."
          }, {
            id : "0", name : "J."
          }, {
            id : "0", name : "K."
          }, {
            id : "0", name : "L."
          }, {
            id : "0", name : "M."
          }, {
            id : "0", name : "O."
          }, {
            id : "0", name : "P."
          }, {
            id : "0", name : "Q."
          }, {
            id : "0", name : "R."
          }, {
            id : "0", name : "S."
          }, {
            id : "0", name : "T."
          }, {
            id : "0", name : "U."
          } ],
          id : "0", name : ""
        } ]
      }, {
         id : "0", name : "Location",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : false,
          group : [ {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "right"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "left"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Procedure",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : false,
          group : [ {
            id : "0", name : "core needle biopsy"
          }, {
            id : "0", name : "MRI guided core needle biopsy"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Diagnosis/Type",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : false,
          group : [ {
            id : "0", name : "Prostatic adenocarcinoma"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Gleason grade",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : false,
          group : [ {
            id : "0", name : "3 + 3 = 6 (Group 1)"
          }, {
            id : "0", name : "3 + 4 = 7 (Group 2)"
          }, {
            id : "0", name : "4 + 3 = 7 (Group 3)"
          }, {
            id : "0", name : "4 + 4 = 8 (Group 4)"
          }, {
            id : "0", name : "4 + 5 = 9 (Group 5)"
          }, {
            id : "0", name : "5 + 4 = 9 (Group 5)"
          }, {
            id : "0", name : "5 + 5 = 10 (Group 5)"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
         
        id : "0", name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            inputs_required : [ [" 1 of 1 core ", "1 of 2 cores ", "2 of 2 cores", "1 of 3 cores", "2 of 3 cores", "3 of 3 cores", "Involving multiple cores"], " &nbsp; % of tissue" ],
            id : "0", name : ""
          } ],
          id : "0", name : ""
        } ]
      }, {
         description : "MULTI-SELECT",
        id : "0", name : "Additional findings",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Gleason pattern 5 is also present"
          }, {
            id : "0", name : "Gleason pattern 4 is also present"
          }, {
            id : "0", name : "Gleason pattern 3 is also present"
          }, {
            id : "0", name : "Perineural invasion is present"
          }, {
            id : "0", name : "Seminal vesicle invasion is present"
          }, {
            id : "0", name : "Periprostatic fat invasion is present"
          }, {
            id : "0", name : "Gleason pattern 5 and perineural invasion are present"
          }, {
            id : "0", name : "Gleason pattern 4 and perineural invasion are present"
          }, {
            id : "0", name : "Gleason pattern 3 and perineural invasion are present"
          } ],
          id : "0", name : ""
        } ]
      } ]
    }, {
      biopsy_type : "Other",
      most_common : false,
      id : "0", name : "Prostate biopsy",
      optional : true,
      organ_group : "Genitourinary",
      properties : [ {
        id : "0", name : "Location",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "right"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "left"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Procedure",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            id : "0", name : "core needle biopsy"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Diagnosis/Type",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            id : "0", name : "Atypical glands suspicious for carcinoma"
          }, {
            id : "0", name : "High grade prostatic intraepithelial neoplasia (HGPIN)"
          }, {
            id : "0", name : "Atypical glands suspicious for carcinoma with adjacent high grade prostatic intraepithelial neoplasia (HGPIN)"
          }, {
            id : "0", name : "Atypical glands, favor benign"
          }, {
            id : "0", name : "Benign prostate tissue"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Total # of cores",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "immunohistochemistry",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            id : "0", name : "PIN4 supports the above diagnosis"
          }, {
            id : "0", name : "PIN4/PSA support the above diagnosis"
          }, {
            id : "0", name : "PIN4/34BE12 support the above diagnosis"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "0", name : "Prostate, TURP",
      optional : true,
      organ_group : "Genitourinary",
      properties : [ {
        id : "0", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Transurethral prostatic resection"
          } ],
          id : "0", name : ""
        }, {
          id : "0", name : "Enucleation"
        } ]
      
      }, {
        id : "0", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Adenocarcinoma"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Gleason primary pattern",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Grade 3"
          }, {
            id : "0", name : "Grade 4"
          }, {
            id : "0", name : "Grade 5"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Gleason secondary pattern",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Grade 3"
          }, {
            id : "0", name : "Grade 4"
          }, {
            id : "0", name : "Grade 5"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Gleason tertiary pattern",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Grade 3"
          }, {
            id : "0", name : "Grade 4"
          }, {
            id : "0", name : "Grade 5"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Gleason score",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Score 6"
          }, {
            id : "0", name : "Score 7"
          }, {
            id : "0", name : "Score 8"
          }, {
            id : "0", name : "Score 9"
          }, {
            id : "0", name : "Score 10"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Percent of tissue invovled",
       optional_state  : "required", "options" : [ {
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Periprostatic fat invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Equivocal"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Seminal vesicle invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Equivocal"
          } ],
          id : "0", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "0", name : "Retinoblastoma",
      optional : false,
      organ_group : "Ophthalmic",
      properties : [ {
        id : "0", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Right enucleation"
          }, {
            id : "0", name : "Right partial exenteration"
          }, {
            id : "0", name : "Right complete exenteration"
          }, {
            id : "0", name : "Left enucleation"
          }, {
            id : "0", name : "Left partial exenteration"
          }, {
            id : "0", name : "Left complete exenteration"
          }  ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Superotemporal quadrant of globe"
          }, {
            id : "0", name : "Superonasal quadrant of globe"
          }, {
            id : "0", name : "Inferotemporal quadrant of globe"
          }, {
            id : "0", name : "Inferonasal quadrant of globe"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor size after sectioning",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Equivocal"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor location after sectioning",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Superotemporal"
          }, {
            id : "0", name : "Superonasal"
          }, {
            id : "0", name : "Inferotemporal"
          }, {
            id : "0", name : "Inferonasal"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor Involvement of Other Ocular Structures ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Cornea"
          }, {
            id : "0", name : "Anterior chamber"
          }, {
            id : "0", name : "Iris"
          }, {
            id : "0", name : "Angle"
          }, {
            id : "0", name : "Lens"
          }, {
            id : "0", name : "Ciliary body"
          }, {
            id : "0", name : "Vitreous "
          }, {
            id : "0", name : "Retinal detachment"
          }, {
            id : "0", name : "Optic disc"
          }, {
            id : "0", name : "Choroid, minimal (solid tumor nest less than 3 mm in maximum diameter [width or thickness])"
          }, {
            id : "0", name : "Choroid, massive (solid tumor nest 3 mm or more in maximum diameter [width or thickness]) "
          }, {
            id : "0", name : "Sclera"
          }, {
            id : "0", name : "Vortex vein"
          }, {
            id : "0", name : "Orbit"
          }, {
            id : "0", name : "Equivocal"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Growth Pattern ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Endophytic "
          }, {
            id : "0", name : "Exophytic"
          }, {
            id : "0", name : "Combined endophytic/exophytic"
          }, {
            id : "0", name : "Diffuse"
          }, {
            id : "0", name : "Anterior diffuse"
          }, {
            id : "0", name : "Equivocal"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Extent of Optic Nerve Invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Anterior to lamina cribrosa"
          }, {
            id : "0", name : "At lamina cribrosa"
          }, {
            id : "0", name : "Posterior to lamina cribrosa but not to end of nerve"
          }, {
            id : "0", name : "To cut end of optic nerve"
          }, {
            id : "0", name : "Equivocal"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "Tumor with areas of retinocytoma (fleurettes or neuronal differentiation)",
            id : "0", name : "Grade 1/4, well differentiated"
          }, {
            description : "Tumor with many rosettes (Flexner-Wintersteiner or Homer Wright)",
            id : "0", name : "Grade 2/4, moderately differentiated"
          }, {
            description : "Tumor with occasional rosettes (Flexner-Wintersteiner or Homer Wright)",
            id : "0", name : "Grade 3/4, poorly differentiated"
          }, {
            description : "Tumor with poorly differentiated cells without rosettes and/or with extensive areas (more than half of tumor) of anaplasia",
            id : "0", name : "Grade 4/4, undifferentiated"
          }, {
            id : "0", name : "Equivocal"
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "include distance/location of closest margin",
        id : "0", name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            id : "0", name : "Free"
          }, {
            description : "location, including optic nerve and extrascleral extension",
            inputs_required : [ "" ],
            id : "0", name : "Positive"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
    
        
      }, {
        id : "0", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "0", name : ""
          }, {
            description : "pathologic",
            id : "0", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "0", name : "m"
          }, {
            description : "recurrent",
            id : "0", name : "r"
          }, {
            description : "post-treatment",
            id : "0", name : "y"
          }, {
            id : "0", name : "mp"
          }, {
            id : "0", name : "rp"
          }, {
            id : "0", name : "yp"
          }, {
            id : "0", name : "mrp"
          }, {
            id : "0", name : "myp"
          }, {
            id : "0", name : "ryp"
          }, {
            id : "0", name : "mryp"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            id : "0", name : "TX"
          }, {
            description : "Intraocular tumor without any local invasion, focal choroidal invasion, or pre- or intralaminar involvement of the optic nerve head",
            id : "0", name : "T1"
          }, {
            description : "concomitant focal choroidal invasion and pre- or intralaminar involvement of the optic nerve head",
            id : "0", name : "T2a"
          }, {
            description : "Tumor invasion of stroma of iris and or trabecular meshwork and or Schlemm's canal",
            id : "0", name : "T2b"
          }, {
            description : "Massive choroidal invasion (> 3mm in largest diameter, or multiple foci of focal choroidal involvement totalling > 3mm or any full thinkness choroidal involvement)",
            id : "0", name : "T3a"
          }, {
            description : "Retrolaminar invasion of the optic nerve head, not involving the transected end of the optic nerve",
            id : "0", name : "T3b"
          }, {
            description : "any partial thickness involvement of the sclera within the inner two thirds",
            id : "0", name : "T3c"
          }, {
            description : "full thickness invasion into the outer third of the sclera and or invasion into or around emissary channels",
            id : "0", name : "T3d"
          }, {
            description : "extraocular tumor",
            id : "0", name : "T4"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "0", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "0", name : "N0"
          }, {
            description : "Regional lymph node involvement (preauricular, cervical, submandibular)",
            id : "0", name : "N1"
          } ],
          id : "0", name : "Category (pN)"
        }, {
          group : [ {
            description : "metastases other than CSF and CNS",
            id : "0", name : "M1a"
          }, {
            description : "CSF or CNS metastasis",
            id : "0", name : "M1b"
          } ],
          id : "0", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "0", name : "Rhabdomyosarcom",
      optional : true,
      organ_group : "Pediatric",
      properties : [ {
        id : "0", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Biopsy"
          }, {
            id : "0", name : "Marginal resection"
          }, {
            id : "0", name : "Radical resection"
          }, {
            id : "0", name : "Amputation "
          } ],
          id : "0", name : ""
        } ]
     
      }, {
        id : "0", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Bile duct"
          },{
            id : "0", name : "Bladder/prostate"
          }, {
            id : "0", name : "Cranial parameningeal"
          }, {
            id : "0", name : "Extremity "
          }, {
            id : "0", name : "Genitourinary (not bladder/prostate) "
          }, {
            id : "0", name : "Head and neck (excluding parameningeal) "
          }, {
            id : "0", name : "Orbit"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Embryonal"
          }, {
            id : "0", name : "Spindle cell/sclerosing  "
          }, {
            id : "0", name : "Alveolar "
          }, {
            id : "0", name : "Ectomesenchymoma  "
          }, {
            id : "0", name : "Rhabdomyosarcoma, subtype Equivocal "
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Anaplasia",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Focal (single or few scattered anaplastic cells)"
          }, {
            id : "0", name : "Diffuse (clusters or sheets of anaplastic cells) "
          }, {
            id : "0", name : "Equivocal "
          }, {
            id : "0", name : "Not applicable "
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Fusion Status ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Not performed"
          }, {
            id : "0", name : "No FOXO1 rearrangement"
          }, {
            id : "0", name : "FOXO1 rearrangement present  "
          }, {
            id : "0", name : "Equivocal "
          }, {
            id : "0", name : "Not applicable "
          } ],
          id : "0", name : ""
        } ]
  
      }, {
        description : "include distance",
        id : "0", name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "0", name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Positive"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Distant metastases",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            inputs_required : [ "" ],
            id : "0", name : "Present"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
     
      } ]
    }, {
      most_common : false,
      id : "0", name : "Skin Melanoma",
      optional : false,
      organ_group : "Skin",
      properties : [ {
        id : "0", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Excision"
          } ],
          id : "0", name : ""
        } ]
      }, { id : "0", name : "Location",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Right"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Left"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Midline"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Equivocal"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Macroscopic satellite nodules",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Equivocal"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Melanoma in situ"
          }, {
            id : "0", name : "Superficial spreading melanoma"
          }, {
            id : "0", name : "Nodular melanoma"
          }, {
            id : "0", name : "Lentigo maligna melanoma"
          }, {
            id : "0", name : "Acral lentiginous melanoma"
          }, {
            id : "0", name : "Desmoplastic melanoma"
          }, {
            id : "0", name : "Invasive melanoma, NOS"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor thickness (mm)",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Equivocal"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
    
      }, {
        id : "0", name : "Ulceration",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Equivocal"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Microsatellites",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Equivocal"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "include distance/location of closest margin",
        id : "0", name : "Margins, peripheral",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
             inputs_required : [ "" ],
            id : "0", name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Positive"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "include distance of closest deep margin",
        id : "0", name : "Margins, deep",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance",
             inputs_required : [ "" ],
            id : "0", name : "Free"
          }, {
           
           
            id : "0", name : "Positive"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Mitotic rate",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Equivocal"
          }, {
            id : "0", name : "None"
          }, {
            id : "0", name : "< 1 per square millimeter"
          }, {
            id : "0", name : "> 1 per square millimeter"
          }, {
            description : "# per square millimeter",
            inputs_required : [ "" ],
            id : "0", name : ""
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Indeterminate"
          }, {
            id : "0", name : "Suspicious"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Present, extensive"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Perineural invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Equivocal"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor regression",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Less than or equal to 75% of lesion"
          }, {
            id : "0", name : "Greater than 75% of lesion"
          }, {
            id : "0", name : "Equivocal"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # sentinel",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Matted nodes",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Equivocal"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "0", name : ""
          }, {
            description : "pathologic",
            id : "0", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "0", name : "m"
          }, {
            description : "recurrent",
            id : "0", name : "r"
          }, {
            description : "post-treatment",
            id : "0", name : "y"
          }, {
            id : "0", name : "mp"
          }, {
            id : "0", name : "rp"
          }, {
            id : "0", name : "yp"
          }, {
            id : "0", name : "mrp"
          }, {
            id : "0", name : "myp"
          }, {
            id : "0", name : "ryp"
          }, {
            id : "0", name : "mryp"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            id : "0", name : "TX"
          }, {
            description : "in situ",
            id : "0", name : "Tis"
          }, {
            description : "<= 0.8 mm AND no ulceration",
            id : "0", name : "T1a"
          }, {
            description : "<= (0.8 mm AND ulceration) OR (>=0.8 mm AND <=1.0 mm with or without ulceration)",
            id : "0", name : "T1b"
          }, {
            description : "> 1mm AND <= 2mm , no ulceration",
            id : "0", name : "T2a"
          }, {
            description : "> 1mm AND <= 2mm , ulceration",
            id : "0", name : "T2b"
          }, {
            description : "> 2mm AND <= 4mm , no ulceration",
            id : "0", name : "T3a"
          }, {
            description : "> 2mm AND <= 4mm , ulceration",
            id : "0", name : "T3b"
          }, {
            description : "> 4mm AND no ulceration",
            id : "0", name : "T4a"
          }, {
            description : "> 4mm AND ulceration",
            id : "0", name : "T4b"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "0", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "0", name : "N0"
          }, {
            description : "1 metastasis, clincially occult",
            id : "0", name : "N1a"
          }, {
            description : "1 metastasis, clincially apparent",
            id : "0", name : "N1b"
          }, {
            description : "negative nodes, positive intransit metastasis AND/OR microsatellite metastases",
            id : "0", name : "N1c"
          }, {
            description : "2-3 metastasis, clincially occult",
            id : "0", name : "N2a"
          }, {
            description : "2-3 metastasis, clincially apparent",
            id : "0", name : "N2b"
          }, {
            description : " 1 metastasis AND Satellite or in-transit metastasis",
            id : "0", name : "N2c"
          }, {
            description : ">= 4 metastases clincally occult",
            id : "0", name : "N3a"
          }, {
            description : " 4 metastases clincally apparent",
            id : "0", name : "N3b"
          }, {
            description : "2 or more positive nodes, positive intransit metastasis AND/OR microsatellite metastases",
            id : "0", name : "N3c"
          } ],
          id : "0", name : "Category (pN)"
        }, {
          group : [ {
            description : "metastasesto skin soft tissue including muscles and or nonregional lymph nodes",
            id : "0", name : "M1a"
          }, {
              description : "metastases to lung",
            id : "0", name : "M1b"
          }, {
              description : "metastases to non-CNS visceral sites",
            id : "0", name : "M1c"
          }, {
              description : "metastases to CNS",
            id : "0", name : "M1d"
          }, {
              description : "metastases",
            id : "0", name : "M (not applicable)"
          }, {
            id : "0", name : "distant metastasis not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "Add billing code G9428 for residual melanoma and G9429 no melanoma left",
        id : "0", name : "ICD10",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "C43.9"
          } ],
          id : "0", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "0", name : "Skin Merkel Cell Carcinoma",
      optional : false,
      organ_group : "Skin",
      properties : [ {
        id : "0", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Excision"
          }, {
            id : "0", name : "Excision and sentinel node(s)"
          }, {
            id : "0", name : "Excision and regional node(s)"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Not specified"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Equivocal"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "include distance/location of closest margin",
        id : "0", name : "Margins, peripheral",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            id : "0", name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Positive"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "include distance/location of closest margin",
        id : "0", name : "Margins, deep",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            id : "0", name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Positive"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Indeterminate"
          }, {
            id : "0", name : "Suspicious"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Present, extensive"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Invasion of Bone, Muscle, Fascia, or Cartilage ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Equivocal"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # sentinel",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "0", name : ""
          }, {
            description : "pathologic",
            id : "0", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "0", name : "m"
          }, {
            description : "recurrent",
            id : "0", name : "r"
          }, {
            description : "post-treatment",
            id : "0", name : "y"
          }, {
            id : "0", name : "mp"
          }, {
            id : "0", name : "rp"
          }, {
            id : "0", name : "yp"
          }, {
            id : "0", name : "mrp"
          }, {
            id : "0", name : "myp"
          }, {
            id : "0", name : "ryp"
          }, {
            id : "0", name : "mryp"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            id : "0", name : "TX"
          }, {
            description : "in situ",
            id : "0", name : "Tis"
          }, {
            description : "Less than or equal to 2 cm maximum tumor dimension ",
            id : "0", name : "T1"
          }, {
            description : "Greater than 2 cm but not more than 5 cm maximum tumor dimension ",
            id : "0", name : "T2"
          }, {
            description : "Over 5 cm maximum tumor dimension",
            id : "0", name : "T3"
          }, {
            description : "Primary tumor invades bone, muscle, fascia, or cartilage",
            id : "0", name : "T4"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "0", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "0", name : "N0"
          }, {
            description : "Clinically occult positive sentinel lymph node(s)",
            id : "0", name : "N1a(sn)"
          }, {
            description : "Clinically occult positive regional lymph node(s)",
            id : "0", name : "N1a"
          }, {
            description : "Clinically or radiographically lymph node met, pathologically confirmed",
            id : "0", name : "N1b"
          }, {
            description : "In transit metastasis (discontinuous from primary tumor, located between primary and draining regional nodes or distal to primary AND NO lymph node metastases",
            id : "0", name : "N2"
          }, {
            description : "In transit metastasis (discontinuous from primary tumor, located between primary and draining regional nodes or distal to primary AND lymph node metastases",
            id : "0", name : "N3"
          }  ],
          id : "0", name : "Category (pN)"
        }, {
          group : [ {
            description : "metastases to distant skin, subcutaneous tissue or distant lymph nodes",
            id : "0", name : "M1a"
          }, {
             description : "metastases to lung",
            id : "0", name : "M1b"
          }, {
             description : "metastases all other sites",
            id : "0", name : "M1c"
          }, {
            id : "0", name : "M (not applicable)"
          }, {
            id : "0", name : "distant metastasis not applicable"
          } ],
          id : "0", name : ""
        } ]
      } ]
     }, {
      most_common : false,
      id : "0", name : "Small Intestine",
      optional : false,
      organ_group : "Gastrointestinal",
      properties : [  {
        id : "0", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Segmental resection"
          }, {
            id : "0", name : "Ileocolic resection"
          }, {
            id : "0", name : "Pancreaticoduodenectomy (Whipple resection)"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Duodenum"
          }, {
            id : "0", name : "Jejunum"
          } , {
            id : "0", name : "Ileum"
          }, {
            id : "0", name : "Small intestine"
          }],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor Perforation ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Present"
          }, {
            id : "0", name : "None"
          }, {
            id : "0", name : "Equivocal"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Adenocarcinoma"
          }, {
            description : "greater than 50% mucinous",
            id : "0", name : "Mucinous adenocarcinoma "
          }, {
            description : ">50% signet-ring cells",
            id : "0", name : "Adenocarcinoma, signet-ring carcinoma "
          }, {
            id : "0", name : "Medullary carcinoma "
          }, {
            id : "0", name : "Undifferentiated carcinoma"
          }, {
            id : "0", name : "Squamous cell carcinoma"
          }, {
            id : "0", name : "Adenosquamous carcinoma "
          }, {
            id : "0", name : "Undifferentiated carcinoma"
          }, {
            id : "0", name : "Mixed adenoneuroendocrine carcinoma"
          }, {
            id : "0", name : "Large cell neuroendocrine carcinoma"
          }, {
            id : "0", name : "Small cell neuroendocrine carcinoma"
          }, {
            id : "0", name : "Neuroendocrine carcinoma (poorly differentiated)"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Grade 1/4, Well differentiated "
          }, {
            id : "0", name : "Grade 2/4, Moderately differentiated "
          }, {
            id : "0", name : "Grade 3/4, Poorly differentiated"
          }, {
            id : "0", name : "Grade 4/4, Undifferentiated"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "No evidence of primary tumor"
          }, {
            id : "0", name : "Invades lamina propria"
          }, {
            id : "0", name : "Invades submucosa"
          }, {
            id : "0", name : "Invades muscularis propria"
          }, {
            id : "0", name : "Tumor invades through the muscularis propria into the subserosal adipose tissue or the nonperitonealized peri-intestinal soft tissues but does not extend to the serosal surface"
          }, {
            id : "0", name : "Tumor microscopically involves the serosal surface (visceral peritoneum) "
          }, {
            description : "which",
            inputs_required : [ "" ],
            id : "0", name : "Tumor directly invades adjacent structures "
          }, {
            description : "which",
            inputs_required : [ "" ],
            id : "0", name : "Tumor penetrates to the surface of the visceral peritoneum (serosa) and directly invades adjacent structures"
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "include distance/location of closest proximal/distal/radial/bile duct/pancreatic margin",
        id : "0", name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "0", name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Positive"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Indeterminate"
          }, {
            id : "0", name : "Suspicious"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Present, extensive"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "0", name : ""
          }, {
            description : "pathologic",
            id : "0", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "0", name : "m"
          }, {
            description : "recurrent",
            id : "0", name : "r"
          }, {
            description : "post-treatment",
            id : "0", name : "y"
          }, {
            id : "0", name : "mp"
          }, {
            id : "0", name : "rp"
          }, {
            id : "0", name : "yp"
          }, {
            id : "0", name : "mrp"
          }, {
            id : "0", name : "myp"
          }, {
            id : "0", name : "ryp"
          }, {
            id : "0", name : "mryp"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            id : "0", name : "TX"
          }, {
            description : "No tumor",
            id : "0", name : "T0"
          }, {
            description : "Carcinoma in situ",
            id : "0", name : "Tis"
          }, {
            description : "Tumor invades lamina propria ",
            id : "0", name : "T1a"
          }, {
            description : "Tumor invades submucosa",
            id : "0", name : "T1b"
          }, {
            description : "Tumor invades muscularis propria",
            id : "0", name : "T2"
          }, {
            description : "Tumor invades through the muscularis propria into the subserosa or into the nonperitonealized perimuscular tissue (mesentery or retroperitoneum)without serosal penetration",
            id : "0", name : "T3"
          }, {
            description : "Tumor perforates the visceral peritoneum or directly invades other organs or structures (includes other loops of small intestine, mesentery, and abdominal wall by way of serosa; for duodenum only, invasion of pancreas or bile duct) ",
            id : "0", name : "T4"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "0", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "0", name : "N0"
          }, {
            description : "Metastasis in 1 to 2 regional lymph nodes",
            id : "0", name : "N1"
          }, {
            description : "Metastasis in 3 or more regional lymph nodes",
            id : "0", name : "N2"
          } ],
          id : "0", name : "Category (pN)"
        }, {
          group : [ {
            description : "Distant metastases",
            id : "0", name : "M1"
          }, {
            id : "0", name : "M (not applicable)"
          }, {
            id : "0", name : "distant metastasis not applicable"
          } ],
          id : "0", name : ""
        } ]
        }, {
          description: "adenocarcinoma only",
        id : "0", name : "MSI IHC and Interpretation",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Intact nuclear expression of MMR proteins (MLH1, MSH2, MSH6, PMS2): No evidence of deficient mismatch repair (low probability of MSI-H)"
          },{
            id : "0", name : "Loss of nuclear expression of one or more MMR proteins (MLH1, MSH2, MSH6, PMS2): deficient mismatch repair/ high probability of microsatellite instability-high (MSI-H). The presence of MSI-H/deficient mismatch repair may also be an indication for additional testing for Lynch syndrome and genetic counselling."
          }, {
            id : "0", name : "Pending"
          }, {
            id : "0", name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            id : "0", name : "See case "
          }],
          id : "0", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "0", name : "Soft Tissue",
      optional : false,
      organ_group : "Other",
      properties : [ {
        id : "0", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Biopsy"
          }, {
            id : "0", name : "Intralesional resection  "
          }, {
            id : "0", name : "Marginal resection "
          }, {
            id : "0", name : "Wide resection "
          }, {
            id : "0", name : "Radical resection "
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Type",
       optional_state  : "required", "options" : [ {
          id : "0", name : ""
        } ]
      }, {
         description : "per 10 hpf where 1 hpf =.17mm squared",
        id : "0", name : "Mitotic Rate ",
       optional_state  : "required", "options" : [ {
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Necrosis",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            description : "%",
            inputs_required : [ "" ],
            id : "0", name : "Present"
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "French Federation of Cancer Centers Sarcoma Group [FNCLCC]",
        id : "0", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Grade 1/3"
          }, {
            id : "0", name : "Grade 2/3  "
          }, {
            id : "0", name : "Grade 3/3  "
          }, {
            id : "0", name : "Ungraded sarcoma"
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "include distance",
        id : "0", name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "0", name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Positive"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Treatment effect, primary site",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Present  "
          }, {
            id : "0", name : "Indeterminate  "
          }, {
            id : "0", name : "Not known"
          }  ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "0", name : ""
          }, {
            description : "pathologic",
            id : "0", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "0", name : "m"
          }, {
            description : "recurrent",
            id : "0", name : "r"
          }, {
            description : "post-treatment",
            id : "0", name : "y"
          }, {
            id : "0", name : "mp"
          }, {
            id : "0", name : "rp"
          }, {
            id : "0", name : "yp"
          }, {
            id : "0", name : "mrp"
          }, {
            id : "0", name : "myp"
          }, {
            id : "0", name : "ryp"
          }, {
            id : "0", name : "mryp"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "ABDOMEN AND THORAX cannot be assessed",
            id : "0", name : "TX"
          }, {
            description : "ABDOMEN AND THORAX  No tumor",
            id : "0", name : "T0"
          }, {
            description : "ABDOMEN AND THORAX Organ limited",
            id : "0", name : "T1"
          }, {
            description : "ABDOMEN AND THORAX invades serosa or visceral peritoneum",
            id : "0", name : "T2a"
          }, {
            description : "ABDOMEN AND THORAX extends beyond serosa (mesentery)",
            id : "0", name : "T2b"
          }, {
            description : "ABDOMEN AND THORAX Invades another organ",
            id : "0", name : "T3"
          }, {
            description : "ABDOMEN AND THORAX 2 sites",
            id : "0", name : "T4a"
          }, {
            description : "ABDOMEN AND THORAX 3-5 sites",
            id : "0", name : "T4b"
          }, {
            description : "ABDOMEN AND THORAX >5 sites",
            id : "0", name : "T4c"
          } , {
            description : "HEAD AND NECK Tumor <=2cm",
            id : "0", name : "T1"
          }, {
            description : "HEAD AND NECK Tumor >2cm AND <= 4cm",
            id : "0", name : "T2"
          }, {
            description : "HEAD AND NECK Tumor > 4cm",
            id : "0", name : "T3"
          }, {
            description : "HEAD AND NECK Tumor invades orbit, skull base dural central compartment facial skeleton or pterygoid musclesr",
            id : "0", name : "T4a"
          }, {
            description : "HEAD AND NECK Tumor invades brain, carotid artery, prevertebral muscle, or CNS spread via perinerual spread",
            id : "0", name : "T4b"
          }, {
            description : "TRUNK EXTREMITIES AND RETROPERITONEUM Tumor 5 cm or less in greatest dimension",
            id : "0", name : "T1"
          }, {
            description : "TRUNK EXTREMITIES AND RETROPERITONEUM Tumor > 5cm AND <= 10cmr",
            id : "0", name : "T2"
          }, {
            description : "TRUNK EXTREMITIES AND RETROPERITONEUM Tumor > 10 cm AND <=15cm",
            id : "0", name : "T3"
          }, {
            description : "TRUNK EXTREMITIES AND RETROPERITONEUM Tumor >15 cm",
            id : "0", name : "T4"
          }],
          id : "0", name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "0", name : "NX"
          }, {
            description : "No regional lymph node metastases",
            id : "0", name : "N0"
          }, {
            description : "Regional lymph node metastases",
            id : "0", name : "N1"
          } ],
          id : "0", name : "Category (pN)"
        }, {
          group : [ {
            description : "Distant metastases",
            id : "0", name : "M1"
          }, {
            id : "0", name : "M (not applicable)"
          }, {
            id : "0", name : "distant metastasis not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "Immunohistochemistry, Cytogenetics, Molecular Pathology",
        id : "0", name : "Ancillary studies ordered",
       optional_state  : "required", "options" : [ {
          id : "0", name : ""
        } ]
      } ]    
   
    
      
    }, {
      most_common : false,
      id : "0", name : "Stomach",
      optional : false,
      organ_group : "Gastrointestinal",
      properties : [  {
        id : "0", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Endoscopic mucosal resection"
          }, {
            id : "0", name : "Partial gastrectomy, proximal "
          }, {
            id : "0", name : "Partial gastrectomy, distal "
          }, {
            id : "0", name : "Partial gastrectomy, other  "
          }, {
            id : "0", name : "Total gastrectomy"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Fundus"
          }, {
            id : "0", name : "Body"
          }, {
            id : "0", name : "Antrum"
          }, {
            id : "0", name : "Pylorus"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Adenocarcinoma"
          }, {
            id : "0", name : "Adenocarcinoma, intestinal type"
          }, {
            id : "0", name : "Adenocarcinoma, diffuse type "
          }, {
            description : "if >50% signet-ring cells",
            id : "0", name : "Adenocarcinoma, signet-ring carcinoma "
          }, {
            id : "0", name : "Adenocarcinoma, mixed "
          }, {
            id : "0", name : "Adenocarcinoma, hepatoid  "
          }, {
            id : "0", name : "Medullary carcinoma  "
          }, {
            id : "0", name : "Large cell neuroendocrine carcinoma"
          }, {
            id : "0", name : "Small cell neuroendocrine carcinoma"
          }, {
            id : "0", name : "Mixed adenoneuroendocrine carcinoma"
          }, {
            id : "0", name : "Squamous cell carcinoma"
          }, {
            id : "0", name : "Adenosquamous carcinoma"
          }, {
            id : "0", name : "Undifferentiated carcinoma"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Grade 1/3, Well differentiated"
          }, {
            id : "0", name : "Grade 2/3, Moderately differentiated"
          }, {
            id : "0", name : "Grade 3/3, Poorly differentiated"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "No evidence of primary tumor"
          }, {
            id : "0", name : "High-grade dysplasia (carcinoma in situ) "
          }, {
            id : "0", name : "Invades lamina propria"
          }, {
            id : "0", name : "Invades into but not through muscularis mucosae"
          }, {
            id : "0", name : "Invades submucosa"
          }, {
            id : "0", name : "Invades muscularis propria"
          }, {
            id : "0", name : "Invades subserosal connective tissue without involvement of visceral peritoneum"
          }, {
            id : "0", name : "Penetrates serosa"
          }, {
            description : "specify",
            inputs_required : [ "" ],
            id : "0", name : "Invades adjacent structures "
          }, {
            description : "specify",
            inputs_required : [ "" ],
            id : "0", name : "Penetrates to the surface of the visceral peritoneum (serosa) and directly invades adjacent structures"
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "include distance/location of closest proximal/distal/radial margin",
        id : "0", name : "Margins, invasive tumor",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "0", name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Positive"
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "include distance/location of closest proximal/distal margin",
        id : "0", name : "Margins, dysplasia/CIS",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "0", name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Positive"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Treatment effect, primary site",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "No prior treatment"
          }, {
            id : "0", name : "Present (score 1 or 2)"
          }, {
            id : "0", name : "No response (score 3)"
          }, {
            id : "0", name : "Indeterminate"
          }, {
            id : "0", name : "Not known"
          }  ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Indeterminate"
          }, {
            id : "0", name : "Suspicious"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Present, extensive"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "0", name : ""
          }, {
            description : "pathologic",
            id : "0", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "0", name : "m"
          }, {
            description : "recurrent",
            id : "0", name : "r"
          }, {
            description : "post-treatment",
            id : "0", name : "y"
          }, {
            id : "0", name : "mp"
          }, {
            id : "0", name : "rp"
          }, {
            id : "0", name : "yp"
          }, {
            id : "0", name : "mrp"
          }, {
            id : "0", name : "myp"
          }, {
            id : "0", name : "ryp"
          }, {
            id : "0", name : "mryp"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            id : "0", name : "TX"
          }, {
            description : "No tumor",
            id : "0", name : "T0"
          }, {
            description : "Carcinoma in situ/high-grade glandular dysplasia",
            id : "0", name : "Tis"
          }, {
            description : "Tumor invades lamina propria, muscularis mucosae, or submucosa",
            id : "0", name : "T1"
          }, {
            description : "Tumor invades lamina propria or muscularis mucosae",
            id : "0", name : "T1a"
          }, {
            description : "Tumor invades submucosa",
            id : "0", name : "T1b"
          }, {
            description : "Tumor invades muscularis propria",
            id : "0", name : "T2"
          }, {
            description : "Tumor invades subserosal connective tissue, without involvement of visceral peritoneum or adjacent structures",
            id : "0", name : "T3"
          }, {
            description : "Tumor invades serosa (visceral peritoneum) or adjacent structures ",
            id : "0", name : "T4"
          }, {
            description : "Tumor invades serosa (visceral peritoneum)  ",
            id : "0", name : "T4a"
          }, {
            description : "Tumor invades adjacent structures",
            id : "0", name : "T4b"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "0", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "0", name : "N0"
          }, {
            description : "Regional lymph node metastasis involving 1 to 2 nodes",
            id : "0", name : "N1"
          }, {
            description : "3 to 6 nodes involved",
            id : "0", name : "N2"
          }, {
            description : "7 or more nodes involved",
            id : "0", name : "N3"
          }, {
            description : "7 to 15 perigastric lymph nodes",
            id : "0", name : "N3a"
          }, {
            description : "16 or more perigastric lymph nodes",
            id : "0", name : "N3b"
          } ],
          id : "0", name : "Category (pN)"
        }, {
          group : [ {
            description : "Distant metastases",
            id : "0", name : "M1"
          }, {
            id : "0", name : "M (not applicable)"
          }, {
            id : "0", name : "distant metastasis not applicable"
          } ],
          id : "0", name : ""
        } ]
         }, {
          description : "Order IHC with reflex FISH",
        id : "0", name : "Her2Neu by IHC",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Positive (3+)"
          }, {
            id : "0", name : "Negative (0-1+)"
          }, {
            id : "0", name : "Equivocal (2+)"
          }, {
            id : "0", name : "Pending"
          }, {
            id : "0", name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            id : "0", name : "See case "
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Her2Neu by FISH",
        description : "Order IHC with reflext FISH",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Positive"
          }, {
            id : "0", name : "Negative"
          }, {
            id : "0", name : "Equivocal"
          }, {
            id : "0", name : "Pending"
          }, {
            id : "0", name : "Reflex pending if appropriate"
          }, {
            id : "0", name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            id : "0", name : "See case "
          } ],
          id : "0", name : ""
        } ]
      }, {
         description : "Keytruda, specific scoring system",
        id : "0", name : "PDL1",
       optional_state  : "required", "options" : [ {
          group : [ {
            inputs_required : [ "% of cells", [ "strong", "moderate", "weak" ] ],
            id : "0", name : "Positive/Expressed"
          }, {
            inputs_required : [ "" ],
            id : "0", name : "Positive, Score ="
          }, {
            id : "0", name : "Negative (0%)"
          }, {
            id : "0", name : "Pending"
          }, {
            id : "0", name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            id : "0", name : "See case "
          } ],
          id : "0", name : ""
        }  ]
        }, {
           description: "adenocarcinoma only",
        id : "0", name : "MSI IHC and Interpretation",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Intact nuclear expression of MMR proteins (MLH1, MSH2, MSH6, PMS2): No evidence of deficient mismatch repair (low probability of MSI-H)"
          },{
            id : "0", name : "Loss of nuclear expression of one or more MMR proteins (MLH1, MSH2, MSH6, PMS2): deficient mismatch repair/ high probability of microsatellite instability-high (MSI-H). The presence of MSI-H/deficient mismatch repair may also be an indication for additional testing for Lynch syndrome and genetic counselling."
          }, {
            id : "0", name : "Pending"
          }, {
            id : "0", name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            id : "0", name : "See case "
          }],
          id : "0", name : ""
        } ]
     }]
    }, {
      most_common : false,
      id : "0", name : "Stomach neuroendocrine tumor",
      optional : false,
      organ_group : "Endocrine",
      properties : [  {
        id : "0", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Endoscopic mucosal resection"
          }, {
            id : "0", name : "Partial gastrectomy, proximal "
          }, {
            id : "0", name : "Partial gastrectomy, distal "
          }, {
            id : "0", name : "Partial gastrectomy, other  "
          }, {
            id : "0", name : "Total gastrectomy"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Cardia"
          }, {
            id : "0", name : "Fundus"
          }, {
            id : "0", name : "Body"
          }, {
            id : "0", name : "Antrum"
          }, {
            id : "0", name : "Pylorus"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor focality",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Single focus"
          }, {
            id : "0", name : "Multiple foci"
          } ],
          id : "0", name : ""
        } ]
      }, {
         description : "For small cell (high grade NET use stomach carcinoma protocol not this one) ",  
        id : "0", name : "Type and Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "< 2mitoses/10 hpf and/or Ki67<3% ", 
            id : "0", name : "Grade 1/3, Well differentiated neuroendocrine tumor, low grade (carcinoid)"
          }, {
            description : ">= 2 AND < 20 mitoses/10 hpf and/or Ki67 >=3 AND <20% ",  
            id : "0", name : "Grade 2/3, Well differentiated neuroendocrine tumor, intermediate grade (atypical carcinoid)"
          }, {
             description : "> 20 mitoses/10 hpf and/or Ki67 >20% ",  
            id : "0", name : "Grade 3/3, Well differentiated neuroendocrine tumor"
          } ],
          id : "0", name : ""
        } ]
      }, {
           description : "mitoses/ 2 mm squared NOT 10 hpf, approximately count 42 hpf and divide by 5", 
        id : "0", name : "Mitotic rate",
       optional_state  : "required", "options" : [ {
          group : [ {
            
            id : "0", name : "Less than 2/ 2mm squared"
          }, {
          
            id : "0", name : "at least 2 and less than 20 /2 mm squared"
          }, {
            
            id : "0", name : "More than 20 per 2 mm squared"
          } ],
          id : "0", name : ""
        } ]  
        
      }, {
        id : "0", name : "Ki67 (Mib1)",
       optional_state  : "required", "options" : [ {
          group : [ {
            
            id : "0", name : "Less than 3%"
          }, {
          
            id : "0", name : "at least 3% and less than 20%"
          }, {
            
            id : "0", name : "More than 20%"
          } ],
          id : "0", name : ""
        } ]  
        
      }, {
        id : "0", name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "No evidence of primary tumor"
          }, {
            id : "0", name : "Invades lamina propria"
          }, {
            id : "0", name : "Invades into but not through muscularis mucosae"
          }, {
            id : "0", name : "Invades submucosa"
          }, {
            id : "0", name : "Invades muscularis propria"
          }, {
            id : "0", name : "Invades subserosal connective tissue without involvement of visceral peritoneum"
          }, {
            id : "0", name : "Penetrates serosa"
          }, {
            description : "specify",
            inputs_required : [ "" ],
            id : "0", name : "Invades adjacent structures "
          }, {
            description : "specify",
            inputs_required : [ "" ],
            id : "0", name : "Penetrates to the surface of the visceral peritoneum (serosa) and directly invades adjacent structures"
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "include distance/location of closest proximal/distal/radial margin",
        id : "0", name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            id : "0", name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Positive"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Indeterminate"
          }, {
            id : "0", name : "Suspicious"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Present, extensive"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "0", name : ""
          }, {
            description : "pathologic",
            id : "0", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "0", name : "m"
          }, {
            description : "recurrent",
            id : "0", name : "r"
          }, {
            description : "post-treatment",
            id : "0", name : "y"
          }, {
            id : "0", name : "mp"
          }, {
            id : "0", name : "rp"
          }, {
            id : "0", name : "yp"
          }, {
            id : "0", name : "mrp"
          }, {
            id : "0", name : "myp"
          }, {
            id : "0", name : "ryp"
          }, {
            id : "0", name : "mryp"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            id : "0", name : "TX"
          }, {
            description : "No tumor",
            id : "0", name : "T0"
          }, {
            description : "Carcinoma in situ/dysplasia (tumor size less than 0.5 mm), limited to mucosa",
            id : "0", name : "Tis"
          }, {
            description : "Tumor invades lamina propria or submucosa and 1 cm or less in size",
            id : "0", name : "T1"
          }, {
            description : "Tumor invades muscularis propria or more than 1 cm in size",
            id : "0", name : "T2"
          }, {
            description : "Tumor penetrates subserosa",
            id : "0", name : "T3"
          }, {
            description : "Tumor invades visceral peritoneum (serosal) or other organs or adjacent structures ",
            id : "0", name : "T4"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "0", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "0", name : "N0"
          }, {
            description : "Regional lymph node metastases",
            id : "0", name : "N1"
          } ],
          id : "0", name : "Category (pN)"
        }, {
          group : [ {
            description : "Distant metastases",
            id : "0", name : "M1"
          }, {
            id : "0", name : "M (not applicable)"
          }, {
            id : "0", name : "distant metastasis not applicable"
          } ],
          id : "0", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "0", name : "Testis",
      optional : false,
      organ_group : "Genitourinary",
      properties : [ {
        id : "0", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Right radical orchiectomy"
          } ,{
            id : "0", name : "Left radical orchiectomy"
          }],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor focality",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Single focus"
          }, {
            id : "0", name : "Multiple foci"
          } ],
          id : "0", name : ""
        } ]  
      }, {
        id : "0", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Equivocal"
          } ],
          id : "0", name : ""
        } ]
     
      }, {
        id : "0", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
             description : "SALL4+, OCT3/4+, CD117+, Keratin -/focal+, CD30-, Glypican3-, CDX2-/focal+",
            id : "0", name : "Seminoma, classical"
          }, {
            description : "give percentages",
            inputs_required : [ "" ],
            id : "0", name : "Mixed germ cell tumor"
          }, {
            description : "SALL4+, OCT3/4+, CD117-, Keratin+, CD30+, Glypican3-, CDX2-/focal+",
            id : "0", name : "Embryonal tumor"
          }, {
            description : "SALL4+, OCT3/4-, CD117-, Keratin -/focal +, CD30-, Glypican3+, CDX2+",
            id : "0", name : "Yolk sac tumor"
          }, {
             description : "SALL4 +, OCT3/4-, GATA3+",
            id : "0", name : "Choriocarcinoma"
          }, {
              description : "Prepubertal teratoma is benign, genetically distinct, and does not get a tumor summary",
            id : "0", name : "Teratoma, postpubertal type"
          }, {
            id : "0", name : "Teratoma with carcinoma"
          }, {
            id : "0", name : "Teratoma with sarcoma"
          }, {
             description : "SALL4 +, OCT3/4 -, CD117+ (used to be spermatocytic seminoma)",
            id : "0", name : "Spermatocytic tumor"
          }, {
            id : "0", name : "Spermatocytic tumor with sarcoma"
          }, {
            id : "0", name : "Leydig cell tumor"
          }, {
            id : "0", name : "Malignant Leydig cell tumor"
          }, {
            id : "0", name : "Gonadolblastoma"
          }, {
            id : "0", name : "Sertoli cell tumor, classic"
          }, {
            id : "0", name : "Sertoli cell tumor, malignant"
          }, {
            id : "0", name : "Sertoli cell tumor, large cell calcifying"
          }, {
            id : "0", name : "Granulosa cell tumor, adult"
          }, {
            id : "0", name : "Granulosa cell tumor, juvenile"
          }, {
            id : "0", name : "Fibroma-thecoma"
          } ],
          id : "0", name : ""
        } ]
      
      }, {
        id : "0", name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Limited to testis"
          }, {
            id : "0", name : "Invades through tunica albuginea"
          }, {
            id : "0", name : "Invades hilar soft tissues"
          }, {
            id : "0", name : "Invades epididymis"
          }, {
            id : "0", name : "Invades spermatic cord"
          }, {
              description : "M1a",
            id : "0", name : "Discontinuous spermatic cord involvement"
          }, {
            id : "0", name : "Invades scrotal wall"
          } ],
          id : "0", name : ""
        } ]
  }, {
        id : "0", name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Positive"
          } ],
          id : "0", name : ""
        } ]
  
      }, {
        id : "0", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Indeterminate"
          }, {
            id : "0", name : "Suspicious"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Present, extensive"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
   }, {
        id : "0", name : "Positive lymph node location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Not applicable"
          }, {
            id : "0", name : "Interaortocaval"
          }, {
            id : "0", name : "Paraaortic"
          }, {
            id : "0", name : "Paracaval"
          }, {
            id : "0", name : "Preaortic"
          }, {
            id : "0", name : "Precaval"
          }, {
            id : "0", name : "Retroaortic"
          }, {
            id : "0", name : "Retrocaval"
          }, {
            id : "0", name : "Other"
          } ],
          id : "0", name : ""
        } ]
  
   }, {
     description : "size of lymph node, not met",
        id : "0", name : "Size of largest involved lymph node",
        optional_state : "required",
        "options" : [ {
          group : [ {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
   }, {
        id : "0", name : "Extranodal extension",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Not applicable"
          }, {
            id : "0", name : "None"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Equivocal"
          } ],
          id : "0", name : ""
        } ]
  
      }, {
        id : "0", name : "Tumor type in lymph node",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
  
      }, {
        id : "0", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "0", name : ""
          }, {
            description : "pathologic",
            id : "0", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "0", name : "m"
          }, {
            description : "recurrent",
            id : "0", name : "r"
          }, {
            description : "post-treatment",
            id : "0", name : "y"
          }, {
            id : "0", name : "mp"
          }, {
            id : "0", name : "rp"
          }, {
            id : "0", name : "yp"
          }, {
            id : "0", name : "mrp"
          }, {
            id : "0", name : "myp"
          }, {
            id : "0", name : "ryp"
          }, {
            id : "0", name : "mryp"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            id : "0", name : "TX"
          }, {
            description : "in situ",
            id : "0", name : "Tis"
          }, {
            description : "NONSEMINOMATOUS, limited to testis and rete testis AND no LVI (do not substage, that is only for seminoma)",
            id : "0", name : "T1"
          }, {
            description : "PURE SEMINOMA ONLY: <= 3cm AND limited to testis and rete testis AND no LVI",
            id : "0", name : "T1a"
          }, {
            description : "PURE SEMINOMA ONLY: > 3cm AND limited to testis and rete testis AND no LVI",
            id : "0", name : "T1b"
          }, {
            description : "(limited to testis and rete testis AND LVI) OR (invades hilar soft tissue, epididymis, or external surface of tunica albuginea)",
            id : "0", name : "T2"
          }, {
            description : "Invades spermatic cord",
            id : "0", name : "T3"
          }, {
            description : "Invades scrotum",
            id : "0", name : "T4"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "0", name : "NX"
          }, {
            description : "No regional lymph node metastases",
            id : "0", name : "N0"
          }, {
            description : "<= 5 metastasis, all <= 2cm",
            id : "0", name : "N1"
          }, {
            description : "1 metastasis (not ln) >2cm AND <= 5cm OR > 5 metastases AND all <= 5cm AND no extranodal extension",
            id : "0", name : "N2"
          }, {
            description : "metastases (not ln) > 5cm",
            id : "0", name : "N3"
          } ],
          id : "0", name : "Category (pN)"
        }, {
          group : [ {
            description : "metastases nonregional or lung or discontinuous spermatic cord involvement",
            id : "0", name : "M1a"
          }, {
            description : "other metastases",
            id : "0", name : "M1b"
          }, {
            id : "0", name : "M (not applicable)"
          }, {
            id : "0", name : "distant metastasis not applicable"
          } ],
          id : "0", name : ""
        } ]
      } ]
    }, {
      most_common : true,
      id : "0", name : "Thyroid",
      optional : false,
      organ_group : "Endocrine",
      properties : [ {
        id : "0", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Total thyroidectomy"
          }, {
            id : "0", name : "Right lobectomy"
          }, {
            id : "0", name : "Left lobectomy"
          }, {
            id : "0", name : "Right lobe and isthmus resection"
          }, {
            id : "0", name : "Left lobe and isthmus resection"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Right lobe"
          }, {
            id : "0", name : "Left lobe"
          }, {
            id : "0", name : "Isthmus"
          }, {
            id : "0", name : "Pyramidal lobe"
          }, {
            id : "0", name : "Bilateral, largest focus right lobe"
          }, {
            id : "0", name : "Bilateral, largest focus left lobe"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor focality",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Single focus"
          }, {
            id : "0", name : "Multiple foci"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Papillary carcinoma, NOS"
          }, {
            id : "0", name : "Papillary carcinoma, NOS, encapsulated"
          }, {
            id : "0", name : "Papillary carcinoma, NOS, predominantly but not completely encapsulated"
          }, {
            id : "0", name : "Papillary carcinoma with tall cell features"
          }, {
            id : "0", name : "Papillary carcinoma, follicular variant"
          }, {
            id : "0", name : "Papillary carcinoma, follicular variant, invasive"
          }, {
            id : "0", name : "Papillary carcinoma, follicular variant, invasive, predominantly encapsulated"
          }, {
              description : "CDX2 +",
            id : "0", name : "Papillary carcinoma, columnar variant"
          }, {
              description : "Nuclear beta catenin +",
            id : "0", name : "Papillary carcinoma, cribriform morular variant"
          }, {
            id : "0", name : "Follicular carcinoma, minimally invasive"
          }, {
            id : "0", name : "Follicular carcinoma, widely invasive"
          }, {
            id : "0", name : "Hurthle cell carcinoma, minimally invasive"
          }, {
            id : "0", name : "Hurthle cell carcinoma, widely invasive"
          }, {
            id : "0", name : "Poorly differentiated thyroid carcinoma"
          }, {
             description : "CEA +, Calcitonin+, Chromogranin+, TTF1+, thyroglobulin -",
            id : "0", name : "Medullary carcinoma"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Free"
          }, {
            id : "0", name : "Positive, tumor abuts the inked margin"
          }, {
            inputs_required : [ "" ],
            id : "0", name : "Positive"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Angioinvasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Equivocal"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymphatic invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Equivocal"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Extra-thyroidal extension",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Equivocal"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, sites sampled",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Lymph nodes in thyroidectomy/lobectomy"
          }, {
            id : "0", name : "Focused or single lymph node resection"
          }, {
            id : "0", name : "Lymph nodes in thyroidectomy/lobectomy  and focused or single lymph node resection"
          }, {
            id : "0", name : "Central compartment dissection (level VI)"
          }, {
            id : "0", name : "Right lateral neck dissection (levels I-V)"
          }, {
            id : "0", name : "Left lateral neck dissection (levels I-V)"
          }, {
            id : "0", name : "Superior mediastinal lymph nodes (levels VII)"
          }, {
            id : "0", name : "Right/central neck dissection (levels II-VI)"
          }, {
            id : "0", name : "Left/central neck dissection (levels II-VI)"
          }, {
            id : "0", name : "Right/central neck dissection (levels II-VI) and perithyroidal lymph nodes"
          }, {
            id : "0", name : "Left/central neck dissection (levels II-VI) and perithyroidal lymph nodes"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Extranodal extension",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Not applicable"
          }, {
            id : "0", name : "None"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Equivocal"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Size of largest metastasis",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "0", name : ""
          }, {
            description : "pathologic",
            id : "0", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "0", name : "m"
          }, {
            description : "recurrent",
            id : "0", name : "r"
          }, {
            description : "post-treatment",
            id : "0", name : "y"
          }, {
            id : "0", name : "mp"
          }, {
            id : "0", name : "rp"
          }, {
            id : "0", name : "yp"
          }, {
            id : "0", name : "mrp"
          }, {
            id : "0", name : "myp"
          }, {
            id : "0", name : "ryp"
          }, {
            id : "0", name : "mryp"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            id : "0", name : "TX"
          }, {
            description : "<= 1cm  organ limited",
            id : "0", name : "T1a"
          }, {
            description : "> 1 cm AND <= 2cm  organ limited",
            id : "0", name : "T1b"
          }, {
            description : "> 2 cm AND <= 4cm  organ limited",
            id : "0", name : "T2"
          }, {
            description : "> 4 cm limited to thyroid ",
            id : "0", name : "T3a"
          }, {
            description : "GROSS (theoretically from the op report, not microscopic) extrathyroidal extension invading only strap muscles from a tumor of any size ",
            id : "0", name : "T3b"
          }, {
            description : "GROSS (theoretically from the op report, not microscopic)invasion of subcutaneous tissue, larynx, trachea, esophagus, recurrent laryngeal nerve ",
            id : "0", name : "T4a"
          }, {
            description : "GROSS (theoretically from the op report, not microscopic)invasion of prevertebral fascia, carotid artery or mediastinal vessel",
            id : "0", name : "T4b"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "0", name : "NX"
          }, {
            description : "No regional lymph node metastasis by pathology",
            id : "0", name : "N0a"
          }, {
            description : "positive level VI or VII nodes (pretracheal, paratracheal or prelaryngeal/Delphian or upper mediastinal",
            id : "0", name : "N1a"
          }, {
            description : "positive level I - V nodes (lateral neck or retropharyngeal",
            id : "0", name : "N1b"
          } ],
          id : "0", name : "Category (pN)"
        }, {
          group : [ {
            description : "metastases",
            id : "0", name : "M1"
          }, {
            id : "0", name : "M (not applicable)"
          }, {
            id : "0", name : "distant metastasis not applicable"
          } ],
          id : "0", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "0", name : "Thymus",
      optional : false,
      organ_group : "Thorax",
      properties : [ {
        id : "0", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Thymectomy"
          }, {
            id : "0", name : "Partial thymectomy"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Thymoma"
          }, {
             description : "spindle/medullary",
            id : "0", name : "Type A thymoma "
          }, {
             description : "mixed spindle/medullary and lymphocyte/epithelial",
            id : "0", name : "Type AB thymoma"
          }, {
             description : "lymphocyte predominant",
            id : "0", name : "Type B1 thymoma "
          }, {
             description : "mixed lymphocyte and epithelial",
            id : "0", name : "Type B2 thymoma "
          }, {
             description : "epithelial predominant",
            id : "0", name : "Type B3 thymoma "
          }, {
            id : "0", name : "Thymic carcinoma "
          }, {
            id : "0", name : "Squamous cell carcinoma "
          }, {
            id : "0", name : "Basaloid carcinoma"
          }, {
            id : "0", name : "Mucoepidermoid carcinoma"
          }, {
            id : "0", name : "Lymphoepithelioma-like carcinoma "
          }, {
            id : "0", name : "Sarcomatoid carcinoma "
          }, {
            id : "0", name : "Clear cell carcinoma "
          }, {
            id : "0", name : "Adenocarcinoma "
          }, {
            id : "0", name : "Well-differentiated neuroendocrine carcinoma, typical carcinoid"
          }, {
            id : "0", name : "Well-differentiated neuroendocrine carcinoma, atypical carcinoid "
          }, {
            id : "0", name : "Poorly differentiated neuroendocrine carcinoma, large cell neuroendocrine carcinoma"
          }, {
            id : "0", name : "Poorly differentiated neuroendocrine carcinoma, small cell carcinoma, neuroendocrine type"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Limited to thymus"
          }, {
            id : "0", name : "Invades mediastinal fat"
          }, {
            id : "0", name : "Invades pulmonary parenchyma"
          }, {
            id : "0", name : "Invades pleura"
          }, {
            id : "0", name : "Invades pericardium"
          }, {
            id : "0", name : "Invades diaphragm"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Positive"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Treatment effect, primary site",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Not applicable"
          }, {
            id : "0", name : "None"
          }, {
            description : "% residual viable tumor",
            inputs_required : [ "" ],
            id : "0", name : "Present"
          }, {
            id : "0", name : "Indeterminate"
          }, {
            id : "0", name : "Not known"
          }  ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Indeterminate"
          }, {
            id : "0", name : "Suspicious"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Present, extensive"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "0", name : ""
          }, {
            description : "pathologic",
            id : "0", name : "p"
          }, {
            description : "multiple foci",
            id : "0", name : "m"
          }, {
            description : "recurrent",
            id : "0", name : "r"
          }, {
            description : "post-treatment",
            id : "0", name : "y"
          }, {
            id : "0", name : "mp"
          }, {
            id : "0", name : "rp"
          }, {
            id : "0", name : "yp"
          }, {
            id : "0", name : "mrp"
          }, {
            id : "0", name : "myp"
          }, {
            id : "0", name : "ryp"
          }, {
            id : "0", name : "mryp"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            id : "0", name : "TX"
          }, {
            description : "No mediastinal pleural involvement)",
            id : "0", name : "T1a"
          }, {
            description : "direct invasion of mediastinal pleura",
            id : "0", name : "T1b"
          }, {
            description : "invasion of pericardium",
            id : "0", name : "T2"
          }, {
            description : "invasion of lung brachiocephalic vein superior vena cava phrenic nerve chest wall pulmonary artery or vein",
            id : "0", name : "T3"
          }, {
            description : "Invasion of aorta, arch vessels pulmonary artery myocardium, trachea or esophagus",
            id : "0", name : "T4"
          }],
          id : "0", name : ""
        }, {
          group : [ {
            description : "THYMOMA",
            id : "0", name : "N (not applicable)"
          }, {
            description : "THYMIC CARCINOMA Regional lymph nodes cannot be assessed",
            id : "0", name : "NX"
          }, {
            description : "THYMIC CARCINOMA No regional lymph node metastasis",
            id : "0", name : "N0"
          }, {
            description : "THYMIC CARCINOMA Metastasis in anterior mediastinal lymph nodes",
            id : "0", name : "N1"
          }, {
            description : "THYMIC CARCINOMA Metastasis in other intrathoracic lymph nodes, excluding anterior mediastinal lymph nodes ",
            id : "0", name : "N2"
          } ],
          id : "0", name : "Category (pN)"
        }, {
          group : [ {
            description : "separate plerual or pericardial nodule",
            id : "0", name : "M1a"
          }, {
               description : "pulmonary intraparenchymal met or distant mets",
            id : "0", name : "M1b"
          }, {
            id : "0", name : "M (not applicable)"
          }, {
            id : "0", name : "distant metastasis not applicable"
          } ],
          id : "0", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "0", name : "Trophoblast",
      optional : false,
      organ_group : "Gynecologic",
      properties : [ {
        id : "0", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Dilation and curettage "
          }, {
            id : "0", name : "Hysterectomy"
          }, {
            id : "0", name : "Radical hysterectomy"
          }, {
            id : "0", name : "Pelvic exenteration "
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [  {
            id : "0", name : "Hydatidiform mole, invasive "
          }, {
            id : "0", name : "Choriocarcinoma "
          }, {
            id : "0", name : "Placental site trophoblastic tumor "
          }, {
            id : "0", name : "Epithelioid trophoblastic tumor "
          } ],
          id : "0", name : ""
        } ]
      }, {
         description : "R/L ovary, fallopian tube, vagina, broad ligament",
        id : "0", name : "Other tissue(s) involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Not applicable"
          }, {
            description : "specify",
            inputs_required : [ "" ],
            id : "0", name : "Positive "
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Positive"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Indeterminate"
          }, {
            id : "0", name : "Suspicious"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Present, extensive"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "0", name : ""
          }, {
            description : "pathologic",
            id : "0", name : "AJCC p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "0", name : "AJCC m"
          }, {
            description : "recurrent",
            id : "0", name : "AJCC r"
          }, {
            description : "post-treatment",
            id : "0", name : "AJCC y"
          }, {
            id : "0", name : "AJCC mp"
          }, {
            id : "0", name : "AJCC rp"
          }, {
            id : "0", name : "AJCC yp"
          }, {
            id : "0", name : "AJCC mrp"
          }, {
            id : "0", name : "AJCC myp"
          }, {
            id : "0", name : "AJCC ryp"
          }, {
            id : "0", name : "AJCC mryp"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            id : "0", name : "TX"
          }, {
            description : "Tumor limited to uterus",
            id : "0", name : "T1"
          }, {
            description : "Tumor extends to other genital structures (ovary, tube, vagina, broad ligaments) by metastasis or direct extension",
            id : "0", name : "T2"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "lung metastases",
            id : "0", name : "M1a"
          }, {
            description : "all other metastases, specify # and site",
            inputs_required : [ "" ],
            id : "0", name : "M1b"
          }, {
            id : "0", name : "M (not applicable)"
          }, {
            id : "0", name : "distant metastasis not applicable"
          } ],
          id : "0", name : ""
        } ]
   
    }, {
        id : "0", name : "Stage FIGO (2015)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "Disease confined to the uterus",
            id : "0", name : "FIGO I"
          }, {
            description : "Gestational trophoblastic tumor extends outside of the uterus, but limited to the genital structures (adenexa, vagina, broad ligament)",
            id : "0", name : "FIGO II"
          }, {
            description : "Gestational trophoblastic tumor extends to the lungs, with or without known genital tract involvement",
            id : "0", name : "FIGO III"
          }, {
            description : "All other metastatic sites",
            id : "0", name : "FIGO IV"
          }, {
            description : "",
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
          } ]
      }, {
      most_common : false,
      id : "0", name : "Ureter Renal Pelvis",
      optional : false,
      organ_group : "Genitourinary",
      properties : [ {
        id : "0", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Right nephroureterectomy, partial"
          }, {
            id : "0", name : "Right nephroureterectomy, complete"
          }, {
            id : "0", name : "Right ureterectomy"
          },{
            id : "0", name : "Left nephroureterectomy, partial"
          }, {
            id : "0", name : "Left nephroureterectomy, complete"
          }, {
            id : "0", name : "Left ureterectomy"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor Location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Ureter"
          }, {
            id : "0", name : "Renal pelvis"
          }, {
            id : "0", name : "Ureter and renal pelvis"
          }, {
            id : "0", name : "Not specified"
          } ],
          id : "0", name : ""
        } ] 
  }, {
        id : "0", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Urothelial carcinoma (TCC) papillary, non invasive"
          }, {
            id : "0", name : "Urothelial carcinoma in situ"
          }, {
            id : "0", name : "Invasive urothelial carcinoma (TCC)"
          }, {
            id : "0", name : "Invasive urothelial carcinoma (TCC) with squamous differentiation"
          }, {
            id : "0", name : "Invasive urothelial carcinoma (TCC) with glandular differentiation"
          }, {
            id : "0", name : "Invasive urothelial carcinoma, nested "
          }, {
            id : "0", name : "Invasive urothelial carcinoma, microcystic"
          }, {
            id : "0", name : "Invasive urothelial carcinoma, lympho-epithelial"
          }, {
            id : "0", name : "Invasive urothelial carcinoma, plasmacytoid"
          }, {
            id : "0", name : "Invasive urothelial carcinoma, sarcomatoid"
          }, {
            id : "0", name : "Invasive urothelial carcinoma, giant cell"
          }, {
            id : "0", name : "Squamous cell carcinoma"
          }, {
            id : "0", name : "Squamous cell carcinoma, verrucous variant"
          }, {
            id : "0", name : "Adenocarcinoma"
          }, {
            id : "0", name : "Small cell carcinoma"
          }, {
            id : "0", name : "Large cell neuroendocrine carcinoma"
          }, {
            id : "0", name : "Well-differentiated neuroendocrine tumor (carcinoid)"
          }, {
            id : "0", name : "Paraganglioma"
          }, {
            id : "0", name : "Clear cell carcinoma"
          }, {
            id : "0", name : "Endometrioid carcinoma"
          }],
          id : "0", name : ""
        } ]
  
      }, {
        id : "0", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Low grade"
          }, {
            id : "0", name : "High grade"
          }, {
            description : "(squamous carcinoma and adenocarcinoma only",
            id : "0", name : "Grade 1/3, low grade"
          }, {
            id : "0", name : "Grade 2/3, intermediate grade"
          }, {
            id : "0", name : "Grade 3/3, high grade"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Noninvasive papillary carcinoma"
          }, {
            id : "0", name : "Carcinoma in situ"
          }, {
            id : "0", name : "Invades subepithelial connective tissue"
          }, {
            id : "0", name : "Invades muscularis propria"
          }, {
            id : "0", name : "Invades into peripelvic fat or the renal parenchyma"
          }, {
             description : "specify",
            inputs_required : [ "" ],
            id : "0", name : "Invades adjacent organs, or through the kidney into the perinephric fat"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Margins, invasive tumor",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Free"
          }, {
            description : "location (proximal/distal ureteral, deep)",
            inputs_required : [ "" ],
            id : "0", name : "Positive"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
         }, {
          description : "location (proximal/distal ureteral)",
        id : "0", name : "Margins, non-invasive tumor",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Free"
          }, {
            description : "location (ureteral, urethral, deep), type (papillary, CIS)",
            inputs_required : [ "" ],
            id : "0", name : "Positive"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
  
   
  
      }, {
        id : "0", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "0", name : ""
          }, {
            description : "pathologic",
            id : "0", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "0", name : "m"
          }, {
            description : "recurrent",
            id : "0", name : "r"
          }, {
            description : "post-treatment",
            id : "0", name : "y"
          }, {
            id : "0", name : "mp"
          }, {
            id : "0", name : "rp"
          }, {
            id : "0", name : "yp"
          }, {
            id : "0", name : "mrp"
          }, {
            id : "0", name : "myp"
          }, {
            id : "0", name : "ryp"
          }, {
            id : "0", name : "mryp"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            id : "0", name : "TX"
          }, {
            description : "noninvasive papillary",
            id : "0", name : "Ta"
          }, {
            description : "CIS",
            id : "0", name : "Tis"
          }, {
            description : "Invades lamina propria",
            id : "0", name : "T1"
          }, {
            description : "Invades muscularis propria",
            id : "0", name : "T2"
          }, {
            description : "Invades into peripelvic fat or the renal parenchyma or periureteric fat",
            id : "0", name : "T3"
          }, {
            description : "Invades adjacent organs, or through the kidney into the perinephric fat",
            id : "0", name : "T4"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "0", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "0", name : "N0"
          }, {
            description : " 1 regional lymph node metastasis  (not ln) <= 2cm",
            id : "0", name : "N1"
          }, {
            description : "(> 1 regional lymph node metastases) OR (1 metastasis  (not ln) > 2cm)",
            id : "0", name : "N2"
          } ],
          id : "0", name : "Category (pN)"
        }, {
          group : [ {
            description : "metastases",
            id : "0", name : "M1"
          }, {
            id : "0", name : "M (not applicable)"
          }, {
            id : "0", name : "distant metastasis not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
         description : "in non-neoplastic kidney, including glomerular, tubulointerstitial and vascular disease",
        id : "0", name : "Additional findings",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Nonspecific changes"         
          }, {
            id : "0", name : "Focal nonspecific chronic inflammation"
          }, {
            id : "0", name : "Focal glomerulosclerosis"
          }, {
            id : "0", name : "Interstitial nephritis"
          }, {
            id : "0", name : "Chronic pyelonephritis"
          }, {
            id : "0", name : "Acute pyelonephritis"
          }, {
            id : "0", name : "End stage kidney disease"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
        }, {
         description: "T3+ or N1+ only, otherwise NA",
        id : "0", name : "MSI IHC and Interpretation",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Intact nuclear expression of MMR proteins (MLH1, MSH2, MSH6, PMS2): No evidence of deficient mismatch repair (low probability of MSI-H)"
          },{
            id : "0", name : "Loss of nuclear expression of one or more MMR proteins (MLH1, MSH2, MSH6, PMS2): deficient mismatch repair/ high probability of microsatellite instability-high (MSI-H). The presence of MSI-H/deficient mismatch repair may also be an indication for additional testing for Lynch syndrome and genetic counselling."
          }, {
            id : "0", name : "Pending"
          }, {
            id : "0", name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            id : "0", name : "See case "
          }],
          id : "0", name : ""
        } ]
        }, {
           description : "Ventana PDL1, if squamous differentiation use that block for PDL1",
        id : "0", name : "Ancillary studies ordered",
       optional_state  : "required", "options" : [ {
          group : [ {
             description : "T1-2N0",
            id : "0", name : "None"
          }, {
             description : "T3-4 or N1",
            id : "0", name : "PDL1 and FoundationOne"
          }, {
            id : "0", name : "Pending"
          }, {
            id : "0", name : "Not applicable"
          }, {
            inputs_required : [ "" ],
            id : "0", name : "See case"
          } ],
          id : "0", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "0", name : "Urethra",
      optional : false,
      organ_group : "Genitourinary",
      properties : [  {
        id : "0", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Partial urethrectomy"
          }, {
            id : "0", name : "Total urethrectomy"
          }, {
            id : "0", name : "Urethrectomy with cystectomy"
          }, {
            id : "0", name : "Urethrectomy with cystoprostatectomy"
          }, {
            id : "0", name : "Urethrectomy with penectomy"
          }, {
            id : "0", name : "Anterior exenteration"
          } ],
          id : "0", name : ""
        } ]
      
       }, {
        id : "0", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Urothelial carcinoma (TCC) papillary, non invasive"
          }, {
            id : "0", name : "Urothelial carcinoma in situ"
          }, {
            id : "0", name : "Invasive urothelial carcinoma (TCC)"
          }, {
            id : "0", name : "Invasive urothelial carcinoma (TCC) with squamous differentiation"
          }, {
            id : "0", name : "Invasive urothelial carcinoma (TCC) with glandular differentiation"
          }, {
            id : "0", name : "Invasive urothelial carcinoma, nested "
          }, {
            id : "0", name : "Invasive urothelial carcinoma, microcystic"
          }, {
            id : "0", name : "Invasive urothelial carcinoma, lympho-epithelial"
          }, {
            id : "0", name : "Invasive urothelial carcinoma, plasmacytoid"
          }, {
            id : "0", name : "Invasive urothelial carcinoma, sarcomatoid"
          }, {
            id : "0", name : "Invasive urothelial carcinoma, giant cell"
          }, {
            id : "0", name : "Squamous cell carcinoma"
          }, {
            id : "0", name : "Squamous cell carcinoma, verrucous variant"
          }, {
            id : "0", name : "Adenocarcinoma"
          }, {
            id : "0", name : "Small cell carcinoma"
          }, {
            id : "0", name : "Large cell neuroendocrine carcinoma"
          }, {
            id : "0", name : "Well-differentiated neuroendocrine tumor (carcinoid)"
          }, {
            id : "0", name : "Paraganglioma"
          }, {
            id : "0", name : "Clear cell carcinoma"
          }, {
            id : "0", name : "Endometrioid carcinoma"
          }],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Low grade"
          }, {
            id : "0", name : "High grade"
          }, {
            description : "(squamous carcinoma and adenocarcinoma only",
            id : "0", name : "Grade 1/3, low grade"
          }, {
            id : "0", name : "Grade 2/3, intermediate grade"
          }, {
            id : "0", name : "Grade 3/3, high grade"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Noninvasive papillary carcinoma"
          }, {
            id : "0", name : "Carcinoma in situ"
          }, {
            id : "0", name : "Invades subepithelial connective tissue"
          }, {
            id : "0", name : "Invades corpus spongiosum"
          }, {
            id : "0", name : "Invades periurethral muscle"
          }, {
            id : "0", name : "Urothelial CIS involves prostatic urethra"
          }, {
            id : "0", name : "Urothelial CIS involves prostatic ducts"
          }, {
            id : "0", name : "Invades prostatic stroma"
          }, {
            id : "0", name : "Invades periprostatic fat"
          }, {
            id : "0", name : "Invades corpus cavernosum"
          }, {
            id : "0", name : "Invades beyond prostatic capsule"
          }, {
            id : "0", name : "Invades anterior vagina"
          }, {
            id : "0", name : "Invades bladder neck"
          }, {
            id : "0", name : "Invades bladder wall"
          }, {
            id : "0", name : "Invades rectum"
          }, {
            inputs_required : [ "" ],
            id : "0", name : "Invades adjacent structures"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Margins, invasive tumor",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Free"
          }, {
            description : "location (proximal, distal ,deep)",
            inputs_required : [ "" ],
            id : "0", name : "Positive"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Margins, dysplasia/CIS",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Free"
          }, {
            description : "location (proximal, distal ,deep)",
            inputs_required : [ "" ],
            id : "0", name : "Positive"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "0", name : ""
          }, {
            description : "pathologic",
            id : "0", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "0", name : "m"
          }, {
            description : "recurrent",
            id : "0", name : "r"
          }, {
            description : "post-treatment",
            id : "0", name : "y"
          }, {
            id : "0", name : "mp"
          }, {
            id : "0", name : "rp"
          }, {
            id : "0", name : "yp"
          }, {
            id : "0", name : "mrp"
          }, {
            id : "0", name : "myp"
          }, {
            id : "0", name : "ryp"
          }, {
            id : "0", name : "mryp"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            id : "0", name : "TX"
          }, {
            description : "noninvasive papillary or verrucous",
            id : "0", name : "Ta"
          }, {
            description : "CIS",
            id : "0", name : "Tis"
          }, {
            description : "CIS involvement of prostatic urethra  ",
            id : "0", name : "Tis pu"
          }, {
            description : "CIS involvement of prostatic ducts",
            id : "0", name : "Tis pd"
          }, {
            description : "Invades lamina propria",
            id : "0", name : "T1"
          }, {
            description : "Invades corpus spongiosum, prostate stroma, or periurethral muscle",
            id : "0", name : "T2"
          }, {
            description : "Invades corpus cavernosum, beyond prostatic capsule, anterior vagina, or bladder neck",
            id : "0", name : "T3"
          }, {
            description : "Invades adjacent organs (invasion of the bladder)",
            id : "0", name : "T4"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "0", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "0", name : "N0"
          }, {
            description : " 1 regional lymph node metastasis",
            id : "0", name : "N1"
          }, {
            description : "> 1 regional lymph node metastases",
            id : "0", name : "N2"
          } ],
          id : "0", name : "Category (pN)"
        }, {
          group : [ {
            description : "metastases",
            id : "0", name : "M1"
          }, {
            id : "0", name : "M (not applicable)"
          }, {
            id : "0", name : "distant metastasis not applicable"
          } ],
          id : "0", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "0", name : "Urinary Bladder, Cystectomy",
      optional : false,
      organ_group : "Genitourinary",
      properties : [ {
        id : "0", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Partial cystectomy"
          }, {
            id : "0", name : "Total cystectomy"
          }, {
            id : "0", name : "Radical cystectomy"
          }, {
            id : "0", name : "Radical cystoprostatectomy"
          }, {
            id : "0", name : "Anterior exenteration"
          } ],
          id : "0", name : ""
        } ]
       }, {
        id : "0", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Trigone"
          }, {
            id : "0", name : "Right lateral wall"
          }, {
            id : "0", name : "Left lateral wall"
          }, {
            id : "0", name : "Anterior wall"
          }, {
            id : "0", name : "Posterior wall"
          } , {
            id : "0", name : "Dome"
          }, {
            id : "0", name : "Indeterminate"
          }],
          id : "0", name : ""
        } ]  
      }, {
        id : "0", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Urothelial carcinoma (TCC) papillary, non invasive"
          }, {
            id : "0", name : "Urothelial carcinoma in situ"
          }, {
            id : "0", name : "Invasive urothelial carcinoma (TCC)"
          }, {
            id : "0", name : "Invasive urothelial carcinoma (TCC) with squamous differentiation"
          }, {
            id : "0", name : "Invasive urothelial carcinoma (TCC) with glandular differentiation"
          }, {
            id : "0", name : "Invasive urothelial carcinoma, nested "
          }, {
            id : "0", name : "Invasive urothelial carcinoma, microcystic"
          }, {
            id : "0", name : "Invasive urothelial carcinoma, lympho-epithelial"
          }, {
            id : "0", name : "Invasive urothelial carcinoma, plasmacytoid"
          }, {
            id : "0", name : "Invasive urothelial carcinoma, sarcomatoid"
          }, {
            id : "0", name : "Invasive urothelial carcinoma, giant cell"
          }, {
            id : "0", name : "Squamous cell carcinoma"
          }, {
            id : "0", name : "Squamous cell carcinoma, verrucous variant"
          }, {
            id : "0", name : "Adenocarcinoma"
          }, {
            id : "0", name : "Small cell carcinoma"
          }, {
            id : "0", name : "Large cell neuroendocrine carcinoma"
          }, {
            id : "0", name : "Well-differentiated neuroendocrine tumor (carcinoid)"
          }, {
            id : "0", name : "Paraganglioma"
          }, {
            id : "0", name : "Clear cell carcinoma"
          }, {
            id : "0", name : "Endometrioid carcinoma"
          }],
          id : "0", name : ""
        } ]
      
      }, {
        id : "0", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Low grade"
          }, {
            id : "0", name : "High grade"
          }, {
            description : "(squamous carcinoma and adenocarcinoma only",
            id : "0", name : "Grade 1/3, low grade"
          }, {
            id : "0", name : "Grade 2/3, intermediate grade"
          }, {
            id : "0", name : "Grade 3/3, high grade"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Noninvasive papillary carcinoma"
          }, {
            id : "0", name : "Carcinoma in situ"
          }, {
            id : "0", name : "Invades lamina propria"
          }, {
            id : "0", name : "Invades superficial muscularis propria (inner half)"
          }, {
            id : "0", name : "Invades deep muscularis propria (outer half)"
          }, {
            id : "0", name : "Invades perivesical tissue, microscopically"
          }, {
            id : "0", name : "Invades perivesical tissue, grossly (extravesicular mass)"
          }, {
             description : "includes prostate (consider if urethral protocol is more appropriate), seminal vesicles, uterus, vagina rectum soft tissues",
            inputs_required : [ "" ],
            id : "0", name : "Invades adjacent structures"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Margins, invasive tumor",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Free"
          }, {
            description : "location (ureteral (right and left), urethral ,deep/soft tissue)",
            inputs_required : [ "" ],
            id : "0", name : "Positive"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Margins, non-invasive tumor",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Free"
          }, {
            description : "location (ureteral, urethral, deep), type (papillary, CIS)",
            inputs_required : [ "" ],
            id : "0", name : "Positive"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
         }, {
        id : "0", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Indeterminate"
          }, {
            id : "0", name : "Suspicious"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Present, extensive"
          } ],
          id : "0", name : ""
        } ]
        
      }, {
        id : "0", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      
      }, {
        id : "0", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "0", name : ""
          }, {
            description : "pathologic",
            id : "0", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "0", name : "m"
          }, {
            description : "recurrent",
            id : "0", name : "r"
          }, {
            description : "post-treatment",
            id : "0", name : "y"
          }, {
            id : "0", name : "mp"
          }, {
            id : "0", name : "rp"
          }, {
            id : "0", name : "yp"
          }, {
            id : "0", name : "mrp"
          }, {
            id : "0", name : "myp"
          }, {
            id : "0", name : "ryp"
          }, {
            id : "0", name : "mryp"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            id : "0", name : "TX"
          }, {
            description : "noninvasive papillary",
            id : "0", name : "Ta"
          }, {
            description : "CIS",
            id : "0", name : "Tis"
          }, {
            description : "Invades lamina propria",
            id : "0", name : "T1"
          }, {
            description : "Invades superficial muscularis propria (inner half)",
            id : "0", name : "T2a"
          }, {
            description : "Invades deep muscularis propria (outer half)",
            id : "0", name : "T2b"
          }, {
            description : "Invades perivesical tissue, microscopically",
            id : "0", name : "T3a"
          }, {
            description : "Invades perivesical tissue, grossly (extravesicular mass)",
            id : "0", name : "T3b"
          }, {
            description : "Invades prostatic stroma, seminal vesicles, uterus, or vagina",
            id : "0", name : "T4a"
          }, {
            description : "Invades pelvic wall or abdominal wall",
            id : "0", name : "T4b"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "0", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "0", name : "N0"
          }, {
            description : " 1 regional lymph node metastasis",
            id : "0", name : "N1"
          }, {
            description : "> 1 regional lymph node metastases",
            id : "0", name : "N2"
          }, {
            description : ">= 1 common iliac lymph node metastases",
            id : "0", name : "N3"
          } ],
          id : "0", name : "Category (pN)"
        }, {
          group : [ {
            description : "metastases to non regional lymph nodes",
            id : "0", name : "M1a"
          }, {
              description : "metastases to non lymph nodes",
            id : "0", name : "M1b"
          }, {
            id : "0", name : "M (not applicable)"
          }, {
            id : "0", name : "distant metastasis not applicable"
          } ],
          id : "0", name : ""
        } ]
        }, {
         description: "T3+ or N1+ only, otherwise NA",
        id : "0", name : "MSI IHC and Interpretation",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Intact nuclear expression of MMR proteins (MLH1, MSH2, MSH6, PMS2): No evidence of deficient mismatch repair (low probability of MSI-H)"
          },{
            id : "0", name : "Loss of nuclear expression of one or more MMR proteins (MLH1, MSH2, MSH6, PMS2): deficient mismatch repair/ high probability of microsatellite instability-high (MSI-H). The presence of MSI-H/deficient mismatch repair may also be an indication for additional testing for Lynch syndrome and genetic counselling."
          }, {
            id : "0", name : "Pending"
          }, {
            id : "0", name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            id : "0", name : "See case "
          }],
          id : "0", name : ""
        } ]
        }, {
           description : "Ventana PDL1, if squamous differentiation use that block for PDL1",
        id : "0", name : "Ancillary studies ordered",
       optional_state  : "required", "options" : [ {
          group : [ {
             description : "T1-2N0",
            id : "0", name : "None"
          }, {
             description : "T3-4 or N1",
            id : "0", name : "PDL1 and FoundationOne"
          }, {
            id : "0", name : "Pending"
          }, {
            id : "0", name : "Not applicable"
          }, {
            inputs_required : [ "" ],
            id : "0", name : "See case"
          } ],
          id : "0", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "0", name : "Urinary Bladder, TUR/Biopsy",
      optional : true,
      organ_group : "Genitourinary",
      properties : [ {
        id : "0", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Bladder TUR"
          }, {
            id : "0", name : "Bladder biopsy"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Urothelial carcinoma (TCC) papillary, non invasive"
          }, {
            id : "0", name : "Urothelial carcinoma in situ"
          }, {
            id : "0", name : "Invasive Urothelial carcinoma (TCC)"
          }, {
            id : "0", name : "Invasive urothelial carcinoma (TCC) with squamous differentiation"
          }, {
            id : "0", name : "Invasive urothelial carcinoma (TCC) with glandular differentiation"
          }, {
            id : "0", name : "Squamous cell carcinoma"
          }, {
            id : "0", name : "Adenocarcinoma"
          }, {
            id : "0", name : "Small cell carcinoma"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Additional findings",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Papilloma"
          }, {
            id : "0", name : "Inverted papilloma"
          }, {
            id : "0", name : "PUN-LMP"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Low grade"
          }, {
            id : "0", name : "High grade"
          }, {
            description : "(squamous carcinoma and adenocarcinoma only",
            id : "0", name : "Intermediate grade"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Muscularis Propria (Adequacy)",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Equivocal"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Indeterminate"
          }, {
            id : "0", name : "Suspicious"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Present, extensive"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Noninvasive papillary carcinoma"
          }, {
            id : "0", name : "Carcinoma in situ"
          }, {
            id : "0", name : "Invades lamina propria"
          }, {
            id : "0", name : "Suspicious for lamina propria invasion"
          }, {
            id : "0", name : "Invades muscularis propria"
          }, {
            id : "0", name : "Invades muscle, favor muscularis mucosa"
          }, {
            id : "0", name : "Invades muscle, favor muscularis propria"
          }, {
            id : "0", name : "CIS involves prostatic urethra in prostatic chips"
          }, {
            id : "0", name : "CIS involves prostatic ducts and acini"
          }, {
            id : "0", name : "Invades prostatic stroma"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "0", name : ""
          }, {
            description : "pathologic",
            id : "0", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "0", name : "m"
          }, {
            description : "recurrent",
            id : "0", name : "r"
          }, {
            description : "post-treatment",
            id : "0", name : "y"
          }, {
            id : "0", name : "mp"
          }, {
            id : "0", name : "rp"
          }, {
            id : "0", name : "yp"
          }, {
            id : "0", name : "mrp"
          }, {
            id : "0", name : "myp"
          }, {
            id : "0", name : "ryp"
          }, {
            id : "0", name : "mryp"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            id : "0", name : "TX"
          }, {
            description : "noninvasive papillary",
            id : "0", name : "Ta"
          }, {
            description : "noninvasive papillary, no muscularis propria",
            id : "0", name : " at least Ta"
          }, {
            description : "CIS",
            id : "0", name : "Tis"
          }, {
            description : "CIS, no muscularis propria",
            id : "0", name : "at least Tis"
          }, {
            description : "Invades lamina propria",
            id : "0", name : "T1"
          }, {
            description : "Suspicious for lamina propria invasion",
            id : "0", name : "Ta-1"
          }, {
            description : "Invades lamina propria, no musclularis propria",
            id : "0", name : " at least T1"
          }, {
            description : "Invades superficial muscularis propria (inner half)",
            id : "0", name : "T2"
          }, {
            description : "Invades prostatic stroma",
            id : "0", name : "T4a"
          } ],
          id : "0", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "0", name : "Uterine Sarcoma",
      optional : false,
      organ_group : "Gynecologic",
      properties : [ {
        id : "0", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Myomectomy"
          }, {
            id : "0", name : "Supracervical hysterectomy"
          }, {
            id : "0", name : "Simple hysterectomy"
          }, {
            id : "0", name : "Radical hysterectomy"
          }, {
            id : "0", name : "Supracervical hysterectomy and right salpingo-oophorectomy"
          }, {
            id : "0", name : "Simple hysterectomy and right salpingo-oophorectomy"
          }, {
            id : "0", name : "Radical hysterectomy and right salpingo-oophorectomy"
          }, {
            id : "0", name : "Supracervical hysterectomy and left salpingo-oophorectomy"
          }, {
            id : "0", name : "Simple hysterectomy and left salpingo-oophorectomy"
          }, {
            id : "0", name : "Radical hysterectomy and left salpingo-oophorectomy"
          }, {
            id : "0", name : "Supracervical hysterectomy and bilateral salpingo-oophorectomy"
          }, {
            id : "0", name : "Simple hysterectomy and bilateral salpingo-oophorectomy"
          }, {
            id : "0", name : "Radical hysterectomy and bilateral salpingo-oophorectomy"
          }, {
            id : "0", name : "Supracervical hysterectomy, bilateral salpingo-oophorectomy and omentectomy"
          }, {
            id : "0", name : "Simple hysterectomy, bilateral salpingo-oophorectomy and omentectomy"
          }, {
            id : "0", name : "Radical hysterectomy, bilateral salpingo-oophorectomy and omentectomy"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Specimen integrity",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Not applicable"
          }, {
            id : "0", name : "Intact"
          }, {
            id : "0", name : "Morcellated"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Leiomyosarcoma"
          }, {
            id : "0", name : "Low-grade endometrial stromal sarcoma"
          }, {
            id : "0", name : "Low-grade endometrial stromal sarcoma with smooth muscle differentiation "
          }, {
            id : "0", name : "Low-grade endometrial stromal sarcoma with sex cord elements"
          }, {
            id : "0", name : "Low-grade endometrial stromal sarcoma with glandular elements"
          }, {
            id : "0", name : "High-grade endometrial stromal sarcoma"
          }, {
            id : "0", name : "Undifferentiated uterine/endometrial sarcoma"
          }, {
            id : "0", name : "Adenosarcoma"
          }, {
            id : "0", name : "Adenosarcoma with rhabdomyoblastic differentiation"
          }, {
            id : "0", name : "Adenosarcoma with cartilaginous differentiation"
          }, {
            id : "0", name : "Adenosarcoma with osseous differentiation"
          }, {
            id : "0", name : "Adenosarcoma with sarcomatous overgrowth"
          } ],
          id : "0", name : ""
        } ]
      }, {
         description : "only for adenosarcoma",
        id : "0", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Not applicable"
          }, {
            id : "0", name : "Low grade"
          }, {
            id : "0", name : "High grade"
          }, {
            id : "0", name : "With sarcomatous overgrowth"
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "only for adenosarcoma",
        id : "0", name : "Myometrial Invasion ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Tumor is limited to the endometrium or cervical surface without myometrial invasion"
          }, {
            id : "0", name : "Tumor invades less than or equal to 50% of myometrial thickness"
          }, {
            id : "0", name : "Tumor invades greater than 50% myometrial thickness"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
         description : "R/L ovary, fallopian tube, vagina, parametrium, pelvic wall omentum",
        id : "0", name : "Other tissue(s) involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Positive"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Indeterminate"
          }, {
            id : "0", name : "Suspicious"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Present, extensive"
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "includes pelvic, parametrial, obturator, internal iliac (hypogastric), external iliac, common iliac, sacral, presacral and para-aortic",
        id : "0", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # involved (no ITC)",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # with isolated tumor cells",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Positive lymph node location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "0", name : ""
          }, {
            description : "pathologic",
            id : "0", name : "AJCC p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "0", name : "AJCC m"
          }, {
            description : "recurrent",
            id : "0", name : "AJCC r"
          }, {
            description : "post-treatment",
            id : "0", name : "AJCC y"
          }, {
            id : "0", name : "AJCC mp"
          }, {
            id : "0", name : "AJCC rp"
          }, {
            id : "0", name : "AJCC yp"
          }, {
            id : "0", name : "AJCC mrp"
          }, {
            id : "0", name : "AJCC myp"
          }, {
            id : "0", name : "AJCC ryp"
          }, {
            id : "0", name : "AJCC mryp"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            id : "0", name : "TX"
          }, {
            description : "SARCOMA Tumor is 5 cm or less (≤5 cm) in greatest dimension ",
            id : "0", name : "T1a"
          }, {
            description : "SARCOMA Tumor is greater than 5 cm (>5 cm) in greatest dimension",
            id : "0", name : "T1b"
          }, {
            description : "SARCOMA Tumor involves the adnexa",
            id : "0", name : "T2a"
          }, {
            description : "SARCOMA Tumor involves other pelvic tissue",
            id : "0", name : "T2b"
          }, {
            description : "SARCOMA Tumor invades abdominal tissues at one site ",
            id : "0", name : "T3a"
          }, {
            description : "SARCOMA Tumor invades abdominal tissues at more than one site ",
            id : "0", name : "T3b"
          }, {
            description : "SARCOMA Tumor invades bladder mucosa and/or rectum ",
            id : "0", name : "T4"
          }, {
            description : "ADENOSARCOMA Tumor is limited to the endometrium/endocervix without myometrial invasion ",
            id : "0", name : "T1a"
          }, {
            description : "ADENOSARCOMA Tumor invades less than or equal to 50% (≤50%) total myometrial thickness",
            id : "0", name : "T1b"
          }, {
            description : "ADENOSARCOMA Tumor invades greater than 50% (>50%) total myometrial thickness",
            id : "0", name : "T1c"
          }, {
            description : "ADENOSARCOMA Tumor involves the adnexa",
            id : "0", name : "T2a"
          }, {
            description : "ADENOSARCOMA Tumor involves other pelvic tissue",
            id : "0", name : "T2b"
          }, {
            description : "ADENOSARCOMA  Tumor invades abdominal tissues at one site",
            id : "0", name : "T3a"
          }, {
            description : "ADENOSARCOMA  Tumor invades abdominal tissues at more than one site",
            id : "0", name : "T3b"
          }, {
            description : "ADENOSARCOMA  Tumor invades bladder mucosa and/or rectum",
            id : "0", name : "T4"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "0", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "0", name : "N0"
          }, {
            description : "Isolated tumor cells, <=0.2mm",
            id : "0", name : "N0(i+)"
          }, {
            description : "regional lymph node metastasis",
            id : "0", name : "N1"
          } ],
          id : "0", name : "Category (pN)"
        }, {
          group : [ {
            description : "metastases",
            id : "0", name : "M1"
          }, {
            id : "0", name : "M (not applicable)"
          }, {
            id : "0", name : "distant metastasis not applicable"
          } ],
          id : "0", name : ""
        } ]
   
    }, {
        id : "0", name : "Stage FIGO (2015)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "Tumor limited to uterus, Less than or equal to 5 cm",
            id : "0", name : "FIGO IA"
          }, {
            description : "Tumor limited to uterus, More than 5 cm",
            id : "0", name : "FIGO IB"
          }, {
            description : "Adnexal involvement",
            id : "0", name : "FIGO IIA"
          }, {
            description : "Involvement of other pelvic tissues",
            id : "0", name : "FIGO IIB"
          }, {
            description : "Tumor invades abdominal tissues (not just protruding into the abdomen)1 site",
            id : "0", name : "FIGO IIIA"
          }, {
            description : "Tumor invades abdominal tissues (not just protruding into the abdomen)More than 1 site",
            id : "0", name : "FIGO IIIB"
          }, {
            description : "Tumor invades abdominal tissues (not just protruding into the abdomen)Metastasis to pelvic and/or para-aortic lymph nodes",
            id : "0", name : "FIGO IIIC"
          }, {
            description : " Tumor invades bladder and/or rectal mucosa    ",
            id : "0", name : "FIGO IVA"
          }, {
            description : "Distant metastasis",
            id : "0", name : "FIGO IVB"
          }, {
            description : "ADENOSARCOMA Tumor limited to endometrium/endocervix with no myometrial invasion",
            id : "0", name : "FIGO IA"
          }, {
            description : "ADENOSARCOMA Less than or equal to half myometrial invasion",
            id : "0", name : "FIGO IB"
          }, {
            description : "ADENOSARCOMA More than half myometrial invasion",
            id : "0", name : "FIGO IC"
          }, {
            description : "ADENOSARCOMA Adnexal involvement",
            id : "0", name : "FIGO IIA"
          }, {
            description : "ADENOSARCOMA Tumor extends to extrauterine pelvic tissue",
            id : "0", name : "FIGO IIB"
          }, {
            description : "ADENOSARCOMA Tumor invades abdominal tissues (not just protruding into the abdomen)1 site",
            id : "0", name : "FIGO IIIA"
          }, {
            description : "ADENOSARCOMA Tumor invades abdominal tissues (not just protruding into the abdomen)More than 1 site",
            id : "0", name : "FIGO IIIB"
          }, {
            description : "ADENOSARCOMA Tumor invades abdominal tissues (not just protruding into the abdomen)Metastasis to pelvic and/or para-aortic lymph nodes",
            id : "0", name : "FIGO IIIC"
          }, {
            description : " ADENOSARCOMA  Tumor invades bladder and/or rectal mucosa  ",
            id : "0", name : "FIGO IVA"
          }, {
            description : "ADENOSARCOMA Distant metastasis",
            id : "0", name : "FIGO IVB"
          }, {
            description : "",
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
          } ]
      }, {
      most_common : false,
      id : "0", name : "Uveal melanoma",
      optional : false,
      organ_group : "Ophthalmic",
      properties : [ {
        id : "0", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Right local resection"
          }, {
            id : "0", name : "Right enucleation"
          }, {
            id : "0", name : "Right limited exenteration"
          }, {
            id : "0", name : "Right complete exenteration"
          },{
            id : "0", name : "Left local resection"
          }, {
            id : "0", name : "Left enucleation"
          }, {
            id : "0", name : "Left limited exenteration"
          }, {
            id : "0", name : "Left complete exenteration"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Superotemporal quadrant of globe"
          }, {
            id : "0", name : "Superonasal quadrant of globe"
          }, {
            id : "0", name : "Inferotemporal quadrant of globe"
          }, {
            id : "0", name : "Inferonasal quadrant of globe"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor size after sectioning",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Equivocal"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor location after sectioning",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Superotemporal"
          }, {
            id : "0", name : "Superonasal"
          }, {
            id : "0", name : "Inferotemporal"
          }, {
            id : "0", name : "Inferonasal"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor Involvement of Other Ocular Structures ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Sclera"
          }, {
            id : "0", name : "Vortex vein(s)"
          }, {
            id : "0", name : "Optic disc"
          }, {
            id : "0", name : "Vitreous "
          }, {
            id : "0", name : "Choroid"
          }, {
            id : "0", name : "Ciliary body"
          }, {
            id : "0", name : "Iris "
          }, {
            id : "0", name : "Lens"
          }, {
            id : "0", name : "Anterior chamber"
          }, {
            id : "0", name : "Extrascleral extension (anterior)"
          }, {
            id : "0", name : "Extrascleral extension (posterior) "
          }, {
            id : "0", name : "Angle/Schlemm’s canal"
          }, {
            id : "0", name : "Optic nerve"
          }, {
            id : "0", name : "Retina"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Growth Pattern ",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Solid mass "
          }, {
            id : "0", name : "Dome shape"
          }, {
            id : "0", name : "Mushroom shape"
          }, {
            id : "0", name : "Diffuse (ciliary body ring)"
          }, {
            id : "0", name : "Diffuse (flat)"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : ">90% spindle cells",
            id : "0", name : "Spindle cell melanoma"
          }, {
            description : ">10% epithelioid cells and <90% spindle cells",
            id : "0", name : "Mixed cell melanoma "
          }, {
            description : ">90% epithelioid cells",
            id : "0", name : "Epithelioid cell melanoma "
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Extention",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Intrascleral"
          }, {
            id : "0", name : "Extrascleral, 5 or less mm"
          }, {
            id : "0", name : "Extrascleral, more than 5 mm"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Free"
          }, {
            description : "for enucleation specimens",
            id : "0", name : "Positive extrascleral extension"
          }, {
            id : "0", name : "Equivocal"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "0", name : ""
          }, {
            description : "pathologic",
            id : "0", name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "0", name : "m"
          }, {
            description : "recurrent",
            id : "0", name : "r"
          }, {
            description : "post-treatment",
            id : "0", name : "y"
          }, {
            id : "0", name : "mp"
          }, {
            id : "0", name : "rp"
          }, {
            id : "0", name : "yp"
          }, {
            id : "0", name : "mrp"
          }, {
            id : "0", name : "myp"
          }, {
            id : "0", name : "ryp"
          }, {
            id : "0", name : "mryp"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            id : "0", name : "TX"
          }, {
            description : "IRIS TUMOR Tumor limited to the iris not more than 3 clock hours in size",
            id : "0", name : "T1a"
          }, {
            description : "IRIS TUMOR Tumor limited to the iris more than 3 clock hours in size",
            id : "0", name : "T1b"
          }, {
            description : "IRIS TUMOR Tumor limited to the iris with secondary glaucoma",
            id : "0", name : "T1c"
          }, {
            description : "IRIS TUMOR Tumor confluent with or extending into the ciliary body, choroid, or both",
            id : "0", name : "T2"
          }, {
            description : "IRIS TUMOR Tumor confluent with or extending into the ciliary body, choroid, or both, with secondary glaucoma",
            id : "0", name : "T2a"
          }, {
            description : "IRIS TUMOR Tumor confluent with or extending into the ciliary body, choroid, or both, with scleral extension",
            id : "0", name : "T3"
          }, {
            description : "IRIS TUMOR Tumor confluent with or extending into the ciliary body, choroid, or both, with scleral extension and secondary glaucoma",
            id : "0", name : "T3a"
          }, {
            description : "IRIS TUMOR Tumor with extrascleral extension less than or equal to 5 mm in diameter",
            id : "0", name : "T4a"
          }, {
            description : "IRIS TUMOR Tumor with extrascleral extension more than 5 mm in diameter",
            id : "0", name : "T4b"
          }, {
            description : "CILIARY BODY AND CHOROID Tumor size category 1 without ciliary body involvement and extraocular extension",
            id : "0", name : "T1a"
          }, {
            description : "CILIARY BODY AND CHOROID Tumor size category 1 with ciliary body involvement",
            id : "0", name : "T1b"
          }, {
            description : "CILIARY BODY AND CHOROID Tumor size category 1 without ciliary body involvement but with extraocular extension less than or equal to 5 mm in diameter",
            id : "0", name : "T1c"
          }, {
            description : "CILIARY BODY AND CHOROID Tumor size category 1 with ciliary body involvement and extraocular extension less than or equal to 5 mm in diameter",
            id : "0", name : "T1d"
          }, {
            description : "CILIARY BODY AND CHOROID Tumor size category 2 without ciliary body involvement and extraocular extension",
            id : "0", name : "T2a"
          }, {
            description : "CILIARY BODY AND CHOROID Tumor size category 2 with ciliary body involvement",
            id : "0", name : "T2b"
          }, {
            description : "CILIARY BODY AND CHOROID Tumor size category 2 without ciliary body involvement but with extraocular extension less than or equal to 5 mm in diameter",
            id : "0", name : "T2c"
          }, {
            description : "CILIARY BODY AND CHOROID Tumor size category 2 with ciliary body involvement and extraocular extension less than or equal to 5 mm in diameter",
            id : "0", name : "T2d"
          }, {
            description : "CILIARY BODY AND CHOROID Tumor size category 3 without ciliary body involvement and extraocular extension",
            id : "0", name : "T3a"
          }, {
            description : "CILIARY BODY AND CHOROID Tumor size category 3 with ciliary body involvement",
            id : "0", name : "T3b"
          }, {
            description : "CILIARY BODY AND CHOROID Tumor size category 3 without ciliary body involvement but with extraocular extension less than or equal to 5 mm in diameter",
            id : "0", name : "T3c"
          }, {
            description : "CILIARY BODY AND CHOROID Tumor size category 3 with ciliary body involvement and extraocular extension less than or equal to 5 mm in diameter",
            id : "0", name : "T3d"
          }, {
            description : "CILIARY BODY AND CHOROID Tumor size category 4 without ciliary body involvement and extraocular extension",
            id : "0", name : "T4a"
          }, {
            description : "CILIARY BODY AND CHOROID Tumor size category 4 with ciliary body involvement",
            id : "0", name : "T4b"
          }, {
            description : "CILIARY BODY AND CHOROID Tumor size category 4 without ciliary body involvement but with extraocular extension less than or equal to 5 mm in diameter",
            id : "0", name : "T4c"
          }, {
            description : "CILIARY BODY AND CHOROID Tumor size category 4 with ciliary body involvement and extraocular extension less than or equal to 5 mm in diameter",
            id : "0", name : "T4d"
          }, {
            description : "CILIARY BODY AND CHOROID Any tumor size category with extraocular extension more than 5 mm in diameter",
            id : "0", name : "T4e"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "0", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "0", name : "N0"
          }, {
            description : "Regional lymph node involvement",
            id : "0", name : "N1a"
          }, {
            description : "Tumor deposits in the orbit, no regional lymph node involvement (choroidal and ciliary body)",
            id : "0", name : "N1b"
          } ],
          id : "0", name : "Category (pN)"
        }, {
          group : [ {
            description : "Largest diameter of the largest metastasis 3 cm or less",
            id : "0", name : "M1a"
          }, {
            description : "Largest diameter of the largest metastasis 3.1-8.0 cm",
            id : "0", name : "M1b"
          }, {
            description : "Largest diameter of the largest metastasis 8.1 cm or more",
            id : "0", name : "M1c"
          }, {
            id : "0", name : "M (not applicable)"
          }, {
            id : "0", name : "distant metastasis not applicable"
          } ],
          id : "0", name : ""
        } ]
      } ]
    }, {
      most_common : false,
      id : "0", name : "Vagina",
      optional : false,
      organ_group : "Gynecologic",
      properties : [  {
        id : "0", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Excisional biopsy"
          }, {
            id : "0", name : "Partial vaginectomy"
          }, {
            id : "0", name : "Radical vaginectomy"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Upper third"
          }, {
            id : "0", name : "Middle third"
          }, {
            id : "0", name : "Lower third"
          }, {
            id : "0", name : "Not specified"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Squamous cell carcinoma"
          }, {
            id : "0", name : "Squamous cell carcinoma, keratinizing "
          }, {
            id : "0", name : "Squamous cell carcinoma, non-keratinizing "
          }, {
            id : "0", name : "Squamous cell carcinoma, basaloid "
          }, {
            id : "0", name : "Squamous cell carcinoma, warty "
          }, {
            id : "0", name : "Squamous cell carcinoma, verrucous "
          }, {
            id : "0", name : "Paget disease "
          }, {
            id : "0", name : "Adenocarcinoma"
          }, {
            id : "0", name : "Clear cell adenocarcinoma"
          }, {
            id : "0", name : "Endometrioid adenocarcinoma "
          }, {
            id : "0", name : "Mucinous adenocarcinoma "
          }, {
            id : "0", name : "Mesonephric adenocarcinoma "
          }, {
            id : "0", name : "Intestinal type adenocarcinoma "
          }, {
            id : "0", name : "Adenosquamous carcinoma"
          }, {
            id : "0", name : "Small cell carcinoma"
          }, {
            id : "0", name : "Large cell neuroendocrine carcinoma"
          }, {
            id : "0", name : "Undifferentiated carcinoma"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Grade 1/4, Well differentiated"
          }, {
            id : "0", name : "Grade 2/4, Moderately differentiated"
          }, {
            id : "0", name : "Grade 3/4, Poorly differentiated"
          }, {
            id : "0", name : "Grade 4/4, Undifferentiated"
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "paravaginal tissue, pelvic sidewall, vagina lower third, bladder mucosa, rectal mucosa",
        id : "0", name : "Other tissue(s) involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "peripheral, deep",
        id : "0", name : "Margins, invasive tumor",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Positive"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "peripheral",
        id : "0", name : "Margins, HSIL",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Positive"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Indeterminate"
          }, {
            id : "0", name : "Suspicious"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Present, extensive"
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "includes : For upper two-thirds of the vagina, the following are considered regional lymph nodes: pelvic, parametrial, obturator, internal iliac (hypogastric), external iliac, common iliac, sacral, presacral, and para-aortic. For lower third of the vagina, the following are considered regional lymph nodes: inguinal and femoral",
        id : "0", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # involved (no ITC)",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # with isolated tumor cells",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Positive lymph node location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "0", name : ""
          }, {
            description : "pathologic",
            id : "0", name : "AJCC p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "0", name : "AJCC m"
          }, {
            description : "recurrent",
            id : "0", name : "AJCC r"
          }, {
            description : "post-treatment",
            id : "0", name : "AJCC y"
          }, {
            id : "0", name : "AJCC mp"
          }, {
            id : "0", name : "AJCC rp"
          }, {
            id : "0", name : "AJCC yp"
          }, {
            id : "0", name : "AJCC mrp"
          }, {
            id : "0", name : "AJCC myp"
          }, {
            id : "0", name : "AJCC ryp"
          }, {
            id : "0", name : "AJCC mryp"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            id : "0", name : "TX"
          }, {
            description : "Carcinoma in situ",
            id : "0", name : "Tis"
          }, {
            description : "<= 2cm AND Tumor limited to vaginal wall",
            id : "0", name : "T1a"
          }, {
            description : "> 2 cm AND Tumor limited to vaginal wall",
            id : "0", name : "T1b"
          }, {
            description : "<= 2cm AND Tumor invades paravaginal tissues but not the pelvic wall",
            id : "0", name : "T2a"
          }, {
            description : "> 2 cm AND Tumor invades paravaginal tissues but not the pelvic wall",
            id : "0", name : "T2b"
          }, {
            description : "Tumor extends to pelvic wall",
            id : "0", name : "T3"
          }, {
            description : "Tumor invades mucosa of bladder or rectum and/or extends beyond true pelvis",
            id : "0", name : "T4"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "0", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "0", name : "N0"
          }, {
            description : "Isolated tumor cells, <=0.2mm",
            id : "0", name : "N0(i+)"
          }, {
            description : "Regional lymph node metastases",
            id : "0", name : "N1"
          } ],
          id : "0", name : "Category (pN)"
        }, {
          group : [ {
            description : "metastases",
            id : "0", name : "M1"
          }, {
            id : "0", name : "M (not applicable)"
          }, {
            id : "0", name : "distant metastasis not applicable"
          } ],
          id : "0", name : ""
        } ]
  
    }, {
        id : "0", name : "Stage FIGO (2015)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "Carcinoma is limited to the vaginal wall",
            id : "0", name : "FIGO I"
          }, {
            description : "Carcinoma has involved the para-vaginal tissue but has not extended to the pelvic wall",
            id : "0", name : "FIGO II"
          }, {
            description : "Carcinoma has extended to the pelvic wall and/or involving the lower third of the vagina and/or causing hydronephrosis or nonfunctioning kidney",
            id : "0", name : "FIGO III"
          }, {
            description : "Tumor invades bladder and/or rectal mucosa and/or direct extension beyond the true pelvis",
            id : "0", name : "FIGO IVA"
          }, {
            description : "Spread to distant organs",
            id : "0", name : "FIGO IVB"
          }, {
            description : "",
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
           } ]
      }, {
      most_common : false,
      id : "0", name : "Vulva",
      optional : false,
      organ_group : "Gynecologic",
      properties : [  {
        id : "0", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Local excision"
          }, {
            id : "0", name : "Wide excision"
          }, {
            id : "0", name : "Partial vulvectomy"
          }, {
            id : "0", name : "Total vulvectomy "
          }, {
            id : "0", name : "Radical vulvectomy"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Right vulva"
          }, {
            id : "0", name : "Left vulva"
          }, {
            id : "0", name : "Clitoris"
          }, {
            id : "0", name : "Not specified"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor Focality",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Single focus"
          }, {
            id : "0", name : "Multiple foci"
          }, {
            id : "0", name : "Equivocal"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Squamous cell carcinoma"
          }, {
            id : "0", name : "Superficial invasive squamous cell carcinoma (SISSCA)"
          }, {
            id : "0", name : "Squamous cell carcinoma, keratinizing "
          }, {
            id : "0", name : "Squamous cell carcinoma, non-keratinizing "
          }, {
            id : "0", name : "Squamous cell carcinoma, basaloid "
          }, {
            id : "0", name : "Squamous cell carcinoma, warty "
          }, {
            id : "0", name : "Squamous cell carcinoma, verrucous "
          }, {
            id : "0", name : "Paget disease "
          }, {
            id : "0", name : "Adenocarcinoma"
          }, {
            id : "0", name : "Adenoid cystic carcinoma"
          }, {
            id : "0", name : "Adenosquamous carcinoma "
          }, {
            id : "0", name : "Transitional cell carcinoma "
          }, {
            id : "0", name : "Adenocarcinoma of mammary gland type "
          }, {
            id : "0", name : "Adenocarcinoma of Skene gland origin "
          }, {
            id : "0", name : "Malignant sweat gland tumor"
          }, {
            id : "0", name : "Small cell carcinoma"
          }, {
            id : "0", name : "Large cell neuroendocrine carcinoma"
          }, {
            id : "0", name : "Merkel cell carcinoma"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Grade 1/4, Well differentiated"
          }, {
            id : "0", name : "Grade 2/4, Moderately differentiated"
          }, {
            id : "0", name : "Grade 3/4, Poorly differentiated"
          }, {
            id : "0", name : "Grade 4/4, Undifferentiated"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Depth of invasion",
       optional_state  : "required", "options" : [ {
          id : "0", name : ""
        } ]
      }, {
        description : "vagina lower third, vagina upper two thirds, urethra lower third, urethra upper two thirds, anus, bladder mucosa, rectal mucosa, pelvic bone",
        id : "0", name : "Other tissue(s) involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
         description : "peripheral, deep",
        id : "0", name : "Margins, invasive tumor",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Positive"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
         description : "peripheral",
        id : "0", name : "Margins, HSIL/Pagets",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            id : "0", name : "Positive"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Indeterminate"
          }, {
            id : "0", name : "Suspicious"
          }, {
            id : "0", name : "Present"
          }, {
            id : "0", name : "Present, extensive"
          } ],
          id : "0", name : ""
        } ]
      }, {
        
        id : "0", name : "Lymph nodes, # sentinel",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "includes inguinal, femoral ",
        id : "0", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
       
        id : "0", name : "Lymph nodes, # w/ mets >= 5mm",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
       
        id : "0", name : "Lymph nodes, # w/ mets >0.2mm, < 5mm",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        description : "<= 0.2mm",
        id : "0", name : "Lymph nodes, # w/ isolated tumor cells",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Location of largest deposit",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph node other findings",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Not applicable"
          }, {
            id : "0", name : "None"
          }, {
            id : "0", name : "Extranodal extension"
          }, {
            id : "0", name : "Fixed or Ulcerated nodes"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            id : "0", name : ""
          }, {
            description : "pathologic",
            id : "0", name : "AJCC p"
          }, {
            description : "multiple foci of invasive carcinoma",
            id : "0", name : "AJCC m"
          }, {
            description : "recurrent",
            id : "0", name : "AJCC r"
          }, {
            description : "post-treatment",
            id : "0", name : "AJCC y"
          }, {
            id : "0", name : "AJCC mp"
          }, {
            id : "0", name : "AJCC rp"
          }, {
            id : "0", name : "AJCC yp"
          }, {
            id : "0", name : "AJCC mrp"
          }, {
            id : "0", name : "AJCC myp"
          }, {
            id : "0", name : "AJCC ryp"
          }, {
            id : "0", name : "AJCC mryp"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            id : "0", name : "TX"
          }, {
            description : "High-grade squamous intraepithelial lesion (carcinoma in situ, VIN 2-3, preinvasive carcinoma)",
            id : "0", name : "Tis"
          }, {
            description : "Lesions 2 cm or less in size, limited to the vulva or perineum, and with stromal invasion 1.0 mm or less",
            id : "0", name : "T1a"
          }, {
            description : "Lesions more than 2 cm in size or any size with stromal invasion more than 1.0 mm, limited to the vulva or perineum",
            id : "0", name : "T1b"
          }, {
            description : "Tumor of any size with extension to adjacent perineal structures (lower/distal one-third urethra, lower/distal one-third vagina, anal involvement)",
            id : "0", name : "T2"
          }, {
            description : "Tumor of any size with extension to any of the following: upper/proximal two-thirds of urethra, upper/proximal two-thirds vagina, bladder mucosa, rectal mucosa, or fixed to pelvic bone",
            id : "0", name : "T3"
          } ],
          id : "0", name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            id : "0", name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            id : "0", name : "N0"
          }, {
            description : "1 or 2 lymph node metastasis  (not ln) all 5 mm or less",
            id : "0", name : "N1a"
          }, {
            description : "1 lymph node metastasis (not ln) 5 mm or greater",
            id : "0", name : "N1b"
          }, {
            description : "3 or more lymph node metastases  (not ln) all less than 5 mm",
            id : "0", name : "N2a"
          }, {
            description : "2 or more lymph node metastases (not ln) one of which is 5 mm or greater ",
            id : "0", name : "N2b"
          }, {
            description : "Lymph node metastasis with extracapsular extension",
            id : "0", name : "N2c"
          }, {
            description : "Fixed or ulcerated regional lymph node metastasis",
            id : "0", name : "N3"
          } ],
          id : "0", name : "Category (pN)"
        }, {
          group : [ {
            description : "metastases",
            id : "0", name : "M1"
          }, {
            id : "0", name : "M (not applicable)"
          }, {
            id : "0", name : "distant metastasis not applicable"
          } ],
          id : "0", name : ""
        } ]
  
    }, {
        id : "0", name : "Stage FIGO (2015)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "Lesions ≤2 cm in size, confined to the vulva or perineum and with stromal invasion ≤1.0 mm, no nodal metastasis",
            id : "0", name : "FIGO IA"
          }, {
            description : "Lesions >2 cm in size or with stromal invasion >1.0 mm, confined to the vulva and/or perineum, with negative nodes",
            id : "0", name : "FIGO IB"
          }, {
            description : "Tumor of any size with extension to adjacent perineal structures (lower third of urethra, lower third of vagina, anus) with negative nodes",
            id : "0", name : "FIGO II"
          }, {
            description : "With 1 lymph node metastasis (≥5 mm) OR With 1 to 2 lymph node metastasis(es) (<5 mm)",
            id : "0", name : "FIGO IIIA"
          }, {
            description : "With 2 or more lymph node metastases (≥5 mm) OR With 3 or more lymph node metastases (<5 mm)",
            id : "0", name : "FIGO IIIB"
          }, {
            description : "With positive nodes with extracapsular spread",
            id : "0", name : "FIGO IIIC"
          }, {
            description : "Tumor invades any of the following: upper urethral and/or vaginal mucosa, bladder mucosa, rectal mucosa, or fixed to pelvic bone, or fixed or ulcerated inguinofemoral lymph nodes",
            id : "0", name : "FIGO IVA"
          }, {
            description : "Any distant metastasis including pelvic lymph nodes",
            id : "0", name : "FIGO IVB"
          }, {
            description : "",
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
           } ]
      }, {
      most_common : false,
      id : "0", name : "Wilms tumor",
      optional : false,
      organ_group : "Pediatric",
      properties : [ {
        id : "0", name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Right partial nephrectomy"
          }, {
            id : "0", name : "Right radical nephrectomy "
          },{
            id : "0", name : "Left partial nephrectomy"
          }, {
            id : "0", name : "Left radical nephrectomy "
          },{
            id : "0", name : "Bilateral partial nephrectomy"
          }, {
            id : "0", name : "Bilateral radical nephrectomy "
          },{
            id : "0", name : "Horseshoe, midline partial nephrectomy"
          }, {
            id : "0", name : "Horseshoe midline radical nephrectomy "
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Specimen weight",
       optional_state  : "required", "options" : [ {
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor size",
       optional_state  : "required", "options" : [ {
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Tumor Focality",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Single focus"
          }, {
            id : "0", name : "Multiple foci "
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Gerota’s Fascia Involvement",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Gerota’s fascia intact"
          }, {
            id : "0", name : "Gerota’s fascia disrupted"
          }, {
            id : "0", name : "Equivocal "
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Renal Sinus Involvement",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Tumor minimally extends into renal sinus soft tissue"
          }, {
            id : "0", name : "Tumor extensively involves renal sinus soft tissue"
          }, {
            id : "0", name : "Tumor involves Lymphovascular spaces in the renal sinus "
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Renal Vein Involvement",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            id : "0", name : "Renal vein invasion present"
          }, {
            id : "0", name : "Equivocal "
          } ],
          id : "0", name : ""
        } ]
       }, {
        id : "0", name : "Renal Capsule Involvement",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Extension beyond renal capsule present"
          }, {
            id : "0", name : "No extension beyond renal capsule"
          }, {
            id : "0", name : "Equivocal "
          } ],
          id : "0", name : ""
        } ]  
      }, {
        id : "0", name : "Adjacent Organ Involvement",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            description : "specify",
            inputs_required : [ "" ],
            id : "0", name : "Present"
          }, {
            id : "0", name : "Equivocal "
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "Wilms tumor, favorable histology"
          }, {
            id : "0", name : "Wilms tumor, focal anaplasia "
          }, {
            id : "0", name : "Wilms tumor, diffuse anaplasia "
          }, {
            id : "0", name : "Nephrogenic rest only"
          }, {
            id : "0", name : "Congenital mesoblastic nephroma, classical, cellular or mixed"
          }, {
            id : "0", name : "Clear cell sarcoma "
          }, {
            id : "0", name : "Rhabdoid tumor"
          } ],
          id : "0", name : ""
        } ]
      }, {
       
        id : "0", name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
         
           
            id : "0", name : "Free"
          }, {
         
          
            id : "0", name : "Positive"
          }],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "0" },{ id : "0", name : "1" },{ id : "0", name : "2" },{ id : "0", name : "3"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Distant metastases",
       optional_state  : "required", "options" : [ {
          group : [ {
            id : "0", name : "None"
          }, {
            inputs_required : [ "" ],
            id : "0", name : "Present"
          }, {
            id : "0", name : "Not applicable"
          } ],
          id : "0", name : ""
        } ]
      }, {
        id : "0", name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "Tumor limited to kidney and completely resected",
            id : "0", name : "Stage 1"
          }, {
            description : "Tumor extends beyond kidney but completely resected",
            id : "0", name : "Stage 2 "
          }, {
            description : "Residual tumor",
            id : "0", name : "Stage 3"
          }, {
            description : "Metastatic disease",
            id : "0", name : "Stage 4"
          }, {
            description : "Bilateral renal involvement at diagnosis ",
            id : "0", name : "Stage 5 "
          } ],
          id : "0", name : ""
        } ]
      } ]
    } ],
  
   
  }
 


        
  var app = new Vue({
    el: '#app',
    data: database,
    
    methods: {
        
        displayQuestions: function(site){
            this.section = "showQuestions";  
            this.current_tumor = site.name;  
            this.current_tumor_biopsy_type = site.biopsy_type;
            this.synresults = site.properties;
         
            for (var i=0; i<this.synresults.length; i++){
              this.row.inputanswers.push("!!!!YOU FORGOT THIS ONE??0")
            };
              for (var i=0; i< 3; i++){
                this.row.inputanswers.push("!!!!YOU FORGOT THIS ONE??1")

            };
            for (var i=0; i<this.synresults.length +3; i++){
              this.row2.freetextanswers.push(" ")
                
            };
            
            firstrow = {question: "TUMOR SUMMARY", answer: this.current_tumor}
            this.row3.finalanswers.push(firstrow)

            for (var i=0; i<this.synresults.length; i++){
              var value = {question: this.synresults[i].name, answer: this.row.inputanswers[i]}
              this.row3.finalanswers.push(value)
            };
            for (var i=0; i<this.synresults.length +3; i++){
              this.row5.useFreeText.push(true)
            }
            for (var i=0; i<this.synresults.length; i++){
              this.row6.bgc.push("#ffcccc")
            }
        },
        
        displayhomeMenu: function(){
          this.section = "homeMenu"
          this.synresults = [];
          this.row.inputanswers = [];
          this.row2.freetextanswers = [];
          this.row3.finalanswers = [];
          this.row4.comboanswers = []
          this.row5.useFreeText = []
          this.row6.bgc = []
        },
        changeUseFreeText: function(i){
          this.row5.useFreeText[i] = false
          this.row5.useFreeText[i] = true
          this.row6.bgc[i] = "#66ff99"
          this.$nextTick(function () {
            this.updateTable()
          })
         
        },

        dontUseFreeText: function(i){
          this.row5.useFreeText[i] = false
          this.row6.bgc[i] = "#66ff99"
          this.$nextTick(function () {
            this.updateTable()
          })
          

        },
        changeColor: function(i){
          this.row6.bgc[i] = "#66ff99"
          this.$nextTick(function () {
            this.updateTable()
          })
          
          

        },

        updateTable: function(){
          this.showtable = false;
          this.showtable = true;
          
          this.row4.comboanswers = []

          var count = 0
          for (var i = 0; i<this.row.inputanswers.length; i++){
            ans = this.row.inputanswers[i].substring(0,this.row.inputanswers[i].length-1)
            index3 = this.row.inputanswers[i].substring(this.row.inputanswers[i].length-1, this.row.inputanswers[i].length)
            

            if (ans ==="p" ||    
                  ans === "m" ||   
                  ans === "r" ||   
                  ans === "y" ||   
                  ans === "mp" ||   
                  ans === "rp" ||   
                  ans === "yp" ||   
                  ans === "mrp" ||   
                  ans === "myp" ||     
                  ans === "ryp" ||   
                  ans === "mryp" ||
                  ans ==="AJCC p" ||    
                  ans === "AJCC m" ||   
                  ans === "AJCC r" ||   
                  ans === "AJCC y" ||   
                  ans === "AJCC mp" ||   
                  ans === "AJCC rp" ||   
                  ans === "AJCC yp" ||   
                  ans === "AJCC mrp" ||   
                  ans === "AJCC myp" ||     
                  ans === "AJCC ryp" ||   
                  ans === "AJCC mryp"
                  ){
                    count = this.row4.comboanswers.length
                  }

            if (index3 === "0"){
              this.row4.comboanswers.push(ans)
            }
            else if (this.row5.useFreeText[i] && this.row2.freetextanswers[i]=== " " && count !=0) {
              this.row4.comboanswers[count] = this.row4.comboanswers[count] + " " + "!!!!YOU FORGOT THIS ONE??0"
              }
            else if (this.row5.useFreeText[i] && this.row2.freetextanswers[i]!= " " && count !=0) {
                this.row4.comboanswers[count] = this.row4.comboanswers[count] + " " + this.row2.freetextanswers[i]
              }
            else if (count !=0) {
              this.row4.comboanswers[count] = this.row4.comboanswers[count] + " " + ans
            }
            
          }


          this.row3.finalanswers = [];
          firstrow = {question: "TUMOR SUMMARY", answer: this.current_tumor}
          this.row3.finalanswers.push(firstrow)
          for (var i=0; i<this.synresults.length; i++){
            if (this.row5.useFreeText[i]){
              if (this.row2.freetextanswers[i]=== " ") {
                ans = "!!!!YOU FORGOT THIS ONE??0"
              }
              else{
                ans =this.row2.freetextanswers[i]
              }
            } else {
              
              ans = this.row4.comboanswers[i]
            } 
            var value = {question: this.synresults[i].name, answer: ans}
            this.row3.finalanswers.push(value)
          };
          
          

          return this.row3.finalanswers

          
      }

    },
    


})
