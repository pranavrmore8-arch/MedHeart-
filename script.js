const diseases = [

{
name:"Hypertension",

definition:`Hypertension is a chronic elevation of systemic arterial blood pressure and a major risk factor for cardiovascular disease, stroke and chronic kidney disease.`,

types:`Primary hypertension – 90–95% cases with no identifiable cause
Secondary hypertension – due to renal, endocrine, vascular or drug causes`,

classification:`Normal BP <120/80
Elevated 120–129/<80
Stage 1 130–139 / 80–89
Stage 2 ≥140 / ≥90
Hypertensive crisis ≥180 / ≥120`,

epidemiology:`• Affects >1 billion people worldwide
• Prevalence increases with age
• Major cause of cardiovascular mortality`,

etiology:`Primary causes
• Genetic predisposition
• Sympathetic overactivity
• Sodium retention

Secondary causes
• Chronic kidney disease
• Endocrine disorders
• Renal artery stenosis
• Drugs (NSAIDs, OCPs)`,

pathophysiology:`• Increased peripheral vascular resistance
• RAAS activation
• Sympathetic activation
• Endothelial dysfunction`,

diagnosis:`• Blood pressure measurement
• ECG
• Echocardiography
• Renal function tests
• Lipid profile`,

assessment:`Risk factors
• Smoking
• Obesity
• Diabetes
• Dyslipidemia

Target organ damage
• LVH
• CKD
• Retinopathy`,

guidelines:`TREATMENT GUIDELINES (AHA / ACC)

Stage 1
ACE inhibitor / ARB / CCB / Thiazide

Stage 2
ACE/ARB + Thiazide or CCB`,

pharmacological:`ANTIHYPERTENSIVE DRUGS

ACE INHIBITORS
Enalapril (5–40 mg/day) – MOA: ACE inhibition → ↓Ang II → vasodilation. AE: cough, hyperkalemia.
Lisinopril (10–40 mg/day) – AE: hypotension.

ARBs
Losartan (50–100 mg/day) – MOA: AT1 receptor blockade. AE: hyperkalemia.
Valsartan (80–320 mg/day)

CALCIUM CHANNEL BLOCKERS
Amlodipine (5–10 mg/day) – MOA: L-type Ca channel block → vasodilation. AE: edema.
Nifedipine (30–90 mg/day)

BETA BLOCKERS
Metoprolol (50–200 mg/day) – MOA: β1 blockade → ↓HR. AE: bradycardia.
Atenolol (25–100 mg/day)

THIAZIDE DIURETICS
Hydrochlorothiazide (12.5–50 mg/day) – MOA: inhibits Na/Cl reabsorption. AE: hypokalemia.

ALPHA BLOCKERS
Prazosin (1–10 mg/day) – MOA: α1 blockade → vasodilation.

CENTRAL AGONISTS
Clonidine (0.1–0.3 mg/day) – MOA: α2 agonist → ↓sympathetic outflow.

DIRECT VASODILATORS
Hydralazine (25–100 mg/day) – MOA: direct arteriolar dilation.`,

nonpharmacological:`• DASH diet
• Weight reduction
• Exercise
• Salt restriction
• Smoking cessation`,

clinical:`• BP monitoring
• Renal function
• Electrolytes`,

goals:`• BP <140/90
• Prevent stroke
• Prevent MI`
},

{
name:"Arrhythmias",

definition:`Arrhythmias are disorders of heart rhythm due to abnormal impulse formation or conduction.`,

types:`Atrial fibrillation
Atrial flutter
PSVT
Ventricular tachycardia
Ventricular fibrillation`,

classification:`Tachyarrhythmias (>100 bpm)
Bradyarrhythmias (<60 bpm)`,

epidemiology:`• AF most common arrhythmia
• Incidence increases with age
• Major cause of sudden cardiac death`,

etiology:`Cardiac
• MI
• Cardiomyopathy

Metabolic
• Hypokalemia
• Hyperthyroidism

Drug induced
• Digoxin toxicity`,

pathophysiology:`• Abnormal automaticity
• Triggered activity
• Re-entry circuits`,

diagnosis:`• ECG
• Holter monitoring
• Echocardiography
• Electrolytes`,

assessment:`Symptoms
• Palpitations
• Syncope
• Dyspnea`,

guidelines:`ACC / AHA / ESC GUIDELINES

SVT
Vagal maneuvers → Adenosine

AF
Rate control → β blockers
Rhythm control → Amiodarone

VT
Amiodarone / Lidocaine`,

pharmacological:`ANTIARRHYTHMIC DRUGS

CLASS I – Na channel blockers
Lidocaine (1–1.5 mg/kg IV) – MOA: Na channel block → suppress VT. AE: seizures.
Procainamide (15 mg/kg IV)

CLASS II – Beta blockers
Metoprolol (5 mg IV) – MOA: β1 blockade → ↓AV conduction.

CLASS III – K channel blockers
Amiodarone (150 mg IV) – MOA: prolongs repolarization. AE: pulmonary fibrosis.

CLASS IV – Ca channel blockers
Verapamil (5–10 mg IV) – MOA: Ca channel block in AV node.

ADENOSINE
6 mg IV → MOA: AV node block.`,

nonpharmacological:`• Electrical cardioversion
• Catheter ablation
• Pacemaker
• ICD`,

clinical:`• ECG monitoring
• Heart rate
• Electrolytes`,

goals:`• Restore sinus rhythm
• Prevent recurrence
• Prevent sudden cardiac death`
},

{
name: "Angina Pectoris",

definition: `
Angina pectoris is a clinical syndrome characterized by chest pain or discomfort caused by myocardial ischemia without myocardial necrosis. It occurs when myocardial oxygen demand exceeds coronary blood supply.
`,

classification: `
1 Stable Angina
2 Unstable Angina
3 Variant Angina (Prinzmetal Angina)
4 Microvascular Angina (Syndrome X)
5 Silent Ischemia
`,

types: `
Stable Angina
Predictable chest pain during exertion or emotional stress and relieved by rest or nitroglycerin.

Unstable Angina
Chest pain occurring at rest or increasing in frequency and severity due to plaque rupture and thrombosis.

Variant Angina (Prinzmetal)
Angina due to coronary artery vasospasm typically occurring at rest and associated with transient ST elevation.

Microvascular Angina
Angina symptoms with normal coronary arteries due to microvascular dysfunction.

Silent Ischemia
Myocardial ischemia without symptoms detected by ECG or stress testing.
`,

epidemiology: `
Angina is a major manifestation of coronary artery disease (CAD).
Prevalence increases with age.
More common in men but risk increases in women after menopause.
Major contributor to cardiovascular morbidity and mortality.
`,

etiology: `
Atherosclerosis of coronary arteries
Coronary artery vasospasm
Coronary thrombosis
Hypertension
Severe anemia
Tachyarrhythmias
Structural heart disease
`,

pathophysiology: `
Angina results from an imbalance between myocardial oxygen supply and demand.

Decreased oxygen supply occurs due to:
Coronary artery stenosis
Vasospasm
Thrombosis

Increased oxygen demand occurs due to:
Tachycardia
Hypertension
Increased myocardial contractility

The imbalance leads to myocardial ischemia causing chest pain.
`,

diagnostic: `
Stable Angina
Exercise stress test
ECG during exertion
Coronary angiography

Unstable Angina
Continuous ECG monitoring
Cardiac biomarkers
Coronary angiography

Variant Angina
ECG showing transient ST elevation
Provocation testing

Microvascular Angina
Normal coronary angiography with abnormal stress testing

Silent Ischemia
Holter monitoring
Stress ECG
Myocardial perfusion imaging
`,

assessment: `
Assess severity and frequency of anginal attacks
Evaluate exercise tolerance
Identify cardiovascular risk factors
Assess myocardial ischemia using ECG or imaging
Evaluate functional limitation of the patient
`,

guidelines: `
Standard treatment guidelines for angina management are provided by:

American Heart Association (AHA)
American College of Cardiology (ACC)
European Society of Cardiology (ESC)

These guidelines recommend stepwise pharmacological therapy and revascularization if symptoms persist.
`,

treatment: `
Management includes:

Pharmacological therapy
Risk factor modification
Lifestyle changes
Revascularization procedures such as PCI or CABG when necessary
`,

pharmacological: `
FIRST LINE DRUGS

1 Beta Blockers
Examples
Metoprolol
Atenolol
Propranolol

Mechanism
Block β1 receptors leading to decreased heart rate and myocardial contractility reducing myocardial oxygen demand.

Dose
Metoprolol 25–100 mg twice daily
Atenolol 25–100 mg once daily

Route
Oral or IV

Adverse Effects
Bradycardia
Fatigue
Hypotension
Bronchospasm



2 Nitrates
Examples
Nitroglycerin
Isosorbide dinitrate
Isosorbide mononitrate

Mechanism
Release nitric oxide causing vasodilation which decreases preload and myocardial oxygen demand.

Dose
Nitroglycerin 0.3–0.6 mg sublingual every 5 minutes (max 3 doses)

Route
Sublingual
Oral
IV
Transdermal

Adverse Effects
Headache
Hypotension
Flushing
Reflex tachycardia



3 Calcium Channel Blockers
Examples
Amlodipine
Verapamil
Diltiazem

Mechanism
Block calcium channels causing coronary and peripheral vasodilation reducing myocardial oxygen demand.

Dose
Amlodipine 5–10 mg once daily
Verapamil 80–120 mg three times daily

Route
Oral

Adverse Effects
Peripheral edema
Constipation
Bradycardia
Hypotension



SECOND LINE DRUGS

Ranolazine
Ivabradine
Nicorandil

Mechanism
Improve myocardial efficiency and reduce ischemia.

Adverse Effects
Dizziness
Headache
QT prolongation
`,

non_pharmacological: `
Smoking cessation
Regular exercise
Weight reduction
Diet modification
Blood pressure control
Lipid management
Diabetes management
Stress reduction
`,

clinical_monitoring: `
Monitor frequency of anginal attacks
Monitor blood pressure and heart rate
Monitor ECG changes
Evaluate exercise tolerance
Monitor lipid profile
Assess treatment response
`,

goals_of_therapy: `
Relieve chest pain
Improve quality of life
Prevent myocardial infarction
Reduce cardiovascular mortality
Improve exercise tolerance
Prevent sudden cardiac death
`
},
  {
name: "Acute Coronary Syndrome",

definition: `
Acute Coronary Syndrome (ACS) refers to a spectrum of clinical conditions
caused by acute myocardial ischemia resulting from reduced coronary blood flow.

It includes:
• ST Elevation Myocardial Infarction (STEMI)
• Non ST Elevation Myocardial Infarction (NSTEMI)
• Unstable Angina

ACS usually occurs due to rupture of an atherosclerotic plaque with
subsequent platelet aggregation and thrombus formation.
`,

classification: `
Types of ACS:

1. ST Elevation Myocardial Infarction (STEMI)
2. Non ST Elevation Myocardial Infarction (NSTEMI)
3. Unstable Angina
`,

epidemiology: `
ACS is one of the leading causes of cardiovascular mortality worldwide.

Risk factors include:
• Hypertension
• Diabetes mellitus
• Smoking
• Dyslipidemia
• Obesity
• Family history of coronary artery disease
• Sedentary lifestyle
`,

etiology: `
Major causes include:

• Atherosclerotic plaque rupture
• Coronary artery thrombosis
• Coronary vasospasm
• Increased myocardial oxygen demand
• Reduced coronary blood flow
`,

pathophysiology: `
1. Atherosclerotic plaque formation in coronary arteries

2. Plaque rupture exposes subendothelial components

3. Platelet adhesion and aggregation

4. Thrombus formation

5. Coronary artery obstruction

6. Reduced myocardial oxygen supply leading to myocardial ischemia or infarction
`,

diagnosis: `
Diagnosis is based on:

• Clinical symptoms
  - Chest pain
  - Dyspnea
  - Sweating
  - Nausea

• ECG changes
  - ST elevation
  - ST depression
  - T wave inversion

• Cardiac biomarkers
  - Troponin I
  - Troponin T
  - CK-MB

• Coronary angiography
`,
assessment: `
Risk stratification and clinical assessment include:

• TIMI risk score
• GRACE risk score
• ECG findings evaluation
• Cardiac biomarker elevation
• Hemodynamic status
• Presence of complications (arrhythmias, heart failure)

Patients are classified as:

• High risk
• Intermediate risk
• Low risk

This helps determine need for urgent PCI or conservative management.
`,
guidelines: `
Management follows ACC/AHA guidelines.

Immediate treatment includes:

• Antiplatelet therapy
• Anticoagulation
• Nitrates
• Beta blockers
• Early reperfusion therapy (PCI or fibrinolysis in STEMI)
`,

treatment: `
General treatment principles:

1. Restore coronary blood flow
2. Relieve ischemic pain
3. Prevent myocardial damage
4. Prevent complications
5. Reduce mortality
`,

pharmacological: `
ANTIPLATELETS

Aspirin
Dose: 160–325 mg loading, then 75–100 mg daily
Route: Oral
MOA: Irreversible COX-1 inhibition → ↓ thromboxane A2 → inhibits platelet aggregation
Adverse Effects: GI irritation, bleeding, hypersensitivity
Drug Interactions: NSAIDs, anticoagulants

Clopidogrel
Dose: 300–600 mg loading then 75 mg daily
Route: Oral
MOA: ADP (P2Y12) receptor inhibition → prevents platelet aggregation
Adverse Effects: Bleeding, thrombocytopenia
Drug Interactions: PPIs, anticoagulants


ANTICOAGULANTS

Unfractionated Heparin (UFH)
Dose: 60–70 units/kg IV bolus then infusion
Route: IV
MOA: Activates antithrombin III → inhibits thrombin and factor Xa
Adverse Effects: Bleeding, heparin induced thrombocytopenia

Enoxaparin
Dose: 1 mg/kg every 12 hours
Route: Subcutaneous
MOA: Factor Xa inhibition
Adverse Effects: Bleeding


GLYCOPROTEIN IIb/IIIa INHIBITORS

Abciximab
Dose: 0.25 mg/kg IV bolus then infusion
Route: IV
MOA: Blocks GP IIb/IIIa receptors preventing platelet aggregation
Adverse Effects: Bleeding, thrombocytopenia


NITRATES

Nitroglycerin
Dose: 0.4 mg sublingual every 5 minutes (max 3 doses)
Route: Sublingual / IV
MOA: Nitric oxide release → vasodilation → ↓ myocardial oxygen demand
Adverse Effects: Headache, hypotension


BETA BLOCKERS

Metoprolol
Dose: 5 mg IV every 5 min (max 15 mg) then oral 50–100 mg/day
Route: IV / Oral
MOA: β1 blockade → ↓ heart rate and myocardial oxygen demand
Adverse Effects: Bradycardia, hypotension


CALCIUM CHANNEL BLOCKERS

Diltiazem
Dose: 0.25 mg/kg IV bolus
Route: IV / Oral
MOA: L-type calcium channel blockade → ↓ heart rate and contractility
Adverse Effects: Bradycardia, hypotension


ACE INHIBITORS

Enalapril
Dose: 5–20 mg/day
Route: Oral
MOA: ACE inhibition → ↓ angiotensin II → vasodilation
Adverse Effects: Cough, hyperkalemia


STATINS

Atorvastatin
Dose: 40–80 mg/day
Route: Oral
MOA: HMG-CoA reductase inhibition → ↓ cholesterol synthesis
Adverse Effects: Myopathy, elevated liver enzymes
`,

non_pharmacological: `
• Smoking cessation
• Dietary modification
• Weight reduction
• Regular physical activity
• Blood pressure control
• Diabetes control
• Lipid control
`,

clinical: `
Clinical monitoring includes:

• ECG monitoring
• Blood pressure
• Heart rate
• Cardiac enzymes
• Electrolytes
• Renal function
• Signs of bleeding with anticoagulants
`,

goals: `
Goals of therapy:

• Relieve ischemic symptoms
• Restore coronary perfusion
• Prevent myocardial infarction progression
• Prevent complications
• Reduce mortality
`
},
  {
name:"Heart Failure",

definition:`Heart failure is a clinical syndrome resulting from structural or functional impairment of ventricular filling or ejection of blood leading to inadequate cardiac output to meet metabolic demands.`,

types:`Types of Heart Failure

• Left sided heart failure
• Right sided heart failure
• Biventricular heart failure`,

classification:`Classification of Heart Failure

BASED ON EJECTION FRACTION

• HFrEF (Reduced EF) <40%
• HFmrEF (Mildly reduced EF) 41–49%
• HFpEF (Preserved EF) ≥50%

NYHA FUNCTIONAL CLASSIFICATION

Class I
No limitation of physical activity.

Class II
Slight limitation of physical activity.

Class III
Marked limitation of activity.

Class IV
Symptoms present even at rest.

ACC/AHA STAGES

Stage A
High risk without structural heart disease.

Stage B
Structural heart disease without symptoms.

Stage C
Structural heart disease with symptoms.

Stage D
Refractory heart failure.

CLINICAL PRESENTATION

Symptoms
• Dyspnea
• Orthopnea
• Paroxysmal nocturnal dyspnea
• Fatigue
• Exercise intolerance
• Peripheral edema

Signs
• Elevated JVP
• Pulmonary crackles
• S3 gallop
• Hepatomegaly
• Peripheral edema`,

epidemiology:`Heart failure affects millions worldwide.

• Prevalence increases with age
• Major cause of hospitalization
• High morbidity and mortality`,

etiology:`Common causes

• Coronary artery disease
• Myocardial infarction
• Hypertension
• Valvular heart disease
• Cardiomyopathy
• Congenital heart disease
• Arrhythmias`,

pathophysiology:`Heart failure occurs due to impaired myocardial contractility leading to reduced cardiac output.

Compensatory mechanisms include

• Sympathetic nervous system activation
• RAAS activation
• Sodium and water retention
• Ventricular remodeling`,

diagnosis:`Diagnostic Evaluation

• Echocardiography (gold standard)
• ECG
• Chest X-ray
• BNP / NT-proBNP
• Serum electrolytes
• Renal function tests`,

assessment:`Clinical Assessment

• Severity of symptoms
• Functional capacity
• Presence of congestion
• Blood pressure and heart rate
• Risk factors evaluation`,

guidelines:`Standard Treatment Guidelines

• ACC/AHA Heart Failure Guidelines
• ESC Heart Failure Guidelines
• ICMR recommendations`,

pharmacological:`PHARMACOLOGICAL TREATMENT (ACC/AHA GUIDELINE DIRECTED MEDICAL THERAPY)

1. ACE INHIBITORS
Examples
Enalapril
Lisinopril
Ramipril

Mechanism of Action
Inhibit Angiotensin Converting Enzyme → decrease Angiotensin II → vasodilation → reduced preload and afterload → improved cardiac output.

Dose
Enalapril 2.5–20 mg twice daily  
Lisinopril 5–40 mg once daily  
Ramipril 2.5–10 mg once daily

Route
Oral

Side Effects
Dry cough
Dizziness
Hypotension

Adverse Effects
Hyperkalemia
Angioedema
Renal dysfunction


2. ANGIOTENSIN RECEPTOR BLOCKERS (ARBs)

Examples
Losartan
Valsartan
Candesartan

MOA
Block Angiotensin II AT1 receptors → vasodilation → decreased aldosterone secretion.

Dose
Losartan 50–150 mg/day  
Valsartan 80–320 mg/day  
Candesartan 8–32 mg/day

Route
Oral

Side Effects
Dizziness
Hypotension

Adverse Effects
Hyperkalemia
Renal impairment


3. ARNI (ANGIOTENSIN RECEPTOR NEPRILYSIN INHIBITOR)

Example
Sacubitril + Valsartan

MOA
Neprilysin inhibition increases natriuretic peptides + ARB effect → vasodilation, natriuresis and reduced cardiac remodeling.

Dose
49/51 mg twice daily (titrate to 97/103 mg)

Route
Oral

Side Effects
Hypotension
Dizziness

Adverse Effects
Angioedema
Hyperkalemia


4. BETA BLOCKERS

Examples
Metoprolol
Carvedilol
Bisoprolol

MOA
Block β1 receptors → decrease heart rate and myocardial oxygen demand → reduce sympathetic stimulation.

Dose
Metoprolol 25–200 mg/day  
Carvedilol 3.125–25 mg twice daily  
Bisoprolol 1.25–10 mg/day

Route
Oral

Side Effects
Fatigue
Bradycardia

Adverse Effects
Heart block
Hypotension


5. LOOP DIURETICS

Examples
Furosemide
Bumetanide
Torsemide

MOA
Inhibit Na-K-2Cl transporter in loop of Henle → increase sodium and water excretion.

Dose
Furosemide 20–80 mg/day (oral or IV)

Route
Oral / IV

Side Effects
Dehydration
Electrolyte imbalance

Adverse Effects
Hypokalemia
Ototoxicity


6. ALDOSTERONE ANTAGONISTS

Examples
Spironolactone
Eplerenone

MOA
Block aldosterone receptors → reduce sodium retention and myocardial remodeling.

Dose
Spironolactone 25–50 mg/day  
Eplerenone 25–50 mg/day

Route
Oral

Side Effects
Hyperkalemia

Adverse Effects
Gynecomastia (spironolactone)


7. SGLT2 INHIBITORS

Examples
Dapagliflozin
Empagliflozin

MOA
Block sodium glucose cotransporter in kidney → osmotic diuresis → reduced preload and cardiac stress.

Dose
10 mg once daily

Route
Oral

Side Effects
Polyuria
Genital infections

Adverse Effects
Ketoacidosis (rare)


8. VASODILATORS

Examples
Hydralazine
Isosorbide dinitrate

MOA
Hydralazine → arterial dilation  
Nitrates → venous dilation → reduced preload

Dose
Hydralazine 25–100 mg/day  
Isosorbide dinitrate 20–40 mg/day

Route
Oral

Side Effects
Headache
Hypotension

Adverse Effects
Reflex tachycardia


9. IVABRADINE

MOA
Selective inhibition of If current in SA node → reduces heart rate without affecting contractility.

Dose
5–7.5 mg twice daily

Route
Oral

Side Effects
Visual disturbances

Adverse Effects
Bradycardia


10. DIGOXIN

MOA
Inhibits Na/K ATPase → increases intracellular calcium → increased myocardial contractility.

Dose
0.125–0.25 mg/day

Route
Oral / IV

Side Effects
Nausea
Vomiting

Adverse Effects
Arrhythmias
Digoxin toxicity
`,

nonpharmacological:`Non-Pharmacological Treatment

• Sodium restriction
• Fluid restriction
• Weight monitoring
• Regular physical activity
• Smoking cessation
• Vaccination`,

clinical:`Clinical Monitoring

• Body weight monitoring
• Blood pressure
• Serum electrolytes
• Renal function tests
• Symptoms of congestion
• Drug adherence`,

goals:`Goals of Therapy

• Relieve symptoms
• Improve functional capacity
• Prevent disease progression
• Reduce hospitalizations
• Reduce mortality`
}
 ];
