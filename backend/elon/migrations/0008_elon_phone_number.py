# Generated by Django 5.0.3 on 2024-03-31 17:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('elon', '0007_elon_adress'),
    ]

    operations = [
        migrations.AddField(
            model_name='elon',
            name='phone_number',
            field=models.CharField(default=1, max_length=11),
            preserve_default=False,
        ),
    ]