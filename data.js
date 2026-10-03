/* ==========================================================
   Shared content. Edit here; every page reads from this file.
   ========================================================== */

/* Home page, right-hand panel: the five honors listed on the Common App.
   Each one links to its public source. */
const HONORS = [
 {title:"First author in peer-reviewed Frontiers in Systems Biology",
  source:"Frontiers in Systems Biology, 2026",
  href:"https://www.frontiersin.org/journals/systems-biology/articles/10.3389/fsysb.2026.1921636/abstract#metrics"},
 {title:"Presenter at IEEE NER and SfN",
  source:"IEEE Xplore",
  href:"https://ieeexplore.ieee.org/document/11589014"},
 {title:"NCWIT AIC National Honorable Mention",
  source:"NCWIT, 2026 national award recipients",
  href:"https://www.aspirations.org/news/award-programs/ncwit-announces-2026-national-aic-high-school-award-recipients#h_031276633433420464"},
 {title:"National Merit Semifinalist",
  source:"Patch, San Diego",
  href:"https://patch.com/california/san-diego/190-san-diego-county-students-named-national-merit-semifinalists"},
 {title:"Taiwan Award for #1 science fair project in San Diego",
  source:"Taiwan Center award list (PDF)",
  href:"https://taiwancenter.com/images/awards-en.pdf"}
];

/* Home page, "Additional recognition". Honors not already covered above. */
const RECOGNITION = [
 {name:"Simons Fellow, Simons Summer Research Program",
  note:"Selected from 1,800 pre-screened applicants across 900 schools (<2% acceptance rate) for paid research regarding ALS & DNA Damage at Stony Brook University, with Dr. Roger Sher."},
 {name:"Research presenter at USC Keck's Alzheimer's Research Day",
  note:'Only high school student invited to present Parkinson\'s findings alongside clinicians and researchers at the Alzheimer\'s Therapeutic Research Institute. <a href="https://atri.usc.edu/alzheimers-research-day-san-diego/" target="_blank" rel="noopener">Event coverage</a>'},
 {name:"Peer-reviewed conference paper, IEEE NER 2025",
  note:'A simulation model of astrocytic calcium propagation in Parkinson\'s disease, accepted at IEEE NER 2025 as one of 400 papers internationally. <a href="https://doi.org/10.1109/NER61569.2025.11589014" target="_blank" rel="noopener">doi:10.1109/NER61569.2025.11589014</a>'},
 {name:"Girl Scout Gold Award and Emerging Leader, San Diego",
  note:'Created a patient-records system now supporting care for more than 620 children and adults in Lusaka, Zambia and one of 50 Girl Scouts in San Diego named an Emerging Leader. <a href="community.html#gold">Community service</a>'}
];

/* Home page, bottom of the right panel: people reached, split into science and community.
   Each group draws as a donut; the total in the middle is the sum of its parts. */
const IMPACT = [
 {group:"Science", caption:"reached through research talks and presentations", parts:[
  {name:"IEEE NER talk", n:400, color:"#8DB8F2", link:"research.html#astrocytes"},
  {name:"SfN", n:300, color:"#7FD1C3", link:"research.html#astrocytes"},
  {name:"Simons & CIRM SPARK posters", n:150, color:"#F2C27B", link:"research.html#dna-damage"},
  {name:"USC Keck ATRI", n:50, color:"#C8ADF4", link:"research.html#astrocytes"}
 ]},
 {group:"Community", caption:"reached through programs I built and talks I gave", parts:[
  {name:"CyberCEO", n:2500, color:"#F2C27B", link:"community.html#cyberceo"},
  {name:"Design39Campus", n:1200, color:"#F29E8E", link:"community.html#empowerment"},
  {name:"Power of Love", n:620, color:"#7FD1C3", link:"community.html#gold"},
  {name:"Girl Scout speeches", n:500, color:"#C8ADF4", link:"community.html#gold"},
  {name:"39X keynote", n:200, color:"#8DB8F2", link:"community.html#empowerment"}
 ]}
];