document.addEventListener("DOMContentLoaded",function(){

const list=document.getElementById("diseaseList");
const detail=document.getElementById("diseaseDetail");

function showDiseases(){

list.innerHTML="";

diseases.forEach(d=>{

let card=document.createElement("div");
card.className="card";
card.textContent=d.name;

 card.onclick = function(){

detail.innerHTML = `
<h2>${d.name}</h2>

<h3>Definition</h3>
<pre>${d.definition || ""}</pre>

<h3>Types</h3>
<pre>${d.types || ""}</pre>

<h3>Classification</h3>
<pre>${d.classification || ""}</pre>

<h3>Epidemiology</h3>
<pre>${d.epidemiology || ""}</pre>

<h3>Etiology</h3>
<pre>${d.etiology || ""}</pre>

<h3>Pathophysiology</h3>
<pre>${d.pathophysiology || ""}</pre>

<h3>Diagnosis</h3>
<pre>${d.diagnosis || d.diagnostic || ""}</pre>

<h3>Assessment</h3>
<pre>${d.assessment || ""}</pre>

<h3>Standard Treatment Guidelines</h3>
<pre>${d.guidelines || ""}</pre>

<h3>Treatment</h3>
<pre>${d.treatment || ""}</pre>

<h3>Pharmacological Treatment</h3>
<pre>${d.pharmacological || ""}</pre>

<h3>Non Pharmacological Treatment</h3>
<pre>${d.non_pharmacological || d.nonpharmacological || ""}</pre>

<h3>Clinical Monitoring</h3>
<pre>${d.clinical_monitoring || d.clinical || ""}</pre>

<h3>Goals of Therapy</h3>
<pre>${d.goals_of_therapy || d.goals || ""}</pre>

<br>

<button onclick="openDoseCalculator()">Dose Calculator</button>

<br><br>

<button onclick="goBack()">Back</button>
`;

detail.style.display="block";
list.style.display="none";

};

list.appendChild(card)

})

}

showDiseases()

document.getElementById("searchInput").addEventListener("keyup",function(){

let value=this.value.toLowerCase()

document.querySelectorAll(".card").forEach(card=>{

card.style.display=
card.textContent.toLowerCase().includes(value)
? "block"
: "none"

})

})

})

