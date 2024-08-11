from django.db import models
from datetime import datetime
from django.template.defaultfilters import slugify

# Create your models here.
class Categories(models.TextChoices):
    ESP32 = 'ESP32',
    RASPBERRYPI=  'RaspberryPi', 'Raspberry Pi'
    ARDUINO = 'Arduino',
    APPLICATIONS = 'Applications',
    PROJECTS = 'Projects'

class BlogPost(models.Model):
    title = models.CharField(max_length=50)
    slug = models.SlugField()
    category = models.CharField(max_length=50, choices=Categories.choices, default=Categories.PROJECTS)
    thumbnail = models.ImageField(upload_to='photos/%Y/%m/%d/')
    excerpt = models.CharField(max_length=150)
    month = models.CharField(max_length=3)
    day = models.CharField(max_length=2)
    content = models.TextField()
    featured = models.BooleanField(default=False)
    date_created = models.DateTimeField(default=datetime.now, blank=True)

    def save(self, *args, **kwargs):
        orig_slug = slugify(self.title)
        queryset = BlogPost.objects.all().filter(slug__iexact=orig_slug).count()

        # This makes sure that the slug is always unique even with blog posts
        #  That have the same name.
        count = 1 
        slug = orig_slug
        while(queryset):
            slug = orig_slug + '-' + str(count)
            count += 1
            queryset = BlogPost.objects.all().filter(slug__iexact=slug).count()

        self.slug = slug
        
        # Handles the feautured posts.
        if self.featured:
            try:
                #can change filter to get()
                temp = BlogPost.objects.get(featured=True)
                if self != temp:
                    temp.featured = False
                    temp.save()
            except BlogPost.DoesNotExist:
                pass

        super(BlogPost, self).save(*args, **kwargs)

    # Return the Title.
    def __str__(self):
        return self.title



    