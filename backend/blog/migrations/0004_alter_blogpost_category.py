# Generated by Django 5.0.7 on 2024-08-03 19:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0003_alter_blogpost_category'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blogpost',
            name='category',
            field=models.CharField(choices=[('ESP32', 'Esp32'), ('Raspberry Pi', 'Raspberrypi'), ('Arduino', 'Arduino'), ('Applications', 'Applications'), ('Projects', 'Projects')], default='Projects', max_length=50),
        ),
    ]
