const yoKaiList = [
  { "name": "Sigh-Durr", "img": "Robin_Ful.png" },
  { "name": "Flippit", "img": "Tornalmohado.png" },
  { "name": "Brutle", "img": "Gran_Coco.png" },
  { "name": "Minimoto", "img": "Minimoto.png" },
  { "name": "Goofball", "img": "Bola_Blanda.png" },
  { "name": "Slugger", "img": "Bateados.png" },
  { "name": "Lappinitup", "img": "Chupapremios.png" },
  { "name": "El Gutso", "img": "Guerrero_Guey.png" },
  { "name": "El Gutso Grande", "img": "Huracan_Guey.png" },
  { "name": "BBQvil", "img": "Barbacoo.png" },
  { "name": "Liarbird", "img": "Piopio_Yonohesido.png" },
  { "name": "Hot Air Buffoon", "img": "Globonauta.png" },
  { "name": "Shurikenny", "img": "Shurikenny.png" },
  { "name": "Nunchucky", "img": "Nunchucky.png" },
  { "name": "Camellia", "img": "Camelia.png" },
  { "name": "Zip Unlock", "img": "Cremallero.png" },
  { "name": "Slippup", "img": "Metepatas.png" },
  { "name": "Who-Me", "img": "Mochueloque.png" },
  { "name": "2-Much-2-Take", "img": "Todoidos.png" },
  { "name": "Why Naant", "img": "Preguntio.png" },
  { "name": "Naandhi", "img": "Respondio.png" },
  { "name": "Legsit", "img": "Exitio.png" },
  { "name": "Chicken Chukket", "img": "Cachocarne.png" },
  { "name": "Cornfused", "img": "Mazorco.png" },
  { "name": "Unshelltered", "img": "Cascarito.png" },
  { "name": "Lord Shrillington", "img": "Pomponio_Gala.png" },
  { "name": "House Partay", "img": "Fiestuki.png" },
  { "name": "Skulleidoscope", "img": "Calaveroscopio.png" },
  { "name": "Lionguist", "img": "Leonguista.png" },
  { "name": "Statikid", "img": "Estatinino.png" },
  { "name": "Professor Plumage", "img": "Profesor_Avertijo.png" },
  { "name": "Throne Wiper", "img": "Noaipapel.png" },
  { "name": "Imagenius", "img": "Jipigenio.png" },
  { "name": "Miss Teri", "img": "Miss_Teria.png" },
  { "name": "Squandeer", "img": "Renaldo.png" },
  { "name": "Thurston", "img": "Isotomas.png" },
  { "name": "Agent Spect-hare", "img": "Coneagente.png" },
  { "name": "Snow Spect-hare", "img": "Blancacone.png" },
  { "name": "Oh Wheel", "img": "Prudencio.png" },
  { "name": "Blownhistoppa", "img": "Explotacota.png" },
  { "name": "Roughraff", "img": "Grafilcebu.png" },
  { "name": "Chilled Cowcao", "img": "Chocovaca.png" },
  { "name": "Stircrazy Stu", "img": "Vacaloca.png" },
  { "name": "Nummskull", "img": "Fracalavero.png" },
  { "name": "Skillkull", "img": "Calabilidoso.png" },
  { "name": "Oh Bah Gah!", "img": "Master_Chof.png" },
  { "name": "Speedemountain", "img": "Monte_Merario.png" },
  { "name": "Shipshape Sailor", "img": "Calmarinero.png" },
  { "name": "Admirable Admiral", "img": "Almirante_Admirable.png" },
  { "name": "Sing Kong", "img": "Peter_Punki.png" },
  { "name": "Slippy", "img": "Pantuflo.png" },
  { "name": "Repossessor", "img": "Reahucio.png" },
  { "name": "Mr. Blockhead", aliases: ["Mr. Blockhead", "Mr Blockhead"] "img": "Radiopatio.png" },
  { "name": "Steaking", "img": "Filete_II.png" },
  { "name": "Showbonyan", "img": "Showbonyan.png" },
  { "name": "The Jawsome Kid", "img": "Tiburon_Tiburcio" },
  { "name": "El Sharkador", "img": "Tiburon_Jaqueton.png" },
  { "name": "Silver Lining", "img": "Capitan_Nublo.png" },
  { "name": "Twirly Pie", "img": "Sincopollo.png" },
  { "name": "Petty-Cake", "img": "Brownilda.png" },
  { "name": "Hoppy-go-Lucky", "img": "Chapulin.png" },
  { "name": "Buttered Blue", "img": "Apanleado.png" },
  { "name": "Punching Baguette", "img": "Panduro.png" },
  { "name": "Unbelievaboy!", "img": "Superninato.png" },
  { "name": "Unbearaboy!", "img": "Superninato_Rebelde.png" },
  { "name": "Inflammaboy!", "img": "Superninato_Picajoso.png" },
  { "name": "Krystal Fox", "img": "BellonZ.png" },
  { "name": "Runsure", "img": "Olvirunner.png" },
  { "name": "Kittylumbus", "img": "Gatallanes.png" },
  { "name": "Zest-a-Minute", "img": "Limonescente.png" },
  { "name": "Cue-Tee", "img": "Tomanota.png" },
  { "name": "Demandi", "img": "Zalameria.png" },
  { "name": "Jibanyan Liu Bei", "img": "Jibanyan_Liu_Bei.png" },
  { "name": "Komasan Sun Ce", "img": "Komasan_Sun_Ce.png" },
  { "name": "Stinkeye", "img": "Todoapesta.png" },
  { "name": "Slackoon", "img": "Relapache.png" },
  { "name": "Puppiccino", "img": "Cafechucho.png" },
  { "name": "Ballin", "img": "Partidacio.png" },
  { "name": "Tomnyan", "img": "Tomnyan.png" },
  { "name": "Koma Knomads", "img": "Komaestopistas.png" },
  { "name": "Whirlweasel", "img": "Segadora.png" },
  { "name": "Chocobonyan", "img": "Chocobonyan.png" },
  { "name": "Mooglenyan", "img": "Mogurinyan.png" },
  { "name": "Wobblenyan", "img": "Wobblenyan.png" },
  { "name": "Wibblekoma", "img": "Wibblekoma.png" },
  { "name": "Sushinyan", "img": "Sushinyan.png" },
  { "name": "Tempurasan", "img": "Tempurasan.png" },
  { "name": "Tenguriginal", "img": "Tenguriginal.png" },
  { "name": "Tengulightened", "img": "Angel_Garudian.png" },
  { "name": "Bumblejack", "img": "Lenaciegotxea.png" },
  { "name": "In-Tune", "img": "Chunda_y_Tachunda.png" },
  { "name": "Supersize Gramps", "img": "Abuzampa_XXL.png" },
  { "name": "Lil Blue Bathing Hood", "img": "Albornocita_Azul.png" },
  { "name": "Bubble Beth", "img": "Florentina.png" },
  { "name": "Afronaut", "img": "Afronauta.png" },
  { "name": "Cereal Spiller", "img": "Arrocet.png" },
  { "name": "Tomorrow Gal", "img": "Espe.png" },
  { "name": "Swaycorn", "img": "Bellotieso.png" },
  { "name": "Push Pup", "img": "Clican.png" },
  { "name": "Ponderoo", "img": "Indeciguro.png" },
  { "name": "Tongue-Twister", "img": "Trabalanghi.png" },
  { "name": "Lazy Sundae", "img": "Dormidomingo.png" },
  { "name": "Got It Maid", "img": "Auxiliadora.png" },
  { "name": "Greengramps", "img": "Abuflauta.png" },
  { "name": "Right Brothers", "img": "Gememinencias.png" },
  { "name": "Tattlecakes", "img": "Repostilleja.png" },
  { "name": "Fundango", "img": "Gogonzalo.png" },
  { "name": "Pearly White", "img": "Esmaltina.png" },
  { "name": "Ghostess", "img": "Fantasfitriona.png" },
  { "name": "Double Time", "img": "Sonico.png" },
  { "name": "Sonic Bam", "img": "Supersonico.png" },
  { "name": "Neggplant", "img": "Berenpenas.png" },
  { "name": "Snitchin", "img": "Akusika.png" },
  { "name": "Messyrai", "img": "Leonerai.png" },
  { "name": "Treetter", "img": "Trenditopico.png" },
  { "name": "Retreeter", "img": "Retuiterio.png" },
  { "name": "Salty Bacon", "img": "Panceto.png" },
  { "name": "Indexter", "img": "Bilgatino.png" },
  { "name": "Hack King", "img": "Su_Hackeltad.png" },
  { "name": "DisliKing", "img": "Rey_Pulsivo.png" },
  { "name": "Crook-a-doodle", "img": "Timo_Gallo.png" },
  { "name": "Rocky Badboya", "img": "Rocky_Malrolla.png" },
  { "name": "Injurnallist", "img": "Hierodista.png" },
  { "name": "Misterr Typoo", "img": "Herrato.png" },
  { "name": "Lil Kappa", "img": "MC_Kappa.png" },
  { "name": "Horizontail", "img": "Tumbardillo.png" },
  { "name": "Usapyon Zhongda", "img": "Usapyon_Zhongda.png" },
  { "name": "Dr. E. Raser", aliases: ["Dr. E. Raser", "Dr E Raser"], "img": "Dr_Nihil_Listo.png" },
  { "name": "Dr. Nocturne", aliases: ["Dr. Nocturne", "Dr Nocturne"], "img": "Dr_Nocturnia.png" },
  { "name": "Tut 'n' K'mon", "img": "Espaya.png" },
  { "name": "Tie-red", "img": "Corbapacasa.png" },
  { "name": "Love-Torn", "img": "Cartairada.png" },
  { "name": "Shakey", "img": "Ambivalencio.png" },
  { "name": "Quagmira", "img": "Lapo.png" },
  { "name": "Pergushin", "img": "Dabombo.png" },
  { "name": "Percrushionists", "img": "Los_Bomboledores.png" },
  { "name": "Grubbles", "img": "Amarilia.png" },
  { "name": "Nervous Rex", "img": "Sheriff_Agonio.png" },
  { "name": "Rinsin Repete", "img": "Padefo.png" },
  { "name": "Soloman", "img": "Sololo.png" },
  { "name": "Rhumbastiltskin", "img": "Maracario.png" },
  { "name": "Slax", "img": "Pandalon.png" },
  { "name": "Shedwin", "img": "Peluson.png" },
  { "name": "Glumdango", "img": "Amarguito.png" },
  { "name": "Spewart", "img": "Nauseo.png" },
  { "name": "Decidevible", "img": "Condespotico.png" },
  { "name": "Hairum Scarum", "img": "Flequipilante.png" },
  { "name": "Oridjinn", "img": "Origenio.png" },
  { "name": "Horridjinn", "img": "Horrogenio.png" },
  { "name": "Little Charrmer", "img": "Fulgurilla.png" },
  { "name": "Humtea Jumtea", "img": "Saltetera.png" },
  { "name": "Snailspace", "img": "Don_Despacito.png" },
  { "name": "Putasockinit", "img": "Sierpesado.png" },
  { "name": "Snidewinder", "img": "Cobravil.png" },
  { "name": "OMGator", "img": "Aymadrilo.png" },
  { "name": "Nautaloss", "img": "Naqueperder.png" },
  { "name": "Shellebrity", "img": "Borjamar.png" },
  { "name": "T-Wrecks", "img": "Bebesaurio.png" },
  { "name": "D-Stroy", "img": "Destrozasaurio.png" },
  { "name": "Clodzilla", "img": "Torpesaurio.png" },
  { "name": "Snippity Cricket", "img": "Luigi_Longueras.png" },
  { "name": "Flocktopus", "img": "Pulpopular.png" },
  { "name": "Bitter Batter", "img": "Tentanfadado.png" },
  { "name": "Cocobanana", "img": "Tochacolate.png" },
  { "name": "Ooze Zat", "img": "Sustoleo.png" },
  { "name": "Mython", "img": "Reptozudo.png" },
  { "name": "Forgetmenot", "img": "Saporientador.png" },
  { "name": "Originyan", "img": "originyan.gif" },
  { "name": "Sighborg Y", "img": "Aydroide_Y.png" },
  { "name": "King Jibanyan", "img": "Rey_Jibanyan.png" },
  { "name": "Queen Usapyon", "img": "Reina_Usapyon.png" },
  { "name": "Jackomasan", "img": "Jotamasan.png" },
  { "name": "Komajiro Ten", "img": "Diez_de_Komajiro.png" },
  { "name": "Acenyan", "img": "Asnyan.png" },
  { "name": "Josper", "img": "Whismodin.png" },
  { "name": "Benzaiten", "img": "Benzaiten.png" },
  { "name": "Hotei", "img": "Hotei.png" },
  { "name": "Daikokuten", "img": "Daikokuten.png" },
  { "name": "Ebisu", "img": "Ebisu.png" },
  { "name": "Bishamonten", "img": "Bishamonten.png" },
  { "name": "Columbakat", "img": "Gatobal_Colon.png" },
  { "name": "T. Energison", aliases: ["T. Energison", "T Energison"], "img": "T_Energison.png" },
  { "name": "Starwin", "img": "Darguin.png" },
  { "name": "The Last Nyanmurai", "img": "Ultimo_Nyanmurai.png" },
  { "name": "Koma Star", "img": "Koma_Estrella.png" },
  { "name": "Platinos", "img": "Platinum.png" },
  { "name": "Flash T. Cash", aliases: ["Flash T. Cash", "Flash T Cash"], "img": "Abusplendido.png" },
  { "name": "Re-Q-Perate", "img": "Re-Q-Pera.png" },
  { "name": "Princess Pearl", "img": "Divamarina.png" },
  { "name": "Asura", "img": "Todobelicoso.png" },
  { "name": "Terminyanator", "img": "Terminyanator.png" },
  { "name": "Supernyan", "img": "Supernyan.png" },
  { "name": "Hovernyan S", "img": "Hovernyan_S.png" },
  { "name": "Hovernyan Cao Cao", "img": "Hovernyan_Cao_Cao.png" },
  { "name": "Yoganalisten", "img": "Yoguididacta.png" },
  { "name": "Judgebrick", "img": "Frauduralla.png" },
  { "name": "Urnfulfilled", "img": "Insaciablo.png" },
  { "name": "Sad 2 the Bone", "img": "Penancio.png" },
  { "name": "Venoctobot", "img": "Venoctobot.png" },
  { "name": "Orcanos Lu Bu", "img": "Demoniorco_Lu_Bu.png" },
  { "name": "Kyubot", "img": "Kyubot.png" },
  { "name": "Ultimate Robonyan", "img": "Robonyan_Definitivo.png" },
  { "name": "Molar Petite", "img": "Topina.png" },
  { "name": "Life-is-Parfait", "img": "Miss_Mousse.png" },
  { "name": "Mee 2", "img": "populina.gif" },
  { "name": "Koalanyan", "img": "Koalanyan.png" },
  { "name": "Jibanyan T", "img": "jibanyan_T.gif" },
  { "name": "Komasan T", "img": "komasan_T.gif" },
  { "name": "Her Eggcelency", "img": "Yemajestad.png" },
  { "name": "Deadcool", "img": "Cicloman.png" },
  { "name": "Sweattuce", "img": "Deporchugo.png" },
  { "name": "Mr. Blue-Shy", aliases: ["Mr. Blue-Shy", "Mr Blue-Shy"], "img": "Timorato_Buendia.png" },
  { "name": "Amplifly", "img": "Maripasada.png" },
  { "name": "Ulteria", "img": "Ulteria.png" },
  { "name": "My-Baaad", "img": "Milperdones.png" },
  { "name": "Sunk'nsoul", "img": "Angustianima.png" },
  { "name": "Crummy Mummy", "img": "Cutremomia.png" },
  { "name": "Kaped Kommander", "img": "Kapman.png" },
  { "name": "Tofupyon", "img": "Tofupyon.png" },
  { "name": "Ed Zoff", "img": "Dex_Capito.png" },
  { "name": "Gorgeous Ambassador", "img": "Embajador_Fabuloso.png" },
  { "name": "Hinozall", "img": "Intelecto_A.png" },
  { "name": "Zazel", "img": "Zazel_A.png" },
  { "name": "Procrastinocchio", "img": "Procrastinocho.png" },
  { "name": "Treasure Pest", "img": "Cofre_Cafre.png" },
  { "name": "Jeanne Ne-Sais-Quoi", "img": "Coco_Masiel.png" },
  { "name": "Whisper Kongming", "img": "Whisper_Kongming.png" },
  { "name": "Jurojin", "img": "Jurojin.png" },
  { "name": "Fukurokuju", "img": "Fukurokuju.png" },
  { "name": "Sarcophacurse", "img": "Maldenotep.png" },
  { "name": "King Deadward", "img": "Rey_Palmiro.png" },
  { "name": "Pandora", "img": "Pandora.png" },
  { "name": "Comic Genieus", "img": "Ingenio.png" },
  { "name": "Bastnetnyan", "img": "Bastenyan.png" },
  { "name": "Komanubis", "img": "Komanubis.png" },
  { "name": "Gabby", "img": "Discursi.png" },
  { "name": "Teducator", "img": "Educoso.png" },
  { "name": "Gentlemutt", "img": "Lord_Pedigri.png" },
  { "name": "City Licker", "img": "Urbasierpe.png" },
  { "name": "Whivern King", "img": "Pregundragon_Rey.png" },
  { "name": "Righteous Zazel", "img": "Zazel_Justiciero.png" },
  { "name": "Hinozall Awoken", "img": "Intelecto_Iluminado_A.png" },
  { "name": "Ancient Enma", "img": "Enma_Ancestral.png" },
  { "name": "Lord Enma Awoken", "img": "Gran_Enma_Iluminado.png" },
  { "name": "The Boracle", "img": "Rollaculo.png" },
  { "name": "Rampajah", "img": "Maharazas.png" },
  { "name": "Cymbalina", "img": "Cimbalina.png" },
  { "name": "Mumbles", "img": "Masculloso.png" },
  { "name": "Roary", "img": "Vociferio.png" },
  { "name": "Letzbifrenz", "img": "Aviguito_Pio.png" },
  { "name": "Wack o' Lantern", "img": "Frustrolillo.png" },
  { "name": "Moolinda", "img": "Bovida.png" },
  { "name": "Neighthan", "img": "Equinio.png" },
  { "name": "Big Fish", "img": "Pecificador.png" },
  { "name": "Alpina", "img": "Alpina.png" },
  { "name": "Lunie", "img": "Seleno.png" },
  { "name": "KJ", "img": "KJ.png" },
  { "name": "Solar Enma", "img": "Enma_Solar.png" },
  { "name": "Infinite Enma", "img": "Enma_Infinito.png" },
  { "name": "Umbral Enma", "img": "Enma_Umbrio.png" },
  { "name": "Indiana Jaws", "img": "tibu_Jones.gif" },
  { "name": "Shovulcan", "img": "vulcavador.gif" },
  { "name": "Zomboy", "img": "adoleszombi.gif" },
  { "name": "Nyanses II", "img": "nyanses_II.gif" },
  { "name": "Meopatra", "img": "Miopatra.png" },
  { "name": "Fitwit", "img": "mazado_de_la_Calzada.gif" },
  { "name": "El Dorago", "img": "Dradorado.png" },
  { "name": "The Hinix", "img": "Fenixtelecto.png" },
  { "name": "Junkernaut", "img": "Chatarrenstein.png" },
  { "name": "Supermanager", "img": "Supergerente.png" },
  { "name": "Hoaxy-Coaxy", "img": "Ilusionisto.png" },
  { "name": "Agent X", "img": "Camorro.png" },
  { "name": "The Executor", "img": "Diavolo.png" },
  { "name": "Slackerjack", "img": "Flautista_de_Malmelin.png" },
  { "name": "Yo-kaiju", "img": "Gamero.png" },
  { "name": "Yopple-Bot", "img": "Yopple-Bot.png" },
  { "name": "No-Bot", "img": "No-Bot.png" },
  { "name": "Beddy-Byes", "img": "Nocturnia.png" },
  { "name": "Rongo Swirll", "img": "Ray_Baqueto.png" },
  { "name": "The Ghoulfather", "img": "Don_Crueleone.png" },
  { "name": "Don Spiracy", "img": "Don_Conspirazione.png" },
  { "name": "Slackolyte", "img": "Flautiscolito.png" },
  { "name": "Duolyte", "img": "Duocolito.png" },
  { "name": "Chirpolyte", "img": "Cantacolito.png" },
  { "name": "Torneyedo", "img": "Ciclonojo.png" },
  { "name": "Hollow Guard", "img": "Caballero_Hueco.png" },
  { "name": "Skulk", "img": "Paticio.png" },
  { "name": "Orcalyte", "img": "Demoniorcolito.png" },
  { "name": "The Zenlightener", "img": "Iluminazen.png" },
  { "name": "Plundros", "img": "Capitan_Botin.png" },
  { "name": "Yellskitchen", "img": "Chef_Ricote.png" },
  { "name": "Maiden Ruin", "img": "Doncella_de_la_Ruina.png" },
  { "name": "The Woebra", "img": "Necrocobra.png" },
  { "name": "The Goldfather", "img": "Don_Aureone.png" },
  { "name": "IcarOS", "img": "Icarus.png" },
  { "name": "Narwail", "img": "Ballenato.png" },
  { "name": "Whaleman", "img": "Cachaslote.png" },
  { "name": "Soulcleaver", "img": "El_Carnicero.png" },
  { "name": "Holey Moley", "img": "Topoderoso.png" },
  { "name": "The Lastest Nyanmurai", "img": "El_Ultimisimo_Nyanmurai.png" },
]

