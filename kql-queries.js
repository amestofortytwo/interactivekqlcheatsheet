// If you want to copy a query, start from the beginning and not the end.
let json = {
"0": {
"name": "Query for a table",
"code": [
    [
        "SecurityEvents",
        "The table name and nothing else makes you see the whole table."
    ]
],
"tags": [
    "operator",
    "table"
]
},
"1": {
"name": "Query a table and limit output records",
"code": [
    [
        "SigninLogs<br>",
        "Query the whole table."
    ],
    [
        "| ",
        "The Pipe! This symbol is called a pipe, and does exactly what it sounds like - it sends data through, the data you instruct the query to work further on gets sent into this line. "
    ],
    [
        "limit",
        "'limit' will reduce the lines of output to 10 lines which makes the query a lot faster.. Note that 'limit' and 'take' are interchangeable. They do the same thing."
    ],
    [
        " 10",
        "The number of output records to be shown - choose any number relevant to your intentions. It is recommended to keep a pretty low number if you are trying to gain some insight into the database for triage purposes."
    ]
],
"tags": [
    "operator",
    "limit",
    "triage",
    "take"
]
},
"2": {
"name": "Search the current table for content - far and wide",
"code": [
    [
        "SigninLogs",
        "Query the whole table."
    ],
    [
        "<br>| search \"50074\"",
        "the search keyword searches through every column for the string '50074'. This far into the query, we are dealing with a time- and dataconsuming query, but very valuable. Note that 'search' is not case sensitive."
    ],
    [
        "<br>| limit 10",
        "'limit' will reduce the lines of output to 10 lines or records. Note that 'limit' and 'take' are interchangeable. They do the same thing."
    ]
],
"tags": [
    "operator",
    "limit",
    "triage",
    "search",
    "case-insensitive",
    "take"
]
},
"3": {
"name": "Searching every table",
"code": [
    [
        "SigninLogs",
        "Querying the table of interest"
    ],
    [
        "<br>| search 'success'",
        "Now we're scouting for the word 'success' to be in each output record."
    ],
    [
        "<br>| limit 10",
        "'limit' will reduce the lines of output to 10 records. Note that 'limit' and 'take' are interchangeable. They do the same thing."
    ]
],
"tags": [
    "operator",
    "limit",
    "triage",
    "search all tables",
    "take"
]
},
"4": {
"name": "Search case sensitive",
"code": [
    [
        "SigninLogs<br>",
        "Query the whole table."
    ],
    [
        "| search kind = case_sensitive 'OSX'",
        "The search operator is now case sensitive, we've toggled that to 'on' by setting case_sensitive to the 'kind' of search."
    ]
],
"tags": [
    "operator",
    "case-sensitive",
    "search",
    "triage",
    "kind"
]
},
"5": {
"name": "Search through all of the available tables in the current database",
"code": [
    [
        "search 'KeyWord'",
        "By not specifying a table, we will be searching through every table that exists in the current database. It's a powerfull way to search for the needle in the haystack, but it is using a lot of data power to perform and it may render results at a slow pace."
    ]
],
"tags": [
    "operator",
    "search",
    "triage",
    "everywhere",
    "everything"
]
},
"6": {
"name": "Search multiple specific tables",
"code": [
    [
        "search in (SigninLogs, AzureActivity)",
        "Case-insensitive search through thre different tables withing the current database. You choose how many."
    ],
    [
        " 'example@example.com'",
        "The searchword string that you are looking for in those tables."
    ]
],
"tags": [
    "operator",
    "search",
    "multiple tables",
    "triage",
    "specific"
]
},
"7": {
"name": "Search in multiple tables using wildcard",
"code": [
    [
        "search in (Device*) 'Windows'",
        "Searches in all the tables that has a name starting with 'Device' and ends with anything. The star is a wildcard, which has a match with everything."
    ]
],
"tags": [
    "operator",
    "search",
    "wildcard",
    "triage",
    "regex"
]
},
"8": {
"name": "Search inside a specific column for a value",
"code": [
    [
        "SigninLogs<br>",
        "Query the whole table."
    ],
    [
        "| search ",
        "Initialize the searching"
    ],
    [
        "ResultType=='50074'",
        "Set the columnname followed by the keyword you're looking for. The query is now looking for every record where the column ResultType matches '50074' exactly!"
    ]
],
"tags": [
    "operator",
    "search",
    "column",
    "exact",
    "match"
]
},
"9": {
"name": "search for the value anywhere in the text in the specified column",
"code": [
    [
        "SigninLogs<br>",
        "Query the whole table."
    ],
    [
        "| search ",
        "Initialize the searching"
    ],
    [
        "ResultType:'50074'",
        "Set the columnname followed by the keyword you're looking for. The query is now looking for every record where the column ResultType has a partial match with '50074'."
    ]
],
"tags": [
    "operator",
    "search",
    "partial",
    "match"
]
},
"10": {
"name": "Begins with X ends with Y and anything in between",
"code": [
    [
        "Table<br>",
        "Query the whole table."
    ],
    [
        "| search 'FirstName*LastName'",
        "The star '*' inbetween the two words signalises that between those words, anything goes. A usecase for this query is now to look for a full name in signinlogs, where the middlename could be anything."
    ]
],
"tags": [
    "operator",
    "search",
    "regex",
    "triage",
    "wildcard"
]
},
"11": {
"name": "Logical queries with 'search'",
"code": [
    [
        "SigninLogs<br>",
        "Query the whole table"
    ],
    [
        "| search 'Name'", 
        "we are now searching for two things to be true - both sides of the 'and' logical statement. 'Name' has to exist in the same record as either or both values in the preceeding 'or' logical statement."
    ],
    [
        " and ",
        "The keyword 'and' is a logical operator that needs both part of the statement to be true for it to proceed with its current data. In a record, 'Name' has to be existing, and whatever comes after has to be evaluated to true."
    ],
    [
        "('50074' or '50126')",
        "At least one of these values inside the braces has to be true to make this exact statement return true. That is how the logical operator 'or' works - by making sure that at least one of the values exists beofre it returns its state. This is not an explicit or. Explicit or returns false if both values exists. "
    ]
],
"tags": [
    "operator",
    "search",
    "logic",
    "triage",
    "or",
    "and",
    "exclusive",
    "xor"
]
},
"12": {
"name": "Search with regex",
"code": [
    [
        "SigninLogs <br>| search AlternateSignInName",
        "Get your table as usual."
    ],
    [
        " matches regex '[A-Z]'",
        "The syntax for initializing a regex search looks like this. Whatever is inside the quotes (no matter if you use single or double quotes) is the regex. Suggest doing some readup on regex, because regex is really powerfull for looking at patterns!"
    ]
],
"tags": [
    "operator",
    "regex",
    "match",
    "pattern"
]
},
"13": {
"name": "Limit the result set with the 'where' clause",
"code": [
    [
        "SigninLogs<br>| where ",
        "Query the table for a value with the where clause."
    ],
    [
        "TimeGenerated >= ago(2h)",
        "Now we are looking for data WHERE the TimeGenerated is newer or equal to 2 hours ago."
    ]
],
"tags": [
    "operator",
    "where",
    "limit",
    "timegenerated",
    "ago",
    "hours"
]
},
"14": {
"name": "Logical where-clause with AND and OR.",
"code": [
    [
        "SigninLogs<br>| where Identity == 'Poppy the Goldfish'",
        "Query the database where table row has value 'Poppy the Goldfish'."
    ],
    [
        "<br>    and TimeGenerated <= ago(2d)",
        "Now we're looking for the second thing basically on the same line"
    ],
    [
        "<br>    and (AppDisplayName == 'Azure Portal'<br>    or<br>    AppDisplayName == 'Bing'<br>    )",
        "All sides of these connected 'and' statements needs to be true to get some output. The 'or' inside the braces, one of these has to be true to send a 'true' back to the 'and', because braces have precedence over non-braced statements - they will be evaluated first."
    ]
],
"tags": [
    "operator",
    "where",
    "and",
    "or",
    "logical",
    "ago",
    "where"
]
},
"15": {
"name": "Simulate 'search' using positional matches",
"code": [
    [
        "SigninLogs<br>| where * has 'errorCode'",
        "This way you can simulate the search function. It basically says 'Give me everything from SigninLogs where everything has a certain value'."
    ],
    [
        "<br>| where * hasprefix '87.248'",
        "Asks where any(*) columns has the value '87.248' at the beginning"
    ],
    [
        "<br>| where * hassuffix '@outlook.com'",
        "Asks where any(*) column has the value '@gmail.com' at the end."
    ],
    [
        "<br>| where * contains 'OS X 10'",
        "Asks where any(*) column contains the value 'OS X 10' anywhere in its content."
    ]
],
"tags": [
    "operator",
    "where",
    "hassuffix",
    "hasprefix",
    "contains",
    "wide",
    "simulate",
    "search",
    "has"
]
},
"16": {
"name": "Where-clause with regex",
"code": [
    [
        "SigninLogs<br>| where Column matches regex '^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$'",
        "Using this syntax you can leverage the power of regex! Syntax of this query is equal to generating such a query with search instead of where. The regex used here is looking for IPv4 IPs."
    ]
],
"tags": [
    "operator",
    "where",
    "matches",
    "regex",
    "IP",
    "IPv4"
]
},
"17": {
"name": "Count all rows",
"code": [
    [
        "SigninLogs<br>| count",
        "The count keyword works by counting all of the rows in the current table/input and outputs a number."
    ]
],
"tags": [
    "operator",
    "count",
    "occurences"
]
},
"18": {
"name": "Count with summarize on specific column(s)",
"code": [
    [
        "SigninLogs<br>| ",
        "Get the table."
    ],
    [
        "summarize ",
        "Summarize is an aggregated function that lets you work on data and pass it down the pipe. Note that only columns/data you use in summarize are passed on, which means that columns not used are not able to be used after summarize."
    ],
    [
        "count() by ",
        "These keywords tells what you shall count by. Read the whole query like 'From the Table I want to count all the occurences of the Table by ColumnName'"
    ],
    [
        "Identity, Location",
        "Here you choose the column or columns you need to count by. This means that whenever data from this table is equal to one or more, the number will match the number. If you insert multiple columns, all of the values from each columns represent a whole unique 'state', and the state needs to be equal to another to make the counter increment."
    ]
],
"tags": [
    "operator",
    "summarize",
    "count"
]
},
"19": {
"name": "Change name of the count column",
"code": [
    [
        "Table<br>| summarize myNewColumnName = count() by Column",
        "By including the 'myNewColumnName =' the result from the count() function will be added to a column you decide the name of."
    ]
],
"tags": [
    "operator",
    "change",
    "name",
    "summarize",
    "personalize",
    "count"
]
},
"20": {
"name": "Aggregate data with summarize and average (avg).",
"code": [
    [
        "Table<br>| summarize myNewColumnName = count(), myAverageCounterColumn = avg(CounterCol) by Column",
        ""
    ]
],
"tags": [
    "operator"
]
},
"21": {
"name": "bin",
"code": [
    [
        "Table<br>| summarize Column by bin(TimeGenerated, 1d)",
        "Summarizes data into logical groups based on a timerange. This can also be done with numerical values other than dates. The word bin refers to the data being put into their own matching (timegenerated)bin."
    ]
],
"tags": [
    "operator"
]
},
"22": {
"name": "Extend",
"code": [
    [
        "Table<br>| extend calculatedWin = Income * 10.2",
        "Creates a new column based on a value from the current database and multiplies it with 10.2."
    ]
],
"tags": [
    "operator",
    "extend",
    "multiply",
    "math",
    "calculate"
]
},
"23": {
"name": "In combination with concatenation, create custom text output",
"code": [
    [
        "Table<br>| extend calculatedWin = strcat('Current income is', Income')",
        "strcat() makes you able to concatenate strings together, fusing them into a sentence."
    ]
],
"tags": [
    "operator",
    "concatenate",
    "string",
    "extend"
]
},
"24": {
"name": "Choose columns to pipe further",
"code": [
    [
        "Table<br>| project",
        "Choose table"
    ],
    [
        "| project",
        "'project' lets you choose which columns you want to move furhter down the KQL pipe."
    ],
    [
        "Column1<br>,Column2<br>Column3",
        "Columns that are chosen to be piped further into the query."
    ]
],
"tags": [
    "operator",
    "project",
    "pipe",
    "choose"
]
},
"25": {
"name": "Calculate data with project",
"code": [
    [
        "Table<br>",
        "Choose table"
    ],
    [
        "| project myCalc = Column1 * 2",
        "Calculates whatever value is in Columns1 with 2 and stores it in column named 'myCalc'"
    ]
],
"tags": [
    "operator",
    "calculate",
    "extend",
    "simulate",
    "project"
]
},
"26": {
"name": "Remove specific columns from the output with project-away",
"code": [
    [
        "Table<br>",
        "Choose table."
    ],
    [
        "| project-away ",
        "This function lets you remove columns from the output."
    ],
    [
        "Column1, Column2",
        "These two columns will not show up in the output now."
    ]
],
"tags": [
    "operator",
    "project-away",
    "remove",
    "choose"
]
},
"27": {
"name": "Rename a column with project-rename",
"code": [
    [
        "Table<br>",
        "Choose table"
    ],
    [
        "| project-rename uniqueName = Column1",
        "Changing the name of Column1 to 'uniueName'."
    ]
],
"tags": [
    "operator",
    "rename",
    "column"
]
},
"28": {
"name": "Deduplicate output.",
"code": [
    [
        "Table<br>",
        ""
    ],
    [
        "| distinct ",
        "By piping into the distinct keyword you get to choose what columns you should get unique value combination from."
    ],
    [
        "Column1, Column2",
        "Now, every output row does not contain any duplicates"
    ]
],
"tags": [
    "operator",
    "deduplicate",
    "distinct",
    "unique"
]
},
"29": {
"name": "Output the top X result",
"code": [
    [
        "Table<br>",
        ""
    ],
    [
        "| top 10 by Column1 asc",
        "Sorts the Column1 ascending and outputs only the 10 from the top. Descending is achieved by 'desc'"
    ]
],
"tags": [
    "operator"
]
},
"33": {
"name": "Sorting output",
"code": [
    [
        "SigninLogs<br>",
        "Choosing table"
    ],
    [
        "sort by",
        "Sorting by any column or columns is possible. By sorting on multiple columns, the further to the left in the columns listing you go the more precedence they will have. This lets you sort output on the current column where the previous columns has duplicate values. Sorting with this keywords defaults to descending for both text and numeric values, and timestamps goes back in time. You can add values 'asc' or 'desc' to change it or make it explicit respectively."
    ],
    [
        "TimeGenerated<br>",
        "Sorts by TimeGenerated and descends back in time."
    ],
    [
        ", ResultType<br>",
        "Every value from 'TimeGenerated' that are duplicates only in that column will now be sorted descending on ResultType."
    ],
    [
        ", ResultDescription asc",
        "Now we're mixing the sorting order up. For every duplicate values of the previous colun (ResultType), ResultDescription will be sorted ascending. You may mix this up as you want by adding 'asc' or 'desc' after your columns listing."
    ]
],
"tags": [
    "sort",
    "output",
    "scalar operator",
    "order",
    "sort by",
    "order by"
],
"comment": "STARTING SCALAR OPERATORS"
},
"336": {
"name": "Extract parts of a string with regex.",
"code": 
    [
        [
            "SigninLogs<br>", 
            "Get the table!"
        ],
        [
            "| project ", 
            "Only show the relevant following data, for this query we're working on data extracted with extract()."
        ],
        [
            "extract(\"([a-z]{1,5})\"",
            "The extract scalar function takes three parameters, and the first one being what to search for - here we are using regex. What the regex says is 'any charachter from a to z, lower capital and i want every match with a length of between 1 to 5'."
        ],
        [
            ", 1, ",
            "The second parameter tells 'extract' what to return. '1' means to return only the part of the string that matches. setting it to zero makes it return the whole string where there is a match."
        ],
        [
            "tostring(LocationDetails))",
            "This is the string we are searching through with 'extract', it's the third parameter to the scalar function. Now, since this field in the Sentinel database is not a string, we need to convert it to a string using tostring() and putting the column inside the brackets."
        ]
    ],
"tags": 
    [
        "extract", 
        "project", 
        "regex",
        "tostring"
    ]
},
"332": {
"name": "Parse longer texts and store output to column <a target='_blank' href='https://blog.amestofortytwo.com/kusto-detective-agency6/'>Full writeup</a>",
"code": 
    [
        [
            "ChatLogs",
            "Get the table! This query is taken from a writeup of the Kusto Detective series, see the title of the query dropdown to access a link. Here is an example of text in the field we will be parsing: User 'u71fb5058bd' sent message to the channel 'c72cd0fdf88'"
        ],
        [
            "| parse Message with ", 
            "Initializing the 'parse' operator we need to tell it which column we want to parse. In this case, the Message column, 'with' is part of the syntax. Is it here to make it more humanly readable? One could think of parse as a way of telling KQL where to put the cursor to start parsing from."
        ],
        [
            "'User '", 
            "First, we need to set the cursor at the right spot. Knowing where to put it takes some knowledge of the data you want to parse. Here, we know that we will read passed the text 'User ', the next character will now be where the cursor is."
        ],
        [
            " user ", 
            "This is the variable name to store the text we are parsing, and the text that gets stored is the text between the previous cursor set, to the start of the next cursor set..."
        ],
        [
            "' sent message to the channel '", 
            "...which is here. Now we are moving the cursor to the end of the sentence of this and we will parse out whatever is left from the next character. "
        ],
        [
            " sent_to_channel<br>", 
            "And then we store that in this variable."
        ],
        [
            "| parse Message with 'User ' user1 ' left the channel ' left_channel<br>", 
            "The same procedure here as the first one explained in depth."
        ],
        [
            "| parse Message with 'User ' user2 ' logged out from the ' logged_out_from<br>", 
            "The same procedure here as the first one explained in depth."
        ],
        [
            "| parse Message with 'User ' user3 ' joined the channel ' joined_channel<br>", 
            "The same procedure here as the first one explained in depth."
        ],
        [
            "| parse Message with 'User ' user4 ' logged in from ' loginIP<br>", 
            "The same procedure here as the first one explained in depth."
        ],
        [
            "| parse Message with 'User ' user5 ' sent message to the user ' sent_to_user<br>", 
            "The same procedure here as the first one explained in depth."
        ],
        [
            "| extend TheUser = strcat(user, user1, user2, user3, user4, user5) <br>", 
            "The same procedure here as the first one explained in depth."
        ],
        [
            "| project-away user, user1, user2, user3, user4, user5", 
            "Removed unecessary data with project-away."
        ]
    ],
"tags": 
    [
        "kustodetectiveagency2022", 
        "parse", 
        "extend"
    ]
}
,

"37": {
"name": "Kusto Detective Agency 2022 - Onboarding. <a target='_blank' href='https://blog.amestofortytwo.com/kusto-detective-agency1/'>Full writeup</a>",
"code": [
    [
        "Onboarding<br>| summarize sum(Score)",
        "Basic and simple query to sum up all numeric values."
    ]
],
"tags": [
    "kustodetectiveagency2022",
    "onboarding"
]
},
"38": {
"name": "Kusto Detective Agency 2022 - Rookie - The rarest book is missing. <a target='_blank' href='https://blog.amestofortytwo.com/kusto-detective-agency2/'>Full writeup</a>",
"code": [
    [
        "Shelves<br>",
        "Fetching the whole table. "
    ],
    [
        "| mv-expand rf_id = rf_ids to typeof(string) <br>",
        "mv-expand takes the array that is in 'rf_ids' and expands the table records (rows) by adding an entry for each value. This means that the rest of the columns will remain the same for all of the array values, and get the advantage of individually querying them. Each of the element is then converted into a string with typeof(string)."
    ],
    [
        "| lookup Books on rf_id<br>",
        "lookup has a similar effect like join. It combines two tables: Books and rf_id. The type of lookup here is default, meaning leftouter. lookup differs from join by not having repeating columns from the $right table and it assumes that $left table is the larger table. So what we are doing here is, we are looking up all the information from Books and broadcasting it based on rf_id from $right to $left."
    ],
    [
        "| project shelf, author, book_title, total_weight, weight_gram<br>",
        "Projecting these through the pipe to reduce amount of data and make it more accurate towards what we're aiming for."
    ],
    [
        "summarize bookWeight = sum(weight_gram), claimedWeight = min(total_weight) by shelf<br>",
        "We now know what weight every book weighs and we know the total weight, here we do calculations by each shelf and sums up the weight_gram (the weight of each book) of the shelf. claimed_weight is self-explanatory knowing that there are some values that are slightly off, what makes the accuracy of the weight different."
    ],
    [
        "extend difference = (claimedWeight - bookWeight)<br>",
        "Working further on the previous calculations we now expect to see some output. Most of the books create differences due to the inaccuracy of the measurement, but if a whole book is missing the value will stand out."
    ],
    [
        "order by difference desc",
        "Ordering the output descending makes the largest number arise to the top - and thats out goal!"
    ]
],
"tags": [
    "kustodetectiveagency2022",
    "rookie",
    "mv-expand",
    "typeof()",
    "sum()",
    "min()",
    "summarize",
    "extend",
    "order by"
]
},
"39": {
"name": "Kusto Detective Agency 2022 - Detective 1 - Election fraud? <a target='_blank' href='https://blog.amestofortytwo.com/kusto-detective-agency3/'>Full writeup</a>",
"code": [
    [
        "Votes<br>",
        "Fetching the whole table. "
    ],
    [
        "| summarize hits = count() by bin(Timestamp, 5s), via_ip, vote<br>",
        "By summarizing by a timerange of 5 seconds, via_ip and vote we get the value of how many unique entries/votes there are on those columns. The 5 seconds value was figured out by viewing 'by eye' for a pattern on the timestamps, and there was a iterative pattern based on IP addresses every 5 seconds."
    ],
    [
        "| where hits < 2<br>",
        "One could assume that a voting would not take place more than twice in the 5 seconds, from the same ip and for the same candidate. If this is a miss, it will not be a big miss and we might still get to the correct answer as numbers are rounded for the delivery of the task. Less than two is considered to be 'normal' traffic'."
    ],
    [
        "| summarize Count = count() by vote<br>",
        "Next we are counting all of the votes. Note, that summarize only brings on the columns that are being worked on, so only Count and vote are reachable right after this statement."
    ],
    [
        "| as hint.materialized=true ",
        "This part makes you able to store the current dataset you have piped thus far for later retrieval without storing it by using 'let'. The output of this is cached in memory. Also, this acts similar to the function materialize(), which on the other hand often uses the let statement."
    ],
    [
        " T <br>",
        "This is now the variable name of the current state of the query."
    ],
    [
        "| extend Total = toscalar(T <br>| summarize sum(Count))<br>",
        "Now we are adding a new column that will hold the sum of Count - the total Count."
    ],
    [
        "    | project vote, Percentage = round(Count*100.0 / Total, 1), Count<br>",
        "Project is also usefull for calculation, as well as we reduce the amount of data we are sending through the pipeline. This is basic math to get the percentage."
    ],
    [
        "| order by Count",
        "Order by Count - defaults to descending."
    ]
],
"tags": [
    "kustodetectiveagency2022"
]
},
"40": {
"name": "Kusto Detective Agency 2022 - Detective 1 - Bank Robbery <a target='_blank' href='https://blog.amestofortytwo.com/kusto-detective-agency4/'>Full writeup</a>",
"code": [
[
    "let afterRobbery = Traffic<br>", 
    "The let statement tells KQL to handle everything that comes after up until a semicolong to be treated and stored as a variable for later retrieval and use. And we are starting out by setting the variable equal to the Traffic."],
[
    "| where Timestamp between(datetime(2022-10-16 08:31:00) .. datetime(2022-10-16 08:40:00))<br>", 
    "Next we are looking for all data that resides in between the given datetimes. The time we are looking at here are the times for when the robbers left the scene and when the police arrived (in other words, when we are sure they have left the scene). The robbers cars has to be between these timedates. But where are they?"
],
[
    "| summarize arg_min(Timestamp, *) by VIN<br>",
    "Summarizing with the arg_min function, we are able to get the cars that left the scene first within our timerange (first parameter). The second parameter inside arg_min is the star, the wildcard, the everything. It is basically where you tell the function what kind of columns you want to bring on through the query - like it's own internal pipe. And least, we summarize by VIN."
],
[
    "| where Ave == 157<br>",
    "And up until now, we have only been looking at a timerange (between()), we know that after 08:31:00 and 08:40:00 the robbers left the Avenue 157 and..."
],
[
    "| where Street == 148<br>",
    "... the street 148. These two last lines could have been combined into a logical 'and'."
],
[
    "| summarize make_list(VIN);<br>",
    "Next up we need to use summarize to store our output into a list so that we could easily retrieve it afterwards. I like the simplicity KQL gives of asking for occurences inside a list. Lastly for this part of the let statement (variable building), we are telling KQL to stop building the variable by a semicolon. So, to sum this variable up, we have now stored every car that was on a certain avenue and street at the beginning of a very interesting timeframe, and we know that the robbers are among the cars. We have reduced our dataset immensely!"
],
[
    "Traffic<br>",
    "Let's use the variable to get the related information of the vehicles of interest on the full dataset."
],
[
    "| summarize arg_max(Timestamp, *) by VIN<br>",
    "Now this is an interesting approach! We know by the text that the cars have stopped, because there aren't any cameras cathing their movement anylonger. Which means that we can look at all the data and see where every car in the whole table was last seen. And we know that there are more than 1 car, they probably had one each, making it 3 cars. arg_max lets us see the latest entry based on Timestamp by VIN. Like arg_min, we're sending through every column."
],
[
    "| where VIN in (afterRobbery)",
    "And now we're reducing the data to match our previous findings and we can see three cars that has stopped on the same avenue and street! Those are the robbers!"
]
],
"tags": [
    "arg_max", 
    "arg_min", 
    "kustodetectiveagency2022", 
    "let",
    "make_list"
]
},
"42": {
"name": "Kusto Detective Agency 2022 - Detective 1 - Bank Robbery - Rendering a path-map! <a target='_blank' href='https://blog.amestofortytwo.com/kusto-detective-agency4/'>Full writeup</a>",
"code": [
[
    "Traffic<br>", 
    "Get the whole table."
],
[
    "| where VIN in ('XC2952A7FB', 'RI8E6C4294', 'CXDE148D63')<br>", 
    "Reduce the set to all of the known VIN's of the robbers."
],
[
    "| summarize Ave = make_list(Ave), Street = make_list(Street) by VIN<br>", 
    "Summarize and make a list to make the colors in the rendering stand out and we're summarizing on the VINs"
],
[
    "| render scatterchart",
    "This is rendering a scatterchart for vizualisation of data and for this task it proves to be really interesting, because it shows the exact path each driver has made before arriving at the hiding spot."
]
],
"tags": 
[
    "render", 
    "scatterchart", 
    "summarize",
]
},
"423": {
"name": "Kusto Detective Agency 2022 - Detective 3 - Ready to play? - Prime numbers <a target='_blank' href='https://blog.amestofortytwo.com/kusto-detective-agency5/'>Full writeup</a>",
"code": [
[
    "Primes<br>", 
    "Fetching the whole Primes table which contains a lot of prime numbers for use in this task. "
],
[
    "| serialize <br>", 
    ""
],
[
    "| join Primes on Prime<br>", 
    ""
],
[
    "     | serialize<br>", 
    ""
],
[
    "    | extend nextPrime = next(Prime)<br>", 
    ""
],
[
    "| extend result = nextPrime + Prime + 1<br>", 
    ""
],
[
    "| join kind=inner Primes on $left.result == $right.Prime<br>",
    ""
],
[
    "| summarize maxPri = max(result)<br>",
    ""
],
[
    "| project TheAnswer=strcat(\"https://aka.ms/\", maxPri)<br>",
    ""
]
],
"tags": 
[
    "", 
    "", 
    ""
]
},   

"424": {
"name": "Kusto Detective Agency 2022 - Detective 3 - Ready to play? <a target='_blank' href='https://blog.amestofortytwo.com/kusto-detective-agency5/'>Full writeup</a>",
"code": [
[
    "let h3Tree = nyc_trees<br>", 
    ""
],
[
    "| extend  h3Cell=geo_point_to_h3cell(longitude, latitude, 10);<br>", 
    ""
],
[
    "let cells = h3Tree| where spc_common has_any ('Schubert', 'Turkish', 'American')<br>",
    ""
],
[
    "| project h3Cell, spc_common<br>", 
    ""
],
[
    "| evaluate pivot(spc_common): (h3Cell:string , [\"'Schubert' chokecherry\"]:int, ['Turkish hazelnut']:int, ['American linden']:int)<br>", 
    ""
],
[
    "| where [\"'Schubert' chokecherry\"] == 4 and ['Turkish hazelnut'] > 0 and ['American linden'] > 0;<br>",
    ""
],
[
    "h3Tree<br>", 
    ""
],
[
    "| join kind=inner cells on h3Cell<br>", 
    ""
],
[
    "| where spc_common == 'American linden'<br>",
    ""
],
[
    "| summarize arg_min(tree_dbh, *)<br>",
    ""
],
[
    "| project latitude, longitude<br>",
    ""
]
],
"tags": ["", "", ""]
}



}
        createSetOfTags(json);
        autocomplete(document.getElementById('myInput'), createSetOfTags(json));


        // Use the below code to make keys incremented and show up in the gui in the order you write it here. Copy it from console paste it on top of the previous.
        /*
var newJson = {};
var counter = 0;

for (var key in json) {
newJson[counter] = json[key];
counter++;
}

json = newJson;
console.log(json); */