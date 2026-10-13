// ==================== FIREBASE ====================
const FIREBASE_DB_URL='https://l2-party-default-rtdb.europe-west1.firebasedatabase.app/';
firebase.initializeApp({databaseURL:FIREBASE_DB_URL});
const db=firebase.database();
const membersRef=db.ref('party_members');
const postsRef=db.ref('craft_posts');
const dreamsRef=db.ref('dream_posts');

// ==================== ПРОФЕССИИ ====================
const professions=[
  {name:'',icon:''},
  {name:'Human Fighter',icon:'⚔️'},{name:'Warrior',icon:'⚔️'},{name:'Gladiator',icon:'⚔️'},{name:'Warlord',icon:'⚔️'},
  {name:'Human Knight',icon:'🛡️'},{name:'Paladin',icon:'🛡️'},{name:'Dark Avenger',icon:'🛡️'},
  {name:'Rogue',icon:'🗡️'},{name:'Treasure Hunter',icon:'🗡️'},{name:'Hawkeye',icon:'🏹'},
  {name:'Human Mystic',icon:'🔮'},{name:'Human Wizard',icon:'🔮'},{name:'Sorcerer',icon:'🔮'},{name:'Necromancer',icon:'🔮'},{name:'Warlock',icon:'🐉'},
  {name:'Cleric',icon:'✨'},{name:'Bishop',icon:'✨'},{name:'Prophet',icon:'✨'},
  {name:'Elven Fighter',icon:'⚔️'},{name:'Elven Knight',icon:'🛡️'},{name:'Temple Knight',icon:'🛡️'},{name:'Swordsinger',icon:'🎵'},
  {name:'Elven Scout',icon:'🏹'},{name:'Plainswalker',icon:'🗡️'},{name:'Silver Ranger',icon:'🏹'},
  {name:'Elven Mystic',icon:'🔮'},{name:'Elven Wizard',icon:'🔮'},{name:'Spellsinger',icon:'🔮'},{name:'Elemental Summoner',icon:'🐉'},{name:'Oracle',icon:'✨'},{name:'Elder',icon:'✨'},
  {name:'Dark Fighter',icon:'⚔️'},{name:'Palus Knight',icon:'🛡️'},{name:'Shillien Knight',icon:'🛡️'},{name:'Bladedancer',icon:'🎵'},
  {name:'Assassin',icon:'🗡️'},{name:'Abyss Walker',icon:'🗡️'},{name:'Phantom Ranger',icon:'🏹'},
  {name:'Dark Mystic',icon:'🔮'},{name:'Dark Wizard',icon:'🔮'},{name:'Spellhowler',icon:'🔮'},{name:'Phantom Summoner',icon:'🐉'},{name:'Shillien Oracle',icon:'✨'},{name:'Shillien Elder',icon:'✨'},
  {name:'Orc Fighter',icon:'⚔️'},{name:'Orc Raider',icon:'⚔️'},{name:'Destroyer',icon:'⚔️'},{name:'Orc Monk',icon:'⚔️'},{name:'Tyrant',icon:'⚔️'},
  {name:'Orc Mage',icon:'🔮'},{name:'Orc Shaman',icon:'🔮'},{name:'Overlord',icon:'🔮'},{name:'Warcryer',icon:'🎵'},
  {name:'Dwarven Fighter',icon:'⛏️'},{name:'Scavenger',icon:'💰'},{name:'Bounty Hunter',icon:'💰'},{name:'Artisan',icon:'🔨'},{name:'Warsmith',icon:'🔨'},
  {name:'Duelist',icon:'⚔️'},{name:'Dreadnought',icon:'⚔️'},{name:'Phoenix Knight',icon:'🛡️'},{name:'Hell Knight',icon:'🛡️'},
  {name:'Sagittarius',icon:'🏹'},{name:'Adventurer',icon:'🗡️'},{name:'Archmage',icon:'🔮'},{name:'Soultaker',icon:'🔮'},
  {name:'Arcana Lord',icon:'🐉'},{name:'Cardinal',icon:'✨'},{name:'Hierophant',icon:'✨'},{name:"Eva's Templar",icon:'🛡️'},
  {name:'Sword Muse',icon:'🎵'},{name:'Wind Rider',icon:'🗡️'},{name:'Moonlight Sentinel',icon:'🏹'},{name:'Mystic Muse',icon:'🔮'},
  {name:'Elemental Master',icon:'🐉'},{name:"Eva's Saint",icon:'✨'},{name:'Shillien Templar',icon:'🛡️'},{name:'Spectral Dancer',icon:'🎵'},
  {name:'Ghost Hunter',icon:'🗡️'},{name:'Ghost Sentinel',icon:'🏹'},{name:'Storm Screamer',icon:'🔮'},{name:'Spectral Master',icon:'🐉'},
  {name:'Shillien Saint',icon:'✨'},{name:'Titan',icon:'⚔️'},{name:'Grand Khavatari',icon:'⚔️'},{name:'Dominator',icon:'🔮'},
  {name:'Doomcryer',icon:'🎵'},{name:'Fortune Seeker',icon:'💰'},{name:'Maestro',icon:'🔨'},
  {name:'Kamael M. Soldier',icon:'⚔️'},{name:'Kamael F. Soldier',icon:'⚔️'},{name:'Trooper',icon:'⚔️'},{name:'Warder',icon:'🛡️'},
  {name:'Berserker',icon:'⚔️'},{name:'Soul Breaker (M)',icon:'🗡️'},{name:'Soul Breaker (F)',icon:'🗡️'},{name:'Arbalester',icon:'🏹'},
  {name:'Doombringer',icon:'⚔️'},{name:'Soul Hound (M)',icon:'🐉'},{name:'Soul Hound (F)',icon:'🐉'},{name:'Trickster',icon:'🗡️'},
  {name:'Inspector',icon:'🔨'},{name:'Judicator',icon:'✨'}
];

