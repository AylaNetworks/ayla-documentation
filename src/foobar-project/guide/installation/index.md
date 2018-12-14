---
title: Installation
layout: foobar-project.html
a: block
---

1. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.
1. Excepteur sint occaecat cupidatat non `var example = true` proident.
1. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
```
    $(function() {
        $("#event-streams").delegate('tr td:not(.chk)', "click", function(e) {
            let tr1 = $(this).parent()
            let tr2 = $(tr1).next()
            let key = $(tr1).find('input').val()
            let pre = $(tr2).find('pre')
            $(pre).empty()
            $(pre).append(JSON.stringify(streams[key], streamPropFilter, 2))
            $(tr2).toggle()
        })
    })
```
1. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.
![diagram](diagram.png)
1. Temporibus autem quibusdam et aut officiis debitis aut rerum.
1. officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis.