function goBack(){

document.getElementById("diseaseDetail").style.display="none"
document.getElementById("diseaseList").style.display="block"

}


function openDoseCalculator(){

document.getElementById("diseaseDetail").innerHTML=

"<h2>Dose Calculator</h2>"+

"Drug<br>"+
"<select id='drug'>"+

"<option>Amlodipine</option>"+
"<option>Nifedipine</option>"+

"<option>Losartan</option>"+
"<option>Valsartan</option>"+
"<option>Candesartan</option>"+

"<option>Enalapril</option>"+
"<option>Lisinopril</option>"+
"<option>Ramipril</option>"+

"<option>Metoprolol</option>"+
"<option>Atenolol</option>"+
"<option>Bisoprolol</option>"+
"<option>Carvedilol</option>"+
"<option>Nebivolol</option>"+

"<option>Hydrochlorothiazide</option>"+
"<option>Chlorthalidone</option>"+

"<option>Furosemide</option>"+
"<option>Bumetanide</option>"+
"<option>Torsemide</option>"+

"<option>Spironolactone</option>"+
"<option>Eplerenone</option>"+

"<option>Digoxin</option>"+
"<option>Ivabradine</option>"+

"<option>Nitroglycerin</option>"+
"<option>Isosorbide dinitrate</option>"+
"<option>Isosorbide mononitrate</option>"+

"<option>Diltiazem</option>"+
"<option>Verapamil</option>"+

"<option>Amiodarone</option>"+
"<option>Lidocaine</option>"+
"<option>Procainamide</option>"+
"<option>Sotalol</option>"+

"<option>Aspirin</option>"+
"<option>Clopidogrel</option>"+
"<option>Prasugrel</option>"+
"<option>Ticagrelor</option>"+

"<option>Warfarin</option>"+
"<option>Heparin</option>"+
"<option>Enoxaparin</option>"+
"<option>Dalteparin</option>"+

"<option>Atorvastatin</option>"+
"<option>Rosuvastatin</option>"+
"<option>Simvastatin</option>"+

"<option>Hydralazine</option>"+
"<option>Prazosin</option>"+
"<option>Clonidine</option>"+

"</select><br><br>"+

"Gender<br>"+
"<select id='gender'>"+
"<option>Male</option>"+
"<option>Female</option>"+
"</select><br><br>"+

"Age<br>"+
"<input id='age'><br><br>"+

"Weight (kg)<br>"+
"<input id='weight'><br><br>"+

"Height (cm)<br>"+
"<input id='height'><br><br>"+

"Creatinine (mg/dL)<br>"+
"<input id='cr'><br><br>"+

"Pediatric Patient<br>"+
"<select id='pediatric'>"+
"<option>No</option>"+
"<option>Yes</option>"+
"</select><br><br>"+

"Geriatric Patient<br>"+
"<select id='geriatric'>"+
"<option>No</option>"+
"<option>Yes</option>"+
"</select><br><br>"+

"Pregnant<br>"+
"<select id='preg'>"+
"<option>No</option>"+
"<option>Yes</option>"+
"</select><br><br>"+

"Breastfeeding<br>"+
"<select id='bf'>"+
"<option>No</option>"+
"<option>Yes</option>"+
"</select><br><br>"+

"Renal impairment<br>"+
"<select id='renal'>"+
"<option>No</option>"+
"<option>Yes</option>"+
"</select><br><br>"+

"Hepatic impairment<br>"+
"<select id='hepatic'>"+
"<option>No</option>"+
"<option>Yes</option>"+
"</select><br><br>"+

"<button onclick='calculateDose()'>Calculate Dose</button>"+

"<div id='result'></div>"+

"<br><button onclick='goBack()'>Back</button>";
}