// ==================== ТАТУИРОВКИ ====================
const tattooStats=['STR','DEX','CON','INT','WIT','MEN'];
const tattooOptions=[''];
tattooStats.forEach(plus=>{tattooStats.forEach(minus=>{if(plus===minus)return;for(let lvl=1;lvl<=4;lvl++){tattooOptions.push(`+${lvl} ${plus} -${lvl} ${minus}`);}});});

// ==================== ОРУЖИЕ ====================
const weaponsData=[
  {name:'Short Sword',grade:'NG'},{name:'Long Sword',grade:'NG'},{name:'Broadsword',grade:'NG'},{name:'Club',grade:'NG'},{name:'Mace',grade:'NG'},{name:"Apprentice's Wand",grade:'NG'},{name:"Apprentice's Rod",grade:'NG'},{name:'Willow Staff',grade:'NG'},{name:'Cedar Staff',grade:'NG'},{name:'Dagger',grade:'NG'},{name:'Bone Dagger',grade:'NG'},{name:'Knife',grade:'NG'},{name:'Short Bow',grade:'NG'},{name:'Bow',grade:'NG'},{name:'Short Spear',grade:'NG'},{name:'Great Spear',grade:'NG'},{name:"Apprentice's Spellbook",grade:'NG'},{name:'Voodoo Doll',grade:'NG'},
  {name:'Saber',grade:'D'},{name:"Artisan's Sword",grade:'D'},{name:'Bastard Sword',grade:'D'},{name:"Knight's Sword",grade:'D'},{name:'Spinebone Sword',grade:'D'},{name:'Crimson Sword',grade:'D'},{name:'Elven Sword',grade:'D'},{name:'Elven Long Sword',grade:'D'},{name:'Priest Sword',grade:'D'},{name:'Sword of Magic',grade:'D'},{name:'Sword of Mystic',grade:'D'},{name:'Sword of Occult',grade:'D'},{name:'Sword of Magic Fog',grade:'D'},{name:'Sword of Revolution',grade:'D'},{name:'Heavy Sword',grade:'D'},{name:'Steel Sword',grade:'D'},{name:'Two-Handed Sword',grade:'D'},{name:'Titan Sword',grade:'D'},{name:'Claymore',grade:'D'},{name:'Assassin Knife',grade:'D'},{name:'Crafted Dagger',grade:'D'},{name:'Poniard Dagger',grade:'D'},{name:'Kukuri',grade:'D'},{name:'Cursed Maingauche',grade:'D'},{name:'Maingauche',grade:'D'},{name:'Mithril Dagger',grade:'D'},{name:"Conjuror's Knife",grade:'D'},{name:'Dagger of Mana',grade:'D'},{name:'Mystic Knife',grade:'D'},{name:'Shilen Knife',grade:'D'},{name:'Trident',grade:'D'},{name:'Dwarven Trident',grade:'D'},{name:'Pike',grade:'D'},{name:'Dwarven Pike',grade:'D'},{name:'War Hammer',grade:'D'},{name:'War Pick',grade:'D'},{name:'Winged Spear',grade:'D'},{name:'Glaive',grade:'D'},{name:'Reinforced Bow',grade:'D'},{name:'Dark Elven Bow',grade:'D'},{name:'Elven Bow',grade:'D'},{name:'Long Bow',grade:'D'},{name:'Gastraphetes',grade:'D'},{name:'Reinforced Long Bow',grade:'D'},{name:'Hand Axe',grade:'D'},{name:'Heavy Mace',grade:'D'},{name:'Scalpel',grade:'D'},{name:'Work Hammer',grade:'D'},{name:'Doom Hammer',grade:'D'},{name:'Mace of Judgment',grade:'D'},{name:'Mace of Miracle',grade:'D'},{name:'Mace of Prayer',grade:'D'},{name:'Tomahawk',grade:'D'},{name:'Spiked Club',grade:'D'},{name:'Heavy Bone Club',grade:'D'},{name:'Morning Star',grade:'D'},{name:'Skull Breaker',grade:'D'},{name:'Tarbar',grade:'D'},{name:'Bonebreaker',grade:'D'},{name:"Sage's Blood",grade:'D'},{name:'Tome of Blood',grade:'D'},{name:'Crucifix of Blood',grade:'D'},{name:'Priest Mace',grade:'D'},{name:'Demon Fangs',grade:'D'},{name:'Staff of Life',grade:'D'},{name:'Atuba Mace',grade:'D'},{name:'Bone Staff',grade:'D'},{name:"Conjuror's Staff",grade:'D'},{name:'Mystic Staff',grade:'D'},{name:'Staff of Mana',grade:'D'},{name:'Staff of Magic',grade:'D'},{name:'Goat Head Staff',grade:'D'},{name:'Atuba Hammer',grade:'D'},{name:'Ghost Staff',grade:'D'},{name:'Baghnakh',grade:'D'},{name:'Single-Edged Jamadhr',grade:'D'},{name:'Triple-Edged Jamadhr',grade:'D'},{name:"Bich'hwa",grade:'D'},{name:'Scallop Jamadhr',grade:'D'},{name:'Branch of Life',grade:'D'},{name:'Temptation of Abyss',grade:'D'},{name:'Divine Tome',grade:'D'},
  {name:'Stick of Faith',grade:'C'},{name:'Club of Nature',grade:'C'},{name:"Healhren's Book",grade:'C'},{name:'Horn of Glory',grade:'C'},{name:'Mace of Underworld',grade:'C'},{name:'Nirvana Axe',grade:'C'},{name:'Stick of Eternity',grade:'C'},{name:'Eclipse Axe',grade:'C'},{name:'Mysterious Sword',grade:'C'},{name:"Homunkulus's Sword",grade:'C'},{name:'Sword of Whispering Death',grade:'C'},{name:'Eclipse Sword',grade:'C'},{name:'Crystal Staff',grade:'C'},{name:'Heavy Doom Axe',grade:'C'},{name:'Heavy Doom Hammer',grade:'C'},{name:'Cursed Staff',grade:'C'},{name:'Inferno Staff',grade:'C'},{name:"Pa'agrian Hammer",grade:'C'},{name:'Paradia Staff',grade:'C'},{name:"Sage's Staff",grade:'C'},{name:"Deadman's Staff",grade:'C'},{name:"Demon's Staff",grade:'C'},{name:"Ghoul's Staff",grade:'C'},{name:'Stormbringer',grade:'C'},{name:'Caliburs',grade:'C'},{name:'Katana',grade:'C'},{name:'Raid Sword',grade:'C'},{name:'Shamshir',grade:'C'},{name:'Spirit Sword',grade:'C'},{name:'Sword of Delusion',grade:'C'},{name:'Sword of Limit',grade:'C'},{name:'Sword of Nightmare',grade:'C'},{name:'Tsurugi',grade:'C'},{name:'Samurai Longsword',grade:'C'},
  {name:'Body Slasher',grade:'C'},{name:'Orcish Glaive',grade:'C'},{name:'Scythe',grade:'C'},{name:'Bec de Corbin',grade:'C'},{name:'Poleaxe',grade:'C'},{name:'Orcish Poleaxe',grade:'C'},{name:'Cursed Dagger',grade:'C'},{name:'Dark Elven Dagger',grade:'C'},{name:'Dark Screamer',grade:'C'},{name:'Grace Dagger',grade:'C'},{name:'Stiletto',grade:'C'},{name:'Crystal Dagger',grade:'C'},{name:'Battle Axe',grade:'C'},{name:'Big Hammer',grade:'C'},{name:'Silver Axe',grade:'C'},{name:'Skull Graver',grade:'C'},{name:'Dwarven War Hammer',grade:'C'},{name:'War Axe',grade:'C'},{name:'Yaksa Mace',grade:'C'},{name:'Karik Horn',grade:'C'},{name:'Dwarven Hammer',grade:'C'},{name:'Crystallized Ice Bow',grade:'C'},{name:'Akat Long Bow',grade:'C'},{name:'Elemental Bow',grade:'C'},{name:'Noble Elven Bow',grade:'C'},{name:'Eminence Bow',grade:'C'},{name:'Flamberge',grade:'C'},{name:"Pa'agrian Sword",grade:'C'},{name:'Berserker Blade',grade:'C'},{name:'Chakram',grade:'C'},{name:'Fisted Blade',grade:'C'},{name:'Knuckle Duster',grade:'C'},{name:'Great Pata',grade:'C'},{name:'Soulfire Dirk',grade:'C'},
  {name:'Spell Breaker',grade:'B'},{name:'Kaim Vanul Bones',grade:'B'},{name:'Sword of Valhalla',grade:'B'},{name:'Wizards Tear',grade:'B'},{name:"Sprite's Staff",grade:'B'},{name:'Staff of Evil Spirits',grade:'B'},{name:'Keshanberk',grade:'B'},{name:'Sword of Damascus',grade:'B'},{name:'Great Axe',grade:'B'},{name:'Lance',grade:'B'},{name:'Kris',grade:'B'},{name:'Demon Dagger',grade:'B'},{name:'Heavy War Axe',grade:'B'},{name:'Art of Battle Axe',grade:'B'},{name:"Deadman's Glory",grade:'B'},{name:'Ice Storm Hammer',grade:'B'},{name:'Star Buster',grade:'B'},{name:'Dark Elven Long Bow',grade:'B'},{name:'Bow of Peril',grade:'B'},{name:'Great Sword',grade:'B'},{name:'Guardian Sword',grade:'B'},{name:'Arthro Nail',grade:'B'},{name:'Bellion Cestus',grade:'B'},{name:'Hell Knife',grade:'B'},
  {name:'Sword of Miracles',grade:'A'},{name:'Angel Slayer',grade:'A'},{name:"Dark Legion's Edge",grade:'A'},{name:'Soul Separator',grade:'A'},{name:'Bloody Orchid',grade:'A'},{name:'Soul Bow',grade:'A'},{name:'Carnage Bow',grade:'A'},{name:'Imperial Staff',grade:'A'},{name:'Arcana Mace',grade:'A'},{name:'Dragon Hunter Axe',grade:'A'},{name:"Barakiel's Axe",grade:'A'},{name:'Flaming Dragon Skull',grade:'A'},{name:'Saint Spear',grade:'A'},{name:'Demon Splinter',grade:'A'},{name:'Basalt Battlehammer',grade:'A'},{name:'Meteor Shower',grade:'A'},{name:'Elysian',grade:'A'},{name:'Dragon Grinder',grade:'A'},
  {name:'Dynasty Sword',grade:'S'},{name:'Dynasty Blade',grade:'S'},{name:'Dynasty Phantom',grade:'S'},{name:"Heaven's Divider",grade:'S'},{name:"Sirra's Blade",grade:'S'},{name:'Draconic Bow',grade:'S'},{name:'Eternal Core Sword',grade:'S'},{name:'Vesper Cutter',grade:'S'},{name:'Icarus Hammer',grade:'S'},{name:'Dual Dragon Slayer',grade:'S'}
];