let score = 0; 
let gameEnded = false; // Evita cambios una vez terminado el juego
const unlockedYoKai = new Set(); // Registro de Yo-kai desbloqueados por índice

// Normalizar la entrada del usuario (sin tildes y en minúsculas)
function normalizeString(str) {
    return str.normalize("NFD").replace(/[̀-\u036f]/g, "").toLowerCase();
}

// Crear el objeto de audio una sola vez
let getSound = new Audio("get.mp3");

// Reproducir sonido cuando se desbloquea un Yo-kai (sin solapamiento)
function playGetSound() {
    if (!getSound.paused) {
        getSound.pause(); // Detener el sonido actual si ya está reproduciéndose
        getSound.currentTime = 0; // Reiniciar el sonido al principio
    }
    getSound.play(); // Reproducir el sonido
}

// Actualizar la puntuación en formato (adivinados / totales)
function updateScoreDisplay() {
    const scoreDisplay = document.getElementById("score");
    scoreDisplay.textContent = `${score}/${yoKaiList.length}`;
}

// Verificar la respuesta del usuario
function checkAnswer() {
    if (gameEnded) return; // Si el juego ha terminado, no hacer nada

    const userAnswer = normalizeString(document.getElementById("answer-input").value.trim());

    let correctGuess = false; // Bandera para reproducir el sonido solo si hay aciertos

    yoKaiList.forEach((yoKai, index) => {
        // Normaliza todos los nombres asociados al Yo-kai
        const normalizedNames = [yoKai.name, ...(yoKai.aliases || [])].map(name => normalizeString(name));

        // Si la respuesta coincide con alguno de los nombres y no ha sido desbloqueado
        if (normalizedNames.includes(userAnswer) && !unlockedYoKai.has(index)) {
            const yoKaiImg = document.getElementById(`yo-kai${index + 1}`);
            if (yoKaiImg && yoKaiImg.src.includes("no-kai.png")) {
                yoKaiImg.src = yoKai.img; // Actualiza la imagen

                // Añadir clase para animación
                yoKaiImg.classList.add("yokai-unlocked");
                yoKaiImg.addEventListener("animationend", () => {
                    yoKaiImg.classList.remove("yokai-unlocked"); // Quitar clase tras animación
                });

                unlockedYoKai.add(index); // Marcar el Yo-kai como desbloqueado
                score++;
                correctGuess = true; // Se encontró un acierto
            }
        }
    });

    if (correctGuess) {
        playGetSound(); // Reproducir sonido solo si hubo un acierto
        updateScoreDisplay(); // Actualizar puntuación
        document.getElementById("answer-input").value = ""; // Borra la respuesta después de un acierto
    }

    checkGameEnd(); // Verifica si el juego ha terminado
}

