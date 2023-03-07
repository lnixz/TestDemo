const data = {
    "data": {
        "saveData": [
            {
                "required": "false",
                "labelName": {
                    "type": "text",
                    "value": "资源标识"
                },
                "labelNameEn": {
                    "type": "text"
                },
                "contentType": "label",
                "cols": "50",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(152,152,152,0.65)",
                    "text-align": "left",
                    "fontSize": "14",
                    "border-left": "none",
                    "border-right": "none",
                    "border-top": "none",
                    "border-bottom": "#e8e8e8 1px solid"
                },
                "defaultValue": {
                    "type": "string"
                },
                "x": "0",
                "y": "0"
            },
            {
                "required": "false",
                "labelName": {
                    "type": "text",
                    "value": "档案室名称"
                },
                "labelNameEn": {
                    "type": "text"
                },
                "contentType": "label",
                "cols": "8",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14"
                },
                "defaultValue": {
                    "type": "string"
                },
                "x": "0",
                "y": "3"
            },
            {
                "required": "false",
                "contentType": "input",
                "cols": "17",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14",
                    "inputBorder": "show"
                },
                "defaultValue": {
                    "type": "string"
                },
                "attrName": "$.record.block[?(@.name=='归档信息')].block[?(@.name=='资源标识')].property[?(@.name=='archives_name')].content",
                "valueType": "string",
                "isRequired": "false",
                "title": "档案室名称",
                "x": "8",
                "y": "3"
            },
            {
                "required": "false",
                "contentType": "input",
                "cols": "17",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14",
                    "inputBorder": "show"
                },
                "defaultValue": {
                    "type": "string"
                },
                "attrName": "$.record.block[?(@.name=='归档信息')].block[?(@.name=='资源标识')].property[?(@.name=='archives_code')].content",
                "valueType": "string",
                "isRequired": "false",
                "title": "档案室代码",
                "x": "33",
                "y": "3"
            },
            {
                "required": "false",
                "labelName": {
                    "type": "text",
                    "value": "档号"
                },
                "labelNameEn": {
                    "type": "text"
                },
                "contentType": "label",
                "cols": "8",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14"
                },
                "defaultValue": {
                    "type": "string"
                },
                "x": "0",
                "y": "6"
            },
            {
                "required": "false",
                "contentType": "input",
                "cols": "17",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14",
                    "inputBorder": "show"
                },
                "defaultValue": {
                    "type": "string"
                },
                "attrName": "$.record.block[?(@.name=='归档信息')].block[?(@.name=='资源标识')].property[?(@.name=='archival_id')].content",
                "valueType": "string",
                "isRequired": "false",
                "title": "档号",
                "x": "8",
                "y": "6"
            },
            {
                "required": "false",
                "labelName": {
                    "type": "text",
                    "value": "档案室代码"
                },
                "labelNameEn": {
                    "type": "text"
                },
                "contentType": "label",
                "cols": "8",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14"
                },
                "defaultValue": {
                    "type": "string"
                },
                "x": "25",
                "y": "3"
            },
            {
                "required": "true",
                "labelName": {
                    "type": "text",
                    "value": "全宗号"
                },
                "labelNameEn": {
                    "type": "text"
                },
                "contentType": "label",
                "cols": "8",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14"
                },
                "defaultValue": {
                    "type": "string"
                },
                "x": "25",
                "y": "6"
            },
            {
                "required": "false",
                "contentType": "input",
                "cols": "17",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14",
                    "inputBorder": "show"
                },
                "defaultValue": {
                    "type": "local",
                    "value": "unit#fonds"
                },
                "attrName": "$.record.block[?(@.name=='归档信息')].block[?(@.name=='资源标识')].property[?(@.name=='fonds_id')].content",
                "valueType": "string",
                "isRequired": "true",
                "title": "全宗号",
                "x": "33",
                "y": "6"
            },
            {
                "required": "true",
                "labelName": {
                    "type": "text",
                    "value": "目录号"
                },
                "labelNameEn": {
                    "type": "text"
                },
                "contentType": "label",
                "cols": "8",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14"
                },
                "defaultValue": {
                    "type": "string"
                },
                "x": "0",
                "y": "9"
            },
            {
                "required": "false",
                "contentType": "input",
                "cols": "17",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14",
                    "inputBorder": "show"
                },
                "defaultValue": {
                    "type": "string"
                },
                "attrName": "$.record.block[?(@.name=='归档信息')].block[?(@.name=='资源标识')].property[?(@.name=='catalog_code')].content",
                "valueType": "string",
                "isRequired": "true",
                "title": "目录号",
                "x": "8",
                "y": "9"
            },
            {
                "required": "true",
                "labelName": {
                    "type": "text",
                    "value": "案卷号"
                },
                "labelNameEn": {
                    "type": "text"
                },
                "contentType": "label",
                "cols": "8",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14"
                },
                "defaultValue": {
                    "type": "string"
                },
                "x": "25",
                "y": "9"
            },
            {
                "required": "false",
                "contentType": "input",
                "cols": "17",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14",
                    "inputBorder": "show"
                },
                "defaultValue": {
                    "type": "string"
                },
                "attrName": "$.record.block[?(@.name=='归档信息')].block[?(@.name=='资源标识')].property[?(@.name=='volume_id')].content",
                "valueType": "string",
                "isRequired": "true",
                "title": "案卷号",
                "x": "33",
                "y": "9"
            },
            {
                "required": "false",
                "labelName": {
                    "type": "text",
                    "value": "分类号"
                },
                "labelNameEn": {
                    "type": "text"
                },
                "contentType": "label",
                "cols": "8",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14"
                },
                "defaultValue": {
                    "type": "string"
                },
                "x": "0",
                "y": "12"
            },
            {
                "required": "false",
                "contentType": "input",
                "cols": "17",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14",
                    "inputBorder": "show"
                },
                "defaultValue": {
                    "type": "string"
                },
                "attrName": "$.record.block[?(@.name=='归档信息')].block[?(@.name=='资源标识')].property[?(@.name=='classification_number')].content",
                "valueType": "string",
                "isRequired": "false",
                "title": "分类号",
                "x": "8",
                "y": "12"
            },
            {
                "required": "false",
                "labelName": {
                    "type": "text",
                    "value": "标签"
                },
                "labelNameEn": {
                    "type": "text"
                },
                "contentType": "label",
                "cols": "8",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14"
                },
                "defaultValue": {
                    "type": "string"
                },
                "x": "25",
                "y": "12"
            },
            {
                "required": "false",
                "contentType": "input",
                "cols": "17",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14",
                    "inputBorder": "show"
                },
                "defaultValue": {
                    "type": "string"
                },
                "attrName": "$.record.block[?(@.name=='归档信息')].block[?(@.name=='资源标识')].property[?(@.name=='resources_tag')].content",
                "valueType": "string",
                "isRequired": "false",
                "title": "标签",
                "x": "33",
                "y": "12"
            },
            {
                "required": "true",
                "labelName": {
                    "type": "text",
                    "value": "密级"
                },
                "labelNameEn": {
                    "type": "text"
                },
                "contentType": "label",
                "cols": "7",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14"
                },
                "defaultValue": {
                    "type": "string"
                },
                "x": "0",
                "y": "20"
            },
            {
                "required": "false",
                "contentType": "select",
                "cols": "18",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14",
                    "inputBorder": "show"
                },
                "defaultValue": {
                    "type": "string"
                },
                "attrName": "$.record.block[?(@.name=='归档信息')].block[?(@.name=='访问控制信息')].property[?(@.name=='security_class')].content",
                "allowedValuesCode": "密级",
                "selectAttrs": [
                    {
                        "displayName": "机密",
                        "value": "JM"
                    },
                    {
                        "displayName": "秘密",
                        "value": "MM"
                    },
                    {
                        "displayName": "普通",
                        "value": "PT"
                    },
                    {
                        "displayName": "绝密",
                        "value": "UM"
                    }
                ],
                "valueType": "string",
                "isRequired": "true",
                "title": "密级",
                "x": "7",
                "y": "20"
            },
            {
                "required": "false",
                "labelName": {
                    "type": "text",
                    "value": "访问控制信息"
                },
                "labelNameEn": {
                    "type": "text"
                },
                "contentType": "label",
                "cols": "50",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(152,152,152,0.65)",
                    "text-align": "left",
                    "fontSize": "14",
                    "border-left": "none",
                    "border-right": "none",
                    "border-top": "none",
                    "border-bottom": "#e8e8e8 1px solid"
                },
                "defaultValue": {
                    "type": "string"
                },
                "x": "0",
                "y": "17"
            },
            {
                "required": "false",
                "labelName": {
                    "type": "text",
                    "value": "发布网段"
                },
                "labelNameEn": {
                    "type": "text"
                },
                "contentType": "label",
                "cols": "8",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14"
                },
                "defaultValue": {
                    "type": "string"
                },
                "x": "25",
                "y": "20"
            },
            {
                "required": "false",
                "contentType": "select",
                "cols": "17",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14",
                    "inputBorder": "show"
                },
                "defaultValue": {
                    "type": "string"
                },
                "attrName": "$.record.block[?(@.name=='归档信息')].block[?(@.name=='访问控制信息')].property[?(@.name=='released_network')].content",
                "allowedValuesCode": "发布网段",
                "selectAttrs": [
                    {
                        "displayName": "互联网",
                        "value": "01"
                    },
                    {
                        "displayName": "政务外网",
                        "value": "02"
                    },
                    {
                        "displayName": "政务内网",
                        "value": "03"
                    },
                    {
                        "displayName": "内部局域网",
                        "value": "04"
                    }
                ],
                "valueType": "string",
                "isRequired": "false",
                "title": "发布网段",
                "x": "33",
                "y": "20"
            },
            {
                "required": "true",
                "labelName": {
                    "type": "text",
                    "value": "开放状态"
                },
                "labelNameEn": {
                    "type": "text"
                },
                "contentType": "label",
                "cols": "7",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14"
                },
                "defaultValue": {
                    "type": "string"
                },
                "x": "0",
                "y": "23"
            },
            {
                "required": "false",
                "contentType": "select",
                "cols": "18",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14",
                    "inputBorder": "show"
                },
                "defaultValue": {
                    "type": "string"
                },
                "attrName": "$.record.block[?(@.name=='归档信息')].block[?(@.name=='访问控制信息')].property[?(@.name=='open_class')].content",
                "allowedValuesCode": "开放状态",
                "selectAttrs": [
                    {
                        "displayName": "公开",
                        "value": "A"
                    },
                    {
                        "displayName": "依申请公开",
                        "value": "B"
                    },
                    {
                        "displayName": "严格控制",
                        "value": "C"
                    }
                ],
                "valueType": "string",
                "isRequired": "false",
                "title": "开放状态",
                "x": "7",
                "y": "23"
            },
            {
                "required": "false",
                "labelName": {
                    "type": "text",
                    "value": "解密标识"
                },
                "labelNameEn": {
                    "type": "text"
                },
                "contentType": "label",
                "cols": "8",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14"
                },
                "defaultValue": {
                    "type": "string"
                },
                "x": "25",
                "y": "23"
            },
            {
                "required": "false",
                "contentType": "select",
                "cols": "17",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14",
                    "inputBorder": "show"
                },
                "defaultValue": {
                    "type": "string"
                },
                "attrName": "$.record.block[?(@.name=='归档信息')].block[?(@.name=='访问控制信息')].property[?(@.name=='decryption_status')].content",
                "allowedValuesCode": "解密标识",
                "valueType": "string",
                "isRequired": "false",
                "title": "解密标识",
                "x": "33",
                "y": "23",
                "selectAttrs": [
                    {
                        "displayName": "未解密",
                        "value": "N"
                    },
                    {
                        "displayName": "解密标识",
                        "value": "Y"
                    }
                ]
            },
            {
                "required": "false",
                "labelName": {
                    "type": "text",
                    "value": "说明信息"
                },
                "labelNameEn": {
                    "type": "text"
                },
                "contentType": "label",
                "cols": "50",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(152,152,152,0.65)",
                    "text-align": "left",
                    "fontSize": "14",
                    "border-left": "none",
                    "border-right": "none",
                    "border-top": "none",
                    "border-bottom": "#e8e8e8 1px solid"
                },
                "defaultValue": {
                    "type": "string"
                },
                "x": "0",
                "y": "29"
            },
            {
                "required": "true",
                "labelName": {
                    "type": "text",
                    "value": "案卷题名"
                },
                "labelNameEn": {
                    "type": "text"
                },
                "contentType": "label",
                "cols": "7",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14"
                },
                "defaultValue": {
                    "type": "string"
                },
                "x": "0",
                "y": "32"
            },
            {
                "required": "false",
                "contentType": "input",
                "cols": "18",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14",
                    "inputBorder": "show"
                },
                "defaultValue": {
                    "type": "string"
                },
                "attrName": "$.record.block[?(@.name=='归档信息')].block[?(@.name=='说明信息')].property[?(@.name=='title')].content",
                "valueType": "string",
                "isRequired": "false",
                "title": "案卷题名",
                "x": "7",
                "y": "32"
            },
            {
                "required": "false",
                "labelName": {
                    "type": "text",
                    "value": "描述"
                },
                "labelNameEn": {
                    "type": "text"
                },
                "contentType": "label",
                "cols": "8",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14"
                },
                "defaultValue": {
                    "type": "string"
                },
                "x": "25",
                "y": "32"
            },
            {
                "required": "false",
                "contentType": "input",
                "cols": "17",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14",
                    "inputBorder": "show"
                },
                "defaultValue": {
                    "type": "string"
                },
                "attrName": "$.record.block[?(@.name=='归档信息')].block[?(@.name=='说明信息')].property[?(@.name=='description')].content",
                "valueType": "string",
                "isRequired": "false",
                "title": "描述",
                "x": "33",
                "y": "32"
            },
            {
                "required": "false",
                "labelName": {
                    "type": "text",
                    "value": "提要"
                },
                "labelNameEn": {
                    "type": "text"
                },
                "contentType": "label",
                "cols": "7",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14"
                },
                "defaultValue": {
                    "type": "string"
                },
                "x": "0",
                "y": "35"
            },
            {
                "required": "false",
                "contentType": "input",
                "cols": "18",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14",
                    "inputBorder": "show"
                },
                "defaultValue": {
                    "type": "string"
                },
                "attrName": "$.record.block[?(@.name=='归档信息')].block[?(@.name=='说明信息')].property[?(@.name=='file_summary')].content",
                "valueType": "string",
                "isRequired": "false",
                "title": "提要",
                "x": "7",
                "y": "35"
            },
            {
                "required": "true",
                "labelName": {
                    "type": "text",
                    "value": "归档份数"
                },
                "labelNameEn": {
                    "type": "text"
                },
                "contentType": "label",
                "cols": "8",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14"
                },
                "defaultValue": {
                    "type": "string"
                },
                "x": "25",
                "y": "35"
            },
            {
                "required": "false",
                "contentType": "input",
                "cols": "17",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14",
                    "inputBorder": "show"
                },
                "defaultValue": {
                    "type": "string"
                },
                "attrName": "$.record.block[?(@.name=='归档信息')].block[?(@.name=='说明信息')].property[?(@.name=='archives_num')].content",
                "valueType": "int",
                "isRequired": "true",
                "title": "归档份数",
                "x": "33",
                "y": "35"
            },
            {
                "required": "true",
                "labelName": {
                    "type": "text",
                    "value": "责任者"
                },
                "labelNameEn": {
                    "type": "text"
                },
                "contentType": "label",
                "cols": "7",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14"
                },
                "defaultValue": {
                    "type": "string"
                },
                "x": "0",
                "y": "38"
            },
            {
                "required": "false",
                "contentType": "input",
                "cols": "18",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14",
                    "inputBorder": "show"
                },
                "defaultValue": {
                    "type": "string"
                },
                "attrName": "$.record.block[?(@.name=='归档信息')].block[?(@.name=='说明信息')].property[?(@.name=='author')].content",
                "valueType": "string",
                "isRequired": "true",
                "title": "责任者",
                "x": "7",
                "y": "38"
            },
            {
                "required": "false",
                "labelName": {
                    "type": "text",
                    "value": "立档单位"
                },
                "labelNameEn": {
                    "type": "text"
                },
                "contentType": "label",
                "cols": "8",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14"
                },
                "defaultValue": {
                    "type": "string"
                },
                "x": "25",
                "y": "38"
            },
            {
                "required": "false",
                "contentType": "input",
                "cols": "17",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14",
                    "inputBorder": "show"
                },
                "defaultValue": {
                    "type": "string"
                },
                "attrName": "$.record.block[?(@.name=='归档信息')].block[?(@.name=='说明信息')].property[?(@.name=='fonds_unit')].content",
                "valueType": "string",
                "isRequired": "false",
                "title": "立档单位",
                "x": "33",
                "y": "38"
            },
            {
                "required": "false",
                "labelName": {
                    "type": "text",
                    "value": "起始日期"
                },
                "labelNameEn": {
                    "type": "text"
                },
                "contentType": "label",
                "cols": "7",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14"
                },
                "defaultValue": {
                    "type": "string"
                },
                "x": "0",
                "y": "41"
            },
            {
                "required": "false",
                "contentType": "date",
                "cols": "18",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.85)",
                    "text-align": "left",
                    "fontSize": "14",
                    "inputBorder": "show"
                },
                "defaultValue": {
                    "type": "string"
                },
                "attrName": "$.record.block[?(@.name=='归档信息')].block[?(@.name=='说明信息')].property[?(@.name=='file_start_date')].content",
                "valueType": "string",
                "isRequired": "false",
                "title": "起始日期",
                "x": "7",
                "y": "41"
            },
            {
                "required": "false",
                "labelName": {
                    "type": "text",
                    "value": "终止日期"
                },
                "labelNameEn": {
                    "type": "text"
                },
                "contentType": "label",
                "cols": "8",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14"
                },
                "defaultValue": {
                    "type": "string"
                },
                "x": "25",
                "y": "41"
            },
            {
                "required": "false",
                "contentType": "date",
                "cols": "17",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.85)",
                    "text-align": "left",
                    "fontSize": "14",
                    "inputBorder": "show"
                },
                "defaultValue": {
                    "type": "string"
                },
                "attrName": "$.record.block[?(@.name=='归档信息')].block[?(@.name=='说明信息')].property[?(@.name=='file_end_date')].content",
                "valueType": "string",
                "isRequired": "false",
                "title": "终止日期",
                "x": "33",
                "y": "41"
            },
            {
                "required": "true",
                "labelName": {
                    "type": "text",
                    "value": "保管期限"
                },
                "labelNameEn": {
                    "type": "text"
                },
                "contentType": "label",
                "cols": "7",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14"
                },
                "defaultValue": {
                    "type": "string"
                },
                "x": "0",
                "y": "44"
            },
            {
                "required": "false",
                "contentType": "select",
                "cols": "18",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14",
                    "inputBorder": "show"
                },
                "defaultValue": {
                    "type": "string"
                },
                "attrName": "$.record.block[?(@.name=='归档信息')].block[?(@.name=='说明信息')].property[?(@.name=='retention_period')].content",
                "allowedValuesCode": "保管期限",
                "valueType": "string",
                "isRequired": "false",
                "title": "保管期限",
                "x": "7",
                "y": "44",
                "selectAttrs": [
                    {
                        "displayName": "长期",
                        "value": "C"
                    },
                    {
                        "displayName": "短期",
                        "value": "D"
                    },
                    {
                        "displayName": "10年",
                        "value": "D10"
                    },
                    {
                        "displayName": "30年",
                        "value": "D30"
                    },
                    {
                        "displayName": "永久",
                        "value": "Y"
                    },
                    {
                        "displayName": "待定",
                        "value": "待定"
                    }
                ]
            },
            {
                "required": "false",
                "labelName": {
                    "type": "text",
                    "value": "年度"
                },
                "labelNameEn": {
                    "type": "text"
                },
                "contentType": "label",
                "cols": "8",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14"
                },
                "defaultValue": {
                    "type": "string"
                },
                "x": "25",
                "y": "44"
            },
            {
                "required": "false",
                "contentType": "input",
                "cols": "17",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14",
                    "inputBorder": "show"
                },
                "defaultValue": {
                    "type": "string"
                },
                "attrName": "$.record.block[?(@.name=='归档信息')].block[?(@.name=='说明信息')].property[?(@.name=='file_year')].content",
                "valueType": "string",
                "isRequired": "false",
                "title": "年度",
                "x": "33",
                "y": "44"
            },
            {
                "required": "false",
                "labelName": {
                    "type": "text",
                    "value": "卷内文件份数"
                },
                "labelNameEn": {
                    "type": "text"
                },
                "contentType": "label",
                "cols": "9",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14"
                },
                "defaultValue": {
                    "type": "string"
                },
                "x": "0",
                "y": "47"
            },
            {
                "required": "false",
                "contentType": "input",
                "cols": "16",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14",
                    "inputBorder": "show"
                },
                "defaultValue": {
                    "type": "string"
                },
                "attrName": "$.record.block[?(@.name=='归档信息')].block[?(@.name=='说明信息')].property[?(@.name=='documents_in_volume')].content",
                "valueType": "string",
                "isRequired": "false",
                "title": "卷内文件份数",
                "x": "9",
                "y": "47"
            },
            {
                "required": "false",
                "labelName": {
                    "type": "text",
                    "value": "卷内页数"
                },
                "labelNameEn": {
                    "type": "text"
                },
                "contentType": "label",
                "cols": "8",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14"
                },
                "defaultValue": {
                    "type": "string"
                },
                "x": "25",
                "y": "47"
            },
            {
                "required": "false",
                "contentType": "input",
                "cols": "17",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14",
                    "inputBorder": "show"
                },
                "defaultValue": {
                    "type": "string"
                },
                "attrName": "$.record.block[?(@.name=='归档信息')].block[?(@.name=='说明信息')].property[?(@.name=='pages')].content",
                "valueType": "string",
                "isRequired": "false",
                "title": "卷内页数",
                "x": "33",
                "y": "47"
            },
            {
                "required": "false",
                "labelName": {
                    "type": "text",
                    "value": "实体存址号"
                },
                "labelNameEn": {
                    "type": "text"
                },
                "contentType": "label",
                "cols": "8",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14"
                },
                "defaultValue": {
                    "type": "string"
                },
                "x": "0",
                "y": "50"
            },
            {
                "required": "false",
                "contentType": "input",
                "cols": "17",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14",
                    "inputBorder": "show"
                },
                "defaultValue": {
                    "type": "string"
                },
                "attrName": "$.record.block[?(@.name=='归档信息')].block[?(@.name=='说明信息')].property[?(@.name=='physical_archive_location')].content",
                "valueType": "string",
                "isRequired": "false",
                "title": "实体存址号",
                "x": "8",
                "y": "50"
            },
            {
                "required": "false",
                "labelName": {
                    "type": "text",
                    "value": "互见号"
                },
                "labelNameEn": {
                    "type": "text"
                },
                "contentType": "label",
                "cols": "8",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14"
                },
                "defaultValue": {
                    "type": "string"
                },
                "x": "25",
                "y": "50"
            },
            {
                "required": "false",
                "contentType": "input",
                "cols": "17",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14",
                    "inputBorder": "show"
                },
                "defaultValue": {
                    "type": "string"
                },
                "attrName": "$.record.block[?(@.name=='归档信息')].block[?(@.name=='说明信息')].property[?(@.name=='cross_reference_id')].content",
                "valueType": "string",
                "isRequired": "false",
                "title": "互见号",
                "x": "33",
                "y": "50"
            },
            {
                "required": "false",
                "labelName": {
                    "type": "text",
                    "value": "立卷人"
                },
                "labelNameEn": {
                    "type": "text"
                },
                "contentType": "label",
                "cols": "8",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14"
                },
                "defaultValue": {
                    "type": "string"
                },
                "x": "0",
                "y": "53"
            },
            {
                "required": "false",
                "contentType": "input",
                "cols": "17",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14",
                    "inputBorder": "show"
                },
                "defaultValue": {
                    "type": "string"
                },
                "attrName": "$.record.block[?(@.name=='归档信息')].block[?(@.name=='说明信息')].property[?(@.name=='volume_created_person')].content",
                "valueType": "string",
                "isRequired": "false",
                "title": "立卷人",
                "x": "8",
                "y": "53"
            },
            {
                "required": "false",
                "contentType": "date",
                "cols": "17",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14",
                    "inputBorder": "show"
                },
                "defaultValue": {
                    "type": "string"
                },
                "attrName": "$.record.block[?(@.name=='归档信息')].block[?(@.name=='说明信息')].property[?(@.name=='volume_created_date')].content",
                "valueType": "string",
                "isRequired": "false",
                "title": "立卷日期",
                "x": "33",
                "y": "53"
            },
            {
                "required": "false",
                "labelName": {
                    "type": "text",
                    "value": "立卷日期"
                },
                "labelNameEn": {
                    "type": "text"
                },
                "contentType": "label",
                "cols": "8",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14"
                },
                "defaultValue": {
                    "type": "string"
                },
                "x": "25",
                "y": "53"
            },
            {
                "required": "false",
                "labelName": {
                    "type": "text",
                    "value": "检查人"
                },
                "labelNameEn": {
                    "type": "text"
                },
                "contentType": "label",
                "cols": "8",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14"
                },
                "defaultValue": {
                    "type": "string"
                },
                "x": "0",
                "y": "56"
            },
            {
                "required": "false",
                "contentType": "input",
                "cols": "17",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14",
                    "inputBorder": "show"
                },
                "defaultValue": {
                    "type": "string"
                },
                "attrName": "$.record.block[?(@.name=='归档信息')].block[?(@.name=='说明信息')].property[?(@.name=='checked_by')].content",
                "valueType": "string",
                "isRequired": "false",
                "title": "检查人",
                "x": "8",
                "y": "56"
            },
            {
                "required": "false",
                "labelName": {
                    "type": "text",
                    "value": "检查日期"
                },
                "labelNameEn": {
                    "type": "text"
                },
                "contentType": "label",
                "cols": "8",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14"
                },
                "defaultValue": {
                    "type": "string"
                },
                "x": "25",
                "y": "56"
            },
            {
                "required": "false",
                "contentType": "date",
                "cols": "17",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14",
                    "inputBorder": "show"
                },
                "defaultValue": {
                    "type": "string"
                },
                "attrName": "$.record.block[?(@.name=='归档信息')].block[?(@.name=='说明信息')].property[?(@.name=='checked_date')].content",
                "valueType": "string",
                "isRequired": "false",
                "title": "检查日期",
                "x": "33",
                "y": "56"
            },
            {
                "required": "false",
                "labelName": {
                    "type": "text",
                    "value": "归档人"
                },
                "labelNameEn": {
                    "type": "text"
                },
                "contentType": "label",
                "cols": "8",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14"
                },
                "defaultValue": {
                    "type": "string"
                },
                "x": "0",
                "y": "59"
            },
            {
                "required": "false",
                "contentType": "input",
                "cols": "17",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14",
                    "inputBorder": "show"
                },
                "defaultValue": {
                    "type": "string"
                },
                "attrName": "$.record.block[?(@.name=='归档信息')].block[?(@.name=='说明信息')].property[?(@.name=='filed_by')].content",
                "valueType": "string",
                "isRequired": "false",
                "title": "归档人",
                "x": "8",
                "y": "59"
            },
            {
                "required": "false",
                "contentType": "date",
                "cols": "17",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14",
                    "inputBorder": "show"
                },
                "defaultValue": {
                    "type": "string"
                },
                "attrName": "$.record.block[?(@.name=='归档信息')].block[?(@.name=='说明信息')].property[?(@.name=='filed_date')].content",
                "valueType": "string",
                "isRequired": "false",
                "title": "归档日期",
                "x": "33",
                "y": "59"
            },
            {
                "required": "false",
                "labelName": {
                    "type": "text",
                    "value": "归档日期"
                },
                "labelNameEn": {
                    "type": "text"
                },
                "contentType": "label",
                "cols": "8",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14"
                },
                "defaultValue": {
                    "type": "string"
                },
                "x": "25",
                "y": "59"
            },
            {
                "required": "false",
                "labelName": {
                    "type": "text",
                    "value": "数字化状态"
                },
                "labelNameEn": {
                    "type": "text"
                },
                "contentType": "label",
                "cols": "8",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14"
                },
                "defaultValue": {
                    "type": "string"
                },
                "x": "0",
                "y": "62"
            },
            {
                "required": "false",
                "contentType": "select",
                "cols": "17",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14",
                    "inputBorder": "show"
                },
                "defaultValue": {
                    "type": "string"
                },
                "attrName": "$.record.block[?(@.name=='归档信息')].block[?(@.name=='说明信息')].property[?(@.name=='digitized_status')].content",
                "allowedValuesCode": "数字化状态",
                "valueType": "string",
                "isRequired": "false",
                "title": "数字化状态",
                "x": "8",
                "y": "62",
                "selectAttrs": [
                    {
                        "displayName": "未数字化",
                        "value": "01"
                    },
                    {
                        "displayName": "数字化副本",
                        "value": "02"
                    },
                    {
                        "displayName": "纯电子",
                        "value": "03"
                    }
                ]
            },
            {
                "required": "true",
                "labelName": {
                    "type": "text",
                    "value": "载体类型"
                },
                "labelNameEn": {
                    "type": "text"
                },
                "contentType": "label",
                "cols": "8",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14"
                },
                "defaultValue": {
                    "type": "string"
                },
                "x": "25",
                "y": "62"
            },
            {
                "required": "false",
                "contentType": "select",
                "cols": "17",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14",
                    "inputBorder": "show"
                },
                "defaultValue": {
                    "type": "string"
                },
                "attrName": "$.record.block[?(@.name=='归档信息')].block[?(@.name=='说明信息')].property[?(@.name=='carrier_type')].content",
                "allowedValuesCode": "载体类型",
                "selectAttrs": [
                    {
                        "displayName": "物理",
                        "value": "01"
                    },
                    {
                        "displayName": "电子",
                        "value": "02"
                    }
                ],
                "valueType": "string",
                "isRequired": "false",
                "title": "载体类型",
                "x": "33",
                "y": "62"
            },
            {
                "required": "false",
                "labelName": {
                    "type": "text",
                    "value": "文件所有者"
                },
                "labelNameEn": {
                    "type": "text"
                },
                "contentType": "label",
                "cols": "8",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14"
                },
                "defaultValue": {
                    "type": "string"
                },
                "x": "0",
                "y": "65"
            },
            {
                "required": "false",
                "contentType": "input",
                "cols": "17",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.85)",
                    "text-align": "left",
                    "fontSize": "14",
                    "inputBorder": "show"
                },
                "defaultValue": {
                    "type": "string"
                },
                "keyAttrName": "$.record.block[?(@.name=='归档信息')].block[?(@.name=='说明信息')].property[?(@.name=='owner')].content",
                "attrName": "$.record.block[?(@.name=='归档信息')].block[?(@.name=='说明信息')].property[?(@.name=='owner')].content",
                "componentType": "2",
                "valueType": "string",
                "isRequired": "false",
                "title": "文件所有者",
                "x": "8",
                "y": "65"
            },
            {
                "required": "true",
                "labelName": {
                    "type": "text",
                    "value": "装订方式"
                },
                "labelNameEn": {
                    "type": "text"
                },
                "contentType": "label",
                "cols": "8",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14"
                },
                "defaultValue": {
                    "type": "string"
                },
                "x": "25",
                "y": "65"
            },
            {
                "required": "false",
                "contentType": "select",
                "cols": "17",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.85)",
                    "text-align": "left",
                    "fontSize": "14",
                    "inputBorder": "show"
                },
                "defaultValue": {
                    "type": "string"
                },
                "attrName": "$.record.block[?(@.name=='归档信息')].block[?(@.name=='说明信息')].property[?(@.name=='binding_method')].content",
                "valueType": "int",
                "isRequired": "true",
                "title": "装订方式",
                "x": "33",
                "y": "65",
                "selectAttrs": [
                    {
                        "displayName": "整卷",
                        "value": "1"
                    },
                    {
                        "displayName": "散卷",
                        "value": "2"
                    }
                ],
                "allowedValuesCode": "装订方式"
            },
            {
                "required": "false",
                "labelName": {
                    "type": "text",
                    "value": "全宗名称"
                },
                "labelNameEn": {
                    "type": "text"
                },
                "contentType": "label",
                "cols": "8",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14"
                },
                "defaultValue": {
                    "type": "string"
                },
                "x": "0",
                "y": "68"
            },
            {
                "required": "false",
                "contentType": "input",
                "cols": "17",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14",
                    "inputBorder": "show"
                },
                "defaultValue": {
                    "type": "string"
                },
                "attrName": "$.record.block[?(@.name=='归档信息')].block[?(@.name=='说明信息')].property[?(@.name=='fonds_name')].content",
                "valueType": "string",
                "isRequired": "false",
                "title": "全宗名称",
                "x": "8",
                "y": "68"
            },
            {
                "required": "true",
                "labelName": {
                    "type": "text",
                    "value": "形成时间"
                },
                "labelNameEn": {
                    "type": "text"
                },
                "contentType": "label",
                "cols": "8",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14"
                },
                "defaultValue": {
                    "type": "string"
                },
                "x": "25",
                "y": "68"
            },
            {
                "required": "false",
                "labelName": {
                    "type": "text",
                    "value": "内容描述"
                },
                "labelNameEn": {
                    "type": "text"
                },
                "contentType": "label",
                "cols": "50",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(152,152,152,0.65)",
                    "text-align": "left",
                    "fontSize": "14",
                    "border-left": "none",
                    "border-right": "none",
                    "border-top": "none",
                    "border-bottom": "#e8e8e8 1px solid"
                },
                "defaultValue": {
                    "type": "string"
                },
                "x": "0",
                "y": "72"
            },
            {
                "required": "false",
                "labelName": {
                    "type": "text",
                    "value": "摄影者"
                },
                "labelNameEn": {
                    "type": "text"
                },
                "contentType": "label",
                "cols": "8",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14"
                },
                "defaultValue": {
                    "type": "string"
                },
                "x": "0",
                "y": "75"
            },
            {
                "required": "false",
                "contentType": "input",
                "cols": "17",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14",
                    "inputBorder": "show"
                },
                "defaultValue": {
                    "type": "string"
                },
                "attrName": "$.record.block[?(@.name=='业务内容')].block.property[?(@.name=='photographer')].content",
                "valueType": "string",
                "isRequired": "false",
                "title": "摄影者",
                "x": "8",
                "y": "75"
            },
            {
                "required": "false",
                "labelName": {
                    "type": "text",
                    "value": "摄影时间"
                },
                "labelNameEn": {
                    "type": "text"
                },
                "contentType": "label",
                "cols": "8",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14"
                },
                "defaultValue": {
                    "type": "string"
                },
                "x": "25",
                "y": "75"
            },
            {
                "required": "false",
                "contentType": "date",
                "cols": "17",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.85)",
                    "text-align": "left",
                    "fontSize": "14",
                    "inputBorder": "show"
                },
                "defaultValue": {
                    "type": "string"
                },
                "attrName": "$.record.block[?(@.name=='业务内容')].block.property[?(@.name=='photography_time')].content",
                "valueType": "string",
                "isRequired": "false",
                "title": "摄影时间",
                "x": "33",
                "y": "75"
            },
            {
                "required": "false",
                "labelName": {
                    "type": "text",
                    "value": "件数"
                },
                "labelNameEn": {
                    "type": "text"
                },
                "contentType": "label",
                "cols": "8",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14"
                },
                "defaultValue": {
                    "type": "string"
                },
                "x": "0",
                "y": "78"
            },
            {
                "required": "false",
                "contentType": "input",
                "cols": "17",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14",
                    "inputBorder": "show"
                },
                "defaultValue": {
                    "type": "string"
                },
                "attrName": "$.record.block[?(@.name=='业务内容')].block.property[?(@.name=='total_num')].content",
                "valueType": "string",
                "isRequired": "false",
                "title": "件数",
                "x": "8",
                "y": "78"
            },
            {
                "required": "false",
                "labelName": {
                    "type": "text",
                    "value": "类别"
                },
                "labelNameEn": {
                    "type": "text"
                },
                "contentType": "label",
                "cols": "8",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14"
                },
                "defaultValue": {
                    "type": "string"
                },
                "x": "25",
                "y": "78"
            },
            {
                "required": "false",
                "contentType": "select",
                "cols": "17",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14",
                    "inputBorder": "show"
                },
                "defaultValue": {
                    "type": "string"
                },
                "attrName": "$.record.block[?(@.name=='业务内容')].block.property[?(@.name=='category')].content",
                "allowedValuesCode": "照片类别",
                "selectAttrs": [
                    {
                        "displayName": "人物",
                        "value": "0"
                    },
                    {
                        "displayName": "地点",
                        "value": "1"
                    },
                    {
                        "displayName": "建筑",
                        "value": "2"
                    },
                    {
                        "displayName": "风景",
                        "value": "3"
                    },
                    {
                        "displayName": "事件",
                        "value": "4"
                    },
                    {
                        "displayName": "会议",
                        "value": "5"
                    },
                    {
                        "displayName": "重大活动",
                        "value": "6"
                    },
                    {
                        "displayName": "重要领导 ",
                        "value": "7"
                    },
                    {
                        "displayName": "其他",
                        "value": "8"
                    }
                ],
                "valueType": "string",
                "isRequired": "false",
                "title": "类别",
                "x": "33",
                "y": "78"
            },
            {
                "required": "false",
                "labelName": {
                    "type": "text",
                    "value": "照片号"
                },
                "labelNameEn": {
                    "type": "text"
                },
                "contentType": "label",
                "cols": "8",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14"
                },
                "defaultValue": {
                    "type": "string"
                },
                "x": "0",
                "y": "81"
            },
            {
                "required": "false",
                "contentType": "input",
                "cols": "17",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14",
                    "inputBorder": "show"
                },
                "defaultValue": {
                    "type": "string"
                },
                "attrName": "$.record.block[?(@.name=='业务内容')].block.property[?(@.name=='photo_number')].content",
                "valueType": "string",
                "isRequired": "false",
                "title": "照片号",
                "x": "8",
                "y": "81"
            },
            {
                "required": "false",
                "labelName": {
                    "type": "text",
                    "value": "底片号"
                },
                "labelNameEn": {
                    "type": "text"
                },
                "contentType": "label",
                "cols": "8",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14"
                },
                "defaultValue": {
                    "type": "string"
                },
                "x": "25",
                "y": "81"
            },
            {
                "required": "false",
                "contentType": "input",
                "cols": "17",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14",
                    "inputBorder": "show"
                },
                "defaultValue": {
                    "type": "string"
                },
                "attrName": "$.record.block[?(@.name=='业务内容')].block.property[?(@.name=='the_film')].content",
                "valueType": "string",
                "isRequired": "false",
                "title": "底片号",
                "x": "33",
                "y": "81"
            },
            {
                "required": "false",
                "labelName": {
                    "type": "text",
                    "value": "参见号"
                },
                "labelNameEn": {
                    "type": "text"
                },
                "contentType": "label",
                "cols": "8",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14"
                },
                "defaultValue": {
                    "type": "string"
                },
                "x": "0",
                "y": "84"
            },
            {
                "required": "false",
                "contentType": "input",
                "cols": "17",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14",
                    "inputBorder": "show"
                },
                "defaultValue": {
                    "type": "string"
                },
                "attrName": "$.record.block[?(@.name=='业务内容')].block.property[?(@.name=='fistnote')].content",
                "valueType": "string",
                "isRequired": "false",
                "title": "参见号",
                "x": "8",
                "y": "84"
            },
            {
                "required": "false",
                "labelName": {
                    "type": "text",
                    "value": "数码照片号"
                },
                "labelNameEn": {
                    "type": "text"
                },
                "contentType": "label",
                "cols": "8",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14"
                },
                "defaultValue": {
                    "type": "string"
                },
                "x": "25",
                "y": "84"
            },
            {
                "required": "false",
                "contentType": "input",
                "cols": "17",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14",
                    "inputBorder": "show"
                },
                "defaultValue": {
                    "type": "string"
                },
                "attrName": "$.record.block[?(@.name=='业务内容')].block.property[?(@.name=='digital_photo_number')].content",
                "valueType": "string",
                "isRequired": "false",
                "title": "数码照片号",
                "x": "33",
                "y": "84"
            },
            {
                "required": "false",
                "labelName": {
                    "type": "text",
                    "value": "备注"
                },
                "labelNameEn": {
                    "type": "text"
                },
                "contentType": "label",
                "cols": "8",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14"
                },
                "defaultValue": {
                    "type": "string"
                },
                "x": "0",
                "y": "87"
            },
            {
                "required": "false",
                "contentType": "input",
                "cols": "17",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14",
                    "inputBorder": "show"
                },
                "defaultValue": {
                    "type": "string"
                },
                "attrName": "$.record.block[?(@.name=='业务内容')].block.property[?(@.name=='remark')].content",
                "valueType": "string",
                "isRequired": "false",
                "title": "备注",
                "x": "8",
                "y": "87"
            },
            {
                "required": "false",
                "labelName": {
                    "type": "text",
                    "value": "最后修改人"
                },
                "labelNameEn": {
                    "type": "text"
                },
                "contentType": "label",
                "cols": "8",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14"
                },
                "defaultValue": {
                    "type": "string"
                },
                "x": "25",
                "y": "87"
            },
            {
                "required": "false",
                "contentType": "input",
                "cols": "17",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14",
                    "inputBorder": "show"
                },
                "defaultValue": {
                    "type": "string"
                },
                "attrName": "$.record.block[?(@.name=='业务内容')].block.property[?(@.name=='last_change_man')].content",
                "valueType": "string",
                "isRequired": "false",
                "title": "最后修改人",
                "x": "33",
                "y": "87"
            },
            {
                "required": "false",
                "labelName": {
                    "type": "text",
                    "value": "录入日期"
                },
                "labelNameEn": {
                    "type": "text"
                },
                "contentType": "label",
                "cols": "8",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14"
                },
                "defaultValue": {
                    "type": "string"
                },
                "x": "0",
                "y": "90"
            },
            {
                "required": "false",
                "contentType": "date",
                "cols": "17",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.85)",
                    "text-align": "left",
                    "fontSize": "14",
                    "inputBorder": "show"
                },
                "defaultValue": {
                    "type": "string"
                },
                "attrName": "$.record.block[?(@.name=='业务内容')].block.property[?(@.name=='inputdate')].content",
                "valueType": "string",
                "isRequired": "false",
                "title": "录入日期",
                "x": "8",
                "y": "90"
            },
            {
                "required": "false",
                "labelName": {
                    "type": "text",
                    "value": "是否有原文"
                },
                "labelNameEn": {
                    "type": "text"
                },
                "contentType": "label",
                "cols": "8",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14"
                },
                "defaultValue": {
                    "type": "string"
                },
                "x": "25",
                "y": "90"
            },
            {
                "required": "false",
                "contentType": "input",
                "cols": "17",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14",
                    "inputBorder": "show"
                },
                "defaultValue": {
                    "type": "string"
                },
                "attrName": "$.record.block[?(@.name=='业务内容')].block.property[?(@.name=='whether_origina')].content",
                "valueType": "string",
                "isRequired": "false",
                "title": "是否有原文",
                "x": "33",
                "y": "90"
            },
            {
                "required": "false",
                "labelName": {
                    "type": "text",
                    "value": "是否移交"
                },
                "labelNameEn": {
                    "type": "text"
                },
                "contentType": "label",
                "cols": "8",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14"
                },
                "defaultValue": {
                    "type": "string"
                },
                "x": "0",
                "y": "93"
            },
            {
                "required": "false",
                "contentType": "input",
                "cols": "17",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14",
                    "inputBorder": "show"
                },
                "defaultValue": {
                    "type": "string"
                },
                "attrName": "$.record.block[?(@.name=='业务内容')].block.property[?(@.name=='whether_transfer')].content",
                "valueType": "string",
                "isRequired": "false",
                "title": "是否移交",
                "x": "8",
                "y": "93"
            },
            {
                "required": "false",
                "labelName": {
                    "type": "text",
                    "value": "索引状态"
                },
                "labelNameEn": {
                    "type": "text"
                },
                "contentType": "label",
                "cols": "8",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14"
                },
                "defaultValue": {
                    "type": "string"
                },
                "x": "25",
                "y": "93"
            },
            {
                "required": "false",
                "contentType": "input",
                "cols": "17",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14",
                    "inputBorder": "show"
                },
                "defaultValue": {
                    "type": "string"
                },
                "attrName": "$.record.block[?(@.name=='业务内容')].block.property[?(@.name=='index_state')].content",
                "valueType": "string",
                "isRequired": "false",
                "title": "索引状态",
                "x": "33",
                "y": "93"
            },
            {
                "required": "false",
                "labelName": {
                    "type": "text",
                    "value": "归档状态"
                },
                "labelNameEn": {
                    "type": "text"
                },
                "contentType": "label",
                "cols": "8",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14"
                },
                "defaultValue": {
                    "type": "string"
                },
                "x": "0",
                "y": "96"
            },
            {
                "required": "false",
                "contentType": "input",
                "cols": "17",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14",
                    "inputBorder": "show"
                },
                "defaultValue": {
                    "type": "string"
                },
                "attrName": "$.record.block[?(@.name=='业务内容')].block.property[?(@.name=='file_state')].content",
                "valueType": "string",
                "isRequired": "false",
                "title": "归档状态",
                "x": "8",
                "y": "96"
            },
            {
                "required": "false",
                "labelName": {
                    "type": "text",
                    "value": "页号"
                },
                "labelNameEn": {
                    "type": "text"
                },
                "contentType": "label",
                "cols": "8",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14"
                },
                "defaultValue": {
                    "type": "string"
                },
                "x": "25",
                "y": "96"
            },
            {
                "required": "false",
                "contentType": "input",
                "cols": "17",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14",
                    "inputBorder": "show"
                },
                "defaultValue": {
                    "type": "string"
                },
                "attrName": "$.record.block[?(@.name=='业务内容')].block.property[?(@.name=='page_number')].content",
                "valueType": "string",
                "isRequired": "false",
                "title": "页号",
                "x": "33",
                "y": "96"
            },
            {
                "required": "false",
                "labelName": {
                    "type": "text",
                    "value": "册号"
                },
                "labelNameEn": {
                    "type": "text"
                },
                "contentType": "label",
                "cols": "8",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14"
                },
                "defaultValue": {
                    "type": "string"
                },
                "x": "0",
                "y": "99"
            },
            {
                "required": "false",
                "contentType": "input",
                "cols": "17",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14",
                    "inputBorder": "show"
                },
                "defaultValue": {
                    "type": "string"
                },
                "attrName": "$.record.block[?(@.name=='业务内容')].block.property[?(@.name=='volume_number')].content",
                "valueType": "string",
                "isRequired": "false",
                "title": "册号",
                "x": "8",
                "y": "99"
            },
            {
                "required": "false",
                "labelName": {
                    "type": "text",
                    "value": "分类号"
                },
                "labelNameEn": {
                    "type": "text"
                },
                "contentType": "label",
                "cols": "8",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14"
                },
                "defaultValue": {
                    "type": "string"
                },
                "x": "25",
                "y": "99"
            },
            {
                "required": "false",
                "contentType": "input",
                "cols": "17",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14",
                    "inputBorder": "show"
                },
                "defaultValue": {
                    "type": "string"
                },
                "attrName": "$.record.block[?(@.name=='业务内容')].block.property[?(@.name=='classification_code')].content",
                "valueType": "string",
                "isRequired": "false",
                "title": "分类码",
                "x": "33",
                "y": "99"
            },
            {
                "required": "false",
                "labelName": {
                    "type": "text",
                    "value": "案卷档号"
                },
                "labelNameEn": {
                    "type": "text"
                },
                "contentType": "label",
                "cols": "8",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14"
                },
                "defaultValue": {
                    "type": "string"
                },
                "x": "0",
                "y": "102"
            },
            {
                "required": "false",
                "contentType": "input",
                "cols": "17",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14",
                    "inputBorder": "show"
                },
                "defaultValue": {
                    "type": "string"
                },
                "attrName": "$.record.block[?(@.name=='业务内容')].block.property[?(@.name=='file_number')].content",
                "valueType": "string",
                "isRequired": "false",
                "title": "案卷档号",
                "x": "8",
                "y": "102"
            },
            {
                "required": "false",
                "labelName": {
                    "type": "text",
                    "value": "主题"
                },
                "labelNameEn": {
                    "type": "text"
                },
                "contentType": "label",
                "cols": "8",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14"
                },
                "defaultValue": {
                    "type": "string"
                },
                "x": "25",
                "y": "102"
            },
            {
                "required": "false",
                "contentType": "input",
                "cols": "17",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14",
                    "inputBorder": "show"
                },
                "defaultValue": {
                    "type": "string"
                },
                "attrName": "$.record.block[?(@.name=='业务内容')].block.property[?(@.name=='subject_term')].content",
                "valueType": "string",
                "isRequired": "false",
                "title": "主题词",
                "x": "33",
                "y": "102"
            },
            {
                "required": "false",
                "labelName": {
                    "type": "text",
                    "value": "件号"
                },
                "labelNameEn": {
                    "type": "text"
                },
                "contentType": "label",
                "cols": "8",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14"
                },
                "defaultValue": {
                    "type": "string"
                },
                "x": "0",
                "y": "105"
            },
            {
                "required": "false",
                "contentType": "input",
                "cols": "17",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14",
                    "inputBorder": "show"
                },
                "defaultValue": {
                    "type": "string"
                },
                "attrName": "$.record.block[?(@.name=='业务内容')].block.property[?(@.name=='piece_number')].content",
                "valueType": "string",
                "isRequired": "false",
                "title": "件号",
                "x": "8",
                "y": "105"
            },
            {
                "required": "false",
                "labelName": {
                    "type": "text",
                    "value": "村社档案"
                },
                "labelNameEn": {
                    "type": "text"
                },
                "contentType": "label",
                "cols": "8",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14"
                },
                "defaultValue": {
                    "type": "string"
                },
                "x": "25",
                "y": "105"
            },
            {
                "required": "false",
                "contentType": "input",
                "cols": "17",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14",
                    "inputBorder": "show"
                },
                "defaultValue": {
                    "type": "string"
                },
                "attrName": "$.record.block[?(@.name=='业务内容')].block.property[?(@.name=='village_archive')].content",
                "valueType": "string",
                "isRequired": "false",
                "title": "村社档案",
                "x": "33",
                "y": "105"
            },
            {
                "required": "false",
                "labelName": {
                    "type": "text",
                    "value": "原文开放级别"
                },
                "labelNameEn": {
                    "type": "text"
                },
                "contentType": "label",
                "cols": "9",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14"
                },
                "defaultValue": {
                    "type": "string"
                },
                "x": "0",
                "y": "108"
            },
            {
                "required": "false",
                "contentType": "input",
                "cols": "16",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14",
                    "inputBorder": "show"
                },
                "defaultValue": {
                    "type": "string"
                },
                "attrName": "$.record.block[?(@.name=='业务内容')].block.property[?(@.name=='source_open_level')].content",
                "valueType": "string",
                "isRequired": "false",
                "title": "原文开放级别",
                "x": "9",
                "y": "108"
            },
            {
                "required": "false",
                "labelName": {
                    "type": "text",
                    "value": "条目开放级别"
                },
                "labelNameEn": {
                    "type": "text"
                },
                "contentType": "label",
                "cols": "9",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14"
                },
                "defaultValue": {
                    "type": "string"
                },
                "x": "25",
                "y": "108"
            },
            {
                "required": "false",
                "contentType": "input",
                "cols": "16",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14",
                    "inputBorder": "show"
                },
                "defaultValue": {
                    "type": "string"
                },
                "attrName": "$.record.block[?(@.name=='业务内容')].block.property[?(@.name=='entry_open_level')].content",
                "valueType": "string",
                "isRequired": "false",
                "title": "条目开放级别",
                "x": "34",
                "y": "108"
            },
            {
                "required": "false",
                "labelName": {
                    "type": "text",
                    "value": "进馆开放级别"
                },
                "labelNameEn": {
                    "type": "text"
                },
                "contentType": "label",
                "cols": "9",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14"
                },
                "defaultValue": {
                    "type": "string"
                },
                "x": "0",
                "y": "111"
            },
            {
                "required": "false",
                "contentType": "input",
                "cols": "16",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14",
                    "inputBorder": "show"
                },
                "defaultValue": {
                    "type": "string"
                },
                "attrName": "$.record.block[?(@.name=='业务内容')].block.property[?(@.name=='open_level_of_entry')].content",
                "valueType": "string",
                "isRequired": "false",
                "title": "进馆开放级别",
                "x": "9",
                "y": "111"
            },
            {
                "required": "false",
                "labelName": {
                    "type": "text",
                    "value": "系统唯一ID号"
                },
                "labelNameEn": {
                    "type": "text"
                },
                "contentType": "label",
                "cols": "9",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14"
                },
                "defaultValue": {
                    "type": "string"
                },
                "x": "25",
                "y": "111"
            },
            {
                "required": "false",
                "contentType": "input",
                "cols": "16",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14",
                    "inputBorder": "show"
                },
                "defaultValue": {
                    "type": "string"
                },
                "attrName": "$.record.block[?(@.name=='业务内容')].block.property[?(@.name=='system_unique_id')].content",
                "valueType": "string",
                "isRequired": "false",
                "title": "系统唯一ID号",
                "x": "34",
                "y": "111"
            },
            {
                "required": "false",
                "labelName": {
                    "type": "text",
                    "value": "是否已归档"
                },
                "labelNameEn": {
                    "type": "text"
                },
                "contentType": "label",
                "cols": "8",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14"
                },
                "defaultValue": {
                    "type": "string"
                },
                "x": "0",
                "y": "114"
            },
            {
                "required": "false",
                "contentType": "input",
                "cols": "17",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14",
                    "inputBorder": "show"
                },
                "defaultValue": {
                    "type": "string"
                },
                "attrName": "$.record.block[?(@.name=='业务内容')].block.property[?(@.name=='whether_filed')].content",
                "valueType": "string",
                "isRequired": "false",
                "title": "是否已归档",
                "x": "8",
                "y": "114"
            },
            {
                "required": "false",
                "labelName": {
                    "type": "text",
                    "value": "整理方式"
                },
                "labelNameEn": {
                    "type": "text"
                },
                "contentType": "label",
                "cols": "8",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14"
                },
                "defaultValue": {
                    "type": "string"
                },
                "x": "25",
                "y": "114"
            },
            {
                "required": "false",
                "contentType": "input",
                "cols": "17",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14",
                    "inputBorder": "show"
                },
                "defaultValue": {
                    "type": "string"
                },
                "attrName": "$.record.block[?(@.name=='业务内容')].block.property[?(@.name=='collection_way')].content",
                "valueType": "string",
                "isRequired": "false",
                "title": "整理方式",
                "x": "33",
                "y": "114"
            },
            {
                "required": "false",
                "contentType": "input",
                "cols": "17",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14",
                    "inputBorder": "show"
                },
                "defaultValue": {
                    "type": "string"
                },
                "attrName": "$.record.block[?(@.name=='业务内容')].block.property[?(@.name=='the_books_total_number_of_pages')].content",
                "valueType": "string",
                "isRequired": "false",
                "title": "案卷总页数",
                "x": "8",
                "y": "117"
            },
            {
                "required": "false",
                "labelName": {
                    "type": "text",
                    "value": "案卷总页数"
                },
                "labelNameEn": {
                    "type": "text"
                },
                "contentType": "label",
                "cols": "8",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14"
                },
                "defaultValue": {
                    "type": "string"
                },
                "x": "0",
                "y": "117"
            },
            {
                "required": "false",
                "labelName": {
                    "type": "text",
                    "value": "张数"
                },
                "labelNameEn": {
                    "type": "text"
                },
                "contentType": "label",
                "cols": "8",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14"
                },
                "defaultValue": {
                    "type": "string"
                },
                "x": "25",
                "y": "117"
            },
            {
                "required": "false",
                "contentType": "input",
                "cols": "17",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14",
                    "inputBorder": "show"
                },
                "defaultValue": {
                    "type": "string"
                },
                "attrName": "$.record.block[?(@.name=='业务内容')].block.property[?(@.name=='photo_number ')].content",
                "valueType": "string",
                "isRequired": "false",
                "title": "张数",
                "x": "33",
                "y": "117"
            },
            {
                "required": "false",
                "labelName": {
                    "type": "text",
                    "value": "分类代码"
                },
                "labelNameEn": {
                    "type": "text"
                },
                "contentType": "label",
                "cols": "8",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14"
                },
                "defaultValue": {
                    "type": "string"
                },
                "x": "0",
                "y": "120"
            },
            {
                "required": "false",
                "contentType": "input",
                "cols": "17",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.65)",
                    "text-align": "left",
                    "fontSize": "14",
                    "inputBorder": "show"
                },
                "defaultValue": {
                    "type": "string"
                },
                "attrName": "$.record.block[?(@.name=='业务内容')].block.property[?(@.name=='category_number')].content",
                "valueType": "string",
                "isRequired": "false",
                "title": "分类代码",
                "x": "8",
                "y": "120"
            },
            {
                "required": "false",
                "contentType": "date",
                "cols": "17",
                "rows": "3",
                "style": {
                    "fontColor": "rgba(0,0,0, 0.85)",
                    "text-align": "left",
                    "fontSize": "14",
                    "inputBorder": "show"
                },
                "defaultValue": {
                    "type": "string"
                },
                "attrName": "$.record.block[?(@.name=='归档信息')].block[?(@.name=='说明信息')].property[?(@.name=='doc_pub_date')].content",
                "valueType": "date",
                "isRequired": "true",
                "title": "形成时间",
                "x": "33",
                "y": "68",
                "typeFormat": "yyyy-MM-dd"
            }
        ],
        "formWidth": "700"
    }
}

const formatTableEntity = (jsonData) => {
    if (jsonData.block) { 
        jsonData.block.forEach((b) => {
            if (b.can_repeat == 'true') {
                let block = _.cloneDeep(b)
                let property = {}
                block.property.forEach(pro => {
                    if (!property[pro.name]) {
                        property[pro.name] = {}
                    }
                    property[pro.name].content = _.cloneDeep(pro.content)
                })
                let repeat_block = []
                for (let key in property) {
                    if (property[key].content) {
                        for (let i = 0; i < property[key].content.length; i++) {
                            if (!repeat_block[i]) {
                                repeat_block[i] = _.cloneDeep(block)
                                repeat_block[i].property.forEach(pro => {
                                    pro.content = ''
                                });
                            }
                            repeat_block[i].property.find(pro => {
                                return pro.name == key
                            }).content = property[key].content[i]
                        }
                    }
                }
                jsonData.block = jsonData.block.concat(repeat_block)
                _.remove(jsonData.block, (n) => {
                    return n == b
                })
                return
            }
            this.formatTableEntity(b)
        })
    }
}