const weaponsByGrade={};
weaponsData.forEach(w=>{const key=`${w.grade} Grade`;if(!weaponsByGrade[key])weaponsByGrade[key]=[];weaponsByGrade[key].push(w.name);});
function getWeaponGrade(name){const w=weaponsData.find(i=>i.name===name);return w?w.grade:'';}

// ==================== БРОНЯ ====================
const armorData={
  helmet:{'D Grade':['Brigandine Helmet','Bronze Helmet','Bone Helmet','Mithril Helmet','Plate Helmet','Half Plate Helmet'],'C Grade':['Composite Helmet','Chain Hood','Full Plate Helmet'],'B Grade':['Avadon Circlet','Blue Wolf Helmet','Doom Helmet',"Zubei's Helmet"],'A Grade':['Dark Crystal Robe Helmet','Tallum Helmet','Majestic Circlet','Helm of Nightmare']},
  armor:{'D Grade':['Brigandine Breastplate','Compound Scale Mail','Cursed Tunic','Dwarven Scale Mail','Elven Mithril Tunic','Elven Tunic','Tunic of Knowledge','Lion Skin Shirt','Manticore Skin Shirt','Mithril Banded Mail','Mithril Breastplate',"Mystic's Tunic",'Plate Armor','Puma Skin Shirt','Reinforced Leather Shirt','Ring Mail Breastplate',"Sage's Worn Robe",'Salamander Skin Mail','Scale Mail','White Tunic','Blast Plate'],'C Grade':["Demon's Tunic",'Divine Tunic','Karmian Tunic','Robe of Seal','Composite Armor','Chain Mail Shirt','Dwarven Chain Mail Shirt','Full Plate Armor','Drake Leather Armor','Plated Leather Shirt','Reinforced Mithril Shirt','Rind Leather Armor','Theca Leather Armor'],'B Grade':['Avadon Robe','Blue Wolf Tunic','Tunic of Doom','Tunic of Zubei','Avadon Breastplate','Blue Wolf Breastplate','Doom Plate Armor',"Zubei's Breastplate",'Avadon Leather Armor','Blue Wolf Leather Armor','Leather Armor of Doom',"Zubei's Leather Shirt"],'A Grade':['Dark Crystal Robe','Tallum Tunic','Majestic Robe','Nightmare Robe','Dark Crystal Breastplate','Tallum Plate Armor','Majestic Plate Armor','Armor of Nightmare','Dark Crystal Leather Armor','Tallum Leather Armor','Majestic Leather Armor','Leather Armor of Nightmare']},
  legs:{'D Grade':['Brigandine Gaiters','Compound Scale Gaiters','Cursed Stockings','Dwarven Scale Gaiters','Elven Mithril Stockings','Elven Stockings','Stockings of Knowledge','Lion Skin Gaiters','Manticore Skin Gaiters','Mithril Banded Gaiters','Mithril Gaiters','Mithril Scale Gaiters',"Mystic's Stockings",'Plate Gaiters','Puma Skin Gaiters','Reinforced Leather Gaiters','Iron Plate Gaiters','Ring Mail Gaiters','Scale Gaiters','White Stockings'],'C Grade':["Demon's Stockings",'Divine Stockings','Karmian Stockings','Chain Gaiters','Dwarven Chain Gaiters','Plated Leather Gaiters','Rind Leather Gaiters','Theca Leather Gaiters'],'B Grade':['Blue Wolf Stockings','Stockings of Doom','Stockings of Zubei','Avadon Gaiters','Blue Wolf Gaiters',"Zubei's Gaiters","Zubei's Leather Gaiters"],'A Grade':['Tallum Stockings','Dark Crystal Gaiters','Dark Crystal Leggings']},
  gloves:{'D Grade':['Brigandine Gauntlets','Elven Mithril Gloves','Gloves of Knowledge','Leather Gauntlets','Manticore Skin Gloves','Plate Gauntlets','Half Plate Gauntlets',"Sage's Worn Gloves",'Salamander Skin Gloves','Crafted Leather Gloves','Reinforced Leather Gloves','Rip Gauntlets'],'C Grade':["Demon's Gloves",'Divine Gloves','Karmian Gloves','Gloves of Seal','Composite Gauntlets','Chain Gauntlets','Dwarven Chain Gauntlets','Full Plate Gauntlets','Drake Leather Gloves','Plated Leather Gloves','Reinforced Mithril Gloves','Rind Leather Gloves','Theca Leather Gloves'],'B Grade':['Avadon Gloves Robe','Blue Wolf Gloves Robe','Doom Gloves Robe',"Zubei's Gauntlets Robe",'Avadon Gloves Heavy Armor','Blue Wolf Gloves Heavy Armor','Doom Gloves Heavy Armor',"Zubei's Gauntlets Heavy Armor",'Avadon Gloves Light Armor','Blue Wolf Gloves Light Armor','Doom Gloves Light Armor',"Zubei's Gauntlets Light Armor"],'A Grade':['Dark Crystal Gloves Robe','Tallum Gloves Robe','Majestic Gauntlets Robe','Gauntlets of Nightmare','Dark Crystal Gloves Heavy Armor','Tallum Gloves Heavy Armor','Majestic Gauntlets Heavy Armor','Gauntlets of Nightmare Heavy Armor','Dark Crystal Gloves Light Armor','Tallum Gloves Light Armor','Majestic Gauntlets Light Armor','Gauntlets of Nightmare Light Armor']},
  boots:{'D Grade':['Brigandine Boots','Elven Mithril Boots','Boots of Knowledge','Leather Boots','Manticore Skin Boots','Plate Boots','Half Plate Boots',"Sage's Worn Boots",'Salamander Skin Boots','Reinforced Leather Boots','Blue Buckskin Boots','Boots of Power','Iron Boots'],'C Grade':["Demon's Boots",'Divine Boots','Karmian Boots','Composite Boots','Chain Boots','Dwarven Chain Boots','Full Plate Boots','Drake Leather Boots','Rind Leather Boots','Theca Leather Boots'],'B Grade':['Avadon Boots Robe','Blue Wolf Boots Robe','Doom Boots Robe',"Zubei's Boots Robe",'Avadon Boots Heavy Armor','Blue Wolf Boots Heavy Armor','Doom Boots Heavy Armor',"Zubei's Boots Heavy Armor",'Avadon Boots Light Armor','Blue Wolf Boots Light Armor','Doom Boots Light Armor',"Zubei's Boots Light Armor"],'A Grade':['Dark Crystal Boots Robe','Tallum Boots Robe','Majestic Boots Robe','Boots of Nightmare','Dark Crystal Boots Heavy Armor','Tallum Boots Heavy Armor','Majestic Boots Heavy Armor','Boots of Nightmare Heavy Armor','Dark Crystal Boots Light Armor','Tallum Boots Light Armor','Majestic Boots Light Armor','Boots of Nightmare Light Armor']},
  shield:{'D Grade':['Aspis','Brigandine Shield','Bronze Shield','Half Plate Shield','Hoplon','Kite Shield','Square Shield'],'C Grade':['Chain Shield','Composite Shield','Dwarven Chain Shield','Full Plate Shield'],'B Grade':['Avadon Shield','Doom Shield',"Zubei's Shield"],'A Grade':['Dark Crystal Shield','Shield of Nightmare']}
};

