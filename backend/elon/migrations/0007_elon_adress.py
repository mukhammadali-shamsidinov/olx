# Generated by Django 5.0.3 on 2024-03-31 16:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('elon', '0006_elon_poster_elon_price'),
    ]

    operations = [
        migrations.AddField(
            model_name='elon',
            name='adress',
            field=models.TextField(default=1),
            preserve_default=False,
        ),
    ]
