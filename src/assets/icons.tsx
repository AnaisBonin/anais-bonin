interface IconProps {
    color?: string,
    margin?: string,
}

interface IconWrapperProps {
    children: JSX.Element,
    margin?: string,
}

const IconWrapper = ({ children, margin }: IconWrapperProps) => (
    <div
        style={{
            margin: margin ?? 0,
        }}>
        {children}
    </div>
)

export const AsteriskIcon = ({ color = "#d7deea", margin }: IconProps) => (
    <IconWrapper margin={margin}>
        <svg xmlns="http://www.w3.org/2000/svg" width="29.64371" height="39.7404" viewBox="0 0 29.64371 39.7404">
            <path d="M1.25681,13.09569c7.26897,5.96325,14.53794,11.9265,21.80691,17.88976,1.04305,.85568,2.51479,1.02074,3.53553,0,.88271-.88271,1.04903-2.67494,0-3.53553-7.26897-5.96325-14.53794-11.9265-21.80691-17.88976-1.04305-.85568-2.51479-1.02074-3.53553,0-.88271,.88271-1.04903,2.67494,0,3.53553h0Z" fill={color} origin="undraw" />
            <path d="M4.27997,33.18738C12.48641,25.09936,20.69284,17.01134,28.89928,8.92332c2.29534-2.26222-1.24063-5.79733-3.53553-3.53553C17.15731,13.47581,8.95087,21.56383,.74444,29.65185c-2.29534,2.26222,1.24063,5.79733,3.53553,3.53553h0Z" fill={color} />
            <path d="M11.63176,2.41394c-.23669,11.6375-.47337,23.27501-.71006,34.91251-.06546,3.21875,4.93454,3.21843,5,0,.23669-11.6375,.47337-23.27501,.71006-34.91251,.06546-3.21875-4.93454-3.21843-5,0h0Z" fill={color} />
        </svg>
    </IconWrapper>
);