const armorGradesMap={};
Object.keys(armorData).forEach(slot=>{Object.keys(armorData[slot]).forEach(gradeKey=>{const g=gradeKey.replace(' Grade','').trim();armorData[slot][gradeKey].forEach(name=>{armorGradesMap[name]=g;});});});
function getArmorGrade(name){return armorGradesMap[name]||'';}

// ==================== БИЖУТЕРИЯ ====================
const jewelryData={
  earring:{'D Grade':['Enchanted Earring','Elven Earring',"Omen Beast's Eye Earring",'Red Crescent Earring',"Tiger's Eye Earring"],'C Grade':['Earring of Protection','Earring of Seal',"Nassen's Earring"],'B Grade':['Adamantite Earring','Earring of Black Ore'],'A Grade':['Majestic Earring','Phoenix Earring']},
  necklace:{'D Grade':['Necklace of Devotion','Enchanted Necklace','Elven Necklace','Near Forest Necklace','Necklace of Darkness'],'C Grade':['Necklace of Protection','Necklace of Seal','Necklace of Mermaid'],'B Grade':['Adamantite Necklace','Necklace of Black Ore'],'A Grade':['Majestic Necklace','Phoenix Necklace']},
  ring:{'D Grade':['Ring of Devotion','Enchanted Ring','Elven Ring','Black Pearl Ring','Mithril Ring'],'C Grade':['Ring of Protection','Ring of Seal','Ring of Ages'],'B Grade':['Adamantite Ring','Ring of Black Ore'],'A Grade':['Majestic Ring','Phoenix Ring']}
};
const jewelryGradesMap={};
Object.keys(jewelryData).forEach(type=>{Object.keys(jewelryData[type]).forEach(gradeKey=>{const g=gradeKey.replace(' Grade','').trim();jewelryData[type][gradeKey].forEach(name=>{jewelryGradesMap[name]=g;});});});
function getJewelryGrade(name){return jewelryGradesMap[name]||'';}

