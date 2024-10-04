# DSM-CORE
Data Science for Materials - a Collection of Open Resources for Education

The DSM-CORE repository is an assembly of teaching materials for applied data science and machine learning in the field of materials science. As many groups are developing similar courses and materials we hope to facilitate sharing of materials and ideas by providing an easy place to upload new content and search through past materials. Note that the materials themselves are not hosted here and therefore contributors are asked to provide a link to their own hosting platform of choice. After the initial creation of the resource here, there should be minimal to no future updates that are needed unless the content changes drastically and the initial description and tags no longer match.

# Goals
1. Easy maintenance. Information provided here should be a general overview to give users an idea of what is the content, it's scope, and structure.
3. Everything should link out to where it is being maintained elsewhere with a permanent link. Periodically we will check for stale links and reach out for an update.

# Contribute by creating a new resource ".md" file from the template
1. Download the [Template](https://github.com/bafflerbach/DSM-CORE/blob/main/template-resource.md)
3. Fill in the main sections (Everything with UPDATE) of the template with links to and a brief description of the materials being shared. Note that this is ideally a persistant link that will automatically include any future updates to materials.
Here are a few resources that might be usefulf for editing in markdown:
[basic markdown syntax](https://markdownguide.offshoot.io/basic-syntax/)  
[And more complex syntax](https://www.markdownguide.org/extended-syntax/)  
[And the Specific Style layout that is used](https://pages-themes.github.io/leap-day/)
4. Save the file be: yourlastname-shortitle.md
5. Create a Fork of the repo
6. Navigate to the _resources directory in your new fork and select "Add File" -> "Upload Files" and upload your ".md" file
7. Commit your upload
8. Your repo should now say "1 commit ahead...", select "Contribute" -> "Open Pull Request". This will then need to be accepted before it will show up on the webpage
9. Once you see a confirmation that your pull request has been merged, check to verify that your resource is showing up correctly
10. If you need to make any edits you can edit your file directly via the webpage on your forked branch and submit another pull request.

# [View Resource Collection](https://bafflerbach.github.io/DSM-CORE/resource-collection)

## Search Resource Collection
<form action="{{ site.baseurl }}/search.html" method="get">
  <label for="search-box">Search</label>
  <input type="text" id="search-box" name="query">
  <input type="submit" value="search">
</form>