export const FlowerIcon = ({ color = "#ddcdd3", margin }: IconProps) => (
    <IconWrapper margin={margin}>
        <svg xmlns="http://www.w3.org/2000/svg" width="51.49637" height="43.76344" viewBox="0 0 51.49637 43.76344">
            <path d="M26.92503,17.31962c-1.26777-.08074-2.49548-.0889-3.7517,.14945-1.20935,.22946-2.32466,.82242-3.24683,1.62702-2.03749,1.77774-2.42519,5.35563-.34193,7.26681,2.02745,1.85999,4.96434,1.4375,7.37873,.68881,1.07966-.33479,2.23339-.73862,3.15064-1.41379,1.29012-.94963,2.24386-2.30316,2.24107-3.96533-.00261-1.55742-.94931-3.05379-2.36553-3.71125-1.49638-.69467-2.96262-.58891-4.54739-.35417-1.08455,.16064-2.15149,.43903-3.17611,.82925-1.50683,.57387-2.95258,1.30487-3.48692,2.95655-.60062,1.85653,.47129,3.83501,2.35466,4.34922,1.11107,.30335,2.31704,.06845,3.43745-.04991,1.20793-.12761,2.50958-.16062,3.57976-.81126,1.62768-.98958,2.20922-3.00587,1.23995-4.68103-.91738-1.58548-2.77718-1.93421-4.45538-1.84815-1.9357,.09927-3.81346,.99808-4.34992,3.01663-.51334,1.93157,.83792,3.89673,2.7496,4.30188,1.83159,.38817,3.35137-.48774,4.633-1.7162,.72502-.69494,.89684-1.83069,.51692-2.73097-.38797-.91935-1.27759-1.51942-2.28469-1.5368-.50332-.00869-1.00663-.01737-1.50995-.02606-1.30821-.02258-2.55975,1.16603-2.5,2.5,.06153,1.37383,1.0982,2.47581,2.5,2.5,.50332,.00869,1.00663,.01737,1.50995,.02606l-1.76777-4.26777c-.10325,.09897-.20638,.19821-.31314,.29343-.07115,.06406-.14377,.12641-.21788,.18703,.30231-.22589,.37579-.2852,.22043-.1779-.0871,.04971-.54107,.27881-.13116,.11149,.41349-.16877-.10461,.00932-.20857,.02693l.6646-.0893c-.11498,.01022-.22027,.01145-.3355,.00438l.6646,.0893c-.08785-.01182-.19102-.05462-.27574-.05339-.12145-.03712-.0741-.01429,.14205,.06848,.22632,.10477,.25973,.115,.10021,.0307,.02058,.01485,.48014,.41913,.25638,.18928,.16692,.15031,.28257,.33038,.34695,.5402,.08644,.23889,.10518,.27106,.05621,.09653l.0893,.6646c-.01516-.08158-.01934-.16371-.01256-.24639l-.0893,.6646c.04192-.29049,.18638-.35074-.10048,.13229-.26423,.31092-.33115,.39532-.20074,.2532,.13333-.13731,.04474-.07746-.26578,.17953l.10725-.06939c.21669-.11246,.14667-.08442-.21005,.08413,.03875,.0269,.38547-.08784,.43321-.09579l-.6646,.0893c.5351-.06577,1.09368-.07803,1.63065-.02782l-.6646-.0893c.09621,.014,.19042,.03516,.28617,.05072,.4199,.06826-.37423-.20431-.16188-.07609,.10717,.06758,.07138,.03865-.10737-.08678-.12006-.06565-.21288-.15854-.27846-.27867-.12471-.18029-.1546-.21668-.08969-.10915,.09755,.17198,.0493,.0631-.14476-.32665l-.0893-.6646c.01621,.07715,.02072,.15499,.01352,.23351l.0893-.6646c-.04796,.24857,.00893,.14548,.17067-.30928-.12543,.21017-.05219,.11929,.21972-.27264,.38509-.2756,.47343-.34454,.26502-.2068-.15694,.08249-.12123,.07243,.10712-.03019,.46504-.19013-.01672-.00672-.12075,.02028-.14442,.03748-.2909,.06286-.43827,.08527l.6646-.0893c-.67052,.08568-1.34405,.15249-2.0167,.21898-.59152,.05847-1.20158,.16041-1.79648,.10543l.6646,.0893c-.11765-.01783-.59143-.17642-.13768,.00234,.20585,.06076,.38409,.1709,.53473,.33045,.4037,.87005,.54957,1.09971,.43762,.68896l.0893,.6646c-.01361-.12712-.01154-.23063,.00505-.35745l-.0893,.6646c.07749-.32179-.10781,.20168-.13079,.25079,.18122-.38719-.29669,.34155-.12075,.15721,.18371-.19248-.43556,.26166-.19271,.14825,.0996-.04651,.19221-.11417,.29144-.16379,.0673-.03365,.1693-.10388,.24396-.11277l-.32577,.13857c.07429-.03027,.1489-.05975,.22382-.08843,.22444-.08684,.45089-.16852,.67922-.24456,.91473-.30464,1.85525-.51614,2.81001-.64722l-.6646,.0893c.53665-.06787,1.06914-.11526,1.60941-.06406l-.6646-.0893c.15132,.0214,.45538,.15521,.5947,.13004-.39613-.18007-.47788-.21329-.24526-.09967,.07524,.04014,.1479,.08451,.21797,.13311-.33073-.27041-.40284-.31907-.21636-.14597,.1693,.19113,.11566,.12142-.16094-.20913,.12016,.22602,.08766,.14323-.09752-.24837,.02443,.08289,.0417,.16725,.05182,.25308l-.0893-.6646c.01041,.13291,.01039,.25419,.00057,.38715l.0893-.6646c-.0194,.13332-.04826,.25357-.08229,.38368-.1041,.39796,.23199-.40215,.06509-.1732-.27438,.37638,.13587-.04415,.12516-.12727,.00717,.05569-.26566,.25508-.29599,.2951,.30905-.22838,.38613-.28743,.23125-.17717-.05663,.04098-.11463,.07996-.174,.11692-.09877,.06284-.20066,.12066-.3037,.17614-.10345,.05571-.20852,.10827-.31484,.15828-.06373,.03007-.12792,.05912-.19257,.08716-.17126,.07505-.08548,.03878,.25734-.10883-.20812-.00018-.53856,.20683-.74041,.27551-.29919,.10181-.6017,.19392-.90697,.27574-.55259,.14811-1.11349,.2612-1.67963,.3429l.6646-.0893c-.45512,.05837-.90634,.08223-1.36371,.03579l.6646,.0893c-.14199-.0198-.54997-.03748-.64601-.14761,.0889,.10195,.57967,.21353,.18436,.05538-.20972-.08391,.41444,.40463,.14876,.1163-.23374-.25367,.16465,.20381,.16158,.23475,.00267-.02684-.12601-.2144-.14925-.25369-.14031-.23709,.17035,.59743,.10297,.21113-.02055-.1178-.05294-.23275-.07091-.35171l.0893,.6646c-.02507-.24469-.02139-.48092,.00983-.72507l-.0893,.6646c.02611-.1501,.10752-.32435,.11578-.47242-.18321,.4065-.2197,.4941-.10947,.2628,.03845-.07433,.08033-.14667,.12563-.21704,.14549-.21132,.09172-.14665-.1613,.19398,.05525-.06582,.11304-.12932,.17339-.19051,.06042-.06125,.12308-.12012,.18797-.17661,.19692-.16353,.13032-.11291-.1998,.15186,.14944-.05284,.3026-.19551,.4459-.27086,.0775-.04067,.15612-.07904,.23587-.1151-.39716,.16207-.47425,.19692-.23127,.10455,.36912-.11166,.72777-.20643,1.11048-.26372l-.6646,.0893c.92083-.11566,1.8433-.06684,2.76643-.00805,1.30769,.08328,2.55781-1.20938,2.5-2.5-.06386-1.42571-1.09917-2.41079-2.5-2.5h0Z" fill="none" origin="undraw" />
            <path d="M24.80794,19.05376c-.34554-3.03496-.3778-6.10081-.01927-9.1369,.15305-1.29609,.29608-2.74633,.81723-3.95671,.11675-.27116,.26984-.54899,.44557-.76895,.00877-.01098,.24197-.33539,.30802-.26905,.02843,.02855-.68749,.13317-.51464,.03117,.00295-.00174-.06197-.06802-.04739-.08457,.01655-.01879,.26544,.41905,.30565,.52514,.08795,.23205,.18116,.75341,.21028,.95197,.19772,1.34796,.13848,2.78838,.03286,4.14166-.2084,2.67036-.97334,5.32538-2.15203,7.72602l4.56937,1.9264c.87223-3.05114,2.19531-5.90046,3.97669-8.52989,.99596-1.4701,3.10523-4.95241,5.23808-3.36121,2.01675,1.50458,1.30071,4.15716-.08845,5.83457-1.98398,2.39564-5.17014,3.36819-8.01268,4.31229-2.79248,.92747-2.09114,4.60528,.6646,4.9107,3.58498,.39733,7.16997,.79465,10.75495,1.19198,1.43529,.15907,2.93547,.20471,4.34131,.54872,.68317,.16717,1.17185,.26681,.63747,.96312-.67274,.87658-2.26092,1.09225-3.26575,1.23818-1.322,.19198-2.73469,.19201-4.05823,.0084-2.588-.35901-5.16924-1.41443-7.20755-3.05883-.79745-.64334-1.73361-.95534-2.73097-.51692-.85267,.37482-1.61187,1.29018-1.5368,2.28469,.23194,3.07281,1.79966,5.398,3.2411,8.01858,.53103,.96543,1.12469,2.09507,1.02208,3.23532-.04521,.50235-.26727,1.41904-.87875,1.551-1.53324,.33088-2.22925-2.34602-2.32907-3.37749-.28677-2.96319,.31288-5.88136-.60954-8.7892-.5906-1.86181-2.74893-2.36025-4.17846-1.10317-2.20183,1.93621-2.86382,4.79177-3.39205,7.54848-.27176,1.41826-.87876,4.97971-2.76581,4.94605-2.09786-.03742-2.11188-2.90011-1.42975-4.25104,1.31629-2.60684,4.32799-3.84542,6.87175-4.91397,1.24388-.52251,2.13687-1.65337,1.7461-3.0753-.3508-1.27651-1.77949-2.14352-3.0753-1.7461-3.08635,.94659-6.25596,1.67103-9.46806,2.02261-1.97057,.21569-5.93798,.897-7.07202-1.41206-.93738-1.90864,1.8349-2.9178,3.27106-2.68539,2.88178,.46635,4.93512,3.03997,6.74233,5.10069,1.63576,1.86522,4.95371-.10303,4.17846-2.43237-1.03763-3.11769-2.07526-6.23538-3.11289-9.35308-.42192-1.26772-.97661-2.58953-1.08999-3.93069-.04372-.5171,.035-2.14595,.90902-2.1329,.04213,.00063,.01411,.01813-.04236,.0026,.30176,.08298,.57883,.7746,.68767,1.04181,.43106,1.05831,.58062,2.2646,.80201,3.37898,.62139,3.12779,1.24279,6.25558,1.86418,9.38337,.26323,1.32497,1.84139,2.0852,3.0753,1.7461,1.38158-.37968,2.01009-1.7465,1.7461-3.0753-.77512-3.90155-1.34614-7.91762-2.36532-11.76253-.87204-3.2898-3.42431-6.54296-7.23943-5.47865-4.16762,1.16264-4.96425,5.89873-4.00666,9.51687,1.07158,4.04884,2.62846,8.01895,3.95098,11.99261l4.17846-2.43237c-2.84922-3.24891-6.16251-6.44717-10.7531-6.60885C3.77794,16.74325-.40382,20.15752,.03125,24.56668c.46353,4.69763,5.29429,6.7519,9.4777,6.66931,4.54251-.08968,9.18993-1.07803,13.51884-2.40572l-1.3292-4.8214c-3.85238,1.61825-7.95756,3.44445-9.94977,7.38161-1.89318,3.74144-1.17963,8.69548,2.80148,10.78379,3.75925,1.97193,7.70227-.11664,9.37598-3.74289,.76674-1.66122,1.09451-3.35706,1.45484-5.13375,.32048-1.58019,.64422-3.15878,1.89806-4.26136l-4.17846-1.10317c1.08599,3.42351-.20634,7.12697,1.009,10.56933,1.13427,3.21271,4.4394,6.04169,8.04692,5.0651,3.40432-.92158,4.97549-4.57782,4.46597-7.85362-.28084-1.80561-1.1111-3.45338-2.02641-5.01664-.8537-1.45804-1.98862-2.99206-2.11992-4.73158l-4.26777,1.76777c3.24111,2.61476,6.98213,4.17164,11.13596,4.56501,3.82105,.36185,9.26902-.25686,11.37078-3.95986,1.12238-1.97747,1.08816-4.4956-.44882-6.24285-1.37589-1.56412-3.40252-1.95991-5.37316-2.1976-4.77773-.57626-9.56833-1.06167-14.35143-1.59179l.6646,4.9107c4.24328-1.40933,8.55407-3.04363,11.20549-6.86256,2.51219-3.61839,2.54378-8.77089-1.00955-11.73749-8.51466-7.10872-15.65086,7.86451-17.46019,14.19371-.76069,2.66098,3.29622,4.51942,4.56937,1.9264,1.74507-3.55417,2.76582-7.37267,2.89608-11.3391,.10916-3.32384-.21847-8.07617-4.07112-9.20225-3.81745-1.1158-6.32292,2.76172-6.97374,5.96219-.86217,4.23981-1.04394,8.60004-.55486,12.8958,.15272,1.34136,1.0397,2.5,2.5,2.5,1.23287,0,2.65373-1.1497,2.5-2.5h0Z" fill={color} />
        </svg>
    </IconWrapper>
);