// ==================== УТИЛИТЫ ====================
function weaponGradeColor(grade){return {'NG':'#9e9e9e','D':'#8b8b8b','C':'#4caf50','B':'#3a7ce0','A':'#9c27b0','S':'#e53935'}[grade]||'#8a8da5';}

function formatDate(ts){if(!ts)return '';const d=new Date(ts);const now=new Date();const diff=Math.floor((now-d)/1000);if(diff<60)return 'только что';if(diff<3600)return Math.floor(diff/60)+' мин назад';if(diff<86400)return Math.floor(diff/3600)+' ч назад';return d.toLocaleString('ru-RU',{day:'2-digit',month:'2-digit',year:'2-digit',hour:'2-digit',minute:'2-digit'});}

function parsePrice(str){if(!str)return 0;const s=String(str).trim().toLowerCase().replace(/\s+/g,'').replace(/,/g,'.');const m=s.match(/^(-?[\d.]+)(ккк|кк|к|млрд|млн|kkk|kk|k|b|m)?$/);if(!m){const n=parseFloat(s.replace(/[^\d.\-]/g,''));return isNaN(n)?0:n;}const num=parseFloat(m[1]);if(isNaN(num))return 0;const suffix=m[2]||'';const mult={к:1e3,k:1e3,кк:1e6,kk:1e6,m:1e6,ккк:1e9,kkk:1e9,b:1e9,млн:1e6,млрд:1e9};return num*(mult[suffix]||1);}