function calculateDose(){

let age=parseFloat(document.getElementById("age").value)
let w=parseFloat(document.getElementById("weight").value)
let h=parseFloat(document.getElementById("height").value)
let cr=parseFloat(document.getElementById("cr").value)

let drug=document.getElementById("drug").value
let gender=document.getElementById("gender").value

let pediatric=document.getElementById("pediatric").value
let geriatric=document.getElementById("geriatric").value
let preg=document.getElementById("preg").value
let bf=document.getElementById("bf").value
let renal=document.getElementById("renal").value
let hepatic=document.getElementById("hepatic").value



/* BSA */

let bsa=Math.sqrt((h*w)/3600)



/* Creatinine Clearance */

let crcl=((140-age)*w)/(72*cr)

if(gender=="Female"){
crcl=crcl*0.85
}



/* Base Dose */

let dose=10



/* Drug Standard Dose */

if(drug=="Amlodipine"){dose=5}
if(drug=="Losartan"){dose=50}
if(drug=="Enalapril"){dose=5}
if(drug=="Metoprolol"){dose=50}
if(drug=="Atenolol"){dose=50}
if(drug=="Bisoprolol"){dose=5}
if(drug=="Carvedilol"){dose=12.5}

if(drug=="Furosemide"){dose=40}
if(drug=="Bumetanide"){dose=1}
if(drug=="Torsemide"){dose=10}

if(drug=="Spironolactone"){dose=25}
if(drug=="Eplerenone"){dose=25}

if(drug=="Digoxin"){dose=0.25}

if(drug=="Ivabradine"){dose=5}

if(drug=="Nitroglycerin"){dose=0.4}

if(drug=="Aspirin"){dose=75}
if(drug=="Clopidogrel"){dose=75}
if(drug=="Ticagrelor"){dose=90}

if(drug=="Warfarin"){dose=5}

if(drug=="Atorvastatin"){dose=20}
if(drug=="Rosuvastatin"){dose=10}



/* Pediatric adjustment */

if(pediatric=="Yes"){
dose=dose*(bsa/1.73)
}



/* Geriatric adjustment */

if(geriatric=="Yes"){
dose=dose*0.75
}



/* Renal adjustment */

if(renal=="Yes"){
dose=dose*0.5
}



/* Hepatic adjustment */

if(hepatic=="Yes"){
dose=dose*0.7
}



/* Warnings */

let warning=""

if(preg=="Yes"){
warning+="<br>⚠ Check pregnancy safety"
}

if(bf=="Yes"){
warning+="<br>⚠ Check breastfeeding safety"
}



/* Result */

document.getElementById("result").innerHTML=

"Drug: "+drug+
"<br>BSA: "+bsa.toFixed(2)+
"<br>Creatinine Clearance: "+crcl.toFixed(2)+
"<br>Estimated Dose: "+dose.toFixed(2)+" mg"+
warning

}

