$localize` pre-p ${ // SOURCE: "/i18n_message_element_whitespace.ts" "\\n  pre-p\\n  "
…
"\uFFFD#2\uFFFD" // SOURCE: "/i18n_message_element_whitespace.ts" "<p>"
…
}:START_PARAGRAPH: in-p ${ // SOURCE: "/i18n_message_element_whitespace.ts" "\\n    in-p\\n  "
…
"\uFFFD/#2\uFFFD" // SOURCE: "/i18n_message_element_whitespace.ts" "</p>"
…
}:CLOSE_PARAGRAPH: post-p\n // SOURCE: "/i18n_message_element_whitespace.ts" "\\n  post-p\\n"
`…

.ɵɵelementStart(0, "div") // SOURCE: "/i18n_message_element_whitespace.ts" "<div i18n>"
…
.ɵɵi18nStart(1, 0) // SOURCE: "/i18n_message_element_whitespace.ts" "<div i18n>"
…
.ɵɵelement(2, "p") // SOURCE: "/i18n_message_element_whitespace.ts" "<p>"
…
.ɵɵi18nEnd() // SOURCE: "/i18n_message_element_whitespace.ts" "</div>'"
…
// TODO: Work out how to fix the broken segment for the last item in a template
.ɵɵelem // SOURCE: "/i18n_message_element_whitespace.ts" "</div>'"