function formatBalance(n){if(!n||n===0)return '0';const abs=Math.abs(n);const sign=n<0?'−':'';if(abs>=1e9)return sign+(abs/1e9).toFixed(2).replace(/\.?0+$/,'')+'ккк';if(abs>=1e6)return sign+(abs/1e6).toFixed(2).replace(/\.?0+$/,'')+'кк';if(abs>=1e3)return sign+(abs/1e3).toFixed(2).replace(/\.?0+$/,'')+'к';return sign+abs.toLocaleString('ru-RU');}

function createInput(type,value,onChange,attrs={},meta=null){const input=document.createElement('input');input.type=type;input.value=value;const{class:cls,className,...rest}=attrs;if(cls)input.className=cls;if(className)input.className=className;Object.assign(input,rest);if(meta){if(meta.memberId)input.dataset.memberId=meta.memberId;if(meta.field)input.dataset.field=meta.field;}input.addEventListener('input',e=>onChange(e.target.value));return input;}

function buildProfessionSelect(value,onChange,extraClass='',meta=null){const select=document.createElement('select');select.className='prof-select '+extraClass;professions.forEach(p=>{const option=document.createElement('option');option.value=p.name;option.textContent=p.name?`${p.icon} ${p.name}`:'— не выбрано —';if(p.name===value)option.selected=true;select.appendChild(option);});if(meta){if(meta.memberId)select.dataset.memberId=meta.memberId;if(meta.field)select.dataset.field=meta.field;}select.addEventListener('change',e=>onChange(e.target.value));return select;}