/* Letters about Risha's work. Shown in the home page quick access and on the community page.
   excerpt = short pull quote for the home card; paras = full letter. */
const TESTIMONIALS = [
 {
  "id": "power-of-love",
  "project": "Girl Scout Gold Award",
  "name": "Suresh Subramanian",
  "role": "Founder and Executive Director, Power of Love Foundation",
  "date": "September 2026",
  "link": "community.html#gold",
  "paras": [
   "Risha's project has made a lasting contribution to Power of Love's healthcare programs in Matero, Zambia. Power of Love delivers healthcare services in the slums of Lusaka, Zambia. Risha took the time to understand the scope and future plans of our community health programs and carefully reviewed how our community health workers operate. Working with the team, she translated their needs into a well-architected digital system for creating and updating patient records, documenting visits, reviewing medical histories, and tracking critical information such as medication adherence and mental health.",
   "The system has made our clinic information more organized and has improved our ability to maintain continuity of care for vulnerable children. It supports our ARC program serving more than 550 children affected by HIV, as well as approximately 70 children and adults enrolled in our Mental Health program — more than 620 people altogether.",
   "What impressed us most was not simply Risha's technical ability, but the maturity, persistence and sensitivity with which she approached the project. She created a product that responds to a genuine need and will continue to strengthen the quality of care we provide in the community."
  ],
  "excerpt": "Risha's project has made a lasting contribution to Power of Love's healthcare programs in Matero, Zambia."
 },
 {
  "id": "caughey",
  "project": "Student Empowerment Team",
  "name": "Dr. Robert Caughey",
  "role": "Principal, Design39Campus",
  "date": "September 2026",
  "link": "community.html#empowerment",
  "paras": [
   "Risha’s stewardship of the Student Empowerment Team ensured that I remained aware of the internal supports our students needed and left a lasting impact on D39C. A Student Empowerment Survey, designed by Risha, identified a desire among students in grades 6–8 for greater support with executive functioning, which led to targeted sessions designed to address those needs.",
   "More significantly, the survey results and the subsequent supports championed by Risha ultimately led to the establishment of an AVID program at D39C, the first since the campus opened. This is a lasting legacy that will continue to impact and empower D39C learners for years to come."
  ],
  "excerpt": "The survey results and the subsequent supports championed by Risha ultimately led to the establishment of an AVID program at D39C, the first since the campus opened."
 },
 {
  "id": "bryant",
  "project": "Student Empowerment Team",
  "name": "Abbey Bryant",
  "role": "STEM Teacher, Design39Campus",
  "date": "September 2026",
  "link": "community.html#empowerment",
  "paras": [
   "I have known Risha since she was in 5th grade and can say with the utmost confidence that she is an exceptional student, leader, and person. As a student at Design39Campus TK-8 school, she founded the Student Empowerment Team and embodied everything that represents. Risha's vision and initiative in founding the team came from recognizing the need for ALL students to have a stronger voice in shaping their school experience. She created a meaningful structure for students to share ideas, raise concerns, collaborate with school leaders and parent volunteers, and take an active role in improving the D39C community.",
   "Not only is Risha a stand-out leader, she fosters leadership in others by creating opportunities for students to move beyond simply expressing their opinions to becoming active participants in identifying challenges and developing solutions. She delegated responsibilities and mentored all participants in the club so that the impact the Student Empowerment Team had lasted years after she left for high school. She established clear structures, expectations, and processes for the team, encouraged broad student participation, and created a foundation that could continue to function and grow beyond her individual involvement.",
   "Through her vision, collaboration, outstanding work ethic, and commitment to empowering others, Risha created lasting leadership opportunities that positively changed the way student perspectives are heard and valued at D39C."
  ],
  "excerpt": "Not only is Risha a stand-out leader, she fosters leadership in others."
 }
];

