# Generated by Django 5.0.3 on 2024-03-31 16:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('elon', '0005_alter_elonimages_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='elon',
            name='poster',
            field=models.ImageField(default=1, upload_to='poster/'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='elon',
            name='price',
            field=models.DecimalField(decimal_places=2, default=1, max_digits=10),
            preserve_default=False,
        ),
    ]