export const HeartIcon = ({ color = "#a77987", margin }: IconProps) => (
    <IconWrapper margin={margin}>
        <svg xmlns="http://www.w3.org/2000/svg" width="52.18113" height="54.16432" viewBox="0 0 52.18113 54.16432">
            <path d="M25.19271,49.46081c-8.84125-4.89003-15.74061-13.09893-18.82232-22.74886-1.43731-4.50072-2.16634-9.79116-.25155-14.27424,1.73622-4.06501,5.72122-6.38472,10.09268-6.18084,2.08339,.09716,4.16292,.90088,5.70873,2.31137,.87755,.80073,1.58238,1.70487,2.15848,2.7424,.26448,.47632,.49193,.95835,.67302,1.47121,.22534,.63818,.26477,1.40107,.52732,2.00725,.15417,.35596-.10206,.21947,.10112,.08636,.50679-.332,.21922-.79844,1.01223-.9189,.29637-.04502,1.64799,.52605,1.23185,.65952,.27289-.08752-.08216,.28648,.08132-.04578,.20738-.42147,.01457-1.37193,.14808-1.9098,.17772-.71599,.4607-1.32711,.84859-1.9542,1.24599-2.01437,3.32094-3.37683,5.40503-4.40223,2.20274-1.08378,4.93726-1.76419,7.34398-.99945,2.13937,.67979,3.69298,2.45706,4.62712,4.44108,2.25757,4.79487,.80391,10.93044-.86279,15.69162-3.60419,10.29591-11.81439,19.54943-21.94928,23.77147-1.24544,.51883-2.13611,1.65611-1.7461,3.0753,.32315,1.17588,1.82109,2.26858,3.0753,1.7461,11.87322-4.9462,21.20457-15.14235,25.44148-27.26366,2.22112-6.35438,3.45997-14.23225-.06584-20.35015-1.65064-2.86416-4.34467-5.21698-7.5885-6.04417-3.53562-.9016-7.18108-.06498-10.42036,1.43479-3.00582,1.39168-5.81817,3.53161-7.5774,6.37572-1.59932,2.5856-3.10655,8.13838,.10168,10.17128,1.1633,.73713,2.69117,.76594,3.89931,.11374,1.71973-.92837,2.06942-2.66584,1.80417-4.44924-.48593-3.26719-2.08663-6.42275-4.46031-8.72774C21.07299,.76875,13.83824,.10313,8.17942,3.08863,2.40031,6.13759-.0784,12.67167,.00189,18.91644c.0912,7.09349,2.88352,14.18004,6.74899,20.04807,4.03435,6.12441,9.49554,11.2613,15.91824,14.81365,2.81795,1.55859,5.343-2.75796,2.5236-4.31735h0Z" fill={color} origin="undraw" />
        </svg>
    </IconWrapper>
);