function buildItemSelect(itemsByGrade,getGradeFn,value,onChange,emptyLabel,meta=null){
  const wrap=document.createElement('div');
  wrap.className='weapon-select';
  if(meta){if(meta.memberId)wrap.dataset.memberId=meta.memberId;if(meta.field)wrap.dataset.field=meta.field;}
  const trigger=document.createElement('button');
  trigger.type='button';trigger.className='weapon-trigger';
  const triggerGrade=document.createElement('span');triggerGrade.className='weapon-grade';
  const triggerName=document.createElement('span');triggerName.className='weapon-name';
  const triggerArrow=document.createElement('span');triggerArrow.className='weapon-arrow';triggerArrow.textContent='▼';
  trigger.appendChild(triggerGrade);trigger.appendChild(triggerName);trigger.appendChild(triggerArrow);
  wrap.appendChild(trigger);
  const dropdown=document.createElement('div');dropdown.className='weapon-dropdown';dropdown.hidden=true;
  function updateTrigger(val){
    if(!val){triggerGrade.textContent='';triggerName.textContent=emptyLabel;triggerName.style.color='#8a8da5';return;}
    const g=getGradeFn(val);
    triggerGrade.textContent=g||'';
    triggerGrade.style.color=weaponGradeColor(g);
    triggerName.textContent=val;
    triggerName.style.color='';
  }
  function selectValue(val){
    onChange(val);updateTrigger(val);dropdown.hidden=true;trigger.classList.remove('open');
    dropdown.querySelectorAll('.weapon-option').forEach(opt=>{opt.classList.toggle('selected',opt.dataset.value===val);});
  }
  const emptyOpt=document.createElement('div');emptyOpt.className='weapon-option';emptyOpt.dataset.value='';emptyOpt.textContent=emptyLabel;
  emptyOpt.addEventListener('click',()=>selectValue(''));
  dropdown.appendChild(emptyOpt);
  Object.keys(itemsByGrade).forEach(gradeKey=>{
    const groupTitle=document.createElement('div');groupTitle.className='weapon-group-title';groupTitle.textContent=gradeKey;dropdown.appendChild(groupTitle);
    itemsByGrade[gradeKey].forEach(itemName=>{
      const opt=document.createElement('div');opt.className='weapon-option';opt.dataset.value=itemName;
      const g=getGradeFn(itemName);
      const badge=document.createElement('span');badge.className='weapon-grade';badge.textContent=g||'';badge.style.color=weaponGradeColor(g);
      const nameEl=document.createElement('span');nameEl.className='weapon-name';nameEl.textContent=itemName;
      opt.appendChild(badge);opt.appendChild(nameEl);
      opt.addEventListener('click',()=>selectValue(itemName));
      dropdown.appendChild(opt);
    });
  });
  wrap.appendChild(dropdown);
  trigger.addEventListener('click',(e)=>{
    e.stopPropagation();
    const wasHidden=dropdown.hidden;
    document.querySelectorAll('.weapon-dropdown').forEach(d=>{d.hidden=true;});
    document.querySelectorAll('.weapon-trigger.open').forEach(t=>t.classList.remove('open'));
    if(!wasHidden)return;
    const rect=trigger.getBoundingClientRect();
    const dropdownMaxHeight=320;
    const spaceBelow=window.innerHeight-rect.bottom-8;
    const spaceAbove=rect.top-8;
    const openUp=spaceBelow<dropdownMaxHeight&&spaceAbove>spaceBelow;
    dropdown.style.position='fixed';dropdown.style.left=rect.left+'px';dropdown.style.width=Math.max(rect.width,240)+'px';
    if(openUp){dropdown.style.bottom=(window.innerHeight-rect.top+2)+'px';dropdown.style.top='auto';}
    else{dropdown.style.top=(rect.bottom+2)+'px';dropdown.style.bottom='auto';}
    dropdown.style.maxHeight=Math.min(dropdownMaxHeight,openUp?spaceAbove:spaceBelow)+'px';
    dropdown.hidden=false;trigger.classList.add('open');
  });
  updateTrigger(value);
  return wrap;
}