/* docs: {label, type, kind:"pdf"|"video"|"image", src, external?, caption?, alt?}
   Every doc needs BOTH `label` (its name) and `type` (what it is).
   kicker is "Method · Disease area"; the pages split it on " · ". */
const PROJECTS = [
{
  id:"astrocytes",
  short:"Parkinson's Simulation",
  kicker:"Computational modeling · Parkinson's disease",
  title:"Modeling Parkinson's Disease in Astrocytes: A Simulation Model Characterizing Calcium Wave Propagation and Degradation in Atrophied Astrocytes",
  blurb:"A spatially resolved simulation of calcium waves inside a single astrocyte as Parkinson's progressively prunes its fine processes. The first model of its type to combine morphological atrophy with stochastic signaling in a PD-specific astrocyte.",
  creds:[
    {type:"Lab", body:"With Dr. Kazutaka Takahashi, University of Missouri / Ruten Inc."},
    {type:"Published", body:'IEEE Xplore, <em>Simulation Model Characterizing Astrocytic Calcium Wave Propagation in Parkinson\'s Disease</em>, <a href="https://doi.org/10.1109/NER61569.2025.11589014" target="_blank" rel="noopener">doi:10.1109/NER61569.2025.11589014</a>'},
    {type:"Under review", body:'Frontiers in Neuroscience'},
    {type:"Presented", body:"IEEE EMBS International Conference on Neural Engineering (NER) 2025, San Diego: one of 400 papers accepted internationally"},
    {type:"Presented", body:"Society for Neuroscience, Neuroscience 2025; abstract indexed in conference proceedings. One of fewer than 30 high school students presenting among 10,000 attendees at the largest neuroscience meeting in the world"},
    {type:"Presented", body:'USC Keck School of Medicine Alzheimer\'s Therapeutic Research Institute, <a href="https://atri.usc.edu/alzheimers-research-day-san-diego/" target="_blank" rel="noopener">Alzheimer\'s Research Day</a>. Only high school student invited'},
    {type:"Award", body:"Greater San Diego Science and Engineering Fair: First Award, Senior Division Computational Biology (2025)"},
  ],
  abstract:[
    "Parkinson's disease (PD), a neurodegenerative disorder affecting millions worldwide, is characterized by elevated intracellular calcium (Ca²⁺) levels in astrocytes and pronounced astrocytic morphological atrophy, leading to impaired intercellular communication driven by neuronal excitotoxicity and progressive neurodegeneration. Despite the established role of dysregulated astrocytic Ca²⁺ signaling in PD pathogenesis, there remains a lack of quantitative, PD-specific measurements of astrocytic calcium release, and no existing computational frameworks explicitly model intracellular Ca²⁺ propagation within PD astrocytes.",
    "Here, we characterize intracellular Ca²⁺ dynamics within a single astrocyte over modeled conditions of PD by simulating progressive morphological atrophy through increased pruning of astrocytic thin processes, and modifications to biophysical propagation parameters. The model incorporates key Ca²⁺ exchange mechanisms, including endoplasmic reticulum-mediated release and inositol 1,4,5-triphosphate (IP₃)-dependent Ca²⁺ signaling. Model structure and parameterization were assessed using literature-informed healthy-state reference metrics where available, including Ca²⁺ wave velocity and transient-relaxation behavior, while propagation distance and fitted IP₃ relaxation were additionally characterized as model outputs.",
    "Stability of the model was assessed under low-amplitude stochastic perturbations to glutamate dynamics, IP₃ signaling, and SERCA-related fluxes, demonstrating preservation of predicted Ca²⁺ wave properties under modest within-model variability. Finally, PD-specific conditions were imposed to derive inferred alterations in wave characteristics. The model predicts Ca²⁺ wave velocity and directly observed Ca²⁺ recovery, while Ca²⁺ and IP₃ relaxation timescales provide complementary model-derived descriptors of temporal signaling dynamics across modeled PD conditions. The presented framework supports future development of experimentally constrained PD astrocyte morphologies and hypothesis-generating evaluation of candidate therapeutic perturbations."
  ],
  docs:[
    {label:"Modeling PD in Astrocytes", type:"Full paper", kind:"pdf", src:"Documents/Frontiers_Paper.pdf"},
    {label:"IEEE NER 2025", type:"Conference poster", kind:"pdf", src:"Documents/NER_Poster.pdf"},
    {label:"Neuroscience 2025 (SfN)", type:"Conference poster", kind:"pdf", src:"Documents/SfN_Poster.pdf"}
  ]
},
{
  id:"peptides",
  short:"Memory Restoration in Alzheimer's",
  kicker:"In vivo and computational · Alzheimer's disease",
  title:"Uncovering Sex-Specific Memory Restoration Through Chromogranin A-Derived Peptides in Alzheimer's Disease",
  blurb:"Ten weeks of peptide treatment across two mouse models, showing that catestatin restores memory under tau pathology while its counterpart harms it, and that which peptide works depends on sex.",
  creds:[
    {type:"Lab", body:"Mahata Lab, Stein Clinical Research Facility, UC San Diego"},
    {type:"Presented", body:"Society for Neuroscience, Neuroscience 2026"},
    {type:"Award", body:"California Science and Engineering Fair: 5th Place, Senior Division Medicine and Physiology (2026)"},
    {type:"Award", body:"Greater San Diego Science and Engineering Fair: First Award, Senior Division Biomedical Sciences (2026)"},
    {type:"Award", body:'Taiwan Award, $3,000 for #1 project at the regional fair (<a href="https://taiwancenter.com/images/awards-en.pdf" target="_blank" rel="noopener">award list</a>)'},
    {type:"Award", body:"Association for Women in Science Award"},
  ],
  abstract:[
    "Alzheimer's disease (AD) affects nearly 55 million people worldwide and is characterized by progressive cognitive decline associated with tau neurofibrillary tangles and β-amyloid plaques. Although nearly 66% of AD patients are females, sex-specific therapeutic strategies remain largely unexplored. Chromogranin A (CgA)-derived peptides catestatin (CST; hCgA352–372) and pancreastatin (PST; hCgA250–301) have been found to differentially regulate neuroinflammatory and synaptic pathways, suggesting their efficacy in treating tauopathies. This study investigates sex-dependent cognitive modulation mediated by CST and PST in CgA-knockout (CgA-KO) and PS19 mouse models.",
    "Mice (n=5–8/sex/treatment) were treated with intraperitoneal saline, CST (1 µg/g body weight), PST (0.7 µg/g body weight), or CST+PST for 10 weeks. Working memory (spontaneous alternation) and long-term spatial recognition memory (Y-maze novel arm exploration) were assessed longitudinally to quantify restoration of memory potential. For CgA-KO mice, both peptides improved cognition relative to saline; females exhibited stronger responses to CST treatment, whereas males exhibited stronger responses to PST-containing treatments. In contrast, under tau pathology, CST significantly restored cognition in both sexes (p&lt;0.05), while PST caused detrimental effects to memory.",
    "A novel two-phase computational framework integrating cross-validated regularized regression-based treatment effect modeling with a residual machine-learning classifier (AUC=0.91) confirmed CST as the most effective intervention in tauopathy and revealed sex- and disease-context-specific response patterns. Collectively, these findings identify CST as a sex-aware therapeutic candidate and highlight the importance of incorporating biological sex, disease context, and computational modeling into peptide-based AD treatment strategies, advancing precision neurotherapeutics."
  ],
  figure:{src:"Documents/csef-abstract-image.jpg",
    alt:"Four-panel visual abstract covering disease context and peptides, experimental framework, cognitive outcomes, and computational modeling.",
    caption:"Visual abstract: CgA-derived peptides CST and PST, the two-phase mouse experiment, sex-stratified cognitive outcomes, and the causal-inference and residual machine-learning framework used to predict individual treatment response."},
  docs:[
    {label:"Sex-Specific Memory Restoration", type:"Full paper", kind:"pdf", src:"Documents/CSEF_Paper.pdf"},
    {label:"CSEF Poster", type:"Competition poster", kind:"pdf", src:"Documents/CSEF_Poster.pdf"},
    {label:"Project Walkthrough", type:"Video", kind:"video", src:"https://www.youtube.com/embed/K624MdCOCvA", external:"https://www.youtube.com/watch?v=K624MdCOCvA"}
  ]
},
{
  id:"dna-damage",
  short:"DNA Damage in ALS",
  kicker:"In vitro · Amyotrophic lateral sclerosis",
  title:"Consumer Bioactive Compounds Licochalcone A and Resveratrol Exacerbate DNA Damage in ALS Models",
  blurb:"Two compounds sold in ordinary skincare and dietary supplements made DNA damage measurably worse in ALS patient-derived fibroblasts once the cells were already under stress.",
  creds:[
    {type:"Lab", body:"Sher Lab, Department of Neurobiology and Behavior, Stony Brook University, with Dr. Roger Sher and Dr. Jonathan Plessis-Belair"},
    {type:"Presented", body:"Simons Summer Research Program Poster Symposium, Stony Brook University (2026)"},
    {type:"Award", body:"Selected for the Simons Summer Research Program from 1,800 pre-screened applicants across 900 schools (<2% acceptance rate)"},
  ],
  abstract:[
    "Amyotrophic Lateral Sclerosis (ALS) is a fatal neurodegenerative disease characterized by progressive motor dysfunction, TAR DNA-binding protein 43 (TDP-43) aggregation, and increased DNA damage. ALS-associated proteins and genes, including TDP-43 and FUS, are involved in DNA double-strand breaks and dysregulated repair mechanisms. Anti-inflammatory bioactive compounds found in commonly used skincare products and dietary supplements, Licochalcone A and Resveratrol respectively, may modulate DNA repair mechanisms by facilitating non-homologous end joining and p53 acetylation. Although these mechanisms are heavily implicated in ALS pathogenesis, the contributions of Licochalcone A and Resveratrol to cellular stress and DNA damage remain unclear.",
    "In this study, we investigated how Licochalcone A and Resveratrol affect DNA damage and repair in healthy and ALS fibroblast models, both alone and in combination with the DNA-damaging agent Etoposide. We treated cells with combinations of these compounds for 24 hours and found significant upregulation of γH2AX, a marker of DNA-damage signaling, in all Etoposide-treated samples. Interestingly, we identified that Licochalcone A and Resveratrol did not cause substantial DNA damage when administered alone, but when combined with Etoposide, both compounds increased DNA damage, particularly in ALS conditions.",
    "RT-qPCR analysis showed that Licochalcone A plus Etoposide also strongly increased PRKDC and BRCA1 expression, suggesting activation of an ineffective compensatory DNA-repair response. Furthermore, in ALS cells, Etoposide and Resveratrol individually reduced TP53 fluorescence, whereas their combination increased TP53 and produced a more heterogeneous response, suggesting disrupted coordination between DNA damage, repair, and cellular stress. These findings suggest that Licochalcone A and Resveratrol may exacerbate damage or disrupt the coordination of DNA repair and TP53-mediated cell-cycle regulation in the presence of cellular stress, warranting additional experimentation due to the widespread use of these compounds. Our results therefore support further investigation into whether commonly used bioactive compounds selectively contribute to DNA damage and ALS pathology."
  ],
  docs:[
    {label:"Simons Summer Research Program", type:"Symposium poster", kind:"pdf", src:"Documents/Simons_Poster.pdf"}
  ]
},
{
  id:"aso",
  short:"ASO Protein Knockdown Prediction",
  kicker:"Machine learning · Amyotrophic lateral sclerosis",
  title:"Biophysics-Informed Computational Framework for Predicting Antisense Oligonucleotide Knockdown Efficacy Under Small-Data Constraints",
  blurb:"A gradient-boosting model that predicts how well an antisense oligonucleotide will knock down its target, and adapts to a brand-new gene from a single wet-lab measurement instead of a full retraining set.",
  creds:[
    {type:"Lab", body:"First author and lead developer on a three-part ALS therapeutic pipeline; Head of Logistics and Dry-Lab Research of DNHS iGEM team"},
    {type:"Published", body:'Frontiers in Systems Biology (2026), as part of the iGEM–Frontiers 2025 collaboration, <a href="https://www.frontiersin.org/journals/systems-biology/articles/10.3389/fsysb.2026.1921636/abstract#metrics" target="_blank" rel="noopener">doi:10.3389/fsysb.2026.1921636</a>'},
    {type:"Award", body:"iGEM 2025 Gold Medal, as part of DNHS-San Diego-CA"},
    {type:"Code", body:'Model documentation on the <a href="https://2025.igem.wiki/dnhs-sandiego-ca/model" target="_blank" rel="noopener">2025 team wiki</a>'},
  ],
  abstract:[
    "A central strategy in treating neurodegenerative disorders, including amyotrophic lateral sclerosis (ALS), is lowering levels of disease-driving proteins. Antisense oligonucleotides (ASOs) offer a direct RNA-targeted approach to reduce protein expression, but experimental discovery and optimization are constrained by small, heterogeneous datasets and target-specific variability. Computational models that predict ASO knockdown efficacy directly from sequence and context could improve candidate selection, yet generalization across gene families and experimental settings remains challenging.",
    "In this study, we present a biophysics-based computational framework for predicting RNase H-active ASO knockdown efficacy under small-data constraints. We curate and integrate heterogeneous literature-derived ASO efficacy measurements into a unified dataset and evaluate model transfer using independently generated experimental ASOs targeting ALS-relevant genes DAZAP1 and FAM69C. Knockdown efficacy is defined at the transcript level (%KD), providing a mechanistic measure of RNase H-mediated activity. To our knowledge, this is the first framework that combines ASO feature engineering with one-shot family calibration for prediction under realistic small-data conditions.",
    "We integrate sequence representations with physics-based features capturing RNA-DNA hybridization thermodynamics and targeting RNA accessibility. Compared to sequence-only baselines, this mechanistic feature augmentation reduces external wet-lab prediction error. Despite these gains, uncalibrated predictions exhibit systematic target-family-specific scale bias, which we address using a minimal one-shot family calibration strategy that applies an additive offset derived from a single experimentally measured reference ASO per new target family. One-shot calibration markedly improves absolute prediction accuracy while preserving within-family ranking, without retraining or increasing model complexity.",
    "Out-of-distribution evaluation shows stable performance for DAZAP1 and increased uncertainty for FAM69C, consistent with the expected effects of very small sample sizes. Permutation-based interpretability analyses show that predictive signal is dominated by global sequence architecture, with thermodynamic and accessibility features providing correlated, secondary contributions. Together, these results establish a computational workflow in which literature-trained models can be transferred to new target genes using minimal experimental input."
  ],
  docs:[
    {label:"Biophysics-Informed Computational Framework", type:"Full paper", kind:"pdf", src:"Documents/iGEM_Paper_1.pdf"}
  ]
},
{
  id:"trem2",
  short:"TREM2-Tau Interactome in AD",
  kicker:"Proteomics and simulation · Alzheimer's disease",
  title:"In Vitro and In Silico Study of TREM2–Tau Interactions in Alzheimer's Disease",
  blurb:"Mass-spectrometry proteomics paired with a simulated interactome, showing that TREM2's binding partners shift once tau accumulates, pointing at lipid metabolism and microglial activation.",
  creds:[
    {type:"Lab", body:"Huang Lab, Sanford Burnham Prebys Medical Discovery Institute through CIRM Summer Program to Accelerate Regenerative Medicine Knowledge, with Dr. Timothy Huang and Win Ning Chen"},
    {type:"Presented", body:'CIRM SPARK Regenerative Medicine Conference (2025). Abstract indexed in conference proceedings, <a href="https://www.biocom.org/people/risha-guha/" target="_blank" rel="noopener">program listing</a>'},
  ],
  abstract:[
    "Alzheimer's disease (AD) is a neurodegenerative disorder characterized by neurofibrillary tau tangles, which lead to cognitive decline. Mutational variants of microglial receptor Triggering Receptor Expressed on Myeloid cells 2 (TREM2) are associated with increased AD risk. However, how TREM2 and its interactomes change with tau accumulation remains unclear. Here, we explore changes in TREM2 interactions with tau proteotoxicity.",
    "We compared TREM2 complexes bound to wildtype (WT) and PS19 mouse brain (expressing P301S tau associated with frontotemporal dementia), modeled TREM2–tau interactions, and predicted changes in TREM2 interactions over time. We identified that TREM2 binding factors, such as ACSL1 (a fatty acid acyl-CoA conjugation enzyme) and DAP12 (a TREM2 co-receptor), potentially interact with TREM2 at differing predicted rates with tau induction. This suggests that tau-dependent TREM2 interactions may modulate ACSL1 fatty acid metabolism or DAP12-mediated microglia activation. This may implicate novel TREM2-associated mechanisms associated with tau degeneration in AD and other tauopathies."
  ],
  docs:[
    {label:"CIRM SPARK Conference", type:"Conference poster", kind:"pdf", src:"Documents/SPARK_Poster.pdf"}
  ]
},
{
  id:"promoters",
  short:"E. coli Promoter Screening",
  kicker:"Deep learning · Synthetic biology",
  title:"Large-Scale Screening of E. coli Promoters for Small Molecule Biosensor Development",
  blurb:"Over 2,000 promoter-GFP constructs screened against ten small molecules tied to environmental and human health, with a deep learning model predicting which promoter-molecule pairs would respond.",
  creds:[
    {type:"Lab", body:"Model development; with Saanvi Dogra, Jason Gao, Dishti Wadhwani, Nithika Vivek, Lauren Chen, Anwita Bandaru, Shawn Kim, and David Lanster"},
    {type:"Published", body:'eiRxiv preprint (December 2025), coauthor, <a href="https://doi.org/10.69831/4a63597f50" target="_blank" rel="noopener">doi:10.69831/4a63597f50</a>'},
    {type:"Award", body:"iGEM 2024 Silver Medal, as part of DNHS-San Diego-CA"},
    {type:"Code", body:'Model documentation on the <a href="https://2024.igem.wiki/dnhs-sandiego-ca/model" target="_blank" rel="noopener">2024 team wiki</a>'},
  ],
  abstract:[
    "The field of synthetic biology makes significant contributions to healthcare, environmental engineering, and technology through the manipulation of cellular macromolecules and whole organisms. Oftentimes, these advancements are dependent upon biosensors to report on an activity of interest within a cell or to detect extracellular cues and report on them in a measurable way. This project, undertaken as part of iGEM 2024, centered around the choice of 10 small molecules related to environmental and human health with the goal of developing transcriptional biosensors to report on their concentrations.",
    "Each molecule was screened against a library of over 2000 promoter-GFP constructs in search of promoters responsive to each molecule. Further, a deep learning model was used to predict active promoter-molecule pairs, and in silico putative hits from the screen were analyzed with molecular docking. While no robust biosensor hits were found for the molecules of interest, our work demonstrates a useful pipeline for further small molecule biosensor development."
  ],
  docs:[
    {label:"Large-Scale Screening of E. coli Promoters", type:"Full paper (eiRxiv)", kind:"pdf",
     src:"https://platform.eirxiv.org/articles/4a63597f50/pdf", external:"https://platform.eirxiv.org/articles/4a63597f50"}
  ]
}
];