export const LoveIcon = ({ color = "#70243b", margin }: IconProps) => (
    <IconWrapper margin={margin}>
        <svg xmlns="http://www.w3.org/2000/svg" width="61.19203" height="33.86125" viewBox="0 0 61.19203 33.86125">
            <path d="M4.26247,32.71595c5.2714-4.25087,9.82617-9.36645,13.46186-15.08085,1.74234-2.73851,3.36991-5.69721,3.61969-8.9971,.2397-3.16666-1.31481-6.3633-4.24701-7.75039C10.76404-2.10825,4.68314,2.95133,3.10934,9.01681c-.9126,3.51718-.73591,7.35084-.24264,10.91859,.45119,3.26341,1.5457,6.49861,3.88801,8.90408,4.29857,4.4145,11.82023,5.35322,16.95472,1.87378,2.64899-1.79511,.14988-6.12906-2.5236-4.31735-3.00894,2.03904-7.13393,1.92314-10.06359-.33498-3.72657-2.87236-3.85777-8.88097-3.58683-13.1653,.21138-3.34249,2.50994-9.34011,6.9988-7.68397,4.60025,1.69725-.32197,8.71739-1.82731,10.97443-3.28737,4.92892-7.37199,9.27846-11.97996,12.99433-1.05184,.8482-.883,2.65254,0,3.53553,1.03956,1.03956,2.48105,.85034,3.53553,0h0Z" fill={color} origin="undraw" />
            <path d="M26.96466,16.59519c-3.08154,1.7088-6.15027,3.74119-7.26015,7.28003-.57517,1.83392-.44253,3.82658,.42353,5.54236,.79421,1.57343,2.30558,2.62867,3.93561,3.18774,2.94188,1.009,6.48021,.18408,9.03907-1.44352,3.19192-2.03027,5.16201-5.56912,4.45103-9.38884-.36357-1.95326-1.6298-3.70325-3.35554-4.68277-1.95455-1.1094-4.09693-1.1395-6.12775-.25683-1.20387,.52325-1.56849,2.37876-.89688,3.42047,.80506,1.24871,2.13246,1.4567,3.42047,.89688-.58689,.25509-.22303,.10164-.06067,.05749,.4596-.12496,.02773,.1071-.10946-.01522,.06645,.05925,.53011-.01142,.6456-.01235,.53767-.00431-.43039-.11086-.10103-.01221,.13009,.03896,.26593,.06066,.39644,.10058,.094,.02875,.21873,.09595,.31059,.10778-.31673-.13872-.39016-.16699-.22031-.08479,.0745,.03588,.14763,.07439,.2194,.11553,.09611,.05433,.18612,.11909,.28211,.17309,.46824,.2634-.28248-.27972-.04533-.04014,.15353,.15511,.34118,.40556,.51908,.53108-.32021-.22592-.21689-.31407-.1009-.10552,.05602,.10072,.11568,.20955,.17727,.3077,.30993,.49386-.07557-.32831,.01128,.00917,.04684,.18203,.11528,.35806,.15768,.54227l.02111,.0918c.05023,.28165,.04922,.24657-.00303-.10525,.03544,.06751,.02292,.32333,.02462,.3779,.00394,.12636,.00348,.25351-.001,.37993-.00116,.03262-.05762,.65442-.00658,.23741,.05092-.41597-.04713,.19961-.0548,.23299-.02861,.12451-.06125,.24864-.09745,.37109-.03643,.12324-.08199,.24222-.12006,.36464-.16296,.52401,.20768-.32615-.05353,.10595-.11754,.19443-.28894,.6813-.49034,.80386,.03865-.02352,.36758-.43026,.05289-.07004-.08065,.09232-.15978,.1854-.24319,.27524-.2101,.22629-.43906,.42445-.66437,.63442-.28468,.26528,.07406-.03449,.07283-.04695,.00351,.0357-.42361,.29574-.45559,.31654-.23338,.15178-.47384,.29239-.71956,.42319-.13679,.07281-.27828,.13667-.41504,.2092-.34992,.18559,.08594-.01852,.08703-.02633-.01062,.07634-.72455,.2682-.78377,.28739-.28864,.09356-.58106,.17352-.87783,.23697-.24371,.05211-.82482,.03269-.15332,.04511-.24511-.00454-.49992,.04602-.74617,.05206-.24776,.00608-.49577,.00128-.74298-.01675-.00813-.00059-.29632-.04927-.32595-.03121,.39529,.05599,.45656,.06068,.1838,.01407l-.15756-.03285c-.05915-.01317-.74393-.24125-.76142-.2249,.02809-.02625,.56178,.28484,.16631,.06675-.09069-.05001-.18434-.09365-.27419-.14533-.10794-.06208-.21354-.1558-.32572-.20749-.27789-.12806,.41957,.4215,.08376,.05323-.06656-.07299-.14953-.15414-.22083-.21948-.36842-.33761,.25791,.44702-.00154,.00796-.05941-.10054-.12112-.21382-.18638-.31198-.3068-.46152,.0783,.34346,.00341,.02229-.03272-.14032-.07831-.29105-.12203-.42824-.08942-.28057,.10919-.16196,.00378,.13571,.06852-.19351-.0257-.60293-.01227-.81143l.00587-.09076c.02901-.28232,.02334-.24226-.017,.12017-.04801-.08988,.10163-.4556,.12527-.53977,.03355-.11945,.07493-.23584,.11126-.35444,.177-.57783-.24433,.44666,.03257-.09107,.14252-.27676,.29973-.53864,.46175-.80424,.22872-.37495-.01141-.01631-.05303,.04966,.10321-.1636,.25912-.30966,.39111-.45189,.24792-.26717,.51295-.51795,.78922-.75553,.12593-.10829,.25409-.21372,.38445-.31665-.33793,.26684-.03788,.03717,.13715-.08521,.2748-.19215,.556-.37513,.84071-.55223,.62764-.39042,1.27386-.7498,1.92012-1.10817,1.14471-.63477,1.61709-2.30337,.89688-3.42047-.74733-1.15916-2.1959-1.57594-3.42047-.89688h0Z" fill={color} />
            <path d="M36.23325,19.25684c1.40864,4.00438,2.81727,8.00875,4.22591,12.01313,.35444,1.00758,1.26731,1.88661,2.4107,1.8354,1.19663-.0536,1.97362-.76532,2.4107-1.8354,.05191-.12814,.10456-.25598,.15793-.38352-.11744,.27884-.11975,.28731-.00693,.02539,.11475-.25159,.22507-.50507,.34194-.75572,.23368-.5012,.47877-.99708,.73495-1.48716,.51237-.98019,1.0691-1.93718,1.66775-2.86717,.29933-.465,.60914-.92326,.92913-1.3743,.15999-.22552,.32253-.44923,.48757-.67107,.08252-.11092,.16567-.22138,.24944-.33136-.18042,.23182-.18368,.23658-.00977,.01427,.69313-.86358,1.41051-1.70238,2.17043-2.50816,.8977-.95188,1.01488-2.6039,0-3.53553-.97392-.89404-2.5771-1.01627-3.53553,0-3.45447,3.66294-6.10792,7.89253-8.0083,12.54515h4.8214c-1.40864-4.00438-2.81727-8.00875-4.22591-12.01313-.43292-1.23068-1.72839-2.18198-3.0753-1.7461-1.2156,.39338-2.21073,1.75447-1.7461,3.0753h0Z" fill={color} />
            <path d="M56.59573,26.3997c3.16475-.46049,5.14422-3.78646,4.46179-6.80034-.72336-3.19467-4.12609-4.85259-7.17759-4.05348-2.79801,.73273-4.7293,3.39845-5.16647,6.16589-.43654,2.76349,.00898,6.12188,1.61426,8.48185,1.90869,2.80604,5.07078,3.75563,8.33757,3.66131,1.30599-.03771,2.56168-1.12289,2.5-2.5-.05922-1.32218-1.09963-2.54043-2.5-2.5-.4079,.01178-.81571,.01315-1.22329-.01003-.20479-.01165-.40807-.03443-.61232-.05179,.51026,.04337-.03429-.01523-.23904-.06053-.19697-.04358-.39197-.09438-.5847-.154-.09763-.0302-.6199-.24938-.35594-.11815,.27184,.13515-.24232-.14061-.32135-.18765-.0856-.05095-.16846-.10522-.25227-.15902-.23634-.15174-.09955-.12158,.03024,.02402-.13143-.14745-.28884-.27941-.42578-.42322-.31639-.33227,.14437,.26652-.09177-.12695-.10311-.1718-.20999-.33976-.30339-.51736-.04658-.08858-.08494-.18315-.13365-.27035-.17083-.30587,.12085,.37514,.01585,.03891-.12168-.38964-.26009-.76841-.35665-1.16638-.04782-.1971-.09027-.39534-.12841-.59453-.02797-.14608-.10824-.81372-.06809-.36404-.04187-.46893-.07798-.93497-.06591-1.4064,.00597-.23347,.02056-.46737,.04636-.69952-.05082,.4572,.06213-.22171,.10057-.36797,.05924-.22541,.13865-.43999,.21255-.66021-.13635,.40636-.04102,.1075,.07415-.10135,.09296-.16858,.21173-.32264,.30438-.4903-.01352,.02446-.28889,.32514-.09872,.12656,.08794-.09183,.1677-.19119,.25734-.28187,.07559-.07647,.5014-.40304,.24941-.24041-.26606,.17171,.23562-.11276,.30736-.1644,.25464-.18332-.17139,.0911-.16031,.05476,.00877-.02873,.24342-.08001,.27463-.08896,.01856-.00532,.27918-.07518,.28038-.07023,.00426,.0175-.52904,.02095-.09147,.01525,.04659-.00061,.57744-.00216,.57575,.01276-.00627,.05562-.47621-.12652-.19435-.00988,.01844,.00763,.2766,.06367,.2747,.07557-.00357,.02231-.41655-.22875-.16021-.07219,.07934,.04845,.16675,.09118,.24831,.13651,.0853,.04741,.23167,.22863,.05222,.0297-.26305-.29161,.26143,.20201-.05235-.05426-.32109-.26224,.30772,.31712,.20289,.36738-.05129,.02459-.12442-.46034-.08687-.16488,.01057,.08318,.16275,.45353,.05385,.12004-.14536-.44517,.04468,.44551-.01385,.40636-.04767-.03189,.12516-.4683,.01377-.2084-.02459,.05737-.15934,.45628-.0236,.13888,.12857-.30062-.00487-.01934-.03401,.03466-.19824,.36741,.0625-.0655,.07102-.05323,.05104,.07347-.62686,.50854-.28964,.30703,.27536-.16455-.00509-.01441-.05307,.01365-.36495,.21346,.08702-.03771,.09544-.01357,.01251,.03584-.68005,.16769-.71892,.17335-1.29861,.18896-2.12603,1.90128-1.7461,3.0753,.45961,1.42023,1.68353,1.94861,3.0753,1.7461h0Z" fill={color} />
        </svg>
    </IconWrapper>
);

