/* global define,require */
/* Generated file based on acm templates */
define([], function() {
"use strict";
    return {
    "ConnectorSelfConn.adm": "<?xml version=\"1.0\"?>\r\n<Design xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" Name=\"ConnectorSelfConn\" DesignID=\"{84574a1f-83a0-4948-bdda-b4f9ff35af23}\" xmlns=\"avm\">\r\n  <RootContainer xmlns:q1=\"avm\" xsi:type=\"q1:Compound\" Name=\"ConnectorSelfConn\" xmlns=\"\">\r\n    <Connector ConnectorComposition=\"\" ID=\"id-ce0ff617-0144-4f98-b0e9-2def71dec2ee\" ApplyJoinData=\"\" XPosition=\"301\" YPosition=\"154\" Definition=\"\" Name=\"Connector\">\r\n      <Role xmlns:q2=\"cad\" xsi:type=\"q2:Axis\" ID=\"id-6d122e11-d26d-41e3-a418-09ac8c8d2927\" PortMap=\"id-1bbb408d-93d9-49ec-af98-e160cfc6b9f8\" Notes=\"\" XPosition=\"105\" Definition=\"\" YPosition=\"84\" Name=\"Axis\" DatumName=\"\" />\r\n      <Role xmlns:q3=\"cad\" xsi:type=\"q3:Point\" ID=\"id-1bbb408d-93d9-49ec-af98-e160cfc6b9f8\" PortMap=\"id-6d122e11-d26d-41e3-a418-09ac8c8d2927\" Notes=\"\" XPosition=\"105\" Definition=\"\" YPosition=\"203\" Name=\"Point\" DatumName=\"\" />\r\n    </Connector>\r\n  </RootContainer>\r\n</Design>",
    "ConnectorSelfConn.adm.json": "{\"/1/35/37/139\":{\"ID\":139,\"attributes\":{\"name\":\"ConnectorSelfConn\",\"Type\":\"Compound\"},\"registry\":{\"DisplayFormat\":\"\",\"PortSVGIcon\":\"\",\"SVGIcon\":\"\",\"decorator\":\"\",\"isAbstract\":\"\",\"isPort\":\"\",\"position\":{\"x\":100,\"y\":100}},\"pointers\":{\"base\":\"/12\"},\"collection\":{},\"path\":\"/1/35/37/139\",\"guid\":\"/1/35/37/139\",\"parent\":\"/1/35/37\",\"children\":[\"/1/35/37/139/140\",\"/1/35/37/139/143\"]},\"/1/35/37/139/140\":{\"ID\":140,\"attributes\":{\"name\":\"Connector\"},\"registry\":{\"DisplayFormat\":\"\",\"PortSVGIcon\":\"\",\"SVGIcon\":\"\",\"decorator\":\"\",\"isAbstract\":\"\",\"isPort\":\"\",\"position\":{\"x\":301,\"y\":154}},\"pointers\":{\"base\":\"/10\"},\"collection\":{},\"path\":\"/1/35/37/139/140\",\"guid\":\"/1/35/37/139/140\",\"parent\":\"/1/35/37/139\",\"children\":[\"/1/35/37/139/140/141\",\"/1/35/37/139/140/142\"]},\"/1/35/37/139/140/141\":{\"ID\":141,\"attributes\":{\"name\":\"Axis\",\"Type\":\"CadAxis\"},\"registry\":{\"DisplayFormat\":\"\",\"PortSVGIcon\":\"\",\"SVGIcon\":\"\",\"decorator\":\"\",\"isAbstract\":\"\",\"isPort\":\"\",\"position\":{\"x\":105,\"y\":84}},\"pointers\":{\"base\":\"/15\"},\"collection\":{\"src\":[\"/1/35/37/139/143\"]},\"path\":\"/1/35/37/139/140/141\",\"guid\":\"/1/35/37/139/140/141\",\"parent\":\"/1/35/37/139/140\",\"children\":[]},\"/1/35/37/139/140/142\":{\"ID\":142,\"attributes\":{\"name\":\"Point\",\"Type\":\"CadPoint\"},\"registry\":{\"DisplayFormat\":\"\",\"PortSVGIcon\":\"\",\"SVGIcon\":\"\",\"decorator\":\"\",\"isAbstract\":\"\",\"isPort\":\"\",\"position\":{\"x\":105,\"y\":203}},\"pointers\":{\"base\":\"/15\"},\"collection\":{\"dst\":[\"/1/35/37/139/143\"]},\"path\":\"/1/35/37/139/140/142\",\"guid\":\"/1/35/37/139/140/142\",\"parent\":\"/1/35/37/139/140\",\"children\":[]},\"/1/35/37/139/143\":{\"ID\":143,\"attributes\":{\"name\":\"\"},\"registry\":{\"DisplayFormat\":\"\",\"PortSVGIcon\":\"\",\"SVGIcon\":\"\",\"decorator\":\"\",\"isAbstract\":\"\",\"isPort\":\"\",\"position\":{\"x\":0,\"y\":0}},\"pointers\":{\"base\":\"/19\",\"src\":\"/1/35/37/139/140/141\",\"dst\":\"/1/35/37/139/140/142\"},\"collection\":{},\"path\":\"/1/35/37/139/143\",\"guid\":\"/1/35/37/139/143\",\"parent\":\"/1/35/37/139\",\"children\":[]}}",
    "ValueFlow.adm": "<?xml version=\"1.0\"?>\r\n<Design xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" Name=\"ComponentAssembly\" DesignID=\"{8504b8d9-ef48-40f0-a0b0-410483ad8049}\" xmlns=\"avm\">\r\n  <RootContainer xmlns:q1=\"avm\" xsi:type=\"q1:Compound\" Name=\"ComponentAssembly\" xmlns=\"\">\r\n    <Container xsi:type=\"q1:Compound\" YPosition=\"196\" XPosition=\"735\" Name=\"ComponentAssembly\">\r\n      <Property xsi:type=\"q1:PrimitiveProperty\" Name=\"OutP3\" OnDataSheet=\"true\" ID=\"property.id-251b84b5-8b7f-4a0e-a754-f9c0dfe711c6\" XPosition=\"721\" YPosition=\"343\">\r\n        <Value ID=\"id-251b84b5-8b7f-4a0e-a754-f9c0dfe711c6\" DimensionType=\"Scalar\" Dimensions=\"\" DataType=\"String\">\r\n          <ValueExpression xsi:type=\"q1:DerivedValue\" ValueSource=\"5fb50551-57eb-4887-b971-87714f557597\" />\r\n        </Value>\r\n      </Property>\r\n      <Property xsi:type=\"q1:PrimitiveProperty\" Name=\"OutP2\" OnDataSheet=\"true\" ID=\"property.9fe49b85-3dc1-4e5e-b467-2040e91b327c\" XPosition=\"49\" YPosition=\"161\">\r\n        <Value ID=\"9fe49b85-3dc1-4e5e-b467-2040e91b327c\" DimensionType=\"Scalar\" Dimensions=\"\" DataType=\"String\">\r\n          <ValueExpression xsi:type=\"q1:DerivedValue\" ValueSource=\"888d2066-f6ca-406d-b1ee-c1e3aedc721e\" />\r\n        </Value>\r\n      </Property>\r\n      <ComponentInstance XPosition=\"294\" YPosition=\"168\" ComponentID=\"c4f5a9cb-85ca-4db0-a98c-d37d02408b0a\" ID=\"{117fa808-d54f-497d-8781-126cb5da02f9}\" Name=\"Formulas\">\r\n        <PrimitivePropertyInstance IDinComponentModel=\"id-251b84b5-8b7f-4a0e-a754-f9c0dfe711c6\">\r\n          <Value ID=\"5fb50551-57eb-4887-b971-87714f557597\" DimensionType=\"Scalar\" Dimensions=\"\" DataType=\"String\" />\r\n        </PrimitivePropertyInstance>\r\n        <PrimitivePropertyInstance IDinComponentModel=\"id-f9532d9c-574f-484f-922a-0dac0e8ee0f3\">\r\n          <Value ID=\"4bd14588-ee05-4d3b-8c42-ef291958191a\" DimensionType=\"Scalar\" Dimensions=\"\" DataType=\"String\" />\r\n        </PrimitivePropertyInstance>\r\n        <PrimitivePropertyInstance IDinComponentModel=\"id-5d71b2a8-48f3-448b-b5b5-a08512741486\">\r\n          <Value ID=\"cf08721f-daa6-4b08-9cf4-dd921cee7ef2\" DimensionType=\"Scalar\" Dimensions=\"\" DataType=\"String\" />\r\n        </PrimitivePropertyInstance>\r\n        <PrimitivePropertyInstance IDinComponentModel=\"id-bd5d3652-a30e-43ae-9e16-18420833ea1b\">\r\n          <Value ID=\"10969c90-275e-4c2e-ac99-055c197d696f\" DimensionType=\"Scalar\" Dimensions=\"\" DataType=\"String\" />\r\n        </PrimitivePropertyInstance>\r\n        <PrimitivePropertyInstance IDinComponentModel=\"id-833c6c3e-cab8-4723-bb29-2ea816e890a5\">\r\n          <Value ID=\"f387b08d-5a17-489c-807b-06e3924469ca\" DimensionType=\"Scalar\" Dimensions=\"\" DataType=\"String\" />\r\n        </PrimitivePropertyInstance>\r\n        <PrimitivePropertyInstance IDinComponentModel=\"id-fc8ea8fa-fe8a-4e0d-9d47-14f17d41d571\">\r\n          <Value ID=\"5e244ae3-c2ff-45b3-9108-6ce9b720088e\" DimensionType=\"Scalar\" Dimensions=\"\" DataType=\"String\">\r\n            <ValueExpression xsi:type=\"q1:DerivedValue\" ValueSource=\"9fe49b85-3dc1-4e5e-b467-2040e91b327c\" />\r\n          </Value>\r\n        </PrimitivePropertyInstance>\r\n      </ComponentInstance>\r\n    </Container>\r\n    <Property xsi:type=\"q1:PrimitiveProperty\" Name=\"Property1\" OnDataSheet=\"false\" ID=\"property.id-3c589e20-ebf3-44a5-a092-8ef50191e51f\" XPosition=\"112\" YPosition=\"42\">\r\n      <Value ID=\"id-3c589e20-ebf3-44a5-a092-8ef50191e51f\" DimensionType=\"Scalar\" Dimensions=\"\" DataType=\"String\">\r\n        <ValueExpression xsi:type=\"q1:FixedValue\">\r\n          <Value />\r\n        </ValueExpression>\r\n      </Value>\r\n    </Property>\r\n    <Property xsi:type=\"q1:PrimitiveProperty\" Name=\"Property2\" OnDataSheet=\"false\" ID=\"property.id-74d0dff6-199e-44c2-aa05-8bdda2c37128\" XPosition=\"1036\" YPosition=\"245\">\r\n      <Value ID=\"id-74d0dff6-199e-44c2-aa05-8bdda2c37128\" DimensionType=\"Scalar\" Dimensions=\"\" DataType=\"String\">\r\n        <ValueExpression xsi:type=\"q1:DerivedValue\" ValueSource=\"id-251b84b5-8b7f-4a0e-a754-f9c0dfe711c6\" />\r\n      </Value>\r\n    </Property>\r\n    <ComponentInstance XPosition=\"336\" YPosition=\"175\" ComponentID=\"c4f5a9cb-85ca-4db0-a98c-d37d02408b0a\" ID=\"{08fc2ad0-3b24-4ae1-a7c4-038b16acc811}\" Name=\"Formulas\">\r\n      <PrimitivePropertyInstance IDinComponentModel=\"id-5d71b2a8-48f3-448b-b5b5-a08512741486\">\r\n        <Value ID=\"aa943928-db0d-4b4c-b8f6-21176488aead\" DimensionType=\"Scalar\" Dimensions=\"\" DataType=\"String\" />\r\n      </PrimitivePropertyInstance>\r\n      <PrimitivePropertyInstance IDinComponentModel=\"id-bd5d3652-a30e-43ae-9e16-18420833ea1b\">\r\n        <Value ID=\"60a3f1f8-553c-48e9-9875-9b2f27c869c0\" DimensionType=\"Scalar\" Dimensions=\"\" DataType=\"String\" />\r\n      </PrimitivePropertyInstance>\r\n      <PrimitivePropertyInstance IDinComponentModel=\"id-251b84b5-8b7f-4a0e-a754-f9c0dfe711c6\">\r\n        <Value ID=\"888d2066-f6ca-406d-b1ee-c1e3aedc721e\" DimensionType=\"Scalar\" Dimensions=\"\" DataType=\"String\" />\r\n      </PrimitivePropertyInstance>\r\n      <PrimitivePropertyInstance IDinComponentModel=\"id-f9532d9c-574f-484f-922a-0dac0e8ee0f3\">\r\n        <Value ID=\"43482e0f-ea38-4097-80ff-2bd086b0e765\" DimensionType=\"Scalar\" Dimensions=\"\" DataType=\"String\" />\r\n      </PrimitivePropertyInstance>\r\n      <PrimitivePropertyInstance IDinComponentModel=\"id-833c6c3e-cab8-4723-bb29-2ea816e890a5\">\r\n        <Value ID=\"c24c66c9-9626-4150-857d-e1c00c015e6a\" DimensionType=\"Scalar\" Dimensions=\"\" DataType=\"String\" />\r\n      </PrimitivePropertyInstance>\r\n      <PrimitivePropertyInstance IDinComponentModel=\"id-fc8ea8fa-fe8a-4e0d-9d47-14f17d41d571\">\r\n        <Value ID=\"863a99f9-dbd2-4cf4-b39d-58be6bb1a58d\" DimensionType=\"Scalar\" Dimensions=\"\" DataType=\"String\">\r\n          <ValueExpression xsi:type=\"q1:DerivedValue\" ValueSource=\"id-3c589e20-ebf3-44a5-a092-8ef50191e51f\" />\r\n        </Value>\r\n      </PrimitivePropertyInstance>\r\n    </ComponentInstance>\r\n  </RootContainer>\r\n</Design>",
    "ValueFlow.adm.json": "{\"/1/35/37/94\":{\"ID\":94,\"attributes\":{\"name\":\"ComponentAssembly\",\"Type\":\"Compound\"},\"registry\":{\"DisplayFormat\":\"\",\"PortSVGIcon\":\"\",\"SVGIcon\":\"\",\"decorator\":\"\",\"isAbstract\":\"\",\"isPort\":\"\",\"position\":{\"x\":100,\"y\":100}},\"pointers\":{\"base\":\"/12\"},\"collection\":{},\"path\":\"/1/35/37/94\",\"guid\":\"/1/35/37/94\",\"parent\":\"/1/35/37\",\"children\":[\"/1/35/37/94/95\",\"/1/35/37/94/115\",\"/1/35/37/94/132\",\"/1/35/37/94/133\",\"/1/35/37/94/136\",\"/1/35/37/94/137\",\"/1/35/37/94/138\"]},\"/1/35/37/94/95\":{\"ID\":95,\"attributes\":{\"name\":\"ComponentAssembly\",\"Type\":\"Compound\"},\"registry\":{\"DisplayFormat\":\"\",\"PortSVGIcon\":\"\",\"SVGIcon\":\"\",\"decorator\":\"\",\"isAbstract\":\"\",\"isPort\":\"\",\"position\":{\"x\":735,\"y\":196}},\"pointers\":{\"base\":\"/12\"},\"collection\":{},\"path\":\"/1/35/37/94/95\",\"guid\":\"/1/35/37/94/95\",\"parent\":\"/1/35/37/94\",\"children\":[\"/1/35/37/94/95/96\",\"/1/35/37/94/95/113\",\"/1/35/37/94/95/114\",\"/1/35/37/94/95/134\",\"/1/35/37/94/95/135\"]},\"/1/35/37/94/95/96\":{\"ID\":96,\"guid\":\"/1/35/37/94/95/96\",\"parent\":\"/1/35/37/94/95\",\"path\":\"/1/35/37/94/95/96\",\"children\":[\"/1/35/37/94/95/96/97\",\"/1/35/37/94/95/96/98\",\"/1/35/37/94/95/96/99\",\"/1/35/37/94/95/96/100\",\"/1/35/37/94/95/96/101\",\"/1/35/37/94/95/96/102\",\"/1/35/37/94/95/96/103\",\"/1/35/37/94/95/96/104\",\"/1/35/37/94/95/96/105\",\"/1/35/37/94/95/96/106\",\"/1/35/37/94/95/96/107\",\"/1/35/37/94/95/96/108\",\"/1/35/37/94/95/96/109\",\"/1/35/37/94/95/96/110\",\"/1/35/37/94/95/96/111\",\"/1/35/37/94/95/96/112\"],\"attributes\":{\"name\":\"Formulas\",\"SchemaVersion\":\"2.5\",\"Version\":\"\",\"ID\":\"c4f5a9cb-85ca-4db0-a98c-d37d02408b0a\",\"Resource\":\"hash\"},\"registry\":{\"DisplayFormat\":\"\",\"PortSVGIcon\":\"\",\"SVGIcon\":\"\",\"decorator\":\"\",\"isAbstract\":\"\",\"isPort\":\"\",\"position\":{\"x\":294,\"y\":168}},\"pointers\":{\"base\":\"/7\"},\"collection\":{}},\"/1/35/37/94/95/96/97\":{\"ID\":97,\"guid\":\"/1/35/37/94/95/96/97\",\"parent\":\"/1/35/37/94/95/96\",\"path\":\"/1/35/37/94/95/96/97\",\"children\":[],\"attributes\":{\"name\":\"OutP1\",\"ID\":\"id-f9532d9c-574f-484f-922a-0dac0e8ee0f3\",\"Value\":\"\",\"Minimum\":\"-inf\",\"Maximum\":\"inf\",\"ValueType\":\"Fixed\",\"DataType\":\"String\",\"OnDataSheet\":false},\"registry\":{\"DisplayFormat\":\"\",\"PortSVGIcon\":\"\",\"SVGIcon\":\"\",\"decorator\":\"\",\"isAbstract\":\"\",\"isPort\":\"\",\"position\":{\"x\":714,\"y\":294}},\"pointers\":{\"base\":\"/20\"},\"collection\":{\"dst\":[\"/1/35/36/70/79\"],\"src\":[\"/1/35/36/70/80\"]}},\"/1/35/37/94/95/96/98\":{\"ID\":98,\"guid\":\"/1/35/37/94/95/96/98\",\"parent\":\"/1/35/37/94/95/96\",\"path\":\"/1/35/37/94/95/96/98\",\"children\":[],\"attributes\":{\"name\":\"OutP2\",\"ID\":\"id-251b84b5-8b7f-4a0e-a754-f9c0dfe711c6\",\"Value\":\"\",\"Minimum\":\"-inf\",\"Maximum\":\"inf\",\"ValueType\":\"Fixed\",\"DataType\":\"String\",\"OnDataSheet\":false},\"registry\":{\"DisplayFormat\":\"\",\"PortSVGIcon\":\"\",\"SVGIcon\":\"\",\"decorator\":\"\",\"isAbstract\":\"\",\"isPort\":\"\",\"position\":{\"x\":721,\"y\":343}},\"pointers\":{\"base\":\"/20\"},\"collection\":{\"dst\":[\"/1/35/36/70/80\"],\"src\":[\"/1/35/37/94/95/135\"]}},\"/1/35/37/94/95/96/99\":{\"ID\":99,\"guid\":\"/1/35/37/94/95/96/99\",\"parent\":\"/1/35/37/94/95/96\",\"path\":\"/1/35/37/94/95/96/99\",\"children\":[],\"attributes\":{\"name\":\"P2\",\"ID\":\"id-bd5d3652-a30e-43ae-9e16-18420833ea1b\",\"Value\":\"\",\"Minimum\":\"-inf\",\"Maximum\":\"inf\",\"ValueType\":\"Fixed\",\"DataType\":\"String\",\"OnDataSheet\":false},\"registry\":{\"DisplayFormat\":\"\",\"PortSVGIcon\":\"\",\"SVGIcon\":\"\",\"decorator\":\"\",\"isAbstract\":\"\",\"isPort\":\"\",\"position\":{\"x\":294,\"y\":357}},\"pointers\":{\"base\":\"/20\"},\"collection\":{\"src\":[\"/1/35/36/70/85\",\"/1/35/36/70/86\"]}},\"/1/35/37/94/95/96/100\":{\"ID\":100,\"guid\":\"/1/35/37/94/95/96/100\",\"parent\":\"/1/35/37/94/95/96\",\"path\":\"/1/35/37/94/95/96/100\",\"children\":[],\"attributes\":{\"name\":\"P1\",\"ID\":\"id-5d71b2a8-48f3-448b-b5b5-a08512741486\",\"Value\":\"\",\"Minimum\":\"-inf\",\"Maximum\":\"inf\",\"ValueType\":\"Fixed\",\"DataType\":\"String\",\"OnDataSheet\":true},\"registry\":{\"DisplayFormat\":\"\",\"PortSVGIcon\":\"\",\"SVGIcon\":\"\",\"decorator\":\"\",\"isAbstract\":\"\",\"isPort\":\"\",\"position\":{\"x\":133,\"y\":273}},\"pointers\":{\"base\":\"/20\"},\"collection\":{\"dst\":[\"/1/35/36/70/81\"],\"src\":[\"/1/35/36/70/84\"]}},\"/1/35/37/94/95/96/101\":{\"ID\":101,\"guid\":\"/1/35/37/94/95/96/101\",\"parent\":\"/1/35/37/94/95/96\",\"path\":\"/1/35/37/94/95/96/101\",\"children\":[],\"attributes\":{\"name\":\"UnusedParameter\",\"ID\":\"id-833c6c3e-cab8-4723-bb29-2ea816e890a5\",\"Value\":\"\",\"Minimum\":\"-inf\",\"Maximum\":\"inf\",\"ValueType\":\"Parametric\",\"DataType\":\"String\"},\"registry\":{\"DisplayFormat\":\"\",\"PortSVGIcon\":\"\",\"SVGIcon\":\"\",\"decorator\":\"\",\"isAbstract\":\"\",\"isPort\":\"\",\"position\":{\"x\":140,\"y\":49}},\"pointers\":{\"base\":\"/20\"},\"collection\":{}},\"/1/35/37/94/95/96/102\":{\"ID\":102,\"guid\":\"/1/35/37/94/95/96/102\",\"parent\":\"/1/35/37/94/95/96\",\"path\":\"/1/35/37/94/95/96/102\",\"children\":[],\"attributes\":{\"name\":\"Parameter\",\"ID\":\"id-fc8ea8fa-fe8a-4e0d-9d47-14f17d41d571\",\"Value\":\"\",\"Minimum\":\"-inf\",\"Maximum\":\"inf\",\"ValueType\":\"Parametric\",\"DataType\":\"String\"},\"registry\":{\"DisplayFormat\":\"\",\"PortSVGIcon\":\"\",\"SVGIcon\":\"\",\"decorator\":\"\",\"isAbstract\":\"\",\"isPort\":\"\",\"position\":{\"x\":140,\"y\":147}},\"pointers\":{\"base\":\"/20\"},\"collection\":{\"src\":[\"/1/35/36/70/81\",\"/1/35/36/70/82\",\"/1/35/36/70/83\"],\"dst\":[\"/1/35/37/94/95/134\"]}},\"/1/35/37/94/95/96/103\":{\"ID\":103,\"guid\":\"/1/35/37/94/95/96/103\",\"parent\":\"/1/35/37/94/95/96\",\"path\":\"/1/35/37/94/95/96/103\",\"children\":[],\"attributes\":{\"name\":\"SimpleFormula\",\"Method\":\"Multiplication\"},\"registry\":{\"DisplayFormat\":\"\",\"PortSVGIcon\":\"\",\"SVGIcon\":\"\",\"decorator\":\"\",\"isAbstract\":\"\",\"isPort\":\"\",\"position\":{\"x\":476,\"y\":224}},\"pointers\":{\"base\":\"/33\"},\"collection\":{\"dst\":[\"/1/35/36/70/82\",\"/1/35/36/70/84\",\"/1/35/36/70/85\"]}},\"/1/35/37/94/95/96/104\":{\"ID\":104,\"guid\":\"/1/35/37/94/95/96/104\",\"parent\":\"/1/35/37/94/95/96\",\"path\":\"/1/35/37/94/95/96/104\",\"children\":[],\"attributes\":{\"name\":\"CustomFormula\",\"Expression\":\"Parameter*8 + P2\"},\"registry\":{\"DisplayFormat\":\"\",\"PortSVGIcon\":\"\",\"SVGIcon\":\"\",\"decorator\":\"\",\"isAbstract\":\"\",\"isPort\":\"\",\"position\":{\"x\":658,\"y\":196}},\"pointers\":{\"base\":\"/30\"},\"collection\":{\"src\":[\"/1/35/36/70/79\"],\"dst\":[\"/1/35/36/70/83\",\"/1/35/36/70/86\"]}},\"/1/35/37/94/95/96/105\":{\"ID\":105,\"guid\":\"/1/35/37/94/95/96/105\",\"parent\":\"/1/35/37/94/95/96\",\"path\":\"/1/35/37/94/95/96/105\",\"children\":[],\"attributes\":{\"name\":\"\"},\"registry\":{\"DisplayFormat\":\"\",\"PortSVGIcon\":\"\",\"SVGIcon\":\"\",\"decorator\":\"\",\"isAbstract\":\"\",\"isPort\":\"\",\"position\":{\"x\":0,\"y\":0}},\"pointers\":{\"base\":\"/27\",\"src\":\"/1/35/36/70/78\",\"dst\":\"/1/35/36/70/71\"},\"collection\":{}},\"/1/35/37/94/95/96/106\":{\"ID\":106,\"guid\":\"/1/35/37/94/95/96/106\",\"parent\":\"/1/35/37/94/95/96\",\"path\":\"/1/35/37/94/95/96/106\",\"children\":[],\"attributes\":{\"name\":\"\"},\"registry\":{\"DisplayFormat\":\"\",\"PortSVGIcon\":\"\",\"SVGIcon\":\"\",\"decorator\":\"\",\"isAbstract\":\"\",\"isPort\":\"\",\"position\":{\"x\":0,\"y\":0}},\"pointers\":{\"base\":\"/27\",\"src\":\"/1/35/36/70/71\",\"dst\":\"/1/35/36/70/72\"},\"collection\":{}},\"/1/35/37/94/95/96/107\":{\"ID\":107,\"guid\":\"/1/35/37/94/95/96/107\",\"parent\":\"/1/35/37/94/95/96\",\"path\":\"/1/35/37/94/95/96/107\",\"children\":[],\"attributes\":{\"name\":\"\"},\"registry\":{\"DisplayFormat\":\"\",\"PortSVGIcon\":\"\",\"SVGIcon\":\"\",\"decorator\":\"\",\"isAbstract\":\"\",\"isPort\":\"\",\"position\":{\"x\":0,\"y\":0}},\"pointers\":{\"base\":\"/27\",\"src\":\"/1/35/36/70/76\",\"dst\":\"/1/35/36/70/74\"},\"collection\":{}},\"/1/35/37/94/95/96/108\":{\"ID\":108,\"guid\":\"/1/35/37/94/95/96/108\",\"parent\":\"/1/35/37/94/95/96\",\"path\":\"/1/35/37/94/95/96/108\",\"children\":[],\"attributes\":{\"name\":\"\"},\"registry\":{\"DisplayFormat\":\"\",\"PortSVGIcon\":\"\",\"SVGIcon\":\"\",\"decorator\":\"\",\"isAbstract\":\"\",\"isPort\":\"\",\"position\":{\"x\":0,\"y\":0}},\"pointers\":{\"base\":\"/27\",\"src\":\"/1/35/36/70/76\",\"dst\":\"/1/35/36/70/77\"},\"collection\":{}},\"/1/35/37/94/95/96/109\":{\"ID\":109,\"guid\":\"/1/35/37/94/95/96/109\",\"parent\":\"/1/35/37/94/95/96\",\"path\":\"/1/35/37/94/95/96/109\",\"children\":[],\"attributes\":{\"name\":\"\"},\"registry\":{\"DisplayFormat\":\"\",\"PortSVGIcon\":\"\",\"SVGIcon\":\"\",\"decorator\":\"\",\"isAbstract\":\"\",\"isPort\":\"\",\"position\":{\"x\":0,\"y\":0}},\"pointers\":{\"base\":\"/27\",\"src\":\"/1/35/36/70/76\",\"dst\":\"/1/35/36/70/78\"},\"collection\":{}},\"/1/35/37/94/95/96/110\":{\"ID\":110,\"guid\":\"/1/35/37/94/95/96/110\",\"parent\":\"/1/35/37/94/95/96\",\"path\":\"/1/35/37/94/95/96/110\",\"children\":[],\"attributes\":{\"name\":\"\"},\"registry\":{\"DisplayFormat\":\"\",\"PortSVGIcon\":\"\",\"SVGIcon\":\"\",\"decorator\":\"\",\"isAbstract\":\"\",\"isPort\":\"\",\"position\":{\"x\":0,\"y\":0}},\"pointers\":{\"base\":\"/27\",\"src\":\"/1/35/36/70/74\",\"dst\":\"/1/35/36/70/77\"},\"collection\":{}},\"/1/35/37/94/95/96/111\":{\"ID\":111,\"guid\":\"/1/35/37/94/95/96/111\",\"parent\":\"/1/35/37/94/95/96\",\"path\":\"/1/35/37/94/95/96/111\",\"children\":[],\"attributes\":{\"name\":\"\"},\"registry\":{\"DisplayFormat\":\"\",\"PortSVGIcon\":\"\",\"SVGIcon\":\"\",\"decorator\":\"\",\"isAbstract\":\"\",\"isPort\":\"\",\"position\":{\"x\":0,\"y\":0}},\"pointers\":{\"base\":\"/27\",\"src\":\"/1/35/36/70/73\",\"dst\":\"/1/35/36/70/77\"},\"collection\":{}},\"/1/35/37/94/95/96/112\":{\"ID\":112,\"guid\":\"/1/35/37/94/95/96/112\",\"parent\":\"/1/35/37/94/95/96\",\"path\":\"/1/35/37/94/95/96/112\",\"children\":[],\"attributes\":{\"name\":\"\"},\"registry\":{\"DisplayFormat\":\"\",\"PortSVGIcon\":\"\",\"SVGIcon\":\"\",\"decorator\":\"\",\"isAbstract\":\"\",\"isPort\":\"\",\"position\":{\"x\":0,\"y\":0}},\"pointers\":{\"base\":\"/27\",\"src\":\"/1/35/36/70/73\",\"dst\":\"/1/35/36/70/78\"},\"collection\":{}},\"/1/35/37/94/95/113\":{\"ID\":113,\"attributes\":{\"name\":\"OutP3\",\"DataType\":\"String\",\"Value\":\"\"},\"registry\":{\"DisplayFormat\":\"\",\"PortSVGIcon\":\"\",\"SVGIcon\":\"\",\"decorator\":\"\",\"isAbstract\":\"\",\"isPort\":\"\",\"position\":{\"x\":721,\"y\":343}},\"pointers\":{\"base\":\"/20\"},\"collection\":{\"dst\":[\"/1/35/37/94/95/135\"],\"src\":[\"/1/35/37/94/138\"]},\"path\":\"/1/35/37/94/95/113\",\"guid\":\"/1/35/37/94/95/113\",\"parent\":\"/1/35/37/94/95\",\"children\":[]},\"/1/35/37/94/95/114\":{\"ID\":114,\"attributes\":{\"name\":\"OutP2\",\"DataType\":\"String\",\"Value\":\"\"},\"registry\":{\"DisplayFormat\":\"\",\"PortSVGIcon\":\"\",\"SVGIcon\":\"\",\"decorator\":\"\",\"isAbstract\":\"\",\"isPort\":\"\",\"position\":{\"x\":49,\"y\":161}},\"pointers\":{\"base\":\"/20\"},\"collection\":{\"src\":[\"/1/35/37/94/95/134\"],\"dst\":[\"/1/35/37/94/136\"]},\"path\":\"/1/35/37/94/95/114\",\"guid\":\"/1/35/37/94/95/114\",\"parent\":\"/1/35/37/94/95\",\"children\":[]},\"/1/35/37/94/115\":{\"ID\":115,\"guid\":\"/1/35/37/94/115\",\"parent\":\"/1/35/37/94\",\"path\":\"/1/35/37/94/115\",\"children\":[\"/1/35/37/94/115/116\",\"/1/35/37/94/115/117\",\"/1/35/37/94/115/118\",\"/1/35/37/94/115/119\",\"/1/35/37/94/115/120\",\"/1/35/37/94/115/121\",\"/1/35/37/94/115/122\",\"/1/35/37/94/115/123\",\"/1/35/37/94/115/124\",\"/1/35/37/94/115/125\",\"/1/35/37/94/115/126\",\"/1/35/37/94/115/127\",\"/1/35/37/94/115/128\",\"/1/35/37/94/115/129\",\"/1/35/37/94/115/130\",\"/1/35/37/94/115/131\"],\"attributes\":{\"name\":\"Formulas\",\"SchemaVersion\":\"2.5\",\"Version\":\"\",\"ID\":\"c4f5a9cb-85ca-4db0-a98c-d37d02408b0a\",\"Resource\":\"hash\"},\"registry\":{\"DisplayFormat\":\"\",\"PortSVGIcon\":\"\",\"SVGIcon\":\"\",\"decorator\":\"\",\"isAbstract\":\"\",\"isPort\":\"\",\"position\":{\"x\":336,\"y\":175}},\"pointers\":{\"base\":\"/7\"},\"collection\":{}},\"/1/35/37/94/115/116\":{\"ID\":116,\"guid\":\"/1/35/37/94/115/116\",\"parent\":\"/1/35/37/94/115\",\"path\":\"/1/35/37/94/115/116\",\"children\":[],\"attributes\":{\"name\":\"OutP1\",\"ID\":\"id-f9532d9c-574f-484f-922a-0dac0e8ee0f3\",\"Value\":\"\",\"Minimum\":\"-inf\",\"Maximum\":\"inf\",\"ValueType\":\"Fixed\",\"DataType\":\"String\",\"OnDataSheet\":false},\"registry\":{\"DisplayFormat\":\"\",\"PortSVGIcon\":\"\",\"SVGIcon\":\"\",\"decorator\":\"\",\"isAbstract\":\"\",\"isPort\":\"\",\"position\":{\"x\":714,\"y\":294}},\"pointers\":{\"base\":\"/20\"},\"collection\":{\"dst\":[\"/1/35/36/70/79\"],\"src\":[\"/1/35/36/70/80\"]}},\"/1/35/37/94/115/117\":{\"ID\":117,\"guid\":\"/1/35/37/94/115/117\",\"parent\":\"/1/35/37/94/115\",\"path\":\"/1/35/37/94/115/117\",\"children\":[],\"attributes\":{\"name\":\"OutP2\",\"ID\":\"id-251b84b5-8b7f-4a0e-a754-f9c0dfe711c6\",\"Value\":\"\",\"Minimum\":\"-inf\",\"Maximum\":\"inf\",\"ValueType\":\"Fixed\",\"DataType\":\"String\",\"OnDataSheet\":false},\"registry\":{\"DisplayFormat\":\"\",\"PortSVGIcon\":\"\",\"SVGIcon\":\"\",\"decorator\":\"\",\"isAbstract\":\"\",\"isPort\":\"\",\"position\":{\"x\":721,\"y\":343}},\"pointers\":{\"base\":\"/20\"},\"collection\":{\"dst\":[\"/1/35/36/70/80\"],\"src\":[\"/1/35/37/94/136\"]}},\"/1/35/37/94/115/118\":{\"ID\":118,\"guid\":\"/1/35/37/94/115/118\",\"parent\":\"/1/35/37/94/115\",\"path\":\"/1/35/37/94/115/118\",\"children\":[],\"attributes\":{\"name\":\"P2\",\"ID\":\"id-bd5d3652-a30e-43ae-9e16-18420833ea1b\",\"Value\":\"\",\"Minimum\":\"-inf\",\"Maximum\":\"inf\",\"ValueType\":\"Fixed\",\"DataType\":\"String\",\"OnDataSheet\":false},\"registry\":{\"DisplayFormat\":\"\",\"PortSVGIcon\":\"\",\"SVGIcon\":\"\",\"decorator\":\"\",\"isAbstract\":\"\",\"isPort\":\"\",\"position\":{\"x\":294,\"y\":357}},\"pointers\":{\"base\":\"/20\"},\"collection\":{\"src\":[\"/1/35/36/70/85\",\"/1/35/36/70/86\"]}},\"/1/35/37/94/115/119\":{\"ID\":119,\"guid\":\"/1/35/37/94/115/119\",\"parent\":\"/1/35/37/94/115\",\"path\":\"/1/35/37/94/115/119\",\"children\":[],\"attributes\":{\"name\":\"P1\",\"ID\":\"id-5d71b2a8-48f3-448b-b5b5-a08512741486\",\"Value\":\"\",\"Minimum\":\"-inf\",\"Maximum\":\"inf\",\"ValueType\":\"Fixed\",\"DataType\":\"String\",\"OnDataSheet\":true},\"registry\":{\"DisplayFormat\":\"\",\"PortSVGIcon\":\"\",\"SVGIcon\":\"\",\"decorator\":\"\",\"isAbstract\":\"\",\"isPort\":\"\",\"position\":{\"x\":133,\"y\":273}},\"pointers\":{\"base\":\"/20\"},\"collection\":{\"dst\":[\"/1/35/36/70/81\"],\"src\":[\"/1/35/36/70/84\"]}},\"/1/35/37/94/115/120\":{\"ID\":120,\"guid\":\"/1/35/37/94/115/120\",\"parent\":\"/1/35/37/94/115\",\"path\":\"/1/35/37/94/115/120\",\"children\":[],\"attributes\":{\"name\":\"UnusedParameter\",\"ID\":\"id-833c6c3e-cab8-4723-bb29-2ea816e890a5\",\"Value\":\"\",\"Minimum\":\"-inf\",\"Maximum\":\"inf\",\"ValueType\":\"Parametric\",\"DataType\":\"String\"},\"registry\":{\"DisplayFormat\":\"\",\"PortSVGIcon\":\"\",\"SVGIcon\":\"\",\"decorator\":\"\",\"isAbstract\":\"\",\"isPort\":\"\",\"position\":{\"x\":140,\"y\":49}},\"pointers\":{\"base\":\"/20\"},\"collection\":{}},\"/1/35/37/94/115/121\":{\"ID\":121,\"guid\":\"/1/35/37/94/115/121\",\"parent\":\"/1/35/37/94/115\",\"path\":\"/1/35/37/94/115/121\",\"children\":[],\"attributes\":{\"name\":\"Parameter\",\"ID\":\"id-fc8ea8fa-fe8a-4e0d-9d47-14f17d41d571\",\"Value\":\"\",\"Minimum\":\"-inf\",\"Maximum\":\"inf\",\"ValueType\":\"Parametric\",\"DataType\":\"String\"},\"registry\":{\"DisplayFormat\":\"\",\"PortSVGIcon\":\"\",\"SVGIcon\":\"\",\"decorator\":\"\",\"isAbstract\":\"\",\"isPort\":\"\",\"position\":{\"x\":140,\"y\":147}},\"pointers\":{\"base\":\"/20\"},\"collection\":{\"src\":[\"/1/35/36/70/81\",\"/1/35/36/70/82\",\"/1/35/36/70/83\"],\"dst\":[\"/1/35/37/94/137\"]}},\"/1/35/37/94/115/122\":{\"ID\":122,\"guid\":\"/1/35/37/94/115/122\",\"parent\":\"/1/35/37/94/115\",\"path\":\"/1/35/37/94/115/122\",\"children\":[],\"attributes\":{\"name\":\"SimpleFormula\",\"Method\":\"Multiplication\"},\"registry\":{\"DisplayFormat\":\"\",\"PortSVGIcon\":\"\",\"SVGIcon\":\"\",\"decorator\":\"\",\"isAbstract\":\"\",\"isPort\":\"\",\"position\":{\"x\":476,\"y\":224}},\"pointers\":{\"base\":\"/33\"},\"collection\":{\"dst\":[\"/1/35/36/70/82\",\"/1/35/36/70/84\",\"/1/35/36/70/85\"]}},\"/1/35/37/94/115/123\":{\"ID\":123,\"guid\":\"/1/35/37/94/115/123\",\"parent\":\"/1/35/37/94/115\",\"path\":\"/1/35/37/94/115/123\",\"children\":[],\"attributes\":{\"name\":\"CustomFormula\",\"Expression\":\"Parameter*8 + P2\"},\"registry\":{\"DisplayFormat\":\"\",\"PortSVGIcon\":\"\",\"SVGIcon\":\"\",\"decorator\":\"\",\"isAbstract\":\"\",\"isPort\":\"\",\"position\":{\"x\":658,\"y\":196}},\"pointers\":{\"base\":\"/30\"},\"collection\":{\"src\":[\"/1/35/36/70/79\"],\"dst\":[\"/1/35/36/70/83\",\"/1/35/36/70/86\"]}},\"/1/35/37/94/115/124\":{\"ID\":124,\"guid\":\"/1/35/37/94/115/124\",\"parent\":\"/1/35/37/94/115\",\"path\":\"/1/35/37/94/115/124\",\"children\":[],\"attributes\":{\"name\":\"\"},\"registry\":{\"DisplayFormat\":\"\",\"PortSVGIcon\":\"\",\"SVGIcon\":\"\",\"decorator\":\"\",\"isAbstract\":\"\",\"isPort\":\"\",\"position\":{\"x\":0,\"y\":0}},\"pointers\":{\"base\":\"/27\",\"src\":\"/1/35/36/70/78\",\"dst\":\"/1/35/36/70/71\"},\"collection\":{}},\"/1/35/37/94/115/125\":{\"ID\":125,\"guid\":\"/1/35/37/94/115/125\",\"parent\":\"/1/35/37/94/115\",\"path\":\"/1/35/37/94/115/125\",\"children\":[],\"attributes\":{\"name\":\"\"},\"registry\":{\"DisplayFormat\":\"\",\"PortSVGIcon\":\"\",\"SVGIcon\":\"\",\"decorator\":\"\",\"isAbstract\":\"\",\"isPort\":\"\",\"position\":{\"x\":0,\"y\":0}},\"pointers\":{\"base\":\"/27\",\"src\":\"/1/35/36/70/71\",\"dst\":\"/1/35/36/70/72\"},\"collection\":{}},\"/1/35/37/94/115/126\":{\"ID\":126,\"guid\":\"/1/35/37/94/115/126\",\"parent\":\"/1/35/37/94/115\",\"path\":\"/1/35/37/94/115/126\",\"children\":[],\"attributes\":{\"name\":\"\"},\"registry\":{\"DisplayFormat\":\"\",\"PortSVGIcon\":\"\",\"SVGIcon\":\"\",\"decorator\":\"\",\"isAbstract\":\"\",\"isPort\":\"\",\"position\":{\"x\":0,\"y\":0}},\"pointers\":{\"base\":\"/27\",\"src\":\"/1/35/36/70/76\",\"dst\":\"/1/35/36/70/74\"},\"collection\":{}},\"/1/35/37/94/115/127\":{\"ID\":127,\"guid\":\"/1/35/37/94/115/127\",\"parent\":\"/1/35/37/94/115\",\"path\":\"/1/35/37/94/115/127\",\"children\":[],\"attributes\":{\"name\":\"\"},\"registry\":{\"DisplayFormat\":\"\",\"PortSVGIcon\":\"\",\"SVGIcon\":\"\",\"decorator\":\"\",\"isAbstract\":\"\",\"isPort\":\"\",\"position\":{\"x\":0,\"y\":0}},\"pointers\":{\"base\":\"/27\",\"src\":\"/1/35/36/70/76\",\"dst\":\"/1/35/36/70/77\"},\"collection\":{}},\"/1/35/37/94/115/128\":{\"ID\":128,\"guid\":\"/1/35/37/94/115/128\",\"parent\":\"/1/35/37/94/115\",\"path\":\"/1/35/37/94/115/128\",\"children\":[],\"attributes\":{\"name\":\"\"},\"registry\":{\"DisplayFormat\":\"\",\"PortSVGIcon\":\"\",\"SVGIcon\":\"\",\"decorator\":\"\",\"isAbstract\":\"\",\"isPort\":\"\",\"position\":{\"x\":0,\"y\":0}},\"pointers\":{\"base\":\"/27\",\"src\":\"/1/35/36/70/76\",\"dst\":\"/1/35/36/70/78\"},\"collection\":{}},\"/1/35/37/94/115/129\":{\"ID\":129,\"guid\":\"/1/35/37/94/115/129\",\"parent\":\"/1/35/37/94/115\",\"path\":\"/1/35/37/94/115/129\",\"children\":[],\"attributes\":{\"name\":\"\"},\"registry\":{\"DisplayFormat\":\"\",\"PortSVGIcon\":\"\",\"SVGIcon\":\"\",\"decorator\":\"\",\"isAbstract\":\"\",\"isPort\":\"\",\"position\":{\"x\":0,\"y\":0}},\"pointers\":{\"base\":\"/27\",\"src\":\"/1/35/36/70/74\",\"dst\":\"/1/35/36/70/77\"},\"collection\":{}},\"/1/35/37/94/115/130\":{\"ID\":130,\"guid\":\"/1/35/37/94/115/130\",\"parent\":\"/1/35/37/94/115\",\"path\":\"/1/35/37/94/115/130\",\"children\":[],\"attributes\":{\"name\":\"\"},\"registry\":{\"DisplayFormat\":\"\",\"PortSVGIcon\":\"\",\"SVGIcon\":\"\",\"decorator\":\"\",\"isAbstract\":\"\",\"isPort\":\"\",\"position\":{\"x\":0,\"y\":0}},\"pointers\":{\"base\":\"/27\",\"src\":\"/1/35/36/70/73\",\"dst\":\"/1/35/36/70/77\"},\"collection\":{}},\"/1/35/37/94/115/131\":{\"ID\":131,\"guid\":\"/1/35/37/94/115/131\",\"parent\":\"/1/35/37/94/115\",\"path\":\"/1/35/37/94/115/131\",\"children\":[],\"attributes\":{\"name\":\"\"},\"registry\":{\"DisplayFormat\":\"\",\"PortSVGIcon\":\"\",\"SVGIcon\":\"\",\"decorator\":\"\",\"isAbstract\":\"\",\"isPort\":\"\",\"position\":{\"x\":0,\"y\":0}},\"pointers\":{\"base\":\"/27\",\"src\":\"/1/35/36/70/73\",\"dst\":\"/1/35/36/70/78\"},\"collection\":{}},\"/1/35/37/94/132\":{\"ID\":132,\"attributes\":{\"name\":\"Property1\",\"DataType\":\"String\",\"Value\":\"\"},\"registry\":{\"DisplayFormat\":\"\",\"PortSVGIcon\":\"\",\"SVGIcon\":\"\",\"decorator\":\"\",\"isAbstract\":\"\",\"isPort\":\"\",\"position\":{\"x\":112,\"y\":42}},\"pointers\":{\"base\":\"/20\"},\"collection\":{\"src\":[\"/1/35/37/94/137\"]},\"path\":\"/1/35/37/94/132\",\"guid\":\"/1/35/37/94/132\",\"parent\":\"/1/35/37/94\",\"children\":[]},\"/1/35/37/94/133\":{\"ID\":133,\"attributes\":{\"name\":\"Property2\",\"DataType\":\"String\",\"Value\":\"\"},\"registry\":{\"DisplayFormat\":\"\",\"PortSVGIcon\":\"\",\"SVGIcon\":\"\",\"decorator\":\"\",\"isAbstract\":\"\",\"isPort\":\"\",\"position\":{\"x\":1036,\"y\":245}},\"pointers\":{\"base\":\"/20\"},\"collection\":{\"dst\":[\"/1/35/37/94/138\"]},\"path\":\"/1/35/37/94/133\",\"guid\":\"/1/35/37/94/133\",\"parent\":\"/1/35/37/94\",\"children\":[]},\"/1/35/37/94/95/134\":{\"ID\":134,\"attributes\":{\"name\":\"\"},\"registry\":{\"DisplayFormat\":\"\",\"PortSVGIcon\":\"\",\"SVGIcon\":\"\",\"decorator\":\"\",\"isAbstract\":\"\",\"isPort\":\"\",\"position\":{\"x\":0,\"y\":0}},\"pointers\":{\"base\":\"/27\",\"src\":\"/1/35/37/94/95/114\",\"dst\":\"/1/35/37/94/95/96/102\"},\"collection\":{},\"path\":\"/1/35/37/94/95/134\",\"guid\":\"/1/35/37/94/95/134\",\"parent\":\"/1/35/37/94/95\",\"children\":[]},\"/1/35/37/94/95/135\":{\"ID\":135,\"attributes\":{\"name\":\"\"},\"registry\":{\"DisplayFormat\":\"\",\"PortSVGIcon\":\"\",\"SVGIcon\":\"\",\"decorator\":\"\",\"isAbstract\":\"\",\"isPort\":\"\",\"position\":{\"x\":0,\"y\":0}},\"pointers\":{\"base\":\"/27\",\"src\":\"/1/35/37/94/95/96/98\",\"dst\":\"/1/35/37/94/95/113\"},\"collection\":{},\"path\":\"/1/35/37/94/95/135\",\"guid\":\"/1/35/37/94/95/135\",\"parent\":\"/1/35/37/94/95\",\"children\":[]},\"/1/35/37/94/136\":{\"ID\":136,\"attributes\":{\"name\":\"\"},\"registry\":{\"DisplayFormat\":\"\",\"PortSVGIcon\":\"\",\"SVGIcon\":\"\",\"decorator\":\"\",\"isAbstract\":\"\",\"isPort\":\"\",\"position\":{\"x\":0,\"y\":0}},\"pointers\":{\"base\":\"/27\",\"src\":\"/1/35/37/94/115/117\",\"dst\":\"/1/35/37/94/95/114\"},\"collection\":{},\"path\":\"/1/35/37/94/136\",\"guid\":\"/1/35/37/94/136\",\"parent\":\"/1/35/37/94\",\"children\":[]},\"/1/35/37/94/137\":{\"ID\":137,\"attributes\":{\"name\":\"\"},\"registry\":{\"DisplayFormat\":\"\",\"PortSVGIcon\":\"\",\"SVGIcon\":\"\",\"decorator\":\"\",\"isAbstract\":\"\",\"isPort\":\"\",\"position\":{\"x\":0,\"y\":0}},\"pointers\":{\"base\":\"/27\",\"src\":\"/1/35/37/94/132\",\"dst\":\"/1/35/37/94/115/121\"},\"collection\":{},\"path\":\"/1/35/37/94/137\",\"guid\":\"/1/35/37/94/137\",\"parent\":\"/1/35/37/94\",\"children\":[]},\"/1/35/37/94/138\":{\"ID\":138,\"attributes\":{\"name\":\"\"},\"registry\":{\"DisplayFormat\":\"\",\"PortSVGIcon\":\"\",\"SVGIcon\":\"\",\"decorator\":\"\",\"isAbstract\":\"\",\"isPort\":\"\",\"position\":{\"x\":0,\"y\":0}},\"pointers\":{\"base\":\"/27\",\"src\":\"/1/35/37/94/95/113\",\"dst\":\"/1/35/37/94/133\"},\"collection\":{},\"path\":\"/1/35/37/94/138\",\"guid\":\"/1/35/37/94/138\",\"parent\":\"/1/35/37/94\",\"children\":[]}}"
};});