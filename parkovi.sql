PGDMP     6    ,    
        
    y            Parkovi    14.0    14.0                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16394    Parkovi    DATABASE     T   CREATE DATABASE "Parkovi" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'C';
    DROP DATABASE "Parkovi";
                postgres    false            �            1259    16404    jezero    TABLE     �   CREATE TABLE public.jezero (
    "nazivJezera" character varying NOT NULL,
    np character varying NOT NULL,
    "velicinaJezera" double precision,
    dubina integer
);
    DROP TABLE public.jezero;
       public         heap    postgres    false            �            1259    16418    parkovi    TABLE     %  CREATE TABLE public.parkovi (
    id integer NOT NULL,
    naziv character varying NOT NULL,
    vrsta character varying,
    velicina double precision,
    osnovan integer,
    rijeka character varying,
    regija character varying,
    stranica character varying,
    najvisi_vrh integer
);
    DROP TABLE public.parkovi;
       public         heap    postgres    false            �            1259    16431    parkovijezera    TABLE     �  CREATE TABLE public.parkovijezera (
    id integer,
    naziv character varying,
    vrsta character varying,
    velicina double precision,
    osnovan integer,
    rijeka character varying,
    regija character varying,
    stranica character varying,
    najvisi_vrh integer,
    "nazivJezera" character varying,
    np character varying,
    "velicinaJezera" double precision,
    dubina integer
);
 !   DROP TABLE public.parkovijezera;
       public         heap    postgres    false            �          0    16404    jezero 
   TABLE DATA           M   COPY public.jezero ("nazivJezera", np, "velicinaJezera", dubina) FROM stdin;
    public          postgres    false    209   �       �          0    16418    parkovi 
   TABLE DATA           m   COPY public.parkovi (id, naziv, vrsta, velicina, osnovan, rijeka, regija, stranica, najvisi_vrh) FROM stdin;
    public          postgres    false    210   �       �          0    16431    parkovijezera 
   TABLE DATA           �   COPY public.parkovijezera (id, naziv, vrsta, velicina, osnovan, rijeka, regija, stranica, najvisi_vrh, "nazivJezera", np, "velicinaJezera", dubina) FROM stdin;
    public          postgres    false    211          n           2606    16410    jezero jezero_pkey 
   CONSTRAINT     [   ALTER TABLE ONLY public.jezero
    ADD CONSTRAINT jezero_pkey PRIMARY KEY ("nazivJezera");
 <   ALTER TABLE ONLY public.jezero DROP CONSTRAINT jezero_pkey;
       public            postgres    false    209            p           2606    16424    parkovi parkovi_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.parkovi
    ADD CONSTRAINT parkovi_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.parkovi DROP CONSTRAINT parkovi_pkey;
       public            postgres    false    210            �   �   x���1�@E�Sx��`��1RQٌ�1�n YԂXy��r���{��g
m�4�Jw�5���>�b�Wd��B���g9�k.�s!��s�ܯ�3��'<�|8��b�}y�����q'*����6�a'�0��Rda����%R��M7֖��{�ҏ��n��I_�t� 	f�nD| ��J      �   l  x���=n� ������1�6;6Jd�R�,�A��v�w�!z��^j5ݪ:+���~ �hU}2
6%P�9^P�n�����^8C�?,���w��vT;����҈J�F4FE�6�M c(�Uk���$���p=yQXY���$U�����D)��~�{�*��s�i�#����r�>?L�gB`]=����x3IL)b�nj9��,w~v�l��c$E�B72���f�x?���fet?�I�r�;�;i?%J3�9<	�Q���z1�S<�(*�l�0��E�E-ߥ�$<�nס�����J�+-�	'I��gջ�j���.���v���I#,)�ᥖ��F-^e#wj�}`7:��y)��F㤆�l1B��@M�      �     x�ŕMn�0�ףS��IQ��.�E�N��*�&l�2%P��]���s���b�mҠ
ZQ�{��p�`Z���0�X���n��jS�FX�m�|�w����U�ֶm�%Z۱UQ5�G���H��T��*佴U�CP� I#�}������ẠfB�Ҩ���4E�;'����"��x�d.�k1W�q�c̀F9�J�vj���a[ �y�rv@�TV��y��B�Q/N��Ei����Oa�S]���(́f1~V+��N,^%î^d �o�nWe!��d	6���oe��'CqY�T�5΁�� '��[�̉�S�`MU)�r(�<�0�:����	P�O�1�[�8o�y,[��"��G!;i��r^�U{������R�����W���=��r��e�3�qDs;�;+�����ZRo���r�9iL�#��1�E\���᜹�o�K�m{5����(s�D��>*J�C&�
�C������ª���}��v5�U��]�]�>���^������ؚ�C)
J?d4�;s�CQ�}�     