export const PointerWhiteIcon = ({ color = "#eee7ea", margin }: IconProps) => (
    <IconWrapper margin={margin}>
        <svg xmlns="http://www.w3.org/2000/svg" width="39.17951" height="52.6305" viewBox="0 0 39.17951 52.6305">
            <path d="M5.81698,49.84913c-.27219-15.80887-.54437-31.61774-.81656-47.42661L.73265,4.19029c11.37835,9.87939,22.7567,19.75878,34.13505,29.63817l2.43237-4.17846c-4.01854-1.04051-8.04056-2.06749-12.06641-3.07933-3.5477-.89167-7.78717-2.40355-10.54124,.95595-1.17991,1.43929-1.97981,3.20302-2.88401,4.81962-1.05456,1.88542-2.10912,3.77084-3.16367,5.65625-2.028,3.6258-4.05599,7.25161-6.08399,10.87741-1.57245,2.81135,2.74472,5.33527,4.31735,2.5236,3.65011-6.52594,7.25707-13.07824,10.95118-19.57934,.56776-.99917,.8028-1.57267,2.02391-1.41335,1.68254,.21953,3.37446,.81042,5.0174,1.22437,3.70324,.93305,7.40322,1.87896,11.10028,2.83622,2.29146,.59332,4.39239-2.47665,2.43237-4.17846C27.02489,20.41353,15.64654,10.53414,4.26819,.65476,2.70198-.70513-.03897,.13441,.00042,2.42252c.27219,15.80887,.54437,31.61774,.81656,47.42661,.05533,3.21392,5.05551,3.22403,5,0h0Z" fill={color} origin="undraw" />
        </svg>
    </IconWrapper>
);

