//match scientific or decimal number
/^-?\d+(,\d+)*(\.\d+(e\d+)?)?$/

The expression for this can be quite complicated when you take into account fractional numbers, exponents, and more. 

For the above example, the expression '^-?\d+(,\d+)*(\.\d+(e\d+)?)?$' will match a string that starts with an optional negative sign, one or more digits, optionally followed by a comma and more digits, followed by an optional fractional component which consists of a period, one or more digits, and another optional component, the exponent followed by more digits. 

This is not the only solution as there can be many expressions that can match these sets of number strings.



//match phone number
To grab the area code from the phone numbers, we can simply capture the first three digits, using the expression '(\d{3})'. 

However, to match the full phone number as well, we can use the expression '1?[\s-]?\(?(\d{3})\)?[\s-]?\d{3}[\s-]?\d{4}'. This breaks down into the country code '1?', the captured area code '\(?(\d{3})\)?', and the rest of the digits '\d{3}' and '\d{4}' respectively. We use '[\s-]?' to catch the space or dashes between each component.



// emails
To extract the beginning of each email, we can use a simple expression '^([\w.]*)' which will match emails starting with alphanumeric characters including the period. It will match up to the point in the text where it reaches an '@' or '+'. 

Again, you should probably use a framework to match emails!


//matching HTML
It is a best practice to use a proper library to parse html, but to find simple tag names, you can use the expression '<(\w+)', or to capture tag contents, you can use '>([\w\s]*)<', or even attribute values '='([\w://.]*)''.


//matching specific filenames
We are only looking for image files ending with the 'jpg', 'png' and 'gif' file extensions, so we can capture all such filenames using the expression '(\w+)\.(jpg|png|gif)$'.


//Trimming whitespace from start and end of line
We can just skip all the starting and ending whitespace by not capturing it in a line. For example, the expression '^\s*([\w\s.]*)\s*$' will catch only the content.


//Extracting information from a log file
