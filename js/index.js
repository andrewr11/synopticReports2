


var database = {
    synresults: [
    ],
    tableresults: [

    ],
   
    tableanswers: [

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
    site_groups: [
      {name : "Breast"},
      {name : "Central Nervous System"},
      {name : "Endocrine"},
      {name : "Gastrointestinal"},
      {name : "Genitourinary"},
      {name : "Gynecologic"},
      {name : "Head and Neck"},
      {name : "Hematologic"},
      {name : "Ophthalmic"},
      {name : "Other"},
      {name : "Other-Biomarkers"},
      {name : "Pediatric"},
      {name : "Skin"},
      {name : "Thorax"},
    ],
    current_tumor:"Tango",
    pressed: false,
    section: "homeMenu",
    showtable: true,
    tumor_types : [ {
      most_common : false,
      name : "Adrenal",
      optional : false,
      organ_group : "Endocrine",
      properties : [  {
        name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Right adrenalectomy, total"
          }, {
            name : "Right adrenalectomy, partial"
          }, {
            name : "Left adrenalectomy, total"
          }, {
            name : "Left adrenalectomy, partial"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor size",
       optional_state  : "required", "options" : [ {
          name : ""
        } ]
      }, {
        name : "Tumor weight",
       optional_state  : "required", "options" : [ {
          name : ""
        } ]
      }, {
         description : "do not use for pheochromocytoma",
        name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Adrenal cortical carcinoma"
          } ],
          name : ""
        } ]
   }, {
        name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
             description : "<= 20 mitoses/50 hpf",
            name : "Low grade"
          }, {
             description : ">20 mitoses/50 hpf",
            name : "High grade"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Indeterminate"
          }, {
            name : "Suspicious"
          }, {
            name : "Large vessel, renal vein (including when identifed clinically)"
          }, {
            name : "Large vessel, vena cava (including when identifed clinically)"
          }, {
            name : "Small vessel"
          }   ],
          name : ""
        } ]
   
   
      }, {
        name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Limited to adrenal"
          }, {
            name : "Tumor invades into or through the adrenal capsule"
          }, {
            name : "Tumor invades into extra-adrenal structures "
          }, {
             description : "specify",
            inputs_required : [ "" ],
            name : "Tumor invades into adjacent organs"
          }  ],
          name : ""
        } ]
   
   
      }, {
        description : "include distance/location of closest margin",
        name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            name : "Positive"
          } ],
          name : ""
        } ]
  
   
      }, {
        name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
  
  
      }, {
        name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            name : ""
          }, {
            description : "pathologic",
            name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            name : "m"
          }, {
            description : "recurrent",
            name : "r"
          }, {
            description : "post-treatment",
            name : "y"
          }, {
            name : "mp"
          }, {
            name : "rp"
          }, {
            name : "yp"
          }, {
            name : "mrp"
          }, {
            name : "myp"
          }, {
            name : "ryp"
          }, {
            name : "mryp"
          } ],
          name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            name : "TX"
          }, {
            description : "ADRENAL CORTICAL CARCINOMA <=5 cm AND organ limited",
            name : "T1"
          }, {
            description : "ADRENAL CORTICAL CARCINOMA >5 cm  AND organ limited",
            name : "T2"
          }, {
            description : "ADRENAL CORTICAL CARCINOMA local invasion, no organs",
            name : "T3"
          }, {
            description : "ADRENAL CORTICAL CARCINOMA Invades other organs",
            name : "T4"
          } ],
          name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            name : "NX"
          }, {
            description : "No metastasis",
            name : "N0"
          }, {
            description : "Regional metastases",
            name : "N1"
          } ],
          name : "Category (M)"
        }, {
          group : [ {
            description : "Distant metastases",
            name : "M1"
          }, {
            name : "M (not applicable)"
          }, {
            name : "distant metastasis not applicable"
          } ],
          name : ""
        } ]
      } ]
    }, {
      most_common : false,
      name : "Ampulla of  Vater",
      optional : false,
      organ_group : "Gastrointestinal",
      properties : [  {
        name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Ampullectomy"
          }, {
            name : "Whipple resection"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Intra-ampullary"
          }, {
            name : "Peri-ampullary"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor size",
       optional_state  : "required", "options" : [ {
          name : ""
        } ]
      }, {
        name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Adenocarcinoma"
          }, {
            name : "Adenocarcinoma, pancreaticobiliary type"
          }, {
            name : "Adenocarcinoma, intestinal type"
          }, {
            name : "Medullary carcinoma"
          }, {
            name : "Invasive papillary adenocarcinoma"
          }, {
            name : "Mucinous adenocarcinoma"
          }, {
            name : "Clear cell adenocarcinoma"
          }, {
            name : "Signet-ring cell carcinoma"
          }, {
            name : "Adenosquamous carcinoma"
          }, {
            name : "Squamous cell carcinoma"
          }, {
            name : "Hepatoid adenocarcinoma "
          }, {
            name : "Large cell neuroendocrine carcinoma"
          }, {
            name : "Small cell neuroendocrine carcinoma"
          }, {
            name : "Neuroendocrine carcinoma (poorly differentiated)"
          }, {
            name : "Undifferentiated carcinoma"
          }, {
            name : "Undifferentiated carcinoma with osteoclast giant cells"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Grade 1/3, well differentiated"
          }, {
            name : "Grade 2/3, moderately differentiated"
          }, {
            name : "Grade 3/3, poorly differentiated"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Carcinoma in situ"
          }, {
            name : "Limited to ampulla of Vater or sphincter of Oddi"
          }, {
            name : "Invades beyond sphincter of Oddi (perisphincteric invasion) "
          }, {
            name : "Invades into duodenal submucosa "
          }, {
            name : "Invades into muscularis propria of the duodenum"
          }, {
            name : "Directly invades pancreas up to 0.5 cm"
          }, {
            name : "Extends more than 0.5 cm into pancreas "
          }, {
            name : "Extends into peripancreatic soft tissues "
          }, {
            name : "Extends into periduodenal tissue"
          }, {
            name : "Extends into duodenal serosa "
          }, {
             description : "specify",
              inputs_required : [ "" ],
            name : "Invades other adjacent organs or structures other than pancreas "
          } ],
          name : ""
        } ]
      }, {
        description : "include distance/location of closest margin, including mucosa(ampullectomy), pancreatic neck, uncinate, bile duct, proximal, distal",
        name : "Margins, invasive tumor",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            name : "Positive"
          } ],
          name : ""
        } ]
      }, {
        description : "include distance/location of closest margin, including mucosa(ampullectomy), pancreatic neck, uncinate, bile duct, proximal, distal",
        name : "Margins, dysplasia/CIS",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            name : "Positive"
          }, {
            name : "Not applicable"
          }  ],
          name : ""
        } ]
      }, {
        name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Indeterminate"
          }, {
            name : "Suspicious"
          }, {
            name : "Present"
          }, {
            name : "Present, extensive"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            name : ""
          }, {
            description : "pathologic",
            name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            name : "m"
          }, {
            description : "recurrent",
            name : "r"
          }, {
            description : "post-treatment",
            name : "y"
          }, {
            name : "mp"
          }, {
            name : "rp"
          }, {
            name : "yp"
          }, {
            name : "mrp"
          }, {
            name : "myp"
          }, {
            name : "ryp"
          }, {
            name : "mryp"
          } ],
          name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            name : "TX"
          }, {
            description : "Carcinoma in situ",
            name : "Tis"
          }, {
            description : "limited to ampulla of Vater and sphincter of Oddi",
            name : "T1a"
          }, {
            description : "invades beyond sphincter of Oddi and/or into the duodenal mucosa",
            name : "T1b"
          }, {
            description : "invades muscularis propria of duodenum",
            name : "T2"
          }, {
            description : "invades pancreas up to 0.5 cm",
            name : "T3a"
          }, {
            description : "(Tumor extends more than 0.5 cm into the pancreas, or extends into peripancreatic tissue or periduodenal tissue or duodenal serosa without involvement of the celiac axis or superior mesenteric artery)",
            name : "T3b"
          }, {
            description : "Invades celiac axis superior mesenteric artery and or common hepatic artery",
            name : "T4"
          } ],
          name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            name : "NX"
          }, {
            description : "No metastasis",
            name : "N0"
          }, {
            description : "1- 3 Regional metastases",
            name : "N1"
          }, {
            description : "4 or more Regional metastases",
            name : "N2"
          } ],
          name : "Category (M)"
        }, {
          group : [ {
            description : "Distant metastases",
            name : "M1"
          }, {
            name : "M (not applicable)"
          }, {
            name : "distant metastasis not applicable"
          } ],
          name : ""
        } ]
        }, {
         description: "adenocarcinoma only",
        name : "MSI IHC and Interpretation",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Intact nuclear expression of MMR proteins (MLH1, MSH2, MSH6, PMS2): No evidence of deficient mismatch repair (low probability of MSI-H)"
          },{
            name : "Loss of nuclear expression of one or more MMR proteins (MLH1, MSH2, MSH6, PMS2): deficient mismatch repair/ high probability of microsatellite instability-high (MSI-H). The presence of MSI-H/deficient mismatch repair may also be an indication for additional testing for Lynch syndrome and genetic counselling."
          }, {
            name : "Pending"
          }, {
            name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            name : "See case "
          }],
          name : ""
        } ]
      } ]
    }, {
      most_common : false,
      name : "Anus",
      optional : false,
      organ_group : "Gastrointestinal",
      properties : [  {
        name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Abdominoperineal resection"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Anal canal"
          }, {
            name : "Perianal region"
          }, {
            name : "Anus, not otherwise specified"
          }, {
            name : "Anorectal junction"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor size",
       optional_state  : "required", "options" : [ {
          name : ""
        } ]
      }, {
        name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Squamous cell carcinoma"
          }, {
            name : "Verrucous carcinoma"
          }, {
            name : "Basal cell carcinoma"
          }, {
            name : "Adenocarcinoma"
          }, {
            name : "Mucinous adenocarcinoma"
          }, {
            name : "Squamous cell carcinoma"
          }, {
            name : "Large cell neuroendocrine carcinoma"
          }, {
            name : "Small cell carcinoma"
          }, {
            name : "Paget's disease"
          } ],
          name : ""
        } ]
      }, {
        name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Grade 1/4, Well differentiated"
          }, {
            name : "Grade 2/4, Moderately differentiated"
          }, {
            name : "Grade 3/4, Poorly differentiated"
          }, {
            name : "Grade 4/4, Undifferentiated"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Carcinoma in situ"
          }, {
            name : "Invades lamina propria"
          }, {
            name : "Invades muscularis mucosae"
          }, {
            name : "Invades submucosa"
          }, {
            name : "Invades anal sphincter muscle"
          }, {
            name : "Invades perianal or perirectal soft tissue"
          }, {
             description : "specify",
              inputs_required : [ "" ],
            name : "Invades other structures"
          }, {
            name : "Invades perianal skin"
          } ],
          name : ""
        } ]
      }, {
        description : "include distance/location of closest margin, proximal distal and radial",
        name : "Margins, invasive tumor",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            name : "Positive"
          }],
          name : ""
        } ]
      }, {
        description : "include distance/location of closest margin, proximal distal radial",
        name : "Margins, dysplasia/CIS",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            name : "Positive"
          } ],
          name : ""
        } ]
      }, {
        name : "Treatment effect, primary site",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Not applicable"
          }, {
            name : "Absent"
          }, {
            name : "Present"
          }, {
            name : "Not known"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, external iliac, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, ,external iliac, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, other, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, ,other, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            name : ""
          }, {
            description : "pathologic",
            name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            name : "m"
          }, {
            description : "recurrent",
            name : "r"
          }, {
            description : "post-treatment",
            name : "y"
          }, {
            name : "mp"
          }, {
            name : "rp"
          }, {
            name : "yp"
          }, {
            name : "mrp"
          }, {
            name : "myp"
          }, {
            name : "ryp"
          }, {
            name : "mryp"
          } ],
          name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            name : "TX"
          }, {
            description : "Carcinoma in situ",
            name : "Tis"
          }, {
            description : "<= 2cm",
            name : "T1"
          }, {
            description : ">2cm AND <=5cm",
            name : "T2"
          }, {
            description : ">5cm",
            name : "T3"
          }, {
            description : "Invades other organs",
            name : "T4"
          } ],
          name : ""
           }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            name : "NX"
          }, {
            description : "No regional lymph node metastases",
            name : "N0"
          }, {
            description : "Inguinal mesorectal or internal iliac lymph node metastases",
            name : "N1a"
          }, {
            description : "External iliac lymph node metastases",
            name : "N1b"
          }, {
            description : "N1a metastasis plus external iliac lymph node metastases",
            name : "N1c"
          } ],
          name : "Category (pN)"
        }, {
          group : [ {
            description : "Metastases",
            name : "M1"
          }, {
            name : "M (not applicable)"
          }, {
            name : "distant metastasis not applicable"
          } ],
          name : ""
        } ]
  
      }, {
         description : "for squamous/basaloid carcinoma",
        name : "p16 Immunohistochemistry ",
       optional_state  : "required", "options" : [ {
          group : [  {
            name : "Negative "
          }, {
            name : "Equivocal"
          }, {
            name : "Not applicable "
          }, {
            name : "Not performed"
          }, {
            name : "Pending"
          } ],
          name : ""
        } ]
      }, {
         description : "for squamous/basaloid carcinoma",
        name : "HPV ISH ",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Positive "
          }, {
            name : "Negative "
          }, {
            name : "Equivocal"
          }, {
            name : "Not applicable "
          }, {
            name : "Not performed"
          }, {
            name : "Pending"
          } ],
          name : ""
        } ]
      }, {
         description : "for squamous/basaloid carcinoma",
        name : "HPV PCR ",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Positive "
          }, {
            name : "Negative "
          }, {
            name : "Equivocal"
          }, {
            name : "Not applicable "
          }, {
            name : "Not performed"
          }, {
            name : "Pending"
          } ],
          name : ""
        } ]
        }]
    }, {
      most_common : false,
      name : "Appendix",
      optional : false,
      organ_group : "Gastrointestinal",
      properties : [  {
        name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Appendectomy"
          }, {
            name : "Appendectomy and cecal resection"
          }, {
            name : "Appendectomy and right colectomy"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor size",
       optional_state  : "required", "options" : [ {
          name : ""
        } ]
      }, {
        name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Adenocarcinoma"
          }, {
            name : "Mucinous carcinoma"
          }, {
            name : "Low grade mucinous neoplasm"
          }, {
            name : "High grade mucinous neoplasm"
          }, {
            name : "Signet ring cell carcinoma"
          }, {
            name : "Goblet cell carcinoid"
          }, {
            name : "Mixed adenocarcinoma/goblet cell carcinoid"
          }, {
            name : "Large cell neuroendocrine carcinoma"
          }, {
            name : "Small cell carcinoma"
          } ],
          name : ""
        } ]
      }, {
        name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Grade 1/3, Well differentiated"
          }, {
            name : "Grade 2/3, Moderately differentiated"
          }, {
            name : "Grade 3/3, Poorly differentiated"
          }, {
            description : "low grade mucinous neoplasm",
            name : "Low grade"
          }, {
            description : "high grade mucinous neoplasm",
            name : "High grade"
          } ],
          name : ""
        } ]
      }, {
        name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "In situ/No invasion of lamina propria"
          }, {
            name : "Intramucosal (invades lamina propria/muscularis mucosa)"
          }, {
            name : "Invades submucosa"
          }, {
            name : "Invades muscularis propria"
          }, {
            name : "Invades subserosa"
          }, {
            name : "Penetrates serosa"
          }, {
             description : "specify",
               inputs_required : [ "" ],
            name : "Invades other organs"
          }, {
             description : "Stage TIS for low grade mucinous tumors",
            name : "Mucin or cells invade muscularis propria"
          }, {
            name : "Invades subserosal tissue"
          }, {
             description : "Stage T3 for low grade mucinous tumors",
            name : "Mucin or cells invade subserosal tissue"
          }, {
            name : "Penetrates serosa"
          }, {
             description : "Stage T4a for low grade mucinous tumors",
            name : "Mucin or cells penetrate serosa"
          } ],
          name : ""
        } ]
      }, {
        description : "include distance/location of closest margin, proximal, radial(if applicable)",
        name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            name : "Positive"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Indeterminate"
          }, {
            name : "Suspicious"
          }, {
            name : "Present"
          }, {
            name : "Present, extensive"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor deposits",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "Present",
            inputs_required : [ "#" ],
            name : ""
          }, {
            name : "None"
          }, {
            name : "Equivocal"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            name : ""
          }, {
            description : "pathologic",
            name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            name : "m"
          }, {
            description : "recurrent",
            name : "r"
          }, {
            description : "post-treatment",
            name : "y"
          }, {
            name : "mp"
          }, {
            name : "rp"
          }, {
            name : "yp"
          }, {
            name : "mrp"
          }, {
            name : "myp"
          }, {
            name : "ryp"
          }, {
            name : "mryp"
          } ],
          name : ""
        }, {
          group : [ {
            description : "cannot be assessed OR acceptable for any stage low grade mucinous tumor",
            name : "TX"
          }, {
            description : "No tumor",
            name : "T0"
          }, {
            description : "in situ or invasion of lamina propria or muscularis mucosa ",
            name : "Tis"
          }, {
            description : "low grade appendiceal mucinous neoplasm confied by the muscularis propria. acellular mucin or mucinous epithelium may invade into the muscularis propria. T1 and t2 are not appropriate for LAMN.  Mucin or epithelium into subserosa (T3) or serosa (T4a) are OK for either mucin or cells",
            name : "Tis(LAMN)"
          }, {
            description : "invades submucosa (Do not use for low grade mucinous tumors",
            name : "T1"
          }, {
            description : "Invades muscularis propria (do not use for low grade mucinous tumors)",
            name : "T2"
          }, {
            description : "Invades subserosa, including acellular mucin or mucinous epithelium involving the subserosa of the appendix or mesoappendix",
            name : "T3"
          }, {
            description : "Penetrates serosa, including acellular mucin or mucinous epithelium involving the serosa of the appendix or mesoappendix",
            name : "T4a"
          }, {
            description : " invades adjacent organs",
            name : "T4b"
          } ],
          name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            name : "N0"
          }, {
            description : "1 positive nodes",
            name : "N1a"
          }, {
            description : "2 -3 positive nodes",
            name : "N1b"
          }, {
            description : "tumor deposits only",
            name : "N1c"
          }, {
            description : ">= 4 positive nodes",
            name : "N2"
          } ],
          name : "Category (pN)"
        }, {
          group : [ {
            description : "intraperitoneal mucin only",
            name : "M1a"
          }, {
            description : "intraperitoneal cells with or without mucin (LAM), or metastases (carcinoma) only",
            name : "M1b"
          }, {
            description : "other metastases outside of peritoneum",
            name : "M1c"
          }, {
            name : "M (not applicable)"
          }, {
            name : "distant metastasis not applicable"
          } ],
          name : ""
        } ]
        },  {
        name : "MSI IHC and Interpretation",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Pending, addendum to follow"
          },{
             description : "tell the secretary to pick this and copy the answer in a separate note",
            name : " see Note."
          },{
             description : "A.",
            name : "MLH1+, MSH2+, MSH6+, PMS2+. Intact nuclear expression of MMR protein, low probability of microsatellite instability-high (MSI-H).  There are exceptions to the above IHC interpretations. These results should not be considered in isolation, and clinical correlation with genetic counseling is recommended to assess the need for germline testing."
          }, {
             description : "B.",
            name : "MLH1-, MSH2+, MSH6+, PMS2-. Loss of nuclear expression of MLH1 and PMS2: deficient mismatch repair/ high probability of microsatellite instability-high (MSI-H). Testing for methylation of the MLH1 promoter is indicated (the presence of MLH1 methylation suggests that the tumor is sporadic and germline evaluation is probably not indicated; absence of MLH1 methylation suggests the possibility of Lynch syndrome, and sequencing and/or large deletion/duplication testing of germline MLH1 is indicated). There are exceptions to the above IHC interpretations. These results should not be considered in isolation, and clinical correlation with genetic counseling is recommended to assess the need for germline testing."
          }, {
             description : "C.",
            name : "MLH1+, MSH2-, MSH6-, PMS2+. Loss of nuclear expression of MSH2 and MSH6: deficient mismatch repair/ high probability of microsatellite instability-high (MSI-H). High probability of Lynch syndrome (sequencing and or large deletion/duplication testing of germline MSH2 may be indicated, and, if negative, sequencing and or large deletion/duplication testing of germline MSH6 may be indicated). There are exceptions to the above IHC interpretations.   These results should not be considered in isolation, and clinical correlation with genetic counseling is recommended to assess the need for germline testing."
          }, {
             description : "D.",
            name : "MLH1+, MSH2+, MSH6-, PMS2+. Loss of nuclear expression of MSH6 only: deficient mismatch repair/ high probability of microsatellite instability-high (MSI-H). High probability of Lynch syndrome (sequencing and or large deletion/duplication testing of germline MSH6 may be indicated). There are exceptions to the above IHC interpretations.   These results should not be considered in isolation, and clinical correlation with genetic counseling is recommended to assess the need for germline testing."
          }, {
             description : "E.",
            name : "MLH1+, MSH2+, MSH6+, PMS2-. Loss of nuclear expression of PMS2 only: deficient mismatch repair/ high probability of microsatellite instability-high (MSI-H). High probability of Lynch syndrome (sequencing and or large deletion/duplication testing of germline PMS2 may be indicated). There are exceptions to the above IHC interpretations.   These results should not be considered in isolation, and clinical correlation with genetic counseling is recommended to assess the need for germline testing."
          } , {
            name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            name : "See case "
          } ],
          name : ""
        } ]
      }, {
          description : "includes LAM by stage",
        name : "Ancillary studies ordered",
       optional_state  : "required", "options" : [ {
          group : [ {
             description : "T1-3N0",
            name : "PIK3CA"
          },{
             description : "T1-3N0 AND loss of MLH1 and PMS2",
            name : "PIK3CA and MLH1 promoter methylation"
          }, {
             description : "T4 or N1",
            name : "PIK3CA, K-RAS extended panel, N-RAS, and BRAF"
          }, {
             description : "T4 or N1 AND loss of MLH1 and PMS2",
            name : "PIK3CA, K-RAS extended panel, N-RAS, BRAF, and MLH1 promoter methylation"
          }, {
            name : "Pending results of MMR protein panel"
          }, {
            name : "None"
          }, {
            name : "Not applicable"
          }, {
            inputs_required : [ "" ],
            name : "See case"
          } ],
          name : ""
        } ]
      } ]
    }, {
      most_common : false,
      name : "Appendix neuroendocrine tumor",
      optional : false,
      organ_group : "Endocrine",
      properties : [  {
        name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Appendectomy"
          }, {
            name : "Appendectomy and cecal resecton"
          }, {
            name : "Appendectomy and right colectmy"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Proximal half of appendix"
          }, {
            name : "Distal half of appendix"
          }, {
            name : "Diffusely involving appendix"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor size",
       optional_state  : "required", "options" : [ {
          name : ""
        } ]
      }, {
         description : "For small cell (high grade NET use appendix carcinoma protocol not this one) ",  
        name : "Type and Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "< 2mitoses/10 hpf and/or Ki67<3% ", 
            name : "Grade 1/3, Well differentiated neuroendocrine tumor, low grade (carcinoid)"
          }, {
            description : ">= 2 AND < 20 mitoses/10 hpf and/or Ki67 >=3 AND <20% ",  
            name : "Grade 2/3, Well differentiated neuroendocrine tumor, intermediate grade (atypical carcinoid)"
          }, {
             description : "> 20 mitoses/10 hpf and/or Ki67 >20% ",  
            name : "Grade 3/3, Well differentiated neuroendocrine tumor"
          } ],
          name : ""
        } ]
      }, {
           description : "mitoses/ 2 mm squared NOT 10 hpf, approximately count 42 hpf and divide by 5", 
        name : "Mitotic rate",
       optional_state  : "required", "options" : [ {
          group : [ {
            
            name : "Less than 2 per 2 mm squared"
          }, {
          
            name : "at least 2 and less than 20 /2 mm squared"
          }, {
            
            name : "More than 20 per 2 mm squared"
          } ],
          name : ""
        } ]  
        
      }, {
        name : "Ki67 (Mib1)",
       optional_state  : "required", "options" : [ {
          group : [ {
              
            name : "Less than 3%"
          }, {
          
            name : "at least 3% and less than 20%"
          }, {
              
            name : "More than 20%"
          } ],
          name : ""
        } ]  
        
      }, {
        name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "No invasion of lamina propria"
          }, {
            name : "Intramucosal (invades lamina propria/muscularis mucosa)"
          }, {
            name : "Invades submucosa"
          }, {
            name : "Invades muscularis propria"
          }, {
            name : "Invades subserosal tissue"
          }, {
            name : "Penetrates serosa"
          }, {
            description : "specify",
             inputs_required : [ "" ],
            name : "Invades other organs"
          } ],
          name : ""
        } ]
      }, {
        description : "include distance/location of closest margin, proximal distal and radial",
        name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            name : "Positive"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Indeterminate"
          }, {
            name : "Suspicious"
          }, {
            name : "Present"
          }, {
            name : "Present, extensive"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            name : ""
          }, {
            description : "pathologic",
            name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            name : "m"
          }, {
            description : "recurrent",
            name : "r"
          }, {
            description : "post-treatment",
            name : "y"
          }, {
            name : "mp"
          }, {
            name : "rp"
          }, {
            name : "yp"
          }, {
            name : "mrp"
          }, {
            name : "myp"
          }, {
            name : "ryp"
          }, {
            name : "mryp"
          } ],
          name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            name : "TX"
          }, {
            description : "No tumor",
            name : "T0"
          }, {
            description : " Tumor 2 cm or less in greatest dimension",
            name : "T1"
          }, {
            description : "Tumor more than 2 cm but less than or equal to 4 cm",
            name : "T2"
          }, {
            description : "Tumor more than 4 cm or with subserosal invasion or involvement of the mesoappendix",
            name : "T3"
          }, {
            description : " Tumor perforates the peritoneum or directly invades other adjacent organs or structures (excluding direct mural extension to adjacent subserosa of adjacent bowel), eg, abdominal wall and skeletal muscle",
            name : "T4"
          } ],
          name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            name : "N0"
          }, {
            description : "positive nodes",
            name : "N1"
          } ],
          name : "Category (pN)"
        }, {
          group : [ {
            description : "distant metastases",
            name : "M1"
          }, {
            name : "M (not applicable)"
          }, {
            name : "distant metastasis not applicable"
          } ],
          name : ""
        } ]
      } ]
    }, {
      most_common : false,
      name : "Bone",
      optional : false,
      organ_group : "Other",
      properties : [ {
        name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Intralesional resection"
          }, {
            name : "Marginal resection "
          }, {
            name : "Segmental/wide resection "
          }, {
            name : "Radical resection "
          } ],
          name : ""
        } ]
      }, {
        name : "Anatomic location",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "specify",
             inputs_required : [ "" ],
            name : "Appendicular skeleton "
          }, {
             description : "specify",
              inputs_required : [ "" ],
            name : "Spine"
          }, {
             description : "specify",
              inputs_required : [ "" ],
            name : "Pelvis "
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Epiphysis or apophysis"
          }, {
            name : "Metaphysis "
          }, {
            name : "Diaphysis"
          }, {
            name : "Cortex "
          }, {
            name : "Medullary cavity "
          }, {
            name : "Surface "
          }, {
            name : "Joint"
          }, {
            name : "Tumor extension into soft tissue "
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor size",
       optional_state  : "required", "options" : [ {
          name : ""
        } ]
      }, {
        name : "Type",
       optional_state  : "required", "options" : [ {
          name : ""
        } ]
      }, {
         description : "/10 hpf, most proliferative area",
        name : "Mitotic Rate ",
       optional_state  : "required", "options" : [ {
          name : ""
        } ]
      }, {
        name : "Necrosis",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            description : "%",
            inputs_required : [ "" ],
            name : "Present"
          } ],
          name : ""
        } ]
      }, {
        name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Grade 1/3, Well differentiated"
          }, {
            name : "Grade 2/3, Moderately differentiated"
          }, {
            name : "Grade 3/3, Poorly differentiated"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        description : "include distance",
        name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            name : "Positive"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Treatment effect, primary site",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Present  "
          }, {
            name : "Indeterminate "
          }, {
            name : "Not known"
          }  ],
          name : ""
        } ]
      }, {
        name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            name : ""
          }, {
            description : "pathologic",
            name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            name : "m"
          }, {
            description : "recurrent",
            name : "r"
          }, {
            description : "post-treatment",
            name : "y"
          }, {
            name : "mp"
          }, {
            name : "rp"
          }, {
            name : "yp"
          }, {
            name : "mrp"
          }, {
            name : "myp"
          }, {
            name : "ryp"
          }, {
            name : "mryp"
          } ],
          name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            name : "TX"
          }, {
            description : "No tumor",
            name : "T0"
          }, {
            description : " NOS Tumor 8 cm or less in greatest dimension",
            name : "T1"
          }, {
            description : "NOS Tumor more than 8 cm in greatest dimension",
            name : "T2"
          }, {
            description : "NOS Discontinuous tumors in the primary bone site ",
            name : "T3"
          }, {
            description : "SPINE  limited to one or two adjacent vertebrae",
            name : "T1"
          }, {
            description : "SPINE  confied to 3 adjacent vertebrae",
            name : "T2"
          }, {
            description : "SPINE  limited to 4 or more adjacent vertebrae or any non adjacent vertebrae",
            name : "T3"
          }, {
            description : "SPINE  extends into spinal canal",
            name : "T4a"
          }, {
            description : "SPINE  gross vascular invasion or tumor thrombus in great vessels",
            name : "T4b"
          }, {
            description : "PELVIS one pelvic segment, <= 8cm",
            name : "T1a"
          }, {
            description : "PELVIS one pelvic segment, > 8cm",
            name : "T1b"
          }, {
            description : "PELVIS two pelvic segments or extraosseous extension, <= 8cm",
            name : "T2a"
          }, {
            description : "PELVIS two pelvic segments or extraosseous extension, > 8cm",
            name : "T2b"
          }, {
            description : "PELVIS two pelvis segments and extraosseous extension, <= 8cm",
            name : "T3a"
          }, {
            description : "PELVIS two pelvis segments and extraosseous extension, > 8cm ",
            name : "T3b"
          }, {
            description : "PELVIS three pelvic segments or crossing sacroiliac joint",
            name : "T4"
          }  ],
          name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            name : "NX"
          }, {
            description : "No regional lymph node metastases",
            name : "N0"
          }, {
            description : "Regional lymph node metastases",
            name : "N1"
          } ],
          name : "Category (pN)"
        }, {
          group : [ {
            description : "Lung metastases",
            name : "M1a"
          }, {
            description : "Other metastases",
            name : "M1b"
          }, {
            name : "M (not applicable)"
          }, {
            name : "distant metastasis not applicable"
          } ],
          name : ""
        } ]
      }, {
        description : "Immunohistochemistry, Cytogenetics, Molecular Pathology",
        name : "Ancillary studies ordered",
       optional_state  : "required", "options" : [ {
          name : ""
        } ]
      } ]
    }, {
      most_common : false,
      name : "Bone marrow, NOS",
      optional : true,
      organ_group : "Hematologic",
      properties : [ {
        name : "Specimen",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Right posterior iliac crest"
          } , {
            name : "Left posterior iliac crest"
          }, {
            name : "Sternal"
          }],
          name : ""
        } ]
      }, {
        name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Aspiration"
          }, {
            name : "Aspirate and clot"
          }, {
            name : "Aspirate, clot, and core biopsy"
          }, {
            name : "Aspirate, clot, core biopsy, and peripheral smear"
          } ],
          name : ""
        } ]
      
      }, {
        name : "Specimen adequacy",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Satisfactory"
          }, {
            name : "Unsatisfactory"
          } ],
          name : ""
        } ]
      }, {
        name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "Extended list",
            inputs_required : [ [ "MYELOPROLIFERATIVE NEOPLASMS", "Chronic myelogenous leukemia, BCR-ABL1 positive", "Chronic neutrophilia leukemia", "Polycythemia vera", "Primary myelofibrosis", "Essential thrombocythemia", "Chronic eosinophilic leukemia, not otherwise specified (NOS)", "Mastocytosis", "Myeloproliferative neoplasm, unclassifiable", "", "PDGFRA, PDGFRB and FGFR1 NEOPLASMS", "Myeloid or lymphoid neoplasm with PDGFRA rearrangement", "Myeloid neoplasm with PDGFRB rearrangement", "Myeloid or lymphoid neoplasm with FGFR1 abnormalities", "", "MYELODYSPLASTIC/MYELOPROLIFERATIVE NEOPLASMS", "Chronic myelomonocytic leukemia", "Atypical chronic myeloid leukemia BCR-ABL1 negative", "Juvenile myelomonocytic leukemia", "Myelodysplastic/myeloproliferative neoplasm, unclassifiable", "Refractory anemia with ring sideroblasts associated with marked thrombocytosis", "", "MYELODYSPLASTIC SYNDROMES", "Refractory anemia", "Refractory neutropenia", "Refractory thrombocytopenia", "Refractory anemia with ring sideroblasts", "Refractory cytopenia with multilineage dysplasia", "Refractory anemia with excess blasts", "Myelodysplastic syndrome associated with isolated del(5q)", "Myelodysplastic syndrome, unclassifiable", "Refractory cytopenia of childhood", "", "AML WITH RECURRENT GENETIC ABNORMALITIES", "AML with t(8;21)(q22;q22); RUNX1-RUNX1T1", "AML with inv(16)(p13.1q22) or t(16;16)(p13.1;q22); CBFB-MYH11", "Acute promyelocytic leukemia with t(15;17)(q22;q12); PML-RARA", "AML with t(9;11)(p22;q23); MLLT3-MLL", "AML with t(6;9)(p23;q34); DEK-NUP214", "AML with inv(3)(q21q26.2) or t(3;3)(q21;q26.2); RPN1-EVI1", "AML (megakaryoblastic) with t(1;22)(p13;q13); RBM15-MKL1", "AML with mutated NPM1", "AML with mutated CEBPA", "", "AML WITH MDS", "AML with Multilineage dysplasia", "AML with Prior myelodysplastic syndrome", "AML with Myelodysplasia-related cytogenetic abnormalities", "", "THERAPY RELATED MYELOID NEOPLASMS", "Therapy-related AML", "Therapy-related myelodysplastic syndrome", "Therapy-related myelodysplastic/myeloproliferative neoplasm", "", "AML NOS", "AML with minimal differentiation", "AML without maturation", "AML with maturation", "Acute myelomonocytic leukemia", "Acute monoblastic/monocytic leukemia", "Acute erythroid leukemia", "Acute megakaryocytic leukemia", "Acute basophilic leukemia", "Acute panmyelosis with myelofibrosis", "AML, NOS", "", "MPS IN DOWNS SYNDROME", "Transient abnormal myelopoiesis in Downs syndrome", "Myeloid leukemia associated with Down syndrome", "", "ACUTE LEUKEMIA OF AMBIGUOUS LINEAGE", "Acute undifferentiated leukemia", "Mixed phenotype acute leukemia with t(9;22)(q34;q11.2); BCR-ABL1", "Mixed phenotype acute leukemia with t(v;11q23); MLL rearranged", "Mixed phenotype acute leukemia, B/myeloid, NOS", "Mixed phenotype acute leukemia, T/myeloid, NOS", "Mixed phenotype acute leukemia, NOS, rare types", "Natural killer (NK) cell lymphoblastic leukemia/lymphoma", "", "OTHER MYEOLOID LEUKEMIAS", "Blastic plasmacytoid dendritic cell neoplasm", "PRECURSOR LYMPHOID NEOPLASMS", "B lymphoblastic leukemia/lymphoma, NOS", "B lymphoblastic leukemia/lymphoma with t(9;22)(q34;q11.2); BCR-ABL1", "B lymphoblastic leukemia/lymphoma with t(v;11q23); MLL rearranged", "B lymphoblastic leukemia/lymphoma with t(12;21)(p13;q22); TEL-AML1 (ETV6-RUNX1)", "B lymphoblastic leukemia/lymphoma with hyperdiploidy", "B lymphoblastic leukemia/lymphoma with hypodiploidy (hypodiploid ALL)", "B lymphoblastic leukemia/lymphoma with t(5;14)(q31;q32); IL3-IGH", "B lymphoblastic leukemia/lymphoma with t(1;19)(q23;p13.3); E2A-PBX1 (TCF3-PBX1)", "T lymphoblastic leukemia/lymphoma", "", "MATURE B CELL NEOPLASMS", "Chronic lymphocytic leukemia/small lymphocytic lymphoma", "B-cell prolymphocytic leukemia", "Splenic B-cell marginal zone lymphoma", "Hairy cell leukemia", "Splenic B-cell lymphoma/leukemia, unclassifiable", "Splenic diffuse red pulp small B-cell lymphoma", "Hairy cell leukemia-variant", "Lymphoplasmacytic lymphoma", "Plasma cell myeloma", "Extranodal marginal zone lymphoma of mucosa-associated lymphoid tissue (MALT lymphoma", "Follicular lymphoma", "Mantle cell lymphoma", "Diffuse large B-cell lymphoma (DLBCL), NOS", "T cell/histiocyte-rich large B-cell lymphoma", "Primary cutaneous DLBCL, leg type", "Epstein-Barr virus (EBV)-positive DLBCL of the elderly", "DLBCL associated with chronic inflammation", "Lymphomatoid granulomatosis", "Anaplastic lymphoma kinase (ALK)-positive large B-cell lymphoma", "Plasmablastic lymphoma", "Large B-cell lymphoma arising in HHV8-associated multicentric Castleman disease", "Burkitt lymphoma", "B-cell lymphoma, unclassifiable, with features intermediate between diffuse large B-cell lymphoma and Burkitt lymphoma", "B-cell lymphoma, unclassifiable, with features intermediate between diffuse large B-cell lymphoma and classical Hodgkin lymphoma", "B-cell lymphoma, NOS", "", "MATURE T AND NK CELL NEOPLASMS", "T-cell lymphoma,", "T-cell prolymphocytic leukemia", "T-cell large granular lymphocytic leukemia", "Chronic lymphoproliferative disorder of NK cells", "Aggressive NK-cell leukemia ", "Adult T-cell leukemia/lymphoma ", "Extranodal NK/T-cell lymphoma, nasal type", "Enteropathy-associated T-cell lymphoma", "Hepatosplenic T-cell lymphoma", "Mycosis fungoides", "Peripheral T-cell lymphoma, NOS", "Angioimmunoblastic T-cell lymphoma", "Anaplastic large cell lymphoma, ALK-positive", "Anaplastic large cell lymphoma, ALK-negative", "", "HODGKIN LYMPHOMA", "Nodular lymphocyte predominant Hodgkin lymphoma", "Classical Hodgkin lymphoma", "", "HISTIOCYTIC AND DENDRITIC CELL NEOPLASMS", "Histiocytic sarcom", "Langerhans cell histiocytosis", "Langerhans cell sarcoma", "Interdigitating dendritic cell sarcoma", "Follicular dendritic cell sarcoma", "Disseminated juvenile xanthogranuloma", "Histiocytic neoplasm, NOS", "", "POST-TRANSPLASNT LYMPHOPROLIFERATIVE DISORDERS (PTLD)", "Plasmacytic hyperplasia", "Infectious mononucleosis-like PTLD", "Polymorphic PTLD", "Monomorphic PTLD (B- and T/NK-cell types)", "Classical Hodgkin lymphoma type PTLD" ] ],
            name : ""
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Immunohistochemistry",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "Performed",
            inputs_required : [ "" ],
            name : ""
          }, {
            name : "See separate report"
          }, {
  
            name : "See above"
          }, {
            name : "Not performed"
          } ],
          name : ""
        } ]
      }, {
        name : "Flow cytometry",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "Performed",
            inputs_required : [ "" ],
            name : ""
          }, {
            name : "See separate report"
          }, {
            name : "See above"
          }, {
            name : "Not performed"
          } ],
          name : ""
        } ]
      }, {
        name : "Cytogenetics (chromosome analysis)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "Performed",
            inputs_required : [ "" ],
            name : ""
          }, {
            name : "See separate report"
          }, {
            name : "Not performed"
          } ],
          name : ""
        } ]
      }, {
        name : "Cytogenetics (FISH)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "Performed",
            inputs_required : [ "" ],
            name : ""
          }, {
            name : "See separate report"
          }, {
            name : "Not performed"
          } ],
          name : ""
        } ]
      } ]
    }, {
      most_common : false,
      name : "Bone marrow, Plasma cell neoplasm",
      optional : true,
      organ_group : "Hematologic",
      properties : [ {
        name : "Specimen",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Right posterior iliac crest"
          }, {
            name : "Left posterior iliac crest"
          }, {
            name : "Sternal"
          } ],
          name : ""
        } ]
      }, {
        name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Aspirate only"
          }, {
            name : "Aspirate and clot"
          }, {
            name : "Aspirate, clot, and core biopsy"
          }, {
            name : "Aspirate, clot, core biopsy, and peripheral smear"
          } ],
          name : ""
        } ]
      }, {
        name : "Extent of plasma cell infiltrate",
       optional_state  : "required", "options" : [ {
          name : ""
        } ]
      }, {
        name : "Immunoglobulin deposits",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None (negative Congo red stain)"
          }, {
            name : "Amyloid present (positive Congo red stain)"
          } ],
          name : ""
        } ]
      }, {
        name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Plasma cell myeloma"
          } ],
          name : ""
        } ]
      }, {
        name : "Immunohistochemistry",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "Performed",
            inputs_required : [ "" ],
            name : ""
          }, {
            name : "See separate report"
          }, {
            name : "See above"
          }, {
            name : "Not performed"
          } ],
          name : ""
        } ]
      }, {
        name : "Flow cytometry",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "Performed",
            inputs_required : [ "" ],
            name : ""
          }, {
            name : "See separate report"
          }, {
            name : "See above"
          }, {
            name : "Not performed"
          } ],
          name : ""
        } ]
      }, {
        name : "Cytogenetics (chromosome analysis)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "Performed",
            inputs_required : [ "" ],
            name : ""
          }, {
            name : "See separate report"
          }, {
            name : "Not performed"
          } ],
          name : ""
        } ]
      }, {
        name : "Cytogenetics (FISH)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "Performed",
            inputs_required : [ "" ],
            name : ""
          }, {
            name : "See separate report"
          }, {
            name : "Not performed"
          } ],
          name : ""
        } ]
      } ]
    }, {
      most_common : true,
      name : "Breast DCIS",
      optional : false,
      organ_group : "Breast",
      properties : [ {
        name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Right breast excision"
          }, {
            name : "Right breast excision with separate margins"
          }, {
            name : "Right breast re-excision"
          }, {
            name : "Right mastectomy"
          }, {
            name : "Right nipple sparing mastectomy"
          }, {
            name : "Left breast excision"
          }, {
            name : "Left breast excision with separate margins"
          }, {
            name : "Left breast re-excision"
          }, {
            name : "Left mastectomy"
          }, {
            name : "Left nipple sparing mastectomy"
          } ],
          name : ""
        } ]
      }, {
          description : "1 block = 4mm",
        name : "Tumor size",
       optional_state  : "required", "options" : [ {
          name : ""
        } ]
      }, {
        name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Ductal carcinoma in situ"
          }, {
            
            name : "Paget disease of nipple without DCIS"
          } ],
          name : ""
        } ]
      }, {
        name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "low",
            name : "Grade 1/3, low nuclear grade"
          }, {
            description : "intermediate",
            name : "Grade 2/3, intermediate nuclear grade"
          }, {
            description : "high",
            name : "Grade 3/3, high nuclear grade"
          }, {
            description : "intermediate and high",
            name : "Grade 3/3 and 2/3, high and intermediate nuclear grade"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Necrosis",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Present, focal"
          }, {
            name : "Present, central/comedo"
          } ],
          name : ""
        } ]
      }, {
        description : "Free text distance, location, for all tumors 0-2mm from ink, do NOT use terms FREE or POSITIVE",
        name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [  {
            name : "Free (>2mm)"
          }, {
            description : "location, only use for TUMOR ON ink",
            inputs_required : [ "" ],
            name : "Positive"
          } ],
           
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # sentinel",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        description : "> 2mm",
        name : "Lymph nodes, # w/ macrometastases",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        description : ">0.2 mm AND <= 2mm OR > 200 cells",
        name : "Lymph nodes, # w/ micrometastases",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        description : "<= 0.2mm AND <= 200 cells",
        name : "Lymph nodes, # w/ isolated tumor cells",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            name : ""
          }, {
            description : "pathologic",
            name : "p"
          }, {
            description : "multiple foci of DCIS",
            name : "m"
          }, {
            description : "recurrent",
            name : "r"
          }, {
            description : "post-treatment",
            name : "y"
          }, {
            name : "mp"
          }, {
            name : "rp"
          }, {
            name : "yp"
          }, {
            name : "mrp"
          }, {
            name : "myp"
          }, {
            name : "ryp"
          }, {
            name : "mryp"
          } ],
          name : ""
        }, {
          group : [ {
            description : "DCIS",
            name : "Tis"
          } ],
          name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            name : "NX"
          }, {
            description : "No metastases",
            name : "N0"
          }, {
            description : "No metastases AND <6 sentinel Nodes",
            name : "N0 (sn)"
          }, {
            description : "ITC's <= 0.2 mm AND <= 200 cells (detected by H&E or IHC)",
            name : "N0 (i+)"
          }, {
            description : "ITC's <= 0.2 mm AND <= 200 cells (detected by H&E or IHC AND < 6 sentinel nodes)",
            name : "N0 (i+) (sn)"
          }, {
            description : "Metastases > 0.2 mm AND <= 2.0 mm OR > 200 cells)",
            name : "N1mi"
          }, {
            description : "Metastases > 0.2 mm AND <= 2.0 mm OR > 200 cells) AND < 6 sentinel nodes",
            name : "N1mi (sn)"
          }, {
            description : "Metastases in 1 to 3 axillary lymph nodes, at least 1 > 2.0 mm",
            name : "N1a"
          }, {
            description : "Metastases in 1 to 3 axillary lymph nodes, at least 1 > 2.0 mm AND < 6 sentinel nodes",
            name : "N1a (sn)"
          }, {
            description : "Metastases in 4 to 9 axillary lymph nodes (at least 1 > 2.0 mm)",
            name : "N2a"
          }, {
            description : "Metastases in 4 to 9 axillary lymph nodes (at least 1 > 2.0 mm) AND < 6 sentinel nodes",
            name : "N2a (sn)"
          }, {
            description : "Metastases in 10 or more axillary lymph nodes (at least 1 > 2.0 mm)",
            name : "N3a"
          } ],
          name : "Category (pN)"
        }, {
          group : [ {
            description : "Distant detectable metastases as histologically proven larger than 0.2 mm",
            name : "M1"
          }, {
            name : "M (not applicable)"
          }, {
            name : "distant metastasis not applicable"
          } ],
          name : ""
        } ]
      }, {
         description : "repeat if original negative or s/p neoadjuvant therapy regardless of original",
        name : "Estrogen Receptor",
       optional_state  : "required", "options" : [ {
          group : [ {
            name :  "Positive, >90% of cells, strong intensity"
          },{
            name :  "Positive  50-90% of cells, strong intensity"
          },{
            name :  "Positive  10-50% of cells, strong intensity"
          },{
            name :  "Positive  50-90% of cells, moderate intensity"
          },{
            name :  "Positive  10-50% of cells, moderateintensity"
          },{
            name :  "Positive  10-50% of cells, moderate intensity"
          },{
            name :  "Positive  10-50% of cells, weak intensity"
          },{
            name :  "Positive  1-10% of cells, weak intensity"
          }, {
            name : "Negative (<1%)"
          }, {
            name : "Pending"
          }, {
            name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            name : "See case "
          } ],
          name : ""
        } ]
      }, {
         description : "repeat if original negative or s/p neoadjuvant therapy regardless of original",
        name : "Progesterone Receptor",
       optional_state  : "required", "options" : [ {
          group : [ {
            name :  "Positive, >90% of cells, strong intensity"
          },{
            name :  "Positive  50-90% of cells, strong intensity"
          },{
            name :  "Positive  10-50% of cells, strong intensity"
          },{
            name :  "Positive  50-90% of cells, moderate intensity"
          },{
            name :  "Positive  10-50% of cells, moderateintensity"
          },{
            name :  "Positive  10-50% of cells, moderate intensity"
          },{
            name :  "Positive  10-50% of cells, weak intensity"
          },{
            name :  "Positive  1-10% of cells, weak intensity"
          }, {
            name : "Negative (<1%)"
          }, {
            name : "Pending"
          }, {
            name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            name : "See case "
          } ],
          name : ""
        } ]
      }, {
        name : "Known repeat ER/PR testing",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "No"
          }, {
            name : "Yes"
          } ],
          name : ""
        } ]
           }, {
        name : "Additional findings",
        optional_state : "required",
        "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Biopsy site"
          }, {
            name : "Biopsy site x 2"
          }, {
            name : "Atypical ductal hyperplasia"
          }, {
            name : "Atypical lobular hyperplasia"
          }, { 
            name : "Lobular carcinoma in situ, classical type"
          }, { 
            name : "Lobular carcinoma in situ, pleomorphic type"
          }, {
            name : "Pagets disease"
          }, {
            name : "Biopsy site and atypical ductal hyperplasia"
          }, {
            name : "Biopsy site, atypical ductal hyperplasia and Pagets disease"
          }, {
            name : "Biopsy site and atypical lobular hyperplasia"
          }, {
            name : "Biopsy site, atypical lobular hyperplasia and Pagets disease"
          }, {
            name : "Biopsy site and lobular carcinoma in situ, classical type"
          }, {
            name : "Biopsy site and lobular carcinoma in situ, classical type and Pagets disease"
          }, {
            name : "Biopsy site, atypical ductal hyperplasia, and atypical lobular hyperplasia"
          }, {
            name : "Biopsy site, atypical ductal hyperplasia, and lobular carcinoma in situ, classical type"
          }, {
            name : "Biopsy site, atypical ductal hyperplasia, lobular carcinoma in situ, classical type and Pagets disease"
          } ],
          name : ""
        } ]
      }, {
        description : "Add billing code 3260F for women, 3260F1P for men",
        name : "ICD10",
       optional_state  : "required", "options" : [ {
          group : [ {
             description : " for women",
            name : "C50.919"
          },{
             description : " for men",
            name : "C50.929"
          } ],
          name : ""
        } ]
      } ]
    }, {
      most_common : true,
      name : "Breast Invasive",
      optional : false,
      organ_group : "Breast",
      properties : [ {
        name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Right breast excision"
          }, {
            name : "Right breast excision with separate margins"
          }, {
            name : "Right breast re-excision"
          }, {
            name : "Right mastectomy"
          }, {
            name : "Right nipple sparing mastectomy"
          }, {
            name : "Left breast excision"
          }, {
            name : "Left breast excision with separate margins"
          }, {
            name : "Left breast re-excision"
          }, {
            name : "Left mastectomy"
          }, {
            name : "Left nipple sparing mastectomy"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor size",
       optional_state  : "required", "options" : [ {
          name : ""
        } ]
      }, {
        name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Invasive ductal carcinoma"
          }, {
            name : "Invasive lobular carcinoma, classical type"
          }, {
            name : "Invasive lobular carcinoma, pleomorphic type"
          }, {
            name : "Invasive carcinoma with both ductal and lobular features"
          }, {
            name : "Micro-invasive carcinoma"
          }, {
            name : "Mucinous carcinoma"
          }, {
            name : "Invasive ductal carcinoma with mucinous features"
          }, {
            name : "Invasive ductal carcinoma and mucinous carcinoma"
          }, {
            name : "Invasive tubular carcinoma"
          }, {
            name : "Invasive ductal carcinoma with tubular features"
          }, {
            name : "Invasive tubulo-lobular carcinoma"
          }, {
            name : "Invasive cribiform carcinoma"
          }, {
            name : "Invasive carcinoma with micropapillary features"
          }, {
            name : "Invasive papillary carcinoma"
          }, {
            name : "Medullary carcinoma"
          }, {
            name : "Metaplastic carcinoma"
          }, {
            name : "Adenoid cystic carcinoma"
          }, {
            name : "Secretory carcinoma"
          }, {
            name : "Invasive carcinoma with basaloid features"
          }, {
            description : "T0, no residual tumor",
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Tubule formation",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : ">75%",
            name : "Score 1"
          }, {
            description : "10% to 75%",
            name : "Score 2"
          }, {
            description : "<10%",
            name : "Score 3"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Nuclear pleomorphism",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "nuclei small",
            name : "Score 1"
          }, {
            description : "cells larger than normal",
            name : "Score 2"
          }, {
            description : "prominent nucleoli, marked variation",
            name : "Score 3"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Mitotic rate",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "<=3 mitoses per mm2",
            name : "Score 1"
          }, {
            description : "4-7 mitoses per mm2",
            name : "Score 2"
          }, {
            description : ">8 mitoses per mm2",
            name : "Score 3"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
     
      }, {
        name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "scores of 3, 4, or 5",
            name : "Nottingham grade 1/3"
          }, {
            description : "scores of 6 or 7",
            name : "Nottingham grade 2/3"
          }, {
            description : "scores of 8 or 9",
            name : "Nottingham grade 3/3"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
         description : "Give size if only microinvasive",
        name : "DCIS",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
             description : "use for mastectomy; try to use Extensive/nonextensive for excision",
            name : "Present"
          }, {
             description : "excision specimen, DCIS >25% of main mass AND extends beyond invasive tumor",
            name : "Extensive intraductal component present"
          }, {
              description : "excision specimen, DCIS <25% of main mass OR does not extends beyond invasive tumor",
            name : "Present, but NOT extensive"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      
      }, {
        name : "Skin involvement",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Not applicable"
          }, {
            description : "this does not change the T stage",
            name : "Invades into the dermis without ulceration"
          }, {
            description : "this does not change the T stage",
            name : "Invades into the epidermis without ulceration"
          }, {
            description : "classified as T4b",
            name : "Invades into the dermis with ulceration"
          }, {
            description : "classified as T4b",
            name : "Invades into the epidermis with ulceration"
          }, {
            description : "classified as T4b",
            name : "Satellite skin foci are present"
          } ],
          name : ""
        } ]
      }, {
        name : "Nipple involvement",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Not applicable"
          }, {
            name : "Paget disease of the nipple"
          } ],
          name : ""
        } ]
      }, {
        name : "Muscle involvement",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Not applicable"
          }, {
            name : "Carcinoma invades skeletal muscle"
          }, {
            description : "classified as T4a",
            name : "Carcinoma invades chest wall"
          } ],
          name : ""
        } ]
      }, {
         description : "Free text distance, location, for all tumors 0-2mm from ink, do not use terms FREE or POSITIVE",
        name : "Margins, invasive tumor",
       optional_state  : "required", "options" : [ {
          group : [  {
            name : "Free (>2mm)"
          }, {
            description : "location, only use for TUMOR ON INK",
            inputs_required : [ "" ],
            name : "Positive"
          }, {
            description : "T0, no residual tumor",
            name : "Not applicable"
          } ],
          
          name : ""
        } ]
      }, {
         description : "Free text distance, location, for all tumors 0-2mm from ink, do not use term FREE or POSITIVE",
        name : "Margins, DCIS",
       optional_state  : "required", "options" : [ {
          group : [  {
            name : "Free (>2mm)"
          }, {
            description : "location, only for TUMOR ON INK",
            inputs_required : [ "" ],
            name : "Positive"
          }, {
            name : "Not applicable"
          } ],
          
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # sentinel",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        description : "> 2mm",
        name : "Lymph nodes, # w/ macrometastases",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        description : ">0.2 mm AND <= 2mm OR > 200 cells",
        name : "Lymph nodes, # w/ micrometastases",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        description : "<= 0.2mm and < 200 cells",
        name : "Lymph nodes, # w/ isolated tumor cells",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
       }, {
        name : "Size of largest metastasis",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Not applicable"
          } ],
          name : ""
          }]
      }, {
        name : "Extranodal Extension ",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Not applicable"
          }, {
            name : "None"
          }, {
            name : "Present"
          }, {
            name : "Equivocal"
          } ],
          name : ""
          }]
        }, {
        name : "Metastasis detection method ",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Not applicable"
          }, {
            name : "Frozen section/intra-operative smear"
          }, {
            description : "First H&E",
            name : "Routine H&E"
          }, {
             description : "2nd or more levels",
            name : "Serial H&E"
          }, {
           name : "Serial H&E and IHC"
         }, {
            name : "IHC only"
          }, {
            name : "Other"
          } ],
          name : ""
          }]
        }, {
        name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Indeterminate"
          }, {
            name : "Suspicious"
          }, {
            name : "Present"
          }, {
            name : "Present, extensive"
          }, {
            name : "Present, including dermal LVI"
          } ],
          name : ""
        } ]
   
      }, {
        name : "Treatment effect, primary site",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Not applicable"
          }, {
            name : "No definite response"
          }, {
            name : "Probable or definite response"
          } , {
            name : "Not known"
          } ],
          name : ""
        } ]
      }, {
        name : "Treatment effect, lymph nodes",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Not applicable"
          }, {
            name : "No definite response"
          }, {
            name : "Fibrous scarring with metastases"
          }, {
            name : "Fibrous scarring without metastases"
          }, {
            name : "Fibrous scarring (treatment effect) and biopsy site with metastases"
          }, {
            name : "Fibrous scarring (treatment effect) and biopsy site without metastases"
          }, {
            name : "No fibrous scarring or metastases"
          }, {
            name : "Not known"
          }  ],
          name : ""
        } ]
      }, {
        name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            name : ""
          }, {
            description : "pathologic",
            name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            name : "m"
          }, {
            description : "recurrent",
            name : "r"
          }, {
            description : "post-treatment",
            name : "y"
          }, {
            name : "mp"
          }, {
            name : "rp"
          }, {
            name : "yp"
          }, {
            name : "mrp"
          }, {
            name : "myp"
          }, {
            name : "ryp"
          }, {
            name : "mryp"
          } ],
          name : ""
        }, {
          group : [ {
            description : "No residual tumor, s/p neoadjuvant treatment",
            name : "T0"
          }, {
            description : "DCIS only, s/p neoadjuvant treament",
            name : "Tis"
          }, {
            description : "Tumor <= 1 mm",
            name : "T1mi"
          }, {
            description : "Tumor > 1 mm AND <= 5 mm",
            name : "T1a"
          }, {
            description : "Tumor > 5 mm AND <= 10 mm",
            name : "T1b"
          }, {
            description : "Tumor > 10 mm AND <= 20 mm",
            name : "T1c"
          }, {
            description : "Tumor > 20 mm AND <= 50 mm",
            name : "T2"
          }, {
            description : "Tumor > 50 mm",
            name : "T3"
          }, {
            description : "Extension to chest wall, not including only pectoralis muscle",
            name : "T4a"
          }, {
            description : "Ulceration and/or ipsilateral satellite nodules and/or edema (including peau d'orange) of the skin which do not meet the criteria for inflammatory carcinoma",
            name : "T4b"
          }, {
            description : "Both T4a and T4b",
            name : "T4c"
          }, {
            description : "Inflammatory carcinoma",
            name : "T4d"
          } ],
          name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            name : "NX"
          }, {
            description : "No metastases",
            name : "N0"
          }, {
            description : "No metastases AND <6 sentinel Nodes",
            name : "N0 (sn)"
          }, {
            description : "ITC's <= 0.2 mm AND <= 200 cells (detected by H&E or IHC)",
            name : "N0 (i+)"
          }, {
            description : "ITC's <= 0.2 mm AND <= 200 cells (detected by H&E or IHC AND < 6 sentinel nodes)",
            name : "N0 (i+) (sn)"
          }, {
            description : "Metastases > 0.2 mm AND <= 2.0 mm OR > 200 cells)",
            name : "N1mi"
          }, {
            description : "Metastases > 0.2 mm AND <= 2.0 mm OR > 200 cells) AND < 6 sentinel nodes",
            name : "N1mi (sn)"
          }, {
            description : "Metastases in 1 to 3 axillary lymph nodes, at least 1 > 2.0 mm",
            name : "N1a"
          }, {
            description : "Metastases in 1 to 3 axillary lymph nodes, at least 1 > 2.0 mm AND < 6 sentinel nodes",
            name : "N1a (sn)"
          }, {
            description : "Metastases in 4 to 9 axillary lymph nodes (at least 1 > 2.0 mm)",
            name : "N2a"
          }, {
            description : "Metastases in 4 to 9 axillary lymph nodes (at least 1 > 2.0 mm) AND < 6 sentinel nodes",
            name : "N2a (sn)"
          }, {
            description : "Metastases in 10 or more axillary lymph nodes (at least 1 > 2.0 mm)",
            name : "N3a"
          } ],
          name : "Category (pN)"
        }, {
          group : [ {
            description : "Distant detectable metastasis as histologically proven larger than 0.2 mm",
            name : "M1"
          }, {
            name : "M (not applicable)"
          }, {
            name : "distant metastasis not applicable"
          } ],
          name : ""
        } ]
      }, {
         description : "repeat if original negative or s/p neoadjuvant therapy regardless of original",
        name : "Estrogen Receptor",
       optional_state  : "required", "options" : [ {
          group : [ {
            name :  "Positive, >90% of cells, strong intensity"
          },{
            name :  "Positive  50-90% of cells, strong intensity"
          },{
            name :  "Positive  10-50% of cells, strong intensity"
          },{
            name :  "Positive  50-90% of cells, moderate intensity"
          },{
            name :  "Positive  10-50% of cells, moderateintensity"
          },{
            name :  "Positive  10-50% of cells, moderate intensity"
          },{
            name :  "Positive  10-50% of cells, weak intensity"
          },{
            name :  "Positive  1-10% of cells, weak intensity"
          }, {
            name : "Negative (<1%)"
          }, {
            name : "Pending"
          }, {
            name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            name : "See case "
          } ],
          name : ""
        } ]
      }, {
         description : "repeat if original negative or s/p neoadjuvant therapy regardless of original",
        name : "Progesterone Receptor",
       optional_state  : "required", "options" : [ {
          group : [ {
            name :  "Positive, >90% of cells, strong intensity"
          },{
            name :  "Positive  50-90% of cells, strong intensity"
          },{
            name :  "Positive  10-50% of cells, strong intensity"
          },{
            name :  "Positive  50-90% of cells, moderate intensity"
          },{
            name :  "Positive  10-50% of cells, moderateintensity"
          },{
            name :  "Positive  10-50% of cells, moderate intensity"
          },{
            name :  "Positive  10-50% of cells, weak intensity"
          },{
            name :  "Positive  1-10% of cells, weak intensity"
          }, {
            name : "Negative (<1%)"
          }, {
            name : "Pending"
          }, {
            name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            name : "See case "
          } ],
          name : ""
        } ]
      }, {
         description : "repeat if original triple negative or s/p neoadjuvant therapy regardless of original",
        name : "Her2Neu by IHC",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Positive (3+)"
          }, {
            name : "Negative (0-1+)"
          }, {
            name : "Equivocal (2+)"
          }, {
            name : "Pending"
          }, {
            name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            name : "See case "
          } ],
          name : ""
        } ]
      }, {
          description : "repeat if original triple negative or s/p neoadjuvant therapy regardless of original",
        name : "Her2Neu by FISH",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Positive"
          }, {
            name : "Negative"
          }, {
            name : "Equivocal"
          }, {
            name : "Reflex pending if appropriate"
          }, {
            name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            name : "See case "
          } ],
          name : ""
        } ]
      }, {
        name : "Known repeat ER/PR testing",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "No"
          }, {
            name : "Yes"
          } ],
          name : ""
        } ]
      }, {
        name : "Known repeat Her2Neu testing",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "No"
          }, {
            name : "Yes"
          } ],
          name : ""
        } ]
           }, {
  
        name : "Additional findings",
        optional_state : "required",
        "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Biopsy site"
          }, {
            name : "Biopsy site x 2"
          }, {
            name : "Atypical ductal hyperplasia"
          }, {
            name : "Atypical lobular hyperplasia"
          }, {
            name : "Lobular carcinoma in situ, classical type"
          }, {
            name : "Lobular carcinoma in situ, pleomorphic type"
          }, {
            name : "Pagets disease"
          }, {
            name : "Biopsy site and atypical ductal hyperplasia"
          }, {
            name : "Biopsy site, atypical ductal hyperplasia and Pagets disease"
          }, {
            name : "Biopsy site and atypical lobular hyperplasia"
          }, {
            name : "Biopsy site, atypical lobular hyperplasia and Pagets disease"
          }, {
            name : "Biopsy site and lobular carcinoma in situ, classical type"
          }, {
            name : "Biopsy site and lobular carcinoma in situ, classical type and Pagets disease"
          }, {
            name : "Biopsy site, atypical ductal hyperplasia, and atypical lobular hyperplasia"
          }, {
            name : "Biopsy site, atypical ductal hyperplasia, and lobular carcinoma in situ, classical type"
          }, {
            name : "Biopsy site, atypical ductal hyperplasia, lobular carcinoma in situ, classical type and Pagets disease"
          } ],
          name : ""
        } ]
      }, {
        description : "Add billing code 3260F for women, 3260F1P for men",
        name : "ICD10",
       optional_state  : "required", "options" : [ {
          group : [ {
             description : " for women",
            name : "C50.919"
          },{
             description : " for men",
            name : "C50.929"
          } ],
          name : ""
        } ]
      
      } ]
    }, {
      biopsy_type : "Invasive",
      most_common : false,
      name : "Breast biopsy",
      optional : true,
      organ_group : "Breast",
      properties : [ { name : "Location",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            description : "location",
            inputs_required : [ "" ],
            name : "Right"
          }, {
            description : "location",
            inputs_required : [ "" ],
            name : "Left"
          } ],
          name : ""
        } ]
      }, {
        name : "Procedure",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            name : "Core needle biopsy"
          }, {
            name : "Stereotactic core needle biopsy"
          }, {
            name : "Ultrasound guided core needle biopsy"
          }, {
            name : "MRI guided core needle biopsy"
          } ],
          name : ""
        } ]
      }, {
        name : "Type",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            name : "Invasive ductal carcinoma"
          }, {
            name : "Invasive lobular carcinoma"
          }, {
            name : "Invasive lobular carcinoma, pleomorphic type"
          }, {
            name : "Invasive carcinoma with both ductal and lobular features"
          }, {
            name : "Invasive mammary carcinoma"
          }, {
            name : "Micro-invasive carcinoma"
          }, {
            name : "Mucinous carcinoma"
          }, {
            name : "Invasive ductal carcinoma with mucinous carcinoma features"
          }, {
            name : "Tubular carcinoma"
          }, {
            name : "Invasive ductal carcinoma with tubular carcinoma features"
          }, {
            name : "Invasive tubulo-lobular carcinoma"
          }, {
            name : "Invasive cribiform carcinoma"
          }, {
            name : "Invasive carcinoma with micropapillary features"
          }, {
            name : "Invasive papillary carcinoma"
          }, {
            name : "Medullary carcinoma"
          }, {
            name : "Metaplastic carcinoma"
          }, {
            name : "Adenoid cystic carcinoma"
          }, {
            name : "Secretory carcinoma"
          }, {
            name : "Invasive carcinoma with basaloid features"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor size",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            inputs_required : [ "" ],
            name : "At least"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Grade",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            description : "Scores of 3, 4, or 5",
            name : "Well differentiated"
          }, {
            description : "Scores of 3, 4, or 5",
            name : "At least well differentiated"
          }, {
            description : "Scores of 5 or 6",
            name : "Well to moderately differentiated"
          }, {
            description : "Scores of 6 or 7",
            name : "Moderately differentiated"
          }, {
            description : "Scores of 6 or 7",
            name : "At least moderately differentiated"
          }, {
            description : "Scores of 7 or 8",
            name : "Moderately to poorly differentiated"
          }, {
            description : "Scores of 8 or 9",
            name : "Poorly differentiated"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            name : "None"
          }, {
            name : "Indeterminate"
          }, {
            name : "Suspicious"
          }, {
            name : "Present"
          }, {
            name : "Not applicable"
          }, {
            name : "Present, extensive"
          } ],
          name : ""
        } ]
      }, {
        name : "DCIS",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            name : "High grade with calcifications and necrosis"
          }, {
            name : "High grade with calcifications"
          }, {
            name : "High grade with necrosis"
          }, {
            name : "High grade"
          }, {
            name : "Intermediate grade with calcifications"
          }, {
            name : "Intermediate grade"
          }, {
            name : "Low grade with calcifications"
          }, {
            name : "Low grade"
          }, {
            name : "cannot be ruled out"
          }, {
            name : "None"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
         description : "MULTI-SELECT",
        name : "Additional findings",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            name : "None"
          }, {
            name : "Atypical ductal hyperplasia"
          }, {
            name : "Atypical ductal hyperplasia with calcifications"
          }, {
            name : "Atypical lobular hyperplasia"
          }, {
            name : "Atypical lobular hyperplasia with calcifications"
          }, {
            name : "Atypical lobular hyperplasia/lobular carcinoma in situ, classical type"
          }, {
            name : "Atypical lobular hyperplasia/lobular carcinoma in situ, classical type with calcifications"
          }, {
            name : "Lobular carcinoma in situ, classical type"
          }, {
            name : "Lobular carcinoma in situ, classical type with calcifications"
          }, {
            name : "Lobular carcinoma in situ, pleomorphic type"
          }, {
            name : "Lobular carcinoma in situ, pleomorphic type with calcifications"
          }, {
            name : "In situ carcinoma with both ductal and lobular features"
          }, {
            name : "In situ carcinoma with both ductal and lobular features with calcifications"
          }, {
            name : "Flat epithelial atypia"
          }, {
            name : "Flat epithelial atypia with calcifications"
          }, {
            name : "Fibrocystic changes"
          }, {
            name : "Fibrocystic changes with calcifications"
          }, {
            name : "Fibrocystic changes, including large cysts"
          }, {
            name : "Fibrocystic changes, including large cysts, with calcifications"
          }, {
            name : "Fibrocystic changes, including radial scar/complex sclerosing lesion"
          }, {
            name : "Fibrocystic changes, including radial scar/complex sclerosing lesion, with calcifications"
          }, {
            name : "Fibrocystic changes, including benign papilloma"
          }, {
            name : "Fibrocystic changes, including benign papilloma, with calcifications"
          }, {
            name : "Fibroadenoma"
          }, {
            name : "Fibroadenoma, with calcifications"
          }, {
            name : "Metastatic carcinoma in axillary lymph node"
          }, {
            name : "Metastatic carcinoma in axillary biopsy"
          }, {
            name : "Benign protion of a lymph node in axillary biopsy"
          } ],
          name : ""
        } ]
      }, {
        name : "Estrogen Receptor",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            name : "Pending"
          }, {
            name :  "Positive, >90% of cells, strong intensity"
          },{
            name :  "Positive  50-90% of cells, strong intensity"
          },{
            name :  "Positive  10-50% of cells, strong intensity"
          },{
            name :  "Positive  50-90% of cells, moderate intensity"
          },{
            name :  "Positive  10-50% of cells, moderateintensity"
          },{
            name :  "Positive  10-50% of cells, moderate intensity"
          },{
            name :  "Positive  10-50% of cells, weak intensity"
          },{
            name :  "Positive  1-10% of cells, weak intensity"
          }, {
            name : "Negative (<1%)"
          }, {
            name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            name : "See case "
          } ],
          name : ""
        } ]
      }, {
        name : "Progesterone Receptor",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            name : "Pending"
          }, {
            name :  "Positive, >90% of cells, strong intensity"
          },{
            name :  "Positive  50-90% of cells, strong intensity"
          },{
            name :  "Positive  10-50% of cells, strong intensity"
          },{
            name :  "Positive  50-90% of cells, moderate intensity"
          },{
            name :  "Positive  10-50% of cells, moderateintensity"
          },{
            name :  "Positive  10-50% of cells, moderate intensity"
          },{
            name :  "Positive  10-50% of cells, weak intensity"
          },{
            name :  "Positive  1-10% of cells, weak intensity"
          }, {
            name : "Negative (<1%)"
          }, {
            name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            name : "See case "
          } ],
          name : ""
        } ]
      }, {
        name : "Her2Neu by IHC",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            name : "Pending"
          }, {
            name : "Positive (3+)"
          }, {
            name : "Negative (0-1+)"
          }, {
            name : "Equivocal (2+)"
          }, {
            name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            name : "See case "
          } ],
          name : ""
        } ]
      }, {
        name : "Her2Neu by FISH",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            name : "Positive"
          }, {
            name : "Negative"
          }, {
            name : "Equivocal"
          }, {
            name : "Reflex pending if appropriate"
          }, {
            name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            name : "See case "
          } ],
          name : ""
        } ]
      } ]
    }, {
      biopsy_type : "DCIS",
      most_common : false,
      name : "Breast biopsy",
      optional : true,
      organ_group : "Breast",
      properties : [  {
         name : "Location",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            description : "location",
            inputs_required : [ "" ],
            name : "Right"
          }, {
            description : "location",
            inputs_required : [ "" ],
            name : "Left"
          } ],
          name : ""
        } ]
      }, {
        name : "Procedure",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            name : "Core needle biopsy"
          }, {
            name : "Stereotactic core needle biopsy"
          }, {
            name : "Ultrasound guided core needle biopsy"
          }, {
            name : "MRI guided core needle biopsy"
          } ],
          name : ""
        } ]
      }, {
        name : "Type",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            name : "Ductal carcinoma in situ (DCIS)"
          }, {
            name : "Ductal carcinoma in situ (DCIS), invasion cannot be ruled out"
          }, {
            name : "Ductal carcinoma in situ (DCIS), see note"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Subtype",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            name : "Comedo type"
          }, {
            name : "Solid type"
          }, {
            name : "Cribriform type"
          }, {
            name : "Solid and cribriform type"
          }, {
            name : "Micropapillary type"
          }, {
            name : "Cribriform and micropapillary type"
          }, {
            name : "Flat (clinging) type"
          }, {
            name : "Solid-papillary type"
          }, {
            name : "Papillary and cribriform type"
          }, {
            name : "Comedo type, with areas suspicious for invasion"
          }, {
            name : "Solid type, with areas suspicious for invasion"
          }, {
            name : "Solid-papillary type, with areas suspicious for invasion"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Grade",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            name : "Low nuclear grade"
          }, {
            name : "Low to intermediate nuclear grade"
          }, {
            name : "Intermediate nuclear grade"
          }, {
            name : "Intermediate to high nuclear grade"
          }, {
            name : "High nuclear grade"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Calcifications",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            name : "None"
          }, {
            name : "Present"
          }, {
            name : "Calcium oxalate present"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Necrosis",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            name : "None"
          }, {
            name : "Present"
          }, {
            name : "Present, focal"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
         description : "MULTI-SELECT",
        name : "Additional findings",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            name : "None"
          }, {
            name : "Atypical ductal hyperplasia"
          }, {
            name : "Atypical ductal hyperplasia with calcifications"
          }, {
            name : "Atypical lobular hyperplasia"
          }, {
            name : "Atypical lobular hyperplasia with calcifications"
          }, {
            name : "Atypical lobular hyperplasia/lobular carcinoma in situ, classical type"
          }, {
            name : "Atypical lobular hyperplasia/lobular carcinoma in situ, classical type with calcifications"
          }, {
            name : "Lobular carcinoma in situ, classical type"
          }, {
            name : "Lobular carcinoma in situ, classical type with calcifications"
          }, {
            name : "Lobular carcinoma in situ, pleomorphic type"
          }, {
            name : "Lobular carcinoma in situ, pleomorphic type with calcifications"
          }, {
            name : "In situ carcinoma with both ductal and lobular features"
          }, {
            name : "In situ carcinoma with both ductal and lobular features with calcifications"
          }, {
            name : "Flat epithelial atypia"
          }, {
            name : "Flat epithelial atypia with calcifications"
          }, {
            name : "Fibrocystic changes"
          }, {
            name : "Fibrocystic changes with calcifications"
          }, {
            name : "Fibrocystic changes, including large cysts"
          }, {
            name : "Fibrocystic changes, including large cysts, with calcifications"
          }, {
            name : "Fibrocystic changes, including radial scar/complex sclerosing lesion"
          }, {
            name : "Fibrocystic changes, including radial scar/complex sclerosing lesion, with calcifications"
          }, {
            name : "Fibrocystic changes, including benign papilloma"
          }, {
            name : "Fibrocystic changes, including benign papilloma, with calcifications"
          }, {
            name : "Fibroadenoma"
          }, {
            name : "Fibroadenoma, with calcifications"
          } ],
          name : ""
        } ]
      }, {
        name : "Estrogen Receptor",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            name : "Pending"
          }, {
            name :  "Positive, >90% of cells, strong intensity"
          },{
            name :  "Positive  50-90% of cells, strong intensity"
          },{
            name :  "Positive  10-50% of cells, strong intensity"
          },{
            name :  "Positive  50-90% of cells, moderate intensity"
          },{
            name :  "Positive  10-50% of cells, moderateintensity"
          },{
            name :  "Positive  10-50% of cells, moderate intensity"
          },{
            name :  "Positive  10-50% of cells, weak intensity"
          },{
            name :  "Positive  1-10% of cells, weak intensity"
          }, {
            name : "Negative (<1%)"
          }, {
            name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            name : "See case "
          } ],
          name : ""
        } ]
      }, {
        name : "Progesterone Receptor",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            name : "Pending"
          }, {
            name :  "Positive, >90% of cells, strong intensity"
          },{
            name :  "Positive  50-90% of cells, strong intensity"
          },{
            name :  "Positive  10-50% of cells, strong intensity"
          },{
            name :  "Positive  50-90% of cells, moderate intensity"
          },{
            name :  "Positive  10-50% of cells, moderateintensity"
          },{
            name :  "Positive  10-50% of cells, moderate intensity"
          },{
            name :  "Positive  10-50% of cells, weak intensity"
          },{
            name :  "Positive  1-10% of cells, weak intensity"
          }, {
            name : "Negative (<1%)"
          }, {
            name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            name : "See case "
          } ],
          name : ""
        } ]
      } ]
    }, {
      biopsy_type : "Other",
      most_common : false,
      name : "Breast biopsy",
      optional : true,
      organ_group : "Breast",
      properties : [ {
        name : "Location",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            description : "location",
            inputs_required : [ "" ],
            name : "Right"
          }, {
            description : "location",
            inputs_required : [ "" ],
            name : "Left"
          } ],
          name : ""
        } ]
      }, {
        name : "Procedure",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            name : "Core needle biopsy"
          }, {
            name : "Stereotactic core needle biopsy"
          }, {
            name : "Ultrasound guided core needle biopsy"
          }, {
            name : "MRI guided core needle biopsy"
          } ],
          name : ""
        } ]
      }, {
        name : "Diagnosis/Type",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            name : "Suspicious for invasive carcinoma, recommend excision for definitive classification"
          }, {
            name : "Atypical ductal hyperplasia, recommend excision for definitive classification"
          }, {
            name : "Atypical ductal hyperplasia with calcifications, recommend excision for definitive classification"
          }, {
            name : "Atypical ductal hyperplasia and lobular neoplasia, recommend excision for definitive classification"
          }, {
            name : "Atypical ductal hyperplasia and lobular neoplasia with calcifications, recommend excision for definitive classification"
          }, {
            name : "Lobular carcinoma in situ, pleomorphic type, recommend excision for definitive classification"
          }, {
            name : "Lobular carcinoma in situ, pleomorphic type with calcifications, recommend excision for definitive classification"
          }, {
            name : "Atypical lobular hyperplasia/lobular carcinoma in situ, classical type"
          }, {
            name : "Atypical lobular hyperplasia/lobular carcinoma in situ, classical type with calcifications"
          }, {
            name : "Flat epithelial atypia, recommend excision for definitive classification"
          }, {
            name : "Flat epithelial atypia with calcifications, recommend excision for definitive classification"
          }, {
            name : "Atypical papillary lesion, recommend excision for definitive classification"
          }, {
            name : "Atypical papillary lesion with calcifications, recommend excision for definitive classification"
          }, {
            name : "Atypical mucinous lesion, recommend excision for definitive classification"
          }, {
            name : "Atypical mucinous lesion with calcifications, recommend excision for definitive classification"
          }, {
            name : "Hypercellular fibroepithelial lesion, recommend excision for definitive classification"
          }, {
            name : "Fibrocystic changes with atypia, NOS"
          }, {
            name : "Fibrocystic changes"
          }, {
            name : "Fibrocystic changes with calcifications"
          }, {
            name : "Fibrocystic changes, including large cysts"
          }, {
            name : "Fibrocystic changes, including large cysts with calcifications"
          }, {
            name : "Fibrocystic changes, including radial scar/complex sclerosing lesion"
          }, {
            name : "Fibrocystic changes, including radial scar/complex sclerosing lesion with calcifications"
          }, {
            name : "Fibrocystic changes, including benign papilloma"
          }, {
            name : "Fibrocystic changes, including benign papilloma with calcifications"
          }, {
            name : "Fibrocystic changes, including pseudoangiomatous hyperplasia (PASH)"
          }, {
            name : "Fibroadenoma"
          }, {
            name : "Fibroadenoma with calcifications"
          } ],
          name : ""
        } ]
      } ]
    }, {
      most_common : false,
      name : "Central Nervous System",
      optional : true,
      organ_group : "Central Nervous System",
      properties : [ {
        name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Skull "
          }, {
            name : "Dura "
          }, {
            name : "Right frontal"
          }, {
            name : "Left frontal"
          }, {
            name : "Right temporal"
          }, {
            name : "Left temporal"
          }, {
            name : "Right parietal"
          }, {
            name : "Left parietal"
          }, {
            name : "Right sagittal"
          }, {
            name : "Left sagittal"
          }, {
            name : "Occipital"
          }, {
            name : "Right cerebellopontine angle"
          }, {
            name : "Left cerebellopontine angle"
          }, {
            name : "Sellar/suprasellar/pituitary"
          }, {
            description : "which",
            inputs_required : [ "" ],
            name : "Cranial nerve "
          }, {
            description : "which",
            inputs_required : [ "" ],
            name : "Ventricle"
          }, {
            name : "Brain stem "
          }, {
            name : "Spine "
          }, {
            name : "Spinal Cord"
          }, {
            description : "which",
            inputs_required : [ "" ],
            name : "Spinal nerve root(s) "
          }, {
            description : "which",
            inputs_required : [ "" ],
            name : "Peripheral nerve "
          }, {
            description : "which",
            inputs_required : [ "" ],
            name : "Ganglion"
          } ],
          name : ""
        } ]
      }, {
        name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Open biopsy"
          }, {
            name : "Stereotactic biopsy"
          }, {
            name : "Resection"
          } ],
          name : ""
        } ]
      }, {
        name : "Type (WHO)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "IMPOX: IDH + (mutant), MGMT +/-, p53 +, ATRX - (mutant), 1p/19q wild type",
            name : "Diffuse astrocytoma, IDH-mutant"
          }, {
            description : "mitoses, IMPOX: IDH + (mutant), MGMT +/-, p53 +, ATRX - (mutant), 1p/19q wild type",
            name : "Anaplastic astrocytoma, IDH-mutant"
          }, {
            description : "necrosis or vasc prolif, IMPOX: IDH - (wild type), ATRX + (wild type), MGMT +/-, p53 -, EGFR amplification +, TERT + , 1p/19q wild type",
            name : "Glioblastoma, IDH-wild type"
          }, {
            description : "necrosis or vasc prolif, IMPOX: IDH + (mutant), ATRX - (mutant), MGMT +/-, p53 +, EGFR amplification -, TERT - , 1p/19q wild type",
            name : "Glioblastoma, IDH-mutant"
          }, {
            description : "IMPOX: 1p/19q codeleted, IDH + (mutant), p53 -/+, MGMT +, ATRX + (wild type) , TERT +, Ki67 <5%",
            name : "Oligodendroglioma, IDH-mutant, 1p/19q codeleted"
          }, {
            description : "atypia, cellularity, mitoses, IMPOX: 1p/19q codeleted, IDH + (mutant), p53 -, MGMT +, ATRX + (wild type), TERT +, Ki67 >5%",
            name : "Anaplastic oligodendroglioma IDH-mutant, 1p/19q codeleted"
          }, {
            description : "rare mitoses and necrosis, IMPOX: IDH - (wild type), p53 -, BRAF V600E +",
            name : "Pleomorphic xanthoastrocytoma"
          }, {
            description : "IMPOX: IDH - (wild type), p53 -",
            name : "Pilocytic astrocytoma"
          }, {
            description : "GFAP+, s100+, EMA +",
            name : "Ependymoma"
          }, {
            description : "GFAP+, s100+, EMA +",
            name : "Myxopapillary ependymoma"
          }, {
            description : "IMPOX: IDH1 - (wild type), synaptophysin +, GFAP -/focal, p53 -",
            name : "Central neurocytoma"
          }, {
            description : "WNT activatied OR SHH activated OR group 3 OR group 4 IMPOX: synaptophysin +, beta catenin +, p53 +/-, Ki67 +",
            name : "Medulloblastoma"
          }, {
            description : "IMPOX: s100+, EMA -, PR -",
            name : "Schwannoma"
          }, {
            description : " grade 1/3, IMPOX: s100-, EMA +, PR +, NF1/NF2 mutations",
            name : "Meningioma"
          }, {
            description : " grade 2/3, mitoses >=4/10hpf OR ki67 >4% OR brain invasion OR (3 of increased cellularity, small cell change, nucleoli, sheeting, necrosis) OR clear cell OR Chordoid,  IMPOX: s100-, EMA +, PR +, NF1/NF2 mutations",
            name : "Atypical meningioma"
          }, {
            description : "grade 3/3, malignant cytology OR mitoses> 20/10 hpf OR Ki67>20% OR Papillary OR Rhabdoid, IMPOX: s100-, EMA +, PR +, NF1/NF2 mutations",
            name : "Anaplastic (malignant) meningioma"
          }, {
            description : "IMPOX: chromogranin +, synaptophysin +",
            name : "Pituitary adenoma"
          }, {
            description : "Extended list",
            inputs_required : [ [ "ASTROCYTIC TUMORS", "Pilocytic astrocytoma (WHO grade I)", "Pilomyxoid astrocytoma (WHO grade II) ", "Subependymal giant cell astrocytoma (WHO grade I)", "Pleomorphic xanthoastrocytoma (WHO grade II)", "Pleomorphic xanthoastrocytoma with anaplastic features (WHO grade not assigned) ", "Diffuse astrocytoma (WHO grade II)", "Fibrillary astrocytoma (WHO grade II)", "Protoplasmic astrocytoma (WHO grade II)", "Gemistocytic astrocytoma (WHO grade II)", "Anaplastic astrocytoma (WHO grade III)", "Glioblastoma (WHO grade IV)", "Giant cell glioblastoma (WHO grade IV) ", "Gliosarcoma (WHO grade IV)", "Gliomatosis cerebri ", "Astrocytoma, not otherwise characterized ", "", "OLIGODENDROGLIAL TUMORS", "Oligodendroglioma (WHO grade II)", "Anaplastic oligodendroglioma (WHO grade III)", "", "OLIGOASTROCYTIC TUMORS", "Oligoastrocytoma (WHO grade II)", "Anaplastic oligoastrocytoma (WHO grade III)", "", "EPENDYMAL TUMORS", "Subependymoma (WHO grade I)", "Myxopapillary ependymoma (WHO grade I)", "Ependymoma (WHO grade II)", "Cellular ependymoma (WHO grade II)", "Papillary ependymoma (WHO grade II)", "Clear cell ependymoma (WHO grade II)", "Tanycytic ependymoma (WHO grade II)", "Anaplastic ependymoma (WHO grade III)", "", "CHOROID PLEXUS TUMORS", "Choroid plexus papilloma (WHO grade I)", "Atypical choroid plexus papilloma (WHO grade II)", "Choroid plexus carcinoma (WHO grade III)", "", "OTHER NEUROEPITHELIAL TUMORS", "Astroblastoma (WHO grade not assigned)", "Chordoid glioma of the third ventricle (WHO grade II)", "Angiocentric glioma (WHO grade I)", "", "NEURONAL AND MIXED NEURONAL-GLIAL TUMORS", "Dysplastic gangliocytoma of cerebellum (Lhermitte-Duclos) (WHO grade I)", "Desmoplastic infantile astrocytoma/ganglioglioma (WHO grade I)", "Dysembryoplastic neuroepithelial tumor (WHO grade I)", "Gangliocytoma (WHO grade I)", "Ganglioglioma (WHO grade I)", "Anaplastic ganglioglioma (WHO grade III)", "Central neurocytoma (WHO grade II)", "Extraventricular neurocytoma (WHO grade II)", "Cerebellar liponeurocytoma (WHO grade II)", "Papillary glioneuronal tumor (PGNT) (WHO grade I)", "Rosette-forming glioneuronal tumor of the fourth ventricle (RGNT) (WHO grade I)", "Paraganglioma of the spinal cord (WHO grade I)", "", "PINEAL TUMORS", "Pineocytoma (WHO grade I)", "Pineal parenchymal tumor of intermediate differentiation (WHO II III)", "Pineoblastoma (WHO grade IV)", "Papillary tumor of the pineal region (WHO grade II-III)", "", "EMBRYONAL TUMORS", "Medulloblastoma, not otherwise characterized (WHO grade IV)", "Desmoplastic/nodular medulloblastoma (WHO grade IV)", "Medulloblastoma with extensive nodularity (WHO grade IV)", "Anaplastic medulloblastoma (WHO grade IV)", "Large cell medulloblastoma (WHO grade IV)", "Central nervous system (CNS) primitive neuroectodermal tumor (PNET) (WHO grade IV)", "Medulloepithelioma (WHO grade IV)", "Neuroblastoma (WHO grade IV)", "Ganglioneuroblastoma (WHO grade IV)", "Ependymoblastoma (WHO grade IV)", "Atypical teratoid/rhabdoid tumor (WHO grade IV)", "", "TUMORS OF NERVES", "Schwannoma (WHO grade I)", "Cellular schwannoma (WHO grade I)", "Plexiform schwannoma(WHO grade I)", "Melanotic schwannoma (WHO grade I)", "Neurofibroma (WHO grade I", "Plexiform neurofibroma (WHO grade I) ", "Perineurioma (WHO grade I)", "Intraneural perineurioma (WHO grade I)", "Soft tissue perineurioma (WHO grade I)", "Malignant perineurioma (WHO grade III)", "Ganglioneuroma (WHO grade I) ", "Malignant peripheral nerve sheath tumor (MPNST) (WHO grade II-IV) ", "Epithelioid MPNST (WHO grade II-IV)", "MPNST with divergent mesenchymal and/or epithelial differentiation (WHO grade II-IV)", "", "MENINGEAL TUMORS", "Meningioma (WHO grade I)", "Meningothelial meningioma (WHO grade I)", "Fibrous meningioma (fibroblastic) (WHO grade I)", "Transitional meningioma (mixed) (WHO grade I)", "Psammomatous meningioma (WHO grade I)", "Angiomatous meningioma (WHO grade I)", "Microcystic meningioma (WHO grade I)", "Secretory meningioma (WHO grade I)", "Lymphoplasmacyte-rich (lymphoplasmacytic) meningioma (WHO grade I)", "Metaplastic meningioma (WHO grade I)", "Atypical meningioma (WHO grade II)", "Clear cell meningioma (WHO grade II)", "Chordoid meningioma (WHO grade II)", "Anaplastic meningioma (WHO grade III)", "Papillary meningioma (WHO grade III)", "Rhabdoid meningioma (WHO grade III)", "", "MESENCHYMAL TUMORS", "Lipoma", "Angiolipoma", "Hibernoma", "Liposarcoma (intracranial)", "Solitary fibrous tumor", "Fibrosarcoma ", "Malignant fibrous histiocytoma", "Leiomyoma", "Leiomyosarcoma", "Rhabdomyoma ", "Rhabdomyosarcoma", "Chondroma", "Chondrosarcoma", "Osteoma", "Osteosarcoma ", "Osteochondroma ", "Hemangioma ", "Epithelioid hemangioendothelioma ", "Hemangiopericytoma ", "Anaplastic hemangiopericytoma  ", "Angiosarcoma", "Kaposi sarcoma", "Chordoma", "Mesenchymal, nonmeningothelial tumor", "Sarcoma, primary CNS ", "", "MELANOTIC TUMORS", "Diffuse melanocytosis", "Melanocytoma", "Malignant melanoma", "Meningeal melanomatosis", "", "TUMORS OF UNCERTAIN HISTOGENESIS", "Hemangioblastoma (WHO grade I)", "", "LYMPHOMA AND HEMATOPOIETIC TUMORS", "Malignant lymphoma", "Plasmacytoma", "Granulocytic sarcoma", "Hematopoietic neoplasm, other ", "", "GERM CELL TUMORS", "Germinoma", "Embryonal carcinoma", "Yolk sac tumor", "Choriocarcinoma", "Teratoma, mature", "Teratoma, immature", "Teratoma with malignant transformation", "Malignant mixed germ cell tumor ", "", "SELLAR TUMORS", "Craniopharyngioma (WHO grade I)", "Craniopharyngioma, adamantinomatous (WHO grade I)", "Craniopharyngioma, papillary (WHO grade I)", "Granular cell tumor (WHO grade I)", "Pituicytoma (WHO grade I)", "Spindle cell oncocytoma (WHO grade I)", "Pituitary adenoma ", "Pituitary carcinoma", "Pituitary hyperplasia", "", "OTHER", "Malignant neoplasm, type cannot be determined", "Pediatric low grade glioma (pLGG) not otherwise specified (NOS) (Grade I/II)" ] ],
            name : ""
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Grade",
  
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Grade 1"
          }, {
            name : "Grade 2"
          }, {
            name : "Grade 3"
          }, {
            name : "Grade 4"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Immunohistochemistry",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "IDH, P53, ATRX",
            inputs_required : [ "" ],
            name : ""
          }, {
            name : "None"
          }, {
            name : "Not applicable"
          }, {
            name : "See above"
          }, {
            inputs_required : [ "" ],
            name : "See case"
          } ],
          name : ""
        } ]
      }, {
        name : "Ancillary studies ordered",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "astrocytoma grade 2-3",
            name : "1p 19q FISH and MGMT"
          }, {
            description : "GBM",
            name : "1p 19q FISH, MGMT and EGFR amplification by FISH"
          }, {
            name : "None"
          }, {
            name : "Not applicable"
          }, {
            inputs_required : [ "" ],
            name : "See case"
          } ],
          name : ""
        } ]
      } ]
    }, {
      most_common : false,
      name : "Cervix, Hysterectomy",
      optional : false,
      organ_group : "Gynecologic",
      properties : [  {
        name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Simple hysterectomy"
          }, {
            name : "Radical hysterectomy"
          }, {
            name : "Simple hysterectomy and bilateral salpingo-oopherectomy"
          }, {
            name : "Radical hysterectomy and bilateral salpingo-oopherectomy"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor size",
       optional_state  : "required", "options" : [ {
          name : ""
        } ]
      }, {
        name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Squamous cell carcinoma"
          }, {
            name : "Squamous cell carcinoma, keratinizing"
          }, {
            name : "Squamous cell carcinoma, nonkeratinizing"
          }, {
            name : "Squamous cell carcinoma, basaloid"
          }, {
            name : "Squamous cell carcinoma, verrucous"
          }, {
            name : "Squamous cell carcinoma, warty"
          }, {
            name : "Squamous cell carcinoma, papillary"
          }, {
            name : "Squamous cell carcinoma, lymphoepithelioma-like"
          }, {
            name : "Squamous cell carcinoma, squamotransitional"
          }, {
            description : "cervical HPV ISH +, p16+, CEA+, p53 wild type, ER-/wk, Vim -/wk vs endometrial HPV ISH-, p16-/wk, CEA -/wk, p53 abnormal/-, ER-/+, Vim -/wk",
            name : "Endocervical adenocarcinoma"
          }, {
            name : "Endocervical adenocarcinoma, usual type"
          }, {
            name : "Mucinous carcinoma, NOS"
          }, {
            name : "Mucinous carcinoma, intestinal type"
          }, {
            name : "Mucinous carcinoma, signet-ring cell type"
          }, {
            name : "Mucinous carcinoma, gastric type"
          }, {
            name : "Villoglandular carcinoma"
          }, {
            name : "Endometrioid carcinoma"
          }, {
            name : "Clear cell carcinoma"
          }, {
            name : "Serous carcinoma"
          }, {
            name : "Mesonephric carcinoma"
          }, {
            name : "Adenocarcinoma admixed with neuroendocrine carcinoma"
          }, {
            name : "Adenosquamous carcinoma"
          }, {
            name : "Adenosquamous carcinoma, glassy cell variant"
          }, {
            name : "Adenoid cystic carcinoma"
          }, {
            name : "Adenoid basal carcinoma"
          }, {
            name : "Small cell carcinoma"
          }, {
            name : "Large cell neuroendocrine carcinoma"
          } ],
          name : ""
        } ]
      }, {
        name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Grade 1/3, Well differentiated"
          }, {
            name : "Grade 2/3, Moderately differentiated"
          }, {
            name : "Grade 3/3, Poorly differentiated"
          } ],
          name : ""
        } ]
      }, {
        description : "depth and width in mm and thickness of cervix",
        name : "Cervical stromal invasion",
       optional_state  : "required", "options" : [ {
          name : ""
        } ]
      }, {
        name : "Other tissue(s) involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Right parametrium"
          }, {
            name : "Left parametrium"
          }, {
            name : "Bilateral parametrium"
          }, {
             description : "specify, incluidng vagina, ovaries, fallopian tubes, pelvic side wall, bladder bowel and omentum",
              inputs_required : [ "" ],
            name : "Other organs"
          } ],
          name : ""
        } ]
      }, {
        description : "include distance/location of closest margin, ectocervical and radial",
        name : "Margins, invasive tumor",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            name : "Positive"
          }],
          name : ""
        } ]
      }, {
        description : "include distance/location of closest margin, ectocervical",
        name : "Margins, HSIL",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            name : "Positive"
          }],
          name : ""
        } ]
      }, {
        name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Indeterminate"
          }, {
            name : "Suspicious"
          }, {
            name : "Present"
          }, {
            name : "Present, extensive"
          } ],
          name : ""
        } ]
      }, {
       
        name : "Lymph nodes, # sentinel",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        description : "includes pelvic, parametrial, obturator, internal iliac (hypogastric), external iliac, common iliac, sacral, presacral and para-aortic ",
        name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
         description : "do not include ITCs",
        name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            description : "# positive, specify location",
            inputs_required : [ "" ],
            name : ""
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # w/ isolated tumor cells",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            description : "# positive, specify location",
            inputs_required : [ "" ],
            name : ""
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            name : ""
          }, {
            description : "pathologic",
            name : "AJCC p"
          }, {
            description : "multiple foci of invasive carcinoma",
            name : "AJCC m"
          }, {
            description : "recurrent",
            name : "AJCC r"
          }, {
            description : "post-treatment",
            name : "AJCC y"
          }, {
            name : "AJCC mp"
          }, {
            name : "AJCC rp"
          }, {
            name : "AJCC yp"
          }, {
            name : "AJCC mrp"
          }, {
            name : "AJCC myp"
          }, {
            name : "AJCC ryp"
          }, {
            name : "AJCC mryp"
          } ],
          name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            name : "TX"
          }, {
            description : "<= 3 mm deep AND <= 7mm wide",
            name : "T1a1"
          }, {
            description : ">3mm AND <=5mm deep, AND <=7mm wide",
            name : "T1a2"
          }, {
            description : "Clincially visible lesion <= 4 cm",
            name : "T1b1"
          }, {
            description : "Clinically visible lesion > 4cm",
            name : "T1b2"
          }, {
            description : "Clinically visible lesion <= 4cm, invades beyond uterus",
            name : "T2a1"
          }, {
            description : "Clinically visible lesion > 4cm, invades beyond uterus",
            name : "T2a2"
          }, {
            description : "Parametrial invasion",
            name : "T2b"
          }, {
            description : "Extends to lower third of vagina ",
            name : "T3a"
          }, {
            description : "Extends to pelvic wall OR hydronephrosis OR nonfunctioning kidney ",
            name : "T3b"
          }, {
            description : "Invades mucosa of bladder, rectum or beyond true pelvis",
            name : "T4"
          } ],
          name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            name : "N0"
          }, {
            description : "Isolated tumor cells, <=0.2mm",
            name : "N0(i+)"
          }, {
            description : "positive nodes",
            name : "N1"
          } ],
          name : "Category (pN)"
        }, {
          group : [ {
            description : "metastases",
            name : "M1"
          }, {
            name : "M (not applicable)"
          }, {
            name : "distant metastasis not applicable"
          } ],
          name : ""
        } ]
   
    }, {
        name : "Stage FIGO (2015)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "Measured invasion of stroma ≤3 mm in depth and ≤7 mm width",
            name : "FIGO IA1"
          }, {
            description : "Measured invasion of stroma >3 mm and <5 mm in depth and ≤7 mm width",
            name : "FIGO IA2"
          }, {
            description : "Clinical lesions confined to the cervix, or preclinical lesions greater than stage IA, Clinical lesions ≤4 cm in size",
            name : "FIGO IB1"
          }, {
            description : "Clinical lesions confined to the cervix, or preclinical lesions greater than stage IA, Clinical lesions >4cm in size",
            name : "FIGO IB2"
          }, {
            description : "Involvement of up to the upper two-thirds of the vagina. No obvious parametrial involvement. Clinically visible lesion ≤4 cm",
            name : "FIGO IIA1"
          }, {
            description : "Involvement of up to the upper two-thirds of the vagina. No obvious parametrial involvement. Clinically visible lesion >4 cm",
            name : "FIGO IIA2"
          }, {
            description : "Obvious parametrial involvement but not onto the pelvic sidewall",
            name : "FIGO IIB"
          }, {
            description : "Involvement of the lower third of the vagina but no extension onto pelvic sidewall",
            name : "FIGO IIIA"
          }, {
            description : "Extension onto the pelvic sidewall, and/or causing hydronephrosis/nonfunctioning kidney",
            name : "FIGO IIIB"
          }, {
            description : "Spread to adjacent pelvic organs, ie, tumor invading the mucosa of the bladder and/or rectum and/or extending beyond the true pelvis (bullous edema is not sufficient)",
            name : "FIGO IVA"
          }, {
            description : "Spread to distant organs",
            name : "FIGO IVB"
          }, {
            description : "",
            name : "Not applicable"
          } ],
          name : ""
        } ]
          } ]
      }, {
      most_common : false,
      name : "Cervix, LEEP",
      optional : true,
      organ_group : "Gynecologic",
      properties : [  {
        name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Cold knife cone"
          }, {
            name : "LEEP"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor size",
       optional_state  : "required", "options" : [ {
          name : ""
        } ]
      }, {
        name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Left superior"
          }, {
            name : "Left inferior"
          }, {
            name : "Right superior"
          }, {
            name : "Right inferior"
          } ],
          name : ""
        } ]
      }, {
        name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Squamous cell carcinoma"
          }, {
            name : "Squamous cell carcinoma, keratinizing"
          }, {
            name : "Squamous cell carcinoma, nonkeratinizing"
          }, {
            name : "Squamous cell carcinoma, basaloid"
          }, {
            name : "Squamous cell carcinoma, verrucous"
          }, {
            name : "Squamous cell carcinoma, warty"
          }, {
            name : "Squamous cell carcinoma, papillary"
          }, {
            name : "Squamous cell carcinoma, lymphoepithelioma-like"
          }, {
            name : "Squamous cell carcinoma, squamotransitional"
          }, {
             description : "cervical HPV ISH+, p16+, CEA+, p53 wild type, ER-/wk, Vim -/wk vs endometrial HPV ISH-, p16-/wk, CEA -/wk, p53 abnormal/-, ER-/+, Vim -/wk",
            name : "Endocervical adenocarcinoma"
          }, {
            
            name : "Endocervical adenocarcinoma, usual type"
          }, {
            name : "Mucinous carcinoma, NOS"
          }, {
            name : "Mucinous carcinoma, intestinal type"
          }, {
            name : "Mucinous carcinoma, signet-ring cell type"
          }, {
            name : "Mucinous carcinoma, gastric type"
          }, {
            name : "Villoglandular carcinoma"
          }, {
            name : "Endometrioid carcinoma"
          }, {
            name : "Clear cell carcinoma"
          }, {
            name : "Serous carcinoma"
          }, {
            name : "Mesonephric carcinoma"
          }, {
            name : "Adenocarcinoma admixed with neuroendocrine carcinoma"
          }, {
            name : "Adenosquamous carcinoma"
          }, {
            name : "Adenosquamous carcinoma, glassy cell variant"
          }, {
            name : "Adenoid cystic carcinoma"
          }, {
            name : "Adenoid basal carcinoma"
          }, {
            name : "Small cell carcinoma"
          }, {
            name : "Large cell neuroendocrine carcinoma"
          } ],
          name : ""
        } ]
      }, {
        name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Grade 1/3, Well differentiated"
          }, {
            name : "Grade 2/3, Moderately differentiated"
          }, {
            name : "Grade 3/3, Poorly differentiated"
          } ],
          name : ""
        } ]
      }, {
        description : "depth and width in mm",
        name : "Cervical stromal invasion",
       optional_state  : "required", "options" : [ {
          description : "depth and width in mm",
          name : ""
        } ]
      }, {
        description : "include distance/location of closest margin, endocervical, exctocervical and deep",
        name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            name : "Positive"
          }],
          name : ""
        } ]
      }, {
        name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Indeterminate"
          }, {
            name : "Suspicious"
          }, {
            name : "Present"
          }, {
            name : "Present, extensive"
          } ],
          name : ""
        } ]
      } ]
    }, {
      most_common : true,
       description : "including small cell carcinoma",
      name : "Colon",
      optional : false,
      organ_group : "Gastrointestinal",
      properties : [  {
        name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Right hemicolectomy"
          }, {
            name : "Transverse colectomy"
          }, {
            name : "Left hemicolectomy"
          }, {
            name : "Sigmoidectomy"
          }, {
            name : "Rectosigmoid colectomy"
          }, {
            name : "Rectal/rectosigmoid colon (low anterior resection)"
          }, {
            name : "Total abdominal colectomy"
          }, {
            name : "Abdominoperineal resection"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Cecum"
          }, {
            name : "Right (ascending) colon"
          }, {
            name : "Cecum/Right (ascending) colon"
          }, {
            name : "Hepatic flexure"
          }, {
            name : "Transverse colon"
          }, {
            name : "Splenic flexure"
          }, {
            name : "Left (descending) colon"
          }, {
            name : "Sigmoid colon"
          }, {
            name : "Rectosigmoid"
          }, {
            name : "Rectum"
          }, {
            name : "Ileocecal valve"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor size",
       optional_state  : "required", "options" : [ {
          name : ""
        } ]
      }, {
        name : "Tumor perforation",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Present"
          }, {
            name : "Equivocal"
          } ],
          name : ""
        } ]
      }, {
        name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Adenocarcinoma"
          }, {
            name : "Mucinous carcinoma"
          }, {
            name : "Adenocarcinoma with mucinous features"
          }, {
            name : "Adenocarcinoma with mucinous features and signet ring cells"
          }, {
            name : "Signet-ring cell carcinoma"
          }, {
            name : "Micropapillary carcinoma"
          }, {
            name : "Serrated adenocarcinoma"
          }, {
            name : "Medullary carcinoma"
          }, {
            name : "Large cell neuroendocrine carcinoma"
          }, {
            name : "Small cell neuroendocrine carcinoma"
          }, {
            name : "Squamous cell carcinoma"
          }, {
            name : "Adenosquamous cell carcinoma"
          }, {
            name : "Undifferentiated carcinoma"
          } ],
          name : ""
        } ]
      }, {
        name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Grade 1/4, Well differentiated"
          }, {
            name : "Grade 2/4, Moderately differentiated"
          }, {
            name : "Grade 2-3/4, Moderately to focally poorly differentiated"       
          }, {
            name : "Grade 3/4, Poorly differentiated"
          }, {
            name : "Grade 4/4, , Undifferentiated"
          } ],
          name : ""
        } ]
      }, {
        name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "No invasion of lamina propria"
          }, {
            name : "Intramucosal (invades lamina propria/muscularis mucosa)"
          }, {
            name : "Invades submucosa"
          }, {
            name : "Invades muscularis propria"
          }, {
            name : "Invades pericolonic/rectal adipose tissue"
          }, {
            name : "Invades pericolonic adipose tissue"
          }, {
            name : "Invades perirectal adipose tissue"
          }, {
             description : "T4a",
            name : "Penetrates serosa"
          }, {
             description : "T4b",
             inputs_required : [ "" ],
            name : "Adherent to other organs"
          }, {
             description : "T4b",
            name : "Invades omentum"
          }, {
             description : "T4b, specify",
             inputs_required : [ "" ],
            name : "Invades other organs"
          } ],
          name : ""
        } ]
      }, {
        description : "include distance/location of closest proximal/distal/radial margin",
        name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            name : "Positive"
          } ],
          name : ""
        } ]
      }, {
        name : "Treatment effect, primary site",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "No prior treatment"
          }, {
            name : "Present (score 1 or 2)"
          }, {
            name : "No response (score 3)"
          }, {
            name : "indeterminate"
          }, {
            name : "Not known"
          }  ],
          name : ""
        } ]
      }, {
        name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Indeterminate"
          }, {
            name : "Suspicious"
          }, {
            name : "Present"
          }, {
            name : "Present, extensive"
          } ],
          name : ""
        } ]
      }, {
        name : "Perineural invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Present"
          }, {
            name : "Equivocal"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor deposits",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            description : "#",
            inputs_required : [ "" ],
            name : "Present"
          }, {
            name : "Equivocal"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            name : ""
          }, {
            description : "pathologic",
            name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            name : "m"
          }, {
            description : "recurrent",
            name : "r"
          }, {
            description : "post-treatment",
            name : "y"
          }, {
            name : "mp"
          }, {
            name : "rp"
          }, {
            name : "yp"
          }, {
            name : "mrp"
          }, {
            name : "myp"
          }, {
            name : "ryp"
          }, {
            name : "mryp"
          } ],
          name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            name : "TX"
          }, {
            description : "No tumor",
            name : "T0"
          }, {
            description : "in situ or invasion of lamina propria or muscularis mucosa",
            name : "Tis"
          }, {
            description : "invades submucosa",
            name : "T1"
          }, {
            description : "Invades muscularis propria",
            name : "T2"
          }, {
            description : "Invades pericolonc adipose tissue",
            name : "T3"
          }, {
            description : "Penetrates serosa",
            name : "T4a"
          }, {
            description : "adherent or invades adjacent organs",
            name : "T4b"
          } ],
          name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            name : "NX"
          }, {
            description : "No regional lymph node metastasis or <0.2mm",
            name : "N0"
          }, {
            description : "IHC+(i+) OR lymph node metastasis <0.2mm",
            name : "N0 (see lymph nodes above)"
          }, {
            description : "1 positive nodes, >0.2mm",
            name : "N1a"
          }, {
            description : "2-3 postive nodes, >0.2mm",
            name : "N1b"
          }, {
            description : "Tumor deposits only",
            name : "N1c"
          }, {
            description : "4-6 positive nodes",
            name : "N2a"
          }, {
            description : ">=7 positive nodes",
            name : "N2b"
          } ],
          name : "Category (pN)"
        }, {
          group : [ {
            description : "Distant metastases, one site, no peritoneal metastases",
            name : "M1a"
          }, {
                description : "Distant metastases two sites, no peritoneal metastases",
            name : "M1b"
          }, {
                description : "Distant metastases to peritoneal surface",
            name : "M1c"
          }, {
            name : "M (not applicable)"
          }, {
            name : "distant metastasis not applicable"
          } ],
          name : ""
        } ]
      },  {
         description : "Perform for adenocarcinoma, NOT small cell carcinoma, per Dr Ucar",
        name : "MSI IHC and Interpretation",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Pending, addendum to follow"
          },{
             description : "tell the secretary to pick this and copy the answer in a separate note",
            name : " see Note."
          },{
             description : "A.",
            name : " MLH1+, MSH2+, MSH6+, PMS2+. Intact nuclear expression of MMR protein, low probability of microsatellite instability-high (MSI-H).  There are exceptions to the above IHC interpretations. These results should not be considered in isolation, and clinical correlation with genetic counseling is recommended to assess the need for germline testing."
          }, {
             description : "B.",
            name : "MLH1-, MSH2+, MSH6+, PMS2-. Loss of nuclear expression of MLH1 and PMS2: deficient mismatch repair/ high probability of microsatellite instability-high (MSI-H). Testing for methylation of the MLH1 promoter is indicated (the presence of MLH1 methylation suggests that the tumor is sporadic and germline evaluation is probably not indicated; absence of MLH1 methylation suggests the possibility of Lynch syndrome, and sequencing and/or large deletion/duplication testing of germline MLH1 is indicated). There are exceptions to the above IHC interpretations. These results should not be considered in isolation, and clinical correlation with genetic counseling is recommended to assess the need for germline testing."
          }, {
             description : "C.",
            name : "MLH1+, MSH2-, MSH6-, PMS2+. Loss of nuclear expression of MSH2 and MSH6: deficient mismatch repair/ high probability of microsatellite instability-high (MSI-H). High probability of Lynch syndrome (sequencing and or large deletion/duplication testing of germline MSH2 may be indicated, and, if negative, sequencing and or large deletion/duplication testing of germline MSH6 may be indicated). There are exceptions to the above IHC interpretations.   These results should not be considered in isolation, and clinical correlation with genetic counseling is recommended to assess the need for germline testing."
          }, {
             description : "D.",
            name : "MLH1+, MSH2+, MSH6-, PMS2+. Loss of nuclear expression of MSH6 only: deficient mismatch repair/ high probability of microsatellite instability-high (MSI-H). High probability of Lynch syndrome (sequencing and or large deletion/duplication testing of germline MSH6 may be indicated). There are exceptions to the above IHC interpretations.   These results should not be considered in isolation, and clinical correlation with genetic counseling is recommended to assess the need for germline testing."
          }, {
             description : "E.",
            name : "MLH1+, MSH2+, MSH6+, PMS2-. Loss of nuclear expression of PMS2 only: deficient mismatch repair/ high probability of microsatellite instability-high (MSI-H). High probability of Lynch syndrome (sequencing and or large deletion/duplication testing of germline PMS2 may be indicated). There are exceptions to the above IHC interpretations.   These results should not be considered in isolation, and clinical correlation with genetic counseling is recommended to assess the need for germline testing."
          } , {
            description : "case #",
            inputs_required : [ "" ],
            name : "See case "
          }],
          name : ""
        } ]
     }, {
        name : "Ancillary studies ordered",
       optional_state  : "required", "options" : [ {
          group : [ {
             description : "T1-3N0",
            name : "PIK3CA"
          },{
             description : "T1-3N0 AND loss of MLH1 and PMS2",
            name : "PIK3CA and MLH1 promoter methylation"
          }, {
             description : "T4 or N1",
            name : "PIK3CA, K-RAS extended panel, N-RAS, and BRAF"
          }, {
             description : "T4 or N1 AND loss of MLH1 and PMS2",
            name : "PIK3CA, K-RAS extended panel, N-RAS, BRAF, and MLH1 promoter methylation"
          }, {
            name : "Pending results of MMR protein panel"
          }, {
            name : "None"
          }, {
            name : "Not applicable"
          }, {
            inputs_required : [ "" ],
            name : "See case"
          } ],
          name : ""
        } ]
      }, {
        description : "Add billing code G8721",
        name : "ICD10",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "C18.9"
          } ],
          name : ""
        } ]
      } ]
    }, {
      most_common : false,
      description : "Do NOT use for small cell, use regular colon",
      name : "Colon neuroendocrine tumor, excluding small cell",
      optional : false,
      organ_group : "Endocrine",
      properties : [  {
        name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Right hemicolectomy"
          }, {
            name : "Transverse hemicolectomy"
          }, {
            name : "Left hemicoloectomy"
          }, {
            name : "Sigmoidectomy"
          }, {
            name : "Rectal/rectosigmoid colon (low anterior resection)"
          }, {
            name : "Total abdominal colectomy"
          }, {
            name : "Abdominoperineal resection"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Cecum"
          }, {
            name : "Right (ascending) colon"
          }, {
            name : "Cecum/Right (ascending) colon"
          }, {
            name : "Hepatic flexure"
          }, {
            name : "Transverse colon"
          }, {
            name : "Splenic flexure"
          }, {
            name : "Left (descending) colon"
          }, {
            name : "Sigmoid colon"
          }, {
            name : "Rectosigmoid"
          }, {
            name : "Rectum"
          }, {
            name : "Ileocecal valve"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor size",
       optional_state  : "required", "options" : [ {
          name : ""
        } ]
      }, {
        name : "Tumor focality",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Single focus of tumor"
          }, {
            name : "Multiple foci of tumor"
          } ],
          name : ""
        } ]
      }, {
        description : "not for small cell, use other colon protocol ",
        name : "Type and Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
               description : "< 2mitoses/10 hpf and/or Ki67<3% ",	
            name : "Grade 1/3, Well-differentiated neuroendocrine tumor"
          }, {
           description : ">= 2 AND < 20 mitoses/10 hpf and/or Ki67 >=3 AND <20% ",	
            name : "Grade 2/3, Well-differentiated neuroendocrine tumor"
          }, {
               description : "> 20 mitoses/10 hpf and/or Ki67 >20% ",	
            name : "Grade 3/3, Well-differentiated neuroendocrine tumor"
          } ],
          name : ""
        } ]
      }, {
           description : "mitoses/ 2 mm squared NOT 10 hpf, approximately count 42 hpf and divide by 5", 
        name : "Mitotic rate",
       optional_state  : "required", "options" : [ {
          group : [ {
            
            name : "Less than 2 / 2mm squared"
          }, {
          
            name : "at least 2 and less than 20 /2 mm squared"
          }, {
            
            name : "More than 20 per 2 mm squared"
          } ],
          name : ""
        } ]  
        
      }, {
        name : "Ki67 (Mib1)",
       optional_state  : "required", "options" : [ {
          group : [ {
            
            name : "Less than 3%"
          }, {
          
            name : "at least 3% and less than 20%"
          }, {
            
            name : "More than 20%"
          } ],
          name : ""
        } ]  
        
      }, {
        name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Invades lamina propria"
          }, {
            name : "Invades muscularis mucosa"
          }, {
            name : "Invades submucosa"
          }, {
            name : "Invades muscularis propria"
          }, {
            name : "Invades pericolonic/rectal adipose tissue"
          }, {
            name : "Invades pericolonic adipose tissue"
          }, {
            name : "Invades perirectal adipose tissue"
          }, {
            name : "Penetrates serosa"
          }, {
            name : "Adherent to other organs"
          }, {
            name : "Invades other organs"
          } ],
          name : ""
        } ]
      }, {
        description : "include distance/location of closest proximal/distal/radial margin",
        name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            name : "Positive"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Indeterminate"
          }, {
            name : "Suspicious"
          }, {
            name : "Present"
          }, {
            name : "Present, extensive"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            name : ""
          }, {
            description : "pathologic",
            name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            name : "m"
          }, {
            description : "recurrent",
            name : "r"
          }, {
            description : "post-treatment",
            name : "y"
          }, {
            name : "mp"
          }, {
            name : "rp"
          }, {
            name : "yp"
          }, {
            name : "mrp"
          }, {
            name : "myp"
          }, {
            name : "ryp"
          }, {
            name : "mryp"
          } ],
          name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            name : "TX"
          }, {
            description : "No tumor",
            name : "T0"
          }, {
            description : "<= 1cm",
            name : "T1a"
          }, {
            description : "> 1cm AND <= 2cm",
            name : "T1b"
          }, {
            description : "> 2 cm OR invades muscularis propria",
            name : "T2"
          }, {
            description : "Invades pericolonic/rectal adipose tissue",
            name : "T3"
          }, {
            description : "Penetrates serosa or other organs",
            name : "T4"
          } ],
          name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            name : "N0"
          }, {
            description : "Positive nodes",
            name : "N1"
          } ],
          name : "Category (pN)"
        }, {
          group : [ {
            description : "Distant metastases liver",
            name : "M1a"
          }, {
               description : "Distant metastases other than liver",
            name : "M1b"
          }, {
               description : "Distant metastases liver and other",
            name : "M1c)"
          }, {
            name : "M (not applicable)"
          }, {
            name : "distant metastasis not applicable"
          } ],
          name : ""
        } ]
      }, {
         description : "add billing code G8721",
        name : "ICD10",
       optional_state  : "required", "options" : [ {
          group : [ {
  
            name : "153.9"
          } ],
          name : ""
        } ]
      } ]
    }, {
      most_common : false,
      name : "Distal Bile Ducts",
      optional : false,
      organ_group : "Gastrointestinal",
      properties : [ {
        name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Pancreaticoduodenectomy (Whipple)"
          }, {
            name : "Segmental resection of bile duct(s)"
          }, {
            name : "Choledochal cyst resection "
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Common bile duct"
          }, {
            name : "Extrapancreatic Common bile duct "
          } , {
            name : "Intrapancreatic Common bile duct "
          }],
          name : ""
        } ]
      }, {
        name : "Tumor size",
       optional_state  : "required", "options" : [ {
          name : ""
        } ]
      }, {
        name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Adenocarcinoma"
          }, {
            name : "Adenocarcinoma, intestinal type"
          }, {
            name : "Adenocarcinoma, biliary type"
          }, {
            name : "Adenocarcinoma, gastric foveolar type"
          }, {
            name : "Intraductal papillary neoplasm with an associated invasive carcinoma"
          }, {
            name : "Mucinous cystic neoplasm with an associated invasive carcinoma"
          }, {
            name : "Mucinous adenocarcinoma"
          }, {
            name : "Clear cell adenocarcinoma"
          }, {
            name : "Signet-ring cell carcinoma"
          }, {
            name : "Adenosquamous carcinoma"
          }, {
            name : "Squamous cell carcinoma"
          }, {
            name : "Undifferentiated carcinoma"
          }, {
            name : "Mixed adenoneuroendocrine carcinoma"
          }, {
            name : "Large cell neuroendocrine carcinoma"
          }, {
            name : "Small cell neuroendocrine carcinoma"
          } ],
          name : ""
        } ]
      }, {
        name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Grade 1/3, Well differentiated"
          }, {
            name : "Grade 2/3, Moderately differentiated"
          }, {
            name : "Grade 3/3, Poorly differentiated"
          } ],
          name : ""
        } ]
      }, {
        name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "No invasion (carcinoma in situ) "
          }, {
            name : "Limited to the bile duct"
          }, {
            name : "Invades beyond the wall of the bile duct"
          }, {
            name : "Invades the duodenum "
          }, {
            name : "Invades the pancreas"
          }, {
            name : "Invades the gallbladder"
          }, {
            description : "location",
            inputs_required : [ "" ],
            name : "Invades other adjacent structures"
          } ],
          name : ""
        } ]
      }, {
        name : "Depth of invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "No invasion"
          }, {
            name : "Invades less than 5 mm"
          }, {
            name : "Invades at least 5 mm and no more than 12 mm"
          }, {
            name : "Invades more than 12 mm"
          } ],
          name : ""
        } ]
      }, {
        description : "include distance/location of closest proximal bile duct/distal bile duct /radial soft tissue margin, pancreatic neck, uncinate",
        name : "Margins invasive tumor",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            name : "Positive"
          } ],
          name : ""
        } ]
      }, {
        description : "include distance/location of closest proximal bile duct/distal bile duct /radial soft tissue margin, pancreatic neck, uncinate",
        name : "Margins in situ/high grade dysplasia",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            name : "Positive"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Indeterminate"
          }, {
            name : "Suspicious"
          }, {
            name : "Present"
          }, {
            name : "Present, extensive"
          } ],
          name : ""
        } ]
      }, {
        name : "Perineural invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Present"
          }, {
            name : "Equivocal"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            name : ""
          }, {
            description : "pathologic",
            name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            name : "m"
          }, {
            description : "recurrent",
            name : "r"
          }, {
            description : "post-treatment",
            name : "y"
          }, {
            name : "mp"
          }, {
            name : "rp"
          }, {
            name : "yp"
          }, {
            name : "mrp"
          }, {
            name : "myp"
          }, {
            name : "ryp"
          }, {
            name : "mryp"
          } ],
          name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            name : "TX"
          }, {
            description : "Carcinoma in situ",
            name : "Tis"
          }, {
            description : "Invades bile duct with depth < 5mm ",
            name : "T1"
          }, {
            description : "Invades bile duct to depth of >= 5 mm and <=12 mm ",
            name : "T2"
          }, {
            description : "Invades bile duct to depth of >12 mm ",
            name : "T3"
          }, {
            description : "Involves the celiac axis or the superior mesenteric artery",
            name : "T4"
          } ],
          name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            name : "N0"
          }, {
            description : "1-3 positive nodes",
            name : "N1"
          }, {
            description : " 4 or more positive nodes",
            name : "N2"
          } ],
          name : "Category (pN)"
        }, {
          group : [ {
            description : "Distant metastases",
            name : "M1"
          }, {
            name : "M (not applicable)"
          }, {
            name : "distant metastasis not applicable"
          } ],
          name : ""
        } ]
        }, {
          description: "adenocarcinoma only",
        name : "MSI IHC and Interpretation",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Intact nuclear expression of MMR proteins (MLH1, MSH2, MSH6, PMS2): No evidence of deficient mismatch repair (low probability of MSI-H)"
          },{
            name : "Loss of nuclear expression of one or more MMR proteins (MLH1, MSH2, MSH6, PMS2): deficient mismatch repair/ high probability of microsatellite instability-high (MSI-H). The presence of MSI-H/deficient mismatch repair may also be an indication for additional testing for Lynch syndrome and genetic counselling."
          }, {
            name : "Pending"
          }, {
            name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            name : "See case "
          }],
          name : ""
        } ]
      } ]
    }, {
      most_common : false,
      name : "DNA Mismatch Repair",
      optional : false,
      organ_group : "Other-Biomarkers",
      properties : [  {
        name : "MLH1 Immunohistochemistry",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Pending, addendum to follow"
          }, {
            name : "Intact nuclear expression"
          }, {
            name : "Loss of  nuclear expression"
          }, {
            name : "Equivocal"
          } , {
            name : "Not applicable"
          }],
          name : ""
        } ]
      }, {
        name : "MSH2 Immunohistochemistry",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Pending, addendum to follow"
          },{
            name : "Intact nuclear expression"
          }, {
            name : "Loss of  nuclear expression"
          }, {
            name : "Equivocal"
          } , {
            name : "Not applicable"
          }],
          name : ""
        } ]
      }, {
        name : "MSH6 Immunohistochemistry",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Pending, addendum to follow"
          },{
            name : "Intact nuclear expression"
          }, {
            name : "Loss of  nuclear expression"
          }, {
            name : "Equivocal"
          } , {
            name : "Not applicable"
          }],
          name : ""
        } ]
      }, {
        name : "PMS2 Immunohistochemistry",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Pending, addendum to follow"
          },{
            name : "Intact nuclear expression"
          }, {
            name : "Loss of  nuclear expression"
          }, {
            name : "Equivocal"
          } , {
            name : "Not applicable"
          }],
          name : ""
        } ]
      }, {
        name : "MSI IHC and Interpretation",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Intact nuclear expression of MMR proteins (MLH1, MSH2, MSH6, PMS2): No evidence of deficient mismatch repair (low probability of MSI-H)"
          },{
            name : "Loss of nuclear expression of one or more MMR proteins (MLH1, MSH2, MSH6, PMS2): deficient mismatch repair/ high probability of microsatellite instability-high (MSI-H). The presence of MSI-H/deficient mismatch repair may also be an indication for additional testing for Lynch syndrome and genetic counselling."
          }],
          name : ""
        } ]
  
      } ]    
   
    
      
    }, {
      most_common : false,
      name : "Duodenum/Ampulla of Vater neuroendocrine tumor",
      optional : false,
      organ_group : "Endocrine",
      properties : [  {
        name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Ampullectomy"
          }, {
            name : "Endoscopic or local resection"
          }, {
            name : "Duodenum, segmental resection"
          }, {
            name : "Pancreaticoduodenectomy (Whipple resection)"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Duodenum"
          }, {
            name : "Ampulla "
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor size",
       optional_state  : "required", "options" : [ {
          name : ""
        } ]
      }, {
        name : "Tumor Focality ",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Single focus"
          }, {
            name : "Multiple foci"
          }, {
            name : "Equivocal"
          } ],
          name : ""
        } ]
      }, {
        description : "not for small cell, use other colon protocol ",
        name : "Type and Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
             description : "< 2mitoses/10 hpf and/or Ki67<3% ",  
            name : "Grade 1/3, Well-differentiated neuroendocrine tumor"
          }, {
           description : ">= 2 AND < 20 mitoses/10 hpf and/or Ki67 >=3 AND <20% ", 
            name : "Grade 2/3, Well-differentiated neuroendocrine tumor"
          }, {
             description : "> 20 mitoses/10 hpf and/or Ki67 >20% ",  
            name : "Grade 3/3, Well-differentiated neuroendocrine tumor"
          } ],
          name : ""
        } ]
      }, {
           description : "mitoses/ 2 mm squared NOT 10 hpf, approximately count 42 hpf and divide by 5", 
        name : "Mitotic rate",
       optional_state  : "required", "options" : [ {
          group : [ {
            
            name : "Less than 2/ 2mm squared"
          }, {
          
            name : "at least 2 and less than 20 /2 mm squared"
          }, {
            
            name : "More than 20 per 2 mm squared"
          } ],
          name : ""
        } ]  
        
      }, {
        name : "Ki67 (Mib1)",
       optional_state  : "required", "options" : [ {
          group : [ {
            
            name : "Less than 3%"
          }, {
          
            name : "at least 3% and less than 20%"
          }, {
            
            name : "More than 20%"
          } ],
          name : ""
        } ]  
        
      }, {
        name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "No evidence of primary tumor"
          }, {
            description : "DUODENUM",
            name : "Invades mucosa/lamina propria"
          }, {
            description : "DUODENUM",
            name : "Invades submucosa"
          }, {
            description : "DUODENUM",
            name : "Invades muscularis propria"
          }, {
            description : "DUODENUM",
            name : "Invades pancreas"
          }, {
            description : "DUODENUM",
            name : "Tumor invades peripancreatic tissue"
          }, {
            description : "DUODENUM",
            name : "Tumor penetrates serosa (visceral peritoneum) "
          }, {
            description : "DUODENUM",
            inputs_required : [ "" ],
            name : "Tumor directly invades adjacent structures "
          }, {
            description : "AMPULLA ",
            name : "Tumor limited to ampulla of Vater or sphincter of Oddi "
          }, {
            description : "AMPULLA ",
            name : "Tumor invades duodenal submucosa"
          }, {
            description : "AMPULLA ",
            name : "Tumor invades duodenal muscularis propria"
          }, {
            description : "AMPULLA ",
            name : "Tumor invades pancreas "
          }, {
            description : "AMPULLA ",
            name : "Tumor invades peripancreatic soft tissues  "
          }, {
            description : "AMPULLA ",
            name : "Tumor penetrates serosa"
          }, {
            description : "AMPULLA",
            inputs_required : [ "" ],
            name : "Tumor directly invades adjacent structures "
          } ],
          name : ""
        } ]
      }, {
        description : "include distance/location of closest proximal/distal/radial/bile duct/uncinate, pancreatic neck margin",
        name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            name : "Positive"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Indeterminate"
          }, {
            name : "Suspicious"
          }, {
            name : "Present"
          }, {
            name : "Present, extensive"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            name : ""
          }, {
            description : "pathologic",
            name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            name : "m"
          }, {
            description : "recurrent",
            name : "r"
          }, {
            description : "post-treatment",
            name : "y"
          }, {
            name : "mp"
          }, {
            name : "rp"
          }, {
            name : "yp"
          }, {
            name : "mrp"
          }, {
            name : "myp"
          }, {
            name : "ryp"
          }, {
            name : "mryp"
          } ],
          name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            name : "TX"
          }, {
            description : "No tumor",
            name : "T0"
          }, {
            description : "Tumor invades lamina propria or submucosa and size 1 cm or less (small intestinal tumors); tumor 1 cm or less and confiend to sphincter of Oddi (ampullary tumors) ",
            name : "T1"
          }, {
            description : "Tumor invades muscularis propria or tumor size >1 cm (small intestinal tumors); tumor size >1 cm or invades sphincter of Oddi (ampullary tumors)",
            name : "T2"
          }, {
            description : "Tumor  invades pancreas or peripacnreatic adipose tissues",
            name : "T3"
          }, {
            description : "Tumor penetrates visceral peritoneum (serosa) or invades other organs ",
            name : "T4"
          } ],
          name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            name : "N0"
          }, {
            description : "Metastases to regional lymph nodes",
            name : "N1"
          } ],
          name : "Category (pN)"
        }, {
          group : [ {
            description : "Distant metastases liver",
            name : "M1a"
          }, {
               description : "Distant metastases all others",
            name : "M1b"
          }, {
               description : "Distant metastases liver and others",
            name : "M1c"
          }, {
            name : "M (not applicable)"
          }, {
            name : "distant metastasis not applicable"
          } ],
          name : ""
        } ]
      } ]
      
     }, {
      most_common : false,
      name : "Endometrium",
      optional : false,
      organ_group : "Gynecologic",
      properties : [  {
        name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Simple hysterectomy"
          }, {
            name : "Radical hysterectomy"
          }, {
            name : "Supracervical hysterectomy"
          }, {
            name : "Simple hysterectomy and bilateral salpingo-oophorectomy"
          }, {
            name : "Radical hysterectomy and bilateral salpingo-oophorectomy"
          } ],
          name : ""
        } ]
      }, {
        name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "WT1-, p53 -/focal+, ER +, Pax8+ p16-, HPV ISH- or cervical HPV ISH+, p16+, CEA+, p53 wild type, ER-/wk, Vim -/wk vs endometrial HPV ISH-, p16-/wk, CEA -/wk, p53 abnormal/-, ER-/+, Vim -/wk",
            name : "Endometrioid adenocarcinoma"
          }, {
            name : "Endometrioid adenocarcinoma with squamous differentiation"
          }, {
            name : "Endometrioid adenocarcinoma, villoglandular variant"
          }, {
            name : "Endometrioid adenocarcinoma with secretory differentiation"
          }, {
            name : "Mucinous adenocarcinoma"
          }, {
            description : "NapsinA+, HNF-1b +, Pax8+",
            name : "Clear cell adenocarcinoma"
          }, {
            description : "WT1-, p53 + or completely -, ER variable, Pax8+, p16+, HPV-",
            name : "Serous endometrial intraepithelial carcinoma"
          }, {
            description : "WT1-, p53 + or completely -, ER variable, Pax8+, p16+, HPV-",
            name : "Serous carcinoma"
          }, {
            name : "Small cell carcinoma"
          }, {
            name : "Large cell neuroendocrine carcinoma"
          }, {
            name : "Carcinosarcoma (MMMT)"
          } ],
          name : ""
        } ]
      }, {
        name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "endometrioid and mucinous, <5% solid, small nuclei",
            name : "FIGO grade 1/3"
          }, {
            description : "endometrioid and mucinous, 5-50% solid, small nuclei OR <5% solid, big nuclei",
            name : "FIGO grade 2/3"
          }, {
            description : "endometrioid and mucinous, >50% solid, small nuclei OR 5-50% solid, big nuclei",
            name : "FIGO grade 3/3"
          }, {
            description : "for serous, clear cell carcinoma",
            name : "High grade"
          }, {
            description : "MMMT",
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor size",
       optional_state  : "required", "options" : [ {
          name : ""
        } ]
      }, {
        name : "Myometrial invasion (depth)",
       optional_state  : "required", "options" : [ {
          name : ""
        } ]
      }, {
        name : "Myometrial thickness",
       optional_state  : "required", "options" : [ {
          name : ""
        } ]
      }, {
        name : "Myometrial invasion (%)",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Limited to endometrium"
          }, {
            name : "Less than or equal to 50%"
          }, {
            name : "Greater than 50%"
          }, {
            name : "Indeterminate"
          } ],
          name : ""
        } ]
      }, {
        name : "Uterine serosal involvement",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Present"
          }, {
            name : "Indeterminate"
          } ],
          name : ""
        } ]
      }, {
        name : "Cervix involvement",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Cervical surface involvement only without stromal invasion"
          }, {
            name : "Cervical stromal invasion limited to inner 50% of cervix thickness"
          }, {
            name : "Cervical stromal invasion of outer 50% of cervix thickness"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {  description : "includes R/L parametrium, ovary, fallopian tube, vagina, pelvic wall, bladder wall, bladder mucosa, rectal wall, bowel mucosa, omentum",
        name : "Other tissue(s) involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Indeterminate"
          }, {
            name : "Suspicious"
          }, {
            name : "Present"
          }, {
            name : "Present, extensive"
          } ],
          name : ""
        } ]
      }, {
    
        name : "Lymph nodes, pelvic, # sentinel",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
            description : "includes pelvic, parametrial, obturator, internal iliac (hypogastric), external iliac, common iliac, sacral, and presacral",
        name : "Lymph nodes, pelvic, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Pelvic lymph node laterality",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Right"
          }, {
            name : "Left"
          }, {
            name : "Bilateral"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
       
        name : "Lymph nodes, pelvic, # w/ mets > 2mm",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
      
        name : "Lymph nodes, pelvic, # w/ mets >0.2mm, <= 2mm",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        description : "<= 0.2mm",
        name : "Lymph nodes, pelvic, # w/ isolated tumor cells",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
       
        name : "Lymph nodes, paraaortic, # sentinel",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, paraaortic, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Paraaortic lymph node laterality",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Right"
          }, {
            name : "Left"
          }, {
            name : "Bilateral"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
      
        name : "Lymph nodes, paraaortic, # w/ mets > 2mm",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
       
        name : "Lymph nodes, paraaortic, # w/ mets >0.2mm, <= 2mm",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        description : "<= 0.2mm",
        name : "Lymph nodes, paraaortic, # w/ isolated tumor cells",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            name : ""
          }, {
            description : "preliminary/pathologic",
            name : "AJCC p"
          }, {
            description : "multiple foci of invasive carcinoma",
            name : "AJCC m"
          }, {
            description : "recurrent",
            name : "AJCC r"
          }, {
            description : "post-treatment",
            name : "AJCC y"
          }, {
            name : "AJCC mp"
          }, {
            name : "AJCC rp"
          }, {
            name : "AJCC yp"
          }, {
            name : "AJCC mrp"
          }, {
            name : "AJCC myp"
          }, {
            name : "AJCC ryp"
          }, {
            name : "AJCC mryp"
          } ],
          name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            name : "TX"
          }, {
            description : "Limited to endometrium or invades <50% of myometrium",
            name : "T1a"
          }, {
            description : ">= 50% myometrial invasion",
            name : "T1b"
          }, {
            description : "Invades stroma of cervix",
            name : "T2"
          }, {
            description : "Penetrates serosa OR adnexa ",
            name : "T3a"
          }, {
            description : "Invades vagina OR parametrium ",
            name : "T3b"
          }, {
            description : "Invades mucosa of bladder, rectum",
            name : "T4"
          } ],
          name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            name : "N0"
          }, {
            description : "Positive ITCs (<=0.2mm) any site (pelvic or para-aortic)",
            name : "N0(i+)"
          }, {
            description : "positive pelvic nodes >0.2mm AND <=2mm",
            name : "N1mi"
          }, {
            description : "positive pelvic nodes, > 2mm",
            name : "N1a"
          }, {
            description : "positive para-aortic nodes, >0.2mm AND <=2mm",
            name : "N2mi"
          }, {
            description : "positive para-aortic nodes, >2mm",
            name : "N2a"
          } ],
          name : "Category (pN)"
        }, {
          group : [ {
            description : "metastases",
            name : "M1"
          }, {
            name : "M (not applicable)"
          }, {
            name : "distant metastasis not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Stage (FIGO 2015)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "No or less than half myometrial invasion",
            name : "FIGO IA"
          }, {
            description : "Invasion equal to or more than half of the myometrium",
            name : "FIGO IB"
          }, {
            description : "Tumor invades cervical stroma, but does not extend beyond the uterus",
            name : "FIGO II"
          }, {
            description : "Tumor invades the serosa of the corpus uteri and/or adnexae",
            name : "FIGO IIIA"
          }, {
            description : "Vaginal involvement and/ or parametrial involvement",
            name : "FIGO IIIB"
          }, {
            description : "Positive pelvic nodes",
            name : "FIGO IIIC1"
          }, {
            description : "Positive para-aortic nodes with or without positive pelvic lymph nodes",
            name : "FIGO IIIC2"
          }, {
            description : "Tumor invasion of bladder and/or bowel mucosa",
            name : "FIGO IVA"
          }, {
            description : "Distant metastasis, including intraabdominal metastases and/or inguinal nodes",
            name : "FIGO IVB"
          }, {
            description : "",
            name : "Not applicable"
          } ],
          name : ""
        } ]
      },  {
        description : "ALL women",
        name : "MSI IHC and Interpretation",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Pending, addendum to follow"
          },{
             description : "tell the secretary to pick this and copy the answer in a separate note",
            name : " See note"
          },{
              description : "A.",
            name : " MLH1+, MSH2+, MSH6+, PMS2+. Intact nuclear expression of MMR proteins: low probability of microsatellite instability-high (MSI-H). There are exceptions to the above IHC interpretations. These results should not be considered in isolation, and clinical correlation with genetic counseling is recommended to assess the need for germline testing."
          }, {
              description : "B.",
            name : "MLH1-, MSH2+, MSH6+, PMS2-. Loss of nuclear expression of MLH1 and PMS2: deficient mismatch repair/ high probability of microsatellite instability-high (MSI-H). Testing for methylation of the MLH1 promoter is indicated (the presence of MLH1 methylation suggests that the tumor is sporadic and germline evaluation is probably not indicated; absence of MLH1 methylation suggests the possibility of Lynch syndrome, and sequencing and/or large deletion/duplication testing of germline MLH1 is indicated). There are exceptions to the above IHC interpretations. These results should not be considered in isolation, and clinical correlation with genetic counseling is recommended to assess the need for germline testing."
          }, {
              description : "C.",
            name : "MLH1+, MSH2-, MSH6-, PMS2+. Loss of nuclear expression of MSH2 and MSH6: deficient mismatch repair/ high probability of microsatellite instability-high (MSI-H). High probability of Lynch syndrome (sequencing and/or large deletion/duplication testing of germline MSH2 is indicated, and, if negative, sequencing and/or large deletion/duplication testing of germline MSH6 is indicated. If both are negative, sequencing and/or large deletion/duplication testing of germline EPCAM is indicated.) There are exceptions to the above IHC interpretations. These results should not be considered in isolation, and clinical correlation with genetic counseling is recommended to assess the need for germline testing"
          }, {
              description : "D.",
            name : "MLH1+, MSH2+, MSH6-, PMS2+. Loss of nuclear expression of MSH6 only: deficient mismatch repair/ high probability of microsatellite instability-high (MSI-H). High probability of Lynch syndrome (sequencing and/or large deletion/duplication testing of germline MSH6 is indicated). There are exceptions to the above IHC interpretations. These results should not be considered in isolation, and clinical correlation with genetic counseling is recommended to assess the need for germline testing."
          }, {
              description : "E.",
            name : "MLH1+, MSH2+, MSH6+, PMS2-. Loss of nuclear expression of PMS2 only: deficient mismatch repair/ high probability of microsatellite instability-high (MSI-H). High probability of Lynch syndrome (sequencing and/or large deletion/duplication testing of germline PMS2 is indicated). There are exceptions to the above IHC interpretations. These results should not be considered in isolation, and clinical correlation with genetic counseling is recommended to assess the need for germline testing."
          }, {
            name : "Not applicable"
          } , {
            description : "case #",
            inputs_required : [ "" ],
            name : "See case "
          }],
          name : ""
        } ]
         }, {
        name : "Ancillary studies ordered",
       optional_state  : "required", "options" : [ {
          group : [ {
             description : "loss of MLH1 and PMS2",
            name : "MLH1 promoter methylation"
          }, {
            name : "Pending results of MMR protein panel"
          }, {
            name : "None"
          }, {
            name : "Not applicable"
          }, {
            inputs_required : [ "" ],
            name : "See case"
          } ],
          name : ""
        } ] 
      } ]
    }, {
      most_common : false,
      name : "Esophagus",
      optional : false,
      organ_group : "Gastrointestinal",
      properties : [  {
        name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Endoscopic resection"
          }, {
            name : "Esophagectomy"
          }, {
            name : "Esophagogastrectomy"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Cervical (proximal) esophagus"
          }, {
            name : "Mid esophagus, upper thoracic esophagus"
          }, {
            name : "Mid esophagus, middle thoracic esophagus"
          }, {
            name : "Mid esophagus"
          }, {
            name : "Distal esophagus (lower thoracic esophagus)"
          }, {
            name : "Esophagogastric junction (EGJ)"
          }, {
            name : "Proximal stomach and esophagogastric junction"
          } ],
          name : ""
        } ]
      }, {
        name : "Relationship of Tumor to Esophagogastric Junction ",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Tumor is entirely located within the tubular esophagus and does not involve the esophagogastric junction"
          }, {
            name : "Tumor midpoint lies in the distal esophagus and tumor involves the esophagogastric junction"
          }, {
            name : "Tumor midpoint is located at the esophagogastric junction"
          }, {
            name : "Tumor midpoint lies in the proximal stomach or cardia and tumor involves the esophagogastric junction"
          }, {
            name : "Indeterminate"
          } ],
          name : ""
        } ]
      }, {
        name : "Distance of tumor center from esophagogastric junction ",
       optional_state  : "required", "options" : [ {
         group : [ {
          
            name : "Not applicable"
          }, {
            name : "indeterminate"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor size",
       optional_state  : "required", "options" : [ {
          name : ""
        } ]
      }, {
        name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Adenocarcinoma"
          }, {
            name : "Adenoid cystic carcinoma"
          }, {
            name : "Mucoepidermoid carcinoma"
          }, {
            name : "Mixed adenoneuroendocrine carcinoma "
          }, {
            name : "Undifferentiated carcinoma with glandular component"
          }, {
            name : "Squamous cell carcinoma"
          }, {
            name : "Basaloid squamous cell carcinoma"
          }, {
            name : "Adenosquamous carcinoma"
          }, {
            name : "Spindle cell (squamous) carcinoma"
          }, {
            name : "Verrucous (squamous) carcinoma"
          }, {
            name : "Undifferentiated carcinoma with squamous component"
          }, {
            name : "Undifferentiated carcinoma"
          }, {
            name : "Large cell neuroendocrine carcinoma"
          }, {
            name : "Small cell neuroendocrine carcinoma"
          }, {
            name : "Neuroendocrine carcinoma (poorly differentiated)"
          }, {
            name : "G1: Well-differentiated neuroendocrine tumor"
          }, {
            name : "G2: Well-differentiated neuroendocrine tumor"
          }, {
            name : "G3: Well-differentiated neuroendocrine tumor"
          } ],
          name : ""
        } ]
      }, {
        name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Grade 1/3, Well differentiated"
          }, {
            name : "Grade 2/3, Moderately differentiated"
          }, {
            name : "Grade 3/3, Poorly differentiated, undifferentiated"
          } ],
          name : ""
        } ]
      }, {
        name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "No evidence of primary tumor"
          }, {
            name : "High-grade dysplasia (carcinoma in situ) "
          }, {
            name : "Invades lamina propria"
          }, {
            name : "Invades muscularis mucosae"
          }, {
            name : "Invades submucosa"
          }, {
            name : "Invades muscularis propria"
          }, {
            name : "Invades periesophageal soft tissue (adventitia)"
          }, {
            name : "Penetrates serosa"
          }, {
            description : "which",
            inputs_required : [ "" ],
            name : "Invades adjacent structures "
          } ],
          name : ""
        } ]
      }, {
        description : "include distance/location of closest proximal/distal/radial margin",
        name : "Margins, invasive tumor",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            name : "Positive"
          } ],
          name : ""
        } ]
      }, {
        description : "include distance/location of closest proximal/distal margin",
        name : "Margins, dysplasia/CIS",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            name : "Positive"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Treatment effect, primary site",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "No prior treatment"
          }, {
            name : "Present (score 1 or 2)"
          }, {
            name : "No response (score 3)"
          }, {
            name : "Indeterminate"
          }, {
            name : "Not known"
          }  ],
          name : ""
        } ]
      }, {
        name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Indeterminate"
          }, {
            name : "Suspicious"
          }, {
            name : "Present"
          }, {
            name : "Present, extensive"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            name : ""
          }, {
            description : "pathologic",
            name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            name : "m"
          }, {
            description : "recurrent",
            name : "r"
          }, {
            description : "post-treatment",
            name : "y"
          }, {
            name : "mp"
          }, {
            name : "rp"
          }, {
            name : "yp"
          }, {
            name : "mrp"
          }, {
            name : "myp"
          }, {
            name : "ryp"
          }, {
            name : "mryp"
          } ],
          name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            name : "TX"
          }, {
            description : "No tumor",
            name : "T0"
          }, {
            description : "High-grade dysplasia",
            name : "Tis"
          }, {
            description : "Tumor invades lamina propria, muscularis mucosae, or submucosa",
            name : "T1"
          }, {
            description : "Tumor invades lamina propria or muscularis mucosae",
            name : "T1a"
          }, {
            description : "Tumor invades submucosa",
            name : "T1b"
          }, {
            description : "Tumor invades muscularis propria",
            name : "T2"
          }, {
            description : "Tumor invades adventitia",
            name : "T3"
          }, {
            description : "Tumor invades adjacent structures ",
            name : "T4"
          }, {
            description : "Resectable tumor invading pleura, pericardium, or diaphragm ",
            name : "T4a"
          }, {
            description : "Unresectable tumor invading other adjacent structures, such as aorta, vertebral body, trachea, etc",
            name : "T4b"
          } ],
          name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            name : "N0"
          }, {
            description : "Regional lymph node metastasis involving 1 to 2 nodes",
            name : "N1"
          }, {
            description : "3 to 6 nodes involved",
            name : "N2"
          }, {
            description : "7 or more nodes involved",
            name : "N3"
          } ],
          name : "Category (pN)"
        }, {
          group : [ {
            description : "Distant metastases",
            name : "M1"
          }, {
            name : "M (not applicable)"
          }, {
            name : "distant metastasis not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Additional findings ",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Intestinal metaplasia (Barrett’s esophagus)"
          }, {
            name : "Low grade dysplasia"
          }, {
            name : "High grade Dysplasia"
          }, {
            name : "Equivocal"
          }, {
            name : "None"
          } ],
          name : ""
        } ]
         }, {
          description : "Order IHC with reflext FISH for adenocarcinoma",
        name : "Her2Neu by IHC",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Positive (3+)"
          }, {
            name : "Negative (0-1+)"
          }, {
            name : "Equivocal (2+)"
          }, {
            name : "Pending"
          }, {
            name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            name : "See case "
          } ],
          name : ""
        } ]
      }, {
        name : "Her2Neu by FISH",
        description : "Order IHC with reflext FISH for adenocarcinoma",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Positive"
          }, {
            name : "Negative"
          }, {
            name : "Equivocal"
          }, {
            name : "Pending"
          }, {
            name : "Reflex pending if appropriate"
          }, {
            name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            name : "See case "
          } ],
          name : ""
        } ]
        }, {
         description : "Keytruda, specific scoring system for adenocarcinoma",
        name : "PDL1",
       optional_state  : "required", "options" : [ {
          group : [ {
            inputs_required : [ "% of cells", [ "strong", "moderate", "weak" ] ],
            name : "Positive/Expressed"
          }, {
            inputs_required : [ "" ],
            name : "Positive, Score ="
          }, {
            name : "Negative (0%)"
          }, {
            name : "Pending"
          }, {
            name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            name : "See case "
          } ],
          name : ""
        }  ]
       }, {
          description: "adenocarcinoma only",
        name : "MSI IHC and Interpretation",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Intact nuclear expression of MMR proteins (MLH1, MSH2, MSH6, PMS2): No evidence of deficient mismatch repair (low probability of MSI-H)"
          },{
            name : "Loss of nuclear expression of one or more MMR proteins (MLH1, MSH2, MSH6, PMS2): deficient mismatch repair/ high probability of microsatellite instability-high (MSI-H). The presence of MSI-H/deficient mismatch repair may also be an indication for additional testing for Lynch syndrome and genetic counselling."
          }, {
            name : "Pending"
          }, {
            name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            name : "See case "
          }],
          name : ""
        } ]
      } ]
    }, {
      most_common : false,
      name : "Ewing sarcoma/PNET",
      optional : true,
      organ_group : "Pediatric",
      properties : [ {
        name : "Procedure ",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Resection "
          }, {
            name : "Amputation"
          } , {
            name : "Limb salvage procedure "
          }],
          name : ""
        } ]
      }, {
        name : "Tumor location",
       optional_state  : "required", "options" : [ {
          name : ""
        } ]
      }, {
        name : "Tumor size",
       optional_state  : "required", "options" : [ {
          name : ""
        } ]
      }, {
        description : "include distance/location of closest soft tissue and bone margin",
        name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance to closest bone and or soft tissue margin (specify)",
            inputs_required : [ "" ],
            name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            name : "Positive"
          } ],
          name : ""
        } ]
      }, {
        name : "Preresection Treatment  ",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Chemotherapy"
          }, {
            name : "Radiation therapy"
          }, {
            name : "Chemotherapy and radiation therapy"
          }, {
            name : "Indeterminate"
          }, {
            name : "Not known"
          }  ],
          name : ""
        } ]
      }, {
        name : "Treatment effect, primary site ",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Not applicable"
          }, {
            name : "None"
          }, {
            name : "Present"
          }, {
            name : "Indeterminate"
          }, {
            name : "Not known"
          }  ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
       }, {
        name : "Distant Metastases ",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
             description : "site",
            inputs_required : [ "" ],
            name : "Present"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
    
      } ]
    }, {
      most_common : false,
      name : "Gallbladder",
      optional : false,
      organ_group : "Gastrointestinal",
      properties : [ {
        name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Simple cholecystectomy"
          }, {
            name : "Radical cholecystectomy (with liver resection and/or lymph nodes)"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Fundus"
          }, {
            name : "Body"
          }, {
            name : "Neck"
          }, {
            name : "Cystic duct"
          }, {
            name : "Free peritoneal side of gallbladder"
          }, {
            name : "Hepatic side of gallbladder"
          }, {
            name : "Equivocal"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor size",
       optional_state  : "required", "options" : [ {
          name : ""
        } ]
      }, {
        name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Adenocarcinoma"
          }, {
            name : "Adenocarcinoma, intestinal type"
          }, {
            name : "Adenocarcinoma, biliary type"
          }, {
            name : "Adenocarcinoma, gastric foveolar type"
          }, {
            name : "Mucinous adenocarcinoma"
          }, {
            name : "Signet-ring cell carcinoma"
          }, {
            name : "Clear cell carcinoma"
          }, {
            name : "Intracystic papillary neoplasm with an associated invasive carcinoma"
          }, {
            name : "Mucinous cystic neoplasm with an associated invasive carcinoma "
          }, {
            name : "Large cell neuroendocrine carcinoma"
          }, {
            name : "Small cell carcinoma"
          }, {
            name : "Neuroendocrine carcinoma (poorly differentiated)"
          }, {
            name : "Adenosquamous carcinoma"
          }, {
            name : "Squamous cell carcinoma"
          }, {
            name : "Undifferentiated carcinoma"
          }, {
            name : "Goblet cell carcinoid"
          }, {
            name : "Mixed adenoneuroendocrine carcinoma"
          } ],
          name : ""
        } ]
      }, {
        name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Grade 1/3, Well differentiated"
          }, {
            name : "Grade 2/3, Moderately differentiated"
          }, {
            name : "Grade 3/3, Poorly differentiated"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Invades lamina propria"
          }, {
            name : "Invades muscle"
          }, {
            name : "Invades perimuscular connective tissue on the peritoneal side "
          }, {
            name : "Invades perimuscular connective tissue on the hepatic side "
          }, {
            name : "Penetrates serosa"
          }, {
            name : "Invades liver"
          }, {
            description : "specify",
             inputs_required : [ "" ],
            name : "Invades other organs"
          } ],
          name : ""
        } ]
      }, {
        description : "include distance/location of closest margin, cystic duct, liver parenchyma",
        name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            name : "Positive"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            name : ""
          }, {
            description : "pathologic",
            name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            name : "m"
          }, {
            description : "recurrent",
            name : "r"
          }, {
            description : "post-treatment",
            name : "y"
          }, {
            name : "mp"
          }, {
            name : "rp"
          }, {
            name : "yp"
          }, {
            name : "mrp"
          }, {
            name : "myp"
          }, {
            name : "ryp"
          }, {
            name : "mryp"
          } ],
          name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            name : "TX"
          }, {
            description : "in situ",
            name : "Tis"
          }, {
            description : "invades lamina propria",
            name : "T1a"
          }, {
            description : "invades muscle",
            name : "T1b"
          }, {
            description : "invades perimuscular tissue on the peritoneal side, without penetrating serosa",
            name : "T2a"
          }, {
            description : "invades perimuscular tissue on the hepatic side, with out extension into liver",
            name : "T2b"
          }, {
            description : "Penetrates serosa OR invades organs",
            name : "T3"
          }, {
            description : "Invades main portal vein OR hepatic artery OR 2 extra hepatic organs",
            name : "T4"
          } ],
          name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            name : "NX"
          }, {
            description : "No metastasis",
            name : "N0"
          }, {
            description : "1-3 Regional metastases",
            name : "N1"
          }, {
            description : "4 or more lymph nodes",
            name : "N2"
          } ],
          name : "Category (M)"
        }, {
          group : [ {
            description : "Distant metastasis ",
            name : "M1"
          }, {
            name : "M (not applicable)"
          }, {
            name : "distant metastasis not applicable"
          } ],
          name : ""
        } ]
        }, {
          description: "adenocarcinoma only",
        name : "MSI IHC and Interpretation",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Intact nuclear expression of MMR proteins (MLH1, MSH2, MSH6, PMS2): No evidence of deficient mismatch repair (low probability of MSI-H)"
          },{
            name : "Loss of nuclear expression of one or more MMR proteins (MLH1, MSH2, MSH6, PMS2): deficient mismatch repair/ high probability of microsatellite instability-high (MSI-H). The presence of MSI-H/deficient mismatch repair may also be an indication for additional testing for Lynch syndrome and genetic counselling."
          }, {
            name : "Pending"
          }, {
            name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            name : "See case "
          }],
          name : ""
        } ]
      } ]
    }, {
      most_common : false,
      name : "Germ Cell, extragonadal",
      optional : true,
      organ_group : "Pediatric",
      properties : [ {
        name : "Procedure ",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Core needle biopsy"
          }, {
            name : "Incisional biopsy"
          }, {
            name : "Excisional biopsy"
          } ],
          name : ""
        } ]
      },{
        name : "Patient Age ",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Congenital/neonatal (birth - 6 mo)"
          }, {
            name : "Childhood/prepubertal (7 mo - 12 y)"
          }, {
            name : "Postpubertal/adult (≥12 y)"
          }, {
            name : "Not known"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Intracranial"
          }, {
            name : "Head and neck region "
          }, {
            name : "Mediastinum"
          }, {
            name : "Retroperitoneum/abdomen"
          }, {
            name : "Sacrococcygeal"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor size",
       optional_state  : "required", "options" : [ {
          name : ""
        } ]
      
      }, {
        name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Mature teratoma"
          }, {
            name : "Immature teratoma"
          }, {
            name : "Teratoma and other germ cell tumor "
          }, {
            name : "Teratoma and other non-germ cell epithelial malignancy "
          }, {
            name : "Teratoma and sarcoma "
          }, {
            name : "Germinoma"
          }, {
            name : "Yolk sac tumor"
          }, {
            name : "Embryonal carcinoma "
          }, {
            name : "Choriocarcinoma "
          }, {
            name : "Teratoma and sarcoma "
          }, {
            name : "Combined nonteratomatous germ cell tumor "
          } ],
          name : ""
        } ]
      }, {
        name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Tumor involving coccyx"
          }, {
            name : "Coccyx uninvolved"
          } ],
          name : ""
        } ]
      }, {
        description : "include distance/location of closest margin",
        name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            name : "Positive"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Distant Metastases",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "location",
            inputs_required : [ "" ],
            name : "Present"
          }, {
            name : "M (not applicable)"
          }, {
            name : "distant metastasis not applicable"
          } ],
          name : ""
        } ]
     
      } ]
    }, {
      most_common : false,
      name : "GIST",
      optional : false,
      organ_group : "Gastrointestinal",
      properties : [ {
        name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Excisional biopsy"
          }, {
            name : "Resection"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Esophagus"
          }, {
            name : "Stomach"
          }, {
            name : "Duodenum"
          }, {
            name : "Jejunum"
          }, {
            name : "Ileum"
          }, {
            name : "Small intestine"
          }, {
            name : "Right colon"
          }, {
            name : "Transverse colon"
          }, {
            name : "Descending colon"
          }, {
            name : "Colon"
          }, {
            name : "Rectum"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor size",
       optional_state  : "required", "options" : [ {
          name : ""
        } ]
      }, {
        name : "Tumor focality",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Single focus"
          }, {
            name : "Multiple foci"
          } ],
          name : ""
        } ]
      }, {
        name : "Subtype",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Spindle cell"
          }, {
            name : "Epithelioid"
          }, {
            name : "Mixed"
          } ],
          name : ""
        } ]
       }, {
         description : " mitoses/ 5 mm squared approximately 20-25 hpfs",
        name : "Mitotic rate",
       optional_state  : "required", "options" : [ {
          group : [  {
            name : " 5 or less/ 5 mm squared"
          } ],
          name : ""
        } ]
      }, {
        name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : " 5 or less mitoses/ 5 mm squared",
            name : "Low grade"
          }, {
            description : "greater than 5 mitoses/ 5 mm squared",
            name : "High grade"
          } ],
          name : ""
        } ]
      }, {
        name : "Risk assessment",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "GASTRIC: <= 2 cm",
            name : "None"
          }, {
            description : "GASTRIC: >2cm AND <= 5cm AND mitoses <=5/5 mm squared",
            name : "Very low risk"
          }, {
            description : "GASTRIC: > 5cm AND < 10cm AND mitoses <=5/5 mm squared",
            name : "Low risk"
          }, {
            description : "GASTRIC: (> 10cm AND mitoses <=5/5 mm squared) OR (>2cm AND <=5cm AND mitoses > 5/50 hpf) ",
            name : "Moderate risk"
          }, {
            description : "GASTRIC:> 5cm AND  mitoses >5/5 mm squared ",
            name : "High risk"
          }, {
            description : "DUODENUM: <= 2cm AND mitoses <=5/5 mm squared",
            name : "None"
          }, {
            description : "DUODENUM: (>2cm AND <= 5cm AND mitoses <=5/5 mm squared)",
            name : "Low risk"
          }, {
            description : "DUODENUM: {> 10cm AND mitoses <=5/5 mm squared) OR (> 2cm AND <= 5cm AND mitoses > 5/50 hpf) OR (> 10 cm AND mitoses > 5/5 mm squared)",
            name : "High risk"
          }, {
            description : "DUODENUM: (> 5cm AND <= 10cm AND mitoses <= 5/50 hpf) OR (< 2cm AND mitoses >5/5 mm squared) OR (> 5cm AND <= 10cm AND mitoses >5/5 mm squared)",
            name : "Insufficient data"
          }, {
            description : "JEJUNUM/ILEUM: (<= 2 cm AND mitoses <=5/5 mm squared)",
            name : "None"
          }, {
            description : "JEJUNUM/ILEUM: (>2cm AND <= 5cm AND mitoses <=5/5 mm squared)",
            name : "Low risk"
          }, {
            description : "JEJUNUM/ILEUM: (> 5cm AND < 10cm AND mitoses <=5/5 mm squared)",
            name : "Moderate risk"
          }, {
            description : "JEJUNUM/ILEUM: (> 10cm) OR (mitoses >5/5 mm squared)",
            name : "High risk"
          }, {
            description : "RECTUM: (<= 2 cm AND mitoses <=5/5 mm squared)",
            name : "None"
          }, {
            description : "RECTUM: (>2cm AND <= 5cm AND mitoses <=5/5 mm squared)",
            name : "Low risk"
          }, {
            description : "RECTUM:( > 10cm) OR (< 5cm AND mitoses >5/5 mm squared)",
            name : "High risk"
          }, {
            description : "RECTUM: (> 5cm AND < 10cm)",
            name : "Insufficient data"
          }, {
            name : "Metastatic"
          } ],
          name : ""
        } ]
      }, {
        description : "include distance/location of closest margin",
        name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            name : "Positive"
          } ],
          name : ""
        } ]
      }, {
        name : "Treatment Effect ",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "No known therapy"
          }, {
            name : "None"
          }, {
            name : "Present"
          }, {
            name : "Indeterminate"
          }  ],
          name : ""
        } ] 
  
     }, {
        name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            name : ""
          }, {
            description : "pathologic",
            name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            name : "m"
          }, {
            description : "recurrent",
            name : "r"
          }, {
            description : "post-treatment",
            name : "y"
          }, {
            name : "mp"
          }, {
            name : "rp"
          }, {
            name : "yp"
          }, {
            name : "mrp"
          }, {
            name : "myp"
          }, {
            name : "ryp"
          }, {
            name : "mryp"
          } ],
          name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            name : "TX"
          }, {
            description : "<= 2cm",
            name : "T1"
          }, {
            description : "> 2 cm AND <= 5cm",
            name : "T2"
          }, {
            description : "> 5 cm AND <= 10cm",
            name : "T3"
          }, {
            description : ">10 cm",
            name : "T4"
          } ],
          name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            name : "N0"
          }, {
            description : "Regional lymph nodes",
            name : "N1"
          } ],
          name : "Category (pN)"
        }, {
          group : [ {
            description : "metastases",
            name : "M1"
          }, {
            name : "M (not applicable)"
          }, {
            name : "distant metastasis not applicable"
          } ],
          name : ""
        } ]
  
    }, {
        name : "KIT(CD117) Immunohistochemistry",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Positive"
          }, {
            name : "Negative"
          }, {
            name : "Equivocal"
          } ],
          name : ""
        } ]
     } , {
        name : "DOG1 Immunohistochemistry",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Positive"
          }, {
            name : "Negative"
          }, {
            name : "Equivocal"
          } ],
          name : ""
        } ]
     }]
    }, {
      most_common : false,
      name : "Hepatoblastoma",
      optional : true,
      organ_group : "Pediatric",
      properties : [ {
        name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Right lobectomy"
          }, {
            name : "Extended right lobectomy "
          }, {
            name : "Medial segmentectomy "
          }, {
            name : "Left lateral segmentectomy "
          }, {
            name : "Total left lobectomy "
          }, {
            name : "Explanted liver "
          }, {
            name : "Medial segmentectomy "
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Right lobe"
          }, {
            name : "Left lobe "
          }, {
            name : "Right and left lobes "
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor size",
       optional_state  : "required", "options" : [ {
          description : "each nodule",
          name : ""
        } ]
          }, {
        name : "Preoperative treatment",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "No known preoperative therapy"
          }, {
            name : "Preoperative therapy given"
          }, {
            name : "Not specified"
          }, {
            name : "Not known"
          }  ],
          name : ""
        } ]
      }, {
        name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Hepatoblastoma, epithelial type, fetal pattern (mitotically inactive)"
          }, {
            name : "Hepatoblastoma, epithelial type, fetal pattern (mitotically active)  "
          }, {
            name : "Hepatoblastoma, epithelial type, embryonal pattern  "
          }, {
            name : "Hepatoblastoma, epithelial type, pleomorphic (poorly differentiated)  "
          }, {
            name : "Hepatoblastoma, epithelial type, macrotrabecular pattern "
          }, {
            name : "Hepatoblastoma, epithelial type, small cell undifferentiated pattern "
          }, {
            name : "Hepatoblastoma, mixed epithelial and mesenchymal type without teratoid features  "
          }, {
            name : "Hepatoblastoma, mixed epithelial and mesenchymal type with teratoid features  "
          } ],
          name : ""
        } ]
     
    
      }, {
        description : "include distance",
        name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            name : "Positive"
          } ],
          name : ""
        } ]
      }, {
        description : "include distance/location of closest extent",
        name : "Capsular surface",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            name : "Positive"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        description : "(includes metastasis to lymph nodes in the following locations: inferior phrenic, distal to hilum, hepatoduodenal ligament, or caval region",
        name : "Distant metastases",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            description : "location",
            inputs_required : [ "" ],
            name : "Present"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
           }, {
        name : "Serum Alpha Fetoprotein (αFP) Level ",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "<100 ng/mL "
          }, {
            name : "≥100 ng/mL"
          }, {
            name : "Not known "
          } ],
          name : ""
        } ]
      } ]
    }, {
      most_common : false,
      name : "Hepatocellular Carcinoma",
      optional : false,
      organ_group : "Gastrointestinal",
      properties : [  {
        name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Wedge resection"
          }, {
            name : "Partial hepatectomy "
          }, {
            name : "Total hepatectomy "
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor focality",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Single focus"
          }, {
            name : "Multiple foci "
          } ],
          name : ""
        } ]
      }, {
        name : "Location",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Right lobe"
          }, {
            name : "Left lobe"
          }, {
            name : "Caudate lobe "
          }, {
            name : "Quadrate lobe"
          }, {
             description : "specify",
              inputs_required : [ "" ],
            name : "Segmental location  "
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor size",
       optional_state  : "required", "options" : [ {
          name : ""
        } ]
      }, {
        name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Hepatocellular carcinoma"
          }, {
            name : "Fibrolamellar hepatocellular carcinoma  "
          }, {
            name : "Undifferentiated carcinoma  "
          } ],
          name : ""
        } ]
      }, {
        name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Grade 1/4, well differentiated"
          }, {
            name : "Grade 2/4, moderately differentiated"
          }, {
            name : "Grade 3/4, poorly differentiated"
          }, {
            name : "Grade 4/4, undifferentiated"
          } ],
          name : ""
        } ]
      }, {
        name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Tumor limited to liver "
          }, {
            name : "Tumor involves a major branch of the portal vein"
          }, {
            name : "Tumor involves 1 or more hepatic vein(s) "
          }, {
            name : "Tumor involves visceral peritoneum"
          }, {
            name : "Tumor directly invades gallbladder "
          }, {
            description : "which",
            inputs_required : [ "" ],
            name : "Tumor directly invades adjacent organs other than the gallbladder  "
          } ],
          name : ""
        } ]
      }, {
        description : "include distance/location of closest hepatic parenchymal margin",
        name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            name : "Positive"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Indeterminate"
          }, {
            name : "Suspicious"
          }, {
            name : "Present"
          }, {
            name : "Present, extensive"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Treatment Effect ",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "No known therapy"
          }, {
            name : "None"
          }, {
            name : "Complete necrosis (no viable tumor)"
          }, {
            name : "Incomplete necrosis (viable tumor present)"
          }, {
            name : "Indeterminate"
          }  ],
          name : ""
        } ] 
  
     }, {
        name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            name : ""
          }, {
            description : "pathologic",
            name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            name : "m"
          }, {
            description : "recurrent",
            name : "r"
          }, {
            description : "post-treatment",
            name : "y"
          }, {
            name : "mp"
          }, {
            name : "rp"
          }, {
            name : "yp"
          }, {
            name : "mrp"
          }, {
            name : "myp"
          }, {
            name : "ryp"
          }, {
            name : "mryp"
          } ],
          name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            name : "TX"
          }, {
            description : "Solitary tumor <= 2cm",
            name : "T1a"
          }, {
            description : "Solitary tumor >2cm without vascular invasion ",
            name : "T1b"
          }, {
            description : "Solitary tumor > 2cm with vascular invasion OR multiple tumors none more than 5 cm ",
            name : "T2"
          }, {
            description : "Multiple tumors, at least one of which is >5 cm",
            name : "T3"
          }, {
            description : "Tumor(s) with direct invasion of adjacent organs other than the gallbladder or with perforation of visceral peritoneum ",
            name : "T4"
          } ],
          name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            name : "N0"
          }, {
            description : "Regional lymph node metastases) ",
            name : "N1"
          } ],
          name : "Category (pN)"
        }, {
          group : [ {
            description : "Distant metastases",
            name : "M1"
          }, {
            name : "M (not applicable)"
          }, {
            name : "distant metastasis not applicable"
          } ],
          name : ""
        } ]
      } ]
    }, {
      most_common : false,
      name : "Intrahepatic Bile Ducts",
      optional : false,
      organ_group : "Gastrointestinal",
      properties : [  {
        name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Wedge resection"
          }, {
            name : "Partial hepatectomy "
          }, {
            name : "Total hepatectomy "
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor size",
       optional_state  : "required", "options" : [ {
          name : ""
        } ]
      }, {
        name : "Tumor focality",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Single focus"
          }, {
            name : "Multiple foci "
          } ],
          name : ""
        } ]
      }, {
        name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Intrahepatic cholangiocarcinoma"
          }, {
            name : "Combined hepatocellular and cholangiocarcinoma "
          }, {
            name : "Intraductal papillary neoplasm with an associated invasive carcinoma"
          }, {
            name : "Mucinous cystic neoplasm with an associated invasive carcinoma"
          }, {
            name : "Large cell neuroendocrine carcinoma"
          }, {
            name : "Small cell neuroendocrine carcinoma"
          }, {
            name : "Neuroendocrine carcinoma (poorly differentiated)"
          } ],
          name : ""
        } ]
      }, {
        name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Grade 1/3, well differentiated"
          }, {
            name : "Grade 2/3, moderately differentiated"
          }, {
            name : "Grade 3/3, poorly differentiated"
          } ],
          name : ""
        } ]
      }, {
        name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Tumor limited to the intrahepatic bile ducts histologically (carcinoma in situ) "
          }, {
            name : "Tumor limited to hepatic parenchyma"
          }, {
            name : "Tumor involves visceral peritoneal surface "
          }, {
            name : "Tumor invades the adjacent liver parenchyma"
          }, {
            name : "Tumor directly invades gallbladder "
          }, {
            description : "which",
            inputs_required : [ "" ],
            name : "Tumor directly invades adjacent organs other than the gallbladder  "
          } ],
          name : ""
        } ]
      }, {
        description : "include distance/location of closest bile duct/hepatic margin",
        name : "Margins, invasive tumor",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            name : "Positive"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Indeterminate"
          }, {
            name : "Suspicious"
          }, {
            name : "Present"
          }, {
            name : "Present, extensive"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            name : ""
          }, {
            description : "pathologic",
            name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            name : "m"
          }, {
            description : "recurrent",
            name : "r"
          }, {
            description : "post-treatment",
            name : "y"
          }, {
            name : "mp"
          }, {
            name : "rp"
          }, {
            name : "yp"
          }, {
            name : "mrp"
          }, {
            name : "myp"
          }, {
            name : "ryp"
          }, {
            name : "mryp"
          } ],
          name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            name : "TX"
          }, {
            description : "Carcinoma in situ",
            name : "Tis"
          }, {
            description : "Solitary tumor <=5cm without vascular invasion ",
            name : "T1a"
          }, {
            description : "Solitary tumor > 5cm without vascular invasion ",
            name : "T1b"
          }, {
            description : "Solitary tumor with vascular invasion OR multiple tumors ",
            name : "T2"
          }, {
            description : "Tumor perforating the visceral peritoneum or   ",
            name : "T3"
          }, {
            description : "Tumor involving the local extrahepatic structures by direct invasion ",
            name : "T4"
          } ],
          name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            name : "N0"
          }, {
            description : "Regional lymph node metastases) ",
            name : "N1"
          } ],
          name : "Category (pN)"
        }, {
          group : [ {
            description : "Distant metastases",
            name : "M1"
          }, {
            name : "M (not applicable)"
          }, {
            name : "distant metastasis not applicable"
          } ],
          name : ""
        } ]
        }, {
          description: "adenocarcinoma only",
        name : "MSI IHC and Interpretation",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Intact nuclear expression of MMR proteins (MLH1, MSH2, MSH6, PMS2): No evidence of deficient mismatch repair (low probability of MSI-H)"
          },{
            name : "Loss of nuclear expression of one or more MMR proteins (MLH1, MSH2, MSH6, PMS2): deficient mismatch repair/ high probability of microsatellite instability-high (MSI-H). The presence of MSI-H/deficient mismatch repair may also be an indication for additional testing for Lynch syndrome and genetic counselling."
          }, {
            name : "Pending"
          }, {
            name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            name : "See case "
          }],
          name : ""
        } ]
      } ]
    }, {
      most_common : false,
      name : "Jejunum/Ileal neuroendocrine tumor",
      optional : false,
      organ_group : "Endocrine",
      properties : [  {
        name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Segmental resection"
          }, {
            name : "Ileocolic resection"
          }],
          name : ""
        } ]
      }, {
        name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Jejunum "
          }, {
            name : "Ileum"
          }, {
            name : "Small intestine, other than duodenum"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor size",
       optional_state  : "required", "options" : [ {
          name : ""
        } ]
      }, {
        name : "Tumor Focality ",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Single focus"
          }, {
            name : "Multiple foci"
          }, {
            name : "Equivocal"
          } ],
          name : ""
        } ]
      }, {
         description : "For small cell (high grade NET use small intesting carcinoma protocol not this one) ",  
        name : "Type and Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "< 2mitoses/10 hpf and/or Ki67<3% ", 
            name : "Grade 1/3, Well differentiated neuroendocrine tumor, low grade (carcinoid)"
          }, {
            description : ">= 2 AND < 20 mitoses/10 hpf and/or Ki67 >=3 AND <20% ",  
            name : "Grade 2/3, Well differentiated neuroendocrine tumor, intermediate grade (atypical carcinoid)"
          }, {
             description : "> 20 mitoses/10 hpf and/or Ki67 >20% ",  
            name : "Grade 3/3, Well differentiated neuroendocrine tumor"
          } ],
          name : ""
        } ]
      }, {
           description : "mitoses/ 2 mm squared NOT 10 hpf, approximately count 42 hpf and divide by 5", 
        name : "Mitotic rate",
       optional_state  : "required", "options" : [ {
          group : [ {
            
            name : "Less than 2/2mm squared"
          }, {
          
            name : "at least 2 and less than 20 /2 mm squared"
          }, {
            
            name : "More than 20 per 2 mm squared"
          } ],
          name : ""
        } ]  
        
      }, {
        name : "Ki67 (Mib1)",
       optional_state  : "required", "options" : [ {
          group : [ {
            
            name : "Less than 3%"
          }, {
          
            name : "at least 3% and less than 20%"
          }, {
            
            name : "More than 20%"
          } ],
          name : ""
        } ]  
        
      }, {
        name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "No evidence of primary tumor"
          }, {
           
            name : "Invades lamina propria"
          }, {
           
            name : "Invades submucosa"
          }, {
            
            name : "Invades muscularis propria"
          }, {
            
            name : "Tumor invades subserosal tissue without involvement of visceral peritoneum"
          }, {
            
            name : "Tumor penetrates serosa (visceral peritoneum) "
          }, {
            description : "specify",
            inputs_required : [ "" ],
            name : "Tumor directly invades adjacent structures "
          } ],
          name : ""
        } ]
      }, {
        description : "include distance/location of closest proximal/distal/radial margin",
        name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            name : "Positive"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Indeterminate"
          }, {
            name : "Suspicious"
          }, {
            name : "Present"
          }, {
            name : "Present, extensive"
          } ],
          name : ""
        } ]
      }, {
        name : "Large Mesenteric Masses (>2 cm) ",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Indeterminate"
          }, {
            name : "Present"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            name : ""
          }, {
            description : "pathologic",
            name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            name : "m"
          }, {
            description : "recurrent",
            name : "r"
          }, {
            description : "post-treatment",
            name : "y"
          }, {
            name : "mp"
          }, {
            name : "rp"
          }, {
            name : "yp"
          }, {
            name : "mrp"
          }, {
            name : "myp"
          }, {
            name : "ryp"
          }, {
            name : "mryp"
          } ],
          name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            name : "TX"
          }, {
            description : "No tumor",
            name : "T0"
          }, {
            description : "Tumor invades lamina propria or submucosa and size 1 cm or less (small intestinal tumors) ",
            name : "T1"
          }, {
            description : "Tumor invades muscularis propria or tumor size >1 cm (small intestinal tumors)",
            name : "T2"
          }, {
            description : "Tumor invades through the muscularis propria into subserosal tissue without penetration of overlying serosa ",
            name : "T3"
          }, {
            description : "Tumor penetrates visceral peritoneum (serosa) or invades other organs ",
            name : "T4"
          } ],
          name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            name : "N0"
          }, {
            description : "Metastases to < 12 regional lymph nodes",
            name : "N1"
          }, {
            description : "Metastases to >= 12 regional lymph nodes OR mesenteric mass >2cm",
            name : "N2"
          } ],
          name : "Category (pN)"
        }, {
          group : [ {
            description : "Distant metastases liver only",
            name : "M1a"
          }, {
              description : "Distant metastases other than liver",
            name : "M1b"
          }, {
              description : "Distant metastases liver and other",
            name : "M1c"
          }, {
            name : "M (not applicable)"
          }, {
            name : "distant metastasis not applicable"
          } ],
          name : ""
        } ]
      } ]  
     }, {
      most_common : false,
      name : "Kidney",
      optional : false,
      organ_group : "Genitourinary",
      properties : [ {
        name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Right partial nephrectomy"
          }, {
            name : "Right radical nephrectomy"
          }, {
            name : "Right total nephrectomy"
          } , {
            name : "Right nephroureterectomy"
          }, {
            name : "Left partial nephrectomy"
          }, {
            name : "Left radical nephrectomy"
          }, {
            name : "Left total nephrectomy"
          } , {
            name : "Left nephroureterectomy"
          }],
          name : ""
        } ]
    
      }, {
        name : "Tumor size",
       optional_state  : "required", "options" : [ {
          name : ""
        } ]
      }, {
        name : "Tumor focality",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Single focus"
          }, {
            name : "Multiple foci"
          } ],
          name : ""
        } ]
    
      }, {
        name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
                   description : "Pax8+, CK7-, CD117-, CD10+, GATA3-",
            name : "Clear cell renal cell carcinoma"
          }, {
               description : "Pax8+, CK7+",
            name : "Multilocular clear cell renal cell carcinoma"
          }, {
               description : "Pax8+, CK7+, GATA3-",
            name : "Papillary renal cell carcinoma"
          }, {
               description : "Pax8+, CK7+, GATA3-",
            name : "Papillary renal cell carcinoma, Type 1"
          }, {
               description : "Pax8+, CK7 variable, GATA3-",
            name : "Papillary renal cell carcinoma, Type 2"
          }, {
             description : "Pax8+, CK7 +, GATA3+",
            name : "Oncocytic papillary renal cell carcinoma"
          }, {
             description : "Hales+, CK7+, CK20+, PAX8+, CD117+, CD10-/focal+, oncocytoma: Hales-, CK7 -/focal+, CK20 -/focal+, PAX8-, CD117+, CD10-/focal+",
            name : "Chromophobe renal cell carcinoma"
          }, {
             description : "Pax8+, CK7+, INI+, OCT3/4-, FH+, 2SC-",
            name : "Collecting duct carcinoma"
          }, {
            description : "Pax8+, CK7+, INI-, OCT3/4+, FH+,2SC-",
            name : "Renal medullary carcinoma"
          }, {
               description : "TFE3 +, Ker -/focal+, EMA -/focal+, Pax8 variable",
            name : "MiT family translocation renal cell carcinoma"
          }, {
               description : "TFE3 +, Ker -/focal+, EMA -/focal+, Pax8 variable",
            name : "Xp11 translocation renal cell carcinoma"
          }, {
               description : "TFE3 +, Ker -/focal+, EMA -/focal+, Pax8 variable",
            name : "t(6;11) renal cell carcinoma"
          }, {
             description : "CK7+, ? Hales +",
            name : "TCEB1-mutated cell carcinoma"
          }, {
               description : "Pax8+, CK7+",
            name : "Mucinous tubular and spindle cell carcinoma"
          }, {
            name : "Tubulocystic renal cell carcinoma "
          }, {
            name : "Acquired cystic disease associated renal cell carcinoma"
          }, {
               description : "Pax8+, CK7+, GATA3+",
            name : "Clear cell papillary"
          }, {
             description : "Fumarate -, 2-succinocysteine (2SC) + CMV like nucleoli",
            name : "Hereditary leiomyomatosis and renal cell carcinoma-associated renal cell carcinoma"
          }, {
               description : "SDH -",
            name : "Succinate dehydrogenase (SDH) deficient renal carcinoma"
          }, {
            name : "Renal cell carcinoma, unclassified"
          } ],
          name : ""
        } ]
      }, {
        name : "Sarcomatoid features",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Present"
          }, {  
            name : "Equivocal"
          } ],
          name : ""
        } ]
        }, {
        name : "Rhabdoid features",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Present"
          }, {  
            name : "Equivocal"
          } ],
          name : ""
        } ] 
         
         }, {
        description : "Clear cell RCC only",
        name : "Geographic necrosis",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Present"
          }, {  
            name : "Equivocal"
          }, {  
             description : "non clear cell RCCs",
            name : "Not applicable"
          } ],
          name : ""
        } ]    
      }, {
        name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
             description : "Nucleoli absent or inconspicuous and basophilic at 400x magnification",
            name : "WHO/ISUP grade 1/4"
          }, {
             description : "Nucleoli conspicuous and eosinophilic at 400x magnification, visible but not prominent at 100x magnification",
            name : "WHO/ISUP grade 2/4"
          }, {
             description : "Nucleoli conspicuous and eosinophilic at 100x magnification",
            name : "WHO/ISUP grade 3/4"
          }, {
             description : "Extreme nuclear pleomorphism and/or multi-nuclear giant cells and/or rhabdoid and/or sarcomatoid differentiation",
            name : "WHO/ISUP grade 4/4"
          }, {
             description : "Chromophobe RCC",
            name : "Not applicable"
          }],
          name : ""
         } ]
      }, {
        name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Limited to kidney"
          }, {
            name : "Invades perinephric tissue"
          }, {
            name : "Invades renal sinus"
          }, {
            name : "Invades beyond Gerota's fascia"
          }, {
            name : "Invades major veins"
          }, {
            name : "Invades pelvicaliceal system"
          }, {
            name : "Direct extension into adrenal (T4)"
          }, {
            name : "Metastasis to adrenal (M1)"
          }, {
             description : "specify",
              inputs_required : [ "" ],
            name : "Invades other organs"
          } ],
          name : ""
        } ]
      }, {
        name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Free"
          }, {
            description : "location parenchymal, capsular (partial), perinephric fat, renal sinus, Gerota, renal vein, ureter",
            inputs_required : [ "" ],
            name : "Positive"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            name : ""
          }, {
            description : "pathologic",
            name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            name : "m"
          }, {
            description : "recurrent",
            name : "r"
          }, {
            description : "post-treatment",
            name : "y"
          }, {
            name : "mp"
          }, {
            name : "rp"
          }, {
            name : "yp"
          }, {
            name : "mrp"
          }, {
            name : "myp"
          }, {
            name : "ryp"
          }, {
            name : "mryp"
          } ],
          name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            name : "TX"
          }, {
            description : "<= 4cm, limited to kidney",
            name : "T1a"
          }, {
            description : "> 4cm AND <=7cm, limited to kidney",
            name : "T1b"
          }, {
            description : "> 7 cm AND <= 10cm  limited to kidney",
            name : "T2a"
          }, {
            description : "> 10cm  limited to kidney",
            name : "T2b"
          }, {
            description : "perinephric invasion OR renal sinus invasion OR renal vein or its segmental [muscle containing] branches invasion",
            name : "T3a"
          }, {
            description : "Invades vena cava below diaphragm",
            name : "T3b"
          }, {
            description : "Invades vena cava above diaphragm",
            name : "T3c"
          }, {
            description : "Invades beyond Gerota's fascia or into adrenal",
            name : "T4"
          } ],
          name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            name : "N0"
          }, {
            description : "Regional lymph nodes",
            name : "N1"
          } ],
          name : "Category (pN)"
        }, {
          group : [ {
            description : "metastases",
            name : "M1"
          }, {
            name : "M (not applicable)"
          }, {
            name : "distant metastasis not applicable"
          } ],
          name : ""
        } ]
      }, {
         description : "in non-neoplastic kidney, including glomerular, tubulointerstitial and vascular disease",
        name : "Additional findings",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Nonspecific changes"         
          }, {
            name : "Focal nonspecific chronic inflammation"         
          }, {
            name : "Focal glomerulosclerosis"         
          }, {
            name : "Interstitial nephritis"
          }, {
            name : "Chronic pyelonephritis"
          }, {
            name : "Acute pyelonephritis"
          }, {
            name : "End stage kidney disease"
          } ],
          name : ""
        } ]
      } ]
    }, {
      most_common : false,
      name : "Larynx",
      optional : false,
      organ_group : "Head and Neck",
      properties : [ {
        name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Excision"
          }, {
            name : "Endolaryngeal excision"
          }, {
            name : "Transoral laser excision (glottis)"
          }, {
            name : "Supraglottic laryngectomy"
          }, {
            name : "Supracricoid laryngectomy"
          }, {description : "specify type",
            inputs_required : [ "" ],
            name : "Vertical hemilaryngectomy "
          }, {description : "specify type",
            inputs_required : [ "" ],
            name : "Partial laryngectomy "
          }, {
            name : "Total laryngectomy"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Right supraglottis"
          }, {
            name : "Right glottis"
          }, {
            name : "Right subglottis"
          }, {
            name : "Left supraglottis"
          }, {
            name : "Left glottis"
          }, {
            name : "Left subglottis"
          }, {
            name : "Midline supraglottis"
          }, {
            name : "Midline glottis"
          }, {
            name : "Midline subglottis"
          }, {
            name : "Bilateral supraglottis"
          }, {
            name : "Bilateral glottis"
          }, {
            name : "Bilateral subglottis"
          } ],
          name : ""
        } ]
      }, {
        name : "Transglottic extension",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Present"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor focality",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Single focus"
          }, {
            name : "Multiple foci"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor size",
       optional_state  : "required", "options" : [ {
          name : ""
        } ]
      }, {
        name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Squamous cell carcinoma"
          }, {
            name : "Squamous cell carcinoma, conventional (keratinizing)"
          }, {
            name : "Squamous cell carcinoma, nonkeratinizing"
          }, {
            name : "Acantholytic squamous cell carcinoma"
          }, {
            name : "Adenosquamous carcinoma"
          }, {
            name : "Basaloid squamous cell carcinoma"
          }, {
            name : "Papillary squamous cell carcinoma"
          }, {
            name : "Spindle cell squamous cell carcinoma"
          }, {
            name : "Verrucous squamous cell carcinoma"
          }, {
            name : "Lymphoepithelial carcinoma  "
          }, {
            name : "Mucoepidermoid carcinoma, low grade"
          }, {
            name : "Mucoepidermoid carcinoma, intermediate grade"
          }, {
            name : "Mucoepidermoid carcinoma, high grade"
          }, {
            name : "Adenoid cystic carcinoma"
          }, {
            name : "Adenoid cystic carcinoma, tubular pattern"
          }, {
            name : "Adenoid cystic carcinoma, cribriform pattern"
          }, {
            name : "Adenoid cystic carcinoma, solid pattern"
          }, {
            name : "Adenocarcinoma, not otherwise specified, low grade"
          }, {
            name : "Adenocarcinoma, not otherwise specified, intermediate grade"
          }, {
            name : "Adenocarcinoma, not otherwise specified, high grade"
          }, {
            name : "Typical carcinoid tumor (well differentiated neuroendocrine carcinoma)"
          }, {
            name : "Atypical carcinoid tumor (moderately differentiated neuroendocrine carcinoma)"
          }, {
            name : "Large cell neuroendocrine carcinoma"
          }, {
            name : "Small cell carcinoma"
          }, {
            name : "Mucosal melanoma"
          } ],
          name : ""
        } ]
      }, {
        name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Grade 1/3, Well differentiated"
          }, {
            name : "Grade 2/3, Moderately differentiated"
          }, {
            name : "Grade 3/3, Poorly differentiated"
          } ],
          name : ""
        } ]
      }, {
        description : "include distance/location of closest margin",
        name : "Margins, invasive tumor",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            name : "Positive"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        description : "include distance/location of closest margin",
        name : "Margins, dysplasia/CIS",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            name : "Positive"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Indeterminate"
          }, {
            name : "Suspicious"
          }, {
            name : "Present"
          }, {
            name : "Present, extensive"
          } ],
          name : ""
        } ]
      }, {
        name : "Perineural invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Present"
          }, {
            name : "Equivocal"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Positive node laterality",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Not applicable"
          }, {
            name : "Right"
          }, {
            name : "Left"
          }, {
            name : "Bilateral"
          }, {
            name : "Indeterminate"
          } ],
          name : ""
        } ]
      }, {
        name : "Extranodal extension",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Not applicable"
          }, {
            name : "None"
          }, {
            name : "Present"
          }, {
            name : "Equivocal"
          } ],
          name : ""
        } ]
      }, {
        name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            name : ""
          }, {
            description : "pathologic",
            name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            name : "m"
          }, {
            description : "recurrent",
            name : "r"
          }, {
            description : "post-treatment",
            name : "y"
          }, {
            name : "mp"
          }, {
            name : "rp"
          }, {
            name : "yp"
          }, {
            name : "mrp"
          }, {
            name : "myp"
          }, {
            name : "ryp"
          }, {
            name : "mryp"
          } ],
          name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            name : "TX"
          }, {
            description : "SUPRAGLOTTIS, = 1 site, mobile vocal cords ",
            name : "T1"
          }, {
            description : "SUPRAGLOTTIS, > 1 site, mobile vocal cords ",
            name : "T2"
          }, {
            description : "SUPRAGLOTTIS, vocal cords fixed OR invades post cricoid, preepiglotic paraglottic or thyroid cartilage",
            name : "T3"
          }, {
            description : "SUPRAGLOTTIS, invades through thyroid cartilage or beyond larynx",
            name : "T4a"
          }, {
            description : "SUPRAGLOTTIS, invades prevertebral space, carotid artery or mediastinum",
            name : "T4b"
          }, {
            description : "GLOTTIS, = 1  vocal cords ",
            name : "T1a"
          }, {
            description : "GLOTTIS, = both  vocal cords ",
            name : "T1b"
          }, {
            description : "GLOTTIS, invades supraglottic OR subglotis AND OR impaired vocal cords ",
            name : "T2"
          }, {
            description : "GLOTTIS, vocal cords fixed OR invades post cricoid, preepiglotic paraglottic or thyroid cartilage",
            name : "T3"
          }, {
            description : "GLOTTIS, invades through thyroid cartilage or beyond larynx",
            name : "T4a"
          }, {
            description : "GLOTTIS, invades prevertebral space, carotid artery or mediastinum",
            name : "T4b"
          }, {
            description : "SUBGLOTTIS, limited to subglottis ",
            name : "T1a"
          }, {
            description : "SUBGLOTTIS, invades vocal cords ",
            name : "T2"
          }, {
            description : "SUBGLOTTIS, vocal cords fixed ",
            name : "T3"
          }, {
            description : "SUBGLOTTIS, invades through thyroid cartilage or beyond larynx",
            name : "T4a"
          }, {
            description : "SUBGLOTTIS, invades prevertebral space, carotid artery or mediastinum",
            name : "T4b"
          }, {
            description : "MELANOMA, limited to the mucosa and immediately underlying soft tissue ",
            name : "T3"
          }, {
            description : "MELANOMA, Tumor involving deep soft tissue, cartilage, bone, or overlying skin",
            name : "T4a"
          }, {
            description : "MELANOMA, Tumor involving brain, dura, skull base, lower cranial nerves (IX, X, XI, XII), masticator space, carotid artery, prevertebral space, or mediastinal structures",
            name : "T4b"
          } ],
          name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            name : "N0"
          }, {
            description : "single ipsilateral lymph node <= 3cm AND no extranodal extension OR MELANOMA regional metastases",
            name : "N1"
          }, {
            description : "(single ipsilateral lymph node > 3cm AND <= 6cm AND no extranodal extension) OR (bilateral or contralateral lymph nodes, <= 6cm  AND no extranodal extension)",
            name : "N2a"
          }, {
            description : "multiple ipsilateral lymph node AND <= 6cm AND no extranodal extension",
            name : "N2b"
          }, {
            description : "bilateal or contralateral lymph node AND <= 6cm AND no extranodal extension",
            name : "N2c"
          }, {
            description : "> 6cm AND no extranodal extension",
            name : "N3a"
          }, {
            description : "(metastases single ipsilateral lymph node >3cm AND extranodal extension) OR ( multiple ipsilateral, contralateral or bilateral nodes AND no extranodal extension) OR (single contralateral node <=3cm AND extranodal extension)",
            name : "N3b"
          } ],
          name : "Category (pN)"
        }, {
          group : [ {
            description : "metastases",
            name : "M1"
          }, {
            name : "M (not applicable)"
          }, {
            name : "distant metastasis not applicable"
          } ],
          name : ""
        } ]
      } ]
    }, {
      most_common : false,
      name : "Lip Oral Cavity",
      optional : false,
      organ_group : "Head and Neck",
      properties : [ {
        name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Excisional biopsy"
          }, {
            name : "Resection"
          }, {
            name : "Resection and neck dissection "
          } , {
            name : "Glossectomy"
          }, {
            name : "Mandibulectomy "
          }, {
            name : "Maxillectomy"
          }, {
            name : "Palatectomy"
          }],
          name : ""
        } ]
      },{
        name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Right lip"
          }, {
            name : "Right oral"
          }, {
            name : "Left lip"
          }, {
            name : "Left oral"
          }, {
            name : "Midline lip"
          }, {
            name : "Midline oral"
          }  ],
          name : ""
        } ]
     
     
     
      }, {
        name : "Tumor focality",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Single focus"
          }, {
            name : "Multiple foci"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor size",
       optional_state  : "required", "options" : [ {
          name : ""
        } ]
        }, {
        name : "Depth of invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Indeterminate"
          } ],
          name : ""
        } ] 
      }, {
        name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Squamous cell carcinoma"
          }, {
            name : "Acantholytic squamous cell carcinoma"
          }, {
            name : "Adenosquamous carcinoma"
          }, {
            name : "Basaloid squamous cell carcinoma"
          }, {
            name : "Carcinoma cuniculatum"
          }, {
            name : "Papillary squamous cell carcinoma"
          }, {
            name : "Spindle cell squamous cell carcinoma"
          }, {
            name : "Verrucous carcinoma"
          }, {
            name : "Lymphoepithelial carcinoma (nonnasopharyngeal)"
          }, {
            name : "Mucoepidermoid carcinoma"
          }, {
            name : "Adenoid cystic carcinoma"
          }, {
            name : "Polymorphous low-grade adenocarcinoma"
          }, {
            name : "Salivary duct carcinoma"
          }, {
            name : "Carcinoma ex pleomorphic adenoma (malignant mixed tumor), Intracapsular (noninvasive)"
          }, {
            name : "Carcinoma ex pleomorphic adenoma (malignant mixed tumor), Minimally invasive "
          }, {
            name : "Carcinoma ex pleomorphic adenoma (malignant mixed tumor), Invasive"
          }, {
            name : "Acinic cell carcinoma"
          }, {
            name : "Adenocarcinoma, not otherwise specified"
          }, {
            name : "Carcinoma, type cannot be determined"
          }, {
            name : "Carcinosarcoma"
          }, {
            name : "(Hyalinizing) clear cell carcinoma"
          }, {
            name : "Cystadenocarcinoma"
          }, {
            name : "Epithelial-myoepithelial carcinoma"
          }, {
            name : "Mucinous adenocarcinoma (colloid carcinoma)"
          }, {
            name : "Myoepithelial carcinoma (malignant myoepithelioma)"
          }, {
            name : "Oncocytic carcinoma"
          }, {
            name : "Typical carcinoid tumor (well differentiated neuroendocrine carcinoma)"
          }, {
            name : "Atypical carcinoid tumor (moderately differentiated neuroendocrine carcinoma)"
          }, {
            name : "Large cell carcinoma, neuroendocrine type (poorly differentiated neuroendocrine carcinoma)"
          }, {
            name : "Small cell carcinoma, neuroendocrine type (poorly differentiated neuroendocrine carcinoma)"
          }, {
            name : "Combined (or composite) small cell carcinoma, neuroendocrine type with (specify type)"
          }, {
            name : "Mucosal melanoma "
          }  ],
          name : ""
        } ]
      }, {
        name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Grade 1/3, Well differentiated"
          }, {
            name : "Grade 2/3, Moderately differentiated"
          }, {
            name : "Grade 3/3, Poorly differentiated"
          } ],
          name : ""
        } ]
       }, {
        description : "include distance/location of closest margin",
        name : "Margins, main part, invasive tumor",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            name : "Positive"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
     }, {
        description : "include distance/location of closest margin",
        name : "Margins, main part, dysplasia/CIS",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            name : "Positive"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
   }, {
        description : " only if submitted separately,  include location of closest margin",
        name : "Margins, separate part(s)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "location",
            inputs_required : [ "" ],
            name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            name : "Positive"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Indeterminate"
          }, {
            name : "Suspicious"
          }, {
            name : "Present"
          }, {
            name : "Present, extensive"
          } ],
          name : ""
        } ]
      }, {
        name : "Perineural invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Present"
          }, {
            name : "Equivocal"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Positive node laterality",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Not applicable"
          }, {
            name : "Right"
          }, {
            name : "Left"
          }, {
            name : "Bilateral"
          } ],
          name : ""
        } ]
      }, {
        name : "Extranodal extension",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Not applicable"
          }, {
            name : "None"
          }, {
            name : "Present"
          }, {
            name : "Equivocal"
          } ],
          name : ""
        } ]
      }, {
        name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            name : ""
          }, {
            description : "pathologic",
            name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            name : "m"
          }, {
            description : "recurrent",
            name : "r"
          }, {
            description : "post-treatment",
            name : "y"
          }, {
            name : "mp"
          }, {
            name : "rp"
          }, {
            name : "yp"
          }, {
            name : "mrp"
          }, {
            name : "myp"
          }, {
            name : "ryp"
          }, {
            name : "mryp"
          } ],
          name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            name : "TX"
          }, {
            description : "CARCINOMA in situ ",
            name : "Tis"
          }, {
            description : "CARCINOMA <= 2 cm AND <= 5mm deep ",
            name : "T1"
          }, {
            description : "CARCINOMA (<= 2cm AND >5mm deep AND <=10 mm deep) OR  (>2 cm AND <= 4cm and <= 10 mm deep)",
            name : "T2"
          }, {
            description : "CARCINOMA > 4cm OR >10 mm deep",
            name : "T3"
          }, {
            description : "CARCINOMA Lip: Tumor invades through cortical bone, inferior alveolar nerve, floor of mouth, or skin of face, ie, chin or nose.  Oral cavity: Tumor invades adjacent structures only (eg, through cortical bone [mandible, maxilla], into deep [extrinsic] muscle of tongue [genioglossus, hyoglossus, palatoglossus, and styloglossus], maxillary sinus, skin of face)",
            name : "T4a"
          }, {
            description : "CARCINOMA Tumor invades masticator space, pterygoid plates, or skull base, and/or encases internal carotid artery",
            name : "T4b"
          }, {
            description : "MELANOMA Mucosal disease",
            name : "T3"
          }, {
            description : "MELANOMA Tumor involving deep soft tissue, cartilage, bone, or overlying skin",
            name : "T4a"
          }, {
            description : "MELANOMA Tumor involving brain, dura, skull base, lower cranial nerves (IX, X, XI, XII), masticator space, carotid artery, prevertebral space, or mediastinal structures",
            name : "T4b"
          } ],
          name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            name : "N0"
          }, {
            description : "CARCINOMA single ipsilateral lymph node <= 3cm AND no extranodal extension",
            name : "N1"
          }, {
            description : "CARCINOMA single ipsilateral or contralateral lymph node either (<3cm with extranodal extension) OR (> 3cm AND <= 6cm and no extranodal extension)",
            name : "N2a"
          }, {
            description : "CARCINOMA multiple ipsilateral lymph node AND <= 6cm",
            name : "N2b"
          }, {
            description : "CARCINOMA contralateral lymph node AND <= 6cm",
            name : "N2c"
          }, {
            description : "CARCINOMA > 6cm no extranodal extension",
            name : "N3a"
          }, {
            description : "CARCINOMA (>3cm AND extranodal extension) OR (multiple nodes with extranodal extension at least in one) OR (single contralateral node <=3cm AND extranodal extension)",
            name : "N3b"
          }, {
            description : "MELANOMA No regional lymph node metastasis",
            name : "N0"
          }, {
            description : "MELANOMA regional metastases",
            name : "N1"
          } ],
          name : "Category (pN)"
        }, {
          group : [ {
            description : "metastases",
            name : "M1"
          }, {
            name : "M (not applicable)"
          }, {
            name : "distant metastasis not applicable"
          } ],
          name : ""
        } ]
      } ]
    }, {
      most_common : true,
      name : "Lung",
      optional : false,
      organ_group : "Thorax",
      properties : [  {
        name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Lobectomy"
          }, {
            name : "Sleeve lobectomy"
          }, {
            name : "Segmentectomy"
          }, {
            name : "Wedge resection"
          }, {
            name : "Bilobectomy"
          }, {
            name : "Pneumonectomy"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Right upper lobe"
          }, {
            name : "Right middle lobe"
          }, {
            name : "Right lower lobe"
          }, {
            name : "Left upper lobe"
          }, {
            name : "Left lower lobe"
          }, {
            name : "Bronchus, main"
          }, {
            name : "Bronchus, lobar "
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor size, total",
       optional_state  : "required", "options" : [ {
          name : ""
        } ]
      }, { description : "for ACA with lepidic component",
        name : "Tumor size, invasive component",
       optional_state  : "required", "options" : [ {
          name : ""
        } ]
      }, {
        name : "Tumor focality",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Single focus"
          }, {
            name : "Multiple foci, same lobe"
          }, {
            name : "Multiple foci, different lobes"
          } ],
          name : ""
        } ]
      }, {
        name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Adenocarcinoma, invasive"
          }, {
            name : "Adenocarcinoma in situ (AIS), nonmucinous"
          }, {
            name : "Adenocarcinoma in situ (AIS), mucinous"
          }, {
            name : "Minimally invasive adenocarcinoma, nonmucinous"
          }, {
            name : "Minimally invasive adenocarcinoma, mucinous"
          }, {
            name : "Invasive adenocarcinoma, lepidic predominant"
          }, {
            name : "Invasive adenocarcinoma, acinar predominant"
          }, {
            name : "Invasive adenocarcinoma, papillary predominant"
          }, {
            name : "Invasive adenocarcinoma, micropapillary predominant"
          } , {
            name : "Invasive adenocarcinoma, solid predominant"
          }, {
            name : "Invasive adenocarcinoma, mucinous predominant"
          }, {
            name : "Mixed invasive mucinous and nonmucinous adenocarcinoma"
          }, {
            name : "Colloid adenocarcinoma"
          }, {
            name : "Fetal adenocarcinoma"
          }, {
            name : "Enteric adenocarcinoma"
          }, {
            name : "Squamous cell carcinoma in situ (SCIS)"
          }, {
            name : "Invasive squamous cell carcinoma"
          }, {
            name : "Invasive squamous cell carcinoma, keratinizing "
          }, {
            name : "Invasive squamous cell carcinoma, non-keratinizing"
          }, {
            name : "Invasive squamous cell carcinoma, basaloid "
          }, {
            name : "Small cell carcinoma"
          }, {
            name : "Large cell neuroendocrine carcinoma"
          }, {
            name : "Typical carcinoid"
          }, {
            name : "Atypical carcinoid"
          }, {
            name : "Large cell carcinoma"
          }, {
            name : "Adenosquamous carcinoma"
          }, {
            name : "Pleomorphic carcinoma"
          }, {
            name : "Spindle cell carcinoma"
          }, {
            name : "Giant cell carcinoma"
          }, {
            name : "Carcinosarcoma"
          }, {
            name : "Pulmonary blastoma"
          }, {
            name : "Lymphoepithelioma-like carcinoma"
          }, {
            name : "NUT carcinoma"
          }, {
            name : "Mucoepidermoid carcinoma"
          }, {
            name : "Adenoid cystic carcinoma"
          }, {
            name : "Epithelial-myoepithelial carcinoma"
          }, {
            name : "Non-small cell carcinoma"
          }],
          name : ""
        } ]
      }, {
        name : "Visceral pleura invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Present"
          }, {
            name : "Equivocal"
          } ],
          name : ""
        } ]
      }, {
        name : "Other tissue(s) involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "No adjacent structures present"
          }, {
            name : "Invades main bronchus"
          }, {
            name : "Invades hilar soft tissue"
          }, {
            name : "Invades parietal pleura"
          }, {
            name : "Invades chest wall"
          }, {
            description : "location",
            inputs_required : [ "" ],
            name : "Present"
          } ],
          name : ""
        } ]
      }, {
        description : "include distance/location of closest margin bronchial, vascular parenchymal",
        name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            name : "Positive"
          } ],
          name : ""
        } ]
      }, {
        name : "Treatment effect, primary site",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Not applicable"
          }, {
            name : "Greater than 10% residual tumor"
          }, {
            name : "Less than or equal to 10% residual tumor"
          }, {
            name : "Not known"
          }  ],
          name : ""
        } ]
      }, {
        name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Indeterminate"
          }, {
            name : "Suspicious"
          }, {
            name : "Present"
          }, {
            name : "Present, extensive"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, sites sampled",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Peribronchial"
          }, {
            name : "None"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, sites involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Peribronchial"
          }, {
            name : "None"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        description : "Mediastinal (N2) nodes only, NOT N1 or peribronchial nodes (ie ipsilateral station 2-9 (upper paratracheal, prevascular retrovascular, lower paratracheal, subaortic, paraaortic,subcarinal, paraesophageal, pulmonary ligament) nodes",
        name : "Extranodal extension",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Present"
          }, {
            name : "Indeterminate"
          }, {
            name : "None"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            name : ""
          }, {
            description : "pathologic",
            name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            name : "m"
          }, {
            description : "recurrent",
            name : "r"
          }, {
            description : "post-treatment",
            name : "y"
          }, {
            name : "mp"
          }, {
            name : "rp"
          }, {
            name : "yp"
          }, {
            name : "mrp"
          }, {
            name : "myp"
          }, {
            name : "ryp"
          }, {
            name : "mryp"
          } ],
          name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            name : "TX"
          }, {
            description : "in situ",
            name : "Tis"
          }, {
            description : "minimally invasive, <= 3cm, predominantly lepidic pattern and <= 5mm invasion",
            name : "T1mi"
          }, {
            description : "<=1cm AND (no involvement of main bronchus, no visceral pleural invasion, no atelectasis or obstructuve pneumonitis extending to hilum) ",
            name : "T1a"
          }, {
            description : "> 1cm AND <= 2cm  AND (no involvement of main bronchus, no visceral pleural invasion, no atelectasis or obstructuve pneumonitis extending to hilum)",
            name : "T1b"
          }, {
            description : ">2 cm AND <=3cm AND (no involvement of main bronchus, no visceral pleural invasion, no atelectasis or obstructuve pneumonitis extending to hilum)",
            name : "T1c"
          }, {
            description : ">3cm AND <= 4 cm  OR (< 3cm AND (involvement of main bronchus, or visceral pleural invasion, or atelectasis or obstructuve pneumonitis extending to hilum))",
            name : "T2a"
          }, {
            description : "> 4cm <= 5cm",
            name : "T2b"
          }, {
            description : "> 5cm AND <= 7cm OR invades parietal pleura, chest wall, phrenic nerve parietal pericardium or separate tumor nodule in the same lobe as the primary ",
            name : "T3"
          }, {
            description : "> 7cm  OR invades diaphragm, mediastinum, heart, great vessels, trachea, recurrent laryngeal nerve, esophagus, vertebral body, carina, or separate tumor nodule in an ipsilateral lobe different from that of the primary",
            name : "T4"
          } ],
          name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            name : "N0"
          }, {
            description : "ipsilateral intrapumonary, peribronchial, and/or station 10-14 (hilar, interlobar, lobar, segmental and subsegmental) nodes",
            name : "N1"
          }, {
            description : "ipsilateral station 2-9 (upper paratracheal, prevascular retrovascular, lower paratracheal, subaortic, paraaortic,subcarinal, paraesophageal, pulmonary ligament) nodes",
            name : "N2"
          }, {
            description : "ipsilateral/contralateral station 1 (supraclavicular, scalene) nodes OR contralateral station 2-14 nodes",
            name : "N3"
          } ],
          name : "Category (pN)"
        }, {
          group : [ {
            description : "metastases contralateral lung OR plerual or pericardial nodules, OR malignant pleural or pericaridal effusions",
            name : "M1a"
          }, {
            description : "single extrathoracic metastasis in a single organ including involvement of a single nonregional node",
            name : "M1b"
          }, {
            description : "multiple extrathoracic metastases in a single or multiple organs",
            name : "M1c"
          }, {
            name : "M (not applicable)"
          }, {
            name : "distant metastasis not applicable"
          } ],
          name : ""
        } ]
      }, {
        
        name : "Ancillary studies ordered",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "reflex all lung non-small cell carcinomas except squamous cell ca",
            name : "EGFR, ROS1, ALK, BRAF, MET exon 14 deletion, and PDL1"
          }, {
            description : "squamous cell carcinomas",
            name : "PDL1"
          }, {
            name : "None"
          }, {
            name : "Not applicable"
          }, {
            inputs_required : [ "" ],
            name : "See case"
          } ],
          name : ""
        } ]
      }, {
        description : "Add billing codes G9422 for NSCC",
        name : "ICD10",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "C34.90"
          } ],
          name : ""
        } ]
      } ]
    }, {
      most_common : false,
      name : "Lymphoma, Hodgkin",
      optional : true,
      organ_group : "Hematologic",
      properties : [ {
        name : "Specimen",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Lymph node"
          } ],
          name : ""
        } ]
      }, {
        name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Biopsy"
          }, {
            name : "Resection"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor location",
       optional_state  : "required", "options" : [ {
          name : ""
        } ]
      }, {
        name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Classical Hodgkin lymphoma"
          }, {
            name : "Nodular lymphocyte predominant Hodgkin lymphoma"
          }, {
            name : "Nodular sclerosis classical Hodgkin lymphoma"
          }, {
            name : "Mixed cellularity classical Hodgkin lymphoma"
          }, {
            name : "Lymphocyte-rich classical Hodgkin lymphoma"
          }, {
            name : "Lymphocyte-depleted classical Hodgkin lymphoma"
          }, {
            name : "Classical Hodgkin lymphoma, histologic subtype cannot be determined"
          }, {
            name : "Hodgkin lymphoma, histologic subtype cannot be determined"
          } ],
          name : ""
        } ]
      }, {
        name : "Immunophenotying",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "Performed",
            inputs_required : [ "" ],
            name : ""
          }, {
            name : "See separate report"
          }, {
            name : "See above"
          }, {
            name : "Not performed"
          } ],
          name : ""
        } ]
      } ]
    }, {
      most_common : false,
      name : "Lymphoma, non-Hodgkin",
      optional : true,
      organ_group : "Hematologic",
      properties : [ {
        name : "Specimen",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Lymph node"
          } ],
          name : ""
        } ]
      }, {
        name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Biopsy"
          }, {
            name : "Resection"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor location",
       optional_state  : "required", "options" : [ {
          name : ""
        } ]
      }, {
        name : "Type (WHO)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "Extended list",
            inputs_required : [ [ "PRECURSOR LYMPHOID NEOPLASMS", "B lymphoblastic leukemia/lymphoma", "B lymphoblastic leukemia/lymphoma with t(9;22)(q34;q11.2); BCR-ABL1", "B lymphoblastic leukemia/lymphoma with t(v;11q23); MLL rearranged", "B lymphoblastic leukemia/lymphoma with t(12;21)(p13;q22); TEL-AML1 (ETV6-RUNX1", "B lymphoblastic leukemia/lymphoma with hyperdiploidy", "B lymphoblastic leukemia/lymphoma with hypodiploidy (hypodiploid acute lymphoblastic leukemia/lymphoma [ALL])", "B lymphoblastic leukemia/lymphoma with t(5;14)(q31;q32); IL3-IGH", "B lymphoblastic leukemia/lymphoma with t(1;19)(q23;p13.3); E2A-PBX1 (TCF3-PBX1)", "T lymphoblastic leukemia/lymphoma", "", "MATURE B CELL NEOPLASMS", "B-cell lymphoma", "Chronic lymphocytic leukemia/small lymphocytic lymphoma", "B-cell prolymphocytic leukemia", "Splenic B-cell marginal zone lymphoma", "Hairy cell leukemia", "Splenic B-cell lymphoma/leukemia, unclassifiable", "Splenic diffuse red pulp small B-cell lymphoma", "Hairy cell leukemia-variant", "Lymphoplasmacytic lymphoma", "Gamma heavy chain disease", "Mu heavy chain disease", "Alpha heavy chain disease", "Plasma cell myeloma", "Solitary plasmacytoma of bone", "Extraosseous plasmacytoma", "Extranodal marginal zone lymphoma of mucosa-associated lymphoid tissue (MALT lymphoma) ", "Nodal marginal zone lymphoma", "Pediatric nodal marginal zone lymphoma", "Follicular lymphoma", "Pediatric follicular lymphoma", "Primary intestinal follicular lymphoma", "Primary cutaneous follicle center lymphoma", "Mantle cell lymphoma", "Diffuse large B-cell lymphoma (DLBCL)", "T cell/histiocyte-rich large B-cell lymphoma", "Primary DLBCL of the central nervous system (CNS)", "Primary cutaneous DLBCL, leg type", "Epstein-Barr virus (EBV)-positive DLBCL of the elderly", "DLBCL associated with chronic inflammation", "Lymphomatoid granulomatosis", "Primary mediastinal (thymic) large B-cell lymphoma", "Intravascular large B-cell lymphoma", "Anaplastic lymphoma kinase (ALK)-positive large B-cell lymphoma", "Plasmablastic lymphoma", "Large B-cell lymphoma arising in HHV8-associated multicentric Castleman disease", "Primary effusion lymphoma", "Burkitt lymphoma", "B-cell lymphoma, unclassifiable, with features intermediate between diffuse large B-cell lymphoma and Burkitt lymphoma", "B-cell lymphoma, unclassifiable, with features intermediate between diffuse large B-cell lymphoma and classical Hodgkin lymphoma", "", "MATURE T AND NK CELL NEOPLASMS", "T-cell lymphoma", "T-cell prolymphocytic leukemia", "T-cell large granular lymphocytic leukemia", "Chronic lymphoproliferative disorder of NK cells", "Aggressive NK-cell leukemia", "Systemic EBV-positive T-cell lymphoproliferative disease of childhood", "Hydroa vacciniforme-like lymphoma ", "Adult T-cell leukemia/lymphoma ", "Extranodal NK/T-cell lymphoma, nasal type", "Enteropathy-associated T-cell lymphoma", "Hepatosplenic T-cell lymphoma", "Subcutaneous panniculitis-like T-cell lymphoma", "Primary cutaneous anaplastic large cell lymphoma", "Lymphomatoid papulosis", "Primary cutaneous gamma-delta T-cell lymphoma", "Primary cutaneous CD8-positive aggressive epidermotropic cytotoxic T-cell lymphoma", "Primary cutaneous CD4-positive small/medium T-cell lymphoma", "Peripheral T-cell lymphoma, NOS", "Angioimmunoblastic T-cell lymphoma", "Anaplastic large cell lymphoma, ALK-positive", "Anaplastic large cell lymphoma, ALK-negative", "", "HISTIOCYTIC AND DENDRITIC NEOPLASMS", "Histiocytic sarcoma", "Langerhans cell histiocytosis", "Langerhans cell sarcoma", "Interdigitating dendritic cell sarcoma", "Follicular dendritic cell sarcoma", "Fibroblastic reticular cell tumor", "Equivocal dendritic cell tumor", "Disseminated juvenile xanthogranuloma", "", "POST-TRANSPLANT LYMPHOPROLIFERATIVE DISORDERS", "Plasmacytic hyperplasia", "Infectious mononucleosis-like PTLD", "Polymorphic PTLD", "Monomorphic PTLD (B- and T/NK-cell types)", "Classical Hodgkin lymphoma type PTLD" ] ],
            name : ""
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Immunophenotyping",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "Performed",
            inputs_required : [ "" ],
            name : ""
          }, {
            name : "See separate report"
          }, {
            name : "See above"
          }, {
            name : "Not performed"
          } ],
          name : ""
        } ]
      } ]
    }, {
      most_common : false,
      name : "Major Salivary Glands",
      optional : false,
      organ_group : "Head and Neck",
      properties : [ {
        name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Excision"
          }, {
            name : "Parotidectomy, superficial lobe "
          }, {
            name : "Parotidectomy, superficial lobe "
          }, {
            name : "Parotidectomy, deep lobe "
          }, {
            name : "Parotidectomy, total"
          }, {
            name : "Submandibular gland resection"
          }, {
            name : "Sublingual gland resection"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Right parotid gland"
          }, {
            name : "Right parotid gland, superficial lobe "
          }, {
            name : "Right parotid gland, deep lobe "
          }, {
            name : "Right submandibular gland"
          }, {
            name : "Right sublingual gland"
          }, {
            name : "Left parotid gland"
          }, {
            name : "Left parotid gland, superficial lobe "
          }, {
            name : "Left parotid gland, deep lobe "
          }, {
            name : "Left submandibular gland"
          }, {
            name : "Left sublingual gland"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor focality",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Single focus"
          }, {
            name : "Multiple foci"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor size",
       optional_state  : "required", "options" : [ {
          name : ""
        } ]
      }, {
        name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
             description : "PAS-d+, DOG1+",
            name : "Acinic cell carcinoma"
          }, {
             description : "CD117+, MIB1+, bilaminar with CK7 and p63",
            name : "Adenoid cystic carcinoma"
          }, {
            name : "Adenocarcinoma, (NOS)"
          }, {
             description : "beta catenin- (basal cell adenoma beta catenin+)",
            name : "Basal cell adenocarcinoma"
          }, {
            name : "Carcinoma ex pleomorphic adenoma (malignant mixed tumor)"
          }, {
            name : "Carcinoma ex pleomorphic adenoma (malignant mixed tumor), Minimally invasive "
          }, {
            name : "Carcinoma ex pleomorphic adenoma (malignant mixed tumor), Invasive"
          }, {
            name : "Carcinosarcoma (true malignant mixed tumor)"
          }, {
             description : "p63-, hyalinizing clear cell carcinoma p63+, EWSR1",
            name : "Clear cell adenocarcinoma"
          }, {
            name : "Cystadenocarcinoma"
          }, {
             description : "DOG1+/-, CD117+, GFAP +/-",
            name : "Epithelial-myoepithelial carcinoma"
          }, {
            
            name : "Large cell carcinoma"
          }, {
              description : "PRKD1",
            name : "Low-grade cribriform cystadenocarcinoma "
          }, {
            name : "Lymphoepithelial carcinoma"
          }, {
             description : "Mammoglobin +, ETV6",
            name : "Mammary analogue secretory carcinoma"
          }, {
            name : "Metastasizing pleomorphic adenoma"
          }, {
             description : "CRTC1-MAML2 fusion, high grade either Her2Neu+ or EGFR+",
            name : "Mucoepidermoid carcinoma"
          }, {
            name : "Mucinous adenocarcinoma (colloid carcinoma)"
          }, {
            name : "Myoepithelial carcinoma (malignant myoepithelioma)"
          }, {
            name : "Oncocytic carcinoma"
          }, {
             description : "CD117+, GFAP+, PRKD1",
            name : "Polymorphous low-grade adenocarcinoma "
          }, {
             description : "Her2Neu+, AR+, ER-, PIK3CA+",
            name : "Salivary duct carcinoma"
          }, {
            name : "Sebaceous adenocarcinoma"
          }, {
            name : "Sebaceous lymphadenocarcinoma"
          }, {
             description : "Her2Neu (focal)",
            name : "Sialoblastoma "
          }, {
            name : "Small cell (neuroendocrine) carcinoma"
          }, {
            name : "Squamous cell carcinoma, primary "
          }, {
            name : "Undifferentiated carcinoma, large cell type "
          } ],
          name : ""
        } ]
      }, {
        name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Grade 1/3, low grade"
          }, {
            name : "Grade 2/3, intermediate grade"
          }, {
            name : "Grade 3/3, high grade"
          } ],
          name : ""
        } ]
      }, {
        name : "Extent, macroscopic",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Limited to salivary gland"
          }, {
            name : "Invades regional adipose tissue"
          }, {
            name : "Invades large nerve"
          }, {
             description : "specify",
              inputs_required : [ "" ],
            name : "invades other organs"
          } ],
          name : ""
        } ]
      }, {
        description : "include distance/location of closest margin",
        name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            name : "Positive"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Indeterminate"
          }, {
            name : "Suspicious"
          }, {
            name : "Present"
          }, {
            name : "Present, extensive"
          } ],
          name : ""
        } ]
      }, {
        name : "Perineural invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Present"
          }, {
            name : "Equivocal"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Positive node laterality",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Not applicable"
          }, {
            name : "Right"
          }, {
            name : "Left"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Extranodal extension",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Not applicable"
          }, {
            name : "None"
          }, {
            name : "Present"
          }, {
            name : "Equivocal"
          } ],
          name : ""
        } ]
      }, {
        name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            name : ""
          }, {
            description : "preliminary/pathologic",
            name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            name : "m"
          }, {
            description : "recurrent",
            name : "r"
          }, {
            description : "post-treatment",
            name : "y"
          }, {
            name : "mp"
          }, {
            name : "rp"
          }, {
            name : "yp"
          }, {
            name : "mrp"
          }, {
            name : "myp"
          }, {
            name : "ryp"
          }, {
            name : "mryp"
          } ],
          name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            name : "TX"
          }, {
            description : "in situ ",
            name : "Tis"
          }, {
            description : "CARCINOMA <= 2 cm AND no extraparenchymal extension (gross but not microscopic soft tissue invasion)",
            name : "T1"
          }, {
            description : "CARCINOMA > 2cm AND <= 4 cm AND no extraparenchymal extension (gross but not microscopic soft tissue invasion)",
            name : "T2"
          }, {
            description : "CARCINOMA > 4cm OR extraparenchymal extension (gross but not microscopic soft tissue invasion) ",
            name : "T3"
          }, {
            description : "CARCINOMA Tumor invades skin, mandible ear canal and or facial nerve",
            name : "T4a"
          }, {
            description : "CARCINOMA Tumor invades skull base and or pterygoid plates and or encases carotid artery",
            name : "T4b"
          } ],
          name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            name : "N0"
          }, {
            description : "CARCINOMA single ipsilateral lymph node <= 3cm AND no extranodal extension",
            name : "N1"
          }, {
            description : "CARCINOMA single ipsilateral lymph node either (<3cm with extranodal extension) OR (> 3cm AND <= 6cm and no extranodal extension)",
            name : "N2a"
          }, {
            description : "CARCINOMA multiple ipsilateral lymph node AND <= 6cm",
            name : "N2b"
          }, {
            description : "CARCINOMA contralateral lymph node AND <= 6cm",
            name : "N2c"
          }, {
            description : "CARCINOMA > 6cm no extranodal extension",
            name : "N3a"
          }, {
            description : "CARCINOMA (>3cm AND extranodal extension) OR (multiple nodes with extranodal extension at least in one) OR (single contralateral node <=3cm AND extranodal extension)",
            name : "N3b"
          } ],
          name : "Category (pN)"
        }, {
          group : [ {
            description : "metastases",
            name : "M1"
          }, {
            name : "M (not applicable)"
          }, {
            name : "distant metastasis not applicable"
          } ],
          name : ""
        } ]
      } ]
    }, {
      most_common : false,
      name : "Mesothelioma, pleural",
      optional : false,
      organ_group : "Thorax",
      properties : [  {
        name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Right pleural decortication"
          }, {
            name : "Right pleurectomy "
          }, {
            name : "Right extrapleural pneumonectomy"
          }, {
            name : "Left pleural decortication "
          }, {
            name : "Left pleurectomy "
          }, {
            name : "Left extrapleural pneumonectomy"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor location ",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Parietal pleura"
          }, {
            name : "Visceral pleura"
          }, {
            name : "Visceral and parietal pleura"
          }, {
            name : "Diaphragm"
          }, {
            name : "Visceral and parietal pleura and diaphragm"
          } ],
          name : ""
        } ]
      }, {
        name : "Focality",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Single focus"
          }, {
            name : "Multiple foci "
          } ],
          name : ""
        } ]
      }, {
        name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Epithelioid mesothelioma"
          }, {
            name : "Sarcomatoid mesothelioma"
          }, {
            name : "Biphasic mesothelioma"
          }, {
            name : "Desmoplastic mesothelioma"
          } ],
          name : ""
        } ]
      }, {
        name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Parietal pleura without involvement of ipsilateral visceral pleura "
          }, {
            name : "Parietal pleura with focal involvement of ipsilateral visceral pleura"
          }, {
            name : "Tumor involves all of the ipsilateral pleural surfaces (including fissure)  "
          }, {
            name : "Into but not through diaphragm"
          }, {
            name : "Lung parenchyma "
          }, {
            name : "Endothoracic fascia"
          }, {
            name : "Into mediastinal fat"
          }, {
            name : "Solitary focus invading soft tissue of the chest wall "
          }, {
            name : "Diffuse or multiple foci invading soft tissue of chest wall"
          }, {
            name : "Into but not through the pericardium "
          }, {
            name : "Rib(s)"
          }, {
            name : "Mediastinal organ(s) "
          } ],
          name : ""
        } ]
      }, {
        description : "include distance/location of closest margin",
        name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            name : "Positive"
          } ],
          name : ""
        } ]
      }, {
        name : "Treatment effect, primary site",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Greater than 50% residual viable tumor"
          }, {
            name : "Less than or equal to 50% residual viable tumor"
          }, {
            name : "Indeterminate"
          }, {
            name : "Not known"
          }  ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            name : ""
          }, {
            description : "pathologic",
            name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            name : "m"
          }, {
            description : "recurrent",
            name : "r"
          }, {
            description : "post-treatment",
            name : "y"
          }, {
            name : "mp"
          }, {
            name : "rp"
          }, {
            name : "yp"
          }, {
            name : "mrp"
          }, {
            name : "myp"
          }, {
            name : "ryp"
          }, {
            name : "mryp"
          } ],
          name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            name : "TX"
          }, {
            description : "Tumor limited to ipsilateral parietal pleura with or without mediastinal or diaphragmatic pleural involvement",
            name : "T1"
          }, {
            description : "Tumor involves each of the ipsilateral pleural surfaces (parietal, mediastinal, diaphragmatic, and visceral pleura) with at least 1 of the following features: involvement of diaphragmatic muscle, extension of tumor from visceral pleura into the underlying pulmonary parenchyma ",
            name : "T2"
          }, {
            description : "Locally advanced but potentially resectable tumor that involves all of the ipsilateral pleural surfaces (parietal, mediastinal, diaphragmatic, and visceral pleura), with at least 1 of the following features: involvement of the endothoracic fascia, extension into mediastinal fat, solitary completely resectable focus of tumor extending into the soft tissues of the chest wall, nontransmural involvement of the pericardium ",
            name : "T3"
          }, {
            description : "Locally advanced technically unresectable tumor involving all of the ipsilateral pleural surfaces (parietal, mediastinal, diaphragmatic, and visceral pleura), with at least 1 of the following features: diffuse extension or multifocal masses of tumor in the chest wall with or without associated rib destruction, direct transdiaphragmatic extension to the peritoneum, direct extension to the contralateral pleura, direct extension to mediastinal organs, direct extension into the spine, extension through the internal surface of the pericardium with or without a pericardial effusion, tumor involving the myocardium",
            name : "T4"
          } ],
          name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            name : "N0"
          }, {
            description : "Metastases in the ipsilateral bronchopulmonary or hilar or mediastinal or peridiaphragmatic or pericardial fat pad or intercostal  lymph nodes",
            name : "N1"
          }, {
            description : "Metastases in the contralateral mediastinal, ipsilateral or contralateral supraclavicular lymph nodes ",
            name : "N3"
          } ],
          name : "Category (pN)"
        }, {
          group : [ {
            description : "Distant metastases",
            name : "M1"
          }, {
            name : "M (not applicable)"
          }, {
            name : "distant metastasis not applicable"
          } ],
          name : ""
        } ]
      } ]
    }, {
      most_common : false,
      name : "Nasal Cavity and Paranasal Sinus",
      optional : false,
      organ_group : "Head and Neck",
      properties : [   {
        name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [  {
            name : "Excisional biopsy"
          }, {
            name : "Resection "
          }, {
            name : "Partial maxillectomy "
          }, {
            name : "Radical maxillectomy"
          }, {
            name : "Resection, and neck (lymph node) dissection  "
          }, {
            name : "Partial maxillectomy, and neck (lymph node) dissection  "
          }, {
            name : "Radical maxillectomy, and neck (lymph node) dissection "
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Right nasal cavity"
          }, {
            name : "Right nasal cavity, septum"
          }, {
            name : "Right nasal cavity, floor"
          }, {
            name : "Right nasal cavity, lateral wall"
          }, {
            name : "Right nasal cavity, vestibule"
          }, {
            name : "Right paranasal sinus(es), maxillary"
          }, {
            name : "Right paranasal sinus(es), ethmoid"
          }, {
            name : "Right paranasal sinus(es), frontal"
          }, {
            name : "Right paranasal sinus(es), sphenoid "
          }, {
            name : "Left nasal cavity"
          }, {
            name : "Left nasal cavity, septum"
          }, {
            name : "Left nasal cavity, floor"
          }, {
            name : "Left nasal cavity, lateral wall"
          }, {
            name : "Left nasal cavity, vestibule"
          }, {
            name : "Left paranasal sinus(es), maxillary"
          }, {
            name : "Left paranasal sinus(es), ethmoid"
          }, {
            name : "Left paranasal sinus(es), frontal"
          }, {
            name : "Left paranasal sinus(es), sphenoid "
          }, {
            name : "Midline nasal cavity"
          }, {
            name : "Midline nasal cavity, septum"
          }, {
            name : "Midline nasal cavity, floor"
          }, {
            name : "Midline nasal cavity, lateral wall"
          }, {
            name : "Midline nasal cavity, vestibule"
          }, {
            name : "Midline paranasal sinus(es), maxillary"
          }, {
            name : "Midline paranasal sinus(es), ethmoid"
          }, {
            name : "Midline paranasal sinus(es), frontal"
          }, {
            name : "Midline paranasal sinus(es), sphenoid "
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor focality",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Single focus"
          }, {
            name : "Multiple foci"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor size",
       optional_state  : "required", "options" : [ {
          name : ""
        } ]
      }, {
        name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Squamous cell carcinoma"
          }, {
            name : "Squamous cell carcinoma, keratinizing"
          }, {
            name : "Squamous cell carcinoma, nonkeratinizing"
          }, {
            name : "Adenosquamous carcinoma"
          }, {
            name : "Basaloid squamous cell carcinoma"
          }, {
            name : "Papillary squamous cell carcinoma"
          }, {
            name : "Spindle cell squamous carcinoma"
          }, {
            name : "Verrucous carcinoma"
          }, {
            name : "Lymphoepithelial carcinoma (non-nasopharyngeal)"
          }, {
            name : "Sinonasal undifferentiated carcinoma (SNUC)"
          }, {
            name : "NUT carcinoma"
          }, {
            name : "Adenocarcinoma, Intestinal type"
          }, {
            name : "Adenocarcinoma, Non-intestinal type"
          }, {
            name : "Acinic cell carcinoma"
          }, {
            name : "Adenoid cystic carcinoma"
          }, {
            name : "Adenocarcinoma, not otherwise specified (NOS)"
          }, {
            name : "Carcinoma ex pleomorphic adenoma (malignant mixed tumor)"
          }, {
            name : "Clear cell adenocarcinoma"
          }, {
            name : "Epithelial-myoepithelial carcinoma"
          }, {
            name : "Mucoepidermoid carcinoma"
          }, {
            name : "Myoepithelial carcinoma (malignant myoepithelioma)"
          }, {
            name : "Oncocytic carcinoma"
          }, {
            name : "Polymorphous low-grade adenocarcinoma"
          }, {
            name : "Salivary duct carcinoma"
          }, {
            name : "Typical carcinoid tumor (well differentiated neuroendocrine carcinoma)"
          }, {
            name : "Atypical carcinoid tumor (moderately differentiated neuroendocrine carcinoma)"
          }, {
            name : "Small cell carcinoma (poorly differentiated neuroendocrine carcinoma)"
          }, {
            name : "Combined (or composite) small cell carcinoma, neuroendocrine type"
          }, {
            name : "Mucosal malignant melanoma"
          } ],
          name : ""
        } ]
      }, {
        name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Grade 1/3, Well differentiated"
          }, {
            name : "Grade 2/3, Moderately differentiated"
          }, {
            name : "Grade 3/3, Poorly differentiated "
          } ],
          name : ""
        } ]
      }, {
        description : "include distance/location of closest margin",
        name : "Margins, invasive tumor",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            name : "Positive"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        description : "include distance/location of closest margin",
        name : "Margins, dysplasia/CIS",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            name : "Positive"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Indeterminate"
          }, {
            name : "Suspicious"
          }, {
            name : "Present"
          }, {
            name : "Present, extensive"
          } ],
          name : ""
        } ]
      }, {
        name : "Perineural invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Present"
          }, {
            name : "Equivocal"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Positive node laterality ",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Not applicable"
          }, {
            name : "Right"
          }, {
            name : "Left"
          }, {
            name : "Bilateral"
          } ],
          name : ""
        } ]
      }, {
        name : "Size of largest metastasis",
       optional_state  : "required", "options" : [ {
          name : ""
        } ]
      }, {
        name : "Extranodal Extension ",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Not applicable"
          }, {
            name : "None"
          }, {
            name : "Present"
          }, {
            name : "Equivocal"
          } ],
          name : ""
        } ]
      }, {
        name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            name : ""
          }, {
            description : "pathologic",
            name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            name : "m"
          }, {
            description : "recurrent",
            name : "r"
          }, {
            description : "post-treatment",
            name : "y"
          }, {
            name : "mp"
          }, {
            name : "rp"
          }, {
            name : "yp"
          }, {
            name : "mrp"
          }, {
            name : "myp"
          }, {
            name : "ryp"
          }, {
            name : "mryp"
          } ],
          name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            name : "TX"
          }, {
            description : "MAXILLARY SINUS, Tumor limited to maxillary sinus mucosa with no erosion or destruction of bone ",
            name : "T1"
          }, {
            description : "MAXILLARY SINUS, Tumor causing bone erosion or destruction including extension into the hard palate and/or middle nasal meatus, except extension to posterior wall of maxillary sinus and pterygoid plates ",
            name : "T2"
          }, {
            description : "MAXILLARY SINUS, Tumor invades any of the following: bone of the posterior wall of maxillary sinus, subcutaneous tissues, floor or medial wall of orbit, pterygoid fossa, ethmoid sinuses",
            name : "T3"
          }, {
            description : "MAXILLARY SINUS, Moderately advanced local disease. Tumor invades anterior orbital contents, skin of cheek, pterygoid plates, infratemporal fossa, cribriform plate, sphenoid or frontal sinuses",
            name : "T4a"
          }, {
            description : "MAXILLARY SINUS, Very advanced local disease. Tumor invades any of the following: orbital apex, dura, brain, middle cranial fossa, cranial nerves other than maxillary division of trigeminal nerve (V2), nasopharynx, or clivus",
            name : "T4b"
          }, {
            description : "NASAL CAVITY AND ETHMOID SINUS, Tumor restricted to any one subsite, with our without bone invasion ",
            name : "T1"
          }, {
            description : "NASAL CAVITY AND ETHMOID SINUS, Tumor invading two subsites in a single region or extending to involve an adjacent region within the nasoethmoidal complex, with our without bone invasion ",
            name : "T2"
          }, {
            description : "NASAL CAVITY AND ETHMOID SINUS, Tumor extends to invade the medial wall or floor of the orbit, maxillary sinus, palate, or cribriform plate",
            name : "T3"
          }, {
            description : "NASAL CAVITY AND ETHMOID SINUS, Moderately advanced local disease Tumor invades any of the following:  anterior orbital contents, skin of nose or cheek, minimal extension to anterior cranial fossa, pterygoid plates, sphenoid or frontal sinuses",
            name : "T4a"
          }, {
            description : "NASAL CAVITY AND ETHMOID SINUS, Very advanced local disease. Tumor invades any of the following:  orbital apex, dura, brain, middle cranial fossa, cranial nerves other than maxillary division of trigeminal nerve (V2), nasopharynx, or clivus",
            name : "T4b"
          }, {
            description : "MELANOMA, Mucosal disease",
            name : "T3"
          }, {
            description : "MELANOMA, Moderately advanced disease. Tumor involving deep soft tissue, cartilage, bone, or overlying skin ",
            name : "T4a"
          }, {
            description : "MELANOMA, Very advanced disease. Tumor involving brain, dura, skull base, lower cranial nerves (IX, X, XI, XII), masticator space, carotid artery, prevertebral space, or mediastinal structures",
            name : "T4b"
          } ],
          name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            name : "N0"
          }, {
            description : "CARCINOMA Metastasis in a single ipsilateral lymph node, 3 cm or less in greatest dimensiona, AND no extranodal extension",
            name : "N1"
          }, {
            description : "CARCINOMA Metastasis in a (single ipsilateral lymph node <= 3mc AND extranodal extension) OR, (more than 3 cm but not more than 6 cm in greatest dimension, AND no extranodal extenison) ",
            name : "N2a"
          }, {
            description : "CARCINOMA Metastasis in multiple ipsilateral lymph nodes, none more than 6 cm in greatest dimension AND no extrandoal extension",
            name : "N2b"
          }, {
            description : "CARCINOMA Metastasis in bilateral or contralateral lymph nodes, none more than 6 cm in greatest dimension AND no extranodal extension",
            name : "N2c"
          }, {
            description : "CARCINOMA Metastasis in a lymph node more than 6 cm in greatest dimension AND no extranodal extension",
            name : "N3a"
          }, {
            description : "CARCINOMA Metastasis in (a single ipsilateral node > 3cm AND extranodal extension) OR ( multiple ipsilatearl, contralateral or bilateral nodes AND extranodal extension OR (single contralateral node <=3cm AND extranodal extension)",
            name : "N3b"
          }, {
            description : "MELANOMA, regional metastases",
            name : "N1"
          } ],
          name : "Category (pN)"
        }, {
          group : [ {
            description : "metastases",
            name : "M1"
          }, {
            name : "M (not applicable)"
          }, {
            name : "distant metastasis not applicable"
          } ],
          name : ""
        } ]
      } ]
  
   }, {
      most_common : false,
      name : "Neuroblastoma",
      optional : true,
      organ_group : "Pediatric",
      properties : [ {
        name : "Specimen",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Adrenal/periadrenal"
          }, {
            name : "Retroperitoneal, nonadrenal"
          }, {
            name : "Thoracic paraspinal"
          }, {
            name : "Cervical "
          } ],
          name : ""
        } ]
      }, {
        name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Resection"
          }, {
            name : "Incisional biopsy"
          } ],
          name : ""
        } ]
     
      }, {
        name : "Tumor size",
       optional_state  : "required", "options" : [ {
          name : ""
        } ]
    
      }, {
        name : "Patient Age ",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "<18 months"
          }, {
            name : "≥18 months and <5 years "
          }, {
            name : "≥5 years "
          }, {
            name : "Equivocal "
          } ],
          name : ""
        } ]
      }, {
        name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Neuroblastoma"
          }, {
            name : "Ganglioneuroblastoma Nodular subtype "
          }, {
            name : "Ganglioneuroblastoma Intermixed subtype "
          }, {
            name : "Ganglioneuroma "
          }, {
            name : "Neuroblastic tumor, unclassifiable"
          }, {
            name : "Equivocal "
          } ],
          name : ""
        } ]
      }, {
        name : "Degree of Differentiation ",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Undifferentiated"
          }, {
            name : "Poorly differentiated "
          }, {
            name : "Differentiating "
          }, {
            name : "Not applicable "
          }, {
            name : "Equivocal "
          } ],
          name : ""
        } ]
      }, {
        name : "Mitotic-Karyorrhectic Index (MKI) ",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Low (<100 per 5000 cells; <2%)"
          }, {
            name : "Intermediate (100-200 per 5000 cells; 2%-4%) "
          }, {
            name : "High (>200 per 5000 cells; >4%) "
          }, {
            name : "Not applicable "
          }, {
            name : "Equivocal "
          } ],
          name : ""
        } ]
      }, {
        name : "Treatment History ",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "No known presurgical chemotherapy"
          }, {
            name : "Presurgical chemotherapy given "
          }, {
            name : "Indeterminate "
          }, {
            name : "Not known"
          }  ],
          name : ""
        } ]
      }, {
        name : "International Neuroblastoma Pathology Classification (INPC)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "Any age; ganglioneuroma (Schwannian stroma-dominant); maturing or mature OR Any age; ganglioneuroblastoma, intermixed (Schwannian stroma-rich) OR Less than 18 months old; neuroblastoma (Schwannian stroma-poor) or nodular ganglioneuroblastoma; poorly differentiated or differentiating subtypes with low or intermediate mitosis-karyorrhexis index (MKI)  OR 18 months up to less than 5 years old; neuroblastoma (Schwannian stroma-poor) or nodular ganglioneuroblastoma; differentiating subtype and low MKI",
            name : "Favorable Histopathology"
          }, {
            description : "Any age; neuroblastoma (Schwannian stroma-poor) or nodular ganglioneuroblastoma with undifferentiated histology and any MKI OR Less than 18 months old; neuroblastoma (Schwannian stroma-poor) or nodular ganglioneuroblastoma with poorly differentiated or differentiating subtypes with high MKI OR 18 months up to less than 5 years old; neuroblastoma (Schwannian stroma-poor) or nodular ganglioneuroblastoma; poorly differentiated and any MKI, or differentiating and intermediate or high MKI OR Equal to or greater than 5 years old; neuroblastoma (Schwannian stroma-poor) or nodular ganglioneuroblastoma; any subtype and any MKI",
            name : "Unfavorable Histopathology"
          }, {
            name : "Equivocal"
          }, {
            name : "Not applicable  "
          } ],
          name : ""
        } ]
   
      }, {
        name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Encapsulated"
          }, {
            name : "Extracapsular extension without adjacent organ involvement "
          }, {
            name : "Extension into adjacent organs "
          }, {
            name : "Extension into spinal canal "
          }, {
            name : "Equivocal "
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
       
        name : "Distant metastases",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            description : "location",
            inputs_required : [ "" ],
            name : "Present"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
         description : "required for all tumors except ganglioneuroma",
        name : "MYCN Amplification Status  ",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Not amplified"
          }, {
            name : "Amplified "
          }, {
            name : "Gain"
          }, {
            name : "Pending"
          }, {
            name : "Equivocal "
          } ],
          name : ""
        } ]
      } ]
    }, {
      most_common : false,
      name : "Ocular hematopoietic neoplasms",
      optional : true,
      organ_group : "Hematologic",
      properties : [ {
        name : "Specimen",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Conjunctiva"
          }, {
            name : "Orbital soft tissue (orbit) "
          }, {
            name : "Lacrimal gland"
          }, {
            name : "Lacrimal sac or nasolacrimal duct "
          }, {
            name : "Eyelid"
          } ],
          name : ""
        } ]
      }, {
        name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Biopsy"
          }, {
            name : "Resection "
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph Node Sampling ",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "preauricular/parotid, submandibular, or cervical",
            name : "Regional lymph node(s) "
          }, {
            description : "lymph nodes from the trunk, eg, mediastinal, para-aortic",
            name : "Central lymph node(s)  "
          }, {
            description : "lymph nodes from distant sites other than central",
            name : "Peripheral lymph node(s)  "
          }, {
            name : "Equivocal"
          } ],
          name : ""
        } ]
      }, {
        name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Extranodal marginal zone lymphoma of mucosa-associated lymphoid tissue (MALT lymphoma)"
          }, {
            name : "Follicular lymphoma"
          }, {
            name : "Diffuse large B-cell lymphoma, not otherwise specified (NOS)"
          }, {
            name : "Mantle cell lymphoma"
          }, {
            name : "Chronic lymphocytic leukemia/small lymphocytic lymphoma"
          }, {
            name : "Lymphoplasmacytic lymphoma"
          } ],
          name : ""
        } ]
      }, {
        name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            name : ""
          }, {
            description : "pathologic",
            name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            name : "m"
          }, {
            description : "recurrent",
            name : "r"
          }, {
            description : "post-treatment",
            name : "y"
          }, {
            name : "mp"
          }, {
            name : "rp"
          }, {
            name : "yp"
          }, {
            name : "mrp"
          }, {
            name : "myp"
          }, {
            name : "ryp"
          }, {
            name : "mryp"
          } ],
          name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            name : "TX"
          }, {
            description : "Conjunctiva involvement only",
            name : "T1"
          }, {
            description : "Orbital involvement ",
            name : "T2"
          }, {
            description : "Preseptal eyelid involvement ",
            name : "T3"
          }, {
            description : "Beyond orbit (bone, sinus, brain)",
            name : "T4"
          } ],
          name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            name : "N0"
          }, {
            description : "Single lymph node region superior to mediastinum",
            name : "N1a"
          }, {
            description : "2 or more lymph node regions above mediastinum",
            name : "N1b"
          }, {
            description : "Involvement of mediastinum",
            name : "N2"
          }, {
            description : "Involvement of peropheral and central lymph node regions ",
            name : "N3"
          } ],
          name : "Category (pN)"
        }, {
          group : [ {
            description : "Non-contiguous involvement of tissues or organs external to the ocular adnexa (eg, salivary glands, lung, liver)",
            name : "M1a"
          }, {
            description : "Bone marrow involvement",
            name : "M1b"
          }, {
            description : "Both pM1a and pM1b involvement",
            name : "M1c"
          }, {
            name : "M (not applicable)"
          }, {
            name : "distant metastasis not applicable"
          } ],
          name : ""
        } ]
      } ]
    }, {
      most_common : false,
      name : "Ovary Fallopian Tube Peritoneum",
      optional : false,
      organ_group : "Gynecologic",
      properties : [  {
        name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Oophorectomy"
          }, {
            name : "Bilateral oophorectomy"
          }, {
            name : "Unilateral salpingo-oophorectomy"
          }, {
            name : "Bilateral salpingo-oophorectomy"
          }, {
            name : "Salpingectomy"
          }, {
            name : "Hysterectomy and unilateral salpingo-oophorectomy"
          }, {
            name : "Hysterectomy and bilateral salpingo-oophorectomy"
          }, {
            name : "Hysterectomy, bilateral salpingo-oophorectomy, and omentectomy"
          } ],
          name : ""
        } ]
      }, {
        name : "Right ovary integrity",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Not applicable"
          }, {
            name : "Capsule intact"
          }, {
            name : "Capsule ruptured"
          }, {
            name : "Fragmented"
          } ],
          name : ""
        } ]
      }, {
        name : "Left ovary integrity",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Not applicable"
          }, {
            name : "Capsule intact"
          }, {
            name : "Capsule ruptured"
          }, {
            name : "Fragmented"
          } ],
          name : ""
        } ]
      }, {
        name : "Right fallopian tube integrity",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Not applicable"
          }, {
            name : "Capsule intact"
          }, {
            name : "Capsule ruptured"
          }, {
            name : "Fragmented"
          } ],
          name : ""
        } ]
      }, {
        name : "Left fallopian tube integrity",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Not applicable"
          }, {
            name : "Capsule intact"
          }, {
            name : "Capsule ruptured"
          }, {
            name : "Fragmented"
          } ],
          name : ""
        } ]
      }, {
        name : "Primary tumor site",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Right ovary"
          }, {
            name : "Left Ovary"
          }, {
            name : "Bilateral ovaries"
          }, {
            name : "Right fallopian tube"
          }, {
            name : "Left fallopian tube"
          } , {
            name : "Primary peritoneum"
          }],
          name : ""
        } ]
      }, {
        name : "Ovarian surface involvement",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Present"
          }, {
            name : "Equivocal"
          } ],
          name : ""
        } ]
      }, {
        name : "Fallopian tube surface involvement",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Present"
          }, {
            name : "Equivocal"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor size",
       optional_state  : "required", "options" : [ {
          name : ""
        } ]
      }, {
        name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
                   description : "WT1- p53-/focal+, ER +, Pax8+",
            name : "Endometrioid adenocarcinoma"
          }, {
            name : "Endometrioid adenocarcinoma with squamous differentiation"
          }, {
            name : "Endometrioid borderline tumor"
          }, {
            name : "Mucinous adenocarcinoma"
          }, {
            name : "Mucinous borderline tumor"
          }, {
            name : "Seromucinous borderline tumor"
          }, {
                       description : "NapsinA+, HNF-1b +, Pax8+",
            name : "Clear cell adenocarcinoma"
          }, {
               description : "WT1+ p53+ or completely -, ER variable, Pax8+",
            name : "Serous carcinoma"
          }, {
            name : "Serous borderline tumor"
          }, {
            name : "Serous borderline tumor with microinvasion"
          }, {
            name : "Serous borderline tumor-micropapillary variant/noninvasive low-grade serous carcinoma"
          }, {
            name : "Serous tubal intraepithelial carcinoma (STIC)"
          }, {
            name : "Small cell carcinoma"
          }, {
            name : "Large cell neuroendocrine carcinoma"
          }, {
            name : "Carcinosarcoma (MMMT), homologous"
          }, {
            name : "Carcinosarcoma (MMMT), heterologous"
          }, {
            name : "Brenner tumor, borderline"
          }, {
            name : "Brenner tumor malignant"
          }, {
            name : "Granulosa cell tumor"
          }, {
            name : "Sex cord stromal tumor"
          }, {
            name : "Dysgerminoma"
          }, {
            name : "Yolk sac tumor"
          }, {
            name : "Immature teratoma"
          }, {
            name : "Carcinoma arising from a teratoma"
          }, {
            name : "Mixed germ cell tumor"
          }  ],
          name : ""
        } ]
      }, {
        name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "WHO grade 1/3"
          }, {
            name : "WHO grade 2/3"
          }, {
            name : "WHO grade 3/3"
          }, {
            description : "required for serous carcinoma and teratoma",
            name : "Low grade"
          }, {
            description : "required for serous carcinoma and teratoma",
            name : "High grade"
          }, {
             description : "Clear cell tumors, Sertoli Leydig cell tumors",
            name : "Not applicable"
          }  ],
          name : ""
        } ]
      }, {
          description : "Serous tumor implants that were formerly classified as “invasive implants” are now classified as low-grade serous carcinoma of the peritoneum",
        name : "Implants",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Present"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
         description : "R/L ovary, tube, uterus, cervix, pelvic peritoneum, abdominal peritoneum, omentum",
        name : "Other tissue(s) involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          },{
           description : "location",
            inputs_required : [ "" ],
            name : "Positive"
            }],
          name : ""
        } ]
      }, {
        name : "Largest Extrapelvic Peritoneal Focus ",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Not applicable"
          }, {
            name : "Microscopic"
          }, {
            name : "Macroscopic (2 cm or less)"
          }, {
            name : "Macroscopic (greater than 2 cm)"
          } ],
          name : ""
        } ]
      }, {
        name : "Peritoneal fluid/washings",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Not applicable"
          }, {
            name : "Benign"
          }, {
            name : "Atypical"
          }, {
            name : "Suspicious"
          }, {
            name : "Malignant"
          } ],
          name : ""
        } ]
      }, {
        description : "includes as pelvic, external iliac, internal iliac (hypogastric), common iliac, parametrial, obturator, sacral, presacral, para-aortic, and retroperitoneal are considered regional lymph nodes. Although not specifically named by AJCC or FIGO, intra-omental and peri-intestinal lymph nodes, are also regarded as regional lymph nodes for staging purposes ",
        name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
      
        name : "Lymph nodes, # w/ mets > 10mm",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
       
        name : "Lymph nodes, # w/ mets >0.2mm, <= 10mm",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        description : "<= 0.2mm",
        name : "Lymph nodes, # w/ isolated tumor cells",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Size of largest deposit",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Location of largest deposit",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        description : "required only for high-grade serous carcinomas",
        name : "Treatment Effect ",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "No known therapy"
          }, {
            name : "None or minimal response (CRS1)"
          }, {
            name : "Moderate response (CRS 2)"
          }, {
            name : "Marked response with no or minimal residual cancer (CRS 3)"
          }, {
            name : "Indeterminate"
          }, {
            name : "Not applicable"
          }  ],
          name : ""
        } ] 
  
     }, {
        name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            name : ""
          }, {
            description : "pathologic",
            name : "AJCC p"
          }, {
            description : "multiple foci of invasive carcinoma",
            name : "AJCC m"
          }, {
            description : "recurrent",
            name : "AJCC r"
          }, {
            description : "post-treatment",
            name : "AJCC y"
          }, {
            name : "AJCC mp"
          }, {
            name : "AJCC rp"
          }, {
            name : "AJCC yp"
          }, {
            name : "AJCC mrp"
          }, {
            name : "AJCC myp"
          }, {
            name : "AJCC ryp"
          }, {
            name : "AJCC mryp"
          } ],
          name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            name : "TX"
          }, {
            description : "Tumor limited to one ovary (capsule intact) or fallopian tube, no tumor on ovarian or fallopian tube surface; no malignant cells in ascites or peritoneal washings. Serous tubal intraepithelial carcinoma (STIC) should be staged as pT1a if it involves one tube only, as pT1b if it involves both tubes, and as pT1c3 if it is accompanied by positive peritoneal washing washings or ascites. Nonmalignant ascites is not classified. The presence of ascites does not affect staging unless malignant cells are present.",
            name : "T1a"
          }, {
            description : "Tumor limited to both ovaries (capsules intact) or fallopian tubes; no tumor on ovarian or fallopian tube surface; no malignant cells in ascites or peritoneal washings",
            name : "T1b"
          }, {
            description : "Tumor limited to one or both ovaries or fallopian tubes with any of the followingpT1c1:  Surgical spill, Capsule ruptured before surgery or tumor on ovarian or fallopian tube surface, Malignant cells in ascites or peritoneal washings",
            name : "T1c"
          }, {
            description : "Extension and/or implants on uterus and/or fallopian tube(s) and/or ovaries. ",
            name : "T2a"
          }, {
            description : "Extension to and/or implants on other pelvic tissues. ",
            name : "T2b"
          }, {
            description : "Microscopic extrapelvic (above the pelvic brim) peritoneal involvement with or without positive retroperitoneal lymph nodes ",
            name : "T3a"
          }, {
            description : "Macroscopic peritoneal metastasis beyond pelvis 2 cm or less in greatest dimension with or without metastasis to retroperitoneal lymph nodes ",
            name : "T3b"
          }, {
            description : "Macroscopic peritoneal metastasis beyond pelvis more than 2 cm in greatest dimension with or without metastasis to the retroperitoneal lymph nodes (includes extension of tumor to capsule of liver and spleen without parenchymal involvement of either organ)",
            name : "T3c"
          } ],
          name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            name : "N0"
          }, {
            description : "Isolated tumor cells, <=0.2mm",
            name : "N0(i+)"
          }, {
            description : "regional lymph node metastasis <= 10mm",
            name : "N1a"
          }, {
            description : "regional lymph node metastasis, > 10 mm",
            name : "N1b"
          } ],
          name : "Category (pN)"
        }, {
          group : [ {
            description : "Positive pleural effusion",
            name : "M1a"
          }, {
             description : "all other metastases",
            name : "M1b"
          }, {
            name : "M (not applicable)"
          }, {
            name : "distant metastasis not applicable"
          } ],
          name : ""
        } ]
  
    }, {
        name : "Stage FIGO (2015)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "Tumor limited to 1 ovary (capsule intact) or fallopian tube; no tumor on ovarian or fallopian tube surface; no malignant cells in the ascites or peritoneal washings",
            name : "FIGO IA"
          }, {
            description : "Tumor limited to both ovaries (capsules intact) or fallopian tubes; no tumor on ovarian or fallopian tube surface; no malignant cells in the ascites or peritoneal washings",
            name : "FIGO IB"
          }, {
            description : "Surgical spill intraoperatively",
            name : "FIGO IC1"
          }, {
            description : "Capsule ruptured before surgery or tumor on ovarian or fallopian tube surface",
            name : "FIGO IC2"
          }, {
            description : "Malignant cells present in the ascites or peritoneal washings",
            name : "FIGO IC3"
          }, {
            description : "Extension and/or implants on the uterus and/or fallopian tubes and/or ovaries",
            name : "FIGO IIA"
          }, {
            description : "Extension to other pelvic intraperitoneal tissues",
            name : "FIGO IIB"
          }, {
            description : "Positive retroperitoneal lymph nodes only (cytologically or histologically proven)",
            name : "FIGO IIIA1"
          }, {
            description : "Microscopic extrapelvic (above the pelvic brim) peritoneal involvement with or without positive retroperitoneal lymph nodes",
            name : "FIGO IIIA2"
          }, {
            description : "Macroscopic peritoneal metastases beyond the pelvic brim ≤2 cm in greatest dimension, with or without metastasis to the retroperitoneal lymph nodes",
            name : "FIGO IIIB"
          }, {
            description : "Macroscopic peritoneal metastases beyond the pelvic brim >2 cm in greatest dimension, with or without metastases to the retroperitoneal nodes",
            name : "FIGO IIIC"
          }, {
            description : "Pleural effusion with positive cytology",
            name : "FIGO IVA"
          }, {
            description : "Metastases to extra-abdominal organs (including inguinal lymph nodes and lymph nodes outside of abdominal cavity)",
            name : "FIGO IVB"
          }, {
            description : "",
            name : "Not applicable"
          } ],
          name : ""
        } ]
           } ]
      }, {
      most_common : false,
      name : "Pancreas neuroendocrine tumor",
      optional : false,
      organ_group : "Endocrine",
      properties : [  {
        name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Excisional biopsy (enucleation)"
          }, {
            name : "Pancreaticoduodenectomy (Whipple resection), partial pancreatectomy"
          }, {
            name : "Pancreaticoduodenectomy (Whipple resection), total pancreatectomy"
          }, {
            name : "Partial pancreatectomy, pancreatic body "
          }, {
            name : "Partial pancreatectomy, pancreatic tail"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Pancreatic head"
          }, {
            name : "Uncinate process"
          }, {
            name : "Pancreatic body"
          }, {
            name : "Pancreatic tail"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor size",
       optional_state  : "required", "options" : [ {
          name : ""
        } ]
      }, {
        name : "Tumor Focality ",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Single focus"
          }, {
            name : "Multiple foci"
          }, {
            name : "Equivocal"
          } ],
          name : ""
        } ]
      }, {
         description : "For small cell (high grade NET use pancreas carcinoma protocol not this one) ",  
        name : "Type and Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "< 2mitoses/10 hpf and/or Ki67<3% ", 
            name : "Grade 1/3, Well differentiated neuroendocrine tumor, low grade (carcinoid)"
          }, {
            description : ">= 2 AND < 20 mitoses/10 hpf and/or Ki67 >=3 AND <20% ",  
            name : "Grade 2/3, Well differentiated neuroendocrine tumor, intermediate grade (atypical carcinoid)"
          }, {
             description : "> 20 mitoses/10 hpf and/or Ki67 >20% ",  
            name : "Grade 3/3, Well differentiated neuroendocrine tumor"
          } ],
          name : ""
        } ]
      }, {
           description : "mitoses/ 2 mm squared NOT 10 hpf, approximately count 42 hpf and divide by 5", 
        name : "Mitotic rate",
       optional_state  : "required", "options" : [ {
          group : [ {
            
            name : "Less than 2/ 2mm squared"
          }, {
          
            name : "at least 2 and less than 20 /2 mm squared"
          }, {
            
            name : "More than 20 per 2 mm squared"
          } ],
          name : ""
        } ]  
        
      }, {
        name : "Ki67 (Mib1)",
       optional_state  : "required", "options" : [ {
          group : [ {
            
            name : "Less than 3%"
          }, {
          
            name : "at least 3% and less than 20%"
          }, {
            
            name : "More than 20%"
          } ],
          name : ""
        } ]  
        
      }, {
        name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "No evidence of primary tumor"
          }, {
            name : "Tumor is limited to pancreas"
          }, {
            name : "Tumor invades common bile duct"
          }, {
            name : "Tumor invades duodenum "
          }, {
             description : "location",
            inputs_required : [ "" ],
            name : "Tumor directly invades adjacent structures "
          }, {
             description : "location",
            inputs_required : [ "" ],
            name : "Tumor directly invades wall of large vessel "
          } ],
          name : ""
        } ]
      }, {
        description : "include distance/location of closest proximal/distal/bile duct/pancreatic/uncinate margin",
        name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            name : "Positive"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Indeterminate"
          }, {
            name : "Suspicious"
          }, {
            name : "Present"
          }, {
            name : "Present, extensive"
          } ],
          name : ""
        } ]
      }, {
        name : "Perineural invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Present"
          }, {
            name : "Equivocal"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            name : ""
          }, {
            description : "pathologic",
            name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            name : "m"
          }, {
            description : "recurrent",
            name : "r"
          }, {
            description : "post-treatment",
            name : "y"
          }, {
            name : "mp"
          }, {
            name : "rp"
          }, {
            name : "yp"
          }, {
            name : "mrp"
          }, {
            name : "myp"
          }, {
            name : "ryp"
          }, {
            name : "mryp"
          } ],
          name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            name : "TX"
          }, {
            description : "No tumor",
            name : "T0"
          }, {
            description : "Tumor limited to the pancreas, 2 cm or less in greatest dimension ",
            name : "T1"
          }, {
            description : "Tumor limited to the pancreas, > 2cm and <= 4cm",
            name : "T2"
          }, {
            description : "(Tumor limited to pancreas AND > 4cm) OR (Tumor invades duodenum or bile duct",
            name : "T3"
          }, {
            description : "Tumor invades adjacent organs or wall of large vessels ",
            name : "T4"
          } ],
          name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            name : "NX"
          }, {
            description : "No regional lymph node metastases",
            name : "N0"
          }, {
            description : "Metastases to regional lymph nodes",
            name : "N1"
          } ],
          name : "Category (pN)"
        }, {
          group : [ {
            description : "Distant metastases liver",
            name : "M1a"
          }, {
                description : "Distant metastases other than liver",
            name : "M1b"
          }, {
                description : "Distant metastases liver and other",
            name : "M1c"
          }, {
            name : "M (not applicable)"
          }, {
            name : "distant metastasis not applicable"
          } ],
          name : ""
        } ]
      } ]
    }, {
      most_common : false,
      name : "Pancreas Exocrine tumor",
      optional : false,
      organ_group : "Gastrointestinal",
      properties : [ {
        name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Pancreaticoduodenectomy (Whipple resection), partial pancreatectomy"
          }, {
            name : "Pancreaticoduodenectomy (Whipple resection), total pancreatectomy"
          }, {
            name : "Partial pancreatectomy, pancreatic body "
          }, {
            name : "Partial pancreatectomy, pancreatic tail"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Pancreatic head"
          }, {
            name : "Uncinate process"
          }, {
            name : "Pancreatic body"
          }, {
            name : "Pancreatic tail"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor size",
       optional_state  : "required", "options" : [ {
          name : ""
        } ]
      }, {
        name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Adenocarcinoma"
          }, {
            name : "Ductal adenocarcinoma "
          }, {
            name : "Colloid carcinoma (mucinous noncystic carcinoma) "
          }, {
            name : "Signet-ring cell carcinoma "
          }, {
            name : "Adenosquamous carcinoma"
          }, {
            name : "Intraductal papillary-mucinous carcinoma with an associated invasive carcinoma "
          }, {
            name : "Mucinous cystic neoplasm with an associated invasive carcinoma"
          }, {
            name : "Large cell neuroendocrine carcinoma"
          }, {
            name : "Small cell neuroendocrine carcinoma"
          }, {
            name : "Undifferentiated (anaplastic) carcinoma"
          }, {
            name : "Undifferentiated carcinoma with osteoclast-like giant cells"
          }, {
            name : "Acinar cell carcinoma "
          }, {
            name : "Acinar cell cystadenocarcinoma"
          }, {
            name : "Serous cystadenocarcinoma"
          }, {
            name : "Mixed acinar-ductal carcinoma"
          }, {
            name : "Mixed ductal-neuroendocrine carcinoma"
          }, {
            name : "Mixed acinar-neuroendocrine carcinoma"
          }, {
            name : "Mixed acinar-neuroendocrine-ductal carcinoma"
          }, {
            description : "nuclear B-catenin +, cyto E-cad -, PR +, CD10+, Chr -, Syn +/-",
            name : "Solid-pseudopapillary neoplasm "
          }, {
            name : "Hepatoid carcinoma"
          }, {
            name : "Medullary carcinoma"
          } ],
          name : ""
        } ]
      }, {
        name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Grade 1/3, Well differentiated"
          }, {
            name : "Grade 2/3, Moderately differentiated"
          }, {
            name : "Grade 3/3, Poorly differentiated"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "No evidence of primary tumor"
          }, {
            name : "Carcinoma in situ"
          }, {
            name : "Tumor is limited to pancreas"
          }, {
            name : "Tumor invades ampulla of Vater or sphincter of Oddi "
          }, {
            name : "Tumor invades duodenal wall "
          }, {
            name : "Tumor invades peripancreatic soft tissues  "
          }, {
            description : "which",
            inputs_required : [ "" ],
            name : "Tumor invades other adjacent organs or structures  "
          } ],
          name : ""
        } ]
      }, {
        description : "include distance/location of closest proximal/distal/radial/bile duct/uncinate/pancreatic margin",
        name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            name : "Positive"
          } ],
          name : ""
        } ]
      }, {
        name : "Treatment effect, primary site",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "No prior treatment"
          }, {
            name : "Present (score 1-2)"
          }, {
            name : "Poor or no response, score 3"
          }, {
            name : "Indeterminate"
          }, {
            name : "Not applicable"
          }, {
            name : "Not known"
          }  ],
          name : ""
        } ]
      }, {
        name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Indeterminate"
          }, {
            name : "Suspicious"
          }, {
            name : "Present"
          }, {
            name : "Present, extensive"
          } ],
          name : ""
        } ]
      }, {
        name : "Perineural invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Present"
          }, {
            name : "Equivocal"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            name : ""
          }, {
            description : "pathologic",
            name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            name : "m"
          }, {
            description : "recurrent",
            name : "r"
          }, {
            description : "post-treatment",
            name : "y"
          }, {
            name : "mp"
          }, {
            name : "rp"
          }, {
            name : "yp"
          }, {
            name : "mrp"
          }, {
            name : "myp"
          }, {
            name : "ryp"
          }, {
            name : "mryp"
          } ],
          name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            name : "TX"
          }, {
            description : "No tumor",
            name : "T0"
          }, {
            description : "Carcinoma in situ including intraductal tumor",
            name : "Tis"
          }, {
            description : " <= 0.5 cm ",
            name : "T1a"
          }, {
            description : " > 0.5cm AND <= 1cm ",
            name : "T1b"
          }, {
            description : " >1 cm AND <=2 cm  ",
            name : "T1c"
          }, {
            description : "> 2 cm and <=4cm",
            name : "T2"
          }, {
            description : "> 4cm",
            name : "T3"
          }, {
            description : "Tumor involves the celiac axis or the superior mesenteric artery and or common hepatic artery ",
            name : "T4"
          } ],
          name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            name : "N0"
          }, {
            description : "1-3 Metastases to regional lymph nodes",
            name : "N1"
          }, {
            description : "4 or more Metastases to regional lymph nodes",
            name : "N2"
          } ],
          name : "Category (pN)"
        }, {
          group : [ {
            description : "Distant metastases",
            name : "M1"
          }, {
            name : "M (not applicable)"
          }, {
            name : "distant metastasis not applicable"
          } ],
          name : ""
        } ]
       }, {
         description: "adenocarcinoma only",
        name : "MSI IHC and Interpretation",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Intact nuclear expression of MMR proteins (MLH1, MSH2, MSH6, PMS2): No evidence of deficient mismatch repair (low probability of MSI-H)"
          },{
            name : "Loss of nuclear expression of one or more MMR proteins (MLH1, MSH2, MSH6, PMS2): deficient mismatch repair/ high probability of microsatellite instability-high (MSI-H). The presence of MSI-H/deficient mismatch repair may also be an indication for additional testing for Lynch syndrome and genetic counselling."
          }, {
            name : "Pending"
          }, {
            name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            name : "See case "
          }],
          name : ""
        } ]
      } ]
    }, {
      most_common : false,
      name : "Penis",
      optional : false,
      organ_group : "Genitourinary",
      properties : [ {
        name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Incisional biopsy"
          }, {
            name : "Excisional biopsy"
          }, {
            name : "Partial penectomy"
          }, {
            name : "Total penectomy"
          }, {
            name : "Circumcision"
          } ],
          name : ""
        } ]
      }, {
        name : "Foreskin",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Present"
          }, {
            name : "Equivocal"
          } ],
          name : ""
        } ]
     
      }, {
        name : "Tumor location ",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Glans"
          }, {
            name : "Foreskin mucosal surface"
          }, {
            name : "Foreskin skin surface"
          }, {
            name : "Coronal sulcus  "
          }, {
            name : "Skin of the shaft"
          }, {
            name : "Penile urethra"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor size",
       optional_state  : "required", "options" : [ {
          name : ""
        } ]
      
      }, {
        name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Squamous cell carcinoma "
          }, {
            name : "Squamous cell carcinoma, pseudohyperplastic"
          }, {
            name : "Squamous cell carcinoma, pseudoglandular"
          }, {
            name : "Squamous cell carcinoma, verrucous"
          }, {
            name : "Squamous cell carcinoma, carcinoma cuniculatum"
          }, {
            name : "Squamous cell carcinoma, papillary"
          }, {
            name : "Squamous cell carcinoma, verrucous"
          }, {
            name : "Squamous cell carcinoma, sarcomatoid"
          }, {
            name : "Squamous cell carcinoma, basaloid"
          }, {
            name : "Squamous cell carcinoma, papillary-basaloid"
          }, {
            name : "Squamous cell carcinoma, warty"
          }, {
            name : "Squamous cell carcinoma, warty-basaloid"
          }, {
            name : "Squamous cell carcinoma, clear cell"
          }, {
            name : "Squamous cell carcinoma, lymphoepithelioma-like"
          }, {
            name : "Adenosquamous carcinoma"
          }, {
            name : "Paget’s disease"
          }, {
            name : "Adnexal carcinoma "
          }, {
            name : "Clear cell carcinoma"
          } ],
          name : ""
        } ]
      }, {
        name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Grade 1/3, Well differentiated"
          }, {
            name : "Grade 2/3, Moderately differentiated"
          }, {
            name : "Grade 3/3, Poorly differentiated"
          } ],
          name : ""
        } ]
      }, {
        name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            
            name : "No evidence of primary tumor"
          }, {
          
            name : "Carcinoma in situ"
          }, {
           
            name : "Noninvasive localized squamous cell carcinoma "
          }, {
          
            name : "Tumor invades lamina propria"
          }, {
          
            name : "Tumor invades dermis  "
          }, {
          
            name : "Tumor involves dartos"
          }, {
           
            name : "Tumor invades corpus spongiosum"
          }, {
          
            name : "Tumor invades corpus cavernosum"
          }, {
           
            name : "Tumor invades tunica albuginea "
          }, {
            
            name : "Tumor invades Buck’s fascia "
          }, {
            
            name : "Tumor invades penile (distal) urethra"
          }, {
          
            name : "Tumor invades regional skin (pubis, inguinal)"
          }, {
            description : "scrotum, prostate, pubic bone",
             inputs_required : [ "" ],
            name : "Tumor invades into adjacent structures "
          }, {
            description : "specify",
            inputs_required : [ "" ],
            name : "Tumor invades other structures "
          } ],
          name : ""
        } ]
      }, {
        description : "urethral, periurethral tissues, corpus cavernosum, Bucks fascia, skin, coronal sulcus",
        name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            name : "Positive"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
   }, {
        name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Indeterminate"
          }, {
            name : "Suspicious"
          }, {
            name : "Present"
          }, {
            name : "Present, extensive"
          } ],
          name : ""
        } ]
      }, {
        name : "Perineural invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Present"
          }, {
            name : "Equivocal"
          } ],
          name : ""
        } ]
  
       }, {
        name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ] 
  
  }, {
        name : "Lymph nodes, # inguinal involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ] 
  
  }, {
        name : "Positive inguinal lymph node laterality",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Not applicable"
          }, {
            name : "Right"
          }, {
            name : "Left"
          }, {
            name : "Bilateral"
          }, {
            name : "Other"
          } ],
          name : ""
        } ]
         
      }, {
        name : "Extranodal Extension ",
        optional_state : "required",
        "options" : [ {
          group : [ {
            name : "Not applicable"
          }, {
            name : "None"
          }, {
            name : "Present"
          }, {
            name : "Equivocal"
          } ],
          name : ""
        } ]
      }, {
        name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            name : ""
          }, {
            description : "pathologic",
            name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            name : "m"
          }, {
            description : "recurrent",
            name : "r"
          }, {
            description : "post-treatment",
            name : "y"
          }, {
            name : "mp"
          }, {
            name : "rp"
          }, {
            name : "yp"
          }, {
            name : "mrp"
          }, {
            name : "myp"
          }, {
            name : "ryp"
          }, {
            name : "mryp"
          } ],
          name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            name : "TX"
          }, {
            description : "noninvasive papillary or verrucous",
            name : "Ta"
          }, {
            description : "CIS",
            name : "Tis"
          }, {
            description : "Noninvasive verrucous carcinoma ",
            name : "Ta"
          }, {
            description : "Tumor invades subepithelial connective tissue: Glans: Tumor invades lamina propria, Foreskin: Tumor invades dermis, lamina propria, or dartos fascia, Shaft: Tumor invades connective tissue between epidermis and corpora regardless of location, all without lymph vascular invasion, without perineural invasion, and is not poorly differentiated (ie, grade 3-4)",
            name : "T1a"
          }, {
            description : "Tumor invades subepithelial connective tissue:  Glans: Tumor invades lamina propria, Foreskin: Tumor invades dermis, lamina propria, or dartos fascia, Shaft: Tumor invades connective tissue between epidermis and corpora regardless of location, with either lymph vascular invasion, or perineural invasion, or is poorly differentiated",
            name : "T1b"
          }, {
            description : "Tumor invades corpus spongiosum",
            name : "T2"
          }, {
            description : "Tumor invades corpus cavernosum",
            name : "T3"
          }, {
            description : "Tumor invades other adjacent structures (scrotum, prostate, bone)(urethra does not count (still T3)",
            name : "T4"
          } ],
          name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            name : "N0"
          }, {
            description : "Metastasis in a 1-2 unilateral inguinal lymph node, no extranodal extension",
            name : "N1"
          }, {
            description : "Metastasis in 3 or more unilateral inguinal lymph nodes or any bilateral inguinal metastases, no extranodal extension",
            name : "N2"
          }, {
            description : "Extranodal extension of lymph node metastasis or pelvic lymph node(s) unilateral or bilateral",
            name : "N3"
          } ],
          name : "Category (pN)"
        }, {
          group : [ {
            description : "metastases",
            name : "M1"
          }, {
            name : "M (not applicable)"
          }, {
            name : "distant metastasis not applicable"
          } ],
          name : ""
        } ]
       }, {
        description : "p16, HPV",
        name : "Ancillary studies ordered",
       optional_state  : "required", "options" : [ {
          name : ""
        } ]  
      } ]
    }, {
      most_common : false,
      name : "Perihilar Bile Ducts",
      optional : false,
      organ_group : "Gastrointestinal",
      properties : [  {
        name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Hilar and hepatic resection"
          }, {
            name : "Segmental resection of bile ducts(s)"
          }, {
            name : "Choledochal cyst resection "
          }, {
            name : "Total hepatectomy "
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Right hepatic duct"
          }, {
            name : "Left hepatic duct "
          }, {
            name : "Junction of right and left hepatic ducts "
          }, {
            name : "Cystic duct "
          }, {
            name : "Common hepatic duct "
          }, {
            name : "Common bile duct "
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor size",
       optional_state  : "required", "options" : [ {
          name : ""
        } ]
      }, {
        name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Adenocarcinoma"
          }, {
            name : "Adenocarcinoma, intestinal type"
          }, {
            name : "Adenocarcinoma, biliary type"
          }, {
            name : "Adenocarcinoma, gastric foveolar type"
          }, {
            name : "Intraductal papillary neoplasm with an associated invasive carcinoma"
          }, {
            name : "Mucinous cystic neoplasm with an associated invasive carcinoma"
          }, {
            name : "Mucinous adenocarcinoma"
          }, {
            name : "Clear cell adenocarcinoma"
          }, {
            name : "Signet-ring cell carcinoma"
          }, {
            name : "Large cell neuroendocrine carcinoma "
          }, {
            name : "Small cell neuroendocrine carcinoma"
          }, {
            name : "Neuroendocrine carcinoma (poorly differentiated)"
          }, {
            name : "Adenosquamous carcinoma"
          }, {
            name : "Squamous cell carcinoma"
          }, {
            name : "Mixed adenoneuroendocrine carcinoma"
          }, {
            name : "Undifferentiated carcinoma"
          }  ],
          name : ""
        } ]
      }, {
        name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Grade 1/3, well differentiated"
          }, {
            name : "Grade 2/3, moderately differentiated"
          }, {
            name : "Grade 3/3, poorly differentiated"
          } ],
          name : ""
        } ]
      }, {
        name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Carcinoma in situ "
          }, {
            name : "Tumor limited to the bile duct histologically"
          }, {
            name : "Tumor invades beyond the wall of the bile duct into surrounding connective tissue "
          }, {
            name : "Tumor invades the adjacent liver parenchyma"
          }, {
            name : "Invades the gallbladder"
          }, {
            name : "Tumor invades the unilateral branches of the portal vein (right or left) "
          }, {
            name : "Tumor invades the unilateral branches of the hepatic artery (right or left) "
          }, {
            name : "Tumor invades main portal vein or its branches bilaterally "
          }, {
            name : "Tumor invades common hepatic artery "
          }, {
            name : "Tumor invades second-order biliary radicals, unilateral"
          }, {
            name : "Tumor invades second-order biliary radicals, bilaterall"
          } ],
          name : ""
        } ]
      }, {
        description : "include distance/location of closest proximal/distal/radial/bile duct/hepatic margin",
        name : "Margins, invasive tumor",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            name : "Positive"
          }],
          name : ""
        } ]
      }, {
        description : "include distance/location of closest proximal/distal bile duct margin",
        name : "Margins, dysplasia/CIS",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            name : "Positive"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Indeterminate"
          }, {
            name : "Suspicious"
          }, {
            name : "Present"
          }, {
            name : "Present, extensive"
          } ],
          name : ""
        } ]
      }, {
        name : "Perineural invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Present"
          }, {
            name : "Equivocal"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            name : ""
          }, {
            description : "pathologic",
            name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            name : "m"
          }, {
            description : "recurrent",
            name : "r"
          }, {
            description : "post-treatment",
            name : "y"
          }, {
            name : "mp"
          }, {
            name : "rp"
          }, {
            name : "yp"
          }, {
            name : "mrp"
          }, {
            name : "myp"
          }, {
            name : "ryp"
          }, {
            name : "mryp"
          } ],
          name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            name : "TX"
          }, {
            description : "Carcinoma in situ",
            name : "Tis"
          }, {
            description : "Tumor limited to the bile duct, with extension up to the muscle layer or fibrous tissue ",
            name : "T1"
          }, {
            description : "Tumor invades beyond the wall of the bile duct to surrounding adipose tissue ",
            name : "T2a"
          }, {
            description : "Tumor invades adjacent hepatic parenchyma ",
            name : "T2b"
          }, {
            description : "Tumor invades unilateral branches of the portal vein or hepatic artery ",
            name : "T3"
          }, {
            description : "Tumor invades main portal vein or its branches bilaterally; or the common hepatic artery; or the second-order biliary radicals bilaterally; or unilateral second-order biliary radicals with contralateral portal vein or hepatic artery involvement",
            name : "T4"
          } ],
          name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            name : "N0"
          }, {
            description : "1-3 positive lymph nodes ",
            name : "N1"
          }, {
            description : "4 or more positive lymph nodes",
            name : "N2"
          } ],
          name : "Category (pN)"
        }, {
          group : [ {
            description : "Distant metastases",
            name : "M1"
          }, {
            name : "M (not applicable)"
          }, {
            name : "distant metastasis not applicable"
          } ],
          name : ""
        } ]
        }, {
          description: "adenocarcinoma only",
        name : "MSI IHC and Interpretation",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Intact nuclear expression of MMR proteins (MLH1, MSH2, MSH6, PMS2): No evidence of deficient mismatch repair (low probability of MSI-H)"
          },{
            name : "Loss of nuclear expression of one or more MMR proteins (MLH1, MSH2, MSH6, PMS2): deficient mismatch repair/ high probability of microsatellite instability-high (MSI-H). The presence of MSI-H/deficient mismatch repair may also be an indication for additional testing for Lynch syndrome and genetic counselling."
          }, {
            name : "Pending"
          }, {
            name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            name : "See case "
          }],
          name : ""
        } ]
      } ]
    }, {
      most_common : false,
      name : "Oropharynx, Nasopharynx, and Hypopharynx, (p16-)",
      optional : false,
      organ_group : "Head and Neck",
      properties : [  {
        name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Excisional biopsy"
          }, {
            name : "Tonsillectomy "
          }, {
            name : "Laryngopharyngectomy"
          }, {
            name : "Tonsillectomy and neck (lymph node) dissection "
          }, {
            name : "Laryngopharyngectomy and neck (lymph node) dissection "
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Right oropharynx"
          }, {
            name : "Right nasopharynx"
          }, {
            name : "Right hypopharynx"
          }, {
            name : "Left oropharynx"
          }, {
            name : "Left nasopharynx"
          }, {
            name : "Left hypopharynx"
          }, {
            name : "Bilateral oropharynx"
          }, {
            name : "Bilateral nasopharynx"
          }, {
            name : "Bilateral hypopharynx"
          }, {
            name : "Midline oropharynx"
          }, {
            name : "Midline nasopharynx"
          }, {
            name : "Midline hypopharynx"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor focality",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Single focus"
          }, {
            name : "Multiple foci"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor size",
       optional_state  : "required", "options" : [ {
          name : ""
        } ]
      }, {
        name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Squamous cell carcinoma, keratinizing"
          }, {
            name : "Squamous cell carcinoma, non-keratinizing"
          }, {
            name : "Acantholytic squamous cell carcinoma"
          }, {
            name : "Adenosquamous carcinoma"
          }, {
            name : "Basaloid squamous cell carcinoma"
          }, {
            name : "Papillary squamous cell carcinoma"
          }, {
            name : "Spindle cell squamous carcinoma"
          }, {
            name : "Verrucous carcinoma"
          }, {
            name : "Lymphoepithelial carcinoma (non-nasopharyngeal)"
          }, {
            name : "Nasopharyngeal papillary adenocarcinoma"
          }, {
            name : "Adenocarcinoma"
          }, {
            name : "Basal cell adenocarcinoma"
          }, {
            name : "Carcinoma ex pleomorphic adenoma (malignant mixed tumor)"
          }, {
            name : "Clear cell adenocarcinoma"
          }, {
            name : "Cystadenocarcinoma"
          }, {
            name : "Epithelial-myoepithelial carcinoma"
          }, {
            name : "Mucoepidermoid carcinoma"
          }, {
            name : "Mucinous adenocarcinoma (colloid carcinoma)"
          }, {
            name : "Myoepithelial carcinoma (malignant myoepithelioma)"
          }, {
            name : "Oncocytic carcinoma"
          }, {
            name : "Polymorphous low-grade adenocarcinoma"
          }, {
            name : "Salivary duct carcinoma"
          }, {
            name : "Typical carcinoid tumor (well differentiated neuroendocrine carcinoma)"
          }, {
            name : "Atypical carcinoid tumor (moderately differentiated neuroendocrine carcinoma)"
          }, {
            name : "Small cell carcinoma (poorly differentiated neuroendocrine carcinoma)"
          }, {
            name : "Combined (or composite) small cell carcinoma, neuroendocrine type"
          }, {
            name : "Mucosal malignant melanoma"
          } ],
          name : ""
        } ]
      }, {
        name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Grade 1/3, Well differentiated"
          }, {
            name : "Grade 2/3, Moderately differentiated"
          }, {
            name : "Grade 3/3, Poorly differentiated"
          } ],
          name : ""
        } ]
      }, {
        description : "include distance/location of closest margin",
        name : "Margins, invasive tumor",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            name : "Positive"
          } ],
          name : ""
        } ]
      }, {
        description : "include distance/location of closest margin",
        name : "Margins, dysplasia/CIS",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            name : "Positive"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Indeterminate"
          }, {
            name : "Suspicious"
          }, {
            name : "Present"
          }, {
            name : "Present, extensive"
          } ],
          name : ""
        } ]
      }, {
        name : "Perineural invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Present"
          }, {
            name : "Equivocal"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Positive node laterality",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Not applicable"
          }, {
            name : "Ipsilateral, including midline"
          }, {
            name : "Contralateral"
          }, {
            name : "Bilateral"
          }, {
            name : "Indeterminate"
          } ],
          name : ""
        } ]
      }, {
        name : "Size of largest involved lymph node",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Extranodal Extension ",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Not applicable"
          }, {
            name : "None"
          }, {
            name : "Present"
          }, {
            name : "Equivocal"
          } ],
          name : ""
        } ]
      }, {
        name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            name : ""
          }, {
            description : "pathologic",
            name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            name : "m"
          }, {
            description : "recurrent",
            name : "r"
          }, {
            description : "post-treatment",
            name : "y"
          }, {
            name : "mp"
          }, {
            name : "rp"
          }, {
            name : "yp"
          }, {
            name : "mrp"
          }, {
            name : "myp"
          }, {
            name : "ryp"
          }, {
            name : "mryp"
          } ],
          name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            name : "TX"
          }, {
            description : "OROPHARYNX CARCINOMA, Tumor 2 cm or less in greatest dimension ",
            name : "T1"
          }, {
            description : "OROPHARYNX CARCINOMA, Tumor more than 2 cm but not more than 4 cm in greatest dimension without fixation of hemilarynx ",
            name : "T2"
          }, {
            description : "OROPHARYNX CARCINOMA, Tumor more than 4 cm in greatest dimension or with fixation of hemilarynx or extension to lingual surface of epiglottis",
            name : "T3"
          }, {
            description : "OROPHARYNX CARCINOMA, Moderately advanced local disease. Tumor invades larynx, deep/extrinsic muscle of tongue, medial pterygoid muscles, hard palate, or mandible",
            name : "T4a"
          }, {
            description : "OROPHARYNX CARCINOMA, Very advanced local disease. Tumor invades lateral pterygoid muscle, pterygoid plates, lateral nasopharynx, or skull base, or encases carotid artery",
            name : "T4b"
          }, {
            description : " NASOPHARYNX Tumor confined to nasopharynx, or extension to oropharynx and/or nasal cavity without parapharyngeal involvement ",
            name : "T1"
          }, {
            description : "NASOPHARYNX Tumor with extension to parapharyngeal space, and/or adjacent soft tissue involvement (medial pterygoid, lateral pterygoid, prevertebral muscles) ",
            name : "T2"
          }, {
            description : "NASOPHARYNX Tumor with infiltration of bony structures at skull base, cervical vertebra, pterygoid structures, and/or paranasal sinuses ",
            name : "T3"
          }, {
            description : "NASOPHARYNX Tumor with intracranial extension, involvement of cranial nerves, hypopharynx, orbit, parotid gland, and/or extensive soft tissue infiltration beyond the lateral surface of the lateral pterygoid muscle",
            name : "T4"
          }, {
            description : "HYPOPHARYNX CARCINOMA, Tumor limited to one subsite of hypopharynx and/or 2 cm or less in greatest dimension ",
            name : "T1"
          }, {
            description : "HYPOPHARYNX CARCINOMA, Tumor invades more than one subsite of hypopharynx or an adjacent site, or measures more than 2 cm but not more than 4 cm in greatest dimension without fixation of hemilarynx",
            name : "T2"
          }, {
            description : "HYPOPHARYNX CARCINOMA, Tumor measures more than 4 cm in greatest dimension or with fixation of hemilarynx or extension to esophagus",
            name : "T3"
          }, {
            description : "HYPOPHARYNX CARCINOMA, Moderately advanced local disease. Tumor invades thyroid/cricoid cartilage, hyoid bone, thyroid gland, or central compartment soft tissue",
            name : "T4a"
          }, {
            description : "HYPOPHARYNX CARCINOMA, Very advanced local disease. Tumor invades prevertebral fascia, encases carotid artery, or involves mediastinal structures",
            name : "T4b"
          }, {
            description : "MELANOMA, Mucosal disease",
            name : "T3"
          }, {
            description : "MELANOMA, Moderately advanced disease. Tumor involving deep soft tissue, cartilage, bone, or overlying skin. ",
            name : "T4a"
          }, {
            description : "MELANOMA, Very advanced disease. Tumor involving brain, dura, skull base, lower  cranial nerves (IX, X, XI, XII), masticator space, carotid artery, prevertebral  space, or mediastinal structures",
            name : "T4b"
          } ],
          name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            name : "N0"
          }, {
            description : "ORO- AND HYPOPHARYNX Metastasis in a single ipsilateral lymph node, 3 cm or less in greatest dimensiona and no extranodal extension",
            name : "N1"
          }, {
            description : "ORO- AND HYPOPHARYNX( Metastasis in a single ipsilateral or contralateral  lymph node <= 3 cm AND extranodal extension) OR (single ipsilateral lymph node >3 cm AND not more than 6 cm in greatest dimension AND no extranodal extension) ",
            name : "N2a"
          }, {
            description : "ORO- AND HYPOPHARYNX Metastasis in multiple ipsilateral lymph nodes, none more than 6 cm in greatest dimension AND no extranodal extension",
            name : "N2b"
          }, {
            description : "ORO- AND HYPOPHARYNX Metastasis in bilateral or contralateral lymph nodes, none more than 6 cm in greatest dimension AND no extranodal extension",
            name : "N2c"
          }, {
            description : "ORO- AND HYPOPHARYNX Metastasis in a lymph node more than 6 cm in greatest dimension adn no extranodal extension",
            name : "N3a"
          }, {
            description : "ORO- AND HYPOPHARYNX (Metastasis in a lymph noe >3 cm in greatest dimension AND extranodal extension) OR (multiple nodes AND extranodal extension) OR (single contralateral node <=3cm AND extranodal extension)",
            name : "N3b"
          }, {
            description : " NASOPHARYNX Metastasis in one or more ipsilateral lymph node, 6 cm or less in greatest dimension",
            name : "N1"
          }, {
            description : " NASOPHARYNX Metastasis in contralateral or bilateral lymph node,  6 cm or less in greatest dimension ",
            name : "N2"
          }, {
            description : " NASOPHARYNX Metastasis in a lymph node more than 6 cm in greatest dimension",
            name : "N3"
          }, {
            description : "MELANOMA, regional metastases",
            name : "N1"
          } ],
          name : "Category (pN)"
        }, {
          group : [ {
            description : "metastases",
            name : "M1"
          }, {
            name : "M (not applicable)"
          }, {
            name : "distant metastasis not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "p16 Immunohistochemistry ",
       optional_state  : "required", "options" : [ {
          group : [  {
            name : "Negative "
          }, {
            name : "Equivocal"
          }, {
            name : "Not applicable "
          }, {
            name : "Not performed"
          }, {
            name : "Pending"
          } ],
          name : ""
        } ]
      }, {
        name : "HPV ISH ",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Positive "
          }, {
            name : "Negative "
          }, {
            name : "Equivocal"
          }, {
            name : "Not applicable "
          }, {
            name : "Not performed"
          }, {
            name : "Pending"
          } ],
          name : ""
        } ]
      }, {
        name : "HPV PCR ",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Positive "
          }, {
            name : "Negative "
          }, {
            name : "Equivocal"
          }, {
            name : "Not applicable "
          }, {
            name : "Not performed"
          }, {
            name : "Pending"
          } ],
          name : ""
        } ]
      } ]
  }, {
      most_common : false,
      name : "Oropharynx and Nasopharynx, p16+ (HPV mediated)",
      optional : false,
      organ_group : "Head and Neck",
      properties : [  {
        name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Excisional biopsy"
          }, {
            name : "Tonsillectomy "
          }, {
            name : "Laryngopharyngectomy"
          }, {
            name : "Tonsillectomy and neck (lymph node) dissection "
          }, {
            name : "Laryngopharyngectomy and neck (lymph node) dissection "
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Right oropharynx"
          }, {
            name : "Right nasopharynx"
          }, {
            name : "Right hypopharynx"
          }, {
            name : "Left oropharynx"
          }, {
            name : "Left nasopharynx"
          }, {
            name : "Left hypopharynx"
          }, {
            name : "Bilateral oropharynx"
          }, {
            name : "Bilateral nasopharynx"
          }, {
            name : "Bilateral hypopharynx"
          }, {
            name : "Midline oropharynx"
          }, {
            name : "Midline nasopharynx"
          }, {
            name : "Midline hypopharynx"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor focality",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Single focus"
          }, {
            name : "Multiple foci"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor size",
       optional_state  : "required", "options" : [ {
          name : ""
        } ]
      }, {
        name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Squamous cell carcinoma"
          }, {
            name : "Small cell neuroendocrine carcinoma"
          }, {
            name : "Large cell neuroendocrine carcinoma"
          } ],
          name : ""
        } ]
    
      }, {
        description : "include distance/location of closest margin",
        name : "Margins, invasive tumor",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            name : "Positive"
          } ],
          name : ""
        } ]
      }, {
        description : "include distance/location of closest margin",
        name : "Margins, dysplasia/CIS",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            name : "Positive"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Indeterminate"
          }, {
            name : "Suspicious"
          }, {
            name : "Present"
          }, {
            name : "Present, extensive"
          } ],
          name : ""
        } ]
      }, {
        name : "Perineural invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Present"
          }, {
            name : "Equivocal"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Positive node laterality",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Not applicable"
          }, {
            name : "Ipsilateral, including midline"
          }, {
            name : "Contralateral"
          }, {
            name : "Bilateral"
          }, {
            name : "Indeterminate"
          } ],
          name : ""
        } ]
      }, {
        name : "Size of largest involved lymph node",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Extranodal Extension ",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Not applicable"
          }, {
            name : "None"
          }, {
            name : "Present"
          }, {
            name : "Equivocal"
          } ],
          name : ""
        } ]
      }, {
        name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            name : ""
          }, {
            description : "pathologic",
            name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            name : "m"
          }, {
            description : "recurrent",
            name : "r"
          }, {
            description : "post-treatment",
            name : "y"
          }, {
            name : "mp"
          }, {
            name : "rp"
          }, {
            name : "yp"
          }, {
            name : "mrp"
          }, {
            name : "myp"
          }, {
            name : "ryp"
          }, {
            name : "mryp"
          } ],
          name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            name : "TX"
          }, {
            description : " NASOPHARYNX Tumor confined to nasopharynx, or extension to oropharynx and/or nasal cavity without parapharyngeal involvement ",
            name : "T1"
          }, {
            description : "NASOPHARYNX Tumor with extension to parapharyngeal space, and/or adjacent soft tissue involvement (medial pterygoid, lateral pterygoid, prevertebral muscles) ",
            name : "T2"
          }, {
            description : "NASOPHARYNX Tumor with infiltration of bony structures at skull base, cervical vertebra, pterygoid structures, and/or paranasal sinuses ",
            name : "T3"
          }, {
            description : "NASOPHARYNX Tumor with intracranial extension, involvement of cranial nerves, hypopharynx, orbit, parotid gland, and/or extensive soft tissue infiltration beyond the lateral surface of the lateral pterygoid muscle",
            name : "T4"
          }, {
            description : " OROPHARYNX Tumor 2 cm or less in greatest dimension ",
            name : "T1"
          }, {
            description : "OROPHARYNX Tumor more than 2 cm but not more than 4 cm in greatest dimension ",
            name : "T2"
          }, {
            description : "OROPHARYNX Tumor more than 4 cm in greatest dimension or extension to lingual surface of epiglottis",
            name : "T3"
          }, {
            description : "OROPHARYNX Moderately advanced local disease. Tumor invades larynx, deep/extrinsic muscle of tongue, medial pterygoid muscles, hard palate, or mandible",
            name : "T4"
          }],
          name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            name : "N0"
          }, {
            description : " NASOPHARYNX Metastasis in one or more ipsilateral lymph node, 6 cm or less in greatest dimension",
            name : "N1"
          }, {
            description : " NASOPHARYNX Metastasis in contralateral or bilateral lymph node,  6 cm or less in greatest dimension ",
            name : "N2"
          }, {
            description : " NASOPHARYNX Metastasis in a lymph node more than 6 cm in greatest dimension",
            name : "N3"
          }, {
            description : " OROPHARYNX Metastasis in 4 or fewer lymph nodes",
            name : "N1"
          }, {
            description : " OROPHARYNX Metastasis in more than 4 lymph nodes ",
            name : "N2"
          }],
          name : "Category (pN)"
        }, {
          group : [ {
            description : "metastases",
            name : "M1"
          }, {
            name : "M (not applicable)"
          }, {
            name : "distant metastasis not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "p16 Immunohistochemistry ",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Positive "
          }],
          name : ""
        } ]
      }, {
        name : "HPV ISH ",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Positive "
          }, {
            name : "Negative "
          }, {
            name : "Equivocal"
          }, {
            name : "Not applicable "
          }, {
            name : "Not performed"
          }, {
            name : "Pending"
          } ],
          name : ""
        } ]
      }, {
        name : "HPV PCR ",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Positive "
          }, {
            name : "Negative "
          }, {
            name : "Equivocal"
          }, {
            name : "Not applicable "
          }, {
            name : "Not performed"
          }, {
            name : "Pending"
          } ],
          name : ""
        } ]
      } ]
  
    }, {
      most_common : true,
      name : "Prostate, prostatectomy",
      optional : false,
      organ_group : "Genitourinary",
      properties : [ {
        name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Radical prostatectomy"
          }, {
            name : "Cystoprostatectomy"
          } ],
          name : ""
        } ]
     
      }, {
        name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Adenocarcinoma"
          } ],
          name : ""
        } ]
      }, {
        name : "Gleason primary pattern",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Grade 3"
          }, {
            name : "Grade 4"
          }, {
            name : "Grade 5"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Gleason secondary pattern",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Grade 3"
          }, {
            name : "Grade 4"
          }, {
            name : "Grade 5"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Gleason tertiary pattern",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Grade 3"
          }, {
            name : "Grade 4"
          }, {
            name : "Grade 5"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Gleason score",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Score 6"
          }, {
            name : "Score 7"
          }, {
            name : "Score 8"
          }, {
            name : "Score 9"
          }, {
            name : "Score 10"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
       }, {
        name : "Grade group",
       optional_state  : "required", "options" : [ {
          group : [ {
             description : "Gleason 6",
            name : "Group 1"
          }, {
             description : "Gleason 3+4",
            name : "Group 2"
          }, {
             description : "Gleason 4+3",
            name : "Group 3"
          }, {
             description : "Gleason 8",
            name : "Group 4"
          }, {
             description : "Gleason 9 & 10",
            name : "Group 5"
          }, {
           
            name : "Not applicable"
          } ],
          name : ""
        } ]  
      }, {
        name : "Tumor size",
       optional_state  : "required", "options" : [ {
          name : ""
        } ]
      }, {
        name : "Extraprostatic extension",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            description : "less than 1 high-power field in 1 or 2 sections,location",
            inputs_required : [ "" ],
            name : "Present, focal"
          }, {
            description : "more than 1 high-power field in 1 or 2 sections,location",
            inputs_required : [ "" ],
            name : "Present, nonfocal"
          }, {
            name : "Equivocal"
          } ],
          name : ""
        } ]
        }, {
           description : "involves thick muscle bundles that do not have normal prostate glands in them, does not need to be + margin",
        name : "Urinary bladder neck invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Present"
          }, {
            name : "Equivocal"
          } ],
          name : ""
        } ]  
      }, {
        name : "Seminal vesicle invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Present"
          }, {
            name : "Equivocal"
          } ],
          name : ""
        } ]
      }, {
        name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Free"
          }, {
            description : "< 3mm, location",
            inputs_required : [ "" ],
            name : "Positive, focal"
          }, {
            description : ">= 3mm, location",
            inputs_required : [ "" ],
            name : "Positive, nonfocal"
          }, {
            description : "location",
            inputs_required : [ "" ],
            name : "Positive"
          } ],
          name : ""
        } ]
      }, {
        name : "Treatment effect, primary site",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Present"
          }, {
            name : "Not applicable"
          }, {
            name : "Not known"
          }  ],
          name : ""
        } ]
     
      }, {
        name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
    
        
      }, {
        name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            name : ""
          }, {
            description : "pathologic",
            name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            name : "m"
          }, {
            description : "recurrent",
            name : "r"
          }, {
            description : "post-treatment",
            name : "y"
          }, {
            name : "mp"
          }, {
            name : "rp"
          }, {
            name : "yp"
          }, {
            name : "mrp"
          }, {
            name : "myp"
          }, {
            name : "ryp"
          }, {
            name : "mryp"
          } ],
          name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            name : "TX"
          }, {
            description : "organ limited",
            name : "T2"
          }, {
            description : "Extraprostatic extension or invasion of bladder neck",
            name : "T3a"
          }, {
            description : "Seminal vesicle invasion",
            name : "T3b"
          }, {
            description : "Invades rectum or pelvis",
            name : "T4"
          } ],
          name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            name : "N0"
          }, {
            description : "Regional lymph nodes involved",
            name : "N1"
          } ],
          name : "Category (pN)"
        }, {
          group : [ {
            description : "metastases to non regional nodes",
            name : "M1a"
          }, {
              description : "metastases to bone",
            name : "M1b"
          }, {
              description : "metastases to other sites",
            name : "M1c"
          }, {
            name : "M (not applicable)"
          }, {
            name : "distant metastasis not applicable"
          } ],
          name : ""
        } ]
        }, {
         description : "",
        name : "Additional findings",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "High Grade PIN"
          }, {
            name : "Lymphatic vascular invasion"
          }, {
            name : "Lymphatic vascular invasion and High grade PIN"
          } ],
          name : ""
        } ]  
      }, {
        description : "Add billing code 3267F",
        name : "ICD10",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "C61"
          } ],
          name : ""
        } ]
      } ]
    }, {
      biopsy_type : "Malignant",
      most_common : false,
      name : "Prostate biopsy",
      optional : true,
      organ_group : "Genitourinary",
       properties : [ {
        name : "Part",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : false,
          group : [{
        description : "Single specimen, no letter/part",
            name : ""
          }, {
            name : "A."
          }, {
            name : "B."
          }, {
            name : "C."
          }, {
            name : "D."
          }, {
            name : "E."
          }, {
            name : "F."
          }, {
            name : "G."
          }, {
            name : "H."
          }, {
            name : "I."
          }, {
            name : "J."
          }, {
            name : "K."
          }, {
            name : "L."
          }, {
            name : "M."
          }, {
            name : "O."
          }, {
            name : "P."
          }, {
            name : "Q."
          }, {
            name : "R."
          }, {
            name : "S."
          }, {
            name : "T."
          }, {
            name : "U."
          } ],
          name : ""
        } ]
      }, {
         name : "Location",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : false,
          group : [ {
            description : "location",
            inputs_required : [ "" ],
            name : "right"
          }, {
            description : "location",
            inputs_required : [ "" ],
            name : "left"
          } ],
          name : ""
        } ]
      }, {
        name : "Procedure",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : false,
          group : [ {
            name : "core needle biopsy"
          }, {
            name : "MRI guided core needle biopsy"
          } ],
          name : ""
        } ]
      }, {
        name : "Diagnosis/Type",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : false,
          group : [ {
            name : "Prostatic adenocarcinoma"
          } ],
          name : ""
        } ]
      }, {
        name : "Gleason grade",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : false,
          group : [ {
            name : "3 + 3 = 6 (Group 1)"
          }, {
            name : "3 + 4 = 7 (Group 2)"
          }, {
            name : "4 + 3 = 7 (Group 3)"
          }, {
            name : "4 + 4 = 8 (Group 4)"
          }, {
            name : "4 + 5 = 9 (Group 5)"
          }, {
            name : "5 + 4 = 9 (Group 5)"
          }, {
            name : "5 + 5 = 10 (Group 5)"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
         
        name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            inputs_required : [ [" 1 of 1 core ", "1 of 2 cores ", "2 of 2 cores", "1 of 3 cores", "2 of 3 cores", "3 of 3 cores", "Involving multiple cores"], " &nbsp; % of tissue" ],
            name : ""
          } ],
          name : ""
        } ]
      }, {
         description : "MULTI-SELECT",
        name : "Additional findings",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            name : "None"
          }, {
            name : "Gleason pattern 5 is also present"
          }, {
            name : "Gleason pattern 4 is also present"
          }, {
            name : "Gleason pattern 3 is also present"
          }, {
            name : "Perineural invasion is present"
          }, {
            name : "Seminal vesicle invasion is present"
          }, {
            name : "Periprostatic fat invasion is present"
          }, {
            name : "Gleason pattern 5 and perineural invasion are present"
          }, {
            name : "Gleason pattern 4 and perineural invasion are present"
          }, {
            name : "Gleason pattern 3 and perineural invasion are present"
          } ],
          name : ""
        } ]
      } ]
    }, {
      biopsy_type : "Other",
      most_common : false,
      name : "Prostate biopsy",
      optional : true,
      organ_group : "Genitourinary",
      properties : [ {
        name : "Location",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            description : "location",
            inputs_required : [ "" ],
            name : "right"
          }, {
            description : "location",
            inputs_required : [ "" ],
            name : "left"
          } ],
          name : ""
        } ]
      }, {
        name : "Procedure",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            name : "core needle biopsy"
          } ],
          name : ""
        } ]
      }, {
        name : "Diagnosis/Type",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            name : "Atypical glands suspicious for carcinoma"
          }, {
            name : "High grade prostatic intraepithelial neoplasia (HGPIN)"
          }, {
            name : "Atypical glands suspicious for carcinoma with adjacent high grade prostatic intraepithelial neoplasia (HGPIN)"
          }, {
            name : "Atypical glands, favor benign"
          }, {
            name : "Benign prostate tissue"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Total # of cores",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          name : ""
        } ]
      }, {
        name : "immunohistochemistry",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            name : "PIN4 supports the above diagnosis"
          }, {
            name : "PIN4/PSA support the above diagnosis"
          }, {
            name : "PIN4/34BE12 support the above diagnosis"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      } ]
    }, {
      most_common : false,
      name : "Prostate, TURP",
      optional : true,
      organ_group : "Genitourinary",
      properties : [ {
        name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Transurethral prostatic resection"
          } ],
          name : ""
        }, {
          name : "Enucleation"
        } ]
      
      }, {
        name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Adenocarcinoma"
          } ],
          name : ""
        } ]
      }, {
        name : "Gleason primary pattern",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Grade 3"
          }, {
            name : "Grade 4"
          }, {
            name : "Grade 5"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Gleason secondary pattern",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Grade 3"
          }, {
            name : "Grade 4"
          }, {
            name : "Grade 5"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Gleason tertiary pattern",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Grade 3"
          }, {
            name : "Grade 4"
          }, {
            name : "Grade 5"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Gleason score",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Score 6"
          }, {
            name : "Score 7"
          }, {
            name : "Score 8"
          }, {
            name : "Score 9"
          }, {
            name : "Score 10"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Percent of tissue invovled",
       optional_state  : "required", "options" : [ {
          name : ""
        } ]
      }, {
        name : "Periprostatic fat invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Present"
          }, {
            name : "Equivocal"
          } ],
          name : ""
        } ]
      }, {
        name : "Seminal vesicle invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Present"
          }, {
            name : "Equivocal"
          } ],
          name : ""
        } ]
      } ]
    }, {
      most_common : false,
      name : "Retinoblastoma",
      optional : false,
      organ_group : "Ophthalmic",
      properties : [ {
        name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Right enucleation"
          }, {
            name : "Right partial exenteration"
          }, {
            name : "Right complete exenteration"
          }, {
            name : "Left enucleation"
          }, {
            name : "Left partial exenteration"
          }, {
            name : "Left complete exenteration"
          }  ],
          name : ""
        } ]
      }, {
        name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Superotemporal quadrant of globe"
          }, {
            name : "Superonasal quadrant of globe"
          }, {
            name : "Inferotemporal quadrant of globe"
          }, {
            name : "Inferonasal quadrant of globe"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor size after sectioning",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Equivocal"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor location after sectioning",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Superotemporal"
          }, {
            name : "Superonasal"
          }, {
            name : "Inferotemporal"
          }, {
            name : "Inferonasal"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor Involvement of Other Ocular Structures ",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Cornea"
          }, {
            name : "Anterior chamber"
          }, {
            name : "Iris"
          }, {
            name : "Angle"
          }, {
            name : "Lens"
          }, {
            name : "Ciliary body"
          }, {
            name : "Vitreous "
          }, {
            name : "Retinal detachment"
          }, {
            name : "Optic disc"
          }, {
            name : "Choroid, minimal (solid tumor nest less than 3 mm in maximum diameter [width or thickness])"
          }, {
            name : "Choroid, massive (solid tumor nest 3 mm or more in maximum diameter [width or thickness]) "
          }, {
            name : "Sclera"
          }, {
            name : "Vortex vein"
          }, {
            name : "Orbit"
          }, {
            name : "Equivocal"
          } ],
          name : ""
        } ]
      }, {
        name : "Growth Pattern ",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Endophytic "
          }, {
            name : "Exophytic"
          }, {
            name : "Combined endophytic/exophytic"
          }, {
            name : "Diffuse"
          }, {
            name : "Anterior diffuse"
          }, {
            name : "Equivocal"
          } ],
          name : ""
        } ]
      }, {
        name : "Extent of Optic Nerve Invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Anterior to lamina cribrosa"
          }, {
            name : "At lamina cribrosa"
          }, {
            name : "Posterior to lamina cribrosa but not to end of nerve"
          }, {
            name : "To cut end of optic nerve"
          }, {
            name : "Equivocal"
          } ],
          name : ""
        } ]
      }, {
        name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "Tumor with areas of retinocytoma (fleurettes or neuronal differentiation)",
            name : "Grade 1/4, well differentiated"
          }, {
            description : "Tumor with many rosettes (Flexner-Wintersteiner or Homer Wright)",
            name : "Grade 2/4, moderately differentiated"
          }, {
            description : "Tumor with occasional rosettes (Flexner-Wintersteiner or Homer Wright)",
            name : "Grade 3/4, poorly differentiated"
          }, {
            description : "Tumor with poorly differentiated cells without rosettes and/or with extensive areas (more than half of tumor) of anaplasia",
            name : "Grade 4/4, undifferentiated"
          }, {
            name : "Equivocal"
          } ],
          name : ""
        } ]
      }, {
        description : "include distance/location of closest margin",
        name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            name : "Free"
          }, {
            description : "location, including optic nerve and extrascleral extension",
            inputs_required : [ "" ],
            name : "Positive"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
    
        
      }, {
        name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            name : ""
          }, {
            description : "pathologic",
            name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            name : "m"
          }, {
            description : "recurrent",
            name : "r"
          }, {
            description : "post-treatment",
            name : "y"
          }, {
            name : "mp"
          }, {
            name : "rp"
          }, {
            name : "yp"
          }, {
            name : "mrp"
          }, {
            name : "myp"
          }, {
            name : "ryp"
          }, {
            name : "mryp"
          } ],
          name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            name : "TX"
          }, {
            description : "Intraocular tumor without any local invasion, focal choroidal invasion, or pre- or intralaminar involvement of the optic nerve head",
            name : "T1"
          }, {
            description : "concomitant focal choroidal invasion and pre- or intralaminar involvement of the optic nerve head",
            name : "T2a"
          }, {
            description : "Tumor invasion of stroma of iris and or trabecular meshwork and or Schlemm's canal",
            name : "T2b"
          }, {
            description : "Massive choroidal invasion (> 3mm in largest diameter, or multiple foci of focal choroidal involvement totalling > 3mm or any full thinkness choroidal involvement)",
            name : "T3a"
          }, {
            description : "Retrolaminar invasion of the optic nerve head, not involving the transected end of the optic nerve",
            name : "T3b"
          }, {
            description : "any partial thickness involvement of the sclera within the inner two thirds",
            name : "T3c"
          }, {
            description : "full thickness invasion into the outer third of the sclera and or invasion into or around emissary channels",
            name : "T3d"
          }, {
            description : "extraocular tumor",
            name : "T4"
          } ],
          name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            name : "N0"
          }, {
            description : "Regional lymph node involvement (preauricular, cervical, submandibular)",
            name : "N1"
          } ],
          name : "Category (pN)"
        }, {
          group : [ {
            description : "metastases other than CSF and CNS",
            name : "M1a"
          }, {
            description : "CSF or CNS metastasis",
            name : "M1b"
          } ],
          name : ""
        } ]
      } ]
    }, {
      most_common : false,
      name : "Rhabdomyosarcom",
      optional : true,
      organ_group : "Pediatric",
      properties : [ {
        name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Biopsy"
          }, {
            name : "Marginal resection"
          }, {
            name : "Radical resection"
          }, {
            name : "Amputation "
          } ],
          name : ""
        } ]
     
      }, {
        name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Bile duct"
          },{
            name : "Bladder/prostate"
          }, {
            name : "Cranial parameningeal"
          }, {
            name : "Extremity "
          }, {
            name : "Genitourinary (not bladder/prostate) "
          }, {
            name : "Head and neck (excluding parameningeal) "
          }, {
            name : "Orbit"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor size",
       optional_state  : "required", "options" : [ {
          name : ""
        } ]
      }, {
        name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Embryonal"
          }, {
            name : "Spindle cell/sclerosing  "
          }, {
            name : "Alveolar "
          }, {
            name : "Ectomesenchymoma  "
          }, {
            name : "Rhabdomyosarcoma, subtype Equivocal "
          } ],
          name : ""
        } ]
      }, {
        name : "Anaplasia",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Focal (single or few scattered anaplastic cells)"
          }, {
            name : "Diffuse (clusters or sheets of anaplastic cells) "
          }, {
            name : "Equivocal "
          }, {
            name : "Not applicable "
          } ],
          name : ""
        } ]
      }, {
        name : "Fusion Status ",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Not performed"
          }, {
            name : "No FOXO1 rearrangement"
          }, {
            name : "FOXO1 rearrangement present  "
          }, {
            name : "Equivocal "
          }, {
            name : "Not applicable "
          } ],
          name : ""
        } ]
  
      }, {
        description : "include distance",
        name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            name : "Positive"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Distant metastases",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            inputs_required : [ "" ],
            name : "Present"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
     
      } ]
    }, {
      most_common : false,
      name : "Skin Melanoma",
      optional : false,
      organ_group : "Skin",
      properties : [ {
        name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Excision"
          } ],
          name : ""
        } ]
      }, { name : "Location",
       optional_state  : "required", "options" : [ {
          canSelectMultiple : true,
          group : [ {
            description : "location",
            inputs_required : [ "" ],
            name : "Right"
          }, {
            description : "location",
            inputs_required : [ "" ],
            name : "Left"
          }, {
            description : "location",
            inputs_required : [ "" ],
            name : "Midline"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor size",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Equivocal"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Macroscopic satellite nodules",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Present"
          }, {
            name : "Equivocal"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Melanoma in situ"
          }, {
            name : "Superficial spreading melanoma"
          }, {
            name : "Nodular melanoma"
          }, {
            name : "Lentigo maligna melanoma"
          }, {
            name : "Acral lentiginous melanoma"
          }, {
            name : "Desmoplastic melanoma"
          }, {
            name : "Invasive melanoma, NOS"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor thickness (mm)",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Equivocal"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
    
      }, {
        name : "Ulceration",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Present"
          }, {
            name : "Equivocal"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Microsatellites",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Present"
          }, {
            name : "Equivocal"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        description : "include distance/location of closest margin",
        name : "Margins, peripheral",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
             inputs_required : [ "" ],
            name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            name : "Positive"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        description : "include distance of closest deep margin",
        name : "Margins, deep",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance",
             inputs_required : [ "" ],
            name : "Free"
          }, {
           
           
            name : "Positive"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Mitotic rate",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Equivocal"
          }, {
            name : "None"
          }, {
            name : "< 1 per square millimeter"
          }, {
            name : "> 1 per square millimeter"
          }, {
            description : "# per square millimeter",
            inputs_required : [ "" ],
            name : ""
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Indeterminate"
          }, {
            name : "Suspicious"
          }, {
            name : "Present"
          }, {
            name : "Present, extensive"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Perineural invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Present"
          }, {
            name : "Equivocal"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor regression",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Present"
          }, {
            name : "Less than or equal to 75% of lesion"
          }, {
            name : "Greater than 75% of lesion"
          }, {
            name : "Equivocal"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # sentinel",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Matted nodes",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Present"
          }, {
            name : "Equivocal"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            name : ""
          }, {
            description : "pathologic",
            name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            name : "m"
          }, {
            description : "recurrent",
            name : "r"
          }, {
            description : "post-treatment",
            name : "y"
          }, {
            name : "mp"
          }, {
            name : "rp"
          }, {
            name : "yp"
          }, {
            name : "mrp"
          }, {
            name : "myp"
          }, {
            name : "ryp"
          }, {
            name : "mryp"
          } ],
          name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            name : "TX"
          }, {
            description : "in situ",
            name : "Tis"
          }, {
            description : "<= 0.8 mm AND no ulceration",
            name : "T1a"
          }, {
            description : "<= (0.8 mm AND ulceration) OR (>=0.8 mm AND <=1.0 mm with or without ulceration)",
            name : "T1b"
          }, {
            description : "> 1mm AND <= 2mm , no ulceration",
            name : "T2a"
          }, {
            description : "> 1mm AND <= 2mm , ulceration",
            name : "T2b"
          }, {
            description : "> 2mm AND <= 4mm , no ulceration",
            name : "T3a"
          }, {
            description : "> 2mm AND <= 4mm , ulceration",
            name : "T3b"
          }, {
            description : "> 4mm AND no ulceration",
            name : "T4a"
          }, {
            description : "> 4mm AND ulceration",
            name : "T4b"
          } ],
          name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            name : "N0"
          }, {
            description : "1 metastasis, clincially occult",
            name : "N1a"
          }, {
            description : "1 metastasis, clincially apparent",
            name : "N1b"
          }, {
            description : "negative nodes, positive intransit metastasis AND/OR microsatellite metastases",
            name : "N1c"
          }, {
            description : "2-3 metastasis, clincially occult",
            name : "N2a"
          }, {
            description : "2-3 metastasis, clincially apparent",
            name : "N2b"
          }, {
            description : " 1 metastasis AND Satellite or in-transit metastasis",
            name : "N2c"
          }, {
            description : ">= 4 metastases clincally occult",
            name : "N3a"
          }, {
            description : " 4 metastases clincally apparent",
            name : "N3b"
          }, {
            description : "2 or more positive nodes, positive intransit metastasis AND/OR microsatellite metastases",
            name : "N3c"
          } ],
          name : "Category (pN)"
        }, {
          group : [ {
            description : "metastasesto skin soft tissue including muscles and or nonregional lymph nodes",
            name : "M1a"
          }, {
              description : "metastases to lung",
            name : "M1b"
          }, {
              description : "metastases to non-CNS visceral sites",
            name : "M1c"
          }, {
              description : "metastases to CNS",
            name : "M1d"
          }, {
              description : "metastases",
            name : "M (not applicable)"
          }, {
            name : "distant metastasis not applicable"
          } ],
          name : ""
        } ]
      }, {
        description : "Add billing code G9428 for residual melanoma and G9429 no melanoma left",
        name : "ICD10",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "C43.9"
          } ],
          name : ""
        } ]
      } ]
    }, {
      most_common : false,
      name : "Skin Merkel Cell Carcinoma",
      optional : false,
      organ_group : "Skin",
      properties : [ {
        name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Excision"
          }, {
            name : "Excision and sentinel node(s)"
          }, {
            name : "Excision and regional node(s)"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Not specified"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor size",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Equivocal"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        description : "include distance/location of closest margin",
        name : "Margins, peripheral",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            name : "Positive"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        description : "include distance/location of closest margin",
        name : "Margins, deep",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            name : "Positive"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Indeterminate"
          }, {
            name : "Suspicious"
          }, {
            name : "Present"
          }, {
            name : "Present, extensive"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Invasion of Bone, Muscle, Fascia, or Cartilage ",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Present"
          }, {
            name : "Equivocal"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # sentinel",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            name : ""
          }, {
            description : "pathologic",
            name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            name : "m"
          }, {
            description : "recurrent",
            name : "r"
          }, {
            description : "post-treatment",
            name : "y"
          }, {
            name : "mp"
          }, {
            name : "rp"
          }, {
            name : "yp"
          }, {
            name : "mrp"
          }, {
            name : "myp"
          }, {
            name : "ryp"
          }, {
            name : "mryp"
          } ],
          name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            name : "TX"
          }, {
            description : "in situ",
            name : "Tis"
          }, {
            description : "Less than or equal to 2 cm maximum tumor dimension ",
            name : "T1"
          }, {
            description : "Greater than 2 cm but not more than 5 cm maximum tumor dimension ",
            name : "T2"
          }, {
            description : "Over 5 cm maximum tumor dimension",
            name : "T3"
          }, {
            description : "Primary tumor invades bone, muscle, fascia, or cartilage",
            name : "T4"
          } ],
          name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            name : "N0"
          }, {
            description : "Clinically occult positive sentinel lymph node(s)",
            name : "N1a(sn)"
          }, {
            description : "Clinically occult positive regional lymph node(s)",
            name : "N1a"
          }, {
            description : "Clinically or radiographically lymph node met, pathologically confirmed",
            name : "N1b"
          }, {
            description : "In transit metastasis (discontinuous from primary tumor, located between primary and draining regional nodes or distal to primary AND NO lymph node metastases",
            name : "N2"
          }, {
            description : "In transit metastasis (discontinuous from primary tumor, located between primary and draining regional nodes or distal to primary AND lymph node metastases",
            name : "N3"
          }  ],
          name : "Category (pN)"
        }, {
          group : [ {
            description : "metastases to distant skin, subcutaneous tissue or distant lymph nodes",
            name : "M1a"
          }, {
             description : "metastases to lung",
            name : "M1b"
          }, {
             description : "metastases all other sites",
            name : "M1c"
          }, {
            name : "M (not applicable)"
          }, {
            name : "distant metastasis not applicable"
          } ],
          name : ""
        } ]
      } ]
     }, {
      most_common : false,
      name : "Small Intestine",
      optional : false,
      organ_group : "Gastrointestinal",
      properties : [  {
        name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Segmental resection"
          }, {
            name : "Ileocolic resection"
          }, {
            name : "Pancreaticoduodenectomy (Whipple resection)"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Duodenum"
          }, {
            name : "Jejunum"
          } , {
            name : "Ileum"
          }, {
            name : "Small intestine"
          }],
          name : ""
        } ]
      }, {
        name : "Tumor size",
       optional_state  : "required", "options" : [ {
          name : ""
        } ]
      }, {
        name : "Tumor Perforation ",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Present"
          }, {
            name : "None"
          }, {
            name : "Equivocal"
          } ],
          name : ""
        } ]
      }, {
        name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Adenocarcinoma"
          }, {
            description : "greater than 50% mucinous",
            name : "Mucinous adenocarcinoma "
          }, {
            description : ">50% signet-ring cells",
            name : "Adenocarcinoma, signet-ring carcinoma "
          }, {
            name : "Medullary carcinoma "
          }, {
            name : "Undifferentiated carcinoma"
          }, {
            name : "Squamous cell carcinoma"
          }, {
            name : "Adenosquamous carcinoma "
          }, {
            name : "Undifferentiated carcinoma"
          }, {
            name : "Mixed adenoneuroendocrine carcinoma"
          }, {
            name : "Large cell neuroendocrine carcinoma"
          }, {
            name : "Small cell neuroendocrine carcinoma"
          }, {
            name : "Neuroendocrine carcinoma (poorly differentiated)"
          } ],
          name : ""
        } ]
      }, {
        name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Grade 1/4, Well differentiated "
          }, {
            name : "Grade 2/4, Moderately differentiated "
          }, {
            name : "Grade 3/4, Poorly differentiated"
          }, {
            name : "Grade 4/4, Undifferentiated"
          } ],
          name : ""
        } ]
      }, {
        name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "No evidence of primary tumor"
          }, {
            name : "Invades lamina propria"
          }, {
            name : "Invades submucosa"
          }, {
            name : "Invades muscularis propria"
          }, {
            name : "Tumor invades through the muscularis propria into the subserosal adipose tissue or the nonperitonealized peri-intestinal soft tissues but does not extend to the serosal surface"
          }, {
            name : "Tumor microscopically involves the serosal surface (visceral peritoneum) "
          }, {
            description : "which",
            inputs_required : [ "" ],
            name : "Tumor directly invades adjacent structures "
          }, {
            description : "which",
            inputs_required : [ "" ],
            name : "Tumor penetrates to the surface of the visceral peritoneum (serosa) and directly invades adjacent structures"
          } ],
          name : ""
        } ]
      }, {
        description : "include distance/location of closest proximal/distal/radial/bile duct/pancreatic margin",
        name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            name : "Positive"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Indeterminate"
          }, {
            name : "Suspicious"
          }, {
            name : "Present"
          }, {
            name : "Present, extensive"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            name : ""
          }, {
            description : "pathologic",
            name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            name : "m"
          }, {
            description : "recurrent",
            name : "r"
          }, {
            description : "post-treatment",
            name : "y"
          }, {
            name : "mp"
          }, {
            name : "rp"
          }, {
            name : "yp"
          }, {
            name : "mrp"
          }, {
            name : "myp"
          }, {
            name : "ryp"
          }, {
            name : "mryp"
          } ],
          name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            name : "TX"
          }, {
            description : "No tumor",
            name : "T0"
          }, {
            description : "Carcinoma in situ",
            name : "Tis"
          }, {
            description : "Tumor invades lamina propria ",
            name : "T1a"
          }, {
            description : "Tumor invades submucosa",
            name : "T1b"
          }, {
            description : "Tumor invades muscularis propria",
            name : "T2"
          }, {
            description : "Tumor invades through the muscularis propria into the subserosa or into the nonperitonealized perimuscular tissue (mesentery or retroperitoneum)without serosal penetration",
            name : "T3"
          }, {
            description : "Tumor perforates the visceral peritoneum or directly invades other organs or structures (includes other loops of small intestine, mesentery, and abdominal wall by way of serosa; for duodenum only, invasion of pancreas or bile duct) ",
            name : "T4"
          } ],
          name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            name : "N0"
          }, {
            description : "Metastasis in 1 to 2 regional lymph nodes",
            name : "N1"
          }, {
            description : "Metastasis in 3 or more regional lymph nodes",
            name : "N2"
          } ],
          name : "Category (pN)"
        }, {
          group : [ {
            description : "Distant metastases",
            name : "M1"
          }, {
            name : "M (not applicable)"
          }, {
            name : "distant metastasis not applicable"
          } ],
          name : ""
        } ]
        }, {
          description: "adenocarcinoma only",
        name : "MSI IHC and Interpretation",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Intact nuclear expression of MMR proteins (MLH1, MSH2, MSH6, PMS2): No evidence of deficient mismatch repair (low probability of MSI-H)"
          },{
            name : "Loss of nuclear expression of one or more MMR proteins (MLH1, MSH2, MSH6, PMS2): deficient mismatch repair/ high probability of microsatellite instability-high (MSI-H). The presence of MSI-H/deficient mismatch repair may also be an indication for additional testing for Lynch syndrome and genetic counselling."
          }, {
            name : "Pending"
          }, {
            name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            name : "See case "
          }],
          name : ""
        } ]
      } ]
    }, {
      most_common : false,
      name : "Soft Tissue",
      optional : false,
      organ_group : "Other",
      properties : [ {
        name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Biopsy"
          }, {
            name : "Intralesional resection  "
          }, {
            name : "Marginal resection "
          }, {
            name : "Wide resection "
          }, {
            name : "Radical resection "
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor location",
       optional_state  : "required", "options" : [ {
          name : ""
        } ]
      }, {
        name : "Tumor size",
       optional_state  : "required", "options" : [ {
          name : ""
        } ]
      }, {
        name : "Type",
       optional_state  : "required", "options" : [ {
          name : ""
        } ]
      }, {
         description : "per 10 hpf where 1 hpf =.17mm squared",
        name : "Mitotic Rate ",
       optional_state  : "required", "options" : [ {
          name : ""
        } ]
      }, {
        name : "Necrosis",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            description : "%",
            inputs_required : [ "" ],
            name : "Present"
          } ],
          name : ""
        } ]
      }, {
        description : "French Federation of Cancer Centers Sarcoma Group [FNCLCC]",
        name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Grade 1/3"
          }, {
            name : "Grade 2/3  "
          }, {
            name : "Grade 3/3  "
          }, {
            name : "Ungraded sarcoma"
          } ],
          name : ""
        } ]
      }, {
        description : "include distance",
        name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            name : "Positive"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Treatment effect, primary site",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Present  "
          }, {
            name : "Indeterminate  "
          }, {
            name : "Not known"
          }  ],
          name : ""
        } ]
      }, {
        name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            name : ""
          }, {
            description : "pathologic",
            name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            name : "m"
          }, {
            description : "recurrent",
            name : "r"
          }, {
            description : "post-treatment",
            name : "y"
          }, {
            name : "mp"
          }, {
            name : "rp"
          }, {
            name : "yp"
          }, {
            name : "mrp"
          }, {
            name : "myp"
          }, {
            name : "ryp"
          }, {
            name : "mryp"
          } ],
          name : ""
        }, {
          group : [ {
            description : "ABDOMEN AND THORAX cannot be assessed",
            name : "TX"
          }, {
            description : "ABDOMEN AND THORAX  No tumor",
            name : "T0"
          }, {
            description : "ABDOMEN AND THORAX Organ limited",
            name : "T1"
          }, {
            description : "ABDOMEN AND THORAX invades serosa or visceral peritoneum",
            name : "T2a"
          }, {
            description : "ABDOMEN AND THORAX extends beyond serosa (mesentery)",
            name : "T2b"
          }, {
            description : "ABDOMEN AND THORAX Invades another organ",
            name : "T3"
          }, {
            description : "ABDOMEN AND THORAX 2 sites",
            name : "T4a"
          }, {
            description : "ABDOMEN AND THORAX 3-5 sites",
            name : "T4b"
          }, {
            description : "ABDOMEN AND THORAX >5 sites",
            name : "T4c"
          } , {
            description : "HEAD AND NECK Tumor <=2cm",
            name : "T1"
          }, {
            description : "HEAD AND NECK Tumor >2cm AND <= 4cm",
            name : "T2"
          }, {
            description : "HEAD AND NECK Tumor > 4cm",
            name : "T3"
          }, {
            description : "HEAD AND NECK Tumor invades orbit, skull base dural central compartment facial skeleton or pterygoid musclesr",
            name : "T4a"
          }, {
            description : "HEAD AND NECK Tumor invades brain, carotid artery, prevertebral muscle, or CNS spread via perinerual spread",
            name : "T4b"
          }, {
            description : "TRUNK EXTREMITIES AND RETROPERITONEUM Tumor 5 cm or less in greatest dimension",
            name : "T1"
          }, {
            description : "TRUNK EXTREMITIES AND RETROPERITONEUM Tumor > 5cm AND <= 10cmr",
            name : "T2"
          }, {
            description : "TRUNK EXTREMITIES AND RETROPERITONEUM Tumor > 10 cm AND <=15cm",
            name : "T3"
          }, {
            description : "TRUNK EXTREMITIES AND RETROPERITONEUM Tumor >15 cm",
            name : "T4"
          }],
          name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            name : "NX"
          }, {
            description : "No regional lymph node metastases",
            name : "N0"
          }, {
            description : "Regional lymph node metastases",
            name : "N1"
          } ],
          name : "Category (pN)"
        }, {
          group : [ {
            description : "Distant metastases",
            name : "M1"
          }, {
            name : "M (not applicable)"
          }, {
            name : "distant metastasis not applicable"
          } ],
          name : ""
        } ]
      }, {
        description : "Immunohistochemistry, Cytogenetics, Molecular Pathology",
        name : "Ancillary studies ordered",
       optional_state  : "required", "options" : [ {
          name : ""
        } ]
      } ]    
   
    
      
    }, {
      most_common : false,
      name : "Stomach",
      optional : false,
      organ_group : "Gastrointestinal",
      properties : [  {
        name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Endoscopic mucosal resection"
          }, {
            name : "Partial gastrectomy, proximal "
          }, {
            name : "Partial gastrectomy, distal "
          }, {
            name : "Partial gastrectomy, other  "
          }, {
            name : "Total gastrectomy"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Fundus"
          }, {
            name : "Body"
          }, {
            name : "Antrum"
          }, {
            name : "Pylorus"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor size",
       optional_state  : "required", "options" : [ {
          name : ""
        } ]
      }, {
        name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Adenocarcinoma"
          }, {
            name : "Adenocarcinoma, intestinal type"
          }, {
            name : "Adenocarcinoma, diffuse type "
          }, {
            description : "if >50% signet-ring cells",
            name : "Adenocarcinoma, signet-ring carcinoma "
          }, {
            name : "Adenocarcinoma, mixed "
          }, {
            name : "Adenocarcinoma, hepatoid  "
          }, {
            name : "Medullary carcinoma  "
          }, {
            name : "Large cell neuroendocrine carcinoma"
          }, {
            name : "Small cell neuroendocrine carcinoma"
          }, {
            name : "Mixed adenoneuroendocrine carcinoma"
          }, {
            name : "Squamous cell carcinoma"
          }, {
            name : "Adenosquamous carcinoma"
          }, {
            name : "Undifferentiated carcinoma"
          } ],
          name : ""
        } ]
      }, {
        name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Grade 1/3, Well differentiated"
          }, {
            name : "Grade 2/3, Moderately differentiated"
          }, {
            name : "Grade 3/3, Poorly differentiated"
          } ],
          name : ""
        } ]
      }, {
        name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "No evidence of primary tumor"
          }, {
            name : "High-grade dysplasia (carcinoma in situ) "
          }, {
            name : "Invades lamina propria"
          }, {
            name : "Invades into but not through muscularis mucosae"
          }, {
            name : "Invades submucosa"
          }, {
            name : "Invades muscularis propria"
          }, {
            name : "Invades subserosal connective tissue without involvement of visceral peritoneum"
          }, {
            name : "Penetrates serosa"
          }, {
            description : "specify",
            inputs_required : [ "" ],
            name : "Invades adjacent structures "
          }, {
            description : "specify",
            inputs_required : [ "" ],
            name : "Penetrates to the surface of the visceral peritoneum (serosa) and directly invades adjacent structures"
          } ],
          name : ""
        } ]
      }, {
        description : "include distance/location of closest proximal/distal/radial margin",
        name : "Margins, invasive tumor",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            name : "Positive"
          } ],
          name : ""
        } ]
      }, {
        description : "include distance/location of closest proximal/distal margin",
        name : "Margins, dysplasia/CIS",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            name : "Positive"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Treatment effect, primary site",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "No prior treatment"
          }, {
            name : "Present (score 1 or 2)"
          }, {
            name : "No response (score 3)"
          }, {
            name : "Indeterminate"
          }, {
            name : "Not known"
          }  ],
          name : ""
        } ]
      }, {
        name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Indeterminate"
          }, {
            name : "Suspicious"
          }, {
            name : "Present"
          }, {
            name : "Present, extensive"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            name : ""
          }, {
            description : "pathologic",
            name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            name : "m"
          }, {
            description : "recurrent",
            name : "r"
          }, {
            description : "post-treatment",
            name : "y"
          }, {
            name : "mp"
          }, {
            name : "rp"
          }, {
            name : "yp"
          }, {
            name : "mrp"
          }, {
            name : "myp"
          }, {
            name : "ryp"
          }, {
            name : "mryp"
          } ],
          name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            name : "TX"
          }, {
            description : "No tumor",
            name : "T0"
          }, {
            description : "Carcinoma in situ/high-grade glandular dysplasia",
            name : "Tis"
          }, {
            description : "Tumor invades lamina propria, muscularis mucosae, or submucosa",
            name : "T1"
          }, {
            description : "Tumor invades lamina propria or muscularis mucosae",
            name : "T1a"
          }, {
            description : "Tumor invades submucosa",
            name : "T1b"
          }, {
            description : "Tumor invades muscularis propria",
            name : "T2"
          }, {
            description : "Tumor invades subserosal connective tissue, without involvement of visceral peritoneum or adjacent structures",
            name : "T3"
          }, {
            description : "Tumor invades serosa (visceral peritoneum) or adjacent structures ",
            name : "T4"
          }, {
            description : "Tumor invades serosa (visceral peritoneum)  ",
            name : "T4a"
          }, {
            description : "Tumor invades adjacent structures",
            name : "T4b"
          } ],
          name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            name : "N0"
          }, {
            description : "Regional lymph node metastasis involving 1 to 2 nodes",
            name : "N1"
          }, {
            description : "3 to 6 nodes involved",
            name : "N2"
          }, {
            description : "7 or more nodes involved",
            name : "N3"
          }, {
            description : "7 to 15 perigastric lymph nodes",
            name : "N3a"
          }, {
            description : "16 or more perigastric lymph nodes",
            name : "N3b"
          } ],
          name : "Category (pN)"
        }, {
          group : [ {
            description : "Distant metastases",
            name : "M1"
          }, {
            name : "M (not applicable)"
          }, {
            name : "distant metastasis not applicable"
          } ],
          name : ""
        } ]
         }, {
          description : "Order IHC with reflex FISH",
        name : "Her2Neu by IHC",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Positive (3+)"
          }, {
            name : "Negative (0-1+)"
          }, {
            name : "Equivocal (2+)"
          }, {
            name : "Pending"
          }, {
            name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            name : "See case "
          } ],
          name : ""
        } ]
      }, {
        name : "Her2Neu by FISH",
        description : "Order IHC with reflext FISH",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Positive"
          }, {
            name : "Negative"
          }, {
            name : "Equivocal"
          }, {
            name : "Pending"
          }, {
            name : "Reflex pending if appropriate"
          }, {
            name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            name : "See case "
          } ],
          name : ""
        } ]
      }, {
         description : "Keytruda, specific scoring system",
        name : "PDL1",
       optional_state  : "required", "options" : [ {
          group : [ {
            inputs_required : [ "% of cells", [ "strong", "moderate", "weak" ] ],
            name : "Positive/Expressed"
          }, {
            inputs_required : [ "" ],
            name : "Positive, Score ="
          }, {
            name : "Negative (0%)"
          }, {
            name : "Pending"
          }, {
            name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            name : "See case "
          } ],
          name : ""
        }  ]
        }, {
           description: "adenocarcinoma only",
        name : "MSI IHC and Interpretation",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Intact nuclear expression of MMR proteins (MLH1, MSH2, MSH6, PMS2): No evidence of deficient mismatch repair (low probability of MSI-H)"
          },{
            name : "Loss of nuclear expression of one or more MMR proteins (MLH1, MSH2, MSH6, PMS2): deficient mismatch repair/ high probability of microsatellite instability-high (MSI-H). The presence of MSI-H/deficient mismatch repair may also be an indication for additional testing for Lynch syndrome and genetic counselling."
          }, {
            name : "Pending"
          }, {
            name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            name : "See case "
          }],
          name : ""
        } ]
     }]
    }, {
      most_common : false,
      name : "Stomach neuroendocrine tumor",
      optional : false,
      organ_group : "Endocrine",
      properties : [  {
        name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Endoscopic mucosal resection"
          }, {
            name : "Partial gastrectomy, proximal "
          }, {
            name : "Partial gastrectomy, distal "
          }, {
            name : "Partial gastrectomy, other  "
          }, {
            name : "Total gastrectomy"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Cardia"
          }, {
            name : "Fundus"
          }, {
            name : "Body"
          }, {
            name : "Antrum"
          }, {
            name : "Pylorus"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor size",
       optional_state  : "required", "options" : [ {
          name : ""
        } ]
      }, {
        name : "Tumor focality",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Single focus"
          }, {
            name : "Multiple foci"
          } ],
          name : ""
        } ]
      }, {
         description : "For small cell (high grade NET use stomach carcinoma protocol not this one) ",  
        name : "Type and Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "< 2mitoses/10 hpf and/or Ki67<3% ", 
            name : "Grade 1/3, Well differentiated neuroendocrine tumor, low grade (carcinoid)"
          }, {
            description : ">= 2 AND < 20 mitoses/10 hpf and/or Ki67 >=3 AND <20% ",  
            name : "Grade 2/3, Well differentiated neuroendocrine tumor, intermediate grade (atypical carcinoid)"
          }, {
             description : "> 20 mitoses/10 hpf and/or Ki67 >20% ",  
            name : "Grade 3/3, Well differentiated neuroendocrine tumor"
          } ],
          name : ""
        } ]
      }, {
           description : "mitoses/ 2 mm squared NOT 10 hpf, approximately count 42 hpf and divide by 5", 
        name : "Mitotic rate",
       optional_state  : "required", "options" : [ {
          group : [ {
            
            name : "Less than 2/ 2mm squared"
          }, {
          
            name : "at least 2 and less than 20 /2 mm squared"
          }, {
            
            name : "More than 20 per 2 mm squared"
          } ],
          name : ""
        } ]  
        
      }, {
        name : "Ki67 (Mib1)",
       optional_state  : "required", "options" : [ {
          group : [ {
            
            name : "Less than 3%"
          }, {
          
            name : "at least 3% and less than 20%"
          }, {
            
            name : "More than 20%"
          } ],
          name : ""
        } ]  
        
      }, {
        name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "No evidence of primary tumor"
          }, {
            name : "Invades lamina propria"
          }, {
            name : "Invades into but not through muscularis mucosae"
          }, {
            name : "Invades submucosa"
          }, {
            name : "Invades muscularis propria"
          }, {
            name : "Invades subserosal connective tissue without involvement of visceral peritoneum"
          }, {
            name : "Penetrates serosa"
          }, {
            description : "specify",
            inputs_required : [ "" ],
            name : "Invades adjacent structures "
          }, {
            description : "specify",
            inputs_required : [ "" ],
            name : "Penetrates to the surface of the visceral peritoneum (serosa) and directly invades adjacent structures"
          } ],
          name : ""
        } ]
      }, {
        description : "include distance/location of closest proximal/distal/radial margin",
        name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "distance location",
            inputs_required : [ "" ],
            name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            name : "Positive"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Indeterminate"
          }, {
            name : "Suspicious"
          }, {
            name : "Present"
          }, {
            name : "Present, extensive"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            name : ""
          }, {
            description : "pathologic",
            name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            name : "m"
          }, {
            description : "recurrent",
            name : "r"
          }, {
            description : "post-treatment",
            name : "y"
          }, {
            name : "mp"
          }, {
            name : "rp"
          }, {
            name : "yp"
          }, {
            name : "mrp"
          }, {
            name : "myp"
          }, {
            name : "ryp"
          }, {
            name : "mryp"
          } ],
          name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            name : "TX"
          }, {
            description : "No tumor",
            name : "T0"
          }, {
            description : "Carcinoma in situ/dysplasia (tumor size less than 0.5 mm), limited to mucosa",
            name : "Tis"
          }, {
            description : "Tumor invades lamina propria or submucosa and 1 cm or less in size",
            name : "T1"
          }, {
            description : "Tumor invades muscularis propria or more than 1 cm in size",
            name : "T2"
          }, {
            description : "Tumor penetrates subserosa",
            name : "T3"
          }, {
            description : "Tumor invades visceral peritoneum (serosal) or other organs or adjacent structures ",
            name : "T4"
          } ],
          name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            name : "N0"
          }, {
            description : "Regional lymph node metastases",
            name : "N1"
          } ],
          name : "Category (pN)"
        }, {
          group : [ {
            description : "Distant metastases",
            name : "M1"
          }, {
            name : "M (not applicable)"
          }, {
            name : "distant metastasis not applicable"
          } ],
          name : ""
        } ]
      } ]
    }, {
      most_common : false,
      name : "Testis",
      optional : false,
      organ_group : "Genitourinary",
      properties : [ {
        name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Right radical orchiectomy"
          } ,{
            name : "Left radical orchiectomy"
          }],
          name : ""
        } ]
      }, {
        name : "Tumor focality",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Single focus"
          }, {
            name : "Multiple foci"
          } ],
          name : ""
        } ]  
      }, {
        name : "Tumor size",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Equivocal"
          } ],
          name : ""
        } ]
     
      }, {
        name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
             description : "SALL4+, OCT3/4+, CD117+, Keratin -/focal+, CD30-, Glypican3-, CDX2-/focal+",
            name : "Seminoma, classical"
          }, {
            description : "give percentages",
            inputs_required : [ "" ],
            name : "Mixed germ cell tumor"
          }, {
            description : "SALL4+, OCT3/4+, CD117-, Keratin+, CD30+, Glypican3-, CDX2-/focal+",
            name : "Embryonal tumor"
          }, {
            description : "SALL4+, OCT3/4-, CD117-, Keratin -/focal +, CD30-, Glypican3+, CDX2+",
            name : "Yolk sac tumor"
          }, {
             description : "SALL4 +, OCT3/4-, GATA3+",
            name : "Choriocarcinoma"
          }, {
              description : "Prepubertal teratoma is benign, genetically distinct, and does not get a tumor summary",
            name : "Teratoma, postpubertal type"
          }, {
            name : "Teratoma with carcinoma"
          }, {
            name : "Teratoma with sarcoma"
          }, {
             description : "SALL4 +, OCT3/4 -, CD117+ (used to be spermatocytic seminoma)",
            name : "Spermatocytic tumor"
          }, {
            name : "Spermatocytic tumor with sarcoma"
          }, {
            name : "Leydig cell tumor"
          }, {
            name : "Malignant Leydig cell tumor"
          }, {
            name : "Gonadolblastoma"
          }, {
            name : "Sertoli cell tumor, classic"
          }, {
            name : "Sertoli cell tumor, malignant"
          }, {
            name : "Sertoli cell tumor, large cell calcifying"
          }, {
            name : "Granulosa cell tumor, adult"
          }, {
            name : "Granulosa cell tumor, juvenile"
          }, {
            name : "Fibroma-thecoma"
          } ],
          name : ""
        } ]
      
      }, {
        name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Limited to testis"
          }, {
            name : "Invades through tunica albuginea"
          }, {
            name : "Invades hilar soft tissues"
          }, {
            name : "Invades epididymis"
          }, {
            name : "Invades spermatic cord"
          }, {
              description : "M1a",
            name : "Discontinuous spermatic cord involvement"
          }, {
            name : "Invades scrotal wall"
          } ],
          name : ""
        } ]
  }, {
        name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            name : "Positive"
          } ],
          name : ""
        } ]
  
      }, {
        name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Indeterminate"
          }, {
            name : "Suspicious"
          }, {
            name : "Present"
          }, {
            name : "Present, extensive"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
   }, {
        name : "Positive lymph node location",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Not applicable"
          }, {
            name : "Interaortocaval"
          }, {
            name : "Paraaortic"
          }, {
            name : "Paracaval"
          }, {
            name : "Preaortic"
          }, {
            name : "Precaval"
          }, {
            name : "Retroaortic"
          }, {
            name : "Retrocaval"
          }, {
            name : "Other"
          } ],
          name : ""
        } ]
  
   }, {
     description : "size of lymph node, not met",
        name : "Size of largest involved lymph node",
        optional_state : "required",
        "options" : [ {
          group : [ {
            name : "Not applicable"
          } ],
          name : ""
        } ]
   }, {
        name : "Extranodal extension",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Not applicable"
          }, {
            name : "None"
          }, {
            name : "Present"
          }, {
            name : "Equivocal"
          } ],
          name : ""
        } ]
  
      }, {
        name : "Tumor type in lymph node",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Not applicable"
          } ],
          name : ""
        } ]
  
      }, {
        name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            name : ""
          }, {
            description : "pathologic",
            name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            name : "m"
          }, {
            description : "recurrent",
            name : "r"
          }, {
            description : "post-treatment",
            name : "y"
          }, {
            name : "mp"
          }, {
            name : "rp"
          }, {
            name : "yp"
          }, {
            name : "mrp"
          }, {
            name : "myp"
          }, {
            name : "ryp"
          }, {
            name : "mryp"
          } ],
          name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            name : "TX"
          }, {
            description : "in situ",
            name : "Tis"
          }, {
            description : "NONSEMINOMATOUS, limited to testis and rete testis AND no LVI (do not substage, that is only for seminoma)",
            name : "T1"
          }, {
            description : "PURE SEMINOMA ONLY: <= 3cm AND limited to testis and rete testis AND no LVI",
            name : "T1a"
          }, {
            description : "PURE SEMINOMA ONLY: > 3cm AND limited to testis and rete testis AND no LVI",
            name : "T1b"
          }, {
            description : "(limited to testis and rete testis AND LVI) OR (invades hilar soft tissue, epididymis, or external surface of tunica albuginea)",
            name : "T2"
          }, {
            description : "Invades spermatic cord",
            name : "T3"
          }, {
            description : "Invades scrotum",
            name : "T4"
          } ],
          name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            name : "NX"
          }, {
            description : "No regional lymph node metastases",
            name : "N0"
          }, {
            description : "<= 5 metastasis, all <= 2cm",
            name : "N1"
          }, {
            description : "1 metastasis (not ln) >2cm AND <= 5cm OR > 5 metastases AND all <= 5cm AND no extranodal extension",
            name : "N2"
          }, {
            description : "metastases (not ln) > 5cm",
            name : "N3"
          } ],
          name : "Category (pN)"
        }, {
          group : [ {
            description : "metastases nonregional or lung or discontinuous spermatic cord involvement",
            name : "M1a"
          }, {
            description : "other metastases",
            name : "M1b"
          }, {
            name : "M (not applicable)"
          }, {
            name : "distant metastasis not applicable"
          } ],
          name : ""
        } ]
      } ]
    }, {
      most_common : true,
      name : "Thyroid",
      optional : false,
      organ_group : "Endocrine",
      properties : [ {
        name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Total thyroidectomy"
          }, {
            name : "Right lobectomy"
          }, {
            name : "Left lobectomy"
          }, {
            name : "Right lobe and isthmus resection"
          }, {
            name : "Left lobe and isthmus resection"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Right lobe"
          }, {
            name : "Left lobe"
          }, {
            name : "Isthmus"
          }, {
            name : "Pyramidal lobe"
          }, {
            name : "Bilateral, largest focus right lobe"
          }, {
            name : "Bilateral, largest focus left lobe"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor focality",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Single focus"
          }, {
            name : "Multiple foci"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor size",
       optional_state  : "required", "options" : [ {
          name : ""
        } ]
      }, {
        name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Papillary carcinoma, NOS"
          }, {
            name : "Papillary carcinoma, NOS, encapsulated"
          }, {
            name : "Papillary carcinoma, NOS, predominantly but not completely encapsulated"
          }, {
            name : "Papillary carcinoma with tall cell features"
          }, {
            name : "Papillary carcinoma, follicular variant"
          }, {
            name : "Papillary carcinoma, follicular variant, invasive"
          }, {
            name : "Papillary carcinoma, follicular variant, invasive, predominantly encapsulated"
          }, {
              description : "CDX2 +",
            name : "Papillary carcinoma, columnar variant"
          }, {
              description : "Nuclear beta catenin +",
            name : "Papillary carcinoma, cribriform morular variant"
          }, {
            name : "Follicular carcinoma, minimally invasive"
          }, {
            name : "Follicular carcinoma, widely invasive"
          }, {
            name : "Hurthle cell carcinoma, minimally invasive"
          }, {
            name : "Hurthle cell carcinoma, widely invasive"
          }, {
            name : "Poorly differentiated thyroid carcinoma"
          }, {
             description : "CEA +, Calcitonin+, Chromogranin+, TTF1+, thyroglobulin -",
            name : "Medullary carcinoma"
          } ],
          name : ""
        } ]
      }, {
        name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Free"
          }, {
            name : "Positive, tumor abuts the inked margin"
          }, {
            inputs_required : [ "" ],
            name : "Positive"
          } ],
          name : ""
        } ]
      }, {
        name : "Angioinvasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Present"
          }, {
            name : "Equivocal"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymphatic invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Present"
          }, {
            name : "Equivocal"
          } ],
          name : ""
        } ]
      }, {
        name : "Extra-thyroidal extension",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Present"
          }, {
            name : "Equivocal"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, sites sampled",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Lymph nodes in thyroidectomy/lobectomy"
          }, {
            name : "Focused or single lymph node resection"
          }, {
            name : "Lymph nodes in thyroidectomy/lobectomy  and focused or single lymph node resection"
          }, {
            name : "Central compartment dissection (level VI)"
          }, {
            name : "Right lateral neck dissection (levels I-V)"
          }, {
            name : "Left lateral neck dissection (levels I-V)"
          }, {
            name : "Superior mediastinal lymph nodes (levels VII)"
          }, {
            name : "Right/central neck dissection (levels II-VI)"
          }, {
            name : "Left/central neck dissection (levels II-VI)"
          }, {
            name : "Right/central neck dissection (levels II-VI) and perithyroidal lymph nodes"
          }, {
            name : "Left/central neck dissection (levels II-VI) and perithyroidal lymph nodes"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Extranodal extension",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Not applicable"
          }, {
            name : "None"
          }, {
            name : "Present"
          }, {
            name : "Equivocal"
          } ],
          name : ""
        } ]
      }, {
        name : "Size of largest metastasis",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            name : ""
          }, {
            description : "pathologic",
            name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            name : "m"
          }, {
            description : "recurrent",
            name : "r"
          }, {
            description : "post-treatment",
            name : "y"
          }, {
            name : "mp"
          }, {
            name : "rp"
          }, {
            name : "yp"
          }, {
            name : "mrp"
          }, {
            name : "myp"
          }, {
            name : "ryp"
          }, {
            name : "mryp"
          } ],
          name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            name : "TX"
          }, {
            description : "<= 1cm  organ limited",
            name : "T1a"
          }, {
            description : "> 1 cm AND <= 2cm  organ limited",
            name : "T1b"
          }, {
            description : "> 2 cm AND <= 4cm  organ limited",
            name : "T2"
          }, {
            description : "> 4 cm limited to thyroid ",
            name : "T3a"
          }, {
            description : "GROSS (theoretically from the op report, not microscopic) extrathyroidal extension invading only strap muscles from a tumor of any size ",
            name : "T3b"
          }, {
            description : "GROSS (theoretically from the op report, not microscopic)invasion of subcutaneous tissue, larynx, trachea, esophagus, recurrent laryngeal nerve ",
            name : "T4a"
          }, {
            description : "GROSS (theoretically from the op report, not microscopic)invasion of prevertebral fascia, carotid artery or mediastinal vessel",
            name : "T4b"
          } ],
          name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            name : "NX"
          }, {
            description : "No regional lymph node metastasis by pathology",
            name : "N0a"
          }, {
            description : "positive level VI or VII nodes (pretracheal, paratracheal or prelaryngeal/Delphian or upper mediastinal",
            name : "N1a"
          }, {
            description : "positive level I - V nodes (lateral neck or retropharyngeal",
            name : "N1b"
          } ],
          name : "Category (pN)"
        }, {
          group : [ {
            description : "metastases",
            name : "M1"
          }, {
            name : "M (not applicable)"
          }, {
            name : "distant metastasis not applicable"
          } ],
          name : ""
        } ]
      } ]
    }, {
      most_common : false,
      name : "Thymus",
      optional : false,
      organ_group : "Thorax",
      properties : [ {
        name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Thymectomy"
          }, {
            name : "Partial thymectomy"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor size",
       optional_state  : "required", "options" : [ {
          name : ""
        } ]
      }, {
        name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Thymoma"
          }, {
             description : "spindle/medullary",
            name : "Type A thymoma "
          }, {
             description : "mixed spindle/medullary and lymphocyte/epithelial",
            name : "Type AB thymoma"
          }, {
             description : "lymphocyte predominant",
            name : "Type B1 thymoma "
          }, {
             description : "mixed lymphocyte and epithelial",
            name : "Type B2 thymoma "
          }, {
             description : "epithelial predominant",
            name : "Type B3 thymoma "
          }, {
            name : "Thymic carcinoma "
          }, {
            name : "Squamous cell carcinoma "
          }, {
            name : "Basaloid carcinoma"
          }, {
            name : "Mucoepidermoid carcinoma"
          }, {
            name : "Lymphoepithelioma-like carcinoma "
          }, {
            name : "Sarcomatoid carcinoma "
          }, {
            name : "Clear cell carcinoma "
          }, {
            name : "Adenocarcinoma "
          }, {
            name : "Well-differentiated neuroendocrine carcinoma, typical carcinoid"
          }, {
            name : "Well-differentiated neuroendocrine carcinoma, atypical carcinoid "
          }, {
            name : "Poorly differentiated neuroendocrine carcinoma, large cell neuroendocrine carcinoma"
          }, {
            name : "Poorly differentiated neuroendocrine carcinoma, small cell carcinoma, neuroendocrine type"
          } ],
          name : ""
        } ]
      }, {
        name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Limited to thymus"
          }, {
            name : "Invades mediastinal fat"
          }, {
            name : "Invades pulmonary parenchyma"
          }, {
            name : "Invades pleura"
          }, {
            name : "Invades pericardium"
          }, {
            name : "Invades diaphragm"
          } ],
          name : ""
        } ]
      }, {
        name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "location",
            inputs_required : [ "" ],
            name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            name : "Positive"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Treatment effect, primary site",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Not applicable"
          }, {
            name : "None"
          }, {
            description : "% residual viable tumor",
            inputs_required : [ "" ],
            name : "Present"
          }, {
            name : "Indeterminate"
          }, {
            name : "Not known"
          }  ],
          name : ""
        } ]
      }, {
        name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Indeterminate"
          }, {
            name : "Suspicious"
          }, {
            name : "Present"
          }, {
            name : "Present, extensive"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            name : ""
          }, {
            description : "pathologic",
            name : "p"
          }, {
            description : "multiple foci",
            name : "m"
          }, {
            description : "recurrent",
            name : "r"
          }, {
            description : "post-treatment",
            name : "y"
          }, {
            name : "mp"
          }, {
            name : "rp"
          }, {
            name : "yp"
          }, {
            name : "mrp"
          }, {
            name : "myp"
          }, {
            name : "ryp"
          }, {
            name : "mryp"
          } ],
          name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            name : "TX"
          }, {
            description : "No mediastinal pleural involvement)",
            name : "T1a"
          }, {
            description : "direct invasion of mediastinal pleura",
            name : "T1b"
          }, {
            description : "invasion of pericardium",
            name : "T2"
          }, {
            description : "invasion of lung brachiocephalic vein superior vena cava phrenic nerve chest wall pulmonary artery or vein",
            name : "T3"
          }, {
            description : "Invasion of aorta, arch vessels pulmonary artery myocardium, trachea or esophagus",
            name : "T4"
          }],
          name : ""
        }, {
          group : [ {
            description : "THYMOMA",
            name : "N (not applicable)"
          }, {
            description : "THYMIC CARCINOMA Regional lymph nodes cannot be assessed",
            name : "NX"
          }, {
            description : "THYMIC CARCINOMA No regional lymph node metastasis",
            name : "N0"
          }, {
            description : "THYMIC CARCINOMA Metastasis in anterior mediastinal lymph nodes",
            name : "N1"
          }, {
            description : "THYMIC CARCINOMA Metastasis in other intrathoracic lymph nodes, excluding anterior mediastinal lymph nodes ",
            name : "N2"
          } ],
          name : "Category (pN)"
        }, {
          group : [ {
            description : "separate plerual or pericardial nodule",
            name : "M1a"
          }, {
               description : "pulmonary intraparenchymal met or distant mets",
            name : "M1b"
          }, {
            name : "M (not applicable)"
          }, {
            name : "distant metastasis not applicable"
          } ],
          name : ""
        } ]
      } ]
    }, {
      most_common : false,
      name : "Trophoblast",
      optional : false,
      organ_group : "Gynecologic",
      properties : [ {
        name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Dilation and curettage "
          }, {
            name : "Hysterectomy"
          }, {
            name : "Radical hysterectomy"
          }, {
            name : "Pelvic exenteration "
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor location",
       optional_state  : "required", "options" : [ {
          name : ""
        } ]
      }, {
        name : "Tumor size",
       optional_state  : "required", "options" : [ {
          name : ""
        } ]
      }, {
        name : "Type",
       optional_state  : "required", "options" : [ {
          group : [  {
            name : "Hydatidiform mole, invasive "
          }, {
            name : "Choriocarcinoma "
          }, {
            name : "Placental site trophoblastic tumor "
          }, {
            name : "Epithelioid trophoblastic tumor "
          } ],
          name : ""
        } ]
      }, {
         description : "R/L ovary, fallopian tube, vagina, broad ligament",
        name : "Other tissue(s) involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Not applicable"
          }, {
            description : "specify",
            inputs_required : [ "" ],
            name : "Positive "
          } ],
          name : ""
        } ]
      }, {
        name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "location",
            inputs_required : [ "" ],
            name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            name : "Positive"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Indeterminate"
          }, {
            name : "Suspicious"
          }, {
            name : "Present"
          }, {
            name : "Present, extensive"
          } ],
          name : ""
        } ]
      }, {
        name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            name : ""
          }, {
            description : "pathologic",
            name : "AJCC p"
          }, {
            description : "multiple foci of invasive carcinoma",
            name : "AJCC m"
          }, {
            description : "recurrent",
            name : "AJCC r"
          }, {
            description : "post-treatment",
            name : "AJCC y"
          }, {
            name : "AJCC mp"
          }, {
            name : "AJCC rp"
          }, {
            name : "AJCC yp"
          }, {
            name : "AJCC mrp"
          }, {
            name : "AJCC myp"
          }, {
            name : "AJCC ryp"
          }, {
            name : "AJCC mryp"
          } ],
          name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            name : "TX"
          }, {
            description : "Tumor limited to uterus",
            name : "T1"
          }, {
            description : "Tumor extends to other genital structures (ovary, tube, vagina, broad ligaments) by metastasis or direct extension",
            name : "T2"
          } ],
          name : ""
        }, {
          group : [ {
            description : "lung metastases",
            name : "M1a"
          }, {
            description : "all other metastases, specify # and site",
            inputs_required : [ "" ],
            name : "M1b"
          }, {
            name : "M (not applicable)"
          }, {
            name : "distant metastasis not applicable"
          } ],
          name : ""
        } ]
   
    }, {
        name : "Stage FIGO (2015)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "Disease confined to the uterus",
            name : "FIGO I"
          }, {
            description : "Gestational trophoblastic tumor extends outside of the uterus, but limited to the genital structures (adenexa, vagina, broad ligament)",
            name : "FIGO II"
          }, {
            description : "Gestational trophoblastic tumor extends to the lungs, with or without known genital tract involvement",
            name : "FIGO III"
          }, {
            description : "All other metastatic sites",
            name : "FIGO IV"
          }, {
            description : "",
            name : "Not applicable"
          } ],
          name : ""
        } ]
          } ]
      }, {
      most_common : false,
      name : "Ureter Renal Pelvis",
      optional : false,
      organ_group : "Genitourinary",
      properties : [ {
        name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Right nephroureterectomy, partial"
          }, {
            name : "Right nephroureterectomy, complete"
          }, {
            name : "Right ureterectomy"
          },{
            name : "Left nephroureterectomy, partial"
          }, {
            name : "Left nephroureterectomy, complete"
          }, {
            name : "Left ureterectomy"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor Location",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Ureter"
          }, {
            name : "Renal pelvis"
          }, {
            name : "Ureter and renal pelvis"
          }, {
            name : "Not specified"
          } ],
          name : ""
        } ] 
  }, {
        name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Urothelial carcinoma (TCC) papillary, non invasive"
          }, {
            name : "Urothelial carcinoma in situ"
          }, {
            name : "Invasive urothelial carcinoma (TCC)"
          }, {
            name : "Invasive urothelial carcinoma (TCC) with squamous differentiation"
          }, {
            name : "Invasive urothelial carcinoma (TCC) with glandular differentiation"
          }, {
            name : "Invasive urothelial carcinoma, nested "
          }, {
            name : "Invasive urothelial carcinoma, microcystic"
          }, {
            name : "Invasive urothelial carcinoma, lympho-epithelial"
          }, {
            name : "Invasive urothelial carcinoma, plasmacytoid"
          }, {
            name : "Invasive urothelial carcinoma, sarcomatoid"
          }, {
            name : "Invasive urothelial carcinoma, giant cell"
          }, {
            name : "Squamous cell carcinoma"
          }, {
            name : "Squamous cell carcinoma, verrucous variant"
          }, {
            name : "Adenocarcinoma"
          }, {
            name : "Small cell carcinoma"
          }, {
            name : "Large cell neuroendocrine carcinoma"
          }, {
            name : "Well-differentiated neuroendocrine tumor (carcinoid)"
          }, {
            name : "Paraganglioma"
          }, {
            name : "Clear cell carcinoma"
          }, {
            name : "Endometrioid carcinoma"
          }],
          name : ""
        } ]
  
      }, {
        name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Low grade"
          }, {
            name : "High grade"
          }, {
            description : "(squamous carcinoma and adenocarcinoma only",
            name : "Grade 1/3, low grade"
          }, {
            name : "Grade 2/3, intermediate grade"
          }, {
            name : "Grade 3/3, high grade"
          } ],
          name : ""
        } ]
      }, {
        name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Noninvasive papillary carcinoma"
          }, {
            name : "Carcinoma in situ"
          }, {
            name : "Invades subepithelial connective tissue"
          }, {
            name : "Invades muscularis propria"
          }, {
            name : "Invades into peripelvic fat or the renal parenchyma"
          }, {
             description : "specify",
            inputs_required : [ "" ],
            name : "Invades adjacent organs, or through the kidney into the perinephric fat"
          } ],
          name : ""
        } ]
      }, {
        name : "Margins, invasive tumor",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Free"
          }, {
            description : "location (proximal/distal ureteral, deep)",
            inputs_required : [ "" ],
            name : "Positive"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
         }, {
          description : "location (proximal/distal ureteral)",
        name : "Margins, non-invasive tumor",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Free"
          }, {
            description : "location (ureteral, urethral, deep), type (papillary, CIS)",
            inputs_required : [ "" ],
            name : "Positive"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
  
   
  
      }, {
        name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            name : ""
          }, {
            description : "pathologic",
            name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            name : "m"
          }, {
            description : "recurrent",
            name : "r"
          }, {
            description : "post-treatment",
            name : "y"
          }, {
            name : "mp"
          }, {
            name : "rp"
          }, {
            name : "yp"
          }, {
            name : "mrp"
          }, {
            name : "myp"
          }, {
            name : "ryp"
          }, {
            name : "mryp"
          } ],
          name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            name : "TX"
          }, {
            description : "noninvasive papillary",
            name : "Ta"
          }, {
            description : "CIS",
            name : "Tis"
          }, {
            description : "Invades lamina propria",
            name : "T1"
          }, {
            description : "Invades muscularis propria",
            name : "T2"
          }, {
            description : "Invades into peripelvic fat or the renal parenchyma or periureteric fat",
            name : "T3"
          }, {
            description : "Invades adjacent organs, or through the kidney into the perinephric fat",
            name : "T4"
          } ],
          name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            name : "N0"
          }, {
            description : " 1 regional lymph node metastasis  (not ln) <= 2cm",
            name : "N1"
          }, {
            description : "(> 1 regional lymph node metastases) OR (1 metastasis  (not ln) > 2cm)",
            name : "N2"
          } ],
          name : "Category (pN)"
        }, {
          group : [ {
            description : "metastases",
            name : "M1"
          }, {
            name : "M (not applicable)"
          }, {
            name : "distant metastasis not applicable"
          } ],
          name : ""
        } ]
      }, {
         description : "in non-neoplastic kidney, including glomerular, tubulointerstitial and vascular disease",
        name : "Additional findings",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Nonspecific changes"         
          }, {
            name : "Focal nonspecific chronic inflammation"
          }, {
            name : "Focal glomerulosclerosis"
          }, {
            name : "Interstitial nephritis"
          }, {
            name : "Chronic pyelonephritis"
          }, {
            name : "Acute pyelonephritis"
          }, {
            name : "End stage kidney disease"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
        }, {
         description: "T3+ or N1+ only, otherwise NA",
        name : "MSI IHC and Interpretation",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Intact nuclear expression of MMR proteins (MLH1, MSH2, MSH6, PMS2): No evidence of deficient mismatch repair (low probability of MSI-H)"
          },{
            name : "Loss of nuclear expression of one or more MMR proteins (MLH1, MSH2, MSH6, PMS2): deficient mismatch repair/ high probability of microsatellite instability-high (MSI-H). The presence of MSI-H/deficient mismatch repair may also be an indication for additional testing for Lynch syndrome and genetic counselling."
          }, {
            name : "Pending"
          }, {
            name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            name : "See case "
          }],
          name : ""
        } ]
        }, {
           description : "Ventana PDL1, if squamous differentiation use that block for PDL1",
        name : "Ancillary studies ordered",
       optional_state  : "required", "options" : [ {
          group : [ {
             description : "T1-2N0",
            name : "None"
          }, {
             description : "T3-4 or N1",
            name : "PDL1 and FoundationOne"
          }, {
            name : "Pending"
          }, {
            name : "Not applicable"
          }, {
            inputs_required : [ "" ],
            name : "See case"
          } ],
          name : ""
        } ]
      } ]
    }, {
      most_common : false,
      name : "Urethra",
      optional : false,
      organ_group : "Genitourinary",
      properties : [  {
        name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Partial urethrectomy"
          }, {
            name : "Total urethrectomy"
          }, {
            name : "Urethrectomy with cystectomy"
          }, {
            name : "Urethrectomy with cystoprostatectomy"
          }, {
            name : "Urethrectomy with penectomy"
          }, {
            name : "Anterior exenteration"
          } ],
          name : ""
        } ]
      
       }, {
        name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Urothelial carcinoma (TCC) papillary, non invasive"
          }, {
            name : "Urothelial carcinoma in situ"
          }, {
            name : "Invasive urothelial carcinoma (TCC)"
          }, {
            name : "Invasive urothelial carcinoma (TCC) with squamous differentiation"
          }, {
            name : "Invasive urothelial carcinoma (TCC) with glandular differentiation"
          }, {
            name : "Invasive urothelial carcinoma, nested "
          }, {
            name : "Invasive urothelial carcinoma, microcystic"
          }, {
            name : "Invasive urothelial carcinoma, lympho-epithelial"
          }, {
            name : "Invasive urothelial carcinoma, plasmacytoid"
          }, {
            name : "Invasive urothelial carcinoma, sarcomatoid"
          }, {
            name : "Invasive urothelial carcinoma, giant cell"
          }, {
            name : "Squamous cell carcinoma"
          }, {
            name : "Squamous cell carcinoma, verrucous variant"
          }, {
            name : "Adenocarcinoma"
          }, {
            name : "Small cell carcinoma"
          }, {
            name : "Large cell neuroendocrine carcinoma"
          }, {
            name : "Well-differentiated neuroendocrine tumor (carcinoid)"
          }, {
            name : "Paraganglioma"
          }, {
            name : "Clear cell carcinoma"
          }, {
            name : "Endometrioid carcinoma"
          }],
          name : ""
        } ]
      }, {
        name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Low grade"
          }, {
            name : "High grade"
          }, {
            description : "(squamous carcinoma and adenocarcinoma only",
            name : "Grade 1/3, low grade"
          }, {
            name : "Grade 2/3, intermediate grade"
          }, {
            name : "Grade 3/3, high grade"
          } ],
          name : ""
        } ]
      }, {
        name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Noninvasive papillary carcinoma"
          }, {
            name : "Carcinoma in situ"
          }, {
            name : "Invades subepithelial connective tissue"
          }, {
            name : "Invades corpus spongiosum"
          }, {
            name : "Invades periurethral muscle"
          }, {
            name : "Urothelial CIS involves prostatic urethra"
          }, {
            name : "Urothelial CIS involves prostatic ducts"
          }, {
            name : "Invades prostatic stroma"
          }, {
            name : "Invades periprostatic fat"
          }, {
            name : "Invades corpus cavernosum"
          }, {
            name : "Invades beyond prostatic capsule"
          }, {
            name : "Invades anterior vagina"
          }, {
            name : "Invades bladder neck"
          }, {
            name : "Invades bladder wall"
          }, {
            name : "Invades rectum"
          }, {
            inputs_required : [ "" ],
            name : "Invades adjacent structures"
          } ],
          name : ""
        } ]
      }, {
        name : "Margins, invasive tumor",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Free"
          }, {
            description : "location (proximal, distal ,deep)",
            inputs_required : [ "" ],
            name : "Positive"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Margins, dysplasia/CIS",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Free"
          }, {
            description : "location (proximal, distal ,deep)",
            inputs_required : [ "" ],
            name : "Positive"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            name : ""
          }, {
            description : "pathologic",
            name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            name : "m"
          }, {
            description : "recurrent",
            name : "r"
          }, {
            description : "post-treatment",
            name : "y"
          }, {
            name : "mp"
          }, {
            name : "rp"
          }, {
            name : "yp"
          }, {
            name : "mrp"
          }, {
            name : "myp"
          }, {
            name : "ryp"
          }, {
            name : "mryp"
          } ],
          name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            name : "TX"
          }, {
            description : "noninvasive papillary or verrucous",
            name : "Ta"
          }, {
            description : "CIS",
            name : "Tis"
          }, {
            description : "CIS involvement of prostatic urethra  ",
            name : "Tis pu"
          }, {
            description : "CIS involvement of prostatic ducts",
            name : "Tis pd"
          }, {
            description : "Invades lamina propria",
            name : "T1"
          }, {
            description : "Invades corpus spongiosum, prostate stroma, or periurethral muscle",
            name : "T2"
          }, {
            description : "Invades corpus cavernosum, beyond prostatic capsule, anterior vagina, or bladder neck",
            name : "T3"
          }, {
            description : "Invades adjacent organs (invasion of the bladder)",
            name : "T4"
          } ],
          name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            name : "N0"
          }, {
            description : " 1 regional lymph node metastasis",
            name : "N1"
          }, {
            description : "> 1 regional lymph node metastases",
            name : "N2"
          } ],
          name : "Category (pN)"
        }, {
          group : [ {
            description : "metastases",
            name : "M1"
          }, {
            name : "M (not applicable)"
          }, {
            name : "distant metastasis not applicable"
          } ],
          name : ""
        } ]
      } ]
    }, {
      most_common : false,
      name : "Urinary Bladder, Cystectomy",
      optional : false,
      organ_group : "Genitourinary",
      properties : [ {
        name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Partial cystectomy"
          }, {
            name : "Total cystectomy"
          }, {
            name : "Radical cystectomy"
          }, {
            name : "Radical cystoprostatectomy"
          }, {
            name : "Anterior exenteration"
          } ],
          name : ""
        } ]
       }, {
        name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Trigone"
          }, {
            name : "Right lateral wall"
          }, {
            name : "Left lateral wall"
          }, {
            name : "Anterior wall"
          }, {
            name : "Posterior wall"
          } , {
            name : "Dome"
          }, {
            name : "Indeterminate"
          }],
          name : ""
        } ]  
      }, {
        name : "Tumor size",
       optional_state  : "required", "options" : [ {
          name : ""
        } ]
      }, {
        name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Urothelial carcinoma (TCC) papillary, non invasive"
          }, {
            name : "Urothelial carcinoma in situ"
          }, {
            name : "Invasive urothelial carcinoma (TCC)"
          }, {
            name : "Invasive urothelial carcinoma (TCC) with squamous differentiation"
          }, {
            name : "Invasive urothelial carcinoma (TCC) with glandular differentiation"
          }, {
            name : "Invasive urothelial carcinoma, nested "
          }, {
            name : "Invasive urothelial carcinoma, microcystic"
          }, {
            name : "Invasive urothelial carcinoma, lympho-epithelial"
          }, {
            name : "Invasive urothelial carcinoma, plasmacytoid"
          }, {
            name : "Invasive urothelial carcinoma, sarcomatoid"
          }, {
            name : "Invasive urothelial carcinoma, giant cell"
          }, {
            name : "Squamous cell carcinoma"
          }, {
            name : "Squamous cell carcinoma, verrucous variant"
          }, {
            name : "Adenocarcinoma"
          }, {
            name : "Small cell carcinoma"
          }, {
            name : "Large cell neuroendocrine carcinoma"
          }, {
            name : "Well-differentiated neuroendocrine tumor (carcinoid)"
          }, {
            name : "Paraganglioma"
          }, {
            name : "Clear cell carcinoma"
          }, {
            name : "Endometrioid carcinoma"
          }],
          name : ""
        } ]
      
      }, {
        name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Low grade"
          }, {
            name : "High grade"
          }, {
            description : "(squamous carcinoma and adenocarcinoma only",
            name : "Grade 1/3, low grade"
          }, {
            name : "Grade 2/3, intermediate grade"
          }, {
            name : "Grade 3/3, high grade"
          } ],
          name : ""
        } ]
      }, {
        name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Noninvasive papillary carcinoma"
          }, {
            name : "Carcinoma in situ"
          }, {
            name : "Invades lamina propria"
          }, {
            name : "Invades superficial muscularis propria (inner half)"
          }, {
            name : "Invades deep muscularis propria (outer half)"
          }, {
            name : "Invades perivesical tissue, microscopically"
          }, {
            name : "Invades perivesical tissue, grossly (extravesicular mass)"
          }, {
             description : "includes prostate (consider if urethral protocol is more appropriate), seminal vesicles, uterus, vagina rectum soft tissues",
            inputs_required : [ "" ],
            name : "Invades adjacent structures"
          } ],
          name : ""
        } ]
      }, {
        name : "Margins, invasive tumor",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Free"
          }, {
            description : "location (ureteral (right and left), urethral ,deep/soft tissue)",
            inputs_required : [ "" ],
            name : "Positive"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Margins, non-invasive tumor",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Free"
          }, {
            description : "location (ureteral, urethral, deep), type (papillary, CIS)",
            inputs_required : [ "" ],
            name : "Positive"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
         }, {
        name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Indeterminate"
          }, {
            name : "Suspicious"
          }, {
            name : "Present"
          }, {
            name : "Present, extensive"
          } ],
          name : ""
        } ]
        
      }, {
        name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      
      }, {
        name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            name : ""
          }, {
            description : "pathologic",
            name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            name : "m"
          }, {
            description : "recurrent",
            name : "r"
          }, {
            description : "post-treatment",
            name : "y"
          }, {
            name : "mp"
          }, {
            name : "rp"
          }, {
            name : "yp"
          }, {
            name : "mrp"
          }, {
            name : "myp"
          }, {
            name : "ryp"
          }, {
            name : "mryp"
          } ],
          name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            name : "TX"
          }, {
            description : "noninvasive papillary",
            name : "Ta"
          }, {
            description : "CIS",
            name : "Tis"
          }, {
            description : "Invades lamina propria",
            name : "T1"
          }, {
            description : "Invades superficial muscularis propria (inner half)",
            name : "T2a"
          }, {
            description : "Invades deep muscularis propria (outer half)",
            name : "T2b"
          }, {
            description : "Invades perivesical tissue, microscopically",
            name : "T3a"
          }, {
            description : "Invades perivesical tissue, grossly (extravesicular mass)",
            name : "T3b"
          }, {
            description : "Invades prostatic stroma, seminal vesicles, uterus, or vagina",
            name : "T4a"
          }, {
            description : "Invades pelvic wall or abdominal wall",
            name : "T4b"
          } ],
          name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            name : "N0"
          }, {
            description : " 1 regional lymph node metastasis",
            name : "N1"
          }, {
            description : "> 1 regional lymph node metastases",
            name : "N2"
          }, {
            description : ">= 1 common iliac lymph node metastases",
            name : "N3"
          } ],
          name : "Category (pN)"
        }, {
          group : [ {
            description : "metastases to non regional lymph nodes",
            name : "M1a"
          }, {
              description : "metastases to non lymph nodes",
            name : "M1b"
          }, {
            name : "M (not applicable)"
          }, {
            name : "distant metastasis not applicable"
          } ],
          name : ""
        } ]
        }, {
         description: "T3+ or N1+ only, otherwise NA",
        name : "MSI IHC and Interpretation",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Intact nuclear expression of MMR proteins (MLH1, MSH2, MSH6, PMS2): No evidence of deficient mismatch repair (low probability of MSI-H)"
          },{
            name : "Loss of nuclear expression of one or more MMR proteins (MLH1, MSH2, MSH6, PMS2): deficient mismatch repair/ high probability of microsatellite instability-high (MSI-H). The presence of MSI-H/deficient mismatch repair may also be an indication for additional testing for Lynch syndrome and genetic counselling."
          }, {
            name : "Pending"
          }, {
            name : "Not applicable"
          }, {
            description : "case #",
            inputs_required : [ "" ],
            name : "See case "
          }],
          name : ""
        } ]
        }, {
           description : "Ventana PDL1, if squamous differentiation use that block for PDL1",
        name : "Ancillary studies ordered",
       optional_state  : "required", "options" : [ {
          group : [ {
             description : "T1-2N0",
            name : "None"
          }, {
             description : "T3-4 or N1",
            name : "PDL1 and FoundationOne"
          }, {
            name : "Pending"
          }, {
            name : "Not applicable"
          }, {
            inputs_required : [ "" ],
            name : "See case"
          } ],
          name : ""
        } ]
      } ]
    }, {
      most_common : false,
      name : "Urinary Bladder, TUR/Biopsy",
      optional : true,
      organ_group : "Genitourinary",
      properties : [ {
        name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Bladder TUR"
          }, {
            name : "Bladder biopsy"
          } ],
          name : ""
        } ]
      }, {
        name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Urothelial carcinoma (TCC) papillary, non invasive"
          }, {
            name : "Urothelial carcinoma in situ"
          }, {
            name : "Invasive Urothelial carcinoma (TCC)"
          }, {
            name : "Invasive urothelial carcinoma (TCC) with squamous differentiation"
          }, {
            name : "Invasive urothelial carcinoma (TCC) with glandular differentiation"
          }, {
            name : "Squamous cell carcinoma"
          }, {
            name : "Adenocarcinoma"
          }, {
            name : "Small cell carcinoma"
          } ],
          name : ""
        } ]
      }, {
        name : "Additional findings",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Papilloma"
          }, {
            name : "Inverted papilloma"
          }, {
            name : "PUN-LMP"
          } ],
          name : ""
        } ]
      }, {
        name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Low grade"
          }, {
            name : "High grade"
          }, {
            description : "(squamous carcinoma and adenocarcinoma only",
            name : "Intermediate grade"
          } ],
          name : ""
        } ]
      }, {
        name : "Muscularis Propria (Adequacy)",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Present"
          }, {
            name : "Equivocal"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Indeterminate"
          }, {
            name : "Suspicious"
          }, {
            name : "Present"
          }, {
            name : "Present, extensive"
          } ],
          name : ""
        } ]
      }, {
        name : "Extent",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Noninvasive papillary carcinoma"
          }, {
            name : "Carcinoma in situ"
          }, {
            name : "Invades lamina propria"
          }, {
            name : "Suspicious for lamina propria invasion"
          }, {
            name : "Invades muscularis propria"
          }, {
            name : "Invades muscle, favor muscularis mucosa"
          }, {
            name : "Invades muscle, favor muscularis propria"
          }, {
            name : "CIS involves prostatic urethra in prostatic chips"
          }, {
            name : "CIS involves prostatic ducts and acini"
          }, {
            name : "Invades prostatic stroma"
          } ],
          name : ""
        } ]
      }, {
        name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            name : ""
          }, {
            description : "pathologic",
            name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            name : "m"
          }, {
            description : "recurrent",
            name : "r"
          }, {
            description : "post-treatment",
            name : "y"
          }, {
            name : "mp"
          }, {
            name : "rp"
          }, {
            name : "yp"
          }, {
            name : "mrp"
          }, {
            name : "myp"
          }, {
            name : "ryp"
          }, {
            name : "mryp"
          } ],
          name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            name : "TX"
          }, {
            description : "noninvasive papillary",
            name : "Ta"
          }, {
            description : "noninvasive papillary, no muscularis propria",
            name : " at least Ta"
          }, {
            description : "CIS",
            name : "Tis"
          }, {
            description : "CIS, no muscularis propria",
            name : "at least Tis"
          }, {
            description : "Invades lamina propria",
            name : "T1"
          }, {
            description : "Suspicious for lamina propria invasion",
            name : "Ta-1"
          }, {
            description : "Invades lamina propria, no musclularis propria",
            name : " at least T1"
          }, {
            description : "Invades superficial muscularis propria (inner half)",
            name : "T2"
          }, {
            description : "Invades prostatic stroma",
            name : "T4a"
          } ],
          name : ""
        } ]
      } ]
    }, {
      most_common : false,
      name : "Uterine Sarcoma",
      optional : false,
      organ_group : "Gynecologic",
      properties : [ {
        name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Myomectomy"
          }, {
            name : "Supracervical hysterectomy"
          }, {
            name : "Simple hysterectomy"
          }, {
            name : "Radical hysterectomy"
          }, {
            name : "Supracervical hysterectomy and right salpingo-oophorectomy"
          }, {
            name : "Simple hysterectomy and right salpingo-oophorectomy"
          }, {
            name : "Radical hysterectomy and right salpingo-oophorectomy"
          }, {
            name : "Supracervical hysterectomy and left salpingo-oophorectomy"
          }, {
            name : "Simple hysterectomy and left salpingo-oophorectomy"
          }, {
            name : "Radical hysterectomy and left salpingo-oophorectomy"
          }, {
            name : "Supracervical hysterectomy and bilateral salpingo-oophorectomy"
          }, {
            name : "Simple hysterectomy and bilateral salpingo-oophorectomy"
          }, {
            name : "Radical hysterectomy and bilateral salpingo-oophorectomy"
          }, {
            name : "Supracervical hysterectomy, bilateral salpingo-oophorectomy and omentectomy"
          }, {
            name : "Simple hysterectomy, bilateral salpingo-oophorectomy and omentectomy"
          }, {
            name : "Radical hysterectomy, bilateral salpingo-oophorectomy and omentectomy"
          } ],
          name : ""
        } ]
      }, {
        name : "Specimen integrity",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Not applicable"
          }, {
            name : "Intact"
          }, {
            name : "Morcellated"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor size",
       optional_state  : "required", "options" : [ {
          name : ""
        } ]
      }, {
        name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Leiomyosarcoma"
          }, {
            name : "Low-grade endometrial stromal sarcoma"
          }, {
            name : "Low-grade endometrial stromal sarcoma with smooth muscle differentiation "
          }, {
            name : "Low-grade endometrial stromal sarcoma with sex cord elements"
          }, {
            name : "Low-grade endometrial stromal sarcoma with glandular elements"
          }, {
            name : "High-grade endometrial stromal sarcoma"
          }, {
            name : "Undifferentiated uterine/endometrial sarcoma"
          }, {
            name : "Adenosarcoma"
          }, {
            name : "Adenosarcoma with rhabdomyoblastic differentiation"
          }, {
            name : "Adenosarcoma with cartilaginous differentiation"
          }, {
            name : "Adenosarcoma with osseous differentiation"
          }, {
            name : "Adenosarcoma with sarcomatous overgrowth"
          } ],
          name : ""
        } ]
      }, {
         description : "only for adenosarcoma",
        name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Not applicable"
          }, {
            name : "Low grade"
          }, {
            name : "High grade"
          }, {
            name : "With sarcomatous overgrowth"
          } ],
          name : ""
        } ]
      }, {
        description : "only for adenosarcoma",
        name : "Myometrial Invasion ",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Tumor is limited to the endometrium or cervical surface without myometrial invasion"
          }, {
            name : "Tumor invades less than or equal to 50% of myometrial thickness"
          }, {
            name : "Tumor invades greater than 50% myometrial thickness"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
         description : "R/L ovary, fallopian tube, vagina, parametrium, pelvic wall omentum",
        name : "Other tissue(s) involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "location",
            inputs_required : [ "" ],
            name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            name : "Positive"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Indeterminate"
          }, {
            name : "Suspicious"
          }, {
            name : "Present"
          }, {
            name : "Present, extensive"
          } ],
          name : ""
        } ]
      }, {
        description : "includes pelvic, parametrial, obturator, internal iliac (hypogastric), external iliac, common iliac, sacral, presacral and para-aortic",
        name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # involved (no ITC)",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # with isolated tumor cells",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Positive lymph node location",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            name : ""
          }, {
            description : "pathologic",
            name : "AJCC p"
          }, {
            description : "multiple foci of invasive carcinoma",
            name : "AJCC m"
          }, {
            description : "recurrent",
            name : "AJCC r"
          }, {
            description : "post-treatment",
            name : "AJCC y"
          }, {
            name : "AJCC mp"
          }, {
            name : "AJCC rp"
          }, {
            name : "AJCC yp"
          }, {
            name : "AJCC mrp"
          }, {
            name : "AJCC myp"
          }, {
            name : "AJCC ryp"
          }, {
            name : "AJCC mryp"
          } ],
          name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            name : "TX"
          }, {
            description : "SARCOMA Tumor is 5 cm or less (≤5 cm) in greatest dimension ",
            name : "T1a"
          }, {
            description : "SARCOMA Tumor is greater than 5 cm (>5 cm) in greatest dimension",
            name : "T1b"
          }, {
            description : "SARCOMA Tumor involves the adnexa",
            name : "T2a"
          }, {
            description : "SARCOMA Tumor involves other pelvic tissue",
            name : "T2b"
          }, {
            description : "SARCOMA Tumor invades abdominal tissues at one site ",
            name : "T3a"
          }, {
            description : "SARCOMA Tumor invades abdominal tissues at more than one site ",
            name : "T3b"
          }, {
            description : "SARCOMA Tumor invades bladder mucosa and/or rectum ",
            name : "T4"
          }, {
            description : "ADENOSARCOMA Tumor is limited to the endometrium/endocervix without myometrial invasion ",
            name : "T1a"
          }, {
            description : "ADENOSARCOMA Tumor invades less than or equal to 50% (≤50%) total myometrial thickness",
            name : "T1b"
          }, {
            description : "ADENOSARCOMA Tumor invades greater than 50% (>50%) total myometrial thickness",
            name : "T1c"
          }, {
            description : "ADENOSARCOMA Tumor involves the adnexa",
            name : "T2a"
          }, {
            description : "ADENOSARCOMA Tumor involves other pelvic tissue",
            name : "T2b"
          }, {
            description : "ADENOSARCOMA  Tumor invades abdominal tissues at one site",
            name : "T3a"
          }, {
            description : "ADENOSARCOMA  Tumor invades abdominal tissues at more than one site",
            name : "T3b"
          }, {
            description : "ADENOSARCOMA  Tumor invades bladder mucosa and/or rectum",
            name : "T4"
          } ],
          name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            name : "N0"
          }, {
            description : "Isolated tumor cells, <=0.2mm",
            name : "N0(i+)"
          }, {
            description : "regional lymph node metastasis",
            name : "N1"
          } ],
          name : "Category (pN)"
        }, {
          group : [ {
            description : "metastases",
            name : "M1"
          }, {
            name : "M (not applicable)"
          }, {
            name : "distant metastasis not applicable"
          } ],
          name : ""
        } ]
   
    }, {
        name : "Stage FIGO (2015)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "Tumor limited to uterus, Less than or equal to 5 cm",
            name : "FIGO IA"
          }, {
            description : "Tumor limited to uterus, More than 5 cm",
            name : "FIGO IB"
          }, {
            description : "Adnexal involvement",
            name : "FIGO IIA"
          }, {
            description : "Involvement of other pelvic tissues",
            name : "FIGO IIB"
          }, {
            description : "Tumor invades abdominal tissues (not just protruding into the abdomen)1 site",
            name : "FIGO IIIA"
          }, {
            description : "Tumor invades abdominal tissues (not just protruding into the abdomen)More than 1 site",
            name : "FIGO IIIB"
          }, {
            description : "Tumor invades abdominal tissues (not just protruding into the abdomen)Metastasis to pelvic and/or para-aortic lymph nodes",
            name : "FIGO IIIC"
          }, {
            description : " Tumor invades bladder and/or rectal mucosa    ",
            name : "FIGO IVA"
          }, {
            description : "Distant metastasis",
            name : "FIGO IVB"
          }, {
            description : "ADENOSARCOMA Tumor limited to endometrium/endocervix with no myometrial invasion",
            name : "FIGO IA"
          }, {
            description : "ADENOSARCOMA Less than or equal to half myometrial invasion",
            name : "FIGO IB"
          }, {
            description : "ADENOSARCOMA More than half myometrial invasion",
            name : "FIGO IC"
          }, {
            description : "ADENOSARCOMA Adnexal involvement",
            name : "FIGO IIA"
          }, {
            description : "ADENOSARCOMA Tumor extends to extrauterine pelvic tissue",
            name : "FIGO IIB"
          }, {
            description : "ADENOSARCOMA Tumor invades abdominal tissues (not just protruding into the abdomen)1 site",
            name : "FIGO IIIA"
          }, {
            description : "ADENOSARCOMA Tumor invades abdominal tissues (not just protruding into the abdomen)More than 1 site",
            name : "FIGO IIIB"
          }, {
            description : "ADENOSARCOMA Tumor invades abdominal tissues (not just protruding into the abdomen)Metastasis to pelvic and/or para-aortic lymph nodes",
            name : "FIGO IIIC"
          }, {
            description : " ADENOSARCOMA  Tumor invades bladder and/or rectal mucosa  ",
            name : "FIGO IVA"
          }, {
            description : "ADENOSARCOMA Distant metastasis",
            name : "FIGO IVB"
          }, {
            description : "",
            name : "Not applicable"
          } ],
          name : ""
        } ]
          } ]
      }, {
      most_common : false,
      name : "Uveal melanoma",
      optional : false,
      organ_group : "Ophthalmic",
      properties : [ {
        name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Right local resection"
          }, {
            name : "Right enucleation"
          }, {
            name : "Right limited exenteration"
          }, {
            name : "Right complete exenteration"
          },{
            name : "Left local resection"
          }, {
            name : "Left enucleation"
          }, {
            name : "Left limited exenteration"
          }, {
            name : "Left complete exenteration"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Superotemporal quadrant of globe"
          }, {
            name : "Superonasal quadrant of globe"
          }, {
            name : "Inferotemporal quadrant of globe"
          }, {
            name : "Inferonasal quadrant of globe"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor size after sectioning",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Equivocal"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor location after sectioning",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Superotemporal"
          }, {
            name : "Superonasal"
          }, {
            name : "Inferotemporal"
          }, {
            name : "Inferonasal"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor Involvement of Other Ocular Structures ",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Sclera"
          }, {
            name : "Vortex vein(s)"
          }, {
            name : "Optic disc"
          }, {
            name : "Vitreous "
          }, {
            name : "Choroid"
          }, {
            name : "Ciliary body"
          }, {
            name : "Iris "
          }, {
            name : "Lens"
          }, {
            name : "Anterior chamber"
          }, {
            name : "Extrascleral extension (anterior)"
          }, {
            name : "Extrascleral extension (posterior) "
          }, {
            name : "Angle/Schlemm’s canal"
          }, {
            name : "Optic nerve"
          }, {
            name : "Retina"
          } ],
          name : ""
        } ]
      }, {
        name : "Growth Pattern ",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Solid mass "
          }, {
            name : "Dome shape"
          }, {
            name : "Mushroom shape"
          }, {
            name : "Diffuse (ciliary body ring)"
          }, {
            name : "Diffuse (flat)"
          } ],
          name : ""
        } ]
      }, {
        name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : ">90% spindle cells",
            name : "Spindle cell melanoma"
          }, {
            description : ">10% epithelioid cells and <90% spindle cells",
            name : "Mixed cell melanoma "
          }, {
            description : ">90% epithelioid cells",
            name : "Epithelioid cell melanoma "
          } ],
          name : ""
        } ]
      }, {
        name : "Extention",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Intrascleral"
          }, {
            name : "Extrascleral, 5 or less mm"
          }, {
            name : "Extrascleral, more than 5 mm"
          } ],
          name : ""
        } ]
      }, {
        name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Free"
          }, {
            description : "for enucleation specimens",
            name : "Positive extrascleral extension"
          }, {
            name : "Equivocal"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            name : ""
          }, {
            description : "pathologic",
            name : "p"
          }, {
            description : "multiple foci of invasive carcinoma",
            name : "m"
          }, {
            description : "recurrent",
            name : "r"
          }, {
            description : "post-treatment",
            name : "y"
          }, {
            name : "mp"
          }, {
            name : "rp"
          }, {
            name : "yp"
          }, {
            name : "mrp"
          }, {
            name : "myp"
          }, {
            name : "ryp"
          }, {
            name : "mryp"
          } ],
          name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            name : "TX"
          }, {
            description : "IRIS TUMOR Tumor limited to the iris not more than 3 clock hours in size",
            name : "T1a"
          }, {
            description : "IRIS TUMOR Tumor limited to the iris more than 3 clock hours in size",
            name : "T1b"
          }, {
            description : "IRIS TUMOR Tumor limited to the iris with secondary glaucoma",
            name : "T1c"
          }, {
            description : "IRIS TUMOR Tumor confluent with or extending into the ciliary body, choroid, or both",
            name : "T2"
          }, {
            description : "IRIS TUMOR Tumor confluent with or extending into the ciliary body, choroid, or both, with secondary glaucoma",
            name : "T2a"
          }, {
            description : "IRIS TUMOR Tumor confluent with or extending into the ciliary body, choroid, or both, with scleral extension",
            name : "T3"
          }, {
            description : "IRIS TUMOR Tumor confluent with or extending into the ciliary body, choroid, or both, with scleral extension and secondary glaucoma",
            name : "T3a"
          }, {
            description : "IRIS TUMOR Tumor with extrascleral extension less than or equal to 5 mm in diameter",
            name : "T4a"
          }, {
            description : "IRIS TUMOR Tumor with extrascleral extension more than 5 mm in diameter",
            name : "T4b"
          }, {
            description : "CILIARY BODY AND CHOROID Tumor size category 1 without ciliary body involvement and extraocular extension",
            name : "T1a"
          }, {
            description : "CILIARY BODY AND CHOROID Tumor size category 1 with ciliary body involvement",
            name : "T1b"
          }, {
            description : "CILIARY BODY AND CHOROID Tumor size category 1 without ciliary body involvement but with extraocular extension less than or equal to 5 mm in diameter",
            name : "T1c"
          }, {
            description : "CILIARY BODY AND CHOROID Tumor size category 1 with ciliary body involvement and extraocular extension less than or equal to 5 mm in diameter",
            name : "T1d"
          }, {
            description : "CILIARY BODY AND CHOROID Tumor size category 2 without ciliary body involvement and extraocular extension",
            name : "T2a"
          }, {
            description : "CILIARY BODY AND CHOROID Tumor size category 2 with ciliary body involvement",
            name : "T2b"
          }, {
            description : "CILIARY BODY AND CHOROID Tumor size category 2 without ciliary body involvement but with extraocular extension less than or equal to 5 mm in diameter",
            name : "T2c"
          }, {
            description : "CILIARY BODY AND CHOROID Tumor size category 2 with ciliary body involvement and extraocular extension less than or equal to 5 mm in diameter",
            name : "T2d"
          }, {
            description : "CILIARY BODY AND CHOROID Tumor size category 3 without ciliary body involvement and extraocular extension",
            name : "T3a"
          }, {
            description : "CILIARY BODY AND CHOROID Tumor size category 3 with ciliary body involvement",
            name : "T3b"
          }, {
            description : "CILIARY BODY AND CHOROID Tumor size category 3 without ciliary body involvement but with extraocular extension less than or equal to 5 mm in diameter",
            name : "T3c"
          }, {
            description : "CILIARY BODY AND CHOROID Tumor size category 3 with ciliary body involvement and extraocular extension less than or equal to 5 mm in diameter",
            name : "T3d"
          }, {
            description : "CILIARY BODY AND CHOROID Tumor size category 4 without ciliary body involvement and extraocular extension",
            name : "T4a"
          }, {
            description : "CILIARY BODY AND CHOROID Tumor size category 4 with ciliary body involvement",
            name : "T4b"
          }, {
            description : "CILIARY BODY AND CHOROID Tumor size category 4 without ciliary body involvement but with extraocular extension less than or equal to 5 mm in diameter",
            name : "T4c"
          }, {
            description : "CILIARY BODY AND CHOROID Tumor size category 4 with ciliary body involvement and extraocular extension less than or equal to 5 mm in diameter",
            name : "T4d"
          }, {
            description : "CILIARY BODY AND CHOROID Any tumor size category with extraocular extension more than 5 mm in diameter",
            name : "T4e"
          } ],
          name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            name : "N0"
          }, {
            description : "Regional lymph node involvement",
            name : "N1a"
          }, {
            description : "Tumor deposits in the orbit, no regional lymph node involvement (choroidal and ciliary body)",
            name : "N1b"
          } ],
          name : "Category (pN)"
        }, {
          group : [ {
            description : "Largest diameter of the largest metastasis 3 cm or less",
            name : "M1a"
          }, {
            description : "Largest diameter of the largest metastasis 3.1-8.0 cm",
            name : "M1b"
          }, {
            description : "Largest diameter of the largest metastasis 8.1 cm or more",
            name : "M1c"
          }, {
            name : "M (not applicable)"
          }, {
            name : "distant metastasis not applicable"
          } ],
          name : ""
        } ]
      } ]
    }, {
      most_common : false,
      name : "Vagina",
      optional : false,
      organ_group : "Gynecologic",
      properties : [  {
        name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Excisional biopsy"
          }, {
            name : "Partial vaginectomy"
          }, {
            name : "Radical vaginectomy"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Upper third"
          }, {
            name : "Middle third"
          }, {
            name : "Lower third"
          }, {
            name : "Not specified"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor size",
       optional_state  : "required", "options" : [ {
          name : ""
        } ]
      }, {
        name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Squamous cell carcinoma"
          }, {
            name : "Squamous cell carcinoma, keratinizing "
          }, {
            name : "Squamous cell carcinoma, non-keratinizing "
          }, {
            name : "Squamous cell carcinoma, basaloid "
          }, {
            name : "Squamous cell carcinoma, warty "
          }, {
            name : "Squamous cell carcinoma, verrucous "
          }, {
            name : "Paget disease "
          }, {
            name : "Adenocarcinoma"
          }, {
            name : "Clear cell adenocarcinoma"
          }, {
            name : "Endometrioid adenocarcinoma "
          }, {
            name : "Mucinous adenocarcinoma "
          }, {
            name : "Mesonephric adenocarcinoma "
          }, {
            name : "Intestinal type adenocarcinoma "
          }, {
            name : "Adenosquamous carcinoma"
          }, {
            name : "Small cell carcinoma"
          }, {
            name : "Large cell neuroendocrine carcinoma"
          }, {
            name : "Undifferentiated carcinoma"
          } ],
          name : ""
        } ]
      }, {
        name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Grade 1/4, Well differentiated"
          }, {
            name : "Grade 2/4, Moderately differentiated"
          }, {
            name : "Grade 3/4, Poorly differentiated"
          }, {
            name : "Grade 4/4, Undifferentiated"
          } ],
          name : ""
        } ]
      }, {
        description : "paravaginal tissue, pelvic sidewall, vagina lower third, bladder mucosa, rectal mucosa",
        name : "Other tissue(s) involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        description : "peripheral, deep",
        name : "Margins, invasive tumor",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            name : "Positive"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        description : "peripheral",
        name : "Margins, HSIL",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            name : "Positive"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Indeterminate"
          }, {
            name : "Suspicious"
          }, {
            name : "Present"
          }, {
            name : "Present, extensive"
          } ],
          name : ""
        } ]
      }, {
        description : "includes : For upper two-thirds of the vagina, the following are considered regional lymph nodes: pelvic, parametrial, obturator, internal iliac (hypogastric), external iliac, common iliac, sacral, presacral, and para-aortic. For lower third of the vagina, the following are considered regional lymph nodes: inguinal and femoral",
        name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # involved (no ITC)",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # with isolated tumor cells",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Positive lymph node location",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            name : ""
          }, {
            description : "pathologic",
            name : "AJCC p"
          }, {
            description : "multiple foci of invasive carcinoma",
            name : "AJCC m"
          }, {
            description : "recurrent",
            name : "AJCC r"
          }, {
            description : "post-treatment",
            name : "AJCC y"
          }, {
            name : "AJCC mp"
          }, {
            name : "AJCC rp"
          }, {
            name : "AJCC yp"
          }, {
            name : "AJCC mrp"
          }, {
            name : "AJCC myp"
          }, {
            name : "AJCC ryp"
          }, {
            name : "AJCC mryp"
          } ],
          name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            name : "TX"
          }, {
            description : "Carcinoma in situ",
            name : "Tis"
          }, {
            description : "<= 2cm AND Tumor limited to vaginal wall",
            name : "T1a"
          }, {
            description : "> 2 cm AND Tumor limited to vaginal wall",
            name : "T1b"
          }, {
            description : "<= 2cm AND Tumor invades paravaginal tissues but not the pelvic wall",
            name : "T2a"
          }, {
            description : "> 2 cm AND Tumor invades paravaginal tissues but not the pelvic wall",
            name : "T2b"
          }, {
            description : "Tumor extends to pelvic wall",
            name : "T3"
          }, {
            description : "Tumor invades mucosa of bladder or rectum and/or extends beyond true pelvis",
            name : "T4"
          } ],
          name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            name : "N0"
          }, {
            description : "Isolated tumor cells, <=0.2mm",
            name : "N0(i+)"
          }, {
            description : "Regional lymph node metastases",
            name : "N1"
          } ],
          name : "Category (pN)"
        }, {
          group : [ {
            description : "metastases",
            name : "M1"
          }, {
            name : "M (not applicable)"
          }, {
            name : "distant metastasis not applicable"
          } ],
          name : ""
        } ]
  
    }, {
        name : "Stage FIGO (2015)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "Carcinoma is limited to the vaginal wall",
            name : "FIGO I"
          }, {
            description : "Carcinoma has involved the para-vaginal tissue but has not extended to the pelvic wall",
            name : "FIGO II"
          }, {
            description : "Carcinoma has extended to the pelvic wall and/or involving the lower third of the vagina and/or causing hydronephrosis or nonfunctioning kidney",
            name : "FIGO III"
          }, {
            description : "Tumor invades bladder and/or rectal mucosa and/or direct extension beyond the true pelvis",
            name : "FIGO IVA"
          }, {
            description : "Spread to distant organs",
            name : "FIGO IVB"
          }, {
            description : "",
            name : "Not applicable"
          } ],
          name : ""
        } ]
           } ]
      }, {
      most_common : false,
      name : "Vulva",
      optional : false,
      organ_group : "Gynecologic",
      properties : [  {
        name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Local excision"
          }, {
            name : "Wide excision"
          }, {
            name : "Partial vulvectomy"
          }, {
            name : "Total vulvectomy "
          }, {
            name : "Radical vulvectomy"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor location",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Right vulva"
          }, {
            name : "Left vulva"
          }, {
            name : "Clitoris"
          }, {
            name : "Not specified"
          } ],
          name : ""
        } ]
      }, {
        name : "Tumor size",
       optional_state  : "required", "options" : [ {
          name : ""
        } ]
      }, {
        name : "Tumor Focality",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Single focus"
          }, {
            name : "Multiple foci"
          }, {
            name : "Equivocal"
          } ],
          name : ""
        } ]
      }, {
        name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Squamous cell carcinoma"
          }, {
            name : "Superficial invasive squamous cell carcinoma (SISSCA)"
          }, {
            name : "Squamous cell carcinoma, keratinizing "
          }, {
            name : "Squamous cell carcinoma, non-keratinizing "
          }, {
            name : "Squamous cell carcinoma, basaloid "
          }, {
            name : "Squamous cell carcinoma, warty "
          }, {
            name : "Squamous cell carcinoma, verrucous "
          }, {
            name : "Paget disease "
          }, {
            name : "Adenocarcinoma"
          }, {
            name : "Adenoid cystic carcinoma"
          }, {
            name : "Adenosquamous carcinoma "
          }, {
            name : "Transitional cell carcinoma "
          }, {
            name : "Adenocarcinoma of mammary gland type "
          }, {
            name : "Adenocarcinoma of Skene gland origin "
          }, {
            name : "Malignant sweat gland tumor"
          }, {
            name : "Small cell carcinoma"
          }, {
            name : "Large cell neuroendocrine carcinoma"
          }, {
            name : "Merkel cell carcinoma"
          } ],
          name : ""
        } ]
      }, {
        name : "Grade",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Grade 1/4, Well differentiated"
          }, {
            name : "Grade 2/4, Moderately differentiated"
          }, {
            name : "Grade 3/4, Poorly differentiated"
          }, {
            name : "Grade 4/4, Undifferentiated"
          } ],
          name : ""
        } ]
      }, {
        name : "Depth of invasion",
       optional_state  : "required", "options" : [ {
          name : ""
        } ]
      }, {
        description : "vagina lower third, vagina upper two thirds, urethra lower third, urethra upper two thirds, anus, bladder mucosa, rectal mucosa, pelvic bone",
        name : "Other tissue(s) involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
         description : "peripheral, deep",
        name : "Margins, invasive tumor",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            name : "Positive"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
         description : "peripheral",
        name : "Margins, HSIL/Pagets",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Free"
          }, {
            description : "location",
            inputs_required : [ "" ],
            name : "Positive"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymphovascular invasion",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Indeterminate"
          }, {
            name : "Suspicious"
          }, {
            name : "Present"
          }, {
            name : "Present, extensive"
          } ],
          name : ""
        } ]
      }, {
        
        name : "Lymph nodes, # sentinel",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        description : "includes inguinal, femoral ",
        name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
       
        name : "Lymph nodes, # w/ mets >= 5mm",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
       
        name : "Lymph nodes, # w/ mets >0.2mm, < 5mm",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        description : "<= 0.2mm",
        name : "Lymph nodes, # w/ isolated tumor cells",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Location of largest deposit",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph node other findings",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Not applicable"
          }, {
            name : "None"
          }, {
            name : "Extranodal extension"
          }, {
            name : "Fixed or Ulcerated nodes"
          } ],
          name : ""
        } ]
      }, {
        name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "no prefix",
            name : ""
          }, {
            description : "pathologic",
            name : "AJCC p"
          }, {
            description : "multiple foci of invasive carcinoma",
            name : "AJCC m"
          }, {
            description : "recurrent",
            name : "AJCC r"
          }, {
            description : "post-treatment",
            name : "AJCC y"
          }, {
            name : "AJCC mp"
          }, {
            name : "AJCC rp"
          }, {
            name : "AJCC yp"
          }, {
            name : "AJCC mrp"
          }, {
            name : "AJCC myp"
          }, {
            name : "AJCC ryp"
          }, {
            name : "AJCC mryp"
          } ],
          name : ""
        }, {
          group : [ {
            description : "cannot be assessed",
            name : "TX"
          }, {
            description : "High-grade squamous intraepithelial lesion (carcinoma in situ, VIN 2-3, preinvasive carcinoma)",
            name : "Tis"
          }, {
            description : "Lesions 2 cm or less in size, limited to the vulva or perineum, and with stromal invasion 1.0 mm or less",
            name : "T1a"
          }, {
            description : "Lesions more than 2 cm in size or any size with stromal invasion more than 1.0 mm, limited to the vulva or perineum",
            name : "T1b"
          }, {
            description : "Tumor of any size with extension to adjacent perineal structures (lower/distal one-third urethra, lower/distal one-third vagina, anal involvement)",
            name : "T2"
          }, {
            description : "Tumor of any size with extension to any of the following: upper/proximal two-thirds of urethra, upper/proximal two-thirds vagina, bladder mucosa, rectal mucosa, or fixed to pelvic bone",
            name : "T3"
          } ],
          name : ""
        }, {
          group : [ {
            description : "Regional lymph nodes cannot be assessed",
            name : "NX"
          }, {
            description : "No regional lymph node metastasis",
            name : "N0"
          }, {
            description : "1 or 2 lymph node metastasis  (not ln) all 5 mm or less",
            name : "N1a"
          }, {
            description : "1 lymph node metastasis (not ln) 5 mm or greater",
            name : "N1b"
          }, {
            description : "3 or more lymph node metastases  (not ln) all less than 5 mm",
            name : "N2a"
          }, {
            description : "2 or more lymph node metastases (not ln) one of which is 5 mm or greater ",
            name : "N2b"
          }, {
            description : "Lymph node metastasis with extracapsular extension",
            name : "N2c"
          }, {
            description : "Fixed or ulcerated regional lymph node metastasis",
            name : "N3"
          } ],
          name : "Category (pN)"
        }, {
          group : [ {
            description : "metastases",
            name : "M1"
          }, {
            name : "M (not applicable)"
          }, {
            name : "distant metastasis not applicable"
          } ],
          name : ""
        } ]
  
    }, {
        name : "Stage FIGO (2015)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "Lesions ≤2 cm in size, confined to the vulva or perineum and with stromal invasion ≤1.0 mm, no nodal metastasis",
            name : "FIGO IA"
          }, {
            description : "Lesions >2 cm in size or with stromal invasion >1.0 mm, confined to the vulva and/or perineum, with negative nodes",
            name : "FIGO IB"
          }, {
            description : "Tumor of any size with extension to adjacent perineal structures (lower third of urethra, lower third of vagina, anus) with negative nodes",
            name : "FIGO II"
          }, {
            description : "With 1 lymph node metastasis (≥5 mm) OR With 1 to 2 lymph node metastasis(es) (<5 mm)",
            name : "FIGO IIIA"
          }, {
            description : "With 2 or more lymph node metastases (≥5 mm) OR With 3 or more lymph node metastases (<5 mm)",
            name : "FIGO IIIB"
          }, {
            description : "With positive nodes with extracapsular spread",
            name : "FIGO IIIC"
          }, {
            description : "Tumor invades any of the following: upper urethral and/or vaginal mucosa, bladder mucosa, rectal mucosa, or fixed to pelvic bone, or fixed or ulcerated inguinofemoral lymph nodes",
            name : "FIGO IVA"
          }, {
            description : "Any distant metastasis including pelvic lymph nodes",
            name : "FIGO IVB"
          }, {
            description : "",
            name : "Not applicable"
          } ],
          name : ""
        } ]
           } ]
      }, {
      most_common : false,
      name : "Wilms tumor",
      optional : false,
      organ_group : "Pediatric",
      properties : [ {
        name : "Procedure",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Right partial nephrectomy"
          }, {
            name : "Right radical nephrectomy "
          },{
            name : "Left partial nephrectomy"
          }, {
            name : "Left radical nephrectomy "
          },{
            name : "Bilateral partial nephrectomy"
          }, {
            name : "Bilateral radical nephrectomy "
          },{
            name : "Horseshoe, midline partial nephrectomy"
          }, {
            name : "Horseshoe midline radical nephrectomy "
          } ],
          name : ""
        } ]
      }, {
        name : "Specimen weight",
       optional_state  : "required", "options" : [ {
          name : ""
        } ]
      }, {
        name : "Tumor size",
       optional_state  : "required", "options" : [ {
          name : ""
        } ]
      }, {
        name : "Tumor Focality",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Single focus"
          }, {
            name : "Multiple foci "
          } ],
          name : ""
        } ]
      }, {
        name : "Gerota’s Fascia Involvement",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Gerota’s fascia intact"
          }, {
            name : "Gerota’s fascia disrupted"
          }, {
            name : "Equivocal "
          } ],
          name : ""
        } ]
      }, {
        name : "Renal Sinus Involvement",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Tumor minimally extends into renal sinus soft tissue"
          }, {
            name : "Tumor extensively involves renal sinus soft tissue"
          }, {
            name : "Tumor involves Lymphovascular spaces in the renal sinus "
          } ],
          name : ""
        } ]
      }, {
        name : "Renal Vein Involvement",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            name : "Renal vein invasion present"
          }, {
            name : "Equivocal "
          } ],
          name : ""
        } ]
       }, {
        name : "Renal Capsule Involvement",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Extension beyond renal capsule present"
          }, {
            name : "No extension beyond renal capsule"
          }, {
            name : "Equivocal "
          } ],
          name : ""
        } ]  
      }, {
        name : "Adjacent Organ Involvement",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            description : "specify",
            inputs_required : [ "" ],
            name : "Present"
          }, {
            name : "Equivocal "
          } ],
          name : ""
        } ]
      }, {
        name : "Type",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "Wilms tumor, favorable histology"
          }, {
            name : "Wilms tumor, focal anaplasia "
          }, {
            name : "Wilms tumor, diffuse anaplasia "
          }, {
            name : "Nephrogenic rest only"
          }, {
            name : "Congenital mesoblastic nephroma, classical, cellular or mixed"
          }, {
            name : "Clear cell sarcoma "
          }, {
            name : "Rhabdoid tumor"
          } ],
          name : ""
        } ]
      }, {
       
        name : "Margins",
       optional_state  : "required", "options" : [ {
          group : [ {
         
           
            name : "Free"
          }, {
         
          
            name : "Positive"
          }],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # total",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Lymph nodes, # involved",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "0"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Distant metastases",
       optional_state  : "required", "options" : [ {
          group : [ {
            name : "None"
          }, {
            inputs_required : [ "" ],
            name : "Present"
          }, {
            name : "Not applicable"
          } ],
          name : ""
        } ]
      }, {
        name : "Stage (AJCC 8)",
       optional_state  : "required", "options" : [ {
          group : [ {
            description : "Tumor limited to kidney and completely resected",
            name : "Stage 1"
          }, {
            description : "Tumor extends beyond kidney but completely resected",
            name : "Stage 2 "
          }, {
            description : "Residual tumor",
            name : "Stage 3"
          }, {
            description : "Metastatic disease",
            name : "Stage 4"
          }, {
            description : "Bilateral renal involvement at diagnosis ",
            name : "Stage 5 "
          } ],
          name : ""
        } ]
      } ]
    } ],
  
   
  }
 
  




        
  var app = new Vue({
    el: '#app',
    data: database,
    methods: {
        
        displayQuestions(site){
            this.section = "showQuestions";  
            this.current_tumor = site.name;  
            this.synresults = site.properties;

            for (var i=0; i<this.synresults.length; i++){
              this.tableresults.push(this.synresults[i].name)
            };  
            for (var i=0; i<this.synresults.length +4; i++){
              this.row.inputanswers.push("!!!!YOU FORGOT THIS ONE??0")
                
            };
            for (var i=0; i<this.synresults.length; i++){
              this.row2.freetextanswers.push(" ")
                
            };
            for (var i=0; i<this.synresults.length; i++){
              var value = {question: this.synresults[i].name, answer: this.row.inputanswers[i]}
              this.tableanswers.push(value)
            };

            firstrow = {question: "TUMOR SUMMARY", answer: this.current_tumor}
            this.row3.finalanswers.push(firstrow)

            for (var i=0; i<this.synresults.length; i++){
              var value = {question: this.synresults[i].name, answer: this.row.inputanswers[i]}
              this.row3.finalanswers.push(value)
            };
            for (var i=0; i<this.synresults.length +4; i++){
              this.row5.useFreeText.push(true)
            };
        },
        
        displayhomeMenu(){
          this.section = "homeMenu"
          this.row3.finalanswers = [];
        },
        changeUseFreeText(i){
          this.row5.useFreeText[i] = true
        },

        dontUseFreeText(i){
          this.row5.useFreeText[i] = false
        },

        onSubmit(){
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
                  ans === "rpp" ||   
                  ans === "ryp" ||   
                  ans === "myrp"){
                    count = this.row4.comboanswers.length
                  }

            if (index3 === "0"){
              this.row4.comboanswers.push(ans)
            }
            else {
              this.row4.comboanswers[count] = this.row4.comboanswers[count] + " " + ans
            }
            
          }


          this.row3.finalanswers = [];
          firstrow = {question: "TUMOR SUMMARY", answer: this.current_tumor}
          this.row3.finalanswers.push(firstrow)
          for (var i=0; i<this.synresults.length; i++){
            if (this.row5.useFreeText[i]){
              if (this.row2.freetextanswers[i]=== " ") {
                this.row2.freetextanswers[i] = "!!!!YOU FORGOT THIS ONE??0"
              }
              ans =this.row2.freetextanswers[i]
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