export const RocketIcon = ({ color = "#01010C", margin }: IconProps) => (
    <IconWrapper margin={margin}>
        <svg xmlns="http://www.w3.org/2000/svg" width="50.23402" height="58.64887" viewBox="0 0 50.23402 58.64887">
            <g>
                <path d="M28.46337,44.55151c6.36189-9.71435,12.72379-19.42871,19.08568-29.14306,1.55066-2.3678,2.79596-4.48171,2.67712-7.39614-.05964-1.4625,.06345-2.92101-.2737-4.36392-.91786-3.92822-4.93361-4.09579-8.17045-3.20597-1.1335,.3116-2.28784,.53346-3.35373,1.08262-1.07549,.55411-2.01442,1.4281-2.84498,2.29615-1.92728,2.01427-3.7985,4.08446-5.70867,6.11523-3.89371,4.13953-7.81605,8.252-11.71923,12.38258-2.00782,2.1248-4.01062,4.25436-6.00185,6.39471-.97682,1.04997-1.79857,1.79889-3.01626,2.55662-1.16064,.72223-2.49961,1.37356-3.49583,2.32208-2.1485,2.04565-1.36904,4.82317,.71644,6.52033,1.12807,.91801,2.27324,1.81569,3.41211,2.72021,3.13138,2.48702,6.26932,4.9658,9.39644,7.45818,1.77736,1.41659,3.88241,3.56806,6.32617,2.22984,1.41617-.7755,1.79115-2.29637,2.11672-3.74607,.35771-1.59282,.71542-3.18564,1.07313-4.77846l-.64293,1.10317,.03289-.04212c.83011-1.06313,1.03683-2.49871,0-3.53553-.86428-.86428-2.69989-1.07021-3.53553,0-.84172,1.07801-.97201,2.46418-1.26604,3.77344-.14308,.63713-.28617,1.27426-.42925,1.91139-.07154,.31853-.14079,.63769-.21463,.95569-.2272,.97855-.20151,.05188,.59397-.13135h1.3292c-.66294-.09052-1.62372-1.09709-2.34659-1.67248-1.12326-.8941-2.24794-1.78643-3.37274-2.67858-2.38549-1.89209-4.77305-3.7816-7.15484-5.67836-.2676-.21311-2.21608-2.07758-2.47139-2.00335-.13143,.03821-.03914,1.26262-.13753,1.22104-.00285-.0012,.45912-.30287,.52147-.34214,.48192-.30347,.96712-.60181,1.45065-.90269,1.05576-.65697,2.26492-1.24937,3.15829-2.11731,3.36371-3.26793,6.44277-6.89642,9.6698-10.30243,3.29444-3.47715,6.59623-6.94738,9.87662-10.43781,1.61307-1.71635,3.21858-3.43966,4.82023-5.16666,.57768-.62289,1.15635-1.31699,1.8574-1.80332,.70334-.48792,1.50216-.53641,2.31242-.77505,.65027-.19152,1.48151-.40522,1.89503-.43693,.12346-.00947,.88805-.04102,.58341-.03056-.38629,.01327,.08592,.00142,.05691,.01687,.22036,.07043,.23061,.06526,.03076-.01551-.16489-.07814-.1891-.08665-.07262-.0255,.03703,.03459-.3198-.33705,.02321,.03961-.23947-.26297-.19877-.21804-.23605-.35353,.0538,.19553,.10444,.39018,.15264,.5874,.03232,.13227,.03858,.4647-.0102-.09937,.01165,.13466,.02784,.26996,.03224,.40512,.03842,1.17988,.25168,2.60034,.06635,3.75115-.14423,.89559-.74824,1.71112-1.22711,2.45553-.66351,1.03143-1.34315,2.05279-2.01506,3.07878-5.95582,9.09429-11.91163,18.18858-17.86745,27.28287-1.76803,2.69971,2.55952,5.20774,4.31735,2.5236Z" fill={color} origin="undraw" />
                <path d="M22.11795,18.48893c-4.18141,.14043-8.36283,.28086-12.54424,.42129-2.01306,.06761-4.11161,.11305-5.82979,1.30878-1.52139,1.05877-2.52677,2.59536-3.41952,4.18796-.48906,.87244-.47577,2.3477,.39091,3.02956,2.69652,2.12149,5.39305,4.24298,8.08957,6.36447,1.06011,.83404,2.50116,1.03438,3.53553,0,.86709-.86709,1.06701-2.69606,0-3.53553-2.69652-2.12149-5.39305-4.24298-8.08957-6.36447l.39091,3.02956c.56522-1.00831,1.20808-2.29913,2.12039-2.70623,1.22083-.54477,3.01671-.32099,4.3796-.36677,3.65874-.12288,7.31747-.24575,10.97621-.36863,1.3499-.04534,2.5-1.11656,2.5-2.5,0-1.31943-1.14433-2.54553-2.5-2.5h0Z" fill={color} />
                <path d="M32.18107,31.24753l2.22168,10.35451c.17828,.83092,.35729,1.66168,.53485,2.49275,.14641,.68528,.39522,1.48767,.25243,2.20108-.20092,1.00387-1.37507,1.97701-2.14498,2.70295h3.53553c-2.71205-2.10161-5.42409-4.20322-8.13614-6.30483-1.06614-.82617-2.49626-1.03928-3.53553,0-.86147,.86147-1.0734,2.70374,0,3.53553,2.71205,2.10161,5.42409,4.20322,8.13614,6.30483,1.09323,.84716,2.45019,1.02336,3.53553,0,1.38026-1.30144,2.72533-2.73952,3.31294-4.58798,.64694-2.03513,.09238-4.12321-.34024-6.13954-.85027-3.96284-1.70054-7.92567-2.55082-11.88851-.28336-1.32065-1.82715-2.08911-3.0753-1.7461-1.36582,.37535-2.03029,1.75077-1.7461,3.0753h0Z" fill={color} />
                <path d="M13.6982,42.39911c-3.0834,.43241-6.1097,1.29683-7.94456,4.01837-.87879,1.30345-1.01453,2.86401-1.22631,4.37355-.21931,1.56312-.43861,3.12625-.65792,4.68937-.12853,.91611-.04938,1.74005,.64293,2.43237,.62107,.62107,1.5815,.8949,2.43237,.64293,.20349-.06026,.407-.11374,.61534-.15462,.65493-.1285-.37541-.0025,.14642-.02173,.36837-.01358,.73491-.04019,1.10398-.04186,.79821-.0036,1.59736,.03688,2.39491-.01187,1.9777-.12087,3.97018-.72729,5.31181-2.2728,1.30536-1.50374,1.95833-3.32423,2.10116-5.29669,.14432-1.99305-.38035-4.00691-.89318-5.91584-.33924-1.26276-1.79604-2.16008-3.0753-1.7461-1.2957,.41931-2.10967,1.72195-1.7461,3.0753,.2131,.79323,.42578,1.5875,.58223,2.39426,.04069,.20981,.07347,.42064,.10966,.63119,.05212,.30323-.02071-.4157,.00147,.07465,.01929,.42641,.05244,.84603,.03337,1.27361-.00771,.17279-.04915,.37324-.04378,.54615l.04117-.33166c-.01882,.11093-.04038,.22132-.06469,.33117-.06749,.30478-.16987,.59248-.26414,.88913-.09147,.28785,.24397-.45433,.01901-.05816-.08231,.14495-.15365,.29542-.24111,.43773-.04288,.07093-.08798,.1404-.1353,.20841-.10618,.15259-.05761,.09441,.14569-.17456-.116,.09134-.22377,.25986-.32987,.36545l-.11846,.11331c-.20293,.17425-.16126,.14788,.12501-.07913,.00156,.05187-.30854,.20165-.3474,.22407-.07569,.04501-.15318,.08673-.23248,.12515,.29848-.11614,.36085-.1415,.1871-.07607-.14082,.04392-.27848,.09692-.42111,.13591-.06387,.01746-.45367,.16223-.51882,.11464,.34159-.03993,.41583-.04909,.22271-.02747-.08927,.01051-.17874,.01911-.26839,.0258-.36373,.02913-.72895,.036-1.09369,.0366-1.56995,.00262-3.15039-.06728-4.67646,.38464l3.0753,3.0753c.19381-1.38136,.38761-2.76273,.58142-4.14409,.09618-.68551,.18704-1.37203,.28956-2.05662,.04659-.31113,.09734-.62242,.17512-.92754,.01865-.07314,.15806-.64467,.06241-.27793-.08069,.30937,.05668-.10706,.09587-.17696,.05478-.09771,.11715-.19011,.17581-.28536,.27492-.4464-.24745,.23925-.03105,.04235,.11956-.10878,.49903-.38504,.54399-.53-.26307,.19556-.31972,.23903-.16994,.13042,.04566-.03388,.09225-.06643,.13977-.09766,.11777-.07986,.23797-.15609,.36098-.22764,.09831-.05719,.19824-.11199,.29933-.1641,.02354-.01213,.52346-.24457,.17947-.09478-.35197,.15326,.18034-.06114,.25351-.08615,.15972-.0546,.32119-.10391,.48351-.15012,.29281-.08335,.58902-.1539,.887-.21615,.66462-.13885,1.33778-.2325,2.00983-.32674,.57453-.08057,1.21625-.67413,1.49408-1.1489,.31358-.53587,.44644-1.32563,.25202-1.9264-.19576-.60492-.57063-1.18855-1.1489-1.49408-.63625-.33616-1.22086-.35096-1.9264-.25202h0Z" fill={color} />
            </g>
            <path d="M38.69601,13.26445l.0001,.00007c.28696,.18269,.59679,.28158,.9295,.29667,.3323,.07442,.6646,.05953,.9969-.04465,.32533-.07735,.60873-.22651,.85018-.44748,.27216-.17628,.48679-.41009,.64389-.70142l.25202-.5972c.11907-.44307,.11907-.88613,0-1.3292l-.25202-.5972c-.22225-.37567-.52121-.67463-.89688-.89688l-.0001-.00007c-.28696-.18269-.59679-.28158-.9295-.29667-.3323-.07442-.6646-.05953-.9969,.04465-.32533,.07735-.60873,.22651-.85018,.44748-.27216,.17628-.48679,.41009-.64389,.70142l-.25202,.5972c-.11907,.44307-.11907,.88613,0,1.3292l.25202,.5972c.22225,.37567,.52121,.67463,.89688,.89688h0Z" fill={color} />
        </svg>
    </IconWrapper>
);
