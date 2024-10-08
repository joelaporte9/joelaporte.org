# Generated by Django 4.2.14 on 2024-07-16 02:29

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='BlogPost',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('slug', models.SlugField()),
                ('category', models.CharField(choices=[('ESP-32', 'Esp32'), ('Raspberry Pi', 'Raspberrypi'), ('Arduino', 'Arduino'), ('Application', 'Applications'), ('Projects', 'Projects')], default='Projects', max_length=50)),
                ('thumbnail', models.ImageField(upload_to='photos/%Y/%m/%d/')),
                ('exerpt', models.CharField(max_length=150)),
                ('month', models.CharField(max_length=3)),
                ('day', models.CharField(max_length=2)),
                ('content', models.TextField()),
                ('featured', models.BooleanField(default=False)),
                ('date_created', models.DateTimeField(blank=True, default=datetime.datetime.now)),
            ],
        ),
    ]
