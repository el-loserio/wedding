module Jekyll
    class SectionTag < Tags::IncludeRelativeTag

        def render(context)
            rendered = super(context)
            "<section markdown='1'>\n#{rendered}\n</section>"
        end

    end
end

Liquid::Template.register_tag('section', Jekyll::SectionTag)