// Verificar si el juego ha terminado (cuando se han adivinado todos los Yo-kai)
function checkGameEnd() {
    if (score === yoKaiList.length) {
        gameEnded = true;
        stopTimer(); // Detener el temporizador
        showCongratsImage(); // Mostrar imagen de "¡Felicidades!"
    }
}

// Mostrar la imagen de "¡Felicidades!" al finalizar el juego
function showCongratsImage() {
    const congratsImg = document.createElement("img");
    congratsImg.src = "congrats.png";
    congratsImg.id = "congrats-image";
    congratsImg.style.position = "fixed";
    congratsImg.style.bottom = "0";
    congratsImg.style.left = "50%";
    congratsImg.style.transform = "translateX(-50%)";
    congratsImg.style.width = "100vw";
    congratsImg.style.zIndex = "1000";
    congratsImg.style.cursor = "pointer";

    // Ocultar la imagen al hacer clic
    congratsImg.addEventListener("click", () => {
        congratsImg.remove();
    });

    document.body.appendChild(congratsImg);
}

// Temporizador
let startTime;
let timerInterval;

function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    const currentTime = Date.now();
    const elapsedTime = currentTime - startTime;

    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

    const formattedTime = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    document.getElementById("time").textContent = formattedTime;
}

function stopTimer() {
    clearInterval(timerInterval);
}

// Manejador de evento: validación automática con "input"
document.getElementById("answer-input").addEventListener("input", checkAnswer);

// Inicializar el marcador y temporizador al cargar la página
updateScoreDisplay(); // Inicializa la puntuación en 0/total
startTimer();

window.addEventListener("beforeunload", (event) => {
    if (score > 0) { // Mostrar advertencia solo si hay progreso
        event.preventDefault();
        event.returnValue = "Are you sure you want to exit? All progress will be lost.";
    }
});