function buildWeaponSelect(value,onChange,meta=null){return buildItemSelect(weaponsByGrade,getWeaponGrade,value,onChange,'— выберите оружие —',meta);}
function buildArmorSelect(slot,value,onChange,meta=null){return buildItemSelect(armorData[slot],getArmorGrade,value,onChange,'— не выбрано —',meta);}
function buildJewelrySelect(type,value,onChange,meta=null){return buildItemSelect(jewelryData[type],getJewelryGrade,value,onChange,'— не выбрано —',meta);}

function buildTattooSelect(value,onChange,meta=null){
  const select=document.createElement('select');
  select.className='tattoo-select';
  const emptyOpt=document.createElement('option');emptyOpt.value='';emptyOpt.textContent='— нет —';
  if(!value)emptyOpt.selected=true;
  select.appendChild(emptyOpt);
  if(value&&!tattooOptions.includes(value)){
    const customOpt=document.createElement('option');customOpt.value=value;customOpt.textContent=value;customOpt.selected=true;select.appendChild(customOpt);
  }
  tattooStats.forEach(plus=>{
    const group=document.createElement('optgroup');group.label=`+ ${plus}`;
    tattooStats.forEach(minus=>{
      if(plus===minus)return;
      for(let lvl=1;lvl<=4;lvl++){
        const val=`+${lvl} ${plus} -${lvl} ${minus}`;
        const opt=document.createElement('option');opt.value=val;opt.textContent=val;
        if(val===value)opt.selected=true;
        group.appendChild(opt);
      }
    });
    select.appendChild(group);
  });
  if(meta){if(meta.memberId)select.dataset.memberId=meta.memberId;if(meta.field)select.dataset.field=meta.field;}
  select.addEventListener('change',e=>onChange(e.target.value));
  return select;
}

// Глобальные обработчики дропдаунов
document.addEventListener('click',(e)=>{
  if(!e.target.closest('.weapon-select')&&!e.target.closest('.weapon-dropdown')){
    document.querySelectorAll('.weapon-dropdown').forEach(d=>{d.hidden=true;});
    document.querySelectorAll('.weapon-trigger.open').forEach(t=>t.classList.remove('open'));
  }
});

window.addEventListener('scroll',(e)=>{
  const target=e.target;
  if(target&&target.closest&&target.closest('.weapon-dropdown'))return;
  document.querySelectorAll('.weapon-dropdown').forEach(d=>{d.hidden=true;});
  document.querySelectorAll('.weapon-trigger.open').forEach(t=>t.classList.remove('open'));
},true);

const AUTHOR_KEY='l2party_author';
const COMMENT_AUTHOR_KEY='l2party_comment_author';
const savedAuthor=localStorage.getItem(AUTHOR_KEY)||'';