// ===============================
// RISK CALCULATOR OPEN
// ===============================

function openCalculator(type){

let html=""

if(type==="ascvd"){
html=`
<h2>ASCVD Risk Calculator</h2>

Age<br>
<input id="age"><br><br>

Total Cholesterol<br>
<input id="chol"><br><br>

HDL<br>
<input id="hdl"><br><br>

Systolic BP<br>
<input id="sbp"><br><br>

<button onclick="calcASCVD()">Calculate</button>

<div id="result"></div>

<br>
<button onclick="goBack()">Back</button>
`
}

if(type==="cha2ds2"){
html=`
<h2>CHA2DS2-VASc Score</h2>

Heart Failure <input type="checkbox" id="hf"><br>
Hypertension <input type="checkbox" id="htn"><br>
Age ≥75 <input type="checkbox" id="age75"><br>
Diabetes <input type="checkbox" id="dm"><br>
Stroke/TIA <input type="checkbox" id="stroke"><br>

<button onclick="calcCHADS()">Calculate</button>

<div id="result"></div>

<br>
<button onclick="goBack()">Back</button>
`
}

if(type==="hasbled"){
html=`
<h2>HAS-BLED Score</h2>

Hypertension <input type="checkbox" id="h1"><br>
Abnormal Renal <input type="checkbox" id="r1"><br>
Stroke <input type="checkbox" id="s1"><br>
Bleeding history <input type="checkbox" id="b1"><br>

<button onclick="calcHAS()">Calculate</button>

<div id="result"></div>

<br>
<button onclick="goBack()">Back</button>
`
}

if(type==="timi"){
html=`
<h2>TIMI Risk Score</h2>

Age ≥65 <input type="checkbox" id="t1"><br>
≥3 Risk factors <input type="checkbox" id="t2"><br>
ST deviation <input type="checkbox" id="t3"><br>

<button onclick="calcTIMI()">Calculate</button>

<div id="result"></div>

<br>
<button onclick="goBack()">Back</button>
`
}

if(type==="grace"){
html=`
<h2>GRACE Score</h2>

Age<br>
<input id="gage"><br><br>

Heart Rate<br>
<input id="hr"><br><br>

Systolic BP<br>
<input id="gsbp"><br><br>

<button onclick="calcGRACE()">Calculate</button>

<div id="result"></div>

<br>
<button onclick="goBack()">Back</button>
`
}

document.getElementById("diseaseDetail").innerHTML=html

}
function calcASCVD(){

let age=document.getElementById("age").value
let chol=document.getElementById("chol").value
let hdl=document.getElementById("hdl").value

let risk=(age*0.2)+(chol*0.02)-(hdl*0.01)

document.getElementById("result").innerHTML=
"ASCVD Risk: "+risk.toFixed(2)+" %"

}


function calcCHADS(){

let score=0

if(document.getElementById("hf").checked) score+=1
if(document.getElementById("htn").checked) score+=1
if(document.getElementById("age75").checked) score+=2
if(document.getElementById("dm").checked) score+=1
if(document.getElementById("stroke").checked) score+=2

document.getElementById("result").innerHTML=
"CHA2DS2-VASc Score: "+score

}


function calcHAS(){

let score=0

if(document.getElementById("h1").checked) score++
if(document.getElementById("r1").checked) score++
if(document.getElementById("s1").checked) score++
if(document.getElementById("b1").checked) score++

document.getElementById("result").innerHTML=
"HAS-BLED Score: "+score

}


function calcTIMI(){

let score=0

if(document.getElementById("t1").checked) score++
if(document.getElementById("t2").checked) score++
if(document.getElementById("t3").checked) score++

document.getElementById("result").innerHTML=
"TIMI Risk Score: "+score

}


function calcGRACE(){

let age=document.getElementById("gage").value
let hr=document.getElementById("hr").value
let sbp=document.getElementById("gsbp").value

let score=(age*0.8)+(hr*0.5)-(sbp*0.2)

document.getElementById("result").innerHTML=
"GRACE Score: "+score.toFixed